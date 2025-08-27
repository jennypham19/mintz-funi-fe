import InputSearch from "@/components/SearchBar";
import { Alert, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import AddAccountCard from "./components/AddCard";
import UserCard from "./components/UserCard";
import Grid from "@mui/material/Grid2";
import { UserProfile } from "@/types/user-types";
import { activeUser, deleteUser, getListUsers, getUser, resetUser, unactiveUser, UserPayload } from "@/services/user-service";
import CustomPagination from "@/components/Pagination/CustomPagination";
import DialogDetailUser from "./components/DialogDetailUser";
import DialogOpenConfirmAccount from "./components/DialogOpenConfirmAccount";
import useNotification from "@/hooks/useNotification";
import DialogAddAccount from "./components/DialogAddAccount";
import DialogEditAccount from "./components/DialogEditAccount";
import DialogConfirmSuccess from "./components/DialogConfirmSuccess";
import { debounce } from "lodash";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FilterTabs from "./components/FilterTabs";
import DialogConfirmResetSuccess from "./components/DialogConfirmResetSuccess";
import Page from "@/components/Page";
import DialogAttachPermission from "./components/DialogAttachPermission";
import { IStatus } from "@/types/user";
import { Security, WorkOutline } from "@mui/icons-material";

export interface DataRoleUserProps {
    id: number | string;
    value: number | string,
    label: string,
    icon: React.ReactNode
}

const DataRoleUser: DataRoleUserProps[] = [
    {
        id: 1,
        value: 'all',
        label: 'Tất cả',
        icon:<FilterAltOutlinedIcon fontSize="small"/>
    },
    {
        id: 2,
        value: 'mode',
        label: 'Quản lý',
        icon:<Security color="secondary" fontSize="small"/>
    },
    {
        id: 3,
        value: 'employee',
        label: 'Nhân viên',
        icon:<WorkOutline color="info" fontSize="small"/>
    },
]

const STATUS_USER: IStatus[] = [
    {
        id: 1,
        value: 'all',
        label: 'Tất cả',
    },
    {
        id: 2,
        value: 0,
        label: 'Đang hoạt động',
    },
    {
        id: 3,
        value: 1,
        label: 'Không hoạt động',
    },
]

const ManagementAccount: React.FC = () => {
    const notify = useNotification();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null);
    const [listUsers, setListUsers] = useState<UserProfile[]>([]);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [idUser, setIdUser] = useState<string | number>('');
    const [viewMode, setViewMode] = useState<'all' | 'mode' | 'employee'>('all');

    const [loading, setLoading] = useState(false);
    const [openAddAccount, setOpenAddAccount] = useState(false);
    const [openEditAccount, setOpenEditAccount] = useState(false);
    const [openUnactiveAccount, setOpenUnactiveAccount] = useState(false);
    const [openUnactiveSuccess, setOpenUnactiveSuccess] = useState(false);
    const [openResetAccount, setOpenResetAccount] = useState(false);
    const [openDeleteAccount, setOpenDeleteAccount] = useState(false);
    const [openDeleteSuccess, setOpenDeleteSuccess] = useState(false);
    const [openResetSuccess, setOpenResetSuccess] = useState(false);
    const [openDialogDetail, setOpenDialogDetail] = useState(false);
    const [openActiveAccount, setOpenActiveAccount] = useState(false);
    const [openConfirmActiveSuccess, setOpenConfirmActiveSuccess] = useState(false);
    const [openAttachPermission, setOpenAttachPermission] = useState(false);
    const [status, setStatus] = useState<any>('all')

    const getUsers = useCallback(async(currentPage: number, currentSize: number, role?: string, status?: string | number, currentSearchTerm?: string) => {
        setLoading(false);
        try {
            const res = await getListUsers(currentPage, currentSize,role, status, currentSearchTerm);
            setTotal(res.totalCount);
            const data = res.data as any as UserProfile[];
            setListUsers(data)
        } catch (error: any) {
            setError(error.message);
            setListUsers([])
        }finally{
            setLoading(false)
        }
    },[])

    const debounceGetUsers = useMemo(
        () => debounce((currentPage: number, currentSize: number,role?: string, status?: string | number, currentSearchTerm?: string) => {
            getUsers(currentPage, currentSize, role, status, currentSearchTerm);
        }, 500),
        [getUsers]
    );
    

    useEffect(() => {
        if(searchTerm || (searchTerm && status)){
            debounceGetUsers(page, rowsPerPage, viewMode, status, searchTerm)
        }else{
            debounceGetUsers.cancel(); // huỷ mọi pending call
            getUsers(page, rowsPerPage, viewMode, status)
        }
    },[page, rowsPerPage, searchTerm, viewMode, status])

    // reset page về 0 khi đổi viewMode hoặc status
    useEffect(() => {
        setPage(0)
    }, [viewMode, status])

    const handleSearch = (value: string) => {
        setSearchTerm(value.trim());
        setPage(0)
    }

    const handleAddAccount = () => {
        setOpenAddAccount(true)
    }

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
    }

    const handleClick = async(id: string | number) => {
        try {
            const res = await getUser(id);
            const data = res as any as UserProfile;
            setUser(data)
            setOpenDialogDetail(true)
        } catch (error) {
            setUser(null)
        }
    }

    const handleOpenUnactive = (id: string | number, user: UserProfile) => {
        setOpenUnactiveAccount(true)
        setIdUser(id)
        setUser(user)
    }
    
    const handleUnactive = async() => {
        try {
            const data: UserPayload = {
                is_actived: 1
            }
            await unactiveUser(idUser, data);
            setOpenUnactiveAccount(false)
            setOpenUnactiveSuccess(true)
        } catch (error: any) {
            notify({
                message: error.message,
                severity: 'error' 
            })
        }
    }

    const handleOpenDelete = (id: string | number, user: UserProfile) => {
        setOpenDeleteAccount(true);
        setIdUser(id)
        setUser(user)
    }

    const handleDelete = async() => {
        try {
            await deleteUser(idUser);
            setOpenDeleteAccount(false);
            setOpenDeleteSuccess(true);
        } catch (error: any) {
            notify({
                message: error.message,
                severity: 'error' 
            })
        }
    }

    const handleOpenEdit = (id: string | number) => {
        setOpenEditAccount(true);
        setIdUser(id)
    }

    const handleOpenReset = (id: string | number, user: UserProfile) => {
        setOpenResetAccount(true)
        setIdUser(id)
        setUser(user)
    }

    const handleReset = async() => {
        try {
            const res = await resetUser(idUser);
            const data = res.data as any as UserProfile;
            setUser(data);
            setOpenResetAccount(false)
            setOpenResetSuccess(true)
        } catch (error: any) {
            notify({
                message: "Reset mật khẩu thất bại",
                severity: 'error' 
            })
        }
    }

    const handleOpenActive = (id: string | number, user: UserProfile) => {
        setOpenActiveAccount(true)
        setIdUser(id)
        setUser(user)
    }

    const handleActive = async() => {
        try {
            const data: UserPayload = {
                is_actived: 0
            }
            await activeUser(idUser, data)
            setOpenActiveAccount(false)
            setOpenConfirmActiveSuccess(true)
        } catch (error: any) {
            notify({
                message: error.message,
                severity: 'error'
            })
        }
    }


    const handleOpenAttachPermission = (user: UserProfile) => {
        setOpenAttachPermission(true)
        setUser(user)
    }

    const handleChangeStatus = (status: any) => {
        setStatus(status)
    }

    return(
        <Box p={2}>
            <Page title="Quản lý tài khoản">
            {!openAddAccount && (
                <Box px={1.5}>
                    {loading && (
                        <Box display='flex' justifyContent='center' my={3}>
                            <CircularProgress/>
                        </Box>
                    )}
                    {error && !loading && (
                        <Alert severity="error" sx={{ my: 2}}>{error}</Alert>
                    )}
                    {!loading && !error && (
                        <>
                            <InputSearch
                                initialValue={searchTerm}
                                placeholder="Tìm kiếm"
                                onSearch={handleSearch}
                            >
                                <Box mt={{ xs: 2, md: 0}} ml={{ xs: 0, md: 2}} sx={{ width: { xs: '100%', md: 300}}}>
                                    <FormControl fullWidth
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #1C1A1B",
                                            borderRadius: "8px",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "1px solid #1C1A1B",
                                            },
                                        }}
                                    >
                                        <InputLabel sx={{ fontSize: '14px', mt: 0.5}} id='status-label'>Trạng thái</InputLabel>
                                        <Select
                                            labelId="status-label"
                                            id="status"
                                            label='Tiến độ'
                                            name="status"
                                            value={status}
                                            onChange={(event: SelectChangeEvent<any>) => handleChangeStatus(event.target.value)}
                                            sx={{
                                                '& .MuiSelect-select': {
                                                    padding: '12px 14px'
                                                }
                                            }}
                                        >
                                            {STATUS_USER?.map((item, index) => {
                                                return(
                                                    <MenuItem key={index} value={item.value}>
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </InputSearch>
                            <Box mt={2}>
                                <FilterTabs data={DataRoleUser} viewMode={viewMode} onChange={setViewMode} />
                            </Box>
                            <Grid container spacing={1.5} pt={2}>
                                {(viewMode === 'all') && (
                                    <Grid size={{ xs:12, sm:6, md:4}}>
                                        <AddAccountCard title="Thêm tài khoản" handleAdd={handleAddAccount} />
                                    </Grid>
                                )}
                                {listUsers.length === 0 ? (
                                    <Typography sx={{ mx: 2, mt: 3}} variant="h6">Không tồn tại bản ghi nào cả</Typography>
                                ) : (
                                    listUsers.map((user, index) => (
                                    <Grid size={{ xs:12, sm:6, md:4}} key={index}>
                                        <UserCard
                                            userProfile={user}
                                            handleClick={handleClick}
                                            handleUnactive={handleOpenUnactive}
                                            handleEdit={handleOpenEdit}
                                            handleReset={handleOpenReset}
                                            handleActive={handleOpenActive}
                                            handleAttach={handleOpenAttachPermission}
                                            handleDelete={handleOpenDelete}
                                        />
                                    </Grid>
                                )))}
                            </Grid> 
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <CustomPagination
                                    count={total}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                    onPageChange={handlePageChange}
                                    sx={{ mt: 1.5}}
                                />
                            </Box>                       
                            </>
                        )}
                                
                    </Box>
                )}
            </Page>
            {openAddAccount && (
                <DialogAddAccount
                    onBack={() => {
                        setOpenAddAccount(false)
                        getUsers(page, rowsPerPage, viewMode)
                    }}
                />
            )}
            {openAttachPermission && user && (
                <DialogAttachPermission
                    open={openAttachPermission}
                    onClose={() => {
                        setOpenAttachPermission(false)
                    }}
                    user={user}
                />
            )}
            {openEditAccount &&  (
                <DialogEditAccount
                    open={openEditAccount}
                    onClose={() => {
                        setOpenEditAccount(false)
                        getUsers(page, rowsPerPage, viewMode)
                    }}
                    userId={idUser}
                />
            )}
            {openDialogDetail && user &&  (
                <DialogDetailUser
                    open={openDialogDetail}
                    onClose={() => {
                        setOpenDialogDetail(false)
                    }}
                    userDetail={user}
                />
            )}
            {openUnactiveAccount && user && (
                <DialogOpenConfirmAccount
                    open={openUnactiveAccount}
                    handleClose={() => {
                        setOpenUnactiveAccount(false)
                    }}
                    handleAgree={handleUnactive}
                    title={`Bạn chắc chắn muốn vô hiệu hóa tài khoản ${user.username} này chứ? Tài khoản này sẽ bị vô hiệu hóa`}
                />
            )}
            {openUnactiveSuccess && (
                <DialogConfirmSuccess
                    open={openUnactiveSuccess}
                    handleClose={() => {
                        setOpenUnactiveSuccess(false)
                        getUsers(page, rowsPerPage, viewMode)
                    }}
                    title="Xin chúc mừng. Bạn vừa vô hiệu hóa tài khoản thành công"
                />
            )}
            {openDeleteAccount && user && (
                <DialogOpenConfirmAccount
                    open={openDeleteAccount}
                    handleClose={() => {
                        setOpenDeleteAccount(false)
                    }}
                    handleAgree={handleDelete}
                    title={`Bạn chắc chắn muốn xóa tài khoản ${user?.username} này chứ? Tài khoản này sẽ bị xóa vĩnh viễn`}
                />
            )}
            {openDeleteSuccess && (
                <DialogConfirmSuccess
                    open={openDeleteSuccess}
                    handleClose={() => {
                        setOpenDeleteSuccess(false)
                        getUsers(page, rowsPerPage, viewMode)
                    }}
                    title="Xin chúc mừng. Bạn vừa xóa tài khoản thành công"
                />
            )}
            {openResetAccount && user && (
                <DialogOpenConfirmAccount
                    open={openResetAccount}
                    handleClose={() => {
                        setOpenResetAccount(false)
                    }}
                    handleAgree={handleReset}
                    title={`Xác nhận đặt lại mật khẩu cho nhân viên ${user.fullName}, tài khoản: ${user.username}`}
                />
            )}
            {openResetSuccess && user && (
                <DialogConfirmResetSuccess
                    open={openResetSuccess}
                    handleClose={() => {
                        setOpenResetSuccess(false)
                    }}
                    user={user}
                />
            )}
            {openActiveAccount && (
                <DialogOpenConfirmAccount
                    open={openActiveAccount}
                    handleClose={() => {
                        setOpenActiveAccount(false)
                    }}
                    handleAgree={handleActive}
                    title={`Bạn muốn khôi phục tài khoản ${user?.username} này?`}
                />
            )}
            {openConfirmActiveSuccess && (
                <DialogConfirmSuccess
                    open={openConfirmActiveSuccess}
                    handleClose={() => {
                        setOpenConfirmActiveSuccess(false)
                        getUsers(page, rowsPerPage, viewMode)
                    }}
                    title="Xin chúc mừng. Bạn vừa kích hoạt tài khoản thành công"
                />
            )}
        </Box>
    )
}
export default ManagementAccount;