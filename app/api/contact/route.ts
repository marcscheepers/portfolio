import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/config';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Zolang er geen RESEND_API_KEY is ingesteld in Vercel, loggen we het bericht
  // in plaats van te mailen. Zo blijft de site werkend voordat je dit instelt.
  if (!apiKey) {
    console.log('Contactformulier ontvangen (geen RESEND_API_KEY ingesteld):', {
      name,
      email,
      subject,
      message
    });
    return NextResponse.json({ ok: true, mailed: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Website <onboarding@resend.dev>',
      to: siteConfig.email,
      replyTo: email,
      subject: `[Contactformulier] ${subject}`,
      text: `Naam: ${name}\nE-mail: ${email}\n\n${message}`
    });
    return NextResponse.json({ ok: true, mailed: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Mail failed' }, { status: 500 });
  }
}
