import React, { useState } from 'react';
import { Plus, CheckSquare, Calendar, User, Trash2, Edit } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Input, Select } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { demoTasks } from '../data/tasks';
import { useLanguage } from '../context/LanguageContext';
import type { Task, TaskStatus, TaskPriority } from '../types';

export const Tasks: React.FC = () => {
  const { t } = useLanguage();
  const [tasks, setTasks] = useLocalStorage<Task[]>('nexora_tasks', demoTasks);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('Alex Morgan');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [dueDate, setDueDate] = useState('');

  const getPriorityBadge = (p: TaskPriority) => {
    switch (p) {
      case 'high': return <Badge variant="error" size="sm">{t.tasks.high}</Badge>;
      case 'medium': return <Badge variant="warning" size="sm">{t.tasks.medium}</Badge>;
      case 'low': return <Badge variant="neutral" size="sm">{t.tasks.low}</Badge>;
    }
  };

  const getStatusBadge = (s: TaskStatus) => {
    switch (s) {
      case 'todo': return <Badge variant="neutral" dot>{t.tasks.todo}</Badge>;
      case 'in_progress': return <Badge variant="info" dot>{t.tasks.inProgress}</Badge>;
      case 'completed': return <Badge variant="success" dot>{t.tasks.completed}</Badge>;
    }
  };

  const openCreateModal = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
    setAssignee('Alex Morgan');
    setPriority('medium');
    setStatus('todo');
    setDueDate(new Date().toISOString().split('T')[0]);
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setAssignee(task.assignee);
    setPriority(task.priority);
    setStatus(task.status);
    setDueDate(task.dueDate);
    setIsModalOpen(true);
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    if (editingTask) {
      setTasks(prev =>
        prev.map(t =>
          t.id === editingTask.id
            ? { ...t, title, description, assignee, priority, status, dueDate }
            : t
        )
      );
    } else {
      const newTask: Task = {
        id: `TSK-${Date.now().toString().slice(-4)}`,
        title,
        description,
        assignee,
        assigneeId: 'TEAM-1',
        priority,
        dueDate: dueDate || new Date().toISOString().split('T')[0],
        status,
        createdAt: new Date().toISOString().split('T')[0],
        tags: ['Task'],
      };
      setTasks([newTask, ...tasks]);
    }

    setIsModalOpen(false);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const filteredTasks = tasks.filter(t => {
    if (activeTab === 'all') return true;
    return t.status === activeTab;
  });

  const tabItems = [
    { id: 'all', label: t.common.all, count: tasks.length },
    { id: 'todo', label: t.tasks.todo, count: tasks.filter(t => t.status === 'todo').length },
    { id: 'in_progress', label: t.tasks.inProgress, count: tasks.filter(t => t.status === 'in_progress').length },
    { id: 'completed', label: t.tasks.completed, count: tasks.filter(t => t.status === 'completed').length },
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Tabs tabs={tabItems} activeTab={activeTab} onChange={setActiveTab} />
        <Button leftIcon={<Plus className="w-4 h-4" />} onClick={openCreateModal} className="whitespace-nowrap">
          {t.tasks.addTask}
        </Button>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTasks.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <CheckSquare className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="font-semibold text-slate-900 dark:text-slate-100">{t.tasks.noTasks}</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <Card key={task.id} hoverable className="flex flex-col justify-between">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  {getStatusBadge(task.status)}
                  {getPriorityBadge(task.priority)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {task.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{task.description}</p>
                </div>

                <div className="flex items-center justify-between text-2xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                    <User className="w-3.5 h-3.5" />
                    {task.assignee}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {task.dueDate}
                  </span>
                </div>
              </CardContent>

              {/* Task Footer Actions */}
              <div className="px-5 py-3 bg-slate-50/50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <Select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value as TaskStatus)}
                  options={[
                    { value: 'todo', label: t.tasks.todo },
                    { value: 'in_progress', label: t.tasks.inProgress },
                    { value: 'completed', label: t.tasks.completed },
                  ]}
                  className="py-1 text-2xs w-32"
                />

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => openEditModal(task)}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="p-1 text-slate-400 hover:text-red-600"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Add / Edit Task Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTask ? t.tasks.editTask : t.tasks.addTask}
      >
        <form onSubmit={handleSaveTask} className="space-y-4">
          <Input
            label="Task Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Audit Q3 API Performance"
          />

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              placeholder="Task instructions or requirements..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label={t.tasks.assignee}
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
            <Input
              label={t.tasks.dueDate}
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select
              label={t.tasks.priority}
              value={priority}
              onChange={(e) => setPriority(e.target.value as TaskPriority)}
              options={[
                { value: 'low', label: t.tasks.low },
                { value: 'medium', label: t.tasks.medium },
                { value: 'high', label: t.tasks.high },
              ]}
            />
            <Select
              label={t.common.status}
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
              options={[
                { value: 'todo', label: t.tasks.todo },
                { value: 'in_progress', label: t.tasks.inProgress },
                { value: 'completed', label: t.tasks.completed },
              ]}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
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
