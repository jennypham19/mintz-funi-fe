import {
    AccessibleOutlined,
    ApartmentOutlined,
    ArrowForward,
    BlockOutlined,
    BoltOutlined,
    BuildCircleOutlined,
    CheckCircle,
    FavoriteBorderOutlined,
    HealthAndSafetyOutlined,
    HeightOutlined,
    LockOutlined,
    PanToolOutlined,
    PowerSettingsNewOutlined,
    ScaleOutlined,
    StraightenOutlined,
    TuneOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import banner from "@/assets/images/users/elevator/e_raised_floor/banner.png";
import sol_1 from "@/assets/images/users/elevator/e_raised_floor/e_raised_floor_1.png";
import sol_2 from "@/assets/images/users/elevator/e_raised_floor/e_raised_floor_2.png";
import prod from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor.png";
import prod_1 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_1.png";
import prod_2 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_2.png";
import prod_3 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_3.png";
import safe_1 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_5.png";
import safe_2 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_6.png";
import safe_3 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_7.png";
import safe_4 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_8.png";
import safe_5 from "@/assets/images/users/elevator/e_raised_floor/elevator_raised_floor_4.png";
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
    { id: 1, title: "GỌN NHẸ", sub: "Tối ưu không gian lắp đặt" },
    { id: 2, title: "AN TÂM", sub: "Ưu tiên an toàn vận hành" },
    { id: 3, title: "LINH HOẠT", sub: "Nhiều cấu hình lựa chọn" },
    { id: 4, title: "HỖ TRỢ", sub: "Bảo hành định kì" },
];

const SOLUTION_CHECKS = [
    "Tối ưu cho công trình thấp tầng và không gian cần tiết kiệm diện tích.",
    "Có thể thiết kế hố pit siêu nông, phù hợp cải tạo không cần đào sâu.",
    "Lựa chọn đa dạng về vật liệu, kiểu dáng và công nghệ truyền động.",
    "Phương án lắp đặt được khảo sát theo điều kiện thực tế công trình.",
];

interface ProductModel {
    id: number;
    image: string;
    name: string;
    des: string;
}

const PRODUCTS: ProductModel[] = [
    {
        id: 1,
        image: prod,
        name: "SÀN NÂNG MỞ",
        des: "Kết cấu gọn, có lan can hoặc vách bảo vệ thấp, phù hợp khu nhà có độ cao chênh ít giữa các tầng.",
    },
    {
        id: 2,
        image: safe_4,
        name: "SÀN NÂNG VÁCH KÍNH",
        des: "Bao quanh bằng vách kính an toàn, tăng thẩm mỹ và tầm quan sát, phù hợp không gian hiện đại.",
    },
    {
        id: 3,
        image: safe_3,
        name: "SÀN NÂNG BÁN KÍN",
        des: "Có vách bao che một phần, cân đối giữa chi phí, thẩm mỹ và mức độ che chắn cho công trình.",
    },
];

const SPEC_ROWS: [string, string][] = [
    ["Tải trọng", "Khoảng 250–1.000 kg"],
    ["Tốc độ di chuyển", "Khoảng 0,05–0,30 m/s"],
    ["Số điểm dừng", "Thường 2–6 điểm dừng"],
    ["Chiều cao nâng", "Tùy model và hệ chuẩn dụng"],
    ["Truyền động", "Trục vít, thủy lực, cáp kéo, bánh răng – thanh răng"],
    ["Nguồn điện", "220V hoặc 380V tùy chọn"],
    ["Vật liệu", "Thép, inox, kính cường lực tùy model"],
];

const TECHNOLOGIES = [
    {
        id: "01",
        name: "Trục vít",
        des: "Cơ cấu vít – đai ốc, thường được lựa chọn cho một số động sàn nâng gia đình nhỏ gọn.",
    },
    {
        id: "02",
        name: "Thủy lực",
        des: "Sử dụng bơm dầu và xi lanh, cần kiểm tra van, đường ống và tính toán áp dầu định kì.",
    },
    {
        id: "03",
        name: "Cáp kéo / đối đai",
        des: "Dùng cơ cấu truyền qua cáp hoặc đai bố, thiết kế đối trọng và hệ dẫn hướng phù hợp.",
    },
    {
        id: "04",
        name: "Bánh răng – thanh răng",
        des: "Cơ cấu ăn khớp chuyển động, cần kiểm tra ăn khớp và độ mòn theo hướng dẫn hãng.",
    },
];

