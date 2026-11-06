import {
    ArrowForward,
    AutorenewOutlined,
    CheckCircle,
    DashboardOutlined,
    Inventory2Outlined,
    ViewInArOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import banner_load from "@/assets/images/users/elevator/e_load_goods/elevator_load_good_2.png";
import load_good from "@/assets/images/users/elevator/e_load_goods/elevator_load_good.png";
import load_good_1 from "@/assets/images/users/elevator/e_load_goods/elevator_load_good_1.png";
import load_good_3 from "@/assets/images/users/elevator/e_load_goods/elevator_load_good_3.png";
import Page from "@/components/Page";
import { useEffect } from "react";

/* ===================== THEME =====================
 * Màu chủ đạo: #031512 (COLORS.PRIMARY)
 * Toàn trang nền xanh đậm, chữ trắng, thẻ nội dung màu kem.
 */
const C = {
    bg: "#031512", // nền xanh chính
    cardDark: "#072A20", // thẻ tối (gói giá)
    primary: COLORS.PRIMARY, // #031512
    accent: "#0F4433", // nút filled xanh trên nền tối
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
    textBanner: "#2D9D84",
};

/* ===================== DATA ===================== */

const STATS = [
    { id: 1, title: "500KG - 5000KG", sub: "Dải tải trọng ứng dụng" },
    { id: 2, title: "KHO - XƯỞNG", sub: "Nhà máy - cao ốc" },
    { id: 3, title: "HỖ TRỢ", sub: "Vận chuyển hàng hóa" },
    { id: 4, title: "AN TOÀN", sub: "Ưu tiên vận hành ổn định" },
];

const OVERVIEW_CHECKS = [
    "Hỗ trợ vận chuyển nhiều loại hàng hóa, thiết bị và vật tư.",
    "Phù hợp với nhu cầu luân chuyển hàng giữa các tầng.",
    "Góp phần duy trì tiến độ hoạt động của kho và dây chuyền sản xuất.",
];

const DESIGN_STANDARDS = [
    {
        id: 1,
        icon: <Inventory2Outlined />,
        title: "Chịu tải bền bỉ",
        des: "Kết cấu chắc chắn, khả năng chịu tải và chịu ma sát tốt, đáp ứng yêu cầu sử dụng lâu dài.",
    },
    {
        id: 2,
        icon: <AutorenewOutlined />,
        title: "Hoạt động tần suất cao",
        des: "Phù hợp nhu cầu vận chuyển, xuất – nhập hàng liên tục tại khu công nghiệp và nhà máy sản xuất.",
    },
    {
        id: 3,
        icon: <ViewInArOutlined />,
        title: "Cabin thông thoáng",
        des: "Không gian cabin được tính toán để việc đưa hàng vào, lấy hàng ra thuận tiện, hạn chế vướng mắc.",
    },
    {
        id: 4,
        icon: <DashboardOutlined />,
        title: "Tối ưu mặt bằng",
        des: "Thiết kế gọn gàng, dễ bố trí và lắp đặt theo điều kiện không gian của công trình.",
    },
];

interface PricingPlan {
    id: number;
    tag: string;
    weight: string;
    people: string;
    des: string;
}

const PRICING: PricingPlan[] = [
    {
        id: 1,
        tag: "QUY MÔ GỌN",
        weight: "500 KG",
        people: "Hàng hóa tải nhẹ - vừa",
        des: "Phù hợp nhu cầu vận chuyển hàng hóa, vật tư và thiết bị có khối lượng vừa.",
    },
    {
        id: 2,
        tag: "VẬN CHUYỂN THƯỜNG XUYÊN",
        weight: "1000 KG",
        people: "Hàng hóa tải trung bình",
        des: "Thích hợp cho nhà hàng, cơ sở sản xuất và hoạt động luân chuyển cho cao.",
    },
    {
        id: 3,
        tag: "QUY MÔ CÔNG NGHIỆP",
        weight: "2000 KG",
        people: "Hàng hóa tải nặng",
        des: "Giải hướng cho nhu cầu nâng chuyển hàng nặng, máy móc và pallet hàng.",
    },
    {
        id: 4,
        tag: "SIÊU TẢI TRỌNG",
        weight: "3000 - 5000 KG",
        people: "Hàng hóa siêu nặng",
        des: "Phù hợp nhà máy, kho vận có khối lượng hàng hóa lớn. Dành cho yêu cầu chuyển chở tải trọng lớn tại nhà máy và trung tâm logistics.",
    },
];

interface BenefitItem {
    id: string;
    title: string;
    des: string;
}

const BENEFITS: BenefitItem[] = [
    {
        id: "01",
        title: "Linh hoạt nhiều loại hàng",
        des: "Hỗ trợ chuyển chở đa dạng hàng hóa, vật tư và thiết bị theo nhu cầu vận hành.",
    },
    {
        id: "02",
        title: "Rút ngắn thời gian",
        des: "Giảm thời gian vận chuyển giữa các tầng, góp phần nâng cao năng suất lao động.",
    },
    {
        id: "03",
        title: "An toàn và hiệu quả",
        des: "Hạn chế va chạm và rủi ro trong quá trình vận chuyển, hỗ trợ bảo vệ hàng hóa và người lao động.",
    },
    {
        id: "04",
        title: "Vận hành êm ái",
        des: "Hướng dẫn vận hành ổn định, hạn chế rung lắc trong quá trình vận chuyển.",
    },
];

const WORKFLOW = [
    {
        id: 1,
        tag: "1/ Tiếp nhận",
        title: "Khu vực nhập hàng",
        des: "Đưa hàng hóa, vật tư từ khu vực tiếp nhận vào hệ thống vận chuyển.",
    },
    {
        id: 2,
        tag: "2/ VẬN CHUYỂN",
        title: "Di chuyển giữa tầng",
        des: "Luân chuyển hàng hóa theo tuyến, kế hoạch hoạt động của doanh nghiệp.",
    },
    {
        id: 3,
        tag: "3/ PHÂN BỐ",
        title: "Kho và khu sản xuất",
        des: "Đưa hàng đến từng lưu trữ, khu vực gia công hoặc điểm sử dụng.",
    },
    {
        id: 4,
        tag: "4/ XUẤT HÀNG",
        title: "Hoàn tất luân chuyển",
        des: "Hỗ trợ quy trình lấy hàng, đóng gói và xuất kho đúng kế hoạch.",
    },
];

const LOAD_OPTIONS = [
    { value: "500", label: "500 KG" },
    { value: "1000", label: "1000 KG" },
    { value: "2000", label: "2000 KG" },
    { value: "3000", label: "3000 - 5000 KG" },
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
            <Typography sx={{ fontSize: { xs: 13, md: 14 }, maxWidth: 680, color: C.whiteMuted }}>
                {sub}
            </Typography>
        )}
    </Stack>
);

