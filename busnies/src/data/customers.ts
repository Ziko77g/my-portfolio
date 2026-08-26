// NEXORA — Customers Demo Data
// Fictional portfolio demo data

import type { Customer } from '../types';

export const demoCustomers: Customer[] = [
  {
    id: 'CUST-101',
    name: 'Sophia Chen',
    email: 'sophia.chen@techcorp.io',
    phone: '+1 (555) 234-5678',
    joinedDate: '2025-11-14',
    totalOrders: 14,
    totalSpent: 18450.00,
    status: 'vip',
    lastActivity: '2026-08-23T14:32:00Z',
    country: 'United States',
    company: 'TechCorp Solutions',
    recentOrders: ['ORD-9482', 'ORD-9410', 'ORD-9388']
  },
  {
    id: 'CUST-102',
    name: 'Marcus Vance',
    email: 'm.vance@vancemedia.com',
    phone: '+1 (555) 987-6543',
    joinedDate: '2026-01-20',
    totalOrders: 6,
    totalSpent: 9800.00,
    status: 'active',
    lastActivity: '2026-08-23T11:15:00Z',
    country: 'United States',
    company: 'Vance Media Group',
    recentOrders: ['ORD-9481', 'ORD-9422']
  },
  {
    id: 'CUST-103',
    name: 'Elena Rostova',
    email: 'elena@rostovadesign.co',
    phone: '+44 20 7946 0912',
    joinedDate: '2026-03-08',
    totalOrders: 3,
    totalSpent: 1450.00,
    status: 'active',
    lastActivity: '2026-08-22T19:40:00Z',
    country: 'United Kingdom',
    company: 'Rostova Design Studio',
    recentOrders: ['ORD-9480']
  },
  {
    id: 'CUST-104',
    name: 'David Kim',
    email: 'david.k@innovatelabs.net',
    phone: '+1 (555) 456-7890',
    joinedDate: '2025-08-19',
    totalOrders: 9,
    totalSpent: 12300.00,
    status: 'vip',
    lastActivity: '2026-08-22T16:05:00Z',
    country: 'United States',
    company: 'Innovate Labs',
    recentOrders: ['ORD-9479', 'ORD-9390']
  },
  {
    id: 'CUST-105',
    name: 'Sarah Jenkins',
    email: 'sjenkins@apexcloud.com',
    phone: '+1 (555) 345-6789',
    joinedDate: '2026-04-11',
    totalOrders: 2,
    totalSpent: 1690.00,
    status: 'active',
    lastActivity: '2026-08-22T10:12:00Z',
    country: 'United States',
    company: 'Apex Cloud Systems',
    recentOrders: ['ORD-9478']
  },
  {
    id: 'CUST-106',
    name: 'Liam O\'Connor',
    email: 'liam@dublintech.ie',
    phone: '+353 1 496 0123',
    joinedDate: '2026-06-01',
    totalOrders: 1,
    totalSpent: 0.00,
    status: 'inactive',
    lastActivity: '2026-08-21T21:50:00Z',
    country: 'Ireland',
    company: 'Dublin Tech House',
    recentOrders: ['ORD-9477']
  },
  {
    id: 'CUST-107',
    name: 'Amira Al-Mansoor',
    email: 'amira@gulfinvest.sa',
    phone: '+966 11 234 5678',
    joinedDate: '2025-10-05',
    totalOrders: 11,
    totalSpent: 28900.00,
    status: 'vip',
    lastActivity: '2026-08-21T15:22:00Z',
    country: 'Saudi Arabia',
    company: 'Gulf Holdings',
    recentOrders: ['ORD-9476']
  },
  {
    id: 'CUST-108',
    name: 'Carlos Mendez',
    email: 'carlos@mendezlogistics.es',
    phone: '+34 91 123 4567',
    joinedDate: '2026-02-14',
    totalOrders: 5,
    totalSpent: 4200.00,
    status: 'active',
    lastActivity: '2026-08-20T18:10:00Z',
    country: 'Spain',
    company: 'Mendez Logistics',
    recentOrders: ['ORD-9475']
  }
];
