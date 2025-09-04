import InputText from "@/components/InputText";
import Page from "@/components/Page";
import { getAnalytics, getListPagePaths, getRealtime } from "@/services/analytics-service";
import DateTime from "@/utils/DateTime";
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid
} from 'recharts'

export type DataPoint = {
  date: string;
  activeUsers: number;
  pageViews: number;
  sessions: number;
};

interface PagePathAndTitle {
    page_path: string,
    page_title: string
}

export interface RealtimeData {
  timestamp: string;
  active_users: number;
}

const AnalyticsChart = () => {
    const [data, setData] = useState<DataPoint[] | null>(null);
    const [realtimeData, setRealtimeData] = useState<RealtimeData[]>([]);
    const [pagePaths, setPagePaths] = useState<PagePathAndTitle[]>([]);
    const [selectedPath, setSelectedPath] = useState<string>('ALL');
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs().subtract(1, 'day'));
    const [loadingData, setLoadingData] = useState(false);
    const [loadingPaths, setLoadingPaths] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const to = new Date().toISOString().slice(0,10);
    const d = new Date();
    d.setDate(d.getDate() - 29);
    const from = d.toISOString().slice(0,10);

    // const to = dayjs().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
    // const from = dayjs().tz('Asia/Ho_Chi_Minh').subtract(6, 'day').format('YYYY-MM-DD');

    useEffect(() => {
        const load = async() => {
            setLoadingPaths(true);
            setError(null);
            try {
                const params: any = { from, to };
                if (selectedPath !== 'ALL') params.pagePath = selectedPath;
                const date = dayjs(selectedDate).format('YYYY-MM-DD')
                params.date = date;
                const res = await getAnalytics({ pagePath: selectedPath, date: date });
                const newData = res.data as any as DataPoint[];
                setData(newData)
            } catch (err: any) {
                setError(err?.message || 'Lỗi mạng');
            } finally {
                setLoadingPaths(false);
            }
        }
        const loadPath = async() => {
            setLoadingData(true);
            setError(null);
            try {
                const date = dayjs(selectedDate).format('YYYY-MM-DD')
                const res = await getListPagePaths({ date: date});
                const newData = res.data as any as PagePathAndTitle[];
                setPagePaths(newData)
            } catch (err: any) {
                setError(err?.message || 'Lỗi mạng');
            } finally {
                setLoadingData(false);
            }
        }
        load();
        loadPath();
    }, [from, to, selectedPath, selectedDate]);

    // Lấy dữ liệu realtime, refresh mỗi 10 phút
    useEffect(() => {
        const fetchRealtime = async() => {
            const res = await getRealtime();
            const newData = res.data as any as RealtimeData[];
            setRealtimeData(newData);
        };
        fetchRealtime();
        const interval = setInterval(fetchRealtime, 10 * 60 * 1000); // 10 phút
        return () => clearInterval(interval);
    }, []);

    const handleChangePath = (e: any) => setSelectedPath(e.target.value);
    const handleInputChange = (name: string, value: any) => {
        setSelectedDate(value)
    }

    if (loadingData || loadingPaths) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    // if (!data || data.length === 0) return <Typography p={2} fontWeight={800}>Không có dữ liệu</Typography>;
    return (
        <Page title="Thống kê lượt truy cập">
            <Paper sx={{ p:2, m: 2 }}>
                <Typography variant="h6" gutterBottom>{`Lưu lượng người truy cập và lượt xem trang ngày ${selectedDate && selectedDate.format('DD/MM/YYYY')}`}</Typography>
                {!data || data.length === 0 && (
                    <Typography p={2} fontWeight={800}>Không có dữ liệu</Typography>
                )}
                {data && data.length > 0 && (
                    <Box mt={2} display='flex' flexDirection='row'>
                        <FormControl sx={{ mx:2, mb:2, minWidth: 400 }}>
                            <InputText
                                label="Ngày tháng"
                                name="time"
                                type="date"
                                placeholder="Chọn thời gian"
                                value={selectedDate} 
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl sx={{ mb:2, minWidth: 300 }}>
                            <InputLabel>Đường dẫn + Tiêu đề trang</InputLabel>
                            <Select 
                                value={selectedPath} 
                                label="Đường dẫn + Tiêu đề trang" 
                                onChange={handleChangePath}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: 48 * 6.5, // giới hạn ~6 item hiển thị
                                            width: 300, // độ rộng dropdown
                                            '&::-webkit-scrollbar': { width: '6px', height: '6px' },
                                            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 1 },
                                            '&::-webkit-scrollbar-track': {
                                                backgroundColor: '#f1f1f1',
                                            },
                                        }
                                    },
                                    // căn thẳng hàng với select
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'left'
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'left'
                                    }
                                }}
                            >
                                <MenuItem value="ALL">
                                    <Typography variant="body2" fontWeight={600}>
                                        All pages
                                    </Typography>
                                </MenuItem>
                                {pagePaths.map((p, idx) => (
                                <MenuItem key={idx} value={p.page_path}>
                                    <Box>
                                        <Typography variant="body2" fontWeight={600} sx={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                                            {p.page_title || "(No title)"}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {p.page_path}
                                        </Typography>
                                    </Box>
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                )}
                {data && data.length > 0 && (
                    <Box sx={{ height: 360 }}>
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date"  />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="activeUsers" name="Người dùng hoạt động" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pageViews" name="Lượt xem trang" stroke="#82ca9d" />
                        </LineChart>
                        </ResponsiveContainer>
                    </Box>
                )}
            </Paper>
            <Paper sx={{ p: 2, m: 2}}>
                <Box mt={2} sx={{ height: 360 }}>
                    <Typography variant="h6" gutterBottom mb={2}>Số lượng người dùng truy cập trong 1 ngày (last 24h)</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={realtimeData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="timestamp" tickFormatter={(t) => dayjs(t).format("HH:mm")} />
                            <YAxis />
                            <Legend />
                            <Tooltip labelFormatter={(t) => dayjs(t).format("DD/MM HH:mm")} />
                            <Line type="monotone" dataKey="active_users" name="Người dùng hoạt động" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>
        </Page>
    )
}

export default AnalyticsChart;