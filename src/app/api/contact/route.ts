import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Check if API key exists
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message, recipientEmail } = await request.json();
    
    // Log the data we're about to send
    console.log('Sending email with data:', { name, email, company, message, recipientEmail });
    console.log('Using Resend API key:', process.env.RESEND_API_KEY?.slice(0, 5) + '...');

    const data = await resend.emails.send({
      from: 'Grahamstak <onboarding@resend.dev>',
      to: 'jackson.t.devin@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
    });

    console.log('Resend response:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    let errorMessage = 'Failed to send email';
    
    // Type check if error is an Error object
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
} 