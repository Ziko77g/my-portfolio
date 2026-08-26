import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { monthlyAnalytics, weeklyAnalytics } from '../../data/analytics';

export interface RevenueChartProps {
  dataMetric?: 'revenue' | 'orders';
  timeRange?: 'monthly' | 'weekly';
  height?: number;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({
  dataMetric = 'revenue',
  timeRange = 'monthly',
  height = 320,
}) => {
  const { isDark } = useTheme();
  const rawData = timeRange === 'monthly' ? monthlyAnalytics : weeklyAnalytics;

  const strokeColor = dataMetric === 'revenue' ? '#3b82f6' : '#10b981';
  const fillColor = dataMetric === 'revenue' ? '#3b82f6' : '#10b981';

  const formatYAxis = (val: number) => {
    if (dataMetric === 'revenue') {
      return `$${(val / 1000).toFixed(0)}k`;
    }
    return val.toString();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataVal = payload[0].value;
      return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-md text-xs">
          <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{label}</p>
          <p className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: strokeColor }} />
            <span>{dataMetric === 'revenue' ? 'Revenue' : 'Orders'}:</span>
            <span className="font-bold text-slate-900 dark:text-slate-100">
              {dataMetric === 'revenue' ? `$${dataVal.toLocaleString()}` : dataVal.toLocaleString()}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rawData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fillColor} stopOpacity={isDark ? 0.35 : 0.25} />
              <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={isDark ? '#334155' : '#e2e8f0'}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 12 }}
            tickFormatter={formatYAxis}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: '15px', fontSize: '12px' }}
          />
          <Area
            type="monotone"
            dataKey={dataMetric}
            name={dataMetric === 'revenue' ? 'Revenue ($)' : 'Orders Count'}
            stroke={strokeColor}
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorMetric)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
