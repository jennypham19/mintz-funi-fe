import {
    ArrowForward,
    AutoAwesomeOutlined,
    CheckCircle,
    DashboardOutlined,
    VerifiedUserOutlined,
    WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import banner from "@/assets/images/users/elevator/e_oversee/banner.png";
import kinh_tron from "@/assets/images/users/elevator/e_oversee/thang-may-kinh-tron.png";
import kinh_vuong from "@/assets/images/users/elevator/e_oversee/thang-may-kinh-vuong.png";
import kinh_ban_nguyet from "@/assets/images/users/elevator/e_oversee/thang-may-kinh-ban-nguyet.png";
import kinh_luc_giac from "@/assets/images/users/elevator/e_oversee/thang-may-kinh-luc-giac.png";
import kinh_ngoai_troi from "@/assets/images/users/elevator/e_oversee/thang-may-kinh-ngoai-troi.png";
import ngoai_troi from "@/assets/images/users/elevator/e_oversee/thang-may-ngoai-troi.png";
import ngoai_troi_1 from "@/assets/images/users/elevator/e_oversee/thang-may-ngoai-troi-1.png";
import ngoai_troi_2 from "@/assets/images/users/elevator/e_oversee/thang-may-ngoai-troi-2.png";
import safe_ard from "@/assets/images/users/elevator/e_oversee/he-thong-cu-ho-tu-dong.png";
import safe_bell from "@/assets/images/users/elevator/e_oversee/chuong-bao-dong-lien-lac-khan-cap.png";
import safe_light from "@/assets/images/users/elevator/e_oversee/den-chieu-sang-khan-cap.png";
import safe_check from "@/assets/images/users/elevator/e_oversee/che-do-van-hanh-kiem-tra.png";
import Page from "@/components/Page";
import { useEffect } from "react";

/* ===================== THEME =====================
 * Màu chủ đạo: #031512 (COLORS.PRIMARY)
 */
const C = {
    bg: "#031512",
    cardDark: "#072A20",
    primary: COLORS.PRIMARY,
    accent: "#0F4433",
    border: "rgba(255,255,255,0.12)",
    cream: "#F2F1E7",
    cardText: "#1E2621",
    cardMuted: "#5E655F",
    cardMutedLight: "#8A908A",
    white: "#FFFFFF",
    whiteMuted: "rgba(255,255,255,0.72)",
    whiteFaint: "rgba(255,255,255,0.5)",
    button: "#E8E6D9",
    bgLight: "#DDECE9",
    bgPrimary: "#052F27",
    textBanner: "#2D9D84",
};

/* ===================== DATA ===================== */

const STATS = [
    { id: 1, title: "THIẾT KẾ", sub: "Thiết kế sang trọng" },
    { id: 2, title: "AN TOÀN", sub: "An toàn tuyệt đối" },
    { id: 3, title: "TIẾT KIỆM", sub: "Tiết kiệm không gian" },
    { id: 4, title: "BẢO HÀNH", sub: "Bảo hành dài hạn" },
];

interface ProductModel {
    id: number;
    image: string;
    name: string;
    sub: string;
}

const PRODUCTS: ProductModel[] = [
    { id: 1, image: kinh_tron, name: "THANG MÁY KÍNH TRÒN", sub: "Hiện đại, tinh tế" },
    { id: 2, image: kinh_vuong, name: "THANG MÁY KÍNH VUÔNG", sub: "Phổ biến, linh hoạt" },
    { id: 3, image: kinh_ban_nguyet, name: "THANG MÁY KÍNH BÁN NGUYỆT", sub: "Sang trọng, đẳng cấp" },
    { id: 4, image: kinh_luc_giac, name: "THANG MÁY KÍNH LỤC GIÁC", sub: "Độc đáo, khác biệt" },
    { id: 5, image: kinh_ngoai_troi, name: "THANG MÁY KÍNH NGOÀI TRỜI", sub: "Tận hưởng không gian" },
];

const OBS_CHECKS = [
    "Tính thẩm mỹ cao, không gian thoáng đãng",
    "An toàn, vận hành êm ái",
    "Tối ưu diện tích",
];

const OBS_HIGHLIGHTS = [
    { id: 1, icon: <WorkspacePremiumOutlined />, text: "Điểm nhấn kiến trúc sang trọng" },
    { id: 2, icon: <VerifiedUserOutlined />, text: "An toàn tuyệt đối, bảo trì định kỳ" },
    { id: 3, icon: <DashboardOutlined />, text: "Diện tích nhỏ gọn, tiết kiệm" },
    { id: 4, icon: <AutoAwesomeOutlined />, text: "Mẫu mã thiết kế đa dạng, tinh tế" },
];

interface SpecPlan {
    id: number;
    tag: string;
    weight: string;
    people: string;
    specs: [string, string][];
}

const SPEC_PLANS: SpecPlan[] = [
    {
        id: 1,
        tag: "THANG KÍNH GIA ĐÌNH",
        weight: "250 - 450 KG",
        people: "Chịu tải từ 2 - 6 người",
        specs: [
            ["Tốc độ", "0,15 - 0,6 m/s"],
            ["Số tầng", "2 - 6 tầng"],
            ["Cabin", "vuông, chữ nhật, tròn"],
            ["Hệ thống điều khiển", "PLC hoặc vi xử lý"],
            ["Vật liệu", "kính an toàn, inox, thép"],
            ["Cửa thang", "cửa tự động hoặc mở tay"],
            ["Nguồn điện", "1 pha hoặc 3 pha"],
        ],
    },
    {
        id: 2,
        tag: "THANG KÍNH THƯƠNG MẠI",
        weight: "450 - 1600 KG",
        people: "Chịu tải 6 - 21 người",
        specs: [
            ["Tốc độ", "0,5 - 2,5 m/s"],
            ["Số tầng", "từ 3 tầng trở lên"],
            ["Cabin", "vuông, chữ nhật, tròn, bán nguyệt, lục giác…"],
            ["Hệ thống điều khiển", "vi xử lý chuyên dụng"],
            ["Vật liệu", "kính an toàn, inox, thép"],
            ["Cửa thang", "cửa tự động"],
            ["Nguồn điện", "thường 3 pha"],
        ],
    },
];

const SAFETY = [
    {
        id: 1,
        image: safe_ard,
        title: "Hệ thống cứu hộ tự động (ARD)",
        des: "Khi mất điện, hệ thống sử dụng nguồn dự phòng để đưa cabin đến tầng phù hợp.",
    },
    {
        id: 2,
        image: safe_bell,
        title: "Chuông báo động và liên lạc khẩn cấp",
        des: "Cho phép người bên trong cabin phát tín hiệu và liên hệ với bộ phận trực hoặc cứu hộ.",
    },
    {
        id: 3,
        image: safe_light,
        title: "Đèn chiếu sáng khẩn cấp khi gián đoạn",
        des: "Tự động bật khi nguồn điện chính bị gián đoạn, đảm bảo ánh sáng bên trong cabin.",
    },
    {
        id: 4,
        image: safe_check,
        title: "Chế độ vận hành và kiểm tra khẩn cấp",
        des: "Hỗ trợ đội ngũ kỹ thuật viên kiểm tra, bảo trì và xử lý sự cố theo quy trình an toàn.",
    },
];

const OBS_IMAGES = [ngoai_troi, ngoai_troi_1, ngoai_troi_2];

const LOAD_OPTIONS = [
    { value: "250", label: "250 - 450 KG (Gia đình)" },
    { value: "450", label: "450 - 1600 KG (Thương mại)" },
];

const SECTION_PX = { xs: 2.5, md: 8, lg: 15 };
const SECTION_PY = { xs: 4.5, md: 7 };

/* ===================== SECTION HEADING ===================== */

const SectionHeading: React.FC<{ label: string; title: string; sub?: string }> = ({
    label,
    title,
    sub,
}) => (
    <Stack direction="column" spacing={1.25} alignItems="center" textAlign="center" mb={{ xs: 3.5, md: 4.5 }}>
        <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.white }}>
            {label}
        </Typography>
        <Typography sx={{ fontWeight: 700, color: C.white, fontSize: { xs: 24, md: 32 } }}>
            {title}
        </Typography>
        {sub && (
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, maxWidth: 720, color: C.whiteMuted }}>
                {sub}
            </Typography>
        )}
    </Stack>
);

