import { Resend } from 'resend';

// Netlify Functions runtime requires standard syntax or specific exports.
// We use the traditional background handler.
const resend = new Resend(process.env.RESEND_API_KEY || '');

export const handler = async (event: any) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required.' })
      };
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'utkarsh16potdukhe@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' })
    };
  }
};
