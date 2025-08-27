import { HttpResponse } from "@/types/common";
import HttpClient from "@/utils/HttpClient";
import { DataPoint } from "@/views/Manager/Analytics";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'; 
const prefix = `${API_BASE_URL}/api/analytics`;

interface GetAnalyticsParams {
  from: string;
  to: string;
}

export const getAnalytics = (params: GetAnalyticsParams) => {
  return HttpClient.get<any, HttpResponse<DataPoint>>(`${prefix}/overview`, { params });
};