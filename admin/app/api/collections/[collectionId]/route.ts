import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import Collection from "@/lib/models/Collection";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    await connectToDB();
    const collection = await Collection.findById(params.collectionId);
    if (!collection) {
      return new NextResponse(JSON.stringify({ message: "Không tìm thấy" }), {
        status: 404,
      });
    }
    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.error("[collections GET]", err);
    return new NextResponse("Lỗi", { status: 500 });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Không được phép", { status: 401 });
    }

    await connectToDB();
    let collection = await Collection.findById(params.collectionId);
    if (!collection) {
      return new NextResponse("Không tìm thấy", { status: 404 });
    }

    const { title, description, image } = await req.json();
    if (!title || !image) {
      return new NextResponse("Tiêu đề và hình ảnh là bắt buộc", { status: 400 });
    }

    collection = await Collection.findByIdAndUpdate(
      params.collectionId,
      { title, description, image },
      { new: true }
    );
    await collection.save();
    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.error("[Collections_POST]", err);
    return new NextResponse("Lỗi", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Không được phép", { status: 401 });
    }

    await connectToDB();
    await Collection.findByIdAndDelete(params.collectionId);
    return new NextResponse("Danh mục đã được xóa", { status: 200 });
  } catch (err) {
    console.error("[Collections_DELETE]", err);
    return new NextResponse("Lỗi", { status: 500 });
  }
};
