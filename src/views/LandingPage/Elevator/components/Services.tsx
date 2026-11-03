import { COLORS } from "@/constants/colors";
import { Box, Stack, Typography } from "@mui/material";
import s1 from "@/assets/images/users/elevator/s1.png";
import s2 from "@/assets/images/users/elevator/s2.png";
import s3 from "@/assets/images/users/elevator/s3.png";
import s4 from "@/assets/images/users/elevator/s4.png";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";

const DATA_SERVICE = [
    {
        id: 1,
        image: s1,
        label: "Cải tạo nâng cấp thang máy",
        des: 'Cải tạo - nâng cấp thang máy là giải pháp tối ưu giúp kéo dài tuổi thọ, nâng cao hiệu suất vận hành và...'
    },
    {
        id: 2,
        image: s2,
        label: 'Sửa chữa thang máy',
        des: "Dịch vụ sửa chữa thang máy tại Fuji Lift giúp khắc phục mọi sự cố nhanh chóng - từ những lỗi cơ bản..."
    },
    {
        id: 3,
        image: s3,
        label: "Bảo trì thang máy",
        des: "Dịch vụ bảo trì thang máy định kỳ của Fuji Lift giúp đảm bảo thang máy vận hành ổn định, an toàn và..."
    },
    {
        id: 4,
        image: s4,
        label: "Lắp đặt thi công thang máy",
        des: "Dịch vụ lắp đặt thang máy của Fuji Lift được thực hiện theo quy trình chuyên nghiệp, đảm bảo an toàn-..."
    }
]

const Services = () => {
    return(
        <Box bgcolor={COLORS.PRIMARY} display="flex" justifyContent="center" py={4} flexDirection="column">
            <Typography
                fontWeight={700}
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2.5rem' } }}
            >
                Dịch vụ hậu đãi
            </Typography>
            <Typography
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' }, mt: 2 }}
            >
                Mintzfuni luôn tận tâm đề xuất cho bạn những giải pháp tối ưu và dịch vụ hậu đãi tốt nhất
            </Typography>
            <Grid container spacing={2} mt={10} mx={{ xs: 3, lg: 20 }}>
                {DATA_SERVICE.map((data) => (
                    <Grid key={data.id} sx={{ px: { xs: 0, md: 6 } }} size={{ xs: 12, md: 6 }}>
                        <Box gap={3} display='flex' flexDirection={{ xs: 'column', md: 'unset' }} justifyContent={{ xs: 'flex-start', md: 'space-between'}}>
                            <CommonImage
                                src={data.image}
                                sx={{
                                    width: 150,
                                    height: 150,
                                }}
                            />
                            <Stack direction='column'>
                                <Typography fontWeight={700} sx={{ color: '#fff', fontSize: { xs: '1.5rem', md: '2rem' } }}>{data.label}</Typography>
                                <Typography sx={{ color: '#fff', fontSize: { xs: '1rem', md: '1.3rem' } }}>{data.des}</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Services;