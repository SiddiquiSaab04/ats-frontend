import React from "react";
import Template from "../components/layouts/template/Template";
import StatsCard from "../components/ui/dashboard/Stats";
import Chart from "../components/ui/dashboard/charts/Chart";
import DashboardTable from "../components/ui/dashboard/DashboardTable";
import { useDashboardAnalytics } from "../hooks/dashboard/dashboard";
import type { AnalyticsItem } from "../interfaces/dashboard";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";


const mergeTimeSeriesData = (items: AnalyticsItem[], title: string): AnalyticsItem => {
  const dataMap = new Map<string, any>();
  
  items.forEach(item => {
    item.value.forEach((val: any) => {
      const month = val.month;
      const existing = dataMap.get(month) || { month };
      existing[item.title] = val.total;
      dataMap.set(month, existing);
    });
  });

  return {
    title,
    value: Array.from(dataMap.values())
  };
};

const Dashboard: React.FC = () => {
  const { data: analyticsArray, isLoading } = useDashboardAnalytics();
  const role= useSelector((state:RootState)=>state.auth.user?.role);

  // 1. Separate tables/objects
  const tablesAndObjects = analyticsArray?.filter(item => {
    return (Array.isArray(item.value) && (item.value.length === 0 || !('month' in item.value[0]))) || 
           (typeof item.value === 'object' && item.value !== null && !Array.isArray(item.value));
  }) || [];

  // 2. Process time-series data
  const rawTimeSeries = analyticsArray?.filter(item => Array.isArray(item.value) && item.value.length > 0 && ('month' in item.value[0])) || [];
  
  const processedCharts: { item: AnalyticsItem, type: 'area' | 'bar' | 'line' | 'composed', span: string }[] = [];

  if (rawTimeSeries.length > 2) {
    // Group them to avoid clutter
    const userMetrics = rawTimeSeries.filter(item => /user|growth|recruiter|candidate/i.test(item.title));
    const activityMetrics = rawTimeSeries.filter(item => /job|application/i.test(item.title));
    const otherMetrics = rawTimeSeries.filter(item => !/user|growth|recruiter|candidate|job|application/i.test(item.title));

    if (userMetrics.length > 0) {
      processedCharts.push({
        item: mergeTimeSeriesData(userMetrics, "User & Platform Growth"),
        type: 'area',
        span: 'lg:col-span-2'
      });
    }
    if (activityMetrics.length > 0) {
      processedCharts.push({
        item: mergeTimeSeriesData(activityMetrics, "Platform Activity"),
        type: 'line',
        span: 'lg:col-span-2'
      });
    }
    if (otherMetrics.length > 0) {
      processedCharts.push({
        item: mergeTimeSeriesData(otherMetrics, "Other Metrics"),
        type: 'bar',
        span: 'lg:col-span-2'
      });
    }
  } else {
    // If only 1 or 2, just render them directly
    const chartTypes: ('area' | 'bar' | 'line' | 'composed')[] = ['area', 'bar', 'line', 'composed'];
    rawTimeSeries.forEach((item, index) => {
      processedCharts.push({
        item,
        type: chartTypes[index % chartTypes.length],
        span: 'lg:col-span-2'
      });
    });
  }

  return (
    <Template styleClass="space-y-6">
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <>
          <StatsCard />

          <div className={ role==="CANDIDATE"?"grid grid-cols-1 gap-6 w-full":"grid grid-cols-4 gap-6 w-full" }>
            {processedCharts.map((chart, index) => (
              <div key={`chart-${index}`} className={chart.span}>
                <Chart title={chart.item.title} data={chart.item.value} type={chart.type} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Render Tables */}
            {tablesAndObjects.map((item, index) => {
              if (Array.isArray(item.value)) {
                return <DashboardTable key={`table-${index}`} title={item.title} data={item.value} />;
              } else if (typeof item.value === 'object' && item.value !== null) {
                return <DashboardTable key={`table-${index}`} title={item.title} data={[item.value]} />;
              }
              return null;
            })}
          </div>
        </>
      )}
    </Template>
  );
};

export default Dashboard;
