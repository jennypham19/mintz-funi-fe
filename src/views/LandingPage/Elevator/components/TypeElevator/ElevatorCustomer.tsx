import {
    ApartmentOutlined,
    ArrowForward,
    AutoAwesomeOutlined,
    BoltOutlined,
    CheckCircle,
    LightbulbOutlined,
    SensorDoorOutlined,
    TuneOutlined,
    VerifiedUserOutlined,
    ViewInArOutlined,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import InputText from "@/components/InputText";
import InputSelect from "@/components/InputSelect";
import banner_customer from "@/assets/images/users/elevator/e_customer/banner_elevator_customer.png";
import overall_customer from "@/assets/images/users/elevator/e_customer/overall_customer.png";
import elevator_fuji from "@/assets/images/users/elevator/e_customer/elevator_fuji.png";
import elevator_schindler from "@/assets/images/users/elevator/e_customer/elevator_schindler.png";
import elevator_kone from "@/assets/images/users/elevator/e_customer/elevator_kone.png";
import elevator_mitsubishi from "@/assets/images/users/elevator/e_customer/elevator_mitsubishi.png";
import Page from "@/components/Page";
import { useEffect } from "react";

/* ===================== THEME =====================
 * Màu chủ đạo: #031512 (COLORS.PRIMARY)
 * Toàn trang nền xanh đậm, chữ trắng, thẻ nội dung màu kem.
 */
const C = {
    bg: "#031512", // nền xanh chính (cùng tông #031512)
    cardDark: "#072A20", // thẻ tối (gói giá, mẫu mã)
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
    textBanner: '#2D9D84'
    
};

/* ===================== DATA ===================== */

const STATS = [
    { id: 1, title: "AN TOÀN", sub: "An toàn tuyệt đối" },
    { id: 2, title: "VẬN HÀNH", sub: "Vận hành êm ái" },
    { id: 3, title: "TIẾT KIỆM", sub: "Tiết kiệm năng lượng" },
    { id: 4, title: "MẪU MÃ", sub: "Mẫu mã đa dạng" },
];

const OVERVIEW_CHECKS = [
    "Công nghệ hiện đại, vận hành ổn định",
    "Đầy đủ tính năng theo TCVN",
    "Phù hợp nhiều công trình",
];

const OVERVIEW_HIGHLIGHTS = [
    { id: 1, icon: <ApartmentOutlined />, text: "Điểm nhấn kiến trúc sang trọng" },
    { id: 2, icon: <VerifiedUserOutlined />, text: "An toàn tuyệt đối" },
    { id: 3, icon: <BoltOutlined />, text: "Tiết kiệm điện năng" },
    { id: 4, icon: <AutoAwesomeOutlined />, text: "Đa dạng mẫu mã" },
];

interface ProductModel {
    id: number;
    image: string;
    name: string;
    price: string;
    des: string;
}

const PRODUCTS: ProductModel[] = [
    {
        id: 1,
        image: elevator_fuji,
        name: "THANG MÁY FUJI NHẬT BẢN",
        price: "Liên hệ báo giá",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
    {
        id: 2,
        image: elevator_schindler,
        name: "THANG MÁY SCHINDLER",
        price: "Liên hệ báo giá",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
    {
        id: 3,
        image: elevator_kone,
        name: "THANG MÁY KONE",
        price: "Liên hệ báo giá",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
    {
        id: 4,
        image: elevator_mitsubishi,
        name: "THANG MÁY MITSUBISHI",
        price: "Liên hệ báo giá",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
];

const DESIGN_STANDARDS = [
    {
        id: 1,
        icon: <ViewInArOutlined />,
        title: "Thiết kế cabin",
        des: "Vật liệu inox, kính, gương và hệ thống chiếu sáng hiện đại.",
    },
    {
        id: 2,
        icon: <TuneOutlined />,
        title: "Bảng điều khiển",
        des: "Nút bấm dễ sử dụng, màn hình hiển thị tầng rõ ràng.",
    },
    {
        id: 3,
        icon: <LightbulbOutlined />,
        title: "Ánh sáng và thông gió",
        des: "Đèn LED, quạt thông gió, đảm bảo sự thoải mái.",
    },
    {
        id: 4,
        icon: <SensorDoorOutlined />,
        title: "Cửa thang máy",
        des: "Đóng mở nhẹ nhàng, hạn chế tiếng ồn.",
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
        tag: "VĂN PHÒNG - KHÁCH SẠN",
        weight: "630 KG",
        people: "từ 6 người",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
    {
        id: 2,
        tag: "CHUNG CƯ - KHÁCH SẠN",
        weight: "750 KG",
        people: "Từ 10 người",
        des: "Phù hợp nhu cầu gia đình có ít thành viên, sử dụng thang rải rác trong ngày.",
    },
    {
        id: 3,
        tag: "CHUNG CƯ - VĂN PHÒNG",
        weight: "1000 KG",
        people: "từ 13 người",
        des: "Phù hợp chung cư diện tích cần di chuyển mật độ cao và số lượng người đông đúc.",
    },
    {
        id: 4,
        tag: "TÒA NHÀ ĐÔNG NGƯỜI",
        weight: "1350 KG",
        people: "Khoảng 18 người",
        des: "Phù hợp những tòa điểm cần di chuyển mật độ cực cao và số lượng người đông đúc.",
    },
];

const LOAD_OPTIONS = [
    { value: "630", label: "630 KG" },
    { value: "750", label: "750 KG" },
    { value: "1000", label: "1000 KG" },
    { value: "1350", label: "1350 KG trở lên" },
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

const ElevatorCustomer = () => {
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

    return (
        <Page title="Thang máy tải khách">
            <Box sx={{ bgcolor: C.bg }}>
                {/* ===================== HERO ===================== */}
                <Box
                    id="banner_elevator_customer"
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
                        src={banner_customer}
                        alt="Sảnh thang máy hiện đại"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "fit",
                            objectPosition: "right center",
                        }}
                    />

                    {/* Khối xanh đậm có cạnh phải vát chéo */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: { xs: "100%", md: "56%" },
                            bgcolor: C.bgPrimary,
                            clipPath: { xs: "none", md: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" },
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
                            minHeight: { xs: 460, md: 360 },
                            px: SECTION_PX,
                            py: { xs: 5, md: 0 },
                            maxWidth: { md: "52%" },
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: 13, md: 16 }, fontWeight: 700, letterSpacing: "0.14em", color: C.textBanner }}>
                            DI CHUYỂN ÊM ÁI - NÂNG TẦM CUỘC SỐNG
                        </Typography>
                        <Typography sx={{ mt: 2, fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            THANG MÁY TIỆN NGHI
                        </Typography>
                        <Typography sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" } }}>
                            TẢI KHÁCH AN TOÀN
                        </Typography>
                        <Typography sx={{ mt: 3, fontSize: 15, color: C.whiteMuted, maxWidth: 440 }}>
                            Giải pháp di chuyển hiện đại, an toàn và tiện nghi cho mọi công trình
                            từ gia đình đến nhà cao tầng.
                        </Typography>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                            <Button
                                onClick={handleProducts}
                                sx={{
                                    bgcolor: C.button,
                                    color: C.primary,
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.25,
                                    "&:hover": { bgcolor: "#dcd9c6" },
                                }}
                            >
                                KHÁM PHÁ THANG MÁY
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
                        <Grid size={{ xs: 12, md: 5 }}>
                            <CommonImage
                                src={overall_customer}
                                sx={{
                                    width: "100%",
                                    height: { xs: 260, md: 380 },
                                    objectFit: "cover",
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: C.whiteFaint }}>
                                Tổng quan sản phẩm
                            </Typography>
                            <Typography sx={{ fontWeight: 700, color: C.white, mt: 1, mb: 2, fontSize: { xs: 24, md: 30 } }}>
                                Thang máy tải khách
                            </Typography>
                            <Typography sx={{ fontSize: 14, color: C.whiteMuted, lineHeight: 1.7, mb: 2.5 }}>
                                Thang máy tải khách là dòng sản phẩm chất lượng cao được sản xuất với
                                công nghệ hiện đại, đáp ứng đủ tiêu chuẩn an toàn, vận hành êm ái và
                                tiết kiệm năng lượng. Sản phẩm phù hợp cho các tòa nhà có công trình
                                lớn: khách sạn, trung tâm thương mại, hộ gia đình.
                            </Typography>
                            <Stack direction='column' spacing={1.25}>
                                {OVERVIEW_CHECKS.map((item) => (
                                    <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                                        <CheckCircle sx={{ fontSize: 20, color: "#5BB89A" }} />
                                        <Typography sx={{ fontSize: 14, color: C.white }}>{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box
                                sx={{
                                    bgcolor: C.cream,
                                    borderRadius: 2,
                                    p: 2.5,
                                }}
                            >
                                <Typography sx={{ fontWeight: 700, fontSize: 18, color: C.bg, mb: 2 }}>
                                    Ưu điểm nổi bật
                                </Typography>
                                <Stack direction='column' spacing={2}>
                                    {OVERVIEW_HIGHLIGHTS.map((h) => (
                                        <Stack key={h.id} direction="row" spacing={1.5} alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 34,
                                                    height: 34,
                                                    borderRadius: "50%",
                                                    bgcolor: "#fff",
                                                    border: "1px solid #00C8B3",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#00C8B3",
                                                    flexShrink: 0,
                                                    "& svg": { fontSize: 18 },
                                                }}
                                            >
                                                {h.icon}
                                            </Box>
                                            <Typography sx={{ fontSize: 13, color: C.cardText }}>{h.text}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* ===================== MẪU MÃ THANG MÁY ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="MẪU MÃ ĐA DẠNG"
                        title="MẪU MÃ THANG MÁY THỰC TẾ"
                        sub="Các mẫu dưới đây là nhóm tải trọng tham khảo trong dải sản phẩm 500–5.000kg. Tải trọng, kích thước cabin và cấu hình sẽ được xác định theo loại hàng và hiện trạng công trình."
                    />
                    <Grid container spacing={2}>
                        {PRODUCTS.map((p) => (
                            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box
                                    sx={{
                                        bgcolor: C.white,
                                        color: "#fff",
                                        borderRadius: 2,
                                        border: `1px solid ${C.border}`,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                    }}
                                >
                                    <CommonImage
                                        src={p.image}
                                        sx={{ width: "100%", height: 350, objectFit: "cover", borderRadius: 0 }}
                                    />
                                    <Box sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: 15, color: C.bg }}>{p.name}</Typography>
                                        <Typography sx={{ fontSize: 13, fontWeight: 600, color: C.bg, mt: 0.5 }}>
                                            {p.price}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12.5, color: C.bg, mt: 1, lineHeight: 1.6, flexGrow: 1 }}>
                                            {p.des}
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

                {/* ===================== TIÊU CHUẨN THIẾT KẾ ===================== */}
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
                    <SectionHeading
                        label="TIÊU CHUẨN THIẾT KẾ"
                        title="Yêu cầu đối với thang máy tải khách"
                        sub="Thiết kế cần đáp ứng đặc thù hàng hóa, tần suất vận hành và điều kiện mặt bằng của từng công trình."
                    />
                    <Grid container spacing={2}>
                        {DESIGN_STANDARDS.map((d) => (
                            <Grid key={d.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                                            color: C.bg,
                                            mb: 1.5,
                                        }}
                                    >
                                        {d.icon}
                                    </Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: 18, color: C.bg, mb: 0.75 }}>
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
                <Box sx={{ px: SECTION_PX, py: SECTION_PY }}>
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
                                    <Box bgcolor={C.white} sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                                        <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: C.bg }}>
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

export default ElevatorCustomer;
