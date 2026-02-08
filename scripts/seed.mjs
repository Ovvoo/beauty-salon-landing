/**
 * Seed PocketBase with courses and telegram posts from fallback data.
 *
 * Usage:
 *   PB_EMAIL=admin@beauty-salon.local PB_PASSWORD=Admin123456! node scripts/seed.mjs
 *
 * Or pass as CLI args:
 *   node scripts/seed.mjs admin@beauty-salon.local Admin123456!
 */

import PocketBase from "../node_modules/pocketbase/dist/pocketbase.es.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "src", "assets");

// ── Auth credentials from env or CLI args ──────────────────────────
const email = process.env.PB_EMAIL || process.argv[2];
const password = process.env.PB_PASSWORD || process.argv[3];
const pbUrl = process.env.VITE_POCKETBASE_URL || "http://127.0.0.1:8090";

if (!email || !password) {
  console.error("Usage: PB_EMAIL=... PB_PASSWORD=... node scripts/seed.mjs");
  console.error("   or: node scripts/seed.mjs EMAIL PASSWORD");
  process.exit(1);
}

// ── Data (mirrors src/lib/fallback-data.ts) ────────────────────────
const courses = [
  {
    title: "Мастер по наращиванию ресниц",
    description: "Станьте востребованным лешмейкером с нуля до первых клиентов за несколько дней. Гарантия качественного обучения и практического применения знаний — зарабатывайте больше, чем в офисе.",
    imageFile: "course-1.jpg",
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["12 видеоуроков", "Чек-листы", "Сертификат"],
    telegramLink: "https://t.me/+dPAUJ0m4mRdlMTcy",
    targetAudience: [
      "Новичок и хочешь получить новую востребованную профессию",
      "Начинающий мастер, который не чувствует себя уверенным на практике",
    ],
    sortOrder: 10,
  },
  {
    title: "Объёмное наращивание ресниц",
    description: "Освойте технику составления любых пучков за один день. Идеально для мастеров классики, желающих освоить 2D и 3D наращивание, поднять средний чек и расширить клиентскую базу.",
    imageFile: "course-2.jpg",
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 5000,
    price: 990,
    features: ["18 видеоуроков", "Разбор ошибок", "Сертификат"],
    telegramLink: "https://t.me/+zm-FH44lwYQzZmNi",
    targetAudience: [
      "Уже наращиваешь классику и хочешь освоить 2D и 3D",
      "Хочешь поднять средний чек и расширить клиентскую базу",
    ],
    sortOrder: 20,
  },
  {
    title: "Ламинирование ресниц",
    description: "Быстрая процедура с высоким спросом — идеальный старт в профессии. Научитесь индивидуальному моделированию и созданию естественно подкрученных ресничек.",
    imageFile: "course-3.jpg",
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["8 видеоуроков", "Список материалов", "Сертификат"],
    telegramLink: "https://t.me/+-QbgHlt4epNjMGUy",
    targetAudience: [
      "Хочешь освоить быструю процедуру с высоким спросом",
      "Хочешь научиться индивидуальному моделированию ресничек",
    ],
    sortOrder: 30,
  },
  {
    title: "Наращивание ресниц PRO",
    description: "Курс повышения квалификации для опытных лешмейкеров. Выведите мастерство на новый уровень, увеличьте прайс на услуги и откройте путь к повышению в салоне.",
    imageFile: "course-4.jpg",
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 5000,
    price: 990,
    features: ["24 видеоурока", "Схемы эффектов", "Сертификат"],
    telegramLink: "https://t.me/+PuHWyKZ-_7NmMTli",
    targetAudience: [
      "Хочешь повысить квалификацию мастера по наращиванию",
      "Хочешь увеличить прайс или получить повышение в салоне",
    ],
    sortOrder: 40,
  },
  {
    title: "Мокрый эффект",
    description: "Освойте трендовую технику создания эффекта мокрых ресниц с помощью наращивания. Расширьте арсенал услуг и увеличьте поток клиентов благодаря востребованной методике.",
    imageFile: "course-5.jpg",
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 5000,
    price: 990,
    features: ["10 видеоуроков", "Трендовые техники", "Сертификат"],
    telegramLink: "https://t.me/+yQA-LV8MUpczMzVi",
    targetAudience: [
      "Хочешь освоить трендовую технику мокрых ресниц",
      "Желаешь принимать больше клиентов и увеличить прайс",
    ],
    sortOrder: 50,
  },
  {
    title: "Американское наращивание",
    description: "Техника супер-объёмного наращивания для мастеров с опытом. Пополните свой профессиональный арсенал уникальной методикой и выделитесь среди конкурентов.",
    imageFile: "course-6.jpg",
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 5000,
    price: 990,
    features: ["14 видеоуроков", "Техника объёмов", "Сертификат"],
    telegramLink: "https://t.me/+5FTZaPTYLf81ODBi",
    targetAudience: [
      "Имеешь опыт объёмного наращивания",
      "Хочешь пополнить арсенал уникальной техникой",
    ],
    sortOrder: 60,
  },
  {
    title: "Ламинирование бровей",
    description: "Популярная услуга долговременной укладки бровей. Освойте технику для себя или расширьте навыки практикующего мастера-бровиста новой востребованной процедурой.",
    imageFile: "course-7.jpg",
    category: "Брови",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["10 видеоуроков", "Схемы построения", "Сертификат"],
    telegramLink: "https://t.me/+Vrbz-G4MEWBmZjI6",
    targetAudience: [
      "Хочешь обучиться ламинированию бровей для себя",
      "Практикующий бровист и хочешь освоить новую технику",
    ],
    sortOrder: 70,
  },
];

