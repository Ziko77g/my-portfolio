// ============================================================
// NEXORA — TypeScript Types
// Demo/Portfolio Project — All data is fictional
// ============================================================

export type OrderStatus = 'completed' | 'processing' | 'pending' | 'cancelled';
export type ProductStatus = 'active' | 'low_stock' | 'out_of_stock' | 'archived';
export type TaskStatus = 'todo' | 'in_progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';
export type CustomerStatus = 'active' | 'inactive' | 'vip';
export type TeamMemberStatus = 'online' | 'away' | 'offline';
export type NotificationType = 'order' | 'customer' | 'system' | 'task';
export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'ar';
export type DateRange = 'today' | '7d' | '30d' | '90d' | 'custom';

export interface Order {
  id: string;
  customer: string;
  customerId: string;
  product: string;
  category: string;
  date: string;
  amount: number;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  timeline: OrderEvent[];
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderEvent {
  date: string;
  event: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  totalOrders: number;
  totalSpent: number;
  status: CustomerStatus;
  lastActivity: string;
  avatar?: string;
  country: string;
  company?: string;
  recentOrders: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  sku: string;
  description: string;
  sales: number;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  assigneeId: string;
  priority: TaskPriority;
  dueDate: string;
  status: TaskStatus;
  createdAt: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: TeamMemberStatus;
  lastActive: string;
  department: string;
  joinedDate: string;
  tasksCompleted: number;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface AnalyticsDataPoint {
  month: string;
  revenue: number;
  orders: number;
  customers: number;
  aov: number;
}

export interface CategoryPerformance {
  name: string;
  value: number;
  growth: number;
}

export interface KpiData {
  revenue: number;
  orders: number;
  customers: number;
  conversionRate: number;
  revenueChange: number;
  ordersChange: number;
  customersChange: number;
  conversionChange: number;
}

export interface SearchResult {
  id: string;
  type: 'order' | 'customer' | 'product' | 'task';
  title: string;
  subtitle: string;
  url: string;
}

export interface TranslationKeys {
  // Navigation
  nav: {
    dashboard: string;
    orders: string;
    customers: string;
    products: string;
    analytics: string;
    tasks: string;
    team: string;
    notifications: string;
    settings: string;
    overview: string;
    management: string;
    workspace: string;
  };
  // Common
  common: {
    search: string;
    filter: string;
    sort: string;
    export: string;
    add: string;
    edit: string;
    delete: string;
    save: string;
    cancel: string;
    confirm: string;
    close: string;
    loading: string;
    noData: string;
    viewAll: string;
    status: string;
    date: string;
    amount: string;
    actions: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    previous: string;
    next: string;
    of: string;
    results: string;
    showing: string;
    to: string;
    all: string;
    today: string;
    last7days: string;
    last30days: string;
    last90days: string;
    custom: string;
    markAllRead: string;
    clearAll: string;
    noNotifications: string;
    demoData: string;
  };
  // Dashboard
  dashboard: {
    greeting: string;
    subtitle: string;
    revenue: string;
    orders: string;
    customers: string;
    conversionRate: string;
    vsLastPeriod: string;
    recentOrders: string;
    salesBreakdown: string;
    revenueTrend: string;
  };
  // Orders
  orders: {
    title: string;
    orderId: string;
    customer: string;
    product: string;
    completed: string;
    processing: string;
    pending: string;
    cancelled: string;
    orderDetails: string;
    orderInfo: string;
    items: string;
    timeline: string;
    paymentMethod: string;
    shippingAddress: string;
  };
  // Customers
  customers: {
    title: string;
    totalOrders: string;
    totalSpent: string;
    lastActivity: string;
    joinedDate: string;
    vip: string;
    active: string;
    inactive: string;
    customerProfile: string;
    recentOrders: string;
  };
  // Products
  products: {
    title: string;
    sku: string;
    category: string;
    price: string;
    stock: string;
    sales: string;
    addProduct: string;
    editProduct: string;
    active: string;
    lowStock: string;
    outOfStock: string;
    archived: string;
    description: string;
  };
  // Analytics
  analytics: {
    title: string;
    revenueTrend: string;
    ordersTrend: string;
    customerGrowth: string;
    categoryPerformance: string;
    avgOrderValue: string;
  };
  // Tasks
  tasks: {
    title: string;
    addTask: string;
    editTask: string;
    todo: string;
    inProgress: string;
    completed: string;
    low: string;
    medium: string;
    high: string;
    assignee: string;
    dueDate: string;
    priority: string;
    noTasks: string;
  };
  // Team
  team: {
    title: string;
    online: string;
    away: string;
    offline: string;
    lastActive: string;
    department: string;
    joinedDate: string;
    tasksCompleted: string;
  };
  // Notifications
  notifications: {
    title: string;
    order: string;
    customer: string;
    system: string;
    task: string;
    markRead: string;
    unread: string;
  };
  // Settings
  settings: {
    title: string;
    profile: string;
    preferences: string;
    business: string;
    security: string;
    language: string;
    theme: string;
    lightMode: string;
    darkMode: string;
    systemMode: string;
    businessName: string;
    currency: string;
    timezone: string;
    password: string;
    twoFactor: string;
    saveChanges: string;
    english: string;
    arabic: string;
    notificationPrefs: string;
  };
}
