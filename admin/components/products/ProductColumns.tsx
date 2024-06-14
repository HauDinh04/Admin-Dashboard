"use client";
import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";
export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Sản Phẩm",
    cell:({row})=>(<Link href={`/products/${row.original._id}`} className="hover:text-red-1">{row.original.title}</Link>)
  },
  {
    accessorKey: "category",
    header: "Category",
    
  },
  {
    accessorKey: "collections",
    header: "Danh Mục",
    cell:({row})=>row.original.collections.map((collection)=>collection.title).join(", "),
    
  },
  {
    accessorKey: "price",
    header: "Giá (vnđ)",
    
  },
  {
    accessorKey: "expense",
    header: "Cost (vnđ)",
    
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete id={row.original._id} item="product"/>,
  },
];
