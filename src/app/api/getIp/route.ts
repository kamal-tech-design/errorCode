import { visitorLog } from '@/app/controllers/visitorLogs.controller'

export async function GET(request: any) {
  const forwarded = request.headers.get('x-forwarded-for')
  const oldIp = new URL(request.url).searchParams.get('oldIp')
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'Unknown'
  const userAgent = request.headers.get('user-agent')
  const referer = request.headers.get('referer') || 'Direct'
  
  if(ip && oldIp!== ip && userAgent && referer) {
    await visitorLog({
      ipAddress: ip,
      referer,
      userAgent
    })
  }

  return new Response(JSON.stringify({ ip, userAgent, referer }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: any) {
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'Unknown'
    const userAgent = request.headers.get('user-agent')
    const referer = request.headers.get('referer') || 'Direct'
    const body = request.json ? await request.json() : {}
    try {
      await visitorLog({
        ...body,
        ipAddress: ip,
        referer,
        userAgent
      })
    } catch (error) {
      console.error('Error logging visitor feedback at /getIp:', error)
    }

  return new Response(JSON.stringify({ message: 'POST method not implemented yet' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

