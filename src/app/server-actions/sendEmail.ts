"use server";

export default async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  await fetch("https://api.mailgun.net/v3/khaoyaiart.com/messages", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${process.env.MAIL_GUN_API_KEY}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      to: to,
      from: "Khaoyai Art <no-reply@khaoyaiart.com>",
      subject: subject,
      text: body,
    }).toString(),
  });
  return true;
}
