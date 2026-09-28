/* NuraniHomes English / Urdu toggle for the form pages.
   Visible text is swapped; the answers sent to the Sheet stay in English. */
(function () {
  var UR = {
    // ---- Sep-2026 DHA City update ----
    "Class A Homes · DHA City Karachi": "کلاس اے گھر · ڈی ایچ اے سٹی کراچی",
    "A Class A home in Karachi, for professionals in the Gulf.": "کراچی میں کلاس اے گھر، خلیج میں کام کرنے والے پروفیشنلز کے لیے۔",
    "NuraniHomes is planning Class A apartments on DHA-titled land in DHA City Karachi, for Pakistani professionals living and working in the Gulf. We meet you face to face in Dubai, and our team in Pakistan handles every piece of paperwork.": "نورانی ہومز ڈی ایچ اے سٹی کراچی میں ڈی ایچ اے ٹائٹل والی زمین پر کلاس اے اپارٹمنٹس کی منصوبہ بندی کر رہا ہے، خلیجی ممالک میں مقیم اور کام کرنے والے پاکستانی پروفیشنلز کے لیے۔ ہم دبئی میں آپ سے براہِ راست ملتے ہیں، اور پاکستان میں ہماری ٹیم تمام کاغذی کارروائی سنبھالتی ہے۔",
    "Better homes, on better-value land.": "بہتر گھر، بہتر قیمت والی زمین پر۔",
    "Karachi needs far more good homes than are being built. In the city’s established neighbourhoods, land has become so expensive that new apartments are priced out of reach, even for professionals earning well abroad.": "کراچی کو جتنے اچھے گھروں کی ضرورت ہے، اتنے بن نہیں رہے۔ شہر کے پرانے علاقوں میں زمین اتنی مہنگی ہو چکی ہے کہ نئے اپارٹمنٹس بیرونِ ملک اچھا کمانے والے پروفیشنلز کی پہنچ سے بھی باہر ہو گئے ہیں۔",
    "NuraniHomes builds where the numbers still work: DHA City, a DHA-titled, master-planned community on the M-9, now around 25 minutes from DHA Karachi by the new expressway. Land there costs a fraction of the established DHA phases, so more of your money goes into the home itself. We partner with experienced local builders and run every purchase through a clear, transparent process.": "نورانی ہومز وہاں تعمیر کرتا ہے جہاں حساب اب بھی بنتا ہے: ڈی ایچ اے سٹی، ایم-9 پر ڈی ایچ اے ٹائٹل والی ایک منصوبہ بند بستی، جو نئی ایکسپریس وے کے ذریعے ڈی ایچ اے کراچی سے تقریباً 25 منٹ کی مسافت پر ہے۔ وہاں زمین کی قیمت پرانے ڈی ایچ اے فیزز کے مقابلے میں بہت کم ہے، اس لیے آپ کی رقم کا زیادہ حصہ خود گھر پر لگتا ہے۔ ہم تجربہ کار مقامی بلڈرز کے ساتھ شراکت کرتے ہیں اور ہر خریداری ایک واضح اور شفاف طریقے سے مکمل کرتے ہیں۔",
    "Class A, without compromise": "کلاس اے، بغیر کسی سمجھوتے کے",
    "Well-built low-rise apartments with solar backup, secure access, parking and finished kitchens and bathrooms, in one, two and three-bedroom layouts.": "مضبوطی سے بنے کم منزلہ اپارٹمنٹس، سولر بیک اپ، محفوظ داخلے، پارکنگ اور مکمل کچن و باتھ رومز کے ساتھ، ایک، دو اور تین بیڈروم لے آؤٹس میں۔",
    "Clean title, visible progress": "صاف ملکیت، نظر آنے والی پیش رفت",
    "Homes on DHA-titled land. Your payments go to construction in stages, only as independently certified work is completed, with regular site updates you can follow from abroad.": "ڈی ایچ اے ٹائٹل والی زمین پر گھر۔ آپ کی ادائیگیاں مرحلہ وار تعمیر پر لگتی ہیں، صرف اُس وقت جب آزادانہ طور پر تصدیق شدہ کام مکمل ہو جائے، اور آپ بیرونِ ملک سے باقاعدہ سائٹ اپ ڈیٹس دیکھ سکتے ہیں۔",
    "Sold in the Gulf, handled in Pakistan": "فروخت خلیج میں، کارروائی پاکستان میں",
    "Meet us face to face in Dubai and pay in US dollars or dirhams on a monthly plan, with no bank loan needed. Our Pakistan company handles approvals, your sale agreement and the transfer into your name.": "دبئی میں ہم سے براہِ راست ملیں اور ماہانہ پلان پر امریکی ڈالر یا درہم میں ادائیگی کریں، کسی بینک قرض کی ضرورت نہیں۔ ہماری پاکستانی کمپنی منظوریاں، آپ کا سیل ایگریمنٹ اور ملکیت آپ کے نام منتقل کرنے کا کام سنبھالتی ہے۔",
    "Why DHA City": "ڈی ایچ اے سٹی کیوں",
    "The right place to build, right now.": "تعمیر کے لیے درست جگہ، درست وقت پر۔",
    "DHA City has been sold mostly as plots. We think it is ready for finished homes.": "ڈی ایچ اے سٹی زیادہ تر پلاٹوں کی صورت میں فروخت ہوا ہے۔ ہمارے خیال میں اب یہ تیار گھروں کے لیے تیار ہے۔",
    "Connected": "رابطے میں",
    "A new six-lane expressway links DHA City with DHA Karachi in around 25 minutes, with the M-9 motorway running alongside.": "ایک نئی چھ لین ایکسپریس وے ڈی ایچ اے سٹی کو تقریباً 25 منٹ میں ڈی ایچ اے کراچی سے ملاتی ہے، اور ایم-9 موٹر وے ساتھ ساتھ گزرتی ہے۔",
    "Clear ownership": "واضح ملکیت",
    "Land is allotted and transferred through DHA’s own records – one of the most straightforward title systems in Karachi.": "زمین ڈی ایچ اے کے اپنے ریکارڈ کے ذریعے الاٹ اور منتقل ہوتی ہے – جو کراچی کے سب سے سیدھے سادے ملکیتی نظاموں میں سے ایک ہے۔",
    "Growing around you": "آپ کے اردگرد ترقی",
    "A major new cancer hospital, a university campus and Pakistan’s planned tallest tower are all in or coming to DHA City.": "کینسر کا ایک بڑا نیا ہسپتال، ایک یونیورسٹی کیمپس اور پاکستان کا مجوزہ بلند ترین ٹاور – سب ڈی ایچ اے سٹی میں موجود ہیں یا آ رہے ہیں۔",
    "Better value": "بہتر قیمت",
    "Land costs a fraction of the established DHA phases – which is what lets us offer Class A homes at a price professionals in the Gulf can reach.": "یہاں زمین کی قیمت پرانے ڈی ایچ اے فیزز کا ایک چھوٹا سا حصہ ہے – اسی وجہ سے ہم کلاس اے گھر ایسی قیمت پر پیش کر سکتے ہیں جو خلیج میں کام کرنے والے پروفیشنلز کی پہنچ میں ہو۔",
    "One, two and three-bedroom apartments in a low-rise building, each available furnished or unfurnished. All three plans are drawn to the same scale.": "ایک کم منزلہ عمارت میں ایک، دو اور تین بیڈروم کے اپارٹمنٹس، ہر ایک فرنشڈ یا ان فرنشڈ دستیاب۔ تینوں نقشے ایک ہی پیمانے پر بنائے گئے ہیں۔",
    "A first home": "پہلا گھر",
    "Our core family home": "ہمارا بنیادی فیملی گھر",
    "For larger families": "بڑے خاندانوں کے لیے",
    "Indicative layouts for illustration only. Final layouts, sizes, specifications and prices will depend on the site and building approvals.": "نقشے صرف وضاحت کے لیے ہیں۔ حتمی لے آؤٹس، سائز، تفصیلات اور قیمتیں سائٹ اور عمارت کی منظوریوں پر منحصر ہوں گی۔",
    "When a project is ready to launch, we share the site, layouts and payment plan with registered families, and meet you in Dubai.": "جب کوئی منصوبہ لانچ کے لیے تیار ہو، ہم رجسٹرڈ خاندانوں کو سائٹ، لے آؤٹس اور ادائیگی کا پلان بتاتے ہیں، اور دبئی میں آپ سے ملتے ہیں۔",
    "Pay a deposit, then fixed monthly instalments over around three years, in dirhams or US dollars. Your money is released to construction only as work is completed. No bank loan needed.": "ایک ڈپازٹ ادا کریں، پھر تقریباً تین سال تک مقررہ ماہانہ اقساط، درہم یا امریکی ڈالر میں۔ آپ کی رقم تعمیر پر صرف اُس وقت جاری ہوتی ہے جب کام مکمل ہو۔ کسی بینک قرض کی ضرورت نہیں۔",
    "On completion, your apartment is handed over and ownership is registered in your name. Our Pakistan team organises all the paperwork, so you never need to deal with offices yourself.": "تکمیل پر آپ کا اپارٹمنٹ آپ کے حوالے کیا جاتا ہے اور ملکیت آپ کے نام رجسٹر ہو جاتی ہے۔ ہماری پاکستانی ٹیم تمام کاغذی کارروائی سنبھالتی ہے، اس لیے آپ کو خود کسی دفتر جانے کی ضرورت نہیں۔",
    "Who are these homes for?": "یہ گھر کن کے لیے ہیں؟",
    "Pakistani professionals living and working in the Gulf – engineers, finance, IT, healthcare, managers and others – who want a Class A home in Karachi for their family, or for their own return.": "خلیج میں مقیم اور کام کرنے والے پاکستانی پروفیشنلز – انجینئرز، فنانس، آئی ٹی، صحت، مینیجرز اور دیگر – جو اپنے خاندان کے لیے یا اپنی واپسی کے لیے کراچی میں کلاس اے گھر چاہتے ہیں۔",
    "Pakistani citizens living and working outside Pakistan, including NICOP holders. We are starting with buyers in the UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain. We do not currently sell to buyers living in Pakistan.": "پاکستان سے باہر مقیم اور کام کرنے والے پاکستانی شہری، بشمول نائیکوپ رکھنے والے۔ ہم متحدہ عرب امارات، سعودی عرب، قطر، عمان، کویت اور بحرین کے خریداروں سے آغاز کر رہے ہیں۔ فی الحال ہم پاکستان میں مقیم خریداروں کو فروخت نہیں کرتے۔",
    "Why DHA City?": "ڈی ایچ اے سٹی کیوں؟",
    "It combines DHA-titled land and records, new road links to the rest of Karachi, major institutions arriving, and land costs well below the established DHA phases. Together, that lets us build Class A homes at a price that works.": "یہاں ڈی ایچ اے ٹائٹل والی زمین اور ریکارڈ، باقی کراچی سے نئے سڑک رابطے، آنے والے بڑے ادارے، اور پرانے ڈی ایچ اے فیزز سے کہیں کم زمین کی قیمت – سب یکجا ہیں۔ اسی سے ہم مناسب قیمت پر کلاس اے گھر بنا سکتے ہیں۔",
    "We do. NuraniHomes looks after you from Dubai, and our Pakistan company handles approvals, your sale agreement and registering ownership in your name, so you don’t need to be in Pakistan or visit any offices yourself.": "ہم کرتے ہیں۔ نورانی ہومز دبئی سے آپ کا خیال رکھتا ہے، اور ہماری پاکستانی کمپنی منظوریاں، آپ کا سیل ایگریمنٹ اور ملکیت آپ کے نام رجسٹر کرنے کا کام سنبھالتی ہے، اس لیے آپ کو پاکستان میں موجود ہونے یا کسی دفتر جانے کی ضرورت نہیں۔",
    "We plan to hold buyer payments in Dubai and release them to construction in stages, only as independently certified work is completed, so money follows real progress on site. Full details will be shared before any booking.": "ہم خریداروں کی ادائیگیاں دبئی میں رکھنے اور انہیں مرحلہ وار تعمیر پر جاری کرنے کا ارادہ رکھتے ہیں، صرف اُس وقت جب آزادانہ طور پر تصدیق شدہ کام مکمل ہو، تاکہ رقم سائٹ پر حقیقی پیش رفت کے ساتھ چلے۔ مکمل تفصیلات کسی بھی بکنگ سے پہلے فراہم کی جائیں گی۔",
    "Our first homes are planned for DHA City Karachi. The exact site, layouts and prices will be shared with registered families when a project is ready to launch.": "ہمارے پہلے گھر ڈی ایچ اے سٹی کراچی میں منصوبہ بند ہیں۔ درست سائٹ، لے آؤٹس اور قیمتیں منصوبہ لانچ کے لیے تیار ہونے پر رجسٹرڈ خاندانوں کو بتائی جائیں گی۔",
    "A low-rise building typically takes around two to three years from launch. Each project will come with its own timeline.": "ایک کم منزلہ عمارت عموماً لانچ سے تقریباً دو سے تین سال میں مکمل ہوتی ہے۔ ہر منصوبے کا اپنا ٹائم لائن ہوگا۔",
    "For Pakistani professionals living outside Pakistan. Tell us what you’re looking for and our team will be in touch. It takes two minutes.": "پاکستان سے باہر مقیم پاکستانی پروفیشنلز کے لیے۔ ہمیں بتائیں آپ کیا تلاش کر رہے ہیں، ہماری ٹیم آپ سے رابطہ کرے گی۔ اس میں صرف دو منٹ لگتے ہیں۔",
    "We're planning Class A apartments in DHA City Karachi, for Pakistani professionals living and working in the Gulf. Your answers shape what we build. It takes about two minutes. This is not a booking and no payment is required.": "ہم ڈی ایچ اے سٹی کراچی میں کلاس اے اپارٹمنٹس کی منصوبہ بندی کر رہے ہیں، خلیج میں مقیم اور کام کرنے والے پاکستانی پروفیشنلز کے لیے۔ آپ کے جوابات طے کریں گے کہ ہم کیا تعمیر کریں۔ اس میں تقریباً دو منٹ لگتے ہیں۔ یہ بکنگ نہیں ہے اور کوئی ادائیگی درکار نہیں۔",
    "Engineer": "انجینئر",
    "Finance / accounting": "فنانس / اکاؤنٹنگ",
    "IT / technology": "آئی ٹی / ٹیکنالوجی",
    "Doctor / healthcare professional": "ڈاکٹر / صحت کے شعبے کے پروفیشنل",
    "Manager / business owner": "مینیجر / کاروبار کے مالک",
    "Sales / business development": "سیلز / بزنس ڈویلپمنٹ",
    "Teacher / academic": "استاد / تعلیمی شعبہ",
    "Under 50,000": "50,000 سے کم",
    "50,000–75,000": "50,000–75,000",
    "75,000–100,000": "75,000–100,000",
    "100,000–150,000": "100,000–150,000",
    "150,000+": "150,000+",
    "Under 2,000": "2,000 سے کم",
    "2,000–3,000": "2,000–3,000",
    "3,000–4,000": "3,000–4,000",
    "4,000–5,000": "4,000–5,000",
    "5,000+": "5,000+",
    "We're bringing Gulf capital and Gulf-based buyers to Class A housing in DHA City Karachi. If you're a developer, DHA City landowner, investor, broker or community organisation, tell us how you'd like to work together.": "ہم خلیجی سرمایہ اور خلیج میں مقیم خریداروں کو ڈی ایچ اے سٹی کراچی میں کلاس اے رہائش تک لا رہے ہیں۔ اگر آپ ڈویلپر، ڈی ایچ اے سٹی میں زمین کے مالک، سرمایہ کار، بروکر یا کمیونٹی تنظیم ہیں، تو ہمیں بتائیں آپ ہمارے ساتھ کیسے کام کرنا چاہیں گے۔",

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
    "We're planning Class A apartments in Karachi at an affordable price, for overseas Pakistanis and international buyers living abroad. Your answers shape what we build. It takes about two minutes. This is not a booking and no payment is required.":
      "ہم کراچی میں مناسب قیمت پر کلاس اے اپارٹمنٹس کی منصوبہ بندی کر رہے ہیں، بیرونِ ملک مقیم پاکستانیوں اور بین الاقوامی خریداروں کے لیے۔ آپ کے جوابات طے کریں گے کہ ہم کیا تعمیر کریں۔ اس میں تقریباً دو منٹ لگتے ہیں۔ یہ بکنگ نہیں ہے اور کوئی ادائیگی درکار نہیں۔",
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
    "I confirm I live and work outside Pakistan, and I agree to be contacted on WhatsApp about NuraniHomes. I understand this is not a booking and no payment is required.":
      "میں تصدیق کرتا/کرتی ہوں کہ میں پاکستان سے باہر رہتا/رہتی اور کام کرتا/کرتی ہوں، اور نورانی ہومز کے بارے میں واٹس ایپ پر رابطے کے لیے رضامند ہوں۔ میں سمجھتا/سمجھتی ہوں کہ یہ بکنگ نہیں ہے اور کوئی ادائیگی درکار نہیں۔",

    // Partner form
    "For Partners": "شراکت داروں کے لیے",
    "Build with us.": "ہمارے ساتھ تعمیر کریں۔",
    "We're bringing Gulf capital and overseas buyers to Class A housing at an affordable price in Karachi. If you're a developer, landowner, investor, broker or community organisation, tell us how you'd like to work together.":
      "ہم خلیجی سرمایہ اور بیرونِ ملک خریداروں کو کراچی میں مناسب قیمت پر کلاس اے رہائش تک لا رہے ہیں۔ اگر آپ ڈویلپر، زمین کے مالک، سرمایہ کار، بروکر یا کمیونٹی تنظیم ہیں تو ہمیں بتائیں آپ کس طرح ہمارے ساتھ کام کرنا چاہیں گے۔",
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
    "Class A Homes · Affordable Price": "کلاس اے گھر · مناسب قیمت",
    "A home in Karachi, for those who work abroad.": "کراچی میں اپنا گھر، اُن کے لیے جو بیرونِ ملک کام کرتے ہیں۔",
    "NuraniHomes develops Class A apartments in Karachi at an affordable price, for overseas Pakistanis and international buyers, with structured payment plans that fit the life you have built away from home. We organise all the paperwork for your purchase.": "نورانی ہومز بیرونِ ملک مقیم پاکستانیوں اور بین الاقوامی خریداروں کے لیے کراچی میں مناسب قیمت پر اعلیٰ معیار (کلاس اے) کے اپارٹمنٹس تیار کرتا ہے، ایسے منظم ادائیگی پلانز کے ساتھ جو بیرونِ ملک آپ کی زندگی کے مطابق ہوں۔ آپ کی خریداری کی تمام کاغذی کارروائی ہم خود سنبھالتے ہیں۔",
    "I’m looking for a home": "مجھے گھر چاہیے",
    "Partner with us": "ہمارے شراکت دار بنیں",
    "Our Approach": "ہمارا طریقہ",
    "Home ownership, made attainable.": "اپنا گھر، اب پہنچ میں۔",
    "For many Pakistanis working overseas, owning a home back in Karachi has felt out of reach, with developments priced for a few and payment terms that assume you live next door.": "بیرونِ ملک کام کرنے والے بہت سے پاکستانیوں کے لیے کراچی میں اپنا گھر خریدنا مشکل رہا ہے، کیونکہ زیادہ تر منصوبے چند لوگوں کی پہنچ میں ہوتے ہیں اور ادائیگی کی شرائط یہ فرض کرتی ہیں کہ آپ قریب ہی رہتے ہیں۔",
    "NuraniHomes was founded to change that. We partner with established local developers to deliver Class A apartments at an affordable price, offered to overseas Pakistanis and international buyers under a clear and transparent process, with all the purchase paperwork organised for you.": "نورانی ہومز اسی کو بدلنے کے لیے قائم کیا گیا۔ ہم معروف مقامی ڈویلپرز کے ساتھ مل کر مناسب قیمت پر کلاس اے اپارٹمنٹس فراہم کرتے ہیں، جو بیرونِ ملک مقیم پاکستانیوں اور بین الاقوامی خریداروں کو ایک واضح اور شفاف طریقۂ کار کے تحت پیش کیے جاتے ہیں، اور خریداری کی تمام کاغذی کارروائی ہم آپ کے لیے کرتے ہیں۔",
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
    "On completion, your apartment is handed over and ownership is registered in your name. We organise all the paperwork, so you never need to deal with offices yourself.": "تعمیر مکمل ہونے پر اپارٹمنٹ آپ کے حوالے کیا جائے گا اور ملکیت آپ کے نام رجسٹر ہوگی۔ تمام کاغذی کارروائی ہم کرتے ہیں، آپ کو خود کسی دفتر کے چکر نہیں لگانے پڑیں گے۔",
    "This is our planned process. Full terms will be confirmed for each project before any booking is taken.": "یہ ہمارا منصوبہ بند طریقۂ کار ہے۔ ہر منصوبے کی مکمل شرائط کسی بھی بکنگ سے پہلے طے کی جائیں گی۔",
    "Our Promise": "ہمارا وعدہ",
    "Built on trust, designed for the families who build Pakistan from abroad.": "اعتماد پر قائم، اُن خاندانوں کے لیے جو بیرونِ ملک رہ کر پاکستان کو سنوارتے ہیں۔",
    "Questions": "سوالات",
    "Common questions": "عام سوالات",
    "Is registering my interest a booking?": "کیا دلچسپی درج کرنا بکنگ ہے؟",
    "No. Registering is free and does not commit you to anything. We never ask for payment on this website.": "نہیں۔ دلچسپی درج کرنا مفت ہے اور آپ پر کوئی پابندی نہیں ڈالتا۔ ہم اس ویب سائٹ پر کبھی ادائیگی نہیں مانگتے۔",
    "Who can buy?": "کون خرید سکتا ہے؟",
    "Anyone living and working outside Pakistan: overseas Pakistanis (including NICOP holders), Pakistan Origin Card holders and other foreign nationals. We will guide you through the right ownership route for your situation. We are starting with families in the UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain. We do not sell to buyers living in Pakistan.": "ہر وہ شخص جو پاکستان سے باہر رہتا اور کام کرتا ہے: بیرونِ ملک مقیم پاکستانی (بشمول نائیکوپ ہولڈرز)، پاکستان اوریجن کارڈ ہولڈرز اور دیگر غیر ملکی شہری۔ ہم آپ کی صورتحال کے مطابق ملکیت کے درست طریقے میں آپ کی رہنمائی کریں گے۔ ہم متحدہ عرب امارات، سعودی عرب، قطر، عمان، کویت اور بحرین میں مقیم خاندانوں سے آغاز کر رہے ہیں۔ ہم پاکستان میں مقیم خریداروں کو فروخت نہیں کرتے۔",
    "Who handles the paperwork?": "کاغذی کارروائی کون کرے گا؟",
    "We do. From your booking agreement through to registering ownership in your name, our team organises all the documentation for your purchase, so you don’t need to be in Pakistan or visit any offices yourself.": "ہم کریں گے۔ بکنگ کے معاہدے سے لے کر آپ کے نام ملکیت کی رجسٹریشن تک، ہماری ٹیم آپ کی خریداری کی تمام دستاویزات کا انتظام کرتی ہے، تاکہ آپ کو پاکستان آنے یا خود کسی دفتر جانے کی ضرورت نہ پڑے۔",
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
    "For buyers living outside Pakistan. Tell us what you’re looking for and our team will be in touch. It takes two minutes.": "پاکستان سے باہر مقیم خریداروں کے لیے۔ ہمیں بتائیں آپ کیا تلاش کر رہے ہیں، ہماری ٹیم آپ سے رابطہ کرے گی۔ اس میں صرف دو منٹ لگتے ہیں۔",
    "or email": "یا ای میل کریں",

    // Privacy page
    "Privacy": "پرائیویسی",
    "Privacy notice": "پرائیویسی نوٹس",
    "Read our privacy notice": "ہمارا پرائیویسی نوٹس پڑھیں",
    "Last updated: 25 September 2026": "آخری تازہ کاری: 25 ستمبر 2026",
    "Who we are": "ہم کون ہیں",
    "NuraniHomes is based in Dubai and is currently gauging interest in Class A homes at an affordable price in Karachi, for overseas Pakistanis and international buyers. You can contact us at":
      "نورانی ہومز دبئی میں قائم ہے اور فی الحال کراچی میں مناسب قیمت پر کلاس اے گھروں کے لیے بیرونِ ملک مقیم پاکستانیوں اور بین الاقوامی خریداروں کی دلچسپی کا اندازہ لگا رہا ہے۔ آپ ہم سے اس ای میل پر رابطہ کر سکتے ہیں:",
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
