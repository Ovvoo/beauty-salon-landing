/// <reference path="../pb_data/types.d.ts" />

// Sends a Telegram notification when a new lead is created.
// Deploy to /opt/pocketbase/pb_hooks/ on the VPS.
// Env vars required: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

onRecordCreateExecute((e) => {
  var BOT_TOKEN = $os.getenv("TELEGRAM_BOT_TOKEN");
  var CHAT_ID = $os.getenv("TELEGRAM_CHAT_ID");
  if (!BOT_TOKEN || !CHAT_ID) { e.next(); return; }

  var email = e.record.get("email");
  var courseTitle = e.record.get("courseTitle");
  var utmSource = e.record.get("utmSource");
  var utmMedium = e.record.get("utmMedium");
  var utmCampaign = e.record.get("utmCampaign");

  var text = "New lead!\nEmail: " + email + "\nCourse: " + courseTitle;

  if (utmSource || utmMedium || utmCampaign) {
    text += "\n\nUTM:";
    if (utmSource) text += "\n  source: " + utmSource;
    if (utmMedium) text += "\n  medium: " + utmMedium;
    if (utmCampaign) text += "\n  campaign: " + utmCampaign;
  }

  $http.send({
    url: "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage",
    method: "POST",
    body: JSON.stringify({ chat_id: CHAT_ID, text: text }),
    headers: { "Content-Type": "application/json" }
  });

  e.next();
}, "Leads");
