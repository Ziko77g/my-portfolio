import React from 'react';
import { Mail, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { demoTeamMembers } from '../data/tasks';
import { useLanguage } from '../context/LanguageContext';
import type { TeamMemberStatus } from '../types';

export const Team: React.FC = () => {
  const { t } = useLanguage();

  const getStatusBadge = (status: TeamMemberStatus) => {
    switch (status) {
      case 'online': return <Badge variant="success" dot>{t.team.online}</Badge>;
      case 'away': return <Badge variant="warning" dot>{t.team.away}</Badge>;
      case 'offline': return <Badge variant="neutral" dot>{t.team.offline}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.team.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Fictional demo team workspace
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {demoTeamMembers.map(member => (
          <Card key={member.id} hoverable>
            <CardContent className="p-5 space-y-4 text-center">
              <div className="flex justify-center pt-2">
                <Avatar name={member.name} status={member.status} size="xl" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{member.role}</p>
                <div className="mt-2 flex justify-center">{getStatusBadge(member.status)}</div>
              </div>

              <div className="pt-2 space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 text-left rtl:text-right">
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span>{member.department}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.team.joinedDate}: {member.joinedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                  <span>{member.tasksCompleted} {t.team.tasksCompleted}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
