import Page from "@/components/Page";
import { getAnalytics, getListPagePaths, getRealtime } from "@/services/analytics-service";
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
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

export interface RealtimeData {
  timestamp: string;
  active_users: number;
}

const AnalyticsChart = () => {
    const [data, setData] = useState<DataPoint[] | null>(null);
    const [realtimeData, setRealtimeData] = useState<RealtimeData[]>([]);
    const [pagePaths, setPagePaths] = useState<string[]>([]);
    const [selectedPath, setSelectedPath] = useState<string>('ALL');
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
                const res = await getAnalytics({ from, to, pagePath: selectedPath });
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
                const res = await getListPagePaths({ from, to });
                const newData = res.data as any as string[];
                setPagePaths(newData)
            } catch (err: any) {
                setError(err?.message || 'Lỗi mạng');
            } finally {
                setLoadingData(false);
            }
        }
        load();
        loadPath();
    }, [from, to, selectedPath]);

    // Lấy dữ liệu realtime, refresh mỗi 10 phút
    useEffect(() => {
        const fetchRealtime = async() => {
            const res = await getRealtime();
            console.log("res: ", res);
            const newData = res.data as any as RealtimeData[];
            setRealtimeData(newData);
        };
        fetchRealtime();
        const interval = setInterval(fetchRealtime, 10 * 60 * 1000); // 10 phút
        return () => clearInterval(interval);
    }, []);

    const handleChangePath = (e: any) => setSelectedPath(e.target.value);

    if (loadingData || loadingPaths) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!data || data.length === 0) return <Typography>Không có dữ liệu</Typography>;
    return (
        <Paper sx={{ p:2, m: 2 }}>
            <Page title="Thống kê lượt truy cập">
                <Typography variant="h6" gutterBottom>Traffic Analytics</Typography>
                <FormControl sx={{ mb:2, minWidth: 200 }}>
                    <InputLabel>Page Path</InputLabel>
                    <Select value={selectedPath} label="Page Path" onChange={handleChangePath}>
                    <MenuItem value="ALL">All pages</MenuItem>
                    {pagePaths.map(p => (
                        <MenuItem key={p} value={p}>{p}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <Box sx={{ height: 360 }}>
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="activeUsers" name="Người dùng hoạt động" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pageViews" name="Lượt xem trang" stroke="#82ca9d" />
                    </LineChart>
                    </ResponsiveContainer>
                </Box>
                <Box mt={2} sx={{ height: 360 }}>
                    <Typography variant="h6" gutterBottom mb={2}>Realtime Analytics (last 24h)</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={realtimeData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="timestamp" tickFormatter={(t) => dayjs(t).format("HH:mm")} />
                            <YAxis />
                            <Tooltip labelFormatter={(t) => dayjs(t).format("DD/MM HH:mm")} />
                            <Line type="monotone" dataKey="active_users" name="Người dùng hoạt động" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            </Page>
        </Paper>
    )
}

export default AnalyticsChart;