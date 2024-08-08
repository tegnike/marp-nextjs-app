import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'slides.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return NextResponse.json({ content: fileContents });
}