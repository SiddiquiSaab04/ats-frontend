import type { Job } from "./job";

export type ApplicationJob = Omit<Job,
  | "requirements"
  | "benefits"
  | "companyId"
  | "createdAt"
  | "updatedAt"
  | "createdBy"
  | "skills"
  | "company"
> & {
  company: {
    name: string;
  };
};

export type ApplicationStatus =
  | "PENDING"
  | "APPLIED"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "OFFERED"
  | "REJECTED"
  | "DECLINED"
  | "ACCEPTED";

export interface Application {
  id: number;
  jobId: number;
  candidateId: number;
  status: ApplicationStatus;
  resumeUrl: string;
  coverLetter: string;
  userName: string;
  email: string;
  phone: string;
  location: string;
  appliedAt: string;
  updatedAt: string;
  job: ApplicationJob;
}

export interface ApplicationPagination{
  applications:Application[];
  pagination: {
    page: number;
    limit: number;
    totalRecords: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  };
}