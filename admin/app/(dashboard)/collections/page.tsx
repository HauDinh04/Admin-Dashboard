"use client";
import { columns } from "@/components/collections/CollectionsColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
const Collections = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (err) {
      console.log("[Collections_GET]", err);
    }
  };
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="p-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold ">DANH MỤC</p>
        <Button className="bg-blue-2 text-black" onClick={()=>{router.push("/collections/new")}}>
          <Plus
            className="h-4 w-4  text-black"
           
          />
          Tạo Danh Mục
        </Button>
      </div>
      <Separator className="bg-grey-1 h-0.5 my-4" />

      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;
