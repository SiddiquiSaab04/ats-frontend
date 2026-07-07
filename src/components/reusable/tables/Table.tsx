import DataTableImport from 'react-data-table-component';
import type { TableProps } from '../../../interfaces/table';

// Handle potential ESM/CJS interop issues with DataTable
const DataTable = (DataTableImport as any).default || DataTableImport;

export default function Table(props: TableProps) {
    const { columns, data, actions, className, showTableHead, onRowClicked, progressPending } = props;

    const resolvedNoTableHead =
        typeof showTableHead === "boolean"
            ? !showTableHead
            : false;


    const customStyles = {
        table: {
            style: {
                minWidth: '100%',
                borderBottom: "0 !important",

            },
        },
        header: {
            style: {
                padding: "16px",
                backgroundColor: "#BED0F9",
                borderBottom: "none",

            }
        },
        rows: {
            style: {
                padding: "16px",
                height: "100px",
                overflow: "hidden",
                minHeight: '48px',
                cursor: "pointer",
                borderBottom: "0 !important",
            },
        },
        headRow: {
            style: {
                borderBottom: "none",
                '&:not(:last-of-type)': {
                    borderBottom: 'none',
                },
            },
        },
        headCells: {
            style: {
                padding: "16px",
                backgroundColor: "#BED0F9",
                color: "#070A0F",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                borderBottom: "none",

            }
        },
        cells: {
            style: {
                padding: "16px",
                fontSize: "14px",
                fontWeight: "300",
                lineHeight: "20px",
                color: "#334155",
                borderBottom: "0 !important",
            },
        },
        pagination: {
            style: {
                borderTop: "0 !important",
            },
        },

    };

    return (
        <div className={`w-full ${className}`}>
            <DataTable
                columns={columns as any}
                data={data as any}
                customStyles={customStyles}
                pagination
                actions={actions}
                responsive
                noHeader={true}
                noTableHead={resolvedNoTableHead}
                onRowClicked={onRowClicked}
                progressPending={progressPending}
            />
        </div>
    );
}

