import Collection from "@/lib/models/Collection";
import Product from "@/lib/models/Product";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    await connectToDB();
    const productDetails = await Product.findById(params.productId).populate({
      path: "collections",
      model: Collection,
    });
    if (!productDetails) {
      return new NextResponse(JSON.stringify({ message: "Không tìm thấy" }), {
        status: 404,
      });
    }
    return NextResponse.json(productDetails, { status: 200 });
  } catch (err) {
    console.error("[products_GET]", err);
    return new NextResponse("Lỗi", { status: 500 });
  }
};
export const POST = async (req:NextRequest,{params}:{params:{productId:string}})=>{
  try{
    const userId=auth();
    if(!userId){
      return new NextResponse("ko có quyền",{status:401})
    }
    await connectToDB();
    const product= await Product.findById(params.productId)
      if(!product){
        return new NextResponse(JSON.stringify({message:"ko tìm thấy sản phẩm"}),{status:404})
      }
      const {title,description,media,category,collections,amount,tags,price,expense}=await req.json();
      if(!title || !description || !media || !category || !amount || ! price ||!expense){
        return new NextResponse("chưa đủ dữ liệu tạo 1 sản phẩm",{status:400})
      }
      const addedCollections =collections.filter((collectionId:string)=>!product.collections.includes(collectionId)),
      const removedCollections =product.collections.filter((collectionId:string)=>!collections.includes(collectionId)),



  }catch(err){
    console.log('[productId_POST',err)
    return new NextResponse("lỗi",{status:500})
  }
}
//  