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
        <LuUsers2 className="text-lg" />
      </span>
    ),
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.user, {
    id: "user",
    cell: (info) => <span className="flex">{info.getValue()}</span>,
    header: () => <span className="flex">User</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => "Country",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("usage", {
    header: () => <span className="flex">Usage</span>,
    cell: (info) => (
      <div className="flex flex-col">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-semibold">{info.getValue()}%</h2>
          <p className="text-sm text-gray-400">January-July</p>
        </div>
        <progress
          className={`h-1 w-full ${info.row.index % 2 === 0 ? "user-table-even-progress" : "user-table-odd-progress"}`}
          value={info.getValue()}
          max={100}
        />
      </div>
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
    <div className="m-2 flex items-center justify-center border border-gray-600">
      <table className="h-full w-full table-auto border-collapse text-slate-100">
        <thead className="bg-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-600">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2">
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
            <tr key={row.id} className="bg-transparent">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-t border-gray-600 p-4">
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
