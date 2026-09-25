/* NuraniHomes English / Urdu toggle for the form pages.
   Visible text is swapped; the answers sent to the Sheet stay in English. */
(function () {
  var UR = {
    // Shared
    "Back to home": "ہوم پیج پر واپس",
    "Submit": "جمع کرائیں",
    "Other": "دیگر",
    "Other country abroad": "بیرونِ ملک کوئی اور ملک",
    "Yes": "ہاں",
    "No": "نہیں",
    "Not sure": "یقین نہیں",
    "Both": "دونوں",
    "Location": "مقام",
    "About you": "آپ کے بارے میں",
    "Anything else you'd like us to know?": "کوئی اور بات جو آپ ہمیں بتانا چاہیں؟",
    "Anything else you'd like to tell us?": "کوئی اور بات جو آپ ہمیں بتانا چاہیں؟",
    "We use your details only to contact you about NuraniHomes and to understand demand. We never sell or share them. Email anurani@nuranihomes.com to have them removed at any time.":
      "ہم آپ کی معلومات صرف نورانی ہومز کے بارے میں آپ سے رابطے اور طلب کو سمجھنے کے لیے استعمال کرتے ہیں۔ ہم انہیں کبھی فروخت یا شیئر نہیں کرتے۔ اپنی معلومات ہٹوانے کے لیے کسی بھی وقت anurani@nuranihomes.com پر ای میل کریں۔",

    // Buyer form
    "For Homebuyers": "خریداروں کے لیے",
    "Tell us about the home you need.": "ہمیں بتائیں آپ کو کیسا گھر چاہیے۔",
    "We're planning affordable apartments in Karachi, exclusively for overseas Pakistanis. Your answers shape what we build. It takes about two minutes. This is not a booking and no payment is required.":
      "ہم صرف بیرونِ ملک مقیم پاکستانیوں کے لیے کراچی میں کم قیمت اپارٹمنٹس کا منصوبہ بنا رہے ہیں۔ آپ کے جوابات سے طے ہوگا کہ ہم کیا بنائیں۔ اس میں تقریباً دو منٹ لگیں گے۔ یہ بکنگ نہیں ہے اور کوئی ادائیگی درکار نہیں۔",
    "First name": "پہلا نام",
    "WhatsApp number": "واٹس ایپ نمبر",
    "Country you work in": "آپ کس ملک میں کام کرتے ہیں؟",
    "UAE": "متحدہ عرب امارات",
    "Saudi Arabia": "سعودی عرب",
    "Qatar": "قطر",
    "Oman": "عمان",
    "Kuwait": "کویت",
    "Bahrain": "بحرین",
    "Your work": "آپ کا کام",
    "Office / admin staff": "دفتری / ایڈمن اسٹاف",
    "Accounts / bookkeeping": "اکاؤنٹس / بک کیپنگ",
    "Sales / retail": "سیلز / ریٹیل",
    "Customer service": "کسٹمر سروس",
    "IT support": "آئی ٹی سپورٹ",
    "Healthcare (nurse, lab, pharmacy)": "صحت (نرس، لیب، فارمیسی)",
    "Hospitality supervisor": "ہاسپیٹیلٹی سپروائزر",
    "Site / facilities supervisor": "سائٹ / فیسلٹیز سپروائزر",
    "Engineering technician / draughtsman": "انجینئرنگ ٹیکنیشن / ڈرافٹس مین",
    "Security supervisor": "سیکیورٹی سپروائزر",
    "Teacher / trainer": "استاد / ٹرینر",
    "If other, what do you do?": "اگر دیگر، تو آپ کیا کام کرتے ہیں؟",
    "Where does your family live in Pakistan?": "پاکستان میں آپ کی فیملی کہاں رہتی ہے؟",
    "Karachi": "کراچی",
    "Dubai · Riyadh · Doha": "دبئی · ریاض · دوحہ",
    "Other Sindh": "سندھ (دیگر)",
    "Punjab": "پنجاب",
    "KP": "خیبر پختونخوا",
    "Balochistan": "بلوچستان",
    "Your family's home today": "آپ کی فیملی کا موجودہ گھر",
    "Own": "اپنا",
    "Rent": "کرائے کا",
    "Living with relatives": "رشتہ داروں کے ساتھ",
    "Your home": "آپ کا گھر",
    "How seriously would you consider buying an apartment in Karachi on monthly instalments?":
      "آپ ماہانہ اقساط پر کراچی میں اپارٹمنٹ خریدنے پر کتنی سنجیدگی سے غور کریں گے؟",
    "1 · not at all": "1 · بالکل نہیں",
    "5 · very seriously": "5 · بہت سنجیدگی سے",
    "Deposit you could pay (AED)": "آپ کتنی ڈاؤن پیمنٹ دے سکتے ہیں؟ (درہم)",
    "Under 25,000": "25,000 سے کم",
    "Monthly instalment you could manage (AED)": "آپ ماہانہ کتنی قسط دے سکتے ہیں؟ (درہم)",
    "Under 1,500": "1,500 سے کم",
    "Bedrooms": "بیڈ رومز",
    "1 bedroom": "1 بیڈ روم",
    "2 bedrooms": "2 بیڈ روم",
    "3 bedrooms": "3 بیڈ روم",
    "Furnished or unfurnished?": "فرنشڈ یا بغیر فرنیچر؟",
    "Furnished": "فرنشڈ",
    "Unfurnished": "بغیر فرنیچر",
    "What would worry you most?": "آپ کو سب سے زیادہ کس بات کی فکر ہوگی؟",
    "Choose any": "جتنے چاہیں منتخب کریں",
    "Being cheated": "دھوکہ دہی",
    "Affordability": "قیمت کی استطاعت",
    "Construction delays": "تعمیر میں تاخیر",
    "Legal ownership": "قانونی ملکیت",
    "Paying from abroad": "بیرونِ ملک سے ادائیگی",
    "I confirm I am a Pakistani living and working outside Pakistan, and I agree to be contacted on WhatsApp about NuraniHomes. I understand this is not a booking and no payment is required.":
      "میں تصدیق کرتا/کرتی ہوں کہ میں پاکستان سے باہر مقیم اور برسرِ روزگار پاکستانی ہوں، اور نورانی ہومز کی جانب سے واٹس ایپ پر رابطے سے متفق ہوں۔ میں سمجھتا/سمجھتی ہوں کہ یہ بکنگ نہیں ہے اور کوئی ادائیگی درکار نہیں۔",

    // Partner form
    "For Partners": "شراکت داروں کے لیے",
    "Build with us.": "ہمارے ساتھ تعمیر کریں۔",
    "We're bringing Gulf capital and overseas buyers to affordable housing in Karachi. If you're a developer, landowner, investor, broker or community organisation, tell us how you'd like to work together.":
      "ہم خلیجی سرمایہ اور بیرونِ ملک خریداروں کو کراچی میں کم قیمت رہائش تک لا رہے ہیں۔ اگر آپ ڈویلپر، زمین کے مالک، سرمایہ کار، بروکر یا کمیونٹی تنظیم ہیں تو ہمیں بتائیں کہ آپ ہمارے ساتھ کیسے کام کرنا چاہیں گے۔",
    "Full name": "پورا نام",
    "Company or organisation": "کمپنی یا تنظیم",
    "Email": "ای میل",
    "WhatsApp or phone": "واٹس ایپ یا فون",
    "City and country": "شہر اور ملک",
    "e.g. Karachi, Pakistan": "مثلاً کراچی، پاکستان",
    "I am a…": "میں ہوں…",
    "Developer or builder": "ڈویلپر یا بلڈر",
    "Landowner": "زمین کا مالک",
    "Investor": "سرمایہ کار",
    "Broker or sales agent": "بروکر یا سیلز ایجنٹ",
    "Employer or community organisation": "آجر یا کمیونٹی تنظیم",
    "Your development work": "آپ کا تعمیراتی کام",
    "Projects completed": "مکمل شدہ منصوبے",
    "Current or planned projects in Karachi": "کراچی میں جاری یا منصوبہ بند منصوبے",
    "Location, size, stage": "مقام، رقبہ، مرحلہ",
    "SBCA approvals held for these projects": "کیا ان منصوبوں کے لیے SBCA منظوری حاصل ہے؟",
    "In progress": "زیرِ عمل",
    "Typical project size (units)": "عام منصوبے کا سائز (یونٹس)",
    "What are you looking for?": "آپ کو کس چیز کی تلاش ہے؟",
    "Capital": "سرمایہ",
    "Overseas sales": "بیرونِ ملک فروخت",
    "Your land": "آپ کی زمین",
    "Area / scheme, Karachi": "علاقہ / اسکیم، کراچی",
    "Size": "رقبہ",
    "square yards or acres": "مربع گز یا ایکڑ",
    "e.g. 1,000 sq yd": "مثلاً 1,000 مربع گز",
    "Zoning and approved height": "زوننگ اور منظور شدہ اونچائی",
    "e.g. commercial, G+6": "مثلاً کمرشل، G+6",
    "Clear title documents?": "کیا ملکیت کے کاغذات کلیئر ہیں؟",
    "Open to": "آپ کس کے لیے تیار ہیں؟",
    "Sale": "فروخت",
    "Joint venture": "جوائنٹ وینچر",
    "Either": "دونوں میں سے کوئی بھی",
    "About your interest": "آپ کی دلچسپی",
    "Investing as": "سرمایہ کاری بطور",
    "Individual": "انفرادی",
    "Family office": "فیملی آفس",
    "Company": "کمپنی",
    "We'll contact you to arrange a private conversation. We don't publish investment terms on this website.":
      "ہم نجی گفتگو کے لیے آپ سے رابطہ کریں گے۔ ہم سرمایہ کاری کی شرائط اس ویب سائٹ پر شائع نہیں کرتے۔",
    "Your brokerage": "آپ کی بروکریج",
    "Licensed where?": "لائسنس کہاں سے ہے؟",
    "e.g. RERA Dubai": "مثلاً RERA دبئی",
    "Markets you cover": "آپ کن مارکیٹوں میں کام کرتے ہیں؟",
    "e.g. UAE, Saudi Arabia": "مثلاً متحدہ عرب امارات، سعودی عرب",
    "Your reach into Pakistani communities": "پاکستانی کمیونٹیز تک آپ کی رسائی",
    "Your organisation": "آپ کی تنظیم",
    "Organisation name": "تنظیم کا نام",
    "Roughly how many Pakistani employees or members?": "تقریباً کتنے پاکستانی ملازمین یا اراکین ہیں؟",
    "I agree to be contacted by NuraniHomes about a possible partnership.":
      "میں ممکنہ شراکت داری کے بارے میں نورانی ہومز کی جانب سے رابطے سے متفق ہوں۔",

    // Homepage
    "Register interest": "دلچسپی درج کریں",
    "For Overseas Pakistanis Only": "صرف بیرونِ ملک مقیم پاکستانیوں کے لیے",
    "A home in Karachi, for those who work abroad.": "کراچی میں اپنا گھر، اُن کے لیے جو بیرونِ ملک کام کرتے ہیں۔",
    "NuraniHomes develops quality, affordable apartments in Karachi exclusively for overseas Pakistanis, with structured payment plans that fit the life you have built away from home.": "نورانی ہومز صرف بیرونِ ملک مقیم پاکستانیوں کے لیے کراچی میں معیاری اور کم قیمت اپارٹمنٹس تیار کرتا ہے، ایسے ادائیگی منصوبوں کے ساتھ جو پردیس میں آپ کی زندگی کے مطابق ہوں۔",
    "I’m looking for a home": "مجھے گھر چاہیے",
    "Partner with us": "ہمارے شراکت دار بنیں",
    "Our Approach": "ہمارا طریقہ",
    "Home ownership, made attainable.": "اپنا گھر، اب پہنچ میں۔",
    "For many Pakistanis working overseas, owning a home back in Karachi has felt out of reach, with developments priced for a few and payment terms that assume you live next door.": "بیرونِ ملک کام کرنے والے بہت سے پاکستانیوں کے لیے کراچی میں اپنا گھر خریدنا مشکل رہا ہے، کیونکہ زیادہ تر منصوبے چند لوگوں کی پہنچ میں ہوتے ہیں اور ادائیگی کی شرائط یہ فرض کرتی ہیں کہ آپ قریب ہی رہتے ہیں۔",
    "NuraniHomes was founded to change that. We partner with established local developers to deliver well-built apartments at an accessible price, offered only to overseas Pakistani families under a clear and transparent process.": "نورانی ہومز اسی کو بدلنے کے لیے قائم کیا گیا۔ ہم معروف مقامی ڈویلپرز کے ساتھ مل کر مناسب قیمت پر مضبوط اپارٹمنٹس تیار کرتے ہیں، جو ایک واضح اور شفاف طریقے سے صرف بیرونِ ملک مقیم پاکستانی خاندانوں کو پیش کیے جاتے ہیں۔",
    "Thoughtfully designed homes": "سوچ سمجھ کر بنائے گئے گھر",
    "Well-planned apartments designed for families, with a choice of sizes and furnishing options, priced within reach.": "خاندانوں کے لیے اچھی منصوبہ بندی سے بنے اپارٹمنٹس، مختلف سائز اور فرنیچر کے اختیارات کے ساتھ، مناسب قیمت پر۔",
    "Structured instalment plans": "آسان قسطوں کے منصوبے",
    "Pay over several years through a direct plan with the developer. No bank loan or mortgage required.": "ڈویلپر کے ساتھ براہِ راست منصوبے کے تحت کئی سالوں میں ادائیگی کریں۔ کسی بینک قرض یا مارگیج کی ضرورت نہیں۔",
    "Pay from abroad in USD or AED": "بیرونِ ملک سے ڈالر یا درہم میں ادائیگی",
    "Make your payments in US dollars or UAE dirhams, with freehold ownership transferred to you in Pakistan.": "اپنی ادائیگیاں امریکی ڈالر یا اماراتی درہم میں کریں، اور مکمل ملکیت (فری ہولڈ) پاکستان میں آپ کے نام منتقل کی جائے گی۔",
    "The Residences": "رہائش گاہیں",
    "Practical homes, made for family life.": "خاندانی زندگی کے لیے عملی گھر۔",
    "One, two and three-bedroom apartments, each available furnished or unfurnished. All three plans are drawn to the same scale.": "ایک، دو اور تین بیڈ روم کے اپارٹمنٹس، ہر ایک فرنشڈ یا بغیر فرنیچر۔ تینوں نقشے ایک ہی پیمانے پر بنائے گئے ہیں۔",
    "Illustrative sketch of a furnished living and dining room": "فرنشڈ لاؤنج اور ڈائننگ روم کا وضاحتی خاکہ",
    "One Bedroom": "ایک بیڈ روم",
    "Two Bedroom": "دو بیڈ روم",
    "Three Bedroom": "تین بیڈ روم",
    "About 380 sq ft": "تقریباً 380 مربع فٹ",
    "About 650 sq ft": "تقریباً 650 مربع فٹ",
    "About 900 sq ft": "تقریباً 900 مربع فٹ",
    "1 bedroom · 1 bathroom · living and dining · kitchen": "1 بیڈ روم · 1 باتھ روم · لاؤنج و ڈائننگ · کچن",
    "2 bedrooms · 2 bathrooms · living and dining · kitchen": "2 بیڈ روم · 2 باتھ روم · لاؤنج و ڈائننگ · کچن",
    "3 bedrooms · 2 bathrooms · living and dining · kitchen": "3 بیڈ روم · 2 باتھ روم · لاؤنج و ڈائننگ · کچن",
    "Living & dining": "لاؤنج و ڈائننگ",
    "Kitchen": "کچن",
    "Bedroom": "بیڈ روم",
    "Bedroom 1": "بیڈ روم 1",
    "Bedroom 2": "بیڈ روم 2",
    "Bedroom 3": "بیڈ روم 3",
    "Bath": "باتھ روم",
    "Store": "اسٹور",
    "Balcony": "بالکونی",
    "Front door": "مرکزی دروازہ",
    "10 ft": "10 فٹ",
    "Indicative layouts for illustration only. Final layouts, room sizes and specifications will depend on the site and building approvals.": "یہ نقشے صرف وضاحت کے لیے ہیں۔ حتمی نقشے، کمروں کے سائز اور تفصیلات جگہ اور تعمیراتی منظوری پر منحصر ہوں گی۔",
    "How It Works": "طریقۂ کار",
    "A clear path to your own home.": "اپنے گھر تک ایک واضح راستہ۔",
    "Register your interest": "اپنی دلچسپی درج کریں",
    "Tell us the size of home and budget you have in mind. It takes two minutes, is free and needs no payment.": "ہمیں بتائیں کہ آپ کو کس سائز کا گھر چاہیے اور آپ کا بجٹ کیا ہے۔ اس میں دو منٹ لگتے ہیں، یہ مفت ہے اور کوئی ادائیگی درکار نہیں۔",
    "Register now": "ابھی درج کریں",
    "Choose your home": "اپنا گھر منتخب کریں",
    "When a project is ready to launch, we share the location, layouts and payment plan with registered families.": "جب کوئی منصوبہ شروع ہونے کے لیے تیار ہوگا، ہم رجسٹرڈ خاندانوں کو اس کا مقام، نقشے اور ادائیگی کا منصوبہ بتائیں گے۔",
    "Pay from the Gulf": "خلیج سے ادائیگی",
    "Pay a deposit, then fixed monthly instalments during construction, in dirhams or US dollars. No bank loan needed.": "ڈاؤن پیمنٹ ادا کریں، پھر تعمیر کے دوران درہم یا امریکی ڈالر میں مقررہ ماہانہ اقساط۔ بینک قرض کی ضرورت نہیں۔",
    "Receive your home": "اپنا گھر حاصل کریں",
    "On completion, your apartment is handed over and ownership is registered in your name in Pakistan.": "تعمیر مکمل ہونے پر اپارٹمنٹ آپ کے حوالے کیا جائے گا اور ملکیت پاکستان میں آپ کے نام رجسٹر ہوگی۔",
    "This is our planned process. Full terms will be confirmed for each project before any booking is taken.": "یہ ہمارا منصوبہ بند طریقۂ کار ہے۔ ہر منصوبے کی مکمل شرائط کسی بھی بکنگ سے پہلے طے کی جائیں گی۔",
    "Our Promise": "ہمارا وعدہ",
    "Built on trust, designed for the families who build Pakistan from abroad.": "اعتماد پر قائم، اُن خاندانوں کے لیے جو بیرونِ ملک رہ کر پاکستان کو سنوارتے ہیں۔",
    "Questions": "سوالات",
    "Common questions": "عام سوالات",
    "Is registering my interest a booking?": "کیا دلچسپی درج کرنا بکنگ ہے؟",
    "No. Registering is free and does not commit you to anything. We never ask for payment on this website.": "نہیں۔ دلچسپی درج کرنا مفت ہے اور آپ پر کوئی پابندی نہیں ڈالتا۔ ہم اس ویب سائٹ پر کبھی ادائیگی نہیں مانگتے۔",
    "Who can buy?": "کون خرید سکتا ہے؟",
    "Overseas Pakistanis only: Pakistanis living and working outside Pakistan, including NICOP holders. We are starting with families in the UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain. We do not sell to buyers living in Pakistan.": "صرف بیرونِ ملک مقیم پاکستانی: وہ پاکستانی جو پاکستان سے باہر رہتے اور کام کرتے ہیں، بشمول نائیکوپ (NICOP) ہولڈرز۔ ہم متحدہ عرب امارات، سعودی عرب، قطر، عمان، کویت اور بحرین میں مقیم خاندانوں سے آغاز کر رہے ہیں۔ ہم پاکستان میں مقیم خریداروں کو فروخت نہیں کرتے۔",
    "How will payments work?": "ادائیگی کیسے ہوگی؟",
    "We plan a deposit followed by fixed monthly instalments over about three years, paid from abroad in dirhams or US dollars. Exact terms will be confirmed for each project before any booking.": "ہمارا منصوبہ ہے کہ ڈاؤن پیمنٹ کے بعد تقریباً تین سال تک مقررہ ماہانہ اقساط ہوں، جو بیرونِ ملک سے درہم یا امریکی ڈالر میں ادا کی جائیں۔ ہر منصوبے کی حتمی شرائط کسی بھی بکنگ سے پہلے طے کی جائیں گی۔",
    "What happens to my money?": "میری رقم کا کیا ہوگا؟",
    "We plan to hold buyer payments in Dubai and release them to the builder in stages as construction progresses, so money follows real progress on site. Full details will be shared before any booking.": "ہمارا منصوبہ ہے کہ خریداروں کی ادائیگیاں دبئی میں رکھی جائیں اور تعمیر کی پیش رفت کے ساتھ مرحلہ وار بلڈر کو جاری کی جائیں، تاکہ رقم صرف حقیقی کام کے مطابق خرچ ہو۔ مکمل تفصیلات کسی بھی بکنگ سے پہلے فراہم کی جائیں گی۔",
    "Where in Karachi will the homes be?": "کراچی میں گھر کہاں ہوں گے؟",
    "We are assessing sites across Karachi. The exact location will be shared with registered families when a project is ready to launch.": "ہم کراچی بھر میں مختلف مقامات کا جائزہ لے رہے ہیں۔ منصوبہ شروع ہونے پر رجسٹرڈ خاندانوں کو درست مقام بتایا جائے گا۔",
    "When will homes be ready?": "گھر کب تیار ہوں گے؟",
    "Construction typically takes around three years from launch. Each project will come with its own timeline.": "تعمیر میں عام طور پر آغاز سے تقریباً تین سال لگتے ہیں۔ ہر منصوبے کا اپنا ٹائم لائن ہوگا۔",
    "Register Your Interest": "اپنی دلچسپی درج کریں",
    "Begin your journey home.": "گھر کی طرف اپنا سفر شروع کریں۔",
    "For overseas Pakistanis only. Tell us what you’re looking for and our team will be in touch. It takes two minutes.": "صرف بیرونِ ملک مقیم پاکستانیوں کے لیے۔ ہمیں بتائیں آپ کیا تلاش کر رہے ہیں، ہماری ٹیم آپ سے رابطہ کرے گی۔ اس میں دو منٹ لگتے ہیں۔",
    "or email": "یا ای میل کریں",

    // Privacy page
    "Privacy": "پرائیویسی",
    "Privacy notice": "پرائیویسی نوٹس",
    "Read our privacy notice": "ہمارا پرائیویسی نوٹس پڑھیں",
    "Last updated: 25 September 2026": "آخری تازہ کاری: 25 ستمبر 2026",
    "Who we are": "ہم کون ہیں",
    "NuraniHomes is based in Dubai and is currently gauging interest in affordable homes in Karachi for overseas Pakistanis. You can contact us at":
      "نورانی ہومز دبئی میں قائم ہے اور فی الحال بیرونِ ملک مقیم پاکستانیوں کے لیے کراچی میں کم قیمت گھروں میں دلچسپی کا اندازہ لگا رہا ہے۔ آپ ہم سے اس ای میل پر رابطہ کر سکتے ہیں:",
    "What we collect": "ہم کون سی معلومات جمع کرتے ہیں",
    "The details you enter in our interest forms, such as your name, WhatsApp number, country, work, the home you are looking for, budget ranges and any message.":
      "وہ معلومات جو آپ ہمارے فارم میں درج کرتے ہیں، جیسے آپ کا نام، واٹس ایپ نمبر، ملک، کام، آپ کو کیسا گھر چاہیے، بجٹ کی حد اور کوئی پیغام۔",
    "For partners: your company and contact details.": "شراکت داروں کے لیے: آپ کی کمپنی اور رابطے کی تفصیلات۔",
    "Anonymous visit statistics (for example, pages viewed and country), measured without cookies. These do not identify you.":
      "ویب سائٹ وزٹ کے گمنام اعداد و شمار (مثلاً کون سے صفحات دیکھے گئے اور کس ملک سے)، جو کوکیز کے بغیر ناپے جاتے ہیں۔ ان سے آپ کی شناخت نہیں ہوتی۔",
    "How we use it": "ہم یہ معلومات کیسے استعمال کرتے ہیں",
    "To contact you about NuraniHomes, by WhatsApp or email.": "نورانی ہومز کے بارے میں واٹس ایپ یا ای میل پر آپ سے رابطہ کرنے کے لیے۔",
    "To understand demand and plan our projects.": "طلب کو سمجھنے اور اپنے منصوبوں کی تیاری کے لیے۔",
    "To share overall totals (for example, the number of families registered) with potential partners and investors. These totals never include your name or contact details.":
      "ممکنہ شراکت داروں اور سرمایہ کاروں کو مجموعی تعداد بتانے کے لیے (مثلاً کتنی فیملیز نے رجسٹر کیا)۔ ان میں آپ کا نام یا رابطہ نمبر کبھی شامل نہیں ہوتا۔",
    "We never sell your details, and we never ask for payment through this website.":
      "ہم آپ کی معلومات کبھی فروخت نہیں کرتے، اور اس ویب سائٹ کے ذریعے کبھی ادائیگی نہیں مانگتے۔",
    "Where it is kept": "معلومات کہاں رکھی جاتی ہیں",
    "Your answers are stored securely in our Google Workspace account, and only the NuraniHomes team can access them.":
      "آپ کے جوابات ہمارے گوگل ورک اسپیس اکاؤنٹ میں محفوظ رکھے جاتے ہیں، اور صرف نورانی ہومز کی ٹیم ان تک رسائی رکھتی ہے۔",
    "How long we keep it": "ہم معلومات کب تک رکھتے ہیں",
    "We keep your details while they are needed for the purposes above, or until you ask us to delete them.":
      "ہم آپ کی معلومات اس وقت تک رکھتے ہیں جب تک اوپر بیان کردہ مقاصد کے لیے ضرورت ہو، یا جب تک آپ انہیں حذف کرنے کا نہ کہیں۔",
    "Your choices": "آپ کے اختیارات",
    "You can ask to see, correct or delete your details, or to stop being contacted, at any time. Email":
      "آپ کسی بھی وقت اپنی معلومات دیکھنے، درست کرنے یا حذف کرنے، یا رابطہ بند کرنے کا کہہ سکتے ہیں۔ ای میل کریں:",
    "or reply STOP on WhatsApp.": "یا واٹس ایپ پر STOP لکھ کر جواب دیں۔",

    // Thank-you page
    "Received": "موصول ہو گیا",
    "Thank you. We'll be in touch.": "شکریہ۔ ہم جلد رابطہ کریں گے۔",
    "A member of the NuraniHomes team will contact you soon. If you have a question in the meantime, email":
      "نورانی ہومز کی ٹیم جلد آپ سے رابطہ کرے گی۔ اس دوران کوئی سوال ہو تو ای میل کریں:"
  };

  var MSG = {
    en: {
      incomplete: function (list) { return "Please complete: " + list.join(", ") + "."; },
      notConnected: "This form is not connected yet. Please email anurani@nuranihomes.com.",
      failed: "We couldn't send your answers. Check your connection and try again.",
      sending: "Sending…", submit: "Submit"
    },
    ur: {
      incomplete: function () { return "براہِ کرم تمام لازمی سوالات (*) مکمل کریں۔"; },
      notConnected: "یہ فارم ابھی منسلک نہیں ہے۔ براہِ کرم anurani@nuranihomes.com پر ای میل کریں۔",
      failed: "ہم آپ کے جوابات نہیں بھیج سکے۔ انٹرنیٹ کنکشن چیک کر کے دوبارہ کوشش کریں۔",
      sending: "بھیجا جا رہا ہے…", submit: "جمع کرائیں"
    }
  };

  var originals = new Map();   // text node -> English text
  var phOriginals = new Map(); // input -> English placeholder

  function eachTextNode(fn) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      var p = n.parentNode;
      if (!p || p.closest('script,style,.logo,.lang-toggle,footer')) continue;
      fn(n);
    }
  }

  function apply(lang) {
    window.NH_LANG = lang;
    var ur = lang === "ur";
    document.documentElement.lang = ur ? "ur" : "en";
    document.documentElement.dir = ur ? "rtl" : "ltr";

    eachTextNode(function (n) {
      if (!originals.has(n)) originals.set(n, n.nodeValue);
      var en = originals.get(n);
      var key = en.trim();
      if (!key) return;
      if (ur && UR[key]) n.nodeValue = en.replace(key, UR[key]);
      else n.nodeValue = en;
    });
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (el) {
      if (!phOriginals.has(el)) phOriginals.set(el, el.getAttribute("placeholder"));
      var en = phOriginals.get(el);
      el.setAttribute("placeholder", ur && UR[en] ? UR[en] : en);
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    var hidden = document.querySelector('input[name="language"]');
    if (hidden) hidden.value = ur ? "Urdu" : "English";
    try { localStorage.setItem("nh-lang", lang); } catch (e) {}
  }

  window.NH_MSG = function (key, arg) {
    var m = MSG[window.NH_LANG === "ur" ? "ur" : "en"][key];
    return typeof m === "function" ? m(arg) : m;
  };

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang-toggle button");
    if (b) apply(b.getAttribute("data-lang"));
  });

  var start = "en";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "ur" || q === "en") start = q;
    else if (localStorage.getItem("nh-lang") === "ur") start = "ur";
  } catch (e) {}
  apply(start);
})();
