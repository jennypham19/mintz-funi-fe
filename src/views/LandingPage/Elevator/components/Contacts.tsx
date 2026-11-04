import { Avatar, Box, Typography } from "@mui/material";
import contact from "@/assets/images/users/elevator/contact.jpg"
import { Email, FmdGood, Language, Phone } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import IconButton from "@/components/IconButton/IconButton";

const DATA_CONTACTS_LINE_1 = [
    {
        id: 1,
        icon: <Phone fontSize='large' sx={{ color: '#fff'}}/>,
        title: '0328016662'
    },
    {
        id: 2,
        icon: <Email fontSize='large' sx={{ color: '#fff'}}/>,
        title: 'thangmay.funi@gmail.com'
    },
    {
        id: 3,
        icon: <Language fontSize='large' sx={{ color: '#fff'}}/>,
        title: 'https://www.funi.vn/home'
    }
]

interface ContactProps {
    id: string
}
const Contacts = (props: ContactProps) => {
    const { id } = props;
    return(
        <Box
            id={id}
                sx={{
                position:'relative',
                height: { xs: 450, md: 500 }, // Chiều cao thu gọn lại
                width: '100%',
                backgroundImage: `url(${contact})`,
                backgroundSize: 'cover', // Kích thước ảnh nền
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                px: 2,
                }}       
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(88, 87, 87, 0.5)',
                    zIndex: 1
                }}
            >
                <Box
                    sx={{
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <Grid container spacing={{ xs: 2, lg: 20}}>
                        {DATA_CONTACTS_LINE_1.map((data) => (
                            <Grid key={data.id} size={{ xs: 12, lg: 4 }}>
                                <Box gap={3} display='flex'>
                                    <IconButton
                                        icon={data.icon}
                                        backgroundColor="#000"
                                        sx={{ 
                                            width: { xs: 50, md: 70 },
                                            height: { xs: 50, md: 70 }
                                        }}
                                        
                                        height={70}
                                        borderRadius='50%'
                                        border="1px solid #fff"
                                    />
                                    <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.6rem'}}} margin="auto 0">{data.title}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={{ xs: 3, lg: 10 }} gap={3} display='flex'>
                        <IconButton
                            icon={<FmdGood fontSize='large' sx={{ color: '#fff'}}/>}
                            backgroundColor="#000"
                            sx={{ 
                                width: { xs: 50, md: 70 },
                                height: { xs: 50, md: 70 }
                            }}
                            borderRadius='50%'
                            border="1px solid #fff"
                        />
                        <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.6rem'}}} margin="auto 0">SỐ 07 THANH NHÀN - THANH XUÂN - SÓC SƠN - THÀNH PHỐ HÀ NỘI</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contacts;