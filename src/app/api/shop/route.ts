import confing  from "@/app/data/db";
import { NextResponse } from "next/server";
export async function GET() {
      const [rows]: any = await confing.query("SELECT * FROM shop"); //select data form database
      return NextResponse.json(rows, { status: 200 }); //reutrn data get form database to show to frontEnd and status for create success
}