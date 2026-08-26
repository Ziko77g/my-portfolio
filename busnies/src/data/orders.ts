// NEXORA — Orders Demo Data
// Fictional portfolio demo data

import type { Order } from '../types';

export const demoOrders: Order[] = [
  {
    id: 'ORD-9482',
    customer: 'Sophia Chen',
    customerId: 'CUST-101',
    product: 'Enterprise Suite License',
    category: 'Software',
    date: '2026-08-23T14:32:00Z',
    amount: 2499.00,
    status: 'completed',
    shippingAddress: '742 Evergreen Terrace, Springfield, OR',
    paymentMethod: 'Credit Card (**** 4242)',
    items: [
      { id: 'ITM-1', name: 'Enterprise Suite License (Annual)', quantity: 1, unitPrice: 2499.00 }
    ],
    timeline: [
      { date: '2026-08-23 14:32', event: 'Order Placed', description: 'Order was placed by Sophia Chen' },
      { date: '2026-08-23 14:33', event: 'Payment Processed', description: 'Payment of $2,499.00 verified via Stripe' },
      { date: '2026-08-23 14:35', event: 'License Provisioned', description: 'Digital product key generated and emailed' },
      { date: '2026-08-23 14:35', event: 'Completed', description: 'Order fulfilled successfully' }
    ]
  },
  {
    id: 'ORD-9481',
    customer: 'Marcus Vance',
    customerId: 'CUST-102',
    product: 'Cloud Migration Consulting',
    category: 'Consulting',
    date: '2026-08-23T11:15:00Z',
    amount: 4500.00,
    status: 'processing',
    shippingAddress: '100 Market St, Suite 400, San Francisco, CA',
    paymentMethod: 'Bank Wire Transfer',
    items: [
      { id: 'ITM-2', name: 'Cloud Migration Discovery & Audit', quantity: 1, unitPrice: 4500.00 }
    ],
    timeline: [
      { date: '2026-08-23 11:15', event: 'Order Placed', description: 'Order created via Sales Representative' },
      { date: '2026-08-23 11:45', event: 'Invoice Sent', description: 'Wire instructions delivered to client' },
      { date: '2026-08-23 13:00', event: 'Processing', description: 'Consulting team assigned to account' }
    ]
  },
  {
    id: 'ORD-9480',
    customer: 'Elena Rostova',
    customerId: 'CUST-103',
    product: 'Pro Dashboard Add-on',
    category: 'Software',
    date: '2026-08-22T19:40:00Z',
    amount: 299.00,
    status: 'completed',
    shippingAddress: '458 Broadway, Apt 3B, New York, NY',
    paymentMethod: 'PayPal',
    items: [
      { id: 'ITM-3', name: 'Pro Dashboard Extension Pack', quantity: 1, unitPrice: 299.00 }
    ],
    timeline: [
      { date: '2026-08-22 19:40', event: 'Order Placed', description: 'Self-serve checkout completed' },
      { date: '2026-08-22 19:41', event: 'Completed', description: 'Instant addon activation completed' }
    ]
  },
  {
    id: 'ORD-9479',
    customer: 'David Kim',
    customerId: 'CUST-104',
    product: 'Managed Security Audit',
    category: 'Services',
    date: '2026-08-22T16:05:00Z',
    amount: 1850.00,
    status: 'pending',
    shippingAddress: '1200 Westlake Ave N, Seattle, WA',
    paymentMethod: 'Credit Card (**** 8812)',
    items: [
      { id: 'ITM-4', name: 'Quarterly Vulnerability Assessment', quantity: 1, unitPrice: 1850.00 }
    ],
    timeline: [
      { date: '2026-08-22 16:05', event: 'Order Placed', description: 'Awaiting payment confirmation' }
    ]
  },
  {
    id: 'ORD-9478',
    customer: 'Sarah Jenkins',
    customerId: 'CUST-105',
    product: 'API Gateway Integration',
    category: 'Services',
    date: '2026-08-22T10:12:00Z',
    amount: 890.00,
    status: 'completed',
    shippingAddress: '55 Austin Tech Blvd, Austin, TX',
    paymentMethod: 'Credit Card (**** 1092)',
    items: [
      { id: 'ITM-5', name: 'Custom Webhook Setup & Testing', quantity: 2, unitPrice: 445.00 }
    ],
    timeline: [
      { date: '2026-08-22 10:12', event: 'Order Placed', description: 'Order created online' },
      { date: '2026-08-22 11:30', event: 'Completed', description: 'Service setup completed' }
    ]
  },
  {
    id: 'ORD-9477',
    customer: 'Liam O\'Connor',
    customerId: 'CUST-106',
    product: 'Developer Tier Annual',
    category: 'Software',
    date: '2026-08-21T21:50:00Z',
    amount: 599.00,
    status: 'cancelled',
    shippingAddress: '88 Tech Hub Way, Boston, MA',
    paymentMethod: 'Credit Card (**** 9901)',
    items: [
      { id: 'ITM-6', name: 'Developer Plan (1 Year)', quantity: 1, unitPrice: 599.00 }
    ],
    timeline: [
      { date: '2026-08-21 21:50', event: 'Order Placed', description: 'Order submitted' },
      { date: '2026-08-21 22:05', event: 'Cancelled', description: 'Cancelled by user prior to activation' }
    ]
  },
  {
    id: 'ORD-9476',
    customer: 'Amira Al-Mansoor',
    customerId: 'CUST-107',
    product: 'Custom Infrastructure Setup',
    category: 'Consulting',
    date: '2026-08-21T15:22:00Z',
    amount: 6200.00,
    status: 'completed',
    shippingAddress: 'King Fahd Rd, Bldg 4, Riyadh, KSA',
    paymentMethod: 'Bank Wire Transfer',
    items: [
      { id: 'ITM-7', name: 'High-Availability Architecture Deployment', quantity: 1, unitPrice: 6200.00 }
    ],
    timeline: [
      { date: '2026-08-21 15:22', event: 'Order Placed', description: 'Enterprise agreement executed' },
      { date: '2026-08-21 17:00', event: 'Completed', description: 'Deployment complete & handed over' }
    ]
  },
  {
    id: 'ORD-9475',
    customer: 'Carlos Mendez',
    customerId: 'CUST-108',
    product: 'Team Seat Expansion (x10)',
    category: 'Software',
    date: '2026-08-20T18:10:00Z',
    amount: 1200.00,
    status: 'completed',
    shippingAddress: '22 Ocean Drive, Miami, FL',
    paymentMethod: 'Credit Card (**** 3341)',
    items: [
      { id: 'ITM-8', name: 'Additional User Licenses', quantity: 10, unitPrice: 120.00 }
    ],
    timeline: [
      { date: '2026-08-20 18:10', event: 'Order Placed', description: 'Seat allocation upgrade' },
      { date: '2026-08-20 18:11', event: 'Completed', description: 'Seats added to tenant' }
    ]
  },
  {
    id: 'ORD-9474',
    customer: 'Nadia Patel',
    customerId: 'CUST-109',
    product: 'Priority Support SLA',
    category: 'Other',
    date: '2026-08-20T12:00:00Z',
    amount: 450.00,
    status: 'processing',
    shippingAddress: '15 Financial District, Chicago, IL',
    paymentMethod: 'Credit Card (**** 7711)',
    items: [
      { id: 'ITM-9', name: '24/7 Priority Support Pass', quantity: 1, unitPrice: 450.00 }
    ],
    timeline: [
      { date: '2026-08-20 12:00', event: 'Order Placed', description: 'Support tier upgrade request' }
    ]
  },
  {
    id: 'ORD-9473',
    customer: 'Tariq Hassan',
    customerId: 'CUST-110',
    product: 'Data Pipeline Connector',
    category: 'Software',
    date: '2026-08-19T09:45:00Z',
    amount: 750.00,
    status: 'completed',
    shippingAddress: 'Downtown Blvd, Tower A, Dubai, UAE',
    paymentMethod: 'Credit Card (**** 5510)',
    items: [
      { id: 'ITM-10', name: 'Snowflake & BigQuery Connectors', quantity: 1, unitPrice: 750.00 }
    ],
    timeline: [
      { date: '2026-08-19 09:45', event: 'Order Placed', description: 'Self-serve purchase' },
      { date: '2026-08-19 09:46', event: 'Completed', description: 'Module unlocked' }
    ]
  }
];
