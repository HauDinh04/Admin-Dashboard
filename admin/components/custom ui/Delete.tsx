"use client";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "../ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

interface DeleteProps {
  id: string;
  item: string;
}

const Delete: React.FC<DeleteProps> = ({ id, item }) => {
  const [loading, setLoading] = useState(false);
  const onDelete = async () => {
    try {
      setLoading(true);
      const itemType = item === "product" ? "products" : "collections";
      const res = await fetch(`/api/${itemType}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLoading(false);
        window.location.href = (`/${itemType}`);
        toast.success(`${itemType} Đã xóa thành công`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Có gì đó đã sai, hãy thử lại");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="bg-red-500 text-white">
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-grey-1">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-1">
            Bạn có chắc muốn xóa không ??
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            Hành động này sẻ không hoàn tác và dữ liệu sẽ xóa khỏi {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction className="bg-red-1 text-white" onClick={onDelete}>
            Tiếp Tục
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
