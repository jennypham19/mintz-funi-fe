import { Contact } from "@/types/contact-types";
import DateTime from "@/utils/DateTime";
import { CompareArrows, Visibility } from "@mui/icons-material";
import { IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";

interface CustomerInfoTableProps{
    contacts: Contact[];
    isLoading?: boolean;
    handleClick: (id: string | number) => void;
    handleForward?: (contact: Contact) => void;
    viewMode?: string | number
}

const CustomerInfoTable: React.FC<CustomerInfoTableProps> = ({ contacts, isLoading, handleClick, handleForward, viewMode }) => {

    if (isLoading) {
        return (
            <Grid container spacing={2}>
                {Array.from(new Array(6)).map((_, index) => (
                    <Grid size={{ xs: 12}} key={index}>
                        <Skeleton variant="rounded" height={80} />
                    </Grid>
                ))}
            </Grid>
        );
    }

    // Nếu không có contact nào, hiển thị thông báo
    if(contacts.length === 0) {
        return (<Typography>Không có thông tin nào để hiển thị.</Typography>)
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ height: "50px"}}>
                    <TableRow>
                        {['STT', 'Tên', 'Email', 'Số điện thoại', 'Vấn đề cần tư vấn'].map((data, index) => {
                            return (<TableCell key={index} align="center" sx={{ fontWeight: 'bold'}}>{data}</TableCell>)
                        })}
                        {viewMode === 1 ? 
                            <TableCell align="center" sx={{ fontWeight: 'bold'}}>Ngày đã được tư vấn</TableCell> 
                            : 
                            <TableCell align="center" sx={{ fontWeight: 'bold'}}>Ngày tư vấn</TableCell>
                        }
                        {viewMode === 'all' && <TableCell align="center" sx={{ fontWeight: 'bold'}}>Trạng thái</TableCell>}
                        <TableCell align="center" sx={{ fontWeight: 'bold'}}>Thao tác</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact, index) => {
                        return (
                            <TableRow key={contact.id}>
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{index + 1}</TableCell>
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{contact.name}</TableCell>
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{contact.email}</TableCell>
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{contact.phone}</TableCell>
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{contact.title}</TableCell>
                                {contact.status === 1 ? <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">{DateTime.Format(contact.updatedAt)}</TableCell> : <TableCell align="center">{DateTime.Format(dayjs())}</TableCell>}
                                {viewMode === 'all' && 
                                    (contact.status === 1 ? 
                                        <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">
                                            Khách hàng đã được tư vấn
                                        </TableCell> 
                                    : 
                                        <TableCell align="center">
                                            Khách hàng mới
                                        </TableCell>
                                    )
                                }
                                <TableCell sx={{ bgcolor: viewMode === 'all' && contact.status === 1 ? "#7fe3e3" : 'white'}} align="center">
                                    <Tooltip title="Xem chi tiết">
                                        <IconButton onClick={(e) => {e.stopPropagation(), contact.id && handleClick(contact.id)}} size="small" color="primary"><Visibility fontSize="small" /></IconButton>
                                    </Tooltip>
                                    {contact.status === 0 && viewMode === 0 && (
                                        <Tooltip title="Chuyển">
                                            <IconButton onClick={(e) => {e.stopPropagation(), contact && handleForward && handleForward(contact)}} size="small" color="primary"><CompareArrows fontSize="small" /></IconButton>
                                        </Tooltip>
                                    )}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomerInfoTable;