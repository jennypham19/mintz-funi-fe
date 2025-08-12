import Page from "@/components/Page";
import InputSearch from "@/components/SearchBar";
import { ContactPayload, forwardContact, getContact, getContacts } from "@/services/contact-service";
import { Contact } from "@/types/contact-types";
import { Alert, Box, Stack } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import CustomerContact from "../components/CustomerContactSummary";
import CustomPagination from "@/components/Pagination/CustomPagination";
import DialogDetailCustomerInfo from "./components/DetailCustomerInfo";
import { debounce } from "lodash";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FilterTabs from "../Account/components/FilterTabs";
import DialogConfirmSuccess from "../Account/components/DialogConfirmSuccess";
import DialogOpenConfirmAccount from "../Account/components/DialogOpenConfirmAccount";
import useNotification from "@/hooks/useNotification";

export interface DataStatusCustomerProps {
    id: number | string;
    value: number | string,
    label: string,
    icon: React.ReactNode
}

const DataStatusCustomer: DataStatusCustomerProps[] = [
    {
        id: 1,
        value: 0,
        label: "Khách hàng mới",
        icon: <PersonAddIcon/>
    },
    {
        id: 2,
        value: 1,
        label: "Khách hàng đã tư vấn",
        icon: <PersonAddIcon/>
    },
    {
        id: 3,
        value: 'all',
        label: "Kho lưu trữ",
        icon: <PersonAddIcon/>
    }
]

const CustomerInfomation: React.FC = () => {
    const notify = useNotification();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(12);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [contact, setContact] = useState<Contact | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [contactId, setIdContact] = useState<string | number>('');
    const [openDialogViewCus, setOpenDialogViewCus] = useState(false);
    const [viewMode, setViewMode] = useState<'all' | 0 | 1>(0);
    const [openDialogForward, setOpenDialogForward] = useState(false);
    const [openForwardSuccess, setOpenForwardSuccess] = useState(false);

    const fetchContactData = useCallback(async (currentPage: number, currentSize: number, status?: number |string, currentSearch?: string) => {
        setLoading(true)
            try {
                const contactsResponse = await getContacts({page: currentPage, limit: currentSize,  status: status, searchTerm: currentSearch });
                setContacts(contactsResponse?.data?.contacts || []);
                contactsResponse.data?.totalContact && setTotal(contactsResponse.data?.totalContact)
            } catch (error: any) {
                console.error("Failed to fetch dashboard data:", error);
                setError(error.message)
            }finally{
                setLoading(false);
            }
    },[rowPerPage, page])

    const debounceGetContacts = useMemo(
        () => debounce((currentPage: number, currentSize: number, status?: string | number, currentSearchTerm?: string) => {
            fetchContactData(currentPage, currentSize, status,currentSearchTerm);
        }, 500),
        [fetchContactData]
    );

    useEffect(() => {
        if(searchTerm){
            debounceGetContacts(page, rowPerPage, viewMode, searchTerm);
        }else{
            debounceGetContacts.cancel()
            fetchContactData(page, rowPerPage, viewMode);
        }
    }, [page, rowPerPage, viewMode, searchTerm]);

    const handleSearch = (value: string) => {
        setSearchTerm(value.trim())
    }

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
    }

    const handleOpenDialogViewDetail = async(id: string | number) => {
        setIdContact(id)
        setOpenDialogViewCus(true)
    }
    
    const handleOpenDialogForward = (contact: Contact) => {
        setOpenDialogForward(true)
        setContact(contact)
    }

    const handleForward = async() => {
        try {
            const data: ContactPayload = {
                status: 1
            }
            if(!contact?.id) return null;
            await forwardContact(contact?.id, data);
            setOpenDialogForward(false);
            setOpenForwardSuccess(true)
        } catch (error: any) {
            notify({
                message: error.message,
                severity: 'error',
            })
        }
    }

    return(
        <Box p={2}>
            <Page title="Quản lý thông tin">
                <InputSearch
                    initialValue={searchTerm}
                    placeholder="Tìm kiếm"
                    onSearch={handleSearch}
                    style={{ width: {xs: '100%', md:'50%'}}}
                />
                {error && !loading && (
                        <Alert severity="error" sx={{ my: 2}}>{error}</Alert>
                )}
                <Box mt={2}>
                    <FilterTabs
                        data={DataStatusCustomer}
                        viewMode={viewMode}
                        onChange={setViewMode}
                    />
                </Box>
                <Stack sx={{display:'flex',flexDirection:'column'}}>
                    <Box px={1} pt={2.5}>
                        <CustomerContact
                            handleClick={handleOpenDialogViewDetail}
                            contacts={contacts}
                            isLoading={loading}
                            handleForward={handleOpenDialogForward}
                            viewMode={viewMode}
                        />  
                    </Box>
                    
                    <Box display='flex' justifyContent='center'>
                        <CustomPagination
                            page={page}
                            count={total}
                            rowsPerPage={rowPerPage}
                            onPageChange={handlePageChange}
                        />
                    </Box>
                </Stack>
            </Page>
            {openDialogViewCus && contactId && (
                <DialogDetailCustomerInfo
                    open={openDialogViewCus}
                    onClose={() => { setOpenDialogViewCus(false)}}
                    contactId={contactId}
                />
            )}

            {openDialogForward && contact && (
                <DialogOpenConfirmAccount
                    open={openDialogForward}
                    handleClose={() => {
                        setOpenDialogForward(false)
                    }}
                    handleAgree={handleForward}
                    title={`Bạn chắc chắn muốn chuyển tiếp khách hàng ${contact.name} sau khi đã tư vấn xong?`}
                />
            )}
            {openForwardSuccess && (
                <DialogConfirmSuccess
                    open={openForwardSuccess}
                    handleClose={() => {
                        setOpenForwardSuccess(false)
                        fetchContactData(page, rowPerPage, viewMode)
                    }}
                    title="Xin chúc mừng. Bạn đã chuyển tiếp thông tin thành công"
                />
            )}
        </Box>
    )
}

export default CustomerInfomation;