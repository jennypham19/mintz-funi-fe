import Page from "@/components/Page"
import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router";
import banner from "@/assets/images/users/elevator/banner.png"
import StrategicPartner from "./components/StrategicPartner";
import AboutElevator from "./components/AboutElevator";
import Products from "./components/Products";
import Services from "./components/Services";
import Contacts from "./components/Contacts";

const Elevator = () => {
    const navigate = useNavigate();
    return (
        <Page title="Thang máy">
            <Box
                sx={{
                position:'relative',
                height: {xs: 450, md: 500}, // Chiều cao thu gọn lại
                width: '100%',
                backgroundImage: `url(${banner})`,
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
                    zIndex: 1,
                }}
                >
                    <Box 
                        sx={{ 
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: '1.5rem', md: '2.5rem'}}} fontWeight={700} mb={1}>
                            Dịch vụ thang máy cao cấp
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '2rem', md: '4rem'}}} fontWeight={600} mb={3}>
                        MINTZ FUNI
                        </Typography>
                        <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }} justifyContent="center"> 
                            <Button
                                variant="outlined"
                                // onClick={() => navigate('/about-us')}
                                sx={{
                                    color: 'white',
                                    px: 4,
                                    py: 1,
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    borderRadius: '8px',
                                    border: '1px solid white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    color: 'black'
                                    },
                                }}
                            >
                                Báo giá
                            </Button>
                            <Button
                                variant="outlined"
                                // onClick={() => navigate('/about-us')}
                                sx={{
                                    color: 'white',
                                    px: 4,
                                    py: 1,
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    borderRadius: '8px',
                                    border: '1px solid white',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                    '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    color: 'black'
                                    },
                                }}
                            >
                                Tìm hiểu ngay
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <StrategicPartner/>
            <AboutElevator/>
            <Products/>
            <Services/>
            <Contacts/>
        </Page>
    )
}

export default Elevator