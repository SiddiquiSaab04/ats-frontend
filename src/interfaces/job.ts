export interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
}

export type JobType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "INTERNSHIP"
  | "FREELANCE";

export type JobStatus =
  | "OPEN"
  | "CLOSED"
  | "EXPIRED";

export interface Job {
  id: number;
  title: string;
  description: string;
  requirements: string;
  benefits: string;
  location: string;
  salary: string;
  companyId: number;
  jobType: JobType;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  validTill: string;
  status: JobStatus;
  company: Company;
  skills: string[];
}