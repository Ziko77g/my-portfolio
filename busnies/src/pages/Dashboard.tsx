import React, { useState } from 'react';
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
  Calendar,
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Table, type Column } from '../components/ui/Table';
import { RevenueChart } from '../components/charts/RevenueChart';
import { SalesBreakdownChart } from '../components/charts/SalesBreakdownChart';
import { kpiData } from '../data/analytics';
import { demoOrders } from '../data/orders';
import { useLanguage } from '../context/LanguageContext';
import type { Order, DateRange } from '../types';
import { Drawer } from '../components/ui/Modal';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [dateRange, setDateRange] = useState<DateRange>('30d');
  const [chartMetric, setChartMetric] = useState<'revenue' | 'orders'>('revenue');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'completed': return <Badge variant="success" dot>{t.orders.completed}</Badge>;
      case 'processing': return <Badge variant="info" dot>{t.orders.processing}</Badge>;
      case 'pending': return <Badge variant="warning" dot>{t.orders.pending}</Badge>;
      case 'cancelled': return <Badge variant="error" dot>{t.orders.cancelled}</Badge>;
    }
  };

  const columns: Column<Order>[] = [
    { key: 'id', header: t.orders.orderId, sortable: true },
    { key: 'customer', header: t.orders.customer, sortable: true },
    { key: 'product', header: t.orders.product, sortable: true },
    {
      key: 'date',
      header: t.common.date,
      sortable: true,
      render: (item) => new Date(item.date).toLocaleDateString(),
    },
    {
      key: 'amount',
      header: t.common.amount,
      sortable: true,
      align: 'right',
      render: (item) => `$${item.amount.toFixed(2)}`,
    },
    {
      key: 'status',
      header: t.common.status,
      align: 'center',
      render: (item) => getStatusBadge(item.status),
    },
  ];

  const dateRanges: { id: DateRange; label: string }[] = [
    { id: 'today', label: t.common.today },
    { id: '7d', label: t.common.last7days },
    { id: '30d', label: t.common.last30days },
    { id: '90d', label: t.common.last90days },
    { id: 'custom', label: t.common.custom },
  ];

  return (
    <div className="space-y-6">
      {/* Header Greeting & Date Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.dashboard.greeting}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.dashboard.subtitle}
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

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Revenue KPI */}
        <Card hoverable>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t.dashboard.revenue}
              </span>
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                ${kpiData.revenue.toLocaleString()}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>+{kpiData.revenueChange}%</span>
              <span className="text-slate-400 font-normal">{t.dashboard.vsLastPeriod}</span>
            </div>
          </CardContent>
        </Card>

        {/* Orders KPI */}
        <Card hoverable>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t.dashboard.orders}
              </span>
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {kpiData.orders.toLocaleString()}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>+{kpiData.ordersChange}%</span>
              <span className="text-slate-400 font-normal">{t.dashboard.vsLastPeriod}</span>
            </div>
          </CardContent>
        </Card>

        {/* Customers KPI */}
        <Card hoverable>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t.dashboard.customers}
              </span>
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {kpiData.customers.toLocaleString()}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>+{kpiData.customersChange}%</span>
              <span className="text-slate-400 font-normal">{t.dashboard.vsLastPeriod}</span>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Rate KPI */}
        <Card hoverable>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t.dashboard.conversionRate}
              </span>
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                {kpiData.conversionRate}%
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>+{kpiData.conversionChange}%</span>
              <span className="text-slate-400 font-normal">{t.dashboard.vsLastPeriod}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue Trend Chart (2 cols) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {t.dashboard.revenueTrend}
              </h3>
              <p className="text-xs text-slate-500">Monthly breakdown & growth trajectory</p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setChartMetric('revenue')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  chartMetric === 'revenue'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {t.dashboard.revenue}
              </button>
              <button
                onClick={() => setChartMetric('orders')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  chartMetric === 'orders'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {t.dashboard.orders}
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <RevenueChart dataMetric={chartMetric} height={320} />
          </CardContent>
        </Card>

        {/* Sales Breakdown Donut Chart (1 col) */}
        <Card>
          <CardHeader>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {t.dashboard.salesBreakdown}
              </h3>
              <p className="text-xs text-slate-500">Distribution by product category</p>
            </div>
          </CardHeader>
          <CardContent>
            <SalesBreakdownChart height={320} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t.dashboard.recentOrders}
            </h3>
            <p className="text-xs text-slate-500">Latest transactions across all channels</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => window.location.hash = '#/orders'}>
            {t.common.viewAll}
          </Button>
        </CardHeader>
        <CardContent className="p-0 sm:p-5">
          <Table
            data={demoOrders.slice(0, 6)}
            columns={columns}
            keyExtractor={(item) => item.id}
            onRowClick={(item) => setSelectedOrder(item)}
            pageSize={6}
          />
        </CardContent>
      </Card>

      {/* Order Detail Modal / Drawer */}
      <Drawer
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={`${t.orders.orderDetails} — ${selectedOrder?.id}`}
      >
        {selectedOrder && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <p className="text-2xs text-slate-400 uppercase tracking-wider">{t.orders.customer}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{selectedOrder.customer}</p>
              </div>
              <div>{getStatusBadge(selectedOrder.status)}</div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.orders.items}</h4>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg space-y-2">
                {selectedOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs">
                    <span className="font-medium text-slate-900 dark:text-slate-100">{item.name} x{item.quantity}</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">${(item.quantity * item.unitPrice).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-slate-400">{t.orders.paymentMethod}</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{selectedOrder.paymentMethod}</p>
              </div>
              <div>
                <p className="text-slate-400">{t.orders.shippingAddress}</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{selectedOrder.shippingAddress}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{t.orders.timeline}</h4>
              <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 ltr:before:left-2 rtl:before:right-2">
                {selectedOrder.timeline.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 relative pl-6 rtl:pr-6 rtl:pl-0">
                    <span className="absolute left-0 rtl:right-0 top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{event.event}</p>
                      <p className="text-2xs text-slate-500">{event.description}</p>
                      <p className="text-2xs text-slate-400 mt-0.5">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};
