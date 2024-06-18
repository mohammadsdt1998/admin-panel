import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { LuUsers2 } from "react-icons/lu";
import { useSales } from "../contexts/SalesContext";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("icon", {
    id: "icon",
    header: () => (
      <span className="ml-2 flex items-center">
        <LuUsers2 className="text-lg" />
      </span>
    ),
    cell: (info) => (
      <div className="h-12 w-12">
        <img
          src={info.getValue()}
          alt="user icon"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.user, {
    id: "user",
    cell: (info) => (
      <span className="flex items-center text-nowrap capitalize">
        {info.getValue()}
      </span>
    ),
    header: () => <span className="flex items-center">User</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("country", {
    header: () => <span className="flex justify-center">Country</span>,
    cell: (info) => (
      <span className="flex justify-center text-3xl">{info.renderValue()}</span>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("usage", {
    header: () => <span className="flex">Usage</span>,
    cell: (info) => (
      <div className="flex flex-col">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-semibold">{info.getValue()}%</h2>
          <p className="hidden text-sm text-gray-400 lg:block">January-July</p>
        </div>
        <progress
          className={`h-1 w-full min-w-52 ${info.row.index % 2 === 0 ? "user-table-even-progress" : "user-table-odd-progress"}`}
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
  const { usersData } = useSales();

  const table = useReactTable({
    data: usersData ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="m-2 flex items-center justify-center border border-gray-600">
      <div className="w-full overflow-x-auto">
        <table className="h-full w-full min-w-[600px] table-auto border-collapse text-slate-100 md:min-w-0">
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
                  <td
                    key={cell.id}
                    className="border-t border-gray-600 px-2 py-3"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
