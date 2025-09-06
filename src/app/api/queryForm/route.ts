
import { NextResponse } from 'next/server'
import { saveQuery } from '../../controllers/qureryForm.controller'

export async function POST(req: Request) {
  try {
    const { name, email, contactNumber, queryText } = await req.json()
    await saveQuery({ name, email, contactNumber, queryText })

    return NextResponse.json({ message: 'Query saved successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save query', message: error }, { status: 500 })
  }
}
