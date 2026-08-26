// NEXORA — Products Demo Data
// Fictional portfolio demo data

import type { Product } from '../types';

export const demoProducts: Product[] = [
  {
    id: 'PROD-101',
    name: 'Enterprise Suite License',
    category: 'Software',
    price: 2499.00,
    stock: 999,
    status: 'active',
    sku: 'SW-ENT-001',
    description: 'Complete annual SaaS platform access including all premium modules, unlimited API calls, and dedicated support.',
    sales: 142,
    createdAt: '2025-01-10'
  },
  {
    id: 'PROD-102',
    name: 'Cloud Migration Consulting',
    category: 'Consulting',
    price: 4500.00,
    stock: 12,
    status: 'active',
    sku: 'CNS-CLM-002',
    description: 'Comprehensive architecture review, migration roadmap planning, and zero-downtime execution strategy.',
    sales: 28,
    createdAt: '2025-03-15'
  },
  {
    id: 'PROD-103',
    name: 'Pro Dashboard Add-on',
    category: 'Software',
    price: 299.00,
    stock: 500,
    status: 'active',
    sku: 'SW-ADD-003',
    description: 'Advanced custom widgets, automated PDF report generation, and real-time WebSocket streams.',
    sales: 310,
    createdAt: '2025-05-20'
  },
  {
    id: 'PROD-104',
    name: 'Managed Security Audit',
    category: 'Services',
    price: 1850.00,
    stock: 5,
    status: 'low_stock',
    sku: 'SRV-SEC-004',
    description: 'Quarterly penetration testing, compliance verification (SOC2/ISO27001), and vulnerability remediation guide.',
    sales: 64,
    createdAt: '2025-06-01'
  },
  {
    id: 'PROD-105',
    name: 'API Gateway Integration',
    category: 'Services',
    price: 890.00,
    stock: 15,
    status: 'active',
    sku: 'SRV-API-005',
    description: 'Turnkey setup for custom GraphQL/REST endpoints, rate-limiting rules, and OAuth2 security layer.',
    sales: 89,
    createdAt: '2025-07-12'
  },
  {
    id: 'PROD-106',
    name: 'Developer Tier Annual',
    category: 'Software',
    price: 599.00,
    stock: 0,
    status: 'out_of_stock',
    sku: 'SW-DEV-006',
    description: 'Full sandbox access, 5 developer accounts, and standard ticketing support.',
    sales: 215,
    createdAt: '2025-02-01'
  },
  {
    id: 'PROD-107',
    name: 'Legacy Sync Tool (V1)',
    category: 'Software',
    price: 150.00,
    stock: 0,
    status: 'archived',
    sku: 'SW-LEG-007',
    description: 'Legacy desktop synchronization utility. Deprecated in favor of cloud webhooks.',
    sales: 420,
    createdAt: '2024-06-01'
  },
  {
    id: 'PROD-108',
    name: '24/7 Dedicated Account Manager',
    category: 'Other',
    price: 1200.00,
    stock: 3,
    status: 'low_stock',
    sku: 'OTH-TAM-008',
    description: 'Assigned Senior Technical Account Manager with 15-minute response SLA guarantees.',
    sales: 19,
    createdAt: '2025-09-01'
  }
];
