import { COLORS } from "@/constants/colors"
import { Box, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import p_01 from "@/assets/images/users/elevator/01.png";
import p_02 from "@/assets/images/users/elevator/02.png";
import p_03 from "@/assets/images/users/elevator/03.png";
import p_04 from "@/assets/images/users/elevator/04.png";
import p_05 from "@/assets/images/users/elevator/05.png";
import p_06 from "@/assets/images/users/elevator/06.png";
import p_07 from "@/assets/images/users/elevator/07.png";

const DATA_PRODUCT_LINE_1 = [
    {
        id: 1,
        image: p_01,
        stt: 1,
        label: "THANG MÁY GIA ĐÌNH"
    },
    {
        id: 2,
        image: p_02,
        stt: 2,
        label: "THANG MÁY TẢI KHÁCH"
    }
]

const DATA_PRODUCT_LINE_2 = [
    {
        id: 3,
        image: p_03,
        stt: 3,
        label: "THANG MÁY TẢI HÀNG"
    },
    {
        id: 4,
        image: p_04,
        stt: 4,
        label: "THANG MÁY QUAN SÁT"
    },
    {
        id: 5,
        image: p_05,
        stt: 5,
        label: "THANG MÁY BIỆT THỰ"
    }
]

const DATA_PRODUCT_LINE_3 = [
    {
        id: 6,
        image: p_06,
        stt: 6,
        label: "THANG MÁY SÀN NÂNG"
    },
    {
        id: 7,
        image: p_07,
        stt: 7,
        label: "THANG MÁY CHUYÊN DỤNG"
    }
]
const Products = () => {
    return(
        <Box bgcolor={COLORS.PRIMARY} display="flex" justifyContent="center" py={4} flexDirection="column">
            <Typography
                fontWeight={700}
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2.5rem' } }}
            >
                Các dòng sản phẩm
            </Typography>
            <Typography
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' }, mt: 2 }}
            >
                Mintzfuni tập trung giới thiệu các thương hiệu và dòng sản phẩm có thể đưa vào danh mục kinh doanh.
            </Typography>

            {/* -------------------- DATA_LINE_1 ----------------------- */}
            <Grid container spacing={2} mt={10} mx={{ xs: 3, md: 10, lg: 20 }}>
                {DATA_PRODUCT_LINE_1.map((data_line_1) => (
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{ 
                                position: 'relative',
                                height: 400,
                                width: '100%',
                                backgroundImage: `url(${data_line_1.image})`,
                                backgroundSize: 'fill',
                                backgroundPosition: 'center',
                                color: '#fff',
                                zIndex:1
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: { xs: '50% 0px 0px', md: '58% 0px 0px'},
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    zIndex: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        zIndex: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        px: { xs: 3, lg: 8 }, 
                                        width: '100%',
                                        height: '100%',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Stack direction='column'>
                                        <Typography fontWeight={800} variant="h3">0{data_line_1.stt}</Typography>
                                        <Divider sx={{ border: '1px solid #fff', width: { xs: '50%', md: '30%' } }}/>
                                        <Typography variant="h4">{data_line_1.label}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>                    
                ))}
            </Grid>
            {/* -------------------- DATA_LINE_2 ----------------------- */}
            <Grid container spacing={2} mt={2} mx={{ xs: 3, md: 10, lg: 20 }}>
                {DATA_PRODUCT_LINE_2.map((data_line_2) => (
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{ 
                                position: 'relative',
                                height: 400,
                                width: '100%',
                                backgroundImage: `url(${data_line_2.image})`,
                                backgroundSize: 'fill',
                                backgroundPosition: 'center',
                                color: '#fff',
                                zIndex:1
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: { xs: '50% 0px 0px', md: '58% 0px 0px'},
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    zIndex: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        zIndex: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        px: { xs: 3, lg: 8 }, 
                                        width: '100%',
                                        height: '100%',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Stack direction='column'>
                                        <Typography fontWeight={800} variant="h3">0{data_line_2.stt}</Typography>
                                        <Divider sx={{ border: '1px solid #fff', width: { xs: '50%', md: '30%' } }}/>
                                        <Typography variant="h4">{data_line_2.label}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>                    
                ))}
            </Grid>
            {/* -------------------- DATA_LINE_3 ----------------------- */}
            <Grid container spacing={2} mt={2} mx={{ xs: 3, md: 10, lg: 20 }}>
                {DATA_PRODUCT_LINE_3.map((data_line_3) => (
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{ 
                                position: 'relative',
                                height: 400,
                                width: '100%',
                                backgroundImage: `url(${data_line_3.image})`,
                                backgroundSize: 'fill',
                                backgroundPosition: 'center',
                                color: '#fff',
                                zIndex:1
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: { xs: '50% 0px 0px', md: '58% 0px 0px'},
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    zIndex: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        zIndex: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        px: { xs: 3, lg: 8 }, 
                                        width: '100%',
                                        height: '100%',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Stack direction='column'>
                                        <Typography fontWeight={800} variant="h3">0{data_line_3.stt}</Typography>
                                        <Divider sx={{ border: '1px solid #fff', width: { xs: '50%', md: '30%' } }}/>
                                        <Typography variant="h4">{data_line_3.label}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>                    
                ))}
            </Grid>
        </Box>
    )
}

export default Products