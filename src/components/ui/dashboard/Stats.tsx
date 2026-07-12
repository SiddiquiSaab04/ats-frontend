import React from "react";
import { useDashboardStats } from "../../../hooks/dashboard/dashboard";
import Card from "../../reusable/cards/Card";
import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import type { dashboardStats } from "../../../interfaces/dashboard";

const StatsCard: React.FC = () => {
    const { data: statsData } = useDashboardStats();
    
    // Use the explicit stats API endpoint which returns an array of stat objects
    const statNumbers = (statsData as any as dashboardStats[]) || [];

    const statStyles = [
      { bg: "bg-indigo-50", iconBg: "bg-indigo-200", icon: <TrendingUp size={20} className="text-indigo-600" />, trendColor: "text-indigo-500" },
      { bg: "bg-purple-50", iconBg: "bg-purple-200", icon: <CheckCircle2 size={20} className="text-purple-600" />, trendColor: "text-purple-500" },
      { bg: "bg-emerald-50", iconBg: "bg-emerald-200", icon: <Target size={20} className="text-emerald-600" />, trendColor: "text-emerald-500" },
      { bg: "bg-fuchsia-50", iconBg: "bg-fuchsia-200", icon: <Users size={20} className="text-fuchsia-600" />, trendColor: "text-fuchsia-500" },
    ];

    if (!Array.isArray(statNumbers) || statNumbers.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {statNumbers.map((item, index) => {
                const style = statStyles[index % statStyles.length];
                return (
                    <Card key={item.title} styleClass={`${style.bg} p-5 rounded-2xl shadow-[0_2px_20px_-5px_rgba(99,102,241,0.1)] border border-indigo-50 transition-transform hover:-translate-y-1`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 rounded-full ${style.iconBg}`}>
                                {style.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{item.value}{item.title?.toLowerCase().includes('rate') ? '%' : ''}</h2>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                            <p className="text-sm font-medium text-gray-600">{item.title}</p>
                            <p className={`text-xs font-semibold ${style.trendColor}`}>+12.5% ↗</p>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};

export default StatsCard;
