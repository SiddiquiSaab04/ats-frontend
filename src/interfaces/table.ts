export interface TableProps {
  className?: string;
  columns: any[] | [];
  data: any[];
  actions?: React.ReactNode;
  onRowAction?: (row: any) => void;
  onRowClicked?: (row: any) => void;
  showTableHead?: boolean;
  progressPending?: boolean;
}
