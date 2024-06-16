import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { LuUsers2 } from "react-icons/lu";

const defaultData = [
  {
    icon: "1",
    user: "mohammad sadati",
    country: "🇮🇷",
    usage: 90,
    payment: "paypal",
  },
  {
    icon: "1",
    user: "kosar fathiyan",
    country: "🇯🇵",
    usage: 40,
    payment: "visa",
  },
  {
    icon: "1",
    user: "puria adhami",
    country: "🇩🇪",
    usage: 20,
    payment: "stripe",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("icon", {
    id: "icon",
    header: () => (
      <span className="flex items-center justify-center">
        <LuUsers2 />
      </span>
    ),
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.user, {
    id: "user",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>user</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "country",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("usage", {
    header: () => <span>usage</span>,
    cell: (info) => (
      <progress className="h-1 w-full" value={info.getValue()} max={100} />
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("payment", {
    header: "Payment Method",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

function UsersTable() {
  const [data, _setData] = React.useState(() => [...defaultData]);
  // const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="m-2 flex items-center justify-center border border-slate-100 p-5">
      <table className="h-full w-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
