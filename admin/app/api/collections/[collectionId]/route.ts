import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import Collection from "@/lib/models/Collection";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req:NextRequest,{params}:{params:{collectionId:string}})=>{
    try{
        const {userId}=auth()
        if(!userId){
            return new NextResponse("unauthorized",{status:401})
        }
        await connectToDB()
        await Collection.findByIdAndDelete(params.collectionId)
        return new NextResponse("Danh mục đã được xóa",{status:200})

    }catch(err){
        console.log("[Collections_Delete]",err)
        return new NextResponse("Lỗi",{status:500})
    }
}