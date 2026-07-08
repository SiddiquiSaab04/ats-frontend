export interface dashboardStats {
    TOTAL_APPLICATIONS: number;
    APPLIED: number;
    SHORTLISTED: number;
    REJECTED: number;
    INTERVIEW: number;
    OFFERED: number;
    ACCEPTED: number;
    DECLINED: number;
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

export interface dashboardAnalytics {
    totalApplications: totalApplications[]
    offeredApplicants:number;
    successRate:number;
    recentActivity:recentActivity[]
}