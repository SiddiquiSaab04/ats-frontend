import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDashboardAnalytics } from "../../../../hooks/dashboard/dashboard";
import type { totalApplications } from "../../../../interfaces/dashboard";

const MonthlyApplications = () => {
  const { data: monthlyAnalytics } = useDashboardAnalytics();

  const monthlyApplications =
    monthlyAnalytics?.totalApplications.map((item: totalApplications) => ({
      name: item.month,
      total: item.total,
    })) ?? [];

  const CustomFillRectangle = (props: any) => (
    <Rectangle
      {...props}
      fill={props.payload.total === 0 ? "#d1d5db" : "#3b82f6"}
    />
  );

  return (
    <BarChart
      layout="vertical"
      width={700}
      height={350}
      data={monthlyApplications}
      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" width={80} />
      <Tooltip />
      <Bar
        dataKey="total"
        shape={<CustomFillRectangle />}
        radius={[0, 8, 8, 0]}
      />
    </BarChart>
  );
};

export default MonthlyApplications;