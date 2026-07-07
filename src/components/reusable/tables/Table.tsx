import DataTableImport from 'react-data-table-component';
import type { TableProps } from '../../../interfaces/table';

// Handle potential ESM/CJS interop issues with DataTable
const DataTable = (DataTableImport as any).default || DataTableImport;

export default function Table(props: TableProps) {
    const { columns, data, actions, className, showTableHead, onRowClicked, progressPending , loading } = props;

    const resolvedNoTableHead =
        typeof showTableHead === "boolean"
            ? !showTableHead
            : false;


    const customStyles = {
        table: {
            style: {
                minWidth: '100%',
                borderBottom: "0 !important",
                backdropFilter: "blur(10px)",
                backgroundColor: "transparent",

            },
        },
        header: {
            style: {
                padding: "16px",
                backgroundColor: "transparent",
                borderBottom: "none",
                backdropFilter: "blur(10px)",
                color: "#18191D",

            }
        },
        rows: {
            style: {
                padding: "16px",
                height: "50px",
                overflow: "hidden",
                minHeight: '48px',
                cursor: "pointer",
                backgroundColor:"transparent",
                borderBottom: "0 !important",
                color: "#18191D",

            },
        },
        headRow: {
            style: {
                borderBottom: "none",
                '&:not(:last-of-type)': {
                    borderBottom: 'none',
                },
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
                color: "#18191D",

            },
        },
        headCells: {
            style: {
                padding: "16px",
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
                color: "#18191D",
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
                fontWeight: "400",
                lineHeight: "20px",
                color: "#18191D",
                borderBottom: "1px solid #cccbcbff !important",
            },
        },
        pagination: {
            style: {
                borderTop: "0 !important",
                backdropFilter: "blur(10px)",
                backgroundColor: "transparent",
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
                loading={loading}
            />
        </div>
    );
}