const SAFETY_ITEMS = [
    { id: 1, icon: <LockOutlined />, title: "Khóa liên động cửa", des: "Kiểm soát trạng thái cửa và điều kiện cho phép vận hành." },
    { id: 2, icon: <BlockOutlined />, title: "Chống kẹt, chống vật cản", des: "Cảm biến hoặc thanh an toàn theo cấu hình thiết bị." },
    { id: 3, icon: <ScaleOutlined />, title: "Bảo vệ quá tải", des: "Cảnh báo và ngăn vận hành khi tải vượt trọng lượng cho phép." },
    { id: 4, icon: <PanToolOutlined />, title: "Phanh và hãm an toàn", des: "Kiểm soát chuyển động và an toàn khi dừng." },
    { id: 5, icon: <HeightOutlined />, title: "Giới hạn hành trình", des: "Kiểm soát điểm dừng trên, dưới và trạng thái bất thường." },
    { id: 6, icon: <HealthAndSafetyOutlined />, title: "Hạ cứu hộ khẩn cấp", des: "Phương án đưa sàn về vị trí an toàn khi có sự cố." },
    { id: 7, icon: <PowerSettingsNewOutlined />, title: "Dừng khẩn cấp", des: "Cho phép người dùng kích hoạt dừng khi cần thiết." },
    { id: 8, icon: <BoltOutlined />, title: "Vận tốc & điện", des: "Bảo vệ nghẽn mạch, quá tải và bảo vệ người theo cấu hình." },
];

const SAFETY_IMAGES = [prod_2, safe_5, prod_3, safe_1];

const VALUES = [
    { id: 1, icon: <StraightenOutlined />, title: "Tối ưu diện tích", des: "Giải pháp gọn cho những công trình có mặt bằng hạn chế, tùy điều kiện lắp đặt." },
    { id: 2, icon: <AccessibleOutlined />, title: "Tăng khả năng tiếp cận", des: "Hỗ trợ người cao tuổi và người sử dụng xe lăn khi chọn đúng cấu hình chuyên dụng." },
    { id: 3, icon: <ApartmentOutlined />, title: "Hài hòa kiến trúc", des: "Kết hợp inox, kính và khung thép theo ngôn ngữ thiết kế của công trình." },
    { id: 4, icon: <TuneOutlined />, title: "Linh hoạt cấu hình", des: "Nhiều phương án truyền động, kiểu sàn và mức độ bao che." },
    { id: 5, icon: <BuildCircleOutlined />, title: "Phù hợp cải tạo", des: "Một số model có thể giảm yêu cầu đào sâu, cần khảo sát kết cấu thực tế." },
    { id: 6, icon: <FavoriteBorderOutlined />, title: "Chăm sóc dài lâu", des: "Kế hoạch bảo trì định kì giúp theo dõi tình trạng và duy trì vận hành." },
];

interface PricingPlan {
    id: number;
    tag: string;
    price: string;
    des: string;
    items: string[];
}

const PRICING: PricingPlan[] = [
    {
        id: 1,
        tag: "Cấu hình cơ bản",
        price: "200–300 triệu",
        des: "Sàn nâng mở, cấu hình đơn giản.",
        items: ["Thiết kế gọn", "Thông số theo model", "Khảo sát điều kiện lắp đặt"],
    },
    {
        id: 2,
        tag: "Cấu hình phổ biến",
        price: "270–700 triệu",
        des: "Sàn nâng trong mức độ phổ biến của nhà ở.",
        items: ["Nhiều lựa chọn truyền động", "Tùy chỉnh kích thước theo model", "Tư vấn thiết kế an toàn"],
    },
    {
        id: 3,
        tag: "Cấu hình nâng cao",
        price: "800 triệu–2 tỷ+",
        des: "Cấu hình nâng cao, thiết kế đặc thù.",
        items: ["Hoàn thiện cao cấp", "Cấu hình theo yêu cầu", "Hỗ trợ kỹ thuật theo sản phẩm"],
    },
];