/* ===================== COMPONENT ===================== */

const ElevatorLoadGood = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContact = () => {
        navigate("/thang-may", { state: { scrollTo: "contact" } });
    };

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        element?.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    }

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

    return (
        <Page title="Thang máy tải hàng/chuyên dụng">
            <Box sx={{ bgcolor: C.bg }}>
                {/* ===================== HERO ===================== */}
                <Box
                    id='banner_elevator_load_goods'
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        color: "#fff",
                        bgcolor: C.bgPrimary,
                        minHeight: { xs: 460, md: 480 },
                    }}
                >
                    {/* Ảnh nền full-bleed, lệch về bên phải */}
                    <Box
                        component="img"
                        src={banner_load}
                        alt="Thang máy tải hàng"
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
                    {/* Nội dung */}
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
                            GIẢI PHÁP VẬN CHUYỂN HÀNG HÓA
                        </Typography>
                        <Typography sx={{ mt: 2, fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            THANG MÁY TẢI HÀNG
                        </Typography>
                        <Typography sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            VẬN HÀNH HIỆU QUẢ
                        </Typography>
                        <Typography sx={{ mt: 3, fontSize: 15, color: C.whiteMuted, maxWidth: 460 }}>
                            Giải pháp vận chuyển hàng hóa theo phương đứng với tải trọng từ 500kg đến
                            5.000kg. Mintz Funi hướng đến tối ưu nhân lực, rút ngắn thời gian luân
                            chuyển và hỗ trợ hoạt động xuất – nhập hàng an toàn, ổn định.
                        </Typography>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                            <Button
                                onClick={() => handleScrollToSection('loading-capacity')}
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
                                TƯ VẤN CÔNG TRÌNH
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

                {/* ===================== TỔNG QUAN SẢN PHẨM ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Grid container spacing={1.5}>
                                <Grid size={6}>
                                    <Stack direction='column' spacing={1.5}>
                                        <CommonImage
                                            src={load_good_3}
                                            sx={{ width: "100%", height: { xs: 130, md: 185 }, objectFit: "fit", borderRadius: 2 }}
                                        />
                                        <CommonImage
                                            src={banner_load}
                                            sx={{ width: "100%", height: { xs: 130, md: 185 }, objectFit: "fit", borderRadius: 2 }}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid size={6}>
                                    <CommonImage
                                        src={load_good_1}
                                        sx={{ width: "100%", height: { xs: 275, md: 385 }, objectFit: "fit", borderRadius: 2 }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                Tổng quan sản phẩm
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1, mb: 2, fontSize: { xs: 24, md: 30 } }}>
                                Đưa hàng hóa lên xuống tầng nhanh chóng và thuận tiện
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, lineHeight: 1.7, mb: 1.5 }}>
                                Trong nhà máy, kho hàng và các tòa nhà nhiều tầng, thang máy tải hàng là
                                thiết bị hỗ trợ quan trọng cho hoạt động vận chuyển, lưu kho và sản xuất.
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, lineHeight: 1.7, mb: 2.5 }}>
                                Với khả năng chuyển chở tải trọng lớn, thiết bị góp phần giảm sức lao
                                động thủ công, tiết kiệm thời gian và giúp doanh nghiệp chủ động hơn
                                trong kế hoạch xuất – nhập hàng.
                            </Typography>
                            <Stack direction='column' spacing={1.25}>
                                {OVERVIEW_CHECKS.map((item) => (
                                    <Stack key={item} direction="row" spacing={1.25} alignItems="flex-start">
                                        <CheckCircle sx={{ fontSize: 20, color: "#5BB89A", mt: "1px" }} />
                                        <Typography sx={{ fontSize: 14, color: C.white }}>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== TIÊU CHUẨN THIẾT KẾ ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="TIÊU CHUẨN THIẾT KẾ"
                        title="Yêu cầu đối với thang máy tải hàng"
                        sub="Thiết kế cần đáp ứng đặc thù hàng hóa, tần suất vận hành và điều kiện mặt bằng của từng công trình."
                    />
                    <Grid container spacing={2}>
                        {DESIGN_STANDARDS.map((d) => (
                            <Grid key={d.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 2.5, height: "100%" }}>
                                    <Box
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 1.5,
                                            bgcolor: "#fff",
                                            border: `1px solid ${C.bgPrimary}`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: C.bgPrimary,
                                            mb: 1.5,
                                        }}
                                    >
                                        {d.icon}
                                    </Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg, mb: 0.75 }}>
                                        {d.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: C.bg, lineHeight: 1.6 }}>
                                        {d.des}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* ===================== PHÂN KHÚC TẢI TRỌNG ===================== */}
                <Box id="loading-capacity" sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="PHÂN KHÚC TẢI TRỌNG"
                        title="Lựa chọn tải trọng theo nhu cầu vận chuyển"
                        sub="Các mức dưới đây là nhóm tải trọng tham khảo trong dải sản phẩm 500–5.000kg. Tải trọng, kích thước cabin và cấu hình sẽ được xác định theo loại hàng và hiện trạng công trình."
                    />
                    <Grid container spacing={2}>
                        {PRICING.map((plan) => (
                            <Grid key={plan.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                                    <Box bgcolor={C.bgPrimary} sx={{ p: 2.5, borderBottom: `1px solid ${C.border}` }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.whiteFaint }}>
                                            {plan.tag}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: 26, mt: 1 }}>
                                            {plan.weight}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, color: C.whiteMuted }}>
                                            {plan.people}
                                        </Typography>
                                    </Box>
                                    <Box bgcolor={C.white} sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: C.bg }}>
                                            GIÁ THAM KHẢO
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: 18, mb: 1.5, color: C.bg }}>
                                            Liên hệ báo giá
                                        </Typography>
                                        <Typography sx={{ fontSize: 12.5, color: C.bg, lineHeight: 1.6, flexGrow: 1 }}>
                                            {plan.des}
                                        </Typography>
                                        <Button
                                            onClick={handleContact}
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                bgcolor: C.bg,
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

                {/* ===================== GIÁ TRỊ CHO DOANH NGHIỆP ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.white }}>
                                GIÁ TRỊ CHO DOANH NGHIỆP
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1.5, fontSize: { xs: 24, md: 28 } }}>
                                Lợi ích khi đầu tư thang máy tải hàng
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, mt: 2 }}>
                                Hỗ trợ tối ưu quy trình vận hành và nâng cao hiệu quả luân chuyển hàng
                                hóa trong doanh nghiệp.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Grid container spacing={2}>
                                {BENEFITS.map((b) => (
                                    <Grid key={b.id} size={{ xs: 12, sm: 6 }}>
                                        <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 2.5, height: "100%" }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 1,
                                                    bgcolor: "#fff",
                                                    border: `1px solid ${C.bg}`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: C.bg,
                                                    fontWeight: 800,
                                                    fontSize: 15,
                                                    mb: 1.5,
                                                }}
                                            >
                                                {b.id}
                                            </Box>
                                            <Typography sx={{ fontWeight: 700, fontSize: 16, color: C.bg, mb: 0.75 }}>
                                                {b.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: 12.5, color: C.bg, lineHeight: 1.6 }}>
                                                {b.des}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <CommonImage
                                src={load_good}
                                sx={{ width: "100%", height: { xs: 260, md: 340 }, objectFit: "cover", borderRadius: 2 }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== ỨNG DỤNG THỰC TẾ ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="ỨNG DỤNG THỰC TẾ"
                        title="Đồng hành cùng quy trình vận hành"
                        sub="Thang máy tải hàng hỗ trợ kết nối các khu vực chức năng trong cùng một công trình."
                    />
                    <Grid container spacing={2}>
                        {WORKFLOW.map((w) => (
                            <Grid key={w.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box sx={{ bgcolor: C.white, borderRadius: 2, p: 2.5, height: "100%" }}>
                                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: C.textBanner, letterSpacing: "0.04em", mb: 0.75 }}>
                                        {w.tag}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg, mb: 0.75 }}>
                                        {w.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: C.bg, lineHeight: 1.6 }}>
                                        {w.des}
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

export default ElevatorLoadGood;
