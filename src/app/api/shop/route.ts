// /app/api/shop/route.ts
import db  from "@/app/data/db";
import { NextResponse } from "next/server";

export async function GET() {
      try {
            const [rows] = await db.query("SELECT * FROM shop");
            return NextResponse.json(rows);
      } catch (err) {
            console.error("API ERROR:", err);
            return NextResponse.json({ error: err }, { status: 500 });
      }
}