const TG_CHANNEL = "leralash22";

const telegramPosts = [
  { channel: TG_CHANNEL, postId: 45, type: "review" },
  { channel: TG_CHANNEL, postId: 56, type: "review" },
  { channel: TG_CHANNEL, postId: 12, type: "review" },
  { channel: TG_CHANNEL, postId: 16, type: "review" },
  { channel: TG_CHANNEL, postId: 31, type: "review" },
  { channel: TG_CHANNEL, postId: 33, type: "news" },
  { channel: TG_CHANNEL, postId: 51, type: "news" },
  { channel: TG_CHANNEL, postId: 57, type: "news" },
];

// ── Main ───────────────────────────────────────────────────────────
const pb = new PocketBase(pbUrl);
pb.autoCancellation(false);

await pb.collection("_superusers").authWithPassword(email, password);
console.log(`Authenticated as ${email}\n`);

// ── Seed courses ───────────────────────────────────────────────────
let coursesCreated = 0;
let coursesSkipped = 0;

for (const course of courses) {
  const existing = await pb.collection("courses").getList(1, 1, {
    filter: `title = "${course.title.replace(/"/g, '\\"')}"`,
  });

  if (existing.totalItems > 0) {
    console.log(`⏭️  Already exists: ${course.title}`);
    coursesSkipped++;
    continue;
  }

  try {
    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("description", course.description);
    formData.append("category", course.category);
    formData.append("level", course.level);
    formData.append("price", String(course.price));
    formData.append("oldPrice", String(course.oldPrice));
    formData.append("features", course.features.join("\n"));
    formData.append("telegramLink", course.telegramLink);
    formData.append("targetAudience", course.targetAudience.join("\n"));
    formData.append("sortOrder", String(course.sortOrder));

    const imagePath = path.join(ASSETS, course.imageFile);
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
    formData.append("image", imageBlob, course.imageFile);

    await pb.collection("courses").create(formData);
    console.log(`✅ Course created: ${course.title}`);
    coursesCreated++;
  } catch (err) {
    console.error(`❌ Failed to create: ${course.title} — ${err.message}`);
  }
}

// ── Seed telegram posts ─────────────────────────────────────────────
let postsCreated = 0;
let postsSkipped = 0;

for (const post of telegramPosts) {
  const existing = await pb.collection("telegram_posts").getList(1, 1, {
    filter: `channel = "${post.channel}" && postId = ${post.postId}`,
  });

  if (existing.totalItems > 0) {
    console.log(`⏭️  Already exists: ${post.channel}/${post.postId}`);
    postsSkipped++;
    continue;
  }

  try {
    await pb.collection("telegram_posts").create(post);
    console.log(`✅ Post created: ${post.channel}/${post.postId} (${post.type})`);
    postsCreated++;
  } catch (err) {
    console.error(`❌ Failed to create: ${post.channel}/${post.postId} — ${err.message}`);
  }
}

// ── Summary ────────────────────────────────────────────────────────
console.log(`\n--- Summary ---`);
console.log(`Courses: ${coursesCreated} created, ${coursesSkipped} skipped`);
console.log(`Telegram posts: ${postsCreated} created, ${postsSkipped} skipped`);
