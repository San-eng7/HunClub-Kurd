const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

//loading scrren
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  // minimum time (in milliseconds)
  const minTime = 3400; // 3.4 seconds

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // fade out time

  }, minTime);
});

const translations = {
    en: {
        home: "HOME",
        shop: "Shop",
        blog: "Blog",
        about: "About",
        contact: "Contact us",

        whyTitle: "Why Shop With Us",
        
        heroTitle: "Welcome to store",

        feature1: "Quality of product",
        feature2: "Delivery guarante",
        feature3: "Low shipping cost",
        feature4: "Affordable of price",
        feature5: "Trusted by Customers",
        feature6: "Money-Back Guarantee",

        productTitle: "Some of Our Products",
        productSubtitle: "To see all products, click the button",

        productCleaner: "Smart & effortless cleaning",
        productCerave: "Blue & green",
        productTeeth: "Whiter & cleaner teeth",
        productAirfreshDesc: "Whiter & healthier teeth",
        productSoap: "Clear, smooth & healthy skin",
        productVitamin: "Brighten & refresh your skin",
        productArgan: "Repair, strengthen, shine",
        productPerfumeWomen: "Women's perfume",
        productPerfumeMen: "Men's perfume",
        productDonkey: "Softens & smooths your skin",
        productCream: "Moisturizes & softens skin",
        productMakeup: "Smooth & natural finish",
        productLipglossDesc: "Glossy & radiant lips",
        productPatch: "Fast relief for muscle pain",
        productMoov: "Relieves muscle & joint pain",
        productSpeaker: "Portable powerful sound",
        goatDesc: "Soft & whitening",
        collagenDesc: "Brightens & supports collagen",
        p1: "Brightens & improves skin appearance",
        p2: "Cleans hands & hydrates skin",
        p3: "Fresh breath & clean teeth",
        p4: "Healthy gums & fresh breath",
        p5: "Fresh breath & clean teeth",
        p6: "Fresh breath & cavity protection",
        p7: "Bright & smooth skin",
        p8: "Bright & smooth skin",
        p9: "Bright & glowing skin",
        p10: "Bright & radiant skin",
        p11: "Hydrated & elastic skin",
        p12: "Soft & glowing skin",
        p13: "Bright & clear skin",
        p14: "Fresh & soothing skin",
        p15: "Fresh & soothing skin",
        p16: "Soft & nourished skin",
        perfume1: "Man perfume",
        perfume2: "Woman perfume",
        perfume3: "Man perfume",
        perfume4: "Man perfume",
        perfume5: "Man perfume",
        perfume8: "Woman perfume",
        perfume9: "Man perfume",
        perfume10: "Man perfume",     
        perfume11: "Man perfume",
        perfume12: "Man perfume",
        perfume13: "Woman perfume",
        perfume14: "Woman perfume",
        perfume15: "Man perfume",
        perfume16: "Man perfume",
        perfume17: "Woman perfume",
        perfume18: "Man perfume",
        perfume19: "Man perfume",
        perfume20: "Man perfume",
        perfume21: "Woman perfume",
        perfume22: "Man perfume",
        perfume23: "Man perfume",
        perfume24: "Man perfume",
        perfume25: "Long-lasting fresh scent",
        perfume26: "Fresh & pleasant car scent",

        orderTitle: "How to Order?",

        shopHeaderTitle: "Beauty & Cosmetics",
        shopHeaderSubtitle: "Explore our collection of cosmetics and beauty essentials.",

        electronicsHeaderTitle: "Consumer Electronics",
        electronicsHeaderSubtitle: "Explore the latest electronic products designed for everyday use and convenience.",

        perfumeHeaderTitle: "Perfume Collection",
        perfumeHeaderSubtitle: "Explore premium perfumes that define your style and personality.",

        homeHeaderTitle: "Home & Garden",
        homeHeaderSubtitle: "Discover practical and stylish products to improve your home and outdoor space.",

        aboutSmall: "Who We Are",
        aboutTitle: "About Our Stores",
        aboutText: "Discover our mission, our story, and why customers trust our products.",
        aboutBtn: "About Us",
        blogSmall: "Our Blog",
        blogTitle: "Tips Product Guides",
        blogText: "Read helpful articles about products, trends, and smart shopping.",
        blogBtn: "Visit Blog",

        bannerSmall: "Shop With Confidence",
        bannerTitle: 'Fast Delivery to <span>Kurdistan & All Iraq</span>',
        bannerBtn: "Explore More",

        socialTitle: "Our Social Media",
        socialDesc: "Order directly from our",

        footerContact: "Contact",
        footerAddress: "Address: Erbil & soran",

        footerHoursLabel: "Hours:",
        footerHours: "9:00 AM - 1:00 AM everyday",

        footerDeliveryLabel: "Delivery:",
        footerDelivery: "Monday • Thursday • Saturday",

        footerFollow: "Follow us",

        footerAbout: "About",
        footerAboutus: "About us",
        footerDeliveryinfo: "Delivery information",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms & Conditions",
        footerContactus: "Contact Us",

        footerStore: "Our Online Store",

        footerText1: "Quality products with delivery across Kurdistan and Iraq.",
        footerText2: "To order, send us a message on ",
        footerText3: "We usually reply within a few minutes.",
        footerText4: "If you have any questions about our products or delivery,",
        footerText5: "feel free to contact us through our social media pages.",

        footerCopy: "© 2026 Sanhan - HTML CSS Ecommerce Website",

        aboutPageTitle: "About Our Store",
        aboutPageText: "Learn more about our project and the journey behind this online store.",

        aboutStoreTitle: "About Our Stores",
        aboutStoreText1: "This website is an online store where customers can explore and discover different products. Our goal is to make online shopping simple, accessible, and convenient for everyone.",
        aboutStoreText2: "We focus on providing a smooth online experience and continuously improving the platform as we grow.",
        aboutStoreMarquee: "Our goal is to create a simple and reliable online shopping experience for everyone.",
        
        creatorTitle: "About the Creator",
        creatorText1: "This website was created by a Computer Science student at Salahaddin University – Erbil, who completed preparatory studies at Sorny Mixed School. He is passionate about learning business, markets, and building real-world projects..",
        creatorText2: "The project was developed as part of a personal journey to learn programming, design modern websites, and explore the world of technology.",
        creatorMarquee: "Our goal is to create a simple and reliable online shopping experience for everyone.",

        soranLabel: "Service Area",
        soranCity: "Soran",
        soranDesc: "Customers in Soran can easily order our products through our online store. We proudly serve customers across Iraq.",
        soranTime: "Saturday – Thursday\n9:00 AM – 12:00 AM",

        erbilLabel: "Service Area",
        erbilCity: "Erbil",
        erbilDesc: "Our products are available for customers in Erbil and surrounding areas. Orders are accepted online from anywhere in Iraq.",
        erbilTime: "Saturday – Thursday\n9:00 AM – 12:00 AM",

        contactPageTitle: "Contact",
        contactPageText: "We’d love to hear from you. Send us a message anytime.",

        contactFormLabel: "Send a Message",
        contactFormTitle: "We would love to hear from you",
        inputName: "Your name",
        inputContact: "E-mail or social media",
        inputSubject: "Subject",
        inputMessage: "Your message",
        submitBtn: "Submit",
        helperDesc: "<span>HELPER: 1</span>Marketing Manager responsible for managing the website.<br>Website Administrator",

        seeMore: "See More",

        blogHeaderTitle: "Read More",
        blogHeaderSubtitle: "Read all case studies about our products",

        blog1Title: "Simple Skincare Tips for Healthy & Glowing Skin",
        blog1Text: "Taking care of your skin doesn’t have to be complicated. Discover easy daily habits and the right products to keep your skin clean, fresh, and glowing.",

        blog2Title: "Simple Home Essentials for Everyday Comfort",
        blog2Text: "Discover practical products that make your home more comfortable and organized. Small changes can improve your daily life and living space.",

        blogBtn: "Continue Reading",

            },
    ku: {
        home: "سەرەکی",
        shop: "بازاڕ",
        blog: "بلۆگ",
        about: "دەربارە",
        contact: "پەیوەندی",

        heroTitle: "بەخێربێیت بۆ فرۆشگا",

        whyTitle: "بۆچی لە ئێمە بکڕیت؟",

        feature1: "کوالێتی بەرز",
        feature2: "گەیاندن گرەنتیە",
        feature3: " نرخی گەیاندن",
        feature4: "نرخی گونجاو",
        feature5: "متمانەی کڕیاران",
        feature6: "قەرەبووی پارە",

        productTitle: "هەندێک لە بەرهەمەکانمان",
        productSubtitle: "بۆ بینینی هەموو بەرهەمەکان، کیک لە زیاتر ببینە بکە",

        productCleaner: "پاکەرەوەی زیرەک و سمارت",
        productCerave: " غسول سیراڤی فەڕەنسی",
        productTeeth: "مەعجونی هۆلیود، سپیکردن",
        productAirfreshDesc: "سپیکردنی ددان و تەندروستتر",
        productSoap: "تایبات بە زیپکە، پەڵە ،سپیکردن،حەساسیە",
        productVitamin: "غسول :پێستی ڕووناک و تازە دەکات ",
        productArgan: "دژە هەڵوەرین، بەهێزکردن و درەوشان",
        productPerfumeWomen: "بۆنی خانمان",
        productPerfumeMen: "بۆنی پیاوان",
        productDonkey: "غسول: پێستی نەرم و سپی دەکات",
        productCream: "شێدارکەرەوە:پێستی سپی و نەرم دەکات",
        productMakeup: "دەرکەوتنێکی سرووشتی و نەرم",
        productLipglossDesc: "لێوی بریقەدارتر و درەوشاوەتر",
        productPatch: "ئازادکردنی خێرای ئازاری ماسولکە",
        productMoov: "ئازاری ماسولکە و جومگە کەم دەکات",
        p1: "شێدارکەرەوە: ڕووناکی و تەندروست بۆ پێست ",
        productSpeaker: "دەنگێکی بەهێز و ٧ دەنگی هەیە",
        goatDesc: "نەرمی و سپیبوون",
        collagenDesc: "ڕووناک دەکات و پشتگیری کۆلاجن",
        p2: "دەست پاک دەکات و پێست نەرم دەکات",
        p3: "دەمخۆشی تازە و ددان پاک",
        p4: "بۆ ئینتهاباتی پوک ، برین، خاوێنیش",
        p5: "دەمخۆشی تازە و ددان پاک",
        p6: "بۆنی دەم خۆش دەکات، خاوێنی ",
        p7: "زۆر گونجاوە بۆ پێستی چەور",
        p8: "سابونی قژ ",
        p9: "پێستێکی درەوشاوە و  بڕیقەدار",
        p10: "پێستێکی درەوشاوە و ڕوون و سپی",
        p11: "زۆر گونجاوە بۆ پێستی وشک ",
        p12: "پێستێکی نەرم و درەوشاوە و زیپکە ",
        p13: "پێستێکی پاک و ڕوون",
        p14: "خاوێنی ، سپیبوون",
        p15: "زەنجەفیل ، خاوێنی ، سافی",
        p16: "تایبەت بە سپی بوون",
        perfume1: "بۆ پیاوان",
        perfume2: "بۆ خانمان",
        perfume3: "بۆ پیاوان",
        perfume4: "بۆ پیاوان",
        perfume5: "بۆ خانمان",
        perfume8: "بۆ خانمان",
        perfume9: "بۆ پیاوان",
        perfume10: "بۆ پیاوان",
        perfume11: "بۆ پیاوان",
        perfume12: "بۆ پیاوان",
        perfume13: "بۆ خانمان",
        perfume14: "بۆ خانمان",
        perfume15: "بۆ پیاوان",
        perfume16: "بۆ پیاوان",
        perfume17: "بۆ خانمان",
        perfume18: "بۆ پیاوان",
        perfume19: "بۆ پیاوان",
        perfume20: "بۆ پیاوان",
        perfume21: "بۆ خانمان",
        perfume22: "بۆ پیاوان",
        perfume23: "بۆ پیاوان",
        perfume24: "بۆ پیاوان",
        perfume25: "بۆنی تازەی درێژخایەن",
        perfume26: "بۆنی خۆش بۆ ئۆتۆمبێل",
        
        orderTitle: "چۆن داوادەکەیت ؟",

        shopHeaderTitle: "جوانکاری و کۆسمەتیک",
        shopHeaderSubtitle: "کۆمەڵەی بەرهەمە جوانکاری و پێویستییەکانی جوانی ببینە.",

        electronicsHeaderTitle: "ئامێرە ئەلکترۆنیەکان ",
        electronicsHeaderSubtitle: "نوێترین بەرهەمە ئەلیکترۆنیەکان ببینە کە بۆ بەکارهێنانی ڕۆژانە و ئاسانکاری دروستکراون.",

        perfumeHeaderTitle: "کۆمەڵەی بۆنەکان",
        perfumeHeaderSubtitle: "بۆنە باڵاکان و کۆپیەکان ببینە کە ستایلی تایبەتی تۆ و کەسایەتی تۆ دەردەخەن.",

        homeHeaderTitle: "ماڵ و باخچە",
        homeHeaderSubtitle: "بەرهەمە کارامە و جوانەکان بدۆزەرەوە بۆ باشترکردنی ماڵ و شوێنی دەرەوە.",

        aboutSmall: "ئێمە کێین",
        aboutTitle: " دەربارەی فرۆشگاکانمانمان بزانە",
        aboutText: "ئامانج، چیرۆک و هۆکاری متمانەی کڕیاران بە کاڵاکانمان بدۆزەوە.",
        aboutBtn: "دەربارەی ئێمە",
        blogSmall: "بلۆگ",
        blogTitle: "ئامۆژگاری و ڕێنمایی کاڵا",
        blogText: "وتارە بەسوودەکان بخوێنەوە دەربارەی کاڵا و کڕینی زیرەکانە.",
        blogBtn: "سەردانی بلۆگ",

        bannerSmall: "بە متمانەوە بکڕە",
        bannerTitle: "گەیاندنی خێرا بۆ <span>کوردستان و تەواوی عێراق</span>",
        bannerBtn: "زیاتر ببینە",

        socialTitle: "سۆشیال میدیای ئێمە",
        socialDesc: "فرۆشتن بەردەستە تەنها لە ",
   
        footerContact: "پەیوەندی",
        footerAddress: "ناونیشان:سۆران&هەولێر",

        footerHoursLabel: "کات:",
        footerHours: "٩:٠٠ بەیانی تا ١:٠٠ شەو هەموو ڕۆژێک",

        footerDeliveryLabel: "گەیاندن:",
        footerDelivery: "دووشەممە • پێنجشەممە • شەممە",

        footerFollow: "فۆڵۆومان بکەن",

        footerAbout: "دەربارە",
        footerAboutus: "دەربارەی ئێمە",
        footerDeliveryinfo: "زانیاری گەیاندن",
        footerPrivacy: "سیاسەتی تایبەتی",
        footerTerms: "مەرج و ڕێسا",
        footerContactus: "پەیوەندی بکە",

        footerStore: "فرۆشگای ئۆنلاینمان",

        footerText1: "کاڵای کوالێتی لەگەڵ گەیاندن بۆ کوردستان و عێراق.",
        footerText2: "بۆ داواکاری نامە بنێرە لە ",
        footerText3: "زۆرجار لە چەند خولەکێکدا وەڵام دەدەینەوە.",
        footerText4: "ئەگەر پرسیارێکت هەیە دەربارەی کاڵا یان گەیاندن،",
        footerText5: "تکایە پەیوەندی بکە لە ڕێگای سۆشیال میدیاکانمان.",

        footerCopy: "© 2026 Sanhan - Hun Club Store",

        aboutPageTitle: "دەربارەی فرۆشگاکانمان",
        aboutPageText: "زیاتر بزانە دەربارەی ئەم پڕۆژەیە و گەشتی پشت ئەم فرۆشگایەی ئۆنلاین.",

        aboutStoreTitle: "دەربارەی فرۆشگاکانمان",
        aboutStoreText1: "ئەم ماڵپەڕە فرۆشگایەکی ئۆنلاینە کە کڕیاران دەتوانن کاڵا جیاوازەکان بدۆزنەوە و ببینن. ئامانجی ئێمە ئەوەیە کڕینی ئۆنلاین ئاسان و بەردەست بێت بۆ هەمووان.",
        aboutStoreText2: "ئێمە سەرنج دەدەین بە دروستکردنی ئەزموونێکی باشی ئۆنلاین و هەوڵ دەدەین بەردەوام ماڵپەڕەکە باشتر بکەین.",
        aboutStoreMarquee: "ئامانجی ئێمە دروستکردنی ئەزموونێکی ئاسان و متمانەپێکراوی کڕینی ئۆنلاینە بۆ هەمووان.",

        creatorTitle: "دەربارەی دروستکەر",
        creatorText1: "ئەم ماڵپەڕە دروستکراوە لەلایەن خوێندکارێکی زانستی کۆمپیوتەر لە زانکۆی سەلاحەدین – هەولێر کە خوێندنی ئامادەیی لە قوتابخانەی سۆرنی تێکەڵاو تەواو کرد ، حەزی بە شارەزابوون لە بزنس و بازار  و دروستکردنی پڕۆژەی ڕاستەقینە هەیە.",
        creatorText2: "ئەم پڕۆژەیە بەشێکە لە گەشتی تایبەتی بۆ فێربوونی پڕۆگرامینگ و دیزاینکردنی ماڵپەڕی مۆدێرن.",
        creatorMarquee: "ئامانجی ئێمە دروستکردنی ئەزموونێکی ئاسان و متمانەپێکراوی کڕینی ئۆنلاینە بۆ هەمووان.",

        soranLabel: "شوێنی خزمەتگوزاری",
        soranCity: "سۆران",
        soranDesc: "کڕیارانی سۆران دەتوانن بە ئاسانی کاڵاکانمان داوا بکەن لە ڕێگای فرۆشگای ئۆنلاین. ئێمە بە شانازییەوە خزمەت بە کڕیاران دەکەین لە سەرانسەری عێراق.",
        soranTime: "شەممە تا پێنجشەممە\n٩:٠٠ بەیانی – ١٢:٠٠ شەو",

        erbilLabel: "شوێنی خزمەتگوزاری",
        erbilCity: "هەولێر",
        erbilDesc: "کاڵاکانمان بەردەستن بۆ کڕیارانی هەولێر و ناوچەکانی دەوروبەر. داواکاری دەتوانرێت لە هەر شوێنێکی عێراقەوە بکرێت.",
        erbilTime: "شەممە تا پێنجشەممە\n٩:٠٠ بەیانی – ١٢:٠٠ شەو",

        contactPageTitle: "پەیوەندی",
        contactPageText: "دڵخۆش دەبین بە پەیامی بەرێەزتان. هەر کاتێک دەتوانیت پەیام بنێریت.",
        contactFormLabel: "ناردنی پەیام",
        contactFormTitle: "دڵخۆش دەبین بە پەیوەندیکردن لەگەڵت",
        inputName: "ناوت",
        inputContact: "ئیمەیل یان سۆشیال میدیا",
        inputSubject: "بابەت",
        inputMessage: "پەیامەکەت",
        submitBtn: "بنێرە",
        helperDesc: "<span>یارمەتیدەر: 1</span>بەڕێوەبەری مارکێتینگ بەرپرسیار لە بەڕێوەبردنی ماڵپەڕ.<br>بەڕێوەبەری ماڵپەڕ",

        seeMore: "زیاتر ببینە",

        blogHeaderTitle: "زیاتر بخوێنەوە",
        blogHeaderSubtitle: "هەموو توێژینەوەکان دەربارەی بەرهەمەکانمان بخوێنەوە",

        blog1Title: "ئامۆژگارییە سادەکان بۆ پێستێکی تەندروست و درەوشاوە",
        blog1Text: "چاودێریکردنی پێست پێویست ناکات ئاڵۆز بێت. عادەتی ڕۆژانەی ئاسان و بەرهەمی گونجاو بدۆزەرەوە بۆ ئەوەی پوستت پاک، تازە و درەوشاو بێت.",

        blog2Title: "پێویستییە سادەکانی ماڵ بۆ ئارامی ڕۆژانە",
        blog2Text: "بەرهەمە کارامەکان بدۆزەرەوە کە ماڵەکەت ئارامتر و ڕێکخراوتر دەکەن. گۆڕانکارییە بچووکەکان دەتوانن ژیانت باشتر بکەن.",

        blogBtn: "بەردەوام بخوێنەوە",

    },
    ar: {
        home: "الرئيسية",
        shop: "المتجر",
        blog: "المدونة",
        about: "من نحن",
        contact: "اتصل بنا",

        heroTitle: "مرحباً بكم في المتجر",

        whyTitle: "لماذا تتسوق معنا؟",

        feature1: "جودة عالية",
        feature2: "التوصيل مضمون",
        feature3: "أقل تكلفة شحن",
        feature4: "سعر مناسب",
        feature5: "موثوق من العملاء",
        feature6: "ضمان استرجاع الأموال",

        productTitle: "بعض منتجاتنا",
        productSubtitle: "لرؤية جميع المنتجات، اضغط على الزر",

        productCleaner: "تنظيف ذكي وسهل",
        productCerave: "أزرق وأخضر",
        productTeeth: "أسنان أكثر بياضًا ونظافة",
        productAirfreshDesc: "أسنان أكثر بياضًا وصحة",
        productSoap: "بشرة صافية وناعمة وصحية",
        productVitamin: "تفتيح وإنعاش البشرة",
        productArgan: "إصلاح وتقوية ولمعان",
        productPerfumeWomen: "عطر نسائي",
        productPerfumeMen: "عطر رجالي",
        productDonkey: "ينعم ويجعل بشرتك ناعمة",
        productCream: "يرطب ويجعل البشرة ناعمة",
        productMakeup: "مظهر ناعم وطبيعي",
        productLipglossDesc: "لێوی براق و درەوشاوە",
        productPatch: "تخفيف سريع لآلام العضلات",
        productMoov: "يخفف آلام العضلات والمفاصل",
        productSpeaker: "صوت قوي محمول",
        goatDesc: "نعومة وتفتيح",
        collagenDesc: "تفتيح ودعم الكولاجين",
        p1: "يفتح ويحسن مظهر البشرة",
        p2: "ينظف اليدين ويرطب البشرة",
        p3: "نفس منعش وأسنان نظيفة",
        p4: "لثة صحية ونفس منعش",
        p5: "نفس منعش وأسنان نظيفة",
        p6: "حماية من التسوس ونفس منعش",
        p7: "بشرة مشرقة وناعمة",
        p8: "بشرة مشرقة وناعمة",
        p9: "بشرة مشرقة ومتألقة",
        p10: "بشرة مشرقة ومضيئة",
        p11: "بشرة مرطبة ومرنة",
        p12: "بشرة ناعمة ومتألقة",
        p13: "بشرة صافية ومشرقة",
        p14: "بشرة منعشة ومهدئة",
        p15: "بشرة منعشة ومهدئة",
        p16: "بشرة ناعمة ومغذية",
        perfume1: "عطر رجالي",
        perfume2: "عطر نسائي",
        perfume3: "عطر رجالي",
        perfume4: "عطر رجالي",
        perfume5: "عطر رجالي",
        perfume8: "عطر نسائي",
        perfume9: "عطر رجالي",
        perfume10: "عطر رجالي",
        perfume11: "عطر رجالي",
        perfume12: "عطر رجالي",
        perfume13: "عطر نسائي",
        perfume14: "عطر نسائي",
        perfume15: "عطر رجالي",
        perfume16: "عطر رجالي",
        perfume17: "عطر نسائي",
        perfume18: "عطر رجالي",
        perfume19: "عطر رجالي",
        perfume20: "عطر رجالي",
        perfume21: "عطر نسائي",
        perfume22: "عطر رجالي",
        perfume23: "عطر رجالي",
        perfume24: "عطر رجالي",
        perfume25: "رائحة منعشة تدوم طويلاً",
        perfume26: "رائحة منعشة للسيارة",
        
        orderTitle: "كيف تطلب؟",

        shopHeaderTitle: "الجمال ومستحضرات التجميل",
        shopHeaderSubtitle: "استكشف مجموعتنا من مستحضرات التجميل ومنتجات العناية بالجمال.",

        electronicsHeaderTitle: "الإلكترونيات الاستهلاكية",
        electronicsHeaderSubtitle: "استكشف أحدث المنتجات الإلكترونية المصممة للاستخدام اليومي والراحة.",

        perfumeHeaderTitle: "مجموعة العطور",
        perfumeHeaderSubtitle: "استكشف العطور الفاخرة التي تعكس أسلوبك وشخصيتك.",

        homeHeaderTitle: "المنزل والحديقة",
        homeHeaderSubtitle: "اكتشف منتجات عملية وأنيقة لتحسين منزلك والمساحات الخارجية.",

        aboutSmall: "من نحن",
        aboutTitle: "تعرف أكثر على متجرنا",
        aboutText: "اكتشف رسالتنا وقصتنا ولماذا يثق العملاء بمنتجاتنا.",
        aboutBtn: "من نحن",
        blogSmall: "مدونتنا",
        blogTitle: "نصائح وأخبار ودليل المنتجات",
        blogText: "اقرأ مقالات مفيدة عن المنتجات والاتجاهات والتسوق الذكي.",
        blogBtn: "زيارة المدونة",

        bannerSmall: "تسوق بثقة",
        bannerTitle: "توصيل سريع إلى <span>كردستان وجميع العراق</span>",
        bannerBtn: "استكشف المزيد",

        socialTitle: "وسائل التواصل الخاصة بنا",
        socialDesc: "اطلب مباشرة من ",

        footerContact: "اتصل بنا",
        footerAddress: "العنوان: سوران &أربيل",

        footerHoursLabel: "ساعات العمل:",
        footerHours: "من الساعة ٩:٠٠ صباحًا إلى ١:٠٠ ليلًا كل يوم",

        footerDeliveryLabel: "التوصيل:",
        footerDelivery: "الاثنين • الخميس • السبت",

        footerFollow: "تابعنا",

        footerAbout: "حول",
        footerAboutus: "من نحن",
        footerDeliveryinfo: "معلومات التوصيل",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "الشروط والأحكام",
        footerContactus: "اتصل بنا",

        footerStore: "متجرنا الإلكتروني",

        footerText1: "منتجات عالية الجودة مع توصيل في كردستان والعراق.",
        footerText2: "للطلب أرسل لنا رسالة على ",
        footerText3: "نرد عادة خلال بضع دقائق.",
        footerText4: "إذا كان لديك أي سؤال حول المنتجات أو التوصيل،",
        footerText5: "لا تتردد في التواصل معنا عبر صفحاتنا على وسائل التواصل.",

        footerCopy: "© 2026 Sanhan - Hun Club Store",

        aboutPageTitle: "حول متجرنا",
        aboutPageText: "تعرف أكثر على مشروعنا والرحلة التي تقف خلف هذا المتجر الإلكتروني.",

        aboutStoreTitle: "حول متجرنا",
        aboutStoreText1: "هذا الموقع هو متجر إلكتروني حيث يمكن للعملاء استكشاف واكتشاف منتجات مختلفة. هدفنا هو جعل التسوق عبر الإنترنت بسيطًا ومتاحًا ومريحًا للجميع.",
        aboutStoreText2: "نركز على توفير تجربة تسوق سلسة عبر الإنترنت ونعمل على تحسين المنصة باستمرار مع نمو الموقع.",
        aboutStoreMarquee: "هدفنا هو إنشاء تجربة تسوق إلكترونية بسيطة وموثوقة للجميع.",

        creatorTitle: "حول المُنشئ",
        creatorText1: "هالموقع مسويه طالب علوم حاسوب بجامعة صلاح الدين – أربيل، ومكمل دراسته الإعدادية بثانوية سورني المختلطة. يحب يتعلم عن البزنس والسوق، وعنده شغف يسوي مشاريع حقيقية.",
        creatorText2: "تم تطوير هذا المشروع كجزء من رحلة شخصية لتعلم البرمجة وتصميم مواقع حديثة واستكشاف عالم التكنولوجيا.",
        creatorMarquee: "هدفنا هو إنشاء تجربة تسوق إلكترونية بسيطة وموثوقة للجميع.",

        soranLabel: "منطقة الخدمة",
        soranCity: "سوران",
        soranDesc: "يمكن لعملاء سوران طلب منتجاتنا بسهولة من خلال متجرنا الإلكتروني. نحن نخدم العملاء في جميع أنحاء العراق.",
        soranTime: "السبت – الخميس\n9:00 صباحًا – 12:00 ليلًا",

        erbilLabel: "منطقة الخدمة",
        erbilCity: "أربيل",
        erbilDesc: "منتجاتنا متوفرة لعملاء أربيل والمناطق المحيطة. يمكن طلب المنتجات عبر الإنترنت من أي مكان في العراق.",
        erbilTime: "السبت – الخميس\n9:00 صباحًا – 12:00 ليلًا",

        contactPageTitle: "اتصل بنا",
        contactPageText: "يسعدنا التواصل معك. أرسل لنا رسالة في أي وقت.",

        contactPageTitle: "اتصل بنا",
        contactPageText: "يسعدنا التواصل معك. أرسل لنا رسالة في أي وقت.",

        contactFormLabel: "إرسال رسالة",
        contactFormTitle: "يسعدنا التواصل معك",
        inputName: "اسمك",
        inputContact: "البريد الإلكتروني أو وسائل التواصل",
        inputSubject: "الموضوع",
        inputMessage: "رسالتك",
        submitBtn: "إرسال",
        helperDesc: "<span>المساعد: 1</span>مدير التسويق المسؤول عن إدارة الموقع.<br>مسؤول الموقع",

        blogHeaderTitle: "اقرأ المزيد",
        blogHeaderSubtitle: "اقرأ جميع الدراسات المتعلقة بمنتجاتنا",

        blog1Title: "نصائح بسيطة للعناية بالبشرة الصحية والمشرقة",
        blog1Text: "العناية ببشرتك لا تحتاج أن تكون معقدة. اكتشف عادات يومية سهلة والمنتجات المناسبة للحفاظ على بشرتك نظيفة ومنتعشة ومشرقة.",

        blog2Title: "أساسيات منزلية بسيطة لراحة يومية",
        blog2Text: "اكتشف منتجات عملية تجعل منزلك أكثر راحة وتنظيماً. التغييرات الصغيرة يمكن أن تحسن حياتك اليومية.",

        blogBtn: "متابعة القراءة",

        seeMore: "شاهد المزيد"
    }
};

    function translate(id, text, html = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) {
        el.innerHTML = text;
    } else {
        el.innerText = text;
    }
}

