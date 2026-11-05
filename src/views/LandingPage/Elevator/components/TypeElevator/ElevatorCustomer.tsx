import IconButton from "@/components/IconButton/IconButton";
import {
    ApartmentOutlined,
    ArrowForward,
    AutoAwesomeOutlined,
    BusinessOutlined,
    DiamondOutlined,
    GroupsOutlined,
    HandshakeOutlined,
    HotelOutlined,
    MenuBookOutlined,
    NavigateBefore,
    PsychologyOutlined,
    ShieldOutlined,
    SpeedOutlined,
    StorefrontOutlined,
    TuneOutlined,
    VerifiedOutlined,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";
import e_customer_1 from "@/assets/images/users/elevator/e_customer/e_customer_1.png";
import e_customer_2 from "@/assets/images/users/elevator/e_customer/e_customer_2.png";
import e_customer_3 from "@/assets/images/users/elevator/e_customer/e_customer_3.png";
import e_customer_4 from "@/assets/images/users/elevator/e_customer/e_customer_4.png";

const COLOR = {
    gold: "#C9A66B",
    goldDark: "#B8924F",
    brown: "#3A2A1C",
    text: "#2B2B2B",
    muted: "#6F6F6F",
    mutedLight: "#8A8A8A",
    rowBg: "#F5F5F5",
    pageBg: "#F7F7F7",
    border: "#E6E6E6",
};

/* ===================== HERO / STATS ===================== */

const HERO_STATS = [
    {
        id: 1,
        icon: <SpeedOutlined />,
        value: "1.6 - 4.0",
        unit: "m/s",
        label: "Tốc độ vượt trội",
    },
    {
        id: 2,
        icon: <GroupsOutlined />,
        value: "8N - 30",
        unit: "người",
        label: "Dải tải trọng linh hoạt",
    },
    {
        id: 3,
        icon: <TuneOutlined />,
        value: "100%",
        unit: "",
        label: "Cấu hình theo dự án",
    },
];

/* ===================== ỨNG DỤNG ===================== */

const DATA_APPLICATION = [
    {
        id: 1,
        icon: <BusinessOutlined />,
        name: "Tòa Nhà Văn Phòng Hạng A & B",
        tooltip: "Lưu lượng giờ cao điểm",
        des: "Giải quyết bài toán ùn tắc giờ cao điểm với hệ điều phối nhóm thông minh, tối ưu thời gian chờ và lưu lượng hành khách lên tới hàng nghìn lượt mỗi giờ.",
        note: [
            { title: "Tải trọng khuyến nghị:" },
            { des_title: "1000 - 1600 kg / 13 - 21 người" },
        ],
    },
    {
        id: 2,
        icon: <HotelOutlined />,
        name: "Khách Sạn & Resort 5 Sao",
        tooltip: "Đẳng cấp & êm ái",
        des: "Vận hành siêu êm, cabin hoàn thiện vật liệu cao cấp mạ titan, kính và gỗ. Trải nghiệm di chuyển sang trọng tương xứng với tiêu chuẩn lưu trú thượng lưu.",
        note: [
            { title: "Hoàn thiện cabin:" },
            { des_title: "Mạ Titan vàng gương & vách gỗ" },
        ],
    },
    {
        id: 3,
        icon: <ApartmentOutlined />,
        name: "Khu Căn Hộ & Chung Cư Cao Cấp",
        tooltip: "Bền bỉ 24/7",
        des: "Thiết kế cho cường độ hoạt động liên tục, tiết kiệm điện năng với động cơ không hộp số Gearless. Bảo mật phân tầng thẻ từ an toàn cho cư dân.",
        note: [
            { title: "Chế độ vận hành:" },
            { des_title: "Liên tục 24/7 - Tiết kiệm ~45% điện" },
        ],
    },
    {
        id: 4,
        icon: <StorefrontOutlined />,
        name: "TTTM & Tổ Hợp Giải Trí",
        tooltip: "Lưu thông lớn",
        des: "Cabin rộng rãi, cửa mở lớn đón dòng khách hàng liên tục. Buồng kính Panoramic quan sát toàn cảnh, tạo điểm nhấn thị giác cho không gian thương mại.",
        note: [
            { title: "Kiểu dáng chủ đạo:" },
            { des_title: "Cabin kính Panoramic quan sát" },
        ],
    },
];

/* ===================== THÔNG SỐ KỸ THUẬT ===================== */

interface ProfessionalParameter {
    id: number;
    weight: string;
    people_number: string;
    title: string;
    des: string;
    speed: string;
    cabin: string;
    type_open: string;
    stop: string;
    note: string;
    isPopular: boolean;
}

const DATA_PROFESSIONAL_PARAMETERS: ProfessionalParameter[] = [
    {
        id: 1,
        weight: "800",
        people_number: "11 Người",
        title: "Tiêu Chuẩn Tòa Nhà Vừa & Nhỏ",
        des: "Phù hợp văn phòng, chung cư mini và khách sạn dưới 10 tầng với lưu lượng ổn định.",
        speed: "1.0 - 1.75 m/s",
        cabin: "1400 × 1350 mm",
        type_open: "Lùa 2 cánh mở tâm (CO)",
        stop: "Tối đa 10 - 12 điểm dừng",
        note: "Phù hợp: Tòa nhà 6 - 12 tầng",
        isPopular: false,
    },
    {
        id: 2,
        weight: "1000",
        people_number: "13 Người",
        title: "Cân Bằng Lưu Lượng & Chi Phí",
        des: "Lựa chọn tối ưu nhất cho đa số cao ốc văn phòng hạng B và chung cư cao cấp.",
        speed: "1.75 - 2.5 m/s",
        cabin: "1600 × 1400 mm",
        type_open: "Lùa 2 cánh mở tâm (CO)",
        stop: "Tối đa 16 - 20 điểm dừng",
        note: "Phù hợp: Tòa nhà 12 - 25 tầng",
        isPopular: true,
    },
    {
        id: 3,
        weight: "1350 - 1600",
        people_number: "18 - 21 Người",
        title: "Đẳng Cấp Cao Ốc & Khách Sạn 5 Sao",
        des: "Cabin siêu rộng, tốc độ cao phục vụ cao ốc chọc trời và tổ hợp thương mại quy mô lớn.",
        speed: "2.5 - 4.0 m/s",
        cabin: "2000 × 1500 mm",
        type_open: "Lùa 2 - 4 cánh mở tâm",
        stop: "Trên 25 điểm dừng",
        note: "Phù hợp: Cao ốc trên 25 tầng",
        isPopular: false,
    },
];

const SPEC_ROWS: { label: string; key: keyof ProfessionalParameter }[] = [
    { label: "Tốc độ di chuyển:", key: "speed" },
    { label: "Lòng cabin tiêu chuẩn:", key: "cabin" },
    { label: "Kiểu mở cửa:", key: "type_open" },
    { label: "Số điểm dừng:", key: "stop" },
];

/* ===================== BẢNG SO SÁNH MR vs MRL ===================== */

interface ComparisonRow {
    id: number;
    feature: string;
    mrl: string;
    mrlHighlight?: string;
    mr: string;
}

const COMPARISON_HEADERS = {
    feature: "Đặc Tính Kỹ Thuật",
    mrl: "Thang Không Phòng Máy (MRL)",
    mr: "Thang Có Phòng Máy (MR)",
};

const COMPARISON_DATA: ComparisonRow[] = [
    {
        id: 1,
        feature: "Yêu cầu kết cấu xây dựng",
        mrlHighlight: "Không cần phòng máy,",
        mrl: " tiết kiệm trọn vẹn tầng thượng",
        mr: "Yêu cầu xây dựng phòng máy riêng trên nóc giếng thang",
    },
    {
        id: 2,
        feature: "Hiệu suất năng lượng",
        mrl: "Động cơ Gearless nam châm vĩnh cửu, tiết kiệm tới 45%",
        mr: "Động cơ có hộp số, hao phí nhiệt và điện năng cao hơn",
    },
    {
        id: 3,
        feature: "Tốc độ tối đa phù hợp",
        mrl: "Lý tưởng cho tốc độ 1.0 - 2.5 m/s, nhà tầm trung",
        mr: "Đáp ứng tốt tốc độ cao 3.0 - 6.0 m/s cho cao ốc chọc trời",
    },
    {
        id: 4,
        feature: "Chi phí & thời gian thi công",
        mrl: "Lắp đặt nhanh, tối ưu chi phí phần thô xây dựng",
        mr: "Chi phí xây dựng phòng máy & kết cấu đỡ cao hơn",
    },
];

/* ===================== ĐỊNH HƯỚNG VẬN HÀNH ===================== */

const DATA_PHILOSOPHY = [
    {
        id: 1,
        icon: <ShieldOutlined />,
        name: "An Toàn Kỹ Thuật Tuyệt Đối",
        des: "Tích hợp bộ cứu hộ tự động ARD khi mất điện, thắng cơ khẩn cấp và cảm biến quá tải. Tuân thủ nghiêm ngặt tiêu chuẩn an toàn thang máy EN 81-20/50.",
    },
    {
        id: 2,
        icon: <PsychologyOutlined />,
        name: "Điều Phối Giao Thông Minh AI",
        des: "Hệ điều khiển nhóm Destination Control gom nhóm hành khách theo tầng đích, giảm tối đa thời gian chờ và số lần dừng không cần thiết vào giờ cao điểm.",
    },
    {
        id: 3,
        icon: <DiamondOutlined />,
        name: "Thẩm Mỹ Kiến Trúc Đẳng Cấp",
        des: "Đa dạng vật liệu hoàn thiện cabin từ thép không gỉ hoa văn, kính cường lực đến gỗ tự nhiên, đồng bộ với ngôn ngữ thiết kế sảnh và kiến trúc công trình.",
    },
];

/* ===================== CATALOG SẢN PHẨM ===================== */

interface ProductItem {
    id: number;
    image: string;
    name: string;
    tag: string;
    des: string;
    badge?: string;
}

const DATA_PRODUCTS: ProductItem[] = [
    {
        id: 1,
        image: e_customer_1,
        name: "Auravate Executive Titanium",
        tag: "VĂN PHÒNG HẠNG A",
        des: "Cabin thép không gỉ mạ titan vân xước sang trọng, bảng điều khiển cảm ứng, hệ chiếu sáng gián tiếp hiện đại cho sảnh thương mại.",
        badge: "FLAGSHIP",
    },
    {
        id: 2,
        image: e_customer_2,
        name: "Auravate Panoramic Glass Vision",
        tag: "QUAN SÁT TOÀN CẢNH",
        des: "Buồng kính cường lực trong suốt, mở rộng tầm nhìn 360 độ. Điểm nhấn kiến trúc cho trung tâm thương mại và khách sạn.",
    },
    {
        id: 3,
        image: e_customer_4,
        name: "Auravate Grand Luxury Wood & Glass",
        tag: "KHÁCH SẠN 5 SAO",
        des: "Giao thoa giữa vách gỗ tự nhiên ấm áp và kính gương, tôn vinh không gian lưu trú thượng lưu với trải nghiệm di chuyển êm ái.",
    },
    {
        id: 4,
        image: e_customer_3,
        name: "Auravate High-Speed Master",
        tag: "CAO ỐC CHỌC TRỜI",
        des: "Tốc độ lên tới 4.0 m/s với hệ giảm chấn và cân bằng áp suất, vận hành êm cho các tòa nhà siêu cao tầng.",
    },
    {
        id: 5,
        image: e_customer_1,
        name: "Auravate Medical & Cargo Dual",
        tag: "BỆNH VIỆN & TẢI HÀNG",
        des: "Cabin sâu rộng, sàn chịu lực lớn phục vụ băng ca y tế và vận chuyển hàng hóa cồng kềnh trong tổ hợp công trình.",
    },
];

/* ===================== BỘ SƯU TẬP CÔNG TRÌNH ===================== */

const DATA_PROJECTS = [
    {
        id: 1,
        image: e_customer_1,
        name: "Dự Án Thẩm Văn Phòng Quốc Tế",
        location: "TP. Hồ Chí Minh",
    },
    {
        id: 2,
        image: e_customer_2,
        name: "Tổ Hợp Thương Mại Central Park",
        location: "Hà Nội",
    },
    {
        id: 3,
        image: e_customer_4,
        name: "Khách Sạn 5 Sao Grand Luxury",
        location: "Đà Nẵng",
    },
];

/* ===================== CARD THÔNG SỐ ===================== */

const ParameterCard: React.FC<{ item: ProfessionalParameter }> = ({ item }) => {
    const { isPopular } = item;

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                bgcolor: "#fff",
                borderRadius: "14px",
                p: { xs: 2.5, md: 3 },
                border: `1.5px solid ${isPopular ? COLOR.gold : "transparent"}`,
                boxShadow: isPopular
                    ? "0 8px 28px rgba(201,166,107,0.22)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
            }}
        >
            {isPopular && (
                <Chip
                    label="KHUYẾN NGHỊ"
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: COLOR.goldDark,
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: "0.04em",
                        height: 22,
                        borderRadius: "6px",
                        "& .MuiChip-label": { px: 1.5 },
                    }}
                />
            )}

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.75 }}>
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: 30, md: 34 },
                            lineHeight: 1,
                            color: COLOR.brown,
                        }}
                    >
                        {item.weight}
                    </Typography>
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: 20, md: 22 },
                            lineHeight: 1,
                            color: COLORS.PRIMARY,
                        }}
                    >
                        kg
                    </Typography>
                </Box>

                <Chip
                    label={item.people_number}
                    size="small"
                    sx={{
                        bgcolor: COLOR.rowBg,
                        color: COLOR.muted,
                        fontSize: 11,
                        fontWeight: 500,
                        height: 22,
                        borderRadius: "999px",
                    }}
                />
            </Box>

            <Typography
                sx={{ fontWeight: 700, fontSize: 13.5, color: COLOR.text, mb: 0.75 }}
            >
                {item.title}
            </Typography>
            <Typography
                sx={{
                    fontSize: 12.5,
                    lineHeight: 1.6,
                    color: COLOR.muted,
                    mb: 2.5,
                    minHeight: { md: 60 },
                }}
            >
                {item.des}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {SPEC_ROWS.map((row) => (
                    <Box
                        key={row.key}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1.5,
                            bgcolor: COLOR.rowBg,
                            borderRadius: "6px",
                            px: 1.5,
                            py: 1.1,
                        }}
                    >
                        <Typography
                            sx={{ fontSize: 12, color: COLOR.muted, whiteSpace: "nowrap" }}
                        >
                            {row.label}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: COLOR.text,
                                textAlign: "right",
                            }}
                        >
                            {String(item[row.key])}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Typography
                sx={{
                    mt: "auto",
                    pt: 3,
                    fontSize: 10.5,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    color: COLOR.mutedLight,
                }}
            >
                {item.note}
            </Typography>
        </Box>
    );
};

