import IconButton from "@/components/IconButton/IconButton";
import { ApartmentOutlined, ArrowForward, BuildCircleOutlined, GppGoodOutlined, MapOutlined, Menu, MenuBookOutlined, NavigateBefore, TuneOutlined, VillaOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import e_family_1 from "@/assets/images/users/elevator/e_family/e_family_1.png"
import CommonImage from "@/components/Image/index";
import { COLORS } from "@/constants/colors";

interface ProfessionalParameter {
    id: number;
    weight: number;
    people_number: string;
    title: string;
    des: string;
    size: string;
    cabin: string;
    type_open: string;
    pit_hole: string;
    note: string;
    isPopular: boolean;
}

const FONT_IMPORT = `
  @import url('https://googleapis.com');
`;

interface ElevatorFamilyProps{
}

const DATA = [
    {
        id: 1,
        icon: <Menu/>,
        label: 'Hố Pit Siêu Nông',
        content: "Chỉ từ 200mm, không đào sâu"
    },
    {
        id: 2,
        icon: <GppGoodOutlined/>,
        label: 'Chuẩn Châu Âu',
        content: 'Chứng chỉ an toàn EN 81-41'
    },
    {
        id: 3,
        icon: <TuneOutlined/>,
        label: 'Tùy Biến 100%',
        content: "May đo theo từng centimet"
    }
]

const DATA_SOLUTION = [
    {
        id: 1,
        icon: <ApartmentOutlined/>,
        name: "Nhà Phố Nhiều Tầng",
        tooltip: "Tối ưu lòng thang bộ",
        des: "Tận dụng diện tích chỉ từ 1m², lắp đặt gọn gàng ngay giữa khoảng thông tầng thang bộ. Giải quyết hoàn toàn việc di chuyển nặng nhọc của người lớn tuổi và trẻ nhỏ qua 4 - 6 tầng lầu.",
        note: [
            { title: "Kích thước tối thiểu:" }, 
            { des_title: "Chỉ từ 900mm x 1000mm" }
        ]
    },
    {
        id: 2,
        icon: <VillaOutlined/>,
        name: 'Biệt Thự & Villa',
        tooltip: "Nghệ thuật trung tâm",
        des: 'Trở thành tâm điểm sang trọng với buồng kính Panoramic 360 độ hoặc mạ vàng Titan sang chảnh. Tôn vinh không gian tráng lệ, mở rộng tầm nhìn toàn cảnh ra cảnh quan sân vườn nội khu.',
        note: [
            { title: "Vật liệu chủ đạo:" }, 
            { des_title: "Kính cường lực & Hợp kim mạ vàng" }
        ]
    },
    {
        id: 3,
        icon: <MapOutlined/>,
        name: 'Nhà Ở Hiện Đại',
        tooltip: "Vận hành xanh & thông minh",
        des: 'Ứng dụng động cơ không hộp số Gearless PM tiết kiệm tới 45% điện năng. Tích hợp giải pháp SmartHome, điều khiển phân tầng bảo mật thẻ từ hoặc ứng dụng điện thoại tiện lợi.',
        note: [
            { title: "Tiêu thụ điện:"},
            { des_title: "Tiết kiệm ~ 1.1kW tương đương tủ lạnh" }
        ]
    },
    {
        id: 4,
        icon: <BuildCircleOutlined/>,
        name: 'Công Trình Cải Tạo',
        tooltip: "Không đập phá kết cấu",
        des: "Đột phá với khả năng lắp đặt không cần phòng máy trên nóc nhà và hố pit siêu nông chỉ từ 200mm. Thi công lắp ráp nhanh gọn trong 5-7 ngày làm việc mà không làm ảnh hưởng nền móng cũ.",
        note: [
            { title: "Thời gian lắp dựng:" },
            { des_title: "Chỉ từ 5 đến 7 ngày hoàn thiện" }
        ]
    }
]

const DATA_PROFESSIONAL_PARAMETERS: ProfessionalParameter[] = [
    {
        id: 1,
        weight: 250,
        people_number: "2 - 3 Người",
        title: "Tối Ưu Diện Tích Nhỏ Hẹp",
        des: "Dành riêng cho nhà phố cải tạo, nhà ống có diện tích giếng trời cực kỳ hạn chế",
        size: "Rộng 950 x Sâu 1000 mm",
        cabin: "800 x 800 mm",
        type_open: "Mở tay kính Swing Door",
        pit_hole: "Tối thiếu 150 - 200 mm",
        note: "Phù hợp: Nhà ống 30m² - 50m²",
        isPopular: false
    },
    {
        id: 2,
        weight: 320,
        people_number: "3 - 4 Người",
        title: "Cân Bằng Tiện Nghi & Thẩm Mỹ",
        des: "Lựa chọn hoàn hảo cho hầu hết nhà phố cao cấp, liền kề và shophouse 3 thế hệ.",
        size: "Rộng 1200 × Sâu 1200 mm",
        cabin: "950 × 1000 mm",
        type_open: "Lùa tự động 2 cánh (CO/SO)",
        pit_hole: "200 - 300 mm",
        note: "Phù hợp: Biệt thự phố 60m² - 120m²",
        isPopular: true
    },
    {
        id: 3,
        weight: 450,
        people_number: "5 - 6 Người",
        title: "Đẳng Cấp Biệt Thự & Penthouse",
        des: "Không gian cabin siêu rộng rãi, thoải mái đưa đẩy xe lăn chuyên dụng và hành lý.",
        size: "Rộng 1400 × Sâu 1450 mm",
        cabin: "1100 × 1200 mm",
        type_open: "Lùa 2 cánh mở tim hoặc 4 cánh",
        pit_hole: "300 - 450 mm",
        note: "Phù hợp: Dinh thự, Biệt thự song lập/đơn lập",
        isPopular: false
    }
]

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

const SPEC_ROWS: { label: string; key: keyof ProfessionalParameter }[] = [
    { label: "Kích thước giếng thang:", key: "size" },
    { label: "Lòng cabin thực tế:", key: "cabin" },
    { label: "Kiểu mở cửa:", key: "type_open" },
    { label: "Hố Pit yêu cầu:", key: "pit_hole" },
];

interface ComparisonRow {
    id: number;
    feature: string;
    steel: string;
    /** Phần được nhấn màu đậm hơn trong cột khung thép (nếu có) */
    steelHighlight?: string;
    concrete: string;
}

const COMPARISON_HEADERS = {
    feature: "Đặc Tính Kỹ Thuật",
    steel: "Khung Thép Hợp Kim & Vách Kính 4 Mặt",
    concrete: "Hệ Giếng Bê Tông Cốt Thép Truyền Thống",
};

const COMPARISON_DATA: ComparisonRow[] = [
    {
        id: 1,
        feature: "Tính thẩm mỹ thị giác",
        steel: "Trong suốt 360°, đón ánh sáng giếng trời tự nhiên",
        concrete: "Hộp kín, cần thêm giải pháp chiếu sáng nhân tạo",
    },
    {
        id: 2,
        feature: "Thời gian thi công",
        steel: "Lắp ghép chỉ 3–5 ngày, sạch sẽ không bụi bặm",
        concrete: "Đổ bê tông, xây chát, chờ khô 25–45 ngày",
    },
    {
        id: 3,
        feature: "Tải trọng tác động lên móng",
        steelHighlight: "Nhẹ hơn 60%",
        steel: ", thích hợp hoàn hảo cho nhà cải tạo",
        concrete: "Khối lượng nặng, yêu cầu gia cố móng phức tạp",
    },
    {
        id: 4,
        feature: "Diện tích lọt lòng sử dụng",
        steel: "Tiết kiệm độ dày thành tường đến 15cm mỗi phía",
        concrete: "Tường gạch và cột bê tông chiếm chỗ lớn (20-22cm)",
    },
];

const cellBase = {
    fontSize: 12,
    px: 2,
    py: 1.75,
    borderBottom: `1px solid #EDEDED`,
} as const;

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
            {/* Badge "Phổ biến nhất" */}
            {isPopular && (
                <Chip
                    label="PHỔ BIẾN NHẤT"
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

            {/* Tải trọng + số người */}
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
                            fontSize: { xs: 36, md: 40 },
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
                            fontSize: { xs: 24, md: 26 },
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

            {/* Tiêu đề + mô tả */}
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 13.5,
                    color: COLOR.text,
                    mb: 0.75,
                }}
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

            {/* Bảng thông số */}
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
                            sx={{
                                fontSize: 12,
                                color: COLOR.muted,
                                whiteSpace: "nowrap",
                            }}
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

            {/* Ghi chú phù hợp */}
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

const ElevatorFamily = (props: ElevatorFamilyProps) => {
    const {  } = props;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/thang-may", {
            state: {
                scrollTo: "products"
            }
        });

    };

    const handleContact = () => {
        navigate("/thang-may", {
            state: {
                scrollTo: "contact"
            }
        })
    }
    return(
        <Box>
            {/* Nhúng mã hóa font trực tiếp vào component để đảm bảo font được tải thành công */}
            <style>{FONT_IMPORT}</style>
            {/* ----------------- BANNER ----------------- */}
            <Box px={3} py={5}>
                <Stack direction='row' display='flex' gap={1}>
                    <IconButton
                        icon={<NavigateBefore/>}
                        handleFunt={handleBack}
                        backgroundColor="transparent"
                        tooltip="Quay lại"
                        width={0}
                        height={0}
                    />
                    <Typography fontWeight={600}>THANG MÁY GIA ĐÌNH</Typography>
                </Stack>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography fontWeight={700} mt={2} variant="h4">Kiến Tạo Tiện Nghi</Typography>
                        <Stack direction='row'>
                            <Typography 
                                sx={{ 
                                    color: COLORS.PRIMARY, 
                                    fontFamily: "'Playfair Display', 'Didot', serif",
                                    fontStyle: 'italic',
                                    fontWeight: 400, // Để nét thanh mảnh đúng chuẩn editorial
                                    fontFeatureSettings: '"swsh" 1, "liga" 1', // Kích hoạt đuôi uốn lượn nghệ thuật nếu trình duyệt hỗ trợ
                                    paddingRight: '4px' // Tránh mất nét đuôi chữ nghiêng
                                }}
                                variant="h4" fontWeight={700}
                            >
                                Nâng Tầm
                            </Typography>
                            <Typography variant="h4" fontWeight={700}>Không Gian</Typography>
                        </Stack>
                        <Typography mt={2}>
                            Thang máy gia đình là giải pháp di chuyển thông minh, an toàn và êm ái giữa các tầng trong không gian nhà ở nhiều tầng hiện đại, góp phần nâng cao tiện nghi và
                            hỗ trợ cũng như tối ưu sinh hoạt hằng ngày cho mọi thế hệ và tôn vinh ngôn ngữ kiến trúc ngôi nhà.
                        </Typography>
                        <Grid container spacing={2}>
                            {DATA.map((data) => (
                                <Grid key={data.id} size={{ xs: 12, md: 4 }}>
                                    <Box borderRadius={2} p={1} bgcolor='#fff' mt={3}>
                                        {data.icon}
                                        <Typography variant="subtitle2" fontWeight={600}>{data.label}</Typography>
                                        <Typography variant="subtitle2">{data.content}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Box gap={2} mt={4} display='flex' flexDirection='row'>
                            <Button
                                sx={{ bgcolor: COLORS.PRIMARY }}
                                endIcon={<ArrowForward/>}
                                onClick={handleContact}
                            >
                                LIÊN HỆ KHẢO SÁT TẠI NHÀ
                            </Button>
                            <Button
                                sx={{ bgcolor: COLORS.PRIMARY }}
                                startIcon={<MenuBookOutlined/>}
                            >
                                THÔNG SỐ KỸ THUẬT
                            </Button>
                        </Box>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'flex-end'}} size={{ xs: 12, md: 5 }}>
                        <CommonImage
                            src={e_family_1}
                            sx={{ 
                                height: { xs: '100%', md: 450 },
                                width: { xs: '100%', md: 720 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            {/* ----------------- GIẢI PHÁP LINH HOẠT ----------------- */}
            <Box gap={1} bgcolor='#e9e9e9' px={2} py={5} display='flex' flexDirection='column' justifyContent='center'>
                <Typography textAlign='center'>GIẢI PHÁP LINH HOẠT</Typography>
                <Typography textAlign='center' variant="h4" fontWeight={700}> Ứng Dụng Chuẩn Mực Cho Từng</Typography>
                <Typography textAlign='center' variant="h4" fontWeight={700}> Không Gian Sống</Typography>
                <Typography textAlign='center' variant="caption">Dù là biệt thự tân cổ điển, nhà phố giếng trời hẹp hay công trình cải tạo lâu năm, Mintz Funi đều</Typography>
                <Typography textAlign='center' variant="caption">mang lại giải pháp cơ khí tối ưu không làm xáo trộn kết cấu kiến trúc.</Typography>
                <Grid container spacing={2}>
                    {DATA_SOLUTION.map((data) => (
                        <Grid key={data.id} size={{ xs: 12, md: 3 }}>
                            <Box borderRadius={2} p={1} bgcolor='#fff' mt={3} display='flex' gap={1} flexDirection='column'>
                                <IconButton
                                    icon={data.icon}
                                    backgroundColor="#e4e3e3"
                                />
                                <Typography fontWeight={600} variant="subtitle2">{data.name}</Typography>
                                <Typography variant="caption">{data.tooltip.toUpperCase()}</Typography>
                                <Typography variant="caption">{data.des}</Typography>
                                <Box borderRadius={1} bgcolor='#e4e3e3' p={1.5}>
                                    {data.note.map((item) => (
                                        <Stack direction='column'>
                                            <Typography variant="caption" fontWeight={500}>{item.title}</Typography>
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
                        <Typography>THÔNG SỐ CHUYÊN MÔN</Typography>
                        <Typography variant="h5" fontWeight={500}>Bộ Tiêu Chí Lựa Chọn Thang Máy Chuẩn Quốc Tế</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="caption">Mỗi công trình sở hữu yêu cầu công năng riêng biệt. Lựa chọn mức tải trọng, hành trình và hệ kết cấu giếng thang phù hợp giúp tối ưu hóa chi phí đầu tư.</Typography>
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
            {/* ----------------- SO SÁNH PHƯƠNG ÁN KẾT CẤU GIẾNG THANG ----------------- */}
                <Box sx={{ bgcolor: '#F3F3F3', px: { xs: 2, md: 3 } }}>
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
                        <Typography
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                fontSize: 18,
                                mb: 2.5,
                            }}
                        >
                            So Sánh Phương Án Kết Cấu Giếng Thang
                        </Typography>

                        {/* Cho phép cuộn ngang trên màn hình nhỏ */}
                        <TableContainer sx={{ overflowX: "auto" }}>
                            <Table sx={{ minWidth: 720, tableLayout: "fixed" }}>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: "#EEEEEE" }}>
                                        <TableCell
                                            sx={{
                                                ...cellBase,
                                                width: "26%",
                                                fontWeight: 600,
                                                borderBottom: "none",
                                            }}
                                        >
                                            {COMPARISON_HEADERS.feature}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                ...cellBase,
                                                width: "37%",
                                                fontWeight: 600,
                                                borderBottom: "none",
                                            }}
                                        >
                                            {COMPARISON_HEADERS.steel}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                ...cellBase,
                                                width: "37%",
                                                fontWeight: 600,
                                                borderBottom: "none",
                                            }}
                                        >
                                            {COMPARISON_HEADERS.concrete}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {COMPARISON_DATA.map((row, index) => {
                                        const isLast = index === COMPARISON_DATA.length - 1;
                                        const border = isLast ? { borderBottom: "none" } : {};

                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell
                                                    sx={{
                                                        ...cellBase,
                                                        ...border,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {row.feature}
                                                </TableCell>

                                                <TableCell
                                                    sx={{ ...cellBase, ...border }}
                                                >
                                                    {row.steelHighlight && (
                                                        <Box
                                                            component="span"
                                                            sx={{
                                                                fontWeight: 500,
                                                            }}
                                                        >
                                                            {row.steelHighlight}
                                                        </Box>
                                                    )}
                                                    {row.steel}
                                                </TableCell>

                                                <TableCell
                                                    sx={{ ...cellBase, ...border }}
                                                >
                                                    {row.concrete}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            {/* ----------------- TRIẾT LÝ CHẾ TÁC ----------------- */}
            <Box gap={1} bgcolor='#e9e9e9' px={2} py={6} display='flex' flexDirection='column' justifyContent='center'>
                <Typography textAlign='center'>TRIẾT LÝ CHẾ TÁC</Typography>
                <Typography textAlign='center' variant="h4" fontWeight={700}> Định Hướng Thiết Kế Chuẩn Mực</Typography>
                <Typography textAlign='center' variant="h4" fontWeight={700}> MINTZ FUNI</Typography>
                <Typography textAlign='center' variant="caption">Giao thoa giữa vẻ đẹp kiến trúc đỉnh cao, sự chăm chút tỉ mỉ cho người dùng đa thế hệ và tiêu</Typography>
                <Typography textAlign='center' variant="caption">chuẩn cơ khí tuyệt đối.</Typography>                
            </Box>
        </Box>
    )
}

export default ElevatorFamily;