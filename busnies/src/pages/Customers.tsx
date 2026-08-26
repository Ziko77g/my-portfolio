import React, { useState, useMemo } from 'react';
import { Search, Mail, Phone, MapPin, Building, Calendar, ShoppingBag } from 'lucide-react';
import { Input, Select } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Avatar } from '../components/ui/Avatar';
import { Drawer } from '../components/ui/Modal';
import { Card, CardContent } from '../components/ui/Card';
import { demoCustomers } from '../data/customers';
import { useLanguage } from '../context/LanguageContext';
import type { Customer, CustomerStatus } from '../types';

export const Customers: React.FC = () => {
  const { t } = useLanguage();
  const [customers] = useState<Customer[]>(demoCustomers);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const getStatusBadge = (status: CustomerStatus) => {
    switch (status) {
      case 'vip': return <Badge variant="purple" dot>{t.customers.vip}</Badge>;
      case 'active': return <Badge variant="success" dot>{t.customers.active}</Badge>;
      case 'inactive': return <Badge variant="neutral" dot>{t.customers.inactive}</Badge>;
    }
  };

  const filteredCustomers = useMemo(() => {
    return customers.filter(cust => {
      const matchesSearch =
        cust.name.toLowerCase().includes(search.toLowerCase()) ||
        cust.email.toLowerCase().includes(search.toLowerCase()) ||
        (cust.company && cust.company.toLowerCase().includes(search.toLowerCase()));

      const matchesStatus = statusFilter === 'all' || cust.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [customers, search, statusFilter]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <Card>
        <CardContent className="p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="w-full sm:w-80">
            <Input
              placeholder={`${t.common.search} ${t.customers.title.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>

          <div className="w-full sm:w-auto">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                { value: 'all', label: `${t.common.all} Statuses` },
                { value: 'vip', label: t.customers.vip },
                { value: 'active', label: t.customers.active },
                { value: 'inactive', label: t.customers.inactive },
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCustomers.map(customer => (
          <Card
            key={customer.id}
            hoverable
            onClick={() => setSelectedCustomer(customer)}
            className="cursor-pointer"
          >
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={customer.name} size="lg" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {customer.name}
                    </h4>
                    <p className="text-2xs text-slate-500 truncate max-w-[160px]">
                      {customer.email}
                    </p>
                  </div>
                </div>
                {getStatusBadge(customer.status)}
              </div>

              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs">
                <div>
                  <span className="text-2xs text-slate-400 block">{t.customers.totalOrders}</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{customer.totalOrders}</span>
                </div>
                <div>
                  <span className="text-2xs text-slate-400 block">{t.customers.totalSpent}</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">${customer.totalSpent.toLocaleString()}</span>
                </div>
              </div>

              {customer.company && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Building className="w-3.5 h-3.5" />
                  <span className="truncate">{customer.company}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customer Profile Drawer */}
      <Drawer
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title={t.customers.customerProfile}
      >
        {selectedCustomer && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <Avatar name={selectedCustomer.name} size="xl" />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {selectedCustomer.name}
                </h3>
                <p className="text-xs text-slate-500">{selectedCustomer.company || 'Individual Account'}</p>
                <div className="mt-2">{getStatusBadge(selectedCustomer.status)}</div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{selectedCustomer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{selectedCustomer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{selectedCustomer.country}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{t.customers.joinedDate}: {selectedCustomer.joinedDate}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">{t.customers.totalOrders}:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{selectedCustomer.totalOrders}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">{t.customers.totalSpent}:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">${selectedCustomer.totalSpent.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                {t.customers.recentOrders}
              </h4>
              <div className="space-y-2">
                {selectedCustomer.recentOrders.map(orderId => (
                  <div key={orderId} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold flex justify-between">
                    <span>{orderId}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-normal">View details</span>
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