const cellBase = {
    fontSize: 12,
    px: 2,
    py: 1.75,
    borderBottom: `1px solid #EDEDED`,
} as const;

/* ===================== COMPONENT CHÍNH ===================== */

const ELevatorCustomer = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/thang-may", { state: { scrollTo: "products" } });
    };

    const handleContact = () => {
        navigate("/thang-may", { state: { scrollTo: "contact" } });
    };

    return (
        <Box sx={{ bgcolor: COLOR.pageBg }}>
            {/* ----------------- BANNER ----------------- */}
            <Box px={3} py={5}>
                <Stack direction="row" display="flex" gap={1} alignItems="center">
                    <IconButton
                        icon={<NavigateBefore />}
                        handleFunt={handleBack}
                        backgroundColor="transparent"
                        tooltip="Quay lại"
                        width={0}
                        height={0}
                    />
                    <Typography fontWeight={600}>THANG MÁY TẢI KHÁCH</Typography>
                </Stack>
                <Grid container spacing={4} mt={1} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography fontWeight={700} variant="h4">
                            Vận Hành Đỉnh Cao
                        </Typography>
                        <Stack direction="row" flexWrap="wrap">
                            <Typography
                                sx={{
                                    color: COLORS.PRIMARY,
                                    fontFamily: "'Playfair Display', 'Didot', serif",
                                    fontStyle: "italic",
                                    fontWeight: 400,
                                    paddingRight: "8px",
                                }}
                                variant="h4"
                            >
                                Tối Ưu Lưu Thông
                            </Typography>
                            <Typography variant="h4" fontWeight={700}>
                                Cao Ốc Đô Thị
                            </Typography>
                        </Stack>
                        <Typography mt={2} color={COLOR.muted}>
                            Giải pháp di chuyển thẳng đứng cho tòa nhà văn phòng, khách sạn, chung
                            cư và trung tâm thương mại. Hệ vận hành êm ái, tốc độ cao cùng hệ điều
                            phối giao thông thông minh, đáp ứng lưu lượng hành khách lớn trong giờ
                            cao điểm và vận hành bền bỉ liên tục 24/7.
                        </Typography>

                        {/* Stats */}
                        <Grid container spacing={2} mt={1}>
                            {HERO_STATS.map((stat) => (
                                <Grid key={stat.id} size={{ xs: 12, sm: 4 }}>
                                    <Box
                                        borderRadius={2}
                                        p={2}
                                        bgcolor="#fff"
                                        sx={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", height: "100%" }}
                                    >
                                        <Box sx={{ color: COLORS.PRIMARY, mb: 0.5 }}>{stat.icon}</Box>
                                        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
                                            <Typography fontWeight={700} fontSize={20} color={COLOR.brown}>
                                                {stat.value}
                                            </Typography>
                                            <Typography fontSize={13} color={COLOR.muted}>
                                                {stat.unit}
                                            </Typography>
                                        </Box>
                                        <Typography variant="caption" color={COLOR.muted}>
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Box gap={2} mt={4} display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                            <Button
                                sx={{ bgcolor: COLORS.PRIMARY, color: "#fff" }}
                                endIcon={<ArrowForward />}
                                onClick={handleContact}
                            >
                                NHẬN TƯ VẤN GIẢI PHÁP DỰ ÁN
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ color: COLORS.PRIMARY, borderColor: COLORS.PRIMARY }}
                                startIcon={<MenuBookOutlined />}
                            >
                                HỒ SƠ NĂNG LỰC
                            </Button>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ position: "relative" }}>
                            <CommonImage
                                src={e_customer_1}
                                sx={{
                                    height: { xs: 260, md: 440 },
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: 3,
                                }}
                            />
                            {/* TOP 1 badge */}
                            <Paper
                                elevation={0}
                                sx={{
                                    position: "absolute",
                                    left: 16,
                                    bottom: 16,
                                    bgcolor: "rgba(255,255,255,0.95)",
                                    borderRadius: 2,
                                    px: 2,
                                    py: 1.25,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.25,
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: COLOR.goldDark,
                                        color: "#fff",
                                        borderRadius: 1.5,
                                        px: 1.25,
                                        py: 0.5,
                                        fontWeight: 700,
                                        fontSize: 13,
                                    }}
                                >
                                    TOP 1
                                </Box>
                                <Box>
                                    <Typography fontSize={12} fontWeight={700} color={COLOR.text}>
                                        Giải pháp thang khách thương mại
                                    </Typography>
                                    <Typography fontSize={11} color={COLOR.muted}>
                                        Hơn 500+ dự án tòa nhà & khách sạn
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ----------------- ỨNG DỤNG CHUẨN MỰC ----------------- */}
            <Box
                gap={1}
                bgcolor="#e9e9e9"
                px={2}
                py={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Typography textAlign="center" letterSpacing="0.08em">
                    GIẢI PHÁP THEO CÔNG NĂNG
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700}>
                    Ứng Dụng Chuẩn Mực Cho Từng
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700}>
                    Không Gian Thương Mại
                </Typography>
                <Typography textAlign="center" variant="caption" color={COLOR.muted}>
                    Mỗi loại hình công trình đòi hỏi một cấu hình tải trọng, tốc độ và tần suất
                    vận hành riêng biệt. Mintz Funi mang tới giải pháp tối ưu cho từng bài toán
                    giao thông đứng.
                </Typography>
                <Grid container spacing={2} mt={1}>
                    {DATA_APPLICATION.map((data) => (
                        <Grid key={data.id} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Box
                                borderRadius={2}
                                p={2}
                                bgcolor="#fff"
                                height="100%"
                                display="flex"
                                gap={1}
                                flexDirection="column"
                            >
                                <IconButton icon={data.icon} backgroundColor="#e4e3e3" />
                                <Typography fontWeight={600} variant="subtitle2">
                                    {data.name}
                                </Typography>
                                <Typography variant="caption" color={COLOR.mutedLight}>
                                    {data.tooltip.toUpperCase()}
                                </Typography>
                                <Typography variant="caption" color={COLOR.muted}>
                                    {data.des}
                                </Typography>
                                <Box borderRadius={1} bgcolor="#e4e3e3" p={1.5} mt="auto">
                                    {data.note.map((item, idx) => (
                                        <Stack key={idx} direction="column">
                                            <Typography variant="caption" fontWeight={500}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="caption">{item.des_title}</Typography>
                                        </Stack>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ----------------- THÔNG SỐ CHUYÊN MÔN ----------------- */}
            <Box gap={1} px={2} py={5}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography letterSpacing="0.08em">THÔNG SỐ CHUYÊN MÔN</Typography>
                        <Typography variant="h5" fontWeight={500}>
                            Bộ Tiêu Chí Kỹ Thuật Lựa Chọn Cho Kỹ Sư & Chủ Đầu Tư
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="caption" color={COLOR.muted}>
                            Lựa chọn đúng mức tải trọng, tốc độ và cấu hình phòng máy giúp tối ưu
                            chi phí đầu tư, diện tích xây dựng và chất lượng dịch vụ giao thông
                            đứng trong suốt vòng đời công trình.
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 5,
                        mx: "auto",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: { xs: 4, md: 3 },
                        alignItems: "stretch",
                    }}
                >
                    {DATA_PROFESSIONAL_PARAMETERS.map((item) => (
                        <ParameterCard key={item.id} item={item} />
                    ))}
                </Box>
            </Box>

            {/* ----------------- SO SÁNH MR vs MRL ----------------- */}
            <Box sx={{ bgcolor: "#F3F3F3", px: { xs: 2, md: 3 }, py: 2 }}>
                <Paper
                    elevation={0}
                    sx={{
                        mx: "auto",
                        bgcolor: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        px: { xs: 2, md: 3 },
                        py: { xs: 2.5, md: 3 },
                    }}
                >
                    <Typography component="h2" sx={{ fontWeight: 600, fontSize: 18, mb: 2.5 }}>
                        So Sánh Cấu Hình: Thang Không Phòng Máy (MRL) & Thang Có Phòng Máy (MR)
                    </Typography>

                    <TableContainer sx={{ overflowX: "auto" }}>
                        <Table sx={{ minWidth: 720, tableLayout: "fixed" }}>
                            <TableHead>
                                <TableRow sx={{ bgcolor: "#EEEEEE" }}>
                                    <TableCell
                                        sx={{ ...cellBase, width: "26%", fontWeight: 600, borderBottom: "none" }}
                                    >
                                        {COMPARISON_HEADERS.feature}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...cellBase, width: "37%", fontWeight: 600, borderBottom: "none" }}
                                    >
                                        {COMPARISON_HEADERS.mrl}
                                    </TableCell>
                                    <TableCell
                                        sx={{ ...cellBase, width: "37%", fontWeight: 600, borderBottom: "none" }}
                                    >
                                        {COMPARISON_HEADERS.mr}
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {COMPARISON_DATA.map((row, index) => {
                                    const isLast = index === COMPARISON_DATA.length - 1;
                                    const border = isLast ? { borderBottom: "none" } : {};

                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ ...cellBase, ...border, fontWeight: 600 }}>
                                                {row.feature}
                                            </TableCell>
                                            <TableCell sx={{ ...cellBase, ...border }}>
                                                {row.mrlHighlight && (
                                                    <Box component="span" sx={{ fontWeight: 500 }}>
                                                        {row.mrlHighlight}
                                                    </Box>
                                                )}
                                                {row.mrl}
                                            </TableCell>
                                            <TableCell sx={{ ...cellBase, ...border }}>{row.mr}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>

            {/* ----------------- ĐỊNH HƯỚNG VẬN HÀNH ----------------- */}
            <Box
                gap={1}
                bgcolor="#e9e9e9"
                px={2}
                py={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Typography textAlign="center" letterSpacing="0.08em">
                    TRIẾT LÝ VẬN HÀNH
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700}>
                    Định Hướng Thiết Kế Vận Hành
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700}>
                    Thông Minh Auravate
                </Typography>
                <Typography textAlign="center" variant="caption" color={COLOR.muted} mb={2}>
                    Giao thoa giữa an toàn kỹ thuật tuyệt đối, trí tuệ điều phối giao thông và
                    thẩm mỹ kiến trúc đẳng cấp cho từng công trình thương mại.
                </Typography>
                <Grid container spacing={2}>
                    {DATA_PHILOSOPHY.map((data) => (
                        <Grid key={data.id} size={{ xs: 12, md: 4 }}>
                            <Box
                                borderRadius={2}
                                p={2.5}
                                bgcolor="#fff"
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                gap={1.25}
                            >
                                <IconButton icon={data.icon} backgroundColor="#e4e3e3" />
                                <Typography fontWeight={600} variant="subtitle1">
                                    {data.name}
                                </Typography>
                                <Typography variant="caption" color={COLOR.muted}>
                                    {data.des}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ----------------- CATALOG SẢN PHẨM ----------------- */}
            <Box px={{ xs: 2, md: 3 }} py={6}>
                <Typography textAlign="center" letterSpacing="0.08em">
                    DANH MỤC SẢN PHẨM
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700}>
                    Catalog Sản Phẩm & Dòng Cabin Tiêu Biểu
                </Typography>
                <Typography textAlign="center" variant="caption" color={COLOR.muted} display="block" mb={4}>
                    Đa dạng dòng cabin được thiết kế riêng cho từng phân khúc công trình, sẵn
                    sàng tùy biến vật liệu và cấu hình theo yêu cầu.
                </Typography>

                <Grid container spacing={2}>
                    {DATA_PRODUCTS.map((product) => (
                        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                bgcolor="#fff"
                                borderRadius={2}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                sx={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden" }}
                            >
                                <Box sx={{ position: "relative" }}>
                                    <CommonImage
                                        src={product.image}
                                        sx={{
                                            width: "100%",
                                            height: 200,
                                            objectFit: "cover",
                                            borderRadius: 0,
                                        }}
                                    />
                                    {product.badge && (
                                        <Chip
                                            label={product.badge}
                                            size="small"
                                            sx={{
                                                position: "absolute",
                                                top: 12,
                                                left: 12,
                                                bgcolor: COLOR.goldDark,
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: 10,
                                                height: 22,
                                                borderRadius: "6px",
                                            }}
                                        />
                                    )}
                                </Box>
                                <Box p={2} display="flex" flexDirection="column" gap={0.75} flexGrow={1}>
                                    <Typography variant="caption" color={COLOR.goldDark} fontWeight={700}>
                                        {product.tag}
                                    </Typography>
                                    <Typography fontWeight={700} fontSize={15} color={COLOR.text}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="caption" color={COLOR.muted}>
                                        {product.des}
                                    </Typography>
                                    <Button
                                        endIcon={<ArrowForward />}
                                        onClick={handleContact}
                                        sx={{
                                            mt: "auto",
                                            alignSelf: "flex-start",
                                            color: COLORS.PRIMARY,
                                            px: 0,
                                            fontSize: 13,
                                        }}
                                    >
                                        XEM CHI TIẾT CẤU HÌNH
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ----------------- BỘ SƯU TẬP CÔNG TRÌNH ----------------- */}
            <Box bgcolor="#e9e9e9" px={{ xs: 2, md: 3 }} py={6}>
                <Typography textAlign="center" letterSpacing="0.08em">
                    DỰ ÁN TIÊU BIỂU
                </Typography>
                <Typography textAlign="center" variant="h4" fontWeight={700} mb={1}>
                    Bộ Sưu Tập Công Trình Thực Tế
                </Typography>
                <Typography textAlign="center" variant="caption" color={COLOR.muted} display="block" mb={4}>
                    Những công trình thang máy tải khách đã được Mintz Funi thi công và bàn giao
                    trên khắp cả nước.
                </Typography>

                <Grid container spacing={2}>
                    {DATA_PROJECTS.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    height: 260,
                                }}
                            >
                                <CommonImage
                                    src={project.image}
                                    sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 0 }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
                                    }}
                                />
                                <Box sx={{ position: "absolute", left: 16, bottom: 16, color: "#fff" }}>
                                    <Typography fontWeight={700} fontSize={16}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="caption">{project.location}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ----------------- CTA CUỐI ----------------- */}
            <Box
                px={2}
                py={6}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
                textAlign="center"
            >
                <HandshakeOutlined sx={{ fontSize: 40, color: COLORS.PRIMARY }} />
                <Typography variant="h5" fontWeight={700}>
                    Sẵn sàng đồng hành cùng dự án của bạn
                </Typography>
                <Typography variant="caption" color={COLOR.muted} maxWidth={560}>
                    Đội ngũ kỹ sư Mintz Funi tư vấn cấu hình, khảo sát hiện trạng và bàn giao
                    hồ sơ kỹ thuật chi tiết hoàn toàn miễn phí.
                </Typography>
                <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="center">
                    <Chip icon={<VerifiedOutlined />} label="Bảo hành chính hãng 36 tháng" variant="outlined" />
                    <Chip icon={<AutoAwesomeOutlined />} label="Bảo trì 24/7 toàn quốc" variant="outlined" />
                </Stack>
                <Button
                    sx={{ bgcolor: COLORS.PRIMARY, color: "#fff", mt: 1 }}
                    endIcon={<ArrowForward />}
                    onClick={handleContact}
                >
                    LIÊN HỆ NHẬN BÁO GIÁ NGAY
                </Button>
            </Box>
        </Box>
    );
};

export default ELevatorCustomer;
