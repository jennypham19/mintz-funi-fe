import { getAnalytics } from "@/services/analytics-service";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import axios from "axios";
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

const AnalyticsChart = () => {
    const [data, setData] = useState<DataPoint[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const to = new Date().toISOString().slice(0,10);
    const d = new Date();
    d.setDate(d.getDate() - 29);
    const from = d.toISOString().slice(0,10);


    useEffect(() => {
        const load = async(fromDate: string, toDate: string) => {
            setLoading(true);
            setError(null);
            try {
                const res = await getAnalytics({ from: fromDate, to: toDate });
                console.log("res: ", res);
                
            } catch (err: any) {
                setError(err?.message || 'Lỗi mạng');
            } finally {
                setLoading(false);
            }
        }
        load(from, to);
    }, [from, to]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!data || data.length === 0) return <Typography>Không có dữ liệu</Typography>;
    return (
        <Paper sx={{ p:2 }}>
        <Typography variant="h6" gutterBottom>Traffic (Active Users & PageViews)</Typography>
        <Box sx={{ height: 360 }}>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeUsers" name="Active Users" stroke="#8884d8" />
                <Line type="monotone" dataKey="pageViews" name="Page Views" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
        </Box>
        </Paper>
    )
}

export default AnalyticsChart;