import React, { useState } from 'react';
import { Calendar, TrendingUp, DollarSign, ShoppingCart, Users, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { RevenueChart } from '../components/charts/RevenueChart';
import { CustomerGrowthChart } from '../components/charts/CustomerGrowthChart';
import { SalesBreakdownChart } from '../components/charts/SalesBreakdownChart';
import { kpiData } from '../data/analytics';
import { useLanguage } from '../context/LanguageContext';
import type { DateRange } from '../types';

export const Analytics: React.FC = () => {
  const { t } = useLanguage();
  const [dateRange, setDateRange] = useState<DateRange>('30d');

  const dateRanges: { id: DateRange; label: string }[] = [
    { id: 'today', label: t.common.today },
    { id: '7d', label: t.common.last7days },
    { id: '30d', label: t.common.last30days },
    { id: '90d', label: t.common.last90days },
    { id: 'custom', label: t.common.custom },
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.analytics.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Deep financial and business performance insights
          </p>
        </div>

        {/* Date Range Selector */}
        <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs overflow-x-auto">
          <Calendar className="w-4 h-4 text-slate-400 ml-2 rtl:mr-2 rtl:ml-0 shrink-0" />
          {dateRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setDateRange(range.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                dateRange === range.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">{t.dashboard.revenue}</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">${kpiData.revenue.toLocaleString()}</p>
              <p className="text-2xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +{kpiData.revenueChange}%
              </p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 rounded-xl">
              <DollarSign className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">{t.dashboard.orders}</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">{kpiData.orders.toLocaleString()}</p>
              <p className="text-2xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +{kpiData.ordersChange}%
              </p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 rounded-xl">
              <ShoppingCart className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">{t.analytics.avgOrderValue}</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">$65.60</p>
              <p className="text-2xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +2.1%
              </p>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">{t.dashboard.conversionRate}</p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">{kpiData.conversionRate}%</p>
              <p className="text-2xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +{kpiData.conversionChange}%
              </p>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t.analytics.revenueTrend}
            </h3>
          </CardHeader>
          <CardContent>
            <RevenueChart dataMetric="revenue" height={280} />
          </CardContent>
        </Card>

        {/* Orders Trend */}
        <Card>
          <CardHeader>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t.analytics.ordersTrend}
            </h3>
          </CardHeader>
          <CardContent>
            <RevenueChart dataMetric="orders" height={280} />
          </CardContent>
        </Card>

        {/* Customer Growth */}
        <Card>
          <CardHeader>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t.analytics.customerGrowth}
            </h3>
          </CardHeader>
          <CardContent>
            <CustomerGrowthChart height={280} />
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t.analytics.categoryPerformance}
            </h3>
          </CardHeader>
          <CardContent>
            <SalesBreakdownChart height={280} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
