import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { $notes } from "@/lib/db/schema";

export async function POST(req: Request) {
    const {userId} = auth();
    if (!userId) {
          return new NextResponse('unauthorised', {status:401})
    }

    const body = await req.json()
    const {name} = body;

    const note_ids = await db
    .insert($notes)
    .values({
        name,
        userId,
    })
    .returning({
        insertedId: $notes.id,
    });


    return NextResponse.json({
        note_id: note_ids[0].insertedId,
    });
}  