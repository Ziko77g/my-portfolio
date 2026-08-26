// NEXORA — Tasks, Notifications & Team Demo Data
// Fictional portfolio demo data

import type { Task, Notification, TeamMember } from '../types';

export const demoTasks: Task[] = [
  {
    id: 'TSK-101',
    title: 'Review Q3 Security Audit Findings',
    description: 'Go over penetration testing results with TechCorp Solutions and draft remediation timeline.',
    assignee: 'Alex Morgan',
    assigneeId: 'TEAM-1',
    priority: 'high',
    dueDate: '2026-08-25',
    status: 'in_progress',
    createdAt: '2026-08-20',
    tags: ['Security', 'Audit', 'Q3']
  },
  {
    id: 'TSK-102',
    title: 'Finalize Arabic Translation Strings',
    description: 'Verify RTL layout direction across all data tables and navigation sub-menus.',
    assignee: 'Sarah Connor',
    assigneeId: 'TEAM-2',
    priority: 'medium',
    dueDate: '2026-08-26',
    status: 'todo',
    createdAt: '2026-08-21',
    tags: ['i18n', 'Frontend', 'UI']
  },
  {
    id: 'TSK-103',
    title: 'Onboard Gulf Holdings Team (Amira)',
    description: 'Set up 11 enterprise user accounts and deliver custom API documentation.',
    assignee: 'David Vance',
    assigneeId: 'TEAM-3',
    priority: 'high',
    dueDate: '2026-08-24',
    status: 'in_progress',
    createdAt: '2026-08-22',
    tags: ['Customer Success', 'Onboarding']
  },
  {
    id: 'TSK-104',
    title: 'Upgrade Recharts Dependency to v2.12',
    description: 'Test tooltip performance improvements on high-density monthly chart views.',
    assignee: 'Alex Morgan',
    assigneeId: 'TEAM-1',
    priority: 'low',
    dueDate: '2026-08-30',
    status: 'todo',
    createdAt: '2026-08-18',
    tags: ['Tech Debt', 'Dependencies']
  },
  {
    id: 'TSK-105',
    title: 'Publish Monthly Financial Summary',
    description: 'Export August revenue breakdown report for board distribution.',
    assignee: 'Emily Watson',
    assigneeId: 'TEAM-4',
    priority: 'medium',
    dueDate: '2026-08-22',
    status: 'completed',
    createdAt: '2026-08-15',
    tags: ['Finance', 'Reporting']
  }
];

export const demoNotifications: Notification[] = [
  {
    id: 'NOTIF-1',
    type: 'order',
    title: 'New High-Value Order',
    message: 'Sophia Chen placed an order for Enterprise Suite License ($2,499.00).',
    timestamp: '10 min ago',
    read: false,
    actionUrl: '/orders'
  },
  {
    id: 'NOTIF-2',
    type: 'customer',
    title: 'New VIP Customer',
    message: 'Amira Al-Mansoor hit the $25,000 threshold and was upgraded to VIP.',
    timestamp: '2 hours ago',
    read: false,
    actionUrl: '/customers'
  },
  {
    id: 'NOTIF-3',
    type: 'system',
    title: 'Low Stock Alert',
    message: 'Managed Security Audit (SKU: SRV-SEC-004) has reached 5 remaining units.',
    timestamp: '5 hours ago',
    read: true,
    actionUrl: '/products'
  },
  {
    id: 'NOTIF-4',
    type: 'task',
    title: 'Task Assigned',
    message: 'You were assigned to "Review Q3 Security Audit Findings" by Sarah.',
    timestamp: '1 day ago',
    read: true,
    actionUrl: '/tasks'
  }
];

export const demoTeamMembers: TeamMember[] = [
  {
    id: 'TEAM-1',
    name: 'Alex Morgan',
    role: 'Product Lead / Admin',
    email: 'alex.morgan@nexora.demo',
    status: 'online',
    lastActive: 'Just now',
    department: 'Product Strategy',
    joinedDate: '2024-01-15',
    tasksCompleted: 84
  },
  {
    id: 'TEAM-2',
    name: 'Sarah Connor',
    role: 'Senior UX Architect',
    email: 'sarah.c@nexora.demo',
    status: 'online',
    lastActive: '5 min ago',
    department: 'Design System',
    joinedDate: '2024-03-01',
    tasksCompleted: 62
  },
  {
    id: 'TEAM-3',
    name: 'David Vance',
    role: 'Head of Customer Success',
    email: 'd.vance@nexora.demo',
    status: 'away',
    lastActive: '45 min ago',
    department: 'Operations',
    joinedDate: '2024-06-10',
    tasksCompleted: 118
  },
  {
    id: 'TEAM-4',
    name: 'Emily Watson',
    role: 'Finance & Analytics Specialist',
    email: 'emily.w@nexora.demo',
    status: 'offline',
    lastActive: 'Yesterday',
    department: 'Finance',
    joinedDate: '2024-09-20',
    tasksCompleted: 45
  }
];
