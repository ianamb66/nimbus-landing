import { NextResponse } from 'next/server';
import twilio from 'twilio';

export const runtime = 'nodejs';

type LeadPayload = {
  name?: string;
  email?: string;
  message?: string;
  source?: string;
};

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const accountSid = requiredEnv('TWILIO_ACCOUNT_SID');
    const authToken = requiredEnv('TWILIO_AUTH_TOKEN');
    const from = requiredEnv('TWILIO_WHATSAPP_FROM'); // e.g. 'whatsapp:+14155238886'
    const to = requiredEnv('WHATSAPP_ADMIN_TO'); // e.g. 'whatsapp:+5215616191340'

    const client = twilio(accountSid, authToken);

    const text = [
      'Nuevo lead desde Nimbus Landing',
      body.source ? `Origen: ${body.source}` : null,
      body.name ? `Nombre: ${body.name}` : null,
      body.email ? `Email: ${body.email}` : null,
      body.message ? `Mensaje: ${body.message}` : null,
      `Timestamp: ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const msg = await client.messages.create({
      from,
      to,
      body: text,
    });

    return NextResponse.json({ ok: true, sid: msg.sid });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
