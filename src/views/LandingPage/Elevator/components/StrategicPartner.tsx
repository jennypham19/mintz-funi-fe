import { COLORS } from "@/constants/colors";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import fuji from "@/assets/images/users/elevator/fuji.png";
import sanyo from "@/assets/images/users/elevator/logo-sanyo-white.png";
import MITSUBISHI from "@/assets/images/users/elevator/MITSUBISHI.png";
import SCHINDLER from "@/assets/images/users/elevator/SCHINDLER.png";
import KONE from "@/assets/images/users/elevator/KONE.png"
import CommonImage from "@/components/Image/index";

const DATA_STRATEGIC_PARTNER = [
    {
        id: 1,
        image: fuji,
        label: "FUJI"
    },
    {
        id: 2,
        image: sanyo,
        label: "SANYO YUSOKI"
    },
    {
        id: 3,
        image: MITSUBISHI,
        label: "MITSUBISHI"
    },
    {
        id: 4,
        image: SCHINDLER,
        label: "SCHINDLER"
    },
    {
        id: 5,
        image: KONE,
        label: "KONE"
    },
]
const StrategicPartner = () => {
    return(
        <Box bgcolor={COLORS.PRIMARY} display="flex" justifyContent="center" py={4} flexDirection="column">
            <Typography
                fontWeight={700}
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2.5rem' } }}
            >
                Đối tác chiến lược
            </Typography>
            <Typography
                textAlign="center"
                sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' }, mt: 2 }}
            >
                Mintzfuni tập trung giới thiệu các thương hiệu và dòng sản phẩm có thể đưa vào danh mục kinh doanh.
            </Typography>
            <Grid container spacing={2} mt={10} mx={{ xs: 3, md: 10 }}>
                {DATA_STRATEGIC_PARTNER.map((data) => (
                    <Grid sx={{ px: 2 }} key={data.id} size={{ xs: 12, md: 2.4 }}>
                        <Box display='flex' flexDirection='column'>
                            <CommonImage
                                src={data.image}
                                sx={{ height: 150 }}
                            />
                            <Typography
                                fontWeight={700}
                                textAlign="center"
                                sx={{ color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' }, mt: 1 }}
                            >
                                {data.label}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default StrategicPartner;