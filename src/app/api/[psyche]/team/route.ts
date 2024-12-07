import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    const body = await req.json()

    if (!body.name || !body.designation) {
        return NextResponse.json({
            message: "Name and designation are required!"
        }, { status: 400 })
    }


}


export async function GET() {

    return NextResponse.json({ message: 'Hello from PsycheMaster - Teams' })

}