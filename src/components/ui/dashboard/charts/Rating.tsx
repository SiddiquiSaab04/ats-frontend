import {
  Pie,
  PieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDashboardAnalytics } from "../../../../hooks/dashboard/dashboard";

export default function Rating({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const { data: analytics, isLoading } = useDashboardAnalytics();

  const offered = analytics?.offeredApplicants ?? 0;
  const successRate = analytics?.successRate ?? 0;

  // Fallback data when data is not yet loaded or is zero
  const hasData = offered > 0 || successRate > 0;
  const data = hasData
    ? [
        { name: "Offered Applicants", value: offered },
        { name: "Success Rate (%)", value: successRate },
      ]
    : [
        { name: "Offered Applicants", value: 1 },
        { name: "Success Rate (%)", value: 1 },
      ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/30 rounded-xl shadow-md border border-indigo-300  h-[380px]">
      <h3 className="text-lg font-semibold text-indigo-700 dark:text-lavender mb-2">
        Applications Performance
      </h3>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="w-full h-64 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <radialGradient id="colorOfferedGrad" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={1} />
                </radialGradient>
                <radialGradient id="colorSuccessGrad" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={1} />
                </radialGradient>
                <radialGradient id="colorEmptyGrad" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity={1} />
                </radialGradient>
              </defs>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="75%"
                paddingAngle={hasData ? 4 : 0}
                isAnimationActive={isAnimationActive}
              >
                {hasData ? (
                  <>
                    <Cell fill="url(#colorOfferedGrad)" stroke="#4f46e5" strokeWidth={1} />
                    <Cell fill="url(#colorSuccessGrad)" stroke="#059669" strokeWidth={1} />
                  </>
                ) : (
                  <>
                    <Cell fill="url(#colorEmptyGrad)" stroke="#a1a1aa" strokeWidth={1} />
                    <Cell fill="url(#colorEmptyGrad)" stroke="#a1a1aa" strokeWidth={1} />
                  </>
                )}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Centered label inside the donut chart */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">
              {hasData ? `${successRate}%` : "0%"}
            </span>
            <span className="text-xs text-indigo-500 dark:text-indigo-300 font-medium uppercase tracking-wider mt-0.5">
              Success Rate
            </span>
          </div>
        </div>
      )}
    </div>
  );
}