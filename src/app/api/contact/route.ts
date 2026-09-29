/**
 * src/app/api/contact/route.ts
 *
 * Contact form submission API endpoint stub.
 */
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // In production, integrate email sending service (Resend / SendGrid / Nodemailer)
    // console.log("Contact submission received:", result.data);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Our team will contact you within 24 hours.",
    });
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Internal server error. Please try again.";
    return NextResponse.json(
      { success: false, message: errMessage },
      { status: 500 }
    );
  }
}
