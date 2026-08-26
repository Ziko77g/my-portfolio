import { useState, useMemo } from 'react';
import { demoOrders } from '../data/orders';
import { demoCustomers } from '../data/customers';
import { demoProducts } from '../data/products';
import { demoTasks } from '../data/tasks';
import type { SearchResult } from '../types';

export function useSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const searchResults: SearchResult[] = [];

    // Search Orders
    demoOrders.forEach(order => {
      if (
        order.id.toLowerCase().includes(trimmed) ||
        order.customer.toLowerCase().includes(trimmed) ||
        order.product.toLowerCase().includes(trimmed)
      ) {
        searchResults.push({
          id: order.id,
          type: 'order',
          title: `${order.id} — ${order.customer}`,
          subtitle: `${order.product} ($${order.amount.toFixed(2)})`,
          url: `/orders?id=${order.id}`,
        });
      }
    });

    // Search Customers
    demoCustomers.forEach(customer => {
      if (
        customer.name.toLowerCase().includes(trimmed) ||
        customer.email.toLowerCase().includes(trimmed) ||
        (customer.company && customer.company.toLowerCase().includes(trimmed))
      ) {
        searchResults.push({
          id: customer.id,
          type: 'customer',
          title: customer.name,
          subtitle: customer.company ? `${customer.company} (${customer.email})` : customer.email,
          url: `/customers?id=${customer.id}`,
        });
      }
    });

    // Search Products
    demoProducts.forEach(product => {
      if (
        product.name.toLowerCase().includes(trimmed) ||
        product.sku.toLowerCase().includes(trimmed) ||
        product.category.toLowerCase().includes(trimmed)
      ) {
        searchResults.push({
          id: product.id,
          type: 'product',
          title: product.name,
          subtitle: `SKU: ${product.sku} — $${product.price.toFixed(2)} (${product.category})`,
          url: `/products?id=${product.id}`,
        });
      }
    });

    // Search Tasks
    demoTasks.forEach(task => {
      if (
        task.title.toLowerCase().includes(trimmed) ||
        task.description.toLowerCase().includes(trimmed) ||
        task.assignee.toLowerCase().includes(trimmed)
      ) {
        searchResults.push({
          id: task.id,
          type: 'task',
          title: task.title,
          subtitle: `Assigned to ${task.assignee} — Priority: ${task.priority}`,
          url: `/tasks?id=${task.id}`,
        });
      }
    });

    return searchResults;
  }, [query]);

  return { query, setQuery, results };
}
