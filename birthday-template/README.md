# تمبلت موقع عيد ميلاد 🎂

## الملفات
- config.js   ← **كل التعديلات هنا** (الباسورد، الاسم، اللغة، الرسائل، القصة، الصور، الفيديو، الموسيقى، الثيم، العد التنازلي)
- style.css   ← التصميم (الألوان الافتراضية في أول الملف :root)
- assets/photos/ ← حط صور العميل
- assets/videos/ ← حط فيديوهات العميل
- assets/music.mp3 ← الأغنية

## تغيير الباسورد
config.js ← password: "00000"

## تغيير الثيم / الألوان
config.js ← theme: "rose" أو "lavender" أو "night"
ولو عايز ألوان مخصصة: theme: "custom" وعدّل customTheme.

## إضافة الصور
1. حط الصورة في assets/photos/ (مثلاً 1.jpg)
2. في config.js داخل photos زوّد سطر:
   { src: "assets/photos/1.jpg", caption: "تعليق اختياري" },

## إضافة الفيديو
نفس الفكرة داخل videos والملف في assets/videos/ (يفضل mp4 صغير الحجم).

## الموسيقى
حط الملف في assets/ وغيّر music: "assets/اسم-الملف.mp3" (سيبها "" لو مفيش).

## الرسائل الطايرة / الرسالة الأخيرة / الاسم
كلها في config.js (messages, letter, name, title, subtitle).

## الرفع
المجلد كله static، ارفعه على Netlify (سحب وإفلات للمجلد) أو Vercel أو GitHub Pages
أو أي استضافة. مفيش تثبيت ولا سيرفر.
افتح index.html مباشرة للتجربة.

## الإضافات الجديدة
- اللغة: lang: "ar" أو "en"
- العد التنازلي: birthdayDate: "2026-12-31T00:00:00" (و lockUntilDate: true لو عايز الباسورد يقفل لحد الميعاد)
- قصتنا: story: [{date,title,text,photo}] (photo اختياري)
- التورتة: cakeTitle / wishText / micBlow (النفخ في الميكروفون بيشتغل على https بس، والزرار موجود دايماً)
- ثيم جديد رومانسي: theme: "romance" (الافتراضي)
