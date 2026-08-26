// NEXORA — Analytics Demo Data
// All data is fictional and for demonstration purposes only

import type { AnalyticsDataPoint, CategoryPerformance, KpiData } from '../types';

export const monthlyAnalytics: AnalyticsDataPoint[] = [
  { month: 'Jan', revenue: 52400, orders: 812, customers: 6820, aov: 64.5 },
  { month: 'Feb', revenue: 58900, orders: 934, customers: 7120, aov: 63.1 },
  { month: 'Mar', revenue: 61200, orders: 967, customers: 7380, aov: 63.3 },
  { month: 'Apr', revenue: 55800, orders: 891, customers: 7550, aov: 62.6 },
  { month: 'May', revenue: 67300, orders: 1043, customers: 7790, aov: 64.5 },
  { month: 'Jun', revenue: 72800, orders: 1124, customers: 8020, aov: 64.8 },
  { month: 'Jul', revenue: 69500, orders: 1082, customers: 8190, aov: 64.2 },
  { month: 'Aug', revenue: 75200, orders: 1156, customers: 8340, aov: 65.1 },
  { month: 'Sep', revenue: 78900, orders: 1198, customers: 8410, aov: 65.9 },
  { month: 'Oct', revenue: 81400, orders: 1241, customers: 8450, aov: 65.6 },
  { month: 'Nov', revenue: 84240, orders: 1284, customers: 8492, aov: 65.6 },
  { month: 'Dec', revenue: 79600, orders: 1213, customers: 8390, aov: 65.6 },
];

export const weeklyAnalytics: AnalyticsDataPoint[] = [
  { month: 'Week 1', revenue: 18200, orders: 283, customers: 8390, aov: 64.3 },
  { month: 'Week 2', revenue: 21400, orders: 322, customers: 8420, aov: 66.5 },
  { month: 'Week 3', revenue: 19800, orders: 301, customers: 8456, aov: 65.8 },
  { month: 'Week 4', revenue: 24840, orders: 378, customers: 8492, aov: 65.7 },
];

export const categoryPerformance: CategoryPerformance[] = [
  { name: 'Software', value: 38400, growth: 12.4 },
  { name: 'Services', value: 24200, growth: 8.1 },
  { name: 'Consulting', value: 14800, growth: 5.3 },
  { name: 'Other', value: 6840, growth: -2.1 },
];

export const kpiData: KpiData = {
  revenue: 84240,
  orders: 1284,
  customers: 8492,
  conversionRate: 4.8,
  revenueChange: 12.5,
  ordersChange: 8.3,
  customersChange: 6.2,
  conversionChange: 0.4,
};
