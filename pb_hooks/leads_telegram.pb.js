/// <reference path="../pb_data/types.d.ts" />

// Sends a Telegram notification when a new lead is created.
// Deploy to /opt/myapp/pb_hooks/ on the VPS.
// Env vars required: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

onRecordCreateExecute((e) => {
  const BOT_TOKEN = $os.getenv("TELEGRAM_BOT_TOKEN");
  const CHAT_ID = $os.getenv("TELEGRAM_CHAT_ID");

  if (!BOT_TOKEN || !CHAT_ID) {
    console.log("[leads_telegram] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return e.next();
  }

  const record = e.record;
  const email = record.getString("email");
  const courseTitle = record.getString("courseTitle");
  const utmSource = record.getString("utmSource");
  const utmMedium = record.getString("utmMedium");
  const utmCampaign = record.getString("utmCampaign");

  let text = `📩 Новая заявка!\n\n`;
  text += `📧 Email: ${email}\n`;
  text += `📚 Курс: ${courseTitle}\n`;

  if (utmSource || utmMedium || utmCampaign) {
    text += `\n🔗 UTM:\n`;
    if (utmSource) text += `  source: ${utmSource}\n`;
    if (utmMedium) text += `  medium: ${utmMedium}\n`;
    if (utmCampaign) text += `  campaign: ${utmCampaign}\n`;
  }

  try {
    $http.send({
      url: `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.log("[leads_telegram] Failed to send notification:", err);
  }

  return e.next();
}, "leads");
