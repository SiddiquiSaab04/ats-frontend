import React from "react";
import { useDashboardStats } from "../../../hooks/dashboard/dashboard";
import Card from "../../reusable/cards/Card";
import type { dashboardStats } from "../../../interfaces/dashboard";
import { CheckCircle2, NotebookText, Repeat2, UserCheckIcon, UserMinusIcon, UserPenIcon, UserRoundCheck, UserXIcon } from "lucide-react";
const StatsCard: React.FC = () => {
    const { data: totalStats } = useDashboardStats();
    const stats = totalStats as dashboardStats;
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                    {
                        title: "Total Applications",
                        value: stats?.TOTAL_APPLICATIONS,
                        icon: <NotebookText size={20} strokeWidth="1.5" />,
                    },
                    {
                        title: "Applied",
                        value: stats?.APPLIED,
                        icon: <CheckCircle2 size={20} strokeWidth="1.5" />,
                    },
                    {
                        title: "Shortlisted",
                        value: stats?.SHORTLISTED,
                        icon:<UserRoundCheck size={20} strokeWidth="1.5" />
                    },
                    {
                        title: "Interview",
                        value: stats?.INTERVIEW,
                        icon:<Repeat2 size={20} strokeWidth="1.5" />
                    },
                    {
                        title: "Offered",
                        value: stats?.OFFERED,
                        icon:<UserPenIcon size={20} strokeWidth="1.5" />
                    },
                    {
                        title: "Rejected",
                        value: stats?.REJECTED,
                        icon:<UserMinusIcon size={20} strokeWidth="1.5" />
                    },
                    {
                        title: "Accepted",
                        value: stats?.ACCEPTED,
                        icon:<UserCheckIcon size={20} strokeWidth="1.5" />
                    },
                    {
                        title: "Declined",
                        value: stats?.DECLINED,
                        icon:<UserXIcon size={20} strokeWidth="1.5" />
                    },
                ].map((item) => (
                    <Card key={item.title} styleClass="bg-primary text-white p-5 rounded-lg shadow-lg" >
                        <div className="flex justify-between items-end">
                            <h2 className="text-2xl font-bold text-white">{item.value}</h2>
                            {item.icon}
                        </div>
                        <p className="text-sm text-gray-300">{item.title}</p>
                        
                    </Card>
                ))}
            </div>
        </>
    );
};

export default StatsCard;