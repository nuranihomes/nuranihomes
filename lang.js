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
