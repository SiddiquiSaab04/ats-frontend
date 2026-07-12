export interface dashboardStats {
    title:string;
    value:number | string;
}
export type totalApplications = {
    month:string;
    total:number;
}

export type recentActivity = {
    jobTitle : string;
    companyName: string;
    status:string;
    appliedAt:string;
}

export interface AnalyticsItem {
    title: string;
    value: any;
}

export type dashboardAnalytics = AnalyticsItem[];