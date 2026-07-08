import React from 'react'
import Template from '../components/layouts/template/Template'
import StatsCard from '../components/ui/dashboard/Stats'
import MonthlyApplications from '../components/ui/dashboard/charts/MonthlyApplications'
const Dashboard: React.FC = () => {
  return (
    <Template styleClass='space-y-3'>
      <StatsCard />
      <MonthlyApplications />
    </Template>
  )
}

export default Dashboard