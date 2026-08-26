import React, { useState, useMemo } from 'react';
import { Search, Plus } from 'lucide-react';
import { Table, type Column } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { Card, CardContent } from '../components/ui/Card';
import { demoProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import type { Product, ProductStatus } from '../types';

export const Products: React.FC = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>(demoProducts);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Product Form State
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('Software');
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('');
  const [newSku, setNewSku] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const getStatusBadge = (status: ProductStatus) => {
    switch (status) {
      case 'active': return <Badge variant="success" dot>{t.products.active}</Badge>;
      case 'low_stock': return <Badge variant="warning" dot>{t.products.lowStock}</Badge>;
      case 'out_of_stock': return <Badge variant="error" dot>{t.products.outOfStock}</Badge>;
      case 'archived': return <Badge variant="neutral" dot>{t.products.archived}</Badge>;
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(prod => {
      const matchesSearch =
        prod.name.toLowerCase().includes(search.toLowerCase()) ||
        prod.sku.toLowerCase().includes(search.toLowerCase()) ||
        prod.category.toLowerCase().includes(search.toLowerCase());

      const matchesCat = categoryFilter === 'all' || prod.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || prod.status === statusFilter;

      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [products, search, categoryFilter, statusFilter]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPrice || !newStock || !newSku) return;

    const newProd: Product = {
      id: `PROD-${Date.now().toString().slice(-4)}`,
      name: newName,
      category: newCategory,
      price: parseFloat(newPrice) || 0,
      stock: parseInt(newStock, 10) || 0,
      status: parseInt(newStock, 10) === 0 ? 'out_of_stock' : parseInt(newStock, 10) < 10 ? 'low_stock' : 'active',
      sku: newSku,
      description: newDescription || 'Local demo product.',
      sales: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setProducts([newProd, ...products]);
    setIsAddModalOpen(false);

    // Reset Form
    setNewName('');
    setNewPrice('');
    setNewStock('');
    setNewSku('');
    setNewDescription('');
  };

  const columns: Column<Product>[] = [
    { key: 'sku', header: t.products.sku, sortable: true },
    { key: 'name', header: t.common.name, sortable: true },
    { key: 'category', header: t.products.category, sortable: true },
    {
      key: 'price',
      header: t.products.price,
      sortable: true,
      align: 'right',
      render: (item) => `$${item.price.toFixed(2)}`,
    },
    {
      key: 'stock',
      header: t.products.stock,
      sortable: true,
      align: 'center',
      render: (item) => item.stock.toLocaleString(),
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
              placeholder={`${t.common.search} ${t.products.title.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              options={[
                { value: 'all', label: `${t.common.all} Categories` },
                { value: 'Software', label: 'Software' },
                { value: 'Consulting', label: 'Consulting' },
                { value: 'Services', label: 'Services' },
                { value: 'Other', label: 'Other' },
              ]}
            />

            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                { value: 'all', label: `${t.common.all} Statuses` },
                { value: 'active', label: t.products.active },
                { value: 'low_stock', label: t.products.lowStock },
                { value: 'out_of_stock', label: t.products.outOfStock },
                { value: 'archived', label: t.products.archived },
              ]}
            />

            <Button
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setIsAddModalOpen(true)}
              className="w-full sm:w-auto whitespace-nowrap"
            >
              {t.products.addProduct}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Table
        data={filteredProducts}
        columns={columns}
        keyExtractor={(item) => item.id}
        pageSize={8}
        emptyTitle="No products found"
        emptyDescription="Try adjusting your filters or add a new product."
      />

      {/* Add Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={t.products.addProduct}
      >
        <form onSubmit={handleAddProduct} className="space-y-4">
          <Input
            label="Product Name"
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. Pro Analytics Suite"
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              options={[
                { value: 'Software', label: 'Software' },
                { value: 'Consulting', label: 'Consulting' },
                { value: 'Services', label: 'Services' },
                { value: 'Other', label: 'Other' },
              ]}
            />
            <Input
              label="SKU"
              required
              value={newSku}
              onChange={(e) => setNewSku(e.target.value)}
              placeholder="SW-PRO-009"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Price ($)"
              type="number"
              step="0.01"
              required
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              placeholder="299.00"
            />
            <Input
              label="Stock Quantity"
              type="number"
              required
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              placeholder="Short product overview..."
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              {t.common.cancel}
            </Button>
            <Button type="submit">
              {t.common.save}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