function setLanguage(lang) {

//navbar
translate("nav-home", translations[lang].home);
translate("nav-shop", translations[lang].shop);
translate("nav-blog", translations[lang].blog);
translate("nav-about", translations[lang].about);
translate("nav-contact", translations[lang].contact);

//hero content
translate("hero-title", translations[lang].heroTitle);
//why
translate("why-title", translations[lang].whyTitle);

//features
translate("feature-1", translations[lang].feature1);
translate("feature-2", translations[lang].feature2);
translate("feature-3", translations[lang].feature3);
translate("feature-4", translations[lang].feature4);
translate("feature-5", translations[lang].feature5);
translate("feature-6", translations[lang].feature6);

//products
translate("product-title", translations[lang].productTitle);
translate("product-subtitle", translations[lang].productSubtitle);

translate("electronics-header-title", translations[lang].electronicsHeaderTitle);
translate("electronics-header-subtitle", translations[lang].electronicsHeaderSubtitle);

translate("perfume-header-title", translations[lang].perfumeHeaderTitle);
translate("perfume-header-subtitle", translations[lang].perfumeHeaderSubtitle);

translate("home-header-title", translations[lang].homeHeaderTitle);
translate("home-header-subtitle", translations[lang].homeHeaderSubtitle);

//section product
translate("shop-header-title", translations[lang].shopHeaderTitle);
translate("shop-header-subtitle", translations[lang].shopHeaderSubtitle);

//products
translate("product-cleaner", translations[lang].productCleaner);
translate("product-cerave", translations[lang].productCerave);
translate("product-teeth", translations[lang].productTeeth);
translate("product-airfresh-desc", translations[lang].productAirfreshDesc);
translate("product-soap", translations[lang].productSoap);
translate("product-vitamin", translations[lang].productVitamin);
translate("product-argan", translations[lang].productArgan);
translate("product-perfume-women", translations[lang].productPerfumeWomen);
translate("product-perfume-men", translations[lang].productPerfumeMen);
translate("product-donkey", translations[lang].productDonkey);
translate("product-cream", translations[lang].productCream);
translate("product-makeup", translations[lang].productMakeup);
translate("product-lipgloss-desc", translations[lang].productLipglossDesc);
translate("product-patch", translations[lang].productPatch);
translate("product-moov", translations[lang].productMoov);
translate("product-speaker", translations[lang].productSpeaker);
translate("product-goat-desc", translations[lang].goatDesc);
translate("product-collagen-desc", translations[lang].collagenDesc);
translate("product-desc-1", translations[lang].p1);
translate("product-desc-2", translations[lang].p2);
translate("product-desc-3", translations[lang].p3);
translate("product-desc-4", translations[lang].p4);
translate("product-desc-5", translations[lang].p5);
translate("product-desc-6", translations[lang].p6);
translate("product-desc-7", translations[lang].p7);
translate("product-desc-8", translations[lang].p8);
translate("product-desc-9", translations[lang].p9);
translate("product-desc-10", translations[lang].p10);
translate("product-desc-11", translations[lang].p11);
translate("product-desc-12", translations[lang].p12);
translate("product-desc-13", translations[lang].p13);
translate("product-desc-14", translations[lang].p14);
translate("product-desc-15", translations[lang].p15);
translate("product-desc-16", translations[lang].p16);
translate("perfume-1", translations[lang].perfume1);
translate("perfume-2", translations[lang].perfume2);
translate("perfume-3", translations[lang].perfume3);
translate("perfume-4", translations[lang].perfume4);
translate("perfume-5", translations[lang].perfume5);
translate("perfume-6", translations[lang].perfume6);
translate("perfume-7", translations[lang].perfume7);
translate("perfume-8", translations[lang].perfume8);
translate("perfume-9", translations[lang].perfume9);
translate("perfume-10", translations[lang].perfume10);
translate("perfume-11", translations[lang].perfume11);
translate("perfume-12", translations[lang].perfume12);
translate("perfume-13", translations[lang].perfume13);
translate("perfume-14", translations[lang].perfume14);
translate("perfume-15", translations[lang].perfume15);
translate("perfume-16", translations[lang].perfume16);
translate("perfume-17", translations[lang].perfume17);
translate("perfume-18", translations[lang].perfume18);
translate("perfume-19", translations[lang].perfume19);
translate("perfume-20", translations[lang].perfume20);
translate("perfume-21", translations[lang].perfume21);
translate("perfume-22", translations[lang].perfume22);
translate("perfume-23", translations[lang].perfume23);
translate("perfume-24", translations[lang].perfume24);
translate("perfume-25", translations[lang].perfume25);
translate("perfume-26", translations[lang].perfume26);

//how order
translate("order-title", translations[lang].orderTitle);

//about & blog
translate("about-small", translations[lang].aboutSmall);
translate("about-title", translations[lang].aboutTitle);
translate("about-text", translations[lang].aboutText);
translate("about-btn", translations[lang].aboutBtn);
translate("blog-small", translations[lang].blogSmall);
translate("blog-title", translations[lang].blogTitle);
translate("blog-text", translations[lang].blogText);
translate("blog-btn", translations[lang].blogBtn);

//banner
translate("banner-small", translations[lang].bannerSmall);
translate("banner-title", translations[lang].bannerTitle, true);
translate("banner-btn", translations[lang].bannerBtn);

//social
translate("social-title", translations[lang].socialTitle);
translate("social-desc", translations[lang].socialDesc);

//footer
translate("footer-contact", translations[lang].footerContact);
translate("footer-address", translations[lang].footerAddress);
translate("footer-hours-label", translations[lang].footerHoursLabel);
translate("footer-hours", translations[lang].footerHours);
translate("footer-delivery-label", translations[lang].footerDeliveryLabel);
translate("footer-delivery", translations[lang].footerDelivery);
translate("footer-follow", translations[lang].footerFollow);

translate("footer-about", translations[lang].footerAbout);
translate("footer-aboutus", translations[lang].footerAboutus);
translate("footer-deliveryinfo", translations[lang].footerDeliveryinfo);
translate("footer-privacy", translations[lang].footerPrivacy);
translate("footer-terms", translations[lang].footerTerms);
translate("footer-contactus", translations[lang].footerContactus);

translate("footer-store", translations[lang].footerStore);

translate("footer-text1", translations[lang].footerText1);
translate("footer-text2", translations[lang].footerText2);
translate("footer-text3", translations[lang].footerText3);
translate("footer-text4", translations[lang].footerText4);
translate("footer-text5", translations[lang].footerText5);

translate("footer-copy", translations[lang].footerCopy);

translate("aboutpage-title", translations[lang].aboutPageTitle);
translate("aboutpage-text", translations[lang].aboutPageText);

//about store
translate("aboutstore-title", translations[lang].aboutStoreTitle);
translate("aboutstore-text1", translations[lang].aboutStoreText1);
translate("aboutstore-text2", translations[lang].aboutStoreText2);
translate("aboutstore-marquee", translations[lang].aboutStoreMarquee);

//creator
translate("creator-title", translations[lang].creatorTitle);
translate("creator-text1", translations[lang].creatorText1);
translate("creator-text2", translations[lang].creatorText2);
translate("creator-marquee", translations[lang].creatorMarquee);

//soran
translate("soran-label", translations[lang].soranLabel);
translate("soran-city", translations[lang].soranCity);
translate("soran-desc", translations[lang].soranDesc);
translate("soran-time", translations[lang].soranTime);

//erbil
translate("erbil-label", translations[lang].erbilLabel);
translate("erbil-city", translations[lang].erbilCity);
translate("erbil-desc", translations[lang].erbilDesc);
translate("erbil-time", translations[lang].erbilTime);

//top contact
translate("contactpage-title", translations[lang].contactPageTitle);
translate("contactpage-text", translations[lang].contactPageText);
//form details
translate("contact-form-label", translations[lang].contactFormLabel);
translate("contact-form-title", translations[lang].contactFormTitle);
translate("submit-btn", translations[lang].submitBtn);
//footer
translate("input-name", translations[lang].inputName, "placeholder");
translate("input-contact", translations[lang].inputContact, "placeholder");
translate("input-subject", translations[lang].inputSubject, "placeholder");
translate("input-message", translations[lang].inputMessage, "placeholder");
translate("helper-desc", translations[lang].helperDesc, "html");
// button
translate("btn-see-more", translations[lang].seeMore);

// header
translate("blog-header-title", translations[lang].blogHeaderTitle);
translate("blog-header-subtitle", translations[lang].blogHeaderSubtitle);

// blog 1
translate("blog1-title", translations[lang].blog1Title);
translate("blog1-text", translations[lang].blog1Text);
translate("blog1-btn", translations[lang].blogBtn);

// blog 2
translate("blog2-title", translations[lang].blog2Title);
translate("blog2-text", translations[lang].blog2Text);
translate("blog2-btn", translations[lang].blogBtn);
    
localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("language-select");
    const selected = document.querySelector(".selected-language");
    const list = document.querySelector(".language-list");
    const items = document.querySelectorAll(".language-item");

    const savedLang = localStorage.getItem("language") || "en";

    applyLanguage(savedLang);

    // When REAL select changes (translator trigger)
    select.addEventListener("change", function () {
        const lang = this.value;
        localStorage.setItem("language", lang);
        applyLanguage(lang);
    });

    // Toggle dropdown
    selected.addEventListener("click", () => {
        list.style.display = list.style.display === "block" ? "none" : "block";
    });

    // Custom UI click
    items.forEach(item => {
        item.addEventListener("click", () => {
            const value = item.dataset.value;

            // Update select
            select.value = value;

            // Trigger change (translator + storage)
            select.dispatchEvent(new Event("change"));

            list.style.display = "none";
        });
    });


    function applyLanguage(lang) {

        // update select
        select.value = lang;

        // update custom UI (flag + text)
        const activeItem = document.querySelector(`.language-item[data-value="${lang}"]`);
        if (activeItem) {
            selected.innerHTML = activeItem.innerHTML;
        }

        // call your translator
        setLanguage(lang);
    }

});
