import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, plan, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios" },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "ORVEX Agency <onboarding@resend.dev>",
    to: ["aramirezbolea@gmail.com"],
    replyTo: email,
    subject: `Nuevo contacto ORVEX: ${name}`,
    html: `
      <h2>Nuevo contacto desde orvex.agency</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
      <p><strong>Plan:</strong> ${plan}</p>
      <hr />
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
