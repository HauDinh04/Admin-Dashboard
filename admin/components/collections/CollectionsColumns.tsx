"use client";
import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Danh Mục",
    cell:({row})=><p>{row.original.title}</p>
  },
  {
    accessorKey: "products",
    header: "Sản Phẩm",
    cell:({row})=><p>{row.original.products.length}</p>
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