const LOAD_OPTIONS = [
    { value: "250", label: "250 - 400 KG" },
    { value: "500", label: "500 - 700 KG" },
    { value: "1000", label: "Trên 1.000 KG" },
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

const IconBox: React.FC<{ children: React.ReactNode; size?: number }> = ({ children, size = 42 }) => (
    <Box
        sx={{
            width: size,
            height: size,
            borderRadius: 1.5,
            bgcolor: "#fff",
            border: `1px solid ${C.bg}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: C.bg,
            flexShrink: 0,
            "& svg": { fontSize: size * 0.45 },
        }}
    >
        {children}
    </Box>
);

/* ===================== COMPONENT ===================== */

const ElevatorRaisedFloor = () => {
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
        <Page title="Thang máy sàn nâng">
            <Box sx={{ bgcolor: C.bg }}>
                {/* ===================== HERO ===================== */}
                <Box
                    id="banner-elevator-raised-floor"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        color: "#fff",
                        bgcolor: C.bgPrimary,
                        minHeight: { xs: 460, md: 500 },
                    }}
                >
                    <Box
                        component="img"
                        src={banner}
                        alt="Thang máy sàn nâng"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "fit",
                            objectPosition: "right center",
                        }}
                    />
                    {/* Lớp phủ gradient xanh đậm mờ dần sang phải */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: {
                                xs: `linear-gradient(90deg, ${C.bgPrimary} 0%, rgba(5,47,39,0.92) 60%, rgba(5,47,39,0.78) 100%)`,
                                md: `linear-gradient(90deg, ${C.bgPrimary} 0%, ${C.bgPrimary} 30%, rgba(5,47,39,0.85) 50%, rgba(5,47,39,0.15) 85%, rgba(5,47,39,0) 100%)`,
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: { xs: 460, md: 500 },
                            px: SECTION_PX,
                            py: { xs: 5, md: 0 },
                            maxWidth: { md: "52%" },
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: 13, md: 16 }, fontWeight: 700, letterSpacing: "0.14em", color: C.textBanner }}>
                            THANG MÁY SÀN NÂNG
                        </Typography>
                        <Typography sx={{ mt: 2, fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            DI CHUYỂN NHẸ NHÀNG
                        </Typography>
                        <Typography sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            SỐNG TRỌN MỌI TẦNG
                        </Typography>
                        <Typography sx={{ mt: 3, fontSize: 15, color: C.whiteMuted, maxWidth: 460 }}>
                            Giải pháp sàn nâng hiện đại giúp kết nối các tầng trong ngôi nhà — tối ưu
                            diện tích, nâng cao khả năng tiếp cận và hài hòa với kiến trúc.
                        </Typography>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                            <Button
                                onClick={() => handleScrollToSection('elevator-raised-floor-product')}
                                sx={{ bgcolor: C.button, color: C.primary, fontWeight: 700, px: 3, py: 1.25, "&:hover": { bgcolor: "#dcd9c6" } }}
                            >
                                KHÁM PHÁ SẢN PHẨM
                            </Button>
                            <Button
                                onClick={handleContact}
                                variant="outlined"
                                sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)", fontWeight: 700, px: 3, py: 1.25, "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.08)" } }}
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
                            <Grid key={stat.id} size={{ xs: 6, md: 3 }} sx={{ textAlign: "center", borderLeft: { md: idx === 0 ? "none" : `1px solid ${C.border}` } }}>
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

                {/* ===================== GIẢI PHÁP DI CHUYỂN ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={1.5}>
                                <Grid size={6}>
                                    <CommonImage src={prod_1} sx={{ width: "100%", height: { xs: 220, md: 350 }, objectFit: "cover", borderRadius: 2 }} />
                                </Grid>
                                <Grid size={6}>
                                    <CommonImage src={safe_2} sx={{ width: "100%", height: { xs: 220, md: 350 }, objectFit: "cover", borderRadius: 2 }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                GIẢI PHÁP DI CHUYỂN
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1, mb: 2, fontSize: { xs: 24, md: 30 } }}>
                                Thêm tiện nghi, không thêm phức tạp.
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, lineHeight: 1.7, mb: 2.5 }}>
                                Thang máy sàn nâng (Platform Lift) là thiết bị nâng hạ theo phương thẳng
                                đứng, sử dụng mặt sàn để đưa người hoặc hàng hóa giữa các cao độ. Tùy
                                công trình, thiết bị có thể có sàn mở, lan can bảo vệ hoặc vách bao kín.
                            </Typography>
                            <Stack direction='column' spacing={1.25}>
                                {SOLUTION_CHECKS.map((item) => (
                                    <Stack key={item} direction="row" spacing={1.25} alignItems="flex-start">
                                        <CheckCircle sx={{ fontSize: 20, color: "#5BB89A", mt: "1px" }} />
                                        <Typography sx={{ fontSize: 14, color: C.white }}>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== DANH MỤC SẢN PHẨM ===================== */}
                <Box id="elevator-raised-floor-product" sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="DANH MỤC SẢN PHẨM"
                        title="Một giải pháp - nhiều cách ứng dụng"
                        sub="Lựa chọn cấu hình phù hợp với kiến trúc, đối tượng sử dụng và mục đích vận chuyển."
                    />
                    <Grid container spacing={2}>
                        {PRODUCTS.map((p) => (
                            <Grid key={p.id} size={{ xs: 12, md: 4 }}>
                                <Box sx={{ bgcolor: C.white, color: "#fff", borderRadius: 2, border: `1px solid ${C.border}`, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                    <CommonImage src={p.image} sx={{ width: "100%", height: 250, objectFit: "fit", borderRadius: 0 }} />
                                    <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg }}>{p.name}</Typography>
                                        <Typography sx={{ fontSize: 12.5, color: C.bg, mt: 1, lineHeight: 1.6, flexGrow: 1 }}>
                                            {p.des}
                                        </Typography>
                                        <Button
                                            onClick={handleContact}
                                            fullWidth
                                            sx={{ mt: 2, bgcolor: C.bg, color: "#fff", fontWeight: 600, "&:hover": { bgcolor: "#135640" } }}
                                        >
                                            Nhận tư vấn
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== THÔNG SỐ KỸ THUẬT ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                THÔNG SỐ KỸ THUẬT
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1.5, fontSize: { xs: 24, md: 30 } }}>
                                Đúng cấu hình cho đúng nhu cầu
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mt: 2, mb: 3 }}>
                                Các chỉ số thông số dưới đây chỉ mang tính định hướng tham khảo. Thông số
                                chốt cần dựa trên catalogue của model, hiện trạng và tiêu chuẩn áp dụng.
                            </Typography>
                            <Button
                                onClick={handleContact}
                                sx={{ bgcolor: C.button, color: C.primary, fontWeight: 700, px: 3, py: 1.1, "&:hover": { bgcolor: "#dcd9c6" } }}
                            >
                                Nhận tư vấn kĩ thuật
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ bgcolor: C.cream, borderRadius: 2, overflow: "hidden" }}>
                                <Box sx={{ display: "flex", bgcolor: C.button, color: "#fff", px: 2.5, py: 1.5 }}>
                                    <Typography sx={{ flex: 1, fontSize: 15, fontWeight: 700, color: C.bg }}>Hạng mục</Typography>
                                    <Typography sx={{ flex: 1.3, fontSize: 15, fontWeight: 700, color: C.bg }}>Tham khảo</Typography>
                                </Box>
                                {SPEC_ROWS.map(([label, value], i) => (
                                    <Box
                                        key={label}
                                        sx={{ display: "flex", px: 2.5, py: 1.5, borderTop: "1px solid #E4E3D7", bgcolor: i % 2 ? "rgba(0,0,0,0.02)" : "transparent" }}
                                    >
                                        <Typography sx={{ flex: 1, fontSize: 13, fontWeight: 600, color: C.cardText }}>{label}</Typography>
                                        <Typography sx={{ flex: 1.3, fontSize: 13, color: C.cardMuted }}>{value}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== CÔNG NGHỆ TRUYỀN ĐỘNG ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="CÔNG NGHỆ TRUYỀN ĐỘNG"
                        title="Chọn cơ cấu phù hợp công trình"
                        sub="Mỗi công nghệ có đặc tính vận hành, bảo trì và yêu cầu lắp đặt riêng. Việc lựa chọn cần dựa trên tải trọng, hành trình và tần suất sử dụng."
                    />
                    <Grid container spacing={2}>
                        {TECHNOLOGIES.map((t) => (
                            <Grid key={t.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 3, height: "100%" }}>
                                    <Typography sx={{ fontWeight: 800, fontSize: 35, color: C.primary }}>{t.id}</Typography>
                                    <Typography sx={{ fontWeight: 700, fontSize: 18, color: C.cardText, mt: 1, mb: 1 }}>{t.name}</Typography>
                                    <Typography sx={{ fontSize: 13, color: C.cardMuted, lineHeight: 1.6 }}>{t.des}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== AN TOÀN LÀ ƯU TIÊN ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={1.5}>
                                {SAFETY_IMAGES.map((img, idx) => (
                                    <Grid key={idx} size={6}>
                                        <CommonImage src={img} sx={{ width: "100%", height: { xs: 150, md: 240 }, objectFit: "fit", borderRadius: 2 }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                AN TOÀN LÀ ƯU TIÊN
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1, mb: 1, fontSize: { xs: 24, md: 30 } }}>
                                Bảo vệ được tính từ từng chi tiết.
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mb: 3 }}>
                                Thiết bị an toàn phải được lựa chọn đồng bộ theo loại sàn nâng, cơ cấu
                                truyền động và tiêu chuẩn áp dụng.
                            </Typography>
                            <Grid container spacing={2}>
                                {SAFETY_ITEMS.map((s) => (
                                    <Grid key={s.id} size={{ xs: 12, sm: 6 }}>
                                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: "50%",
                                                    bgcolor: "rgba(45,157,132,0.15)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: C.textBanner,
                                                    flexShrink: 0,
                                                    "& svg": { fontSize: 18 },
                                                }}
                                            >
                                                {s.icon}
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontSize: 16, fontWeight: 700, color: C.white }}>{s.title}</Typography>
                                                <Typography sx={{ fontSize: 13, color: C.whiteMuted, lineHeight: 1.5 }}>{s.des}</Typography>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== GIÁ TRỊ SỬ DỤNG ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading label="GIÁ TRỊ SỬ DỤNG" title="Thiết kế cho cuộc sống thuận tiện hơn." />
                    <Grid container spacing={2}>
                        {VALUES.map((v) => (
                            <Grid key={v.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box sx={{ bgcolor: C.cream, borderRadius: 2, p: 2.5, height: "100%", display: "flex", flexDirection: 'column', gap: 2 }}>
                                    <IconBox>{v.icon}</IconBox>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: C.bg, mb: 0.5 }}>{v.title}</Typography>
                                        <Typography sx={{ fontSize: 13, color: C.bg, lineHeight: 1.6 }}>{v.des}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== CHI PHÍ THAM KHẢO ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="CHI PHÍ THAM KHẢO"
                        title="Đầu tư phù hợp với nhu cầu."
                        sub="Mức giá dưới đây chỉ để lập ngân sách ban đầu. Báo giá chính thức cần xác định model, tải trọng, số điểm dừng và điều kiện thi công."
                    />
                    <Grid container spacing={2}>
                        {PRICING.map((plan) => (
                            <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
                                <Box sx={{ color: "#fff", borderRadius: 2, border: `1px solid ${C.border}`, height: "100%", display: "flex", flexDirection: "column" }}>
                                    <Stack direction='column' sx={{  p: { xs: 2.5, md: 3 } }}>
                                    <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: C.whiteFaint }}>
                                        {plan.tag}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 800, fontSize: 26, mt: 1 }}>{plan.price}</Typography>
                                    <Typography sx={{ fontSize: 12.5, color: C.whiteMuted, mt: 0.5, mb: 2 }}>{plan.des}</Typography>
                                    </Stack>
                                    <Stack bgcolor={C.white} direction='column' spacing={1.5} sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
                                        {plan.items.map((it) => (
                                            <Stack key={it} direction="row" spacing={1} alignItems="center">
                                                <CheckCircle sx={{ fontSize: 18, color: "#5BB89A" }} />
                                                <Typography sx={{ fontSize: 13, color: C.bg }}>{it}</Typography>
                                            </Stack>
                                        ))}
                                        <Button
                                            onClick={handleContact}
                                            fullWidth
                                            sx={{ mt: 2.5, bgcolor: C.accent, color: "#fff", fontWeight: 600, "&:hover": { bgcolor: "#135640" } }}
                                        >
                                            Nhận tư vấn
                                        </Button>                                        
                                    </Stack>

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
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>Tên đầy đủ</Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>Số điện thoại</Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>Tải trọng quan tâm</Typography>
                                        <InputSelect
                                            label=""
                                            name=""
                                            value={""}
                                            onChange={() => {}}
                                            options={LOAD_OPTIONS}
                                            transformOptions={(data) => data.map((item) => ({ value: item.value, label: item.label }))}
                                            placeholder="Chọn thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>Số tầng công trình</Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>Địa chỉ</Typography>
                                        <InputText label="" name="" value={""} onChange={() => {}} type="text" placeholder="Nhập thông tin" multiline rows={5} />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            onClick={handleContact}
                                            endIcon={<ArrowForward />}
                                            sx={{ bgcolor: C.primary, color: "#fff", fontWeight: 700, px: 3, py: 1.1, "&:hover": { bgcolor: "#052a22" } }}
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

export default ElevatorRaisedFloor;
