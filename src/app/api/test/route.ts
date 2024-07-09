import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log('Cron job ran at: ', new Date());

  return new NextResponse('Cron ran', { status: 200 });
}