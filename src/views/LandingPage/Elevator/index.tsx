import Page from "@/components/Page"
import { Box, Button, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router";
import banner from "@/assets/images/users/elevator/banner.png"
import StrategicPartner from "./components/StrategicPartner";
import AboutElevator from "./components/AboutElevator";
import Products from "./components/Products";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import { DATA_VALUE } from "./constants";
import { useEffect } from "react";

const Elevator = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const scrollTo  = location.state?.scrollTo;
        
        if(scrollTo){
            // Chờ React render BOM
            requestAnimationFrame(() => {
                const element = document.getElementById(scrollTo);

                element?.scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            });

            // Xóa state để tránh cuộn lại khi refresh hoặc quay lại
            navigate(location.pathname, {
                replace: true,
                state: null
            });
        }

    }, [location.state, location.pathname, navigate])

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        element?.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    }

    const handleOpenTypeElevator = (type: string | null) => {
        if(!type) return;
        switch(type){
            case DATA_VALUE.ELEVATOR_FAMILY:
                navigate("/thang-may/thang-may-gia-dinh", { state: { scrollTo: "banner_elevator_family" }})
                break;
            case DATA_VALUE.ELEVATOR_VILLA:
                navigate("/thang-may/thang-may-gia-dinh", { state: { scrollTo: "banner_elevator_family" }})
                break;
            case DATA_VALUE.ELEVATOR_CUSTOMER:
                navigate("/thang-may/thang-may-tai-khach", { state: { scrollTo: "banner_elevator_customer" } })
                break;
            case DATA_VALUE.ELEVATOR_PACKAGE:
                navigate("/thang-may/thang-may-tai-hang", { state: { scrollTo: "banner_elevator_load_goods" }});
                break;
            case DATA_VALUE.ELEVATOR_OVERSEE:
                navigate("/thang-may/thang-may-quan-sat", { state: { scrollTo: "banner-elevator-oversee" }});
                break;
            case DATA_VALUE.ELEVATOR_RAISED_FLOOR:
                navigate("/thang-may/thang-may-san-nang", { state: { scrollTo: "banner-elevator-raised-floor" }});
                break;
            case DATA_VALUE.ELEVATOR_SPECIALIST:
                navigate("/thang-may/thang-may-tai-hang", { state: { scrollTo: "banner_elevator_load_goods" }});
                break;
        }
    }
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
                                        onClick={() => handleScrollToSection("contact")}
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
                                        onClick={() => handleScrollToSection("products")}
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
                    <Products id="products" onOpenTypeElevator={handleOpenTypeElevator}/>
                    <Services/>
                    <Contacts id="contact"/>                


            
        </Page>
    )
}

export default Elevator