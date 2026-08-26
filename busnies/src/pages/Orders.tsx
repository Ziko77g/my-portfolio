import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Table, type Column } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Input, Select } from '../components/ui/Input';
import { Drawer } from '../components/ui/Modal';
import { Card, CardContent } from '../components/ui/Card';
import { demoOrders } from '../data/orders';
import { useLanguage } from '../context/LanguageContext';
import type { Order, OrderStatus } from '../types';

export const Orders: React.FC = () => {
  const { t } = useLanguage();
  const [orders] = useState<Order[]>(demoOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'completed': return <Badge variant="success" dot>{t.orders.completed}</Badge>;
      case 'processing': return <Badge variant="info" dot>{t.orders.processing}</Badge>;
      case 'pending': return <Badge variant="warning" dot>{t.orders.pending}</Badge>;
      case 'cancelled': return <Badge variant="error" dot>{t.orders.cancelled}</Badge>;
    }
  };

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const columns: Column<Order>[] = [
    { key: 'id', header: t.orders.orderId, sortable: true },
    { key: 'customer', header: t.orders.customer, sortable: true },
    { key: 'product', header: t.orders.product, sortable: true },
    { key: 'category', header: 'Category', sortable: true },
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

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <Card>
        <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="w-full sm:w-80">
            <Input
              placeholder={`${t.common.search} ${t.orders.title.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                { value: 'all', label: `${t.common.all} Statuses` },
                { value: 'completed', label: t.orders.completed },
                { value: 'processing', label: t.orders.processing },
                { value: 'pending', label: t.orders.pending },
                { value: 'cancelled', label: t.orders.cancelled },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Table
        data={filteredOrders}
        columns={columns}
        keyExtractor={(item) => item.id}
        onRowClick={(item) => setSelectedOrder(item)}
        pageSize={8}
        emptyTitle="No orders found"
        emptyDescription="Try adjusting your search query or status filters."
      />

      {/* Detail Drawer */}
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
