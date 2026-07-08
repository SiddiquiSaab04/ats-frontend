import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDashboardAnalytics } from "../../../../hooks/dashboard/dashboard";
import type { totalApplications } from "../../../../interfaces/dashboard";

const MonthlyApplications = () => {
  const { data: monthlyAnalytics, isLoading } = useDashboardAnalytics();

  const data =
    monthlyAnalytics?.totalApplications.map((item: totalApplications) => ({
      name: item.month,
      total: item.total,
    })) ?? [];

  return (
    <div className="flex flex-col p-6 bg-white/30 rounded-xl shadow-md border border-indigo-300 h-[380px]">
      <h3 className="text-lg font-semibold text-indigo-700 dark:text-lavender mb-4">
        Monthly Applications
      </h3>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="monthlyBarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#A88AED" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: "#6b7280", fontSize: 12 }} 
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: "#6b7280", fontSize: 12 }} 
                allowDecimals={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #A88AED",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />

              {/* Bars */}
              <Bar
                dataKey="total"
                name="Applications"
                fill="url(#monthlyBarGrad)"
                stroke="A88AED"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />

              {/* Line */}
              <Line
                type="monotone"
                dataKey="total"
                name="Trend"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: "#A88AED" }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MonthlyApplications;