/* ===================== COMPONENT ===================== */

const ElevatorOversee = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContact = () => {
        navigate("/thang-may", { state: { scrollTo: "contact" } });
    };

    const handleProducts = () => {
        navigate("/thang-may", { state: { scrollTo: "products" } });
    };

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

    return (
        <Page title="Thang máy quan sát">
            <Box sx={{ bgcolor: C.bg }}>
                {/* ===================== HERO ===================== */}
                <Box
                    id="banner-elevator-oversee"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        color: "#fff",
                        bgcolor: C.bgPrimary,
                        minHeight: { xs: 460, md: 480 },
                    }}
                >
                    {/* Ảnh bên phải, góc trên-trái bo cong lớn; nền xanh của hero phủ phần còn lại */}
                    <Box
                        component="img"
                        src={banner}
                        alt="Thang máy lồng kính"
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: { xs: "100%", md: "60%" },
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: { xs: "none", md: "block" },
                            borderRadius: { md: "45% 0 0 0 / 100% 0 0 0" },
                        }}
                    />
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: { xs: 460, md: 480 },
                            px: SECTION_PX,
                            py: { xs: 5, md: 0 },
                            maxWidth: { md: "52%" },
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: 13, md: 16 }, fontWeight: 700, letterSpacing: "0.14em", color: C.textBanner }}>
                            SANG TRỌNG - ĐẲNG CẤP - HIỆN ĐẠI
                        </Typography>
                        <Typography sx={{ mt: 2, fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            THANG MÁY LỒNG KÍNH
                        </Typography>
                        <Typography sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            THẨM MỸ HIỆN ĐẠI
                        </Typography>
                        <Typography sx={{ mt: 3, fontSize: 15, color: C.whiteMuted, maxWidth: 460 }}>
                            Kiến tạo không gian sống tinh tế với thang máy lồng kính hiện đại từ
                            thương hiệu của Mintz Funi.
                        </Typography>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                            <Button
                                onClick={() => handleScrollToSection('elevator-oversee-product')}
                                sx={{
                                    bgcolor: C.button,
                                    color: C.primary,
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.25,
                                    "&:hover": { bgcolor: "#dcd9c6" },
                                }}
                            >
                                KHÁM PHÁ DÒNG SẢN PHẨM
                            </Button>
                            <Button
                                onClick={handleContact}
                                variant="outlined"
                                sx={{
                                    color: "#fff",
                                    borderColor: "rgba(255,255,255,0.5)",
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.25,
                                    "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.08)" },
                                }}
                            >
                                NHẬN TƯ VẤN NGAY
                            </Button>
                        </Stack>
                    </Box>
                </Box>

                {/* ===================== STATS BAR ===================== */}
                <Box
                    sx={{
                        mt: { xs: 3.5, md: 5 },
                        mx: SECTION_PX,
                        bgcolor: C.bgPrimary,
                        border: `1px solid ${C.border}`,
                        borderRadius: 2,
                        px: { xs: 2.5, md: 4 },
                        py: { xs: 2.5, md: 3 },
                    }}
                >
                    <Grid container rowSpacing={2.5} columnSpacing={2}>
                        {STATS.map((stat, idx) => (
                            <Grid
                                key={stat.id}
                                size={{ xs: 6, md: 3 }}
                                sx={{
                                    textAlign: "center",
                                    borderLeft: { md: idx === 0 ? "none" : `1px solid ${C.border}` },
                                }}
                            >
                                <Typography sx={{ fontWeight: 800, fontSize: { xs: 16, md: 20 }, letterSpacing: "0.04em", color: C.white }}>
                                    {stat.title}
                                </Typography>
                                <Typography sx={{ fontSize: { xs: 12, md: 13 }, color: C.whiteMuted, mt: 0.5 }}>
                                    {stat.sub}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== MẪU MÃ ===================== */}
                <Box id="elevator-oversee-product" sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="MẪU MÃ ĐA DẠNG"
                        title="Thang máy lồng kính thịnh hành"
                        sub="Các thiết kế mẫu mã đa dạng, tinh tế, tiết kiệm diện tích và dễ dàng quan sát từ bên trong."
                    />
                    <Grid container spacing={2}>
                        {PRODUCTS.map((p) => (
                            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 2.4 }}>
                                <Box
                                    sx={{
                                        bgcolor: C.cream,
                                        borderRadius: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                    }}
                                >
                                    <CommonImage
                                        src={p.image}
                                        sx={{ width: "100%", height: { xs: 180, md: 250}, objectFit: "fit", borderRadius: 0 }}
                                    />
                                    <Box sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 14, color: C.cardText }}>
                                            {p.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12.5, color: C.cardMuted, mt: 0.5, mb: 2, flexGrow: 1 }}>
                                            {p.sub}
                                        </Typography>
                                        <Button
                                            onClick={handleContact}
                                            fullWidth
                                            sx={{
                                                bgcolor: C.accent,
                                                color: "#fff",
                                                fontWeight: 600,
                                                "&:hover": { bgcolor: "#135640" },
                                            }}
                                        >
                                            Nhận tư vấn
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== THANG MÁY QUAN SÁT ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                Thang máy quan sát
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1, mb: 2, fontSize: { xs: 24, md: 30 } }}>
                                Thang máy kính - Điểm nhấn cho ngôi nhà bạn
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, lineHeight: 1.7, mb: 2.5 }}>
                                Thang máy lồng kính mang đến vẻ đẹp sang trọng, hiện đại cùng trải
                                nghiệm di chuyển êm ái, an toàn. Sản phẩm phù hợp với nhiều công trình
                                nhà ở, biệt thự, khách sạn, trung tâm thương mại.
                            </Typography>
                            <Stack direction='column' spacing={1.25} mb={3}>
                                {OBS_CHECKS.map((item) => (
                                    <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                                        <CheckCircle sx={{ fontSize: 20, color: "#5BB89A" }} />
                                        <Typography sx={{ fontSize: 14, color: C.white }}>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                            <Grid container spacing={2}>
                                {OBS_HIGHLIGHTS.map((h) => (
                                    <Grid key={h.id} size={{ xs: 12, sm: 6 }}>
                                        <Stack direction="row" spacing={1.5} alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: "50%",
                                                    bgcolor: C.white,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: C.textBanner,
                                                    flexShrink: 0,
                                                    "& svg": { fontSize: 18 },
                                                }}
                                            >
                                                {h.icon}
                                            </Box>
                                            <Typography sx={{ fontSize: 15, color: C.whiteMuted }}>{h.text}</Typography>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={2} justifyContent="center">
                                {OBS_IMAGES.map((img, idx) => (
                                    <Grid key={idx} size={6}>
                                        <CommonImage
                                            src={img}
                                            sx={{
                                                width: "100%",
                                                aspectRatio: "1 / 1",
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== THÔNG SỐ KỸ THUẬT ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="THÔNG SỐ KỸ THUẬT VÀ HỆ THỐNG AN TOÀN"
                        title="Thông số kỹ thuật và hệ thống an toàn"
                        sub="Các thông số dưới đây là khoảng tham khảo thường gặp trong thiết kế và lựa chọn thang máy. Thông số thực tế phải được tính toán theo tải trọng, số tầng, chiều cao công trình và cấu hình của nhà sản xuất."
                    />
                    {/* 2 thẻ thông số */}
                    <Grid container spacing={2} mb={2}>
                        {SPEC_PLANS.map((plan) => (
                            <Grid key={plan.id} size={{ xs: 12, md: 6 }}>
                                <Box
                                    sx={{
                                        color: "#fff",
                                        borderRadius: 2,
                                        border: `1px solid ${C.border}`,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box bgcolor={C.bgPrimary} sx={{ p: { xs: 2.5, md: 3 }, borderBottom: `1px solid ${C.border}` }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.whiteFaint }}>
                                            {plan.tag}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: { xs: 28, md: 32 }, mt: 1 }}>
                                            {plan.weight}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12.5, color: C.whiteMuted }}>
                                            {plan.people}
                                        </Typography>
                                    </Box>
                                    <Box color={C.bg} bgcolor={C.white} sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.bg }}>
                                            GIÁ THAM KHẢO
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 2 }}>
                                            Liên hệ báo giá
                                        </Typography>
                                        <Stack direction='column' spacing={1.25} sx={{ flexGrow: 1 }}>
                                            {plan.specs.map(([label, value]) => (
                                                <Box
                                                    key={label}
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        gap: 2,
                                                        pb: 1,
                                                        borderBottom: `1px solid ${C.button}`,
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: 12.5, color: C.bg, whiteSpace: "nowrap" }}>
                                                        {label}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 12.5, fontWeight: 600, textAlign: "right" }}>
                                                        {value}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                        <Button
                                            onClick={handleContact}
                                            fullWidth
                                            sx={{
                                                mt: 2.5,
                                                bgcolor: C.accent,
                                                color: "#fff",
                                                fontWeight: 600,
                                                "&:hover": { bgcolor: "#135640" },
                                            }}
                                        >
                                            Nhận tư vấn
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    {/* 4 thẻ an toàn */}
                    <Grid container spacing={2}>
                        {SAFETY.map((s) => (
                            <Grid key={s.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box
                                    sx={{
                                        bgcolor: C.cream,
                                        borderRadius: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                    }}
                                >
                                    <CommonImage
                                        src={s.image}
                                        sx={{ width: "100%", height: 200, objectFit: "fit", borderRadius: 0 }}
                                    />
                                    <Box sx={{ p: 2 }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: C.bg, mb: 0.75 }}>
                                            {s.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: 13, color: C.bg, lineHeight: 1.6 }}>
                                            {s.des}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== ĐỒNG HÀNH + FORM ===================== */}
                <Box bgcolor={C.bgPrimary} sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.white }}>
                                MINTZ FUNI ĐỒNG HÀNH CÙNG BẠN
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1.5, fontSize: { xs: 24, md: 32 } }}>
                                Tìm giải pháp phù hợp cho ngôi nhà của bạn
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mt: 2 }}>
                                Để lại thông tin công trình và nhu cầu sử dụng. Đội ngũ Mintz Funi sẽ
                                tiếp nhận để tư vấn phương án tải trọng, vị trí lắp đặt và cấu hình phù
                                hợp.
                            </Typography>
                            <Typography sx={{ fontSize: 14, fontWeight: 700, color: C.white, mt: 2 }}>
                                Tư vấn - Thiết kế - Thi công - Lắp đặt
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mt: 1 }}>
                                Chính sách bảo hành lên đến 10 năm theo điều kiện áp dụng.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ bgcolor: C.bgLight, borderRadius: 2, p: { xs: 2.5, md: 4 } }}>
                                <Typography sx={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.14em", color: C.bg, mb: 3 }}>
                                    ĐĂNG KÝ TƯ VẤN
                                </Typography>
                                <Grid container spacing={2.5}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Tên đầy đủ
                                        </Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Số điện thoại
                                        </Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Tải trọng quan tâm
                                        </Typography>
                                        <InputSelect
                                            label=""
                                            name=""
                                            value={""}
                                            onChange={() => {}}
                                            options={LOAD_OPTIONS}
                                            transformOptions={(data) =>
                                                data.map((item) => ({ value: item.value, label: item.label }))
                                            }
                                            placeholder="Chọn thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Số tầng công trình
                                        </Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Địa chỉ
                                        </Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" multiline rows={5} />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            onClick={handleContact}
                                            endIcon={<ArrowForward />}
                                            sx={{
                                                bgcolor: C.primary,
                                                color: "#fff",
                                                fontWeight: 700,
                                                px: 3,
                                                py: 1.1,
                                                "&:hover": { bgcolor: "#052a22" },
                                            }}
                                        >
                                            GỬI THÔNG TIN
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Page>
    );
};

export default ElevatorOversee;
