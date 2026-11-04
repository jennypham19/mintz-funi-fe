import { COLORS } from "@/constants/colors";
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import elevator_1 from "@/assets/images/users/elevator/elevator_1.png";
import elevator_2 from "@/assets/images/users/elevator/elevator_2.png";
import elevator_3 from "@/assets/images/users/elevator/elevator_3.png";
import CommonImage from "@/components/Image/index";

const AboutElevator = () => {
    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    return(
        <Box bgcolor={COLORS.PRIMARY} px={4} py={15}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box justifyContent='center' px={{ xs: 2, md: 8}} display='flex' flexDirection='column'>
                        <Divider sx={{ border: '1px solid #fff'}}/>
                        <Typography
                            sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' }, mt: 5, fontWeight: 700 }}
                        >
                            Thang máy MINTZ FUNI
                        </Typography>
                        <Typography
                            sx={{ color: 'white', fontSize: { xs: '1.25rem', md: '1.5rem' }, mt: 5, fontWeight: 700 }}
                        >
                            Mintzfuni cung cấp giải pháp thang máy theo đặc điểm kiến trúc, điều kiện lắp đặt và nhu cầu sử dụng của từng công trình. 
                        </Typography>
                        <Typography
                            sx={{ color: 'white', fontSize: { xs: '1.25rem', md: '1.5rem' }, mt: 5, fontWeight: 700 }}
                        >
                            Từ biệt thự xây mới đến nhà phố nhiều tầng hoặc nhà cải tạo, phương án lựa chọn được xem xét đồng bộ giữa công năng, kích thước, thiết kế nội thất và ngân sách đầu tư.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    {mdUp ? (
                        <>
                            <Box>
                                <CommonImage
                                    src={elevator_3}
                                    sx={{ width: 366, height: 254 }}
                                />
                            </Box>
                            <Box display='flex' flexDirection='column' gap={2}>
                                <CommonImage
                                    src={elevator_1}
                                    sx={{ width: 515, height: 362 }}
                                />
                                <CommonImage
                                    src={elevator_2}
                                    sx={{ width: 366, height: 366 }}
                                />
                            </Box>                        
                        </>
                    ) : (
                        <Box display='flex' flexDirection='column' gap={2}>
                            <CommonImage
                                src={elevator_3}
                                sx={{ width: 366, height: 254 }}
                            />
                            <CommonImage
                                src={elevator_1}
                                sx={{ width: 515, height: 362 }}
                            />
                            <CommonImage
                                src={elevator_2}
                                sx={{ width: 366, height: 366 }}
                            />
                        </Box>
                    )}

                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutElevator;