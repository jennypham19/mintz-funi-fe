import {
    AccessibleOutlined,
    ApartmentOutlined,
    ArrowForward,
    HealthAndSafetyOutlined,
    StraightenOutlined,
} from "@mui/icons-material";
import {
    Box,
    Button,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import e_family_1 from "@/assets/images/users/elevator/e_family/e_family_1.png";
import e_family_3 from "@/assets/images/users/elevator/e_family/e_family_3.png";
import e_family_4 from "@/assets/images/users/elevator/e_family/e_family_4.png";
import banner_family_1 from "@/assets/images/users/elevator/e_family/banner_family_1.png";
import banner_family_2 from "@/assets/images/users/elevator/e_family/banner_family_2.png";
import banner_family_3 from "@/assets/images/users/elevator/e_family/banner_family_3.png";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import Page from "@/components/Page";
import { useEffect } from "react";

/* ===================== THEME =====================
 * Màu chủ đạo: #031512 (COLORS.PRIMARY)
 * Toàn trang nền xanh đậm, chữ trắng, thẻ nội dung màu kem.
 */
const C = {
    bg: "#031512", // nền xanh chính (cùng tông #031512)
    cardDark: "#072A20", // thẻ tối (gói giá, kinh nghiệm) ~ #031512
    primary: COLORS.PRIMARY, // #031512
    border: "rgba(255,255,255,0.12)",
    cream: "#F2F1E7", // thẻ nội dung sáng
    cardText: "#1E2621",
    cardMuted: "#5E655F",
    cardMutedLight: "#8A908A",
    white: "#FFFFFF",
    whiteMuted: "rgba(255,255,255,0.72)",
    whiteFaint: "rgba(255,255,255,0.5)",
    button: "#E8E6D9",
    bgLight: "#DDECE9",
    bgPrimary: "#052F27",
    textBanner: '#2D9D84'
};

const HERO_IMAGES = [banner_family_1, banner_family_2, banner_family_3];

/* ===================== DATA ===================== */

const STATS = [
    { id: 1, value: "200KG - 450KG", label: "Dải tải trọng giới thiệu" },
    { id: 2, value: "01 - 06 người", label: "nhu cầu sử dụng tham khảo" },
    { id: 3, value: "3 công nghệ", label: "cáp kéo - thủy lực - trục vít" },
    { id: 4, value: "10 năm", label: "Bảo hành - Bảo trì" },
];

const VALUES = [
    {
        id: 1,
        icon: <AccessibleOutlined />,
        title: "Di chuyển nhẹ nhàng",
        des: "Giảm sức lao động khi đi lại giữa các tầng, thuận tiện cả khi mang theo đồ đạc.",
    },
    {
        id: 2,
        icon: <HealthAndSafetyOutlined />,
        title: "An tâm cho gia đình",
        des: "Hỗ trợ người cao tuổi, trẻ nhỏ và người hạn chế vận động, giảm nguy cơ té ngã cầu thang.",
    },
    {
        id: 3,
        icon: <StraightenOutlined />,
        title: "Tối ưu diện tích",
        des: "Lựa chọn kích thước và vị trí lắp đặt phù hợp với hiện trạng công trình.",
    },
    {
        id: 4,
        icon: <ApartmentOutlined />,
        title: "Tăng giá trị kiến trúc",
        des: "Tạo điểm nhấn hiện đại, sang trọng và khai thác hiệu quả các tầng cao.",
    },
];

interface PricingPlan {
    id: number;
    tag: string;
    weight: string;
    people: string;
    price: string;
    specs: [string, string][];
}

const PRICING: PricingPlan[] = [
    {
        id: 1,
        tag: "MINI - NHÀ CẢI TẠO",
        weight: "200 KG",
        people: "Phù hợp 1 - 2 người",
        price: "320 - 420 TRIỆU",
        specs: [
            ["Hố thang", "900 x 1000 mm"],
            ["Cabin", "400 x 550 mm"],
            ["Động cơ", "Kinetec"],
            ["PIT", "100mm / không PIT"],
            ["Tốc độ", "0,3 m/s"],
        ],
    },
    {
        id: 2,
        tag: "GỌN GÀNG - NHÀ PHỐ",
        weight: "250 KG",
        people: "Phù hợp 2 - 3 người",
        price: "340 - 440 TRIỆU",
        specs: [
            ["Hố thang", "1000 x 1100 mm"],
            ["Cabin", "700 x 650 mm"],
            ["Động cơ", "Kinetec"],
            ["PIT", "100mm / không PIT"],
            ["Tốc độ", "0,3 m/s"],
        ],
    },
    {
        id: 3,
        tag: "GIA ĐÌNH - TIÊU CHUẨN",
        weight: "350 KG",
        people: "Phù hợp 4 - 5 người",
        price: "330 - 480 TRIỆU",
        specs: [
            ["Hố thang", "1500 x 1500 mm"],
            ["Cabin", "1100 x 950 mm"],
            ["Động cơ", "Nidec KDS"],
            ["PIT", "Từ 500 mm"],
            ["Tốc độ", "0,6 m/s"],
        ],
    },
    {
        id: 4,
        tag: "CAO CẤP - BIỆT THỰ",
        weight: "450 KG",
        people: "Phù hợp 5 - 6 người",
        price: "350 - 500 TRIỆU",
        specs: [
            ["Hố thang", "1600 x 1600 mm"],
            ["Cabin", "1200 x 1050 mm"],
            ["Động cơ", "Nidec KDS"],
            ["PIT", "Từ 700 mm"],
            ["Tốc độ", "0,6 m/s"],
        ],
    },
];

interface SolutionItem {
    id: string;
    name: string;
    rows: [string, string][];
}

const SOLUTIONS: SolutionItem[] = [
    {
        id: "01",
        name: "Nhà ống nhỏ – 3–5 tầng",
        rows: [
            ["Gợi ý", "250kg - Hố thang 1000×1100mm"],
            ["Vị trí", "Khe lồng cầu thang hoặc giếng trời"],
            ["Công nghệ", "Cáp kéo Kinetec"],
        ],
    },
    {
        id: "02",
        name: "Gia đình có người cao tuổi/trẻ nhỏ",
        rows: [
            ["Gợi ý", "350kg"],
            ["Vị trí", "Khe lồng cầu thang giếng trời"],
            ["Ưu tiên", "Cabin thuận tiện cho nhu cầu gia đình"],
        ],
    },
    {
        id: "03",
        name: "Nhà phố cải tạo - Hạn chế chiều cao",
        rows: [
            ["Gợi ý", "200kg - Hố thang 900×1000mm"],
            ["Vị trí", "Góc nhà hoặc khe cầu thang"],
            ["Công nghệ", "Cáp đạt Kinetec không phòng máy"],
        ],
    },
    {
        id: "04",
        name: "Biệt thự - Nhà phố diện tích lớn",
        rows: [
            ["Gợi ý", "450kg, 550kg hoặc 630kg"],
            ["Vị trí", "Ngoài trời cạnh ban công hoặc giếng trời"],
            ["Ưu tiên", "Cáp kéo Nidec KDS"],
        ],
    },
];

const TECHNOLOGIES = [
    {
        id: "01",
        name: "CÁP KÉO",
        des: "Sử dụng máy kéo, cáp tải và đối trọng. Ưu điểm là vận hành ổn định, tốc độ tốt, tiết kiệm điện và linh kiện phổ biến, thuận tiện bảo trì.",
    },
    {
        id: "02",
        name: "THỦY LỰC",
        des: "Sử dụng piston thủy lực để nâng hạ cabin, không cần phòng máy phía trên. Tốc độ thường chậm hơn, chi phí đầu tư và bảo trì cần cân nhắc.",
    },
    {
        id: "03",
        name: "TRỤC VÍT",
        des: "Sử dụng động cơ điện liền trục vít và đai curoa. Có ưu điểm tiết kiệm diện tích, PIT nông; tốc độ chậm và linh kiện thay thế có thể có chi phí cao.",
    },
];

const EXPERIENCES = [
    {
        id: 1,
        title: "Chọn công nghệ phù hợp",
        des: "Cáp kéo phù hợp khi ưu tiên độ bền và chi phí vận hành; thủy lực và trục vít cần được cân nhắc theo đặc điểm công trình.",
    },
    {
        id: 2,
        title: "Xác định tải trọng",
        des: "Cân đối số thành viên sử dụng thường xuyên và diện tích xây dựng. Gia đình khoảng 4 người có thể tham khảo tải trọng 300–350kg.",
    },
    {
        id: 3,
        title: "Chọn đơn vị uy tín",
        des: "Ưu tiên hồ sơ CO, CQ, quy trình lắp đặt rõ ràng, bảo hành minh bạch và dịch vụ bảo trì sau bàn giao.",
    },
];

const LOAD_OPTIONS = [
    {
        value: '200',
        label: '200 KG'
    },
    {
        value: '250',
        label: '250 KG'
    },
    {
        value: '350',
        label: '350 KG'
    },
    {
        value: '450',
        label: '450 KG'
    },
    {
        value: '550',
        label: '550 KG trở lên'
    }
];

const SECTION_PX = { xs: 2.5, md: 8, lg: 15 };
const SECTION_PY = { xs: 4.5, md: 7 };

/* ===================== SECTION HEADING ===================== */

const SectionHeading: React.FC<{ label: string; title: string; sub?: string }> = ({
    label,
    title,
    sub,
}) => (
    <Stack direction='column' spacing={1.25} alignItems="center" textAlign="center" mb={{ xs: 3.5, md: 4.5 }}>
        <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.white }}>
            {label}
        </Typography>
        <Typography sx={{ fontWeight: 700, color: C.white, fontSize: { xs: 24, md: 32 } }}>
            {title}
        </Typography>
        {sub && (
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, maxWidth: 680, color: C.whiteMuted }}>
                {sub}
            </Typography>
        )}
    </Stack>
);

/* ===================== COMPONENT ===================== */

const ElevatorFamily = () => {
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
        <Page title="Thang máy gia đình">
            <Box sx={{ bgcolor: C.bg }}>
                {/* ===================== HERO ===================== */}
                <Box id="banner_elevator_family" sx={{ bgcolor: C.bgPrimary, color: "#fff", px: SECTION_PX, pt: { xs: 4.5, md: 7 }, pb: { xs: 4, md: 5 } }}>
                    <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.14em", color: C.textBanner }}>
                                GIẢI PHÁP THANG MÁY GIA ĐÌNH
                            </Typography>
                            <Typography sx={{ mt: 2, fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                                DI CHUYỂN TIỆN NGHI
                            </Typography>
                            <Typography sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                                KHÔNG GIAN NÂNG TẦM
                            </Typography>
                            <Typography sx={{ mt: 3, fontSize: 15, color: C.whiteMuted, maxWidth: 520 }}>
                                Mintz Funi mang đến giải pháp thang máy gia đình được lựa chọn theo diện
                                tích, kết cấu và nhu cầu sử dụng – tối ưu trải nghiệm di chuyển trong
                                từng ngôi nhà.
                            </Typography>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                                <Button
                                    onClick={() => handleScrollToSection("elevator-family-loading-capacity")}
                                    sx={{
                                        bgcolor: C.button,
                                        color: C.primary,
                                        fontWeight: 700,
                                        px: 3,
                                        py: 1.25,
                                        "&:hover": { bgcolor: "#dcd9c6" },
                                    }}
                                >
                                    KHÁM PHÁ TẢI TRỌNG
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
                                    NHẬN TƯ VẤN
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={0.5}>
                                {HERO_IMAGES.map((img, idx) => (
                                    <Grid key={idx} size={4}>
                                        <CommonImage
                                            src={img}
                                            sx={{
                                                width: "100%",
                                                height: { xs: 150, sm: 220, md: 350 },
                                                objectFit: "cover",
                                                borderRadius: 0
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>


                </Box>
                    {/* STATS BAR */}
                    <Box
                        sx={{
                            mt: { xs: 3.5, md: 5 },
                            mx: { xs: 2.5, md: 8, lg: 15 },
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
                                        borderLeft: { md: idx === 0 ? "none" : `1px solid ${C.border}` },
                                        pl: { md: idx === 0 ? 0 : 3 },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 800, fontSize: { xs: 17, md: 22 }, color: C.white }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography sx={{ fontSize: { xs: 12, md: 13 }, color: C.whiteMuted, mt: 0.5 }}>
                                        {stat.label}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>            

                {/* ===================== GIÁ TRỊ SỬ DỤNG ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="GIÁ TRỊ SỬ DỤNG"
                        title="Thang máy tiện nghi cho mọi thành viên"
                        sub="Không chỉ hỗ trợ di chuyển, thang còn góp phần hoàn thiện công năng và nâng cao giá trị không gian sống."
                    />
                    <Grid container spacing={2}>
                        {VALUES.map((v) => (
                            <Grid key={v.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box sx={{ bgcolor: C.cream, borderRadius: 2, p: 2.5, height: "100%" }}>
                                    <Box
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 1.5,
                                            bgcolor: "#fff",
                                            border: `1px solid ${C.bg}`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: C.primary,
                                            mb: 1.5,
                                        }}
                                    >
                                        {v.icon}
                                    </Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.cardText, mb: 0.75 }}>
                                        {v.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: C.cardMuted, lineHeight: 1.6 }}>
                                        {v.des}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== PHÂN KHÚC TẢI TRỌNG ===================== */}
                <Box id="elevator-family-loading-capacity" sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="LỰA CHỌN THEO NHU CẦU"
                        title="Các phân khúc tải trọng"
                        sub="Mỗi dòng thang được định hướng cho một quy mô công trình và số người sử dụng khác nhau. Thông số dưới đây là tham khảo theo tài liệu sản phẩm."
                    />
                    <Grid container spacing={2}>
                        {PRICING.map((plan) => (
                            <Grid key={plan.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box
                                    sx={{
                                        bgcolor: C.cardDark,
                                        color: "#fff",
                                        borderRadius: 2,
                                        border: `1px solid ${C.border}`,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box sx={{ p: 2.5, borderBottom: `1px solid ${C.border}` }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.white }}>
                                            {plan.tag}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: 30, mt: 1 }}>
                                            {plan.weight}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, color: C.whiteMuted }}>
                                            {plan.people}
                                        </Typography>
                                    </Box>
                                    <Box bgcolor={C.white} color={C.bg} sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.bg }}>
                                            GIÁ THAM KHẢO
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 1.5 }}>
                                            {plan.price}
                                        </Typography>
                                        <Stack direction='column' spacing={1} sx={{ flexGrow: 1 }}>
                                            {plan.specs.map(([label, value]) => (
                                                <Box
                                                    key={label}
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        gap: 1,
                                                        pb: 0.75,
                                                        borderBottom: `1px solid ${C.button}`,
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: 11.5, color: C.bg }}>
                                                        {label}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 11.5, fontWeight: 600, textAlign: "right" }}>
                                                        {value}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                        <Button
                                            onClick={handleContact}
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                color: "#fff",
                                                bgcolor: C.bg,
                                                fontWeight: 600,
                                                "&:hover": { borderColor: "#fff", bgcolor: C.bg },
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

                {/* ===================== PHÙ HỢP TỪNG KIỂU NHÀ ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} size={{ xs: 12, md: 4 }}>
                            <Typography sx={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                CHỌN ĐÚNG GIẢI PHÁP
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1.5, fontSize: { xs: 24, md: 36 } }}>
                                Phù hợp với
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, fontSize: { xs: 24, md: 32 } }}>
                                từng kiểu nhà
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mt: 2, maxWidth: 320 }}>
                                Gợi ý lựa chọn ban đầu dựa trên quy mô, diện tích và đặc điểm sử dụng
                                của công trình.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Grid container spacing={2}>
                                {SOLUTIONS.map((s) => (
                                    <Grid key={s.id} size={{ xs: 12, sm: 6 }}>
                                        <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 2.5, height: "100%" }}>
                                            <Box
                                                sx={{
                                                    width: 34,
                                                    height: 34,
                                                    borderRadius: 1,
                                                    bgcolor: C.bgLight,
                                                    border: `1px solid ${C.bg}`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: C.primary,
                                                    fontWeight: 800,
                                                    fontSize: 13,
                                                    mb: 1.5,
                                                }}
                                            >
                                                {s.id}
                                            </Box>
                                            <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg, mb: 1.5 }}>
                                                {s.name}
                                            </Typography>
                                            <Stack direction='column' spacing={0.75}>
                                                {s.rows.map(([label, value]) => (
                                                    <Box key={label} sx={{ display: "flex", gap: 1 }}>
                                                        <Typography sx={{ fontSize: 12.5, color: C.bg, minWidth: 64, fontWeight: 600 }}>
                                                            {label}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 12.5, color: C.bg }}>
                                                            {value}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== CÔNG NGHỆ VẬN HÀNH ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="CÔNG NGHỆ VẬN HÀNH"
                        title="Ba công nghệ phổ biến hiện nay"
                        sub="Hiểu đặc điểm từng công nghệ để lựa chọn phương án phù hợp với kết cấu và ngân sách."
                    />
                    <Grid container spacing={2}>
                        {TECHNOLOGIES.map((t) => (
                            <Grid key={t.id} size={{ xs: 12, md: 4 }}>
                                <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 3, height: "100%" }}>
                                    <Typography sx={{ fontWeight: 800, fontSize: 32, color: C.bg }}>
                                        {t.id}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", color: C.bg, mt: 1, mb: 1 }}>
                                        {t.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 13.5, color: C.bg, lineHeight: 1.65 }}>
                                        {t.des}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== KINH NGHIỆM LỰA CHỌN ===================== */}
                <Box sx={{ bgcolor: C.bgPrimary, px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="KINH NGHIỆM LỰA CHỌN"
                        title="Ba điều cần cân nhắc khi lắp đặt"
                        sub="Lựa chọn đúng ngay từ đầu giúp tối ưu chi phí, diện tích và trải nghiệm sử dụng lâu dài."
                    />
                    <Grid container spacing={2}>
                        {EXPERIENCES.map((e) => (
                            <Grid key={e.id} size={{ xs: 12, md: 4 }}>
                                <Box
                                    sx={{
                                        bgcolor: C.white,
                                        border: `1px solid ${C.border}`,
                                        borderRadius: 2,
                                        p: 3,
                                        height: "100%",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg, mb: 1 }}>
                                        {e.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 13.5, color: C.bg, lineHeight: 1.65 }}>
                                        {e.des}
                                    </Typography>
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
                                        <InputText
                                            label=""
                                            name=""
                                            value={''}
                                            onChange={() => {}}
                                            type="text"
                                            placeholder="Nhập thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Số điện thoại
                                        </Typography>
                                        <InputText
                                            label=""
                                            name=""
                                            value={''}
                                            onChange={() => {}}
                                            type="text"
                                            placeholder="Nhập thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Tải trọng quan tâm
                                        </Typography>
                                        <InputSelect
                                            label=""
                                            name=""
                                            value={''}
                                            onChange={() => {}}
                                            options={LOAD_OPTIONS}
                                            transformOptions={(data) => 
                                                data.map((item) => ({
                                                    value: item.value,
                                                    label: item.label
                                                }))
                                            }
                                            placeholder="Chọn thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Số tầng công trình
                                        </Typography>
                                        <InputText
                                            label=""
                                            name=""
                                            value={''}
                                            onChange={() => {}}
                                            type="text"
                                            placeholder="Nhập thông tin"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Typography sx={{ fontSize: 15, fontWeight: 600, color: C.cardText, mb: 0.75 }}>
                                            Địa chỉ
                                        </Typography>
                                        <InputText
                                            label=""
                                            name=""
                                            value={''}
                                            onChange={() => {}}
                                            type="text"
                                            placeholder="Nhập thông tin"
                                            multiline
                                            rows={5}
                                        />
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

export default ElevatorFamily;
