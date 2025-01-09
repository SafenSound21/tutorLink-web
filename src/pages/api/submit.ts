import { Resend } from "resend";

const resend = new Resend("re_5bMwuwTc_P2FrdPGesAW9XQgGzQY7SUd2");

export async function POST({ request }) {
  try {

    const formData = await request.json();
    const { name, email, institution, phone, message } = formData;

    // Envía el correo usando Resend
    await resend.emails.send({
      from: "Tutorlink <onboarding@resend.dev>",
      to: "info.fleer@gmail.com",
      subject: "Nuevo mensaje del formulario de contacto",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}\nTelefono: ${phone}\nInstitucion: ${institution}`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el mensaje" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
