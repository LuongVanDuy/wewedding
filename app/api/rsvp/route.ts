import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, guestOf, numberOfPeople } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "luongvanduy2410@gmail.com",
        pass: "glal qtxf rxvl lnpu",
      },
    });

    const html = `
      <h2>📩 Có khách mới</h2>
      <p><b>Họ tên:</b> ${name}</p>
      <p><b>SĐT:</b> ${phone}</p>
      <p><b>Khách của:</b> ${guestOf}</p>
      <p><b>Số người:</b> ${numberOfPeople}</p>
      <hr />
      <small>Gửi từ website đám cưới</small>
    `;

    await transporter.sendMail({
      from: "Wedding",
      to: "Ducluongb502@gmail.com",
      subject: "💌 Đăng ký dự tiệc mới",
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Send mail error:", error);
    return Response.json(
      { success: false, error: "Send failed" },
      { status: 500 }
    );
  }
}
