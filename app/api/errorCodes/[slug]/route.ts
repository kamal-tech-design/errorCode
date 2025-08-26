import { NextRequest } from 'next/server'
import {
  getErrorById,
  updateError,
  deleteError,
} from '../../../controllers/errorCode.controller'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  return getErrorById(Number(params.id))
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  return updateError(req, Number(params.id))
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  return deleteError(Number(params.id))
}
