/**
 * Ismail Mahmoud Mohamed - Advanced Interactive Portfolio Engine
 * Features:
 * - Dynamic Neural & Data Particle Background Canvas (Interactive Constellation)
 * - Inside / Outside Perspective Showcase (Executive Dashboards vs Code & SQL Pipelines)
 * - Live Interactive Data Analytics Sandbox (Real-time recalculation & animated chart rendering)
 * - Interactive Hacker / Developer CLI Terminal Modal with Matrix Rain
 * - 3D Perspective Card Tilt & Cursor Spotlight
 * - Web Audio API Futuristic Sound Synthesizer (Toggleable)
 * - Bilingual Real-time Translation (English / Arabic RTL)
 * - Top Scroll Progress Bar & Dynamic Typing
 * - Full Modal Lightboxes & Case Study Multi-Screen Gallery
 */

// --- 1. COMPREHENSIVE TRANSLATION DICTIONARY (EN / AR) ---
const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_sandbox: "Live Sandbox",
    nav_certificates: "Certificates",
    nav_skills: "Skills",
    nav_contact: "Contact",
    btn_resume: "CV",
    btn_lets_talk: "Let's Talk",

    hero_status: "Open to Data Science & Analytics Opportunities",
    hero_greeting: "Hello, I'm",
    hero_i_am: "I am a",
    hero_bio: "Data Science & Analytics specialist skilled in transforming complex, real-world datasets into strategic business intelligence. Experienced in end-to-end pipelines: EDA, data cleaning, statistical modeling, machine learning, and interactive Power BI dashboards.",
    hero_btn_projects: "Explore Projects",
    hero_btn_cv: "Download CV",
    hero_connect: "Connect with me:",

    metric_records: "Records Processed & Cleaned",
    metric_records_sub: "99.2% Data Cleanliness Rate",
    metric_encounters: "Patient Encounters Modeled",
    metric_encounters_sub: "Across 5,855+ Providers",
    metric_car_sales: "Car Sales Records Analyzed",
    metric_car_sales_sub: "Pricing & Regional Trends",
    metric_icpc: "Algorithmic Problems Solved",
    metric_icpc_sub: "Codeforces & ICPC Contests",

    tag_about: "DISCOVER MY STORY",
    about_title_1: "About",
    about_title_2: "Me",
    about_subtitle: "Academic foundation combined with intensive practical training and real-world analytical modeling.",
    edu_title: "Education & Academic Excellence",
    edu_degree: "Bachelor of Science in Computer Science",
    edu_faculty: "Faculty of Computers and Information — Assiut University",
    edu_gpa: "GPA: 3.71 / 4.0",
    edu_grade: "(Excellent with Honors)",
    about_p1: "I am a passionate Data Science and Data Analytics specialist located in Cairo, Egypt. My focus is on turning raw, unstructured data into clear, actionable stories that empower stakeholders to optimize performance and reduce operational costs.",
    about_p2: "With a solid Computer Science background, I combine rigorous algorithmic problem-solving skills with practical expertise in exploratory data analysis (EDA), statistical modeling, machine learning algorithms, and interactive business intelligence dashboards.",
    fact_location: "Cairo, Egypt",
    fact_languages: "Arabic (Native) | English (Proficient)",
    fact_status: "Available for Full-time & Remote",

    pillar_1_title: "Data Cleaning & Wrangling",
    pillar_1_desc: "Handling missing values, outlier treatment, feature scaling, and preprocessing large datasets in Python (Pandas, NumPy) and SQL Server.",
    pillar_2_title: "Business Intelligence & DAX",
    pillar_2_desc: "Crafting relational data models (Star Schema), calculated measures using DAX, and executive Power BI / Tableau dashboards with rich KPIs.",
    pillar_3_title: "Machine Learning & Modeling",
    pillar_3_desc: "Supervised and unsupervised models, feature importance extraction, regression, classification, neural networks, and statistical inference.",
    pillar_4_title: "Competitive Problem Solving",
    pillar_4_desc: "Over 500 algorithmic challenges solved on Codeforces, top 30% ranking in national ICPC qualification contests, ensuring optimal code performance.",

    tag_experience: "CAREER TRAJECTORY",
    exp_title_1: "Professional",
    exp_title_2: "Experience",
    exp_subtitle: "Internships, specialized governmental initiatives, and competitive training.",
    exp1_role: "Data Science Trainee",
    exp1_company: "Digital Egypt Pioneers Initiative (DEPI)",
    exp1_b1: "Cleaned and analyzed complex datasets across 2 major projects using Python (Pandas, NumPy, Matplotlib).",
    exp1_b2: "Analyzed 23K+ automotive sales records to uncover pricing dynamics, manufacturer trends, and regional purchasing behaviors.",
    exp1_b3: "Analyzed 3.5K+ coffee transactions to identify peak rush hours, sales velocity, and payment method patterns.",
    exp1_b4: "Expanding capabilities in advanced SQL, Machine Learning pipelines, and predictive modeling.",

    exp2_role: "Data Entry & Administrative Specialist",
    exp2_company: "RAAKAA LTD — Oman",
    exp2_b1: "Managed, validated, and maintained commercial catalog data utilizing Zid platform, Airtable, and Microsoft Excel.",
    exp2_b2: "Entered, organized, updated, and audited high-volume product listings, inventory quantities, and financial sales records.",
    exp2_b3: "Streamlined operational reporting workflows, ensuring 100% data fidelity across e-commerce channels.",

    exp3_role: "AI & Machine Learning Trainee",
    exp3_company: "Information Technology Institute (ITI)",
    exp3_b1: "Developed an end-to-end Food Delivery analytics and machine learning solution using Python, applying data preprocessing, EDA, and predictive modeling.",
    exp3_b2: "Mastered Machine Learning algorithms, Deep Learning concepts, Neural Networks, Linear Algebra, and Statistical Inference.",
    exp3_b3: "Graduated successfully with 120 hours of hands-on project-based engineering.",

    exp4_role: "Data Analyst Trainee",
    exp4_company: "National Telecommunication Institute (NTI)",
    exp4_b1: "Engineered a multi-page interactive Healthcare Analytics Dashboard in Power BI analyzing provider operations, patient encounters, clinical conditions, and financial metrics.",
    exp4_b2: "Applied SQL Server, Power Query, and Power BI for data extraction, transformation, data modeling (Star Schema), and DAX measures.",
    exp4_b3: "Completed 120 intensive hours and received top certificate with a perfect 100% score.",

    exp5_role: "Competitive Programmer",
    exp5_company: "International Collegiate Programming Contest (ICPC)",
    exp5_b1: "Solved over 500 algorithmic and mathematical problems on Codeforces, sharpening analytical thinking and algorithm efficiency.",
    exp5_b2: "Ranked among the top 30% in the national ICPC ACPC qualification contest, receiving Honorable Mention.",

    tag_projects: "HANDS-ON PORTFOLIO",
    proj_title_1: "Featured",
    proj_title_2: "Projects",
    proj_subtitle: "Real-world business analytics, machine learning pipelines, and executive dashboards with verified metrics.",
    filter_all: "All Projects",
    filter_bi: "Power BI & Dashboards",
    filter_ml: "Machine Learning & EDA",
    filter_scraping: "Web Scraping & ETL",

    view_outside: "Outside View (Executive Dashboards & KPIs)",
    view_inside: "Inside View (Under The Hood: SQL, Python & Pipelines)",
    perspective_hint: "Toggle between executive business dashboards and technical engineering pipelines!",
    badge_star_project: "★ Featured Capstone",
    btn_view_gallery: "View Full Gallery (9 Images)",
    btn_deep_dive: "Case Study & Gallery",
    btn_zoom: "View Image",
    btn_preview: "Preview Dashboard",
    btn_inspect_code: "Inside Pipeline",

    p1_title: "Healthcare Operational & Clinical Analytics Dashboard",
    p1_desc: "Comprehensive healthcare intelligence system modeling operational, demographic, and financial data covering 5,855+ medical providers and 53,000+ patient encounters.",
    p1_h1: "Built 12 dynamic KPI metrics in Power BI using advanced DAX.",
    p1_h2: "Identified potential 8% cost reduction across $895M+ in patient expenses.",
    p1_h3: "Constructed a robust Star Schema relational model with 11 interlinked tables.",
    p1_h4: "Integrated Python ML feature importance models for patient risk prediction.",

    p2_title: "Food Delivery Delay Optimization & Predictive Analytics",
    p2_desc: "Full-cycle data science solution analyzing 45,593 records across 20 attributes to predict delivery delays, optimize fleet dispatch, and evaluate order clustering during peak periods.",
    p2_h1: "Achieved 99.2% data cleanliness by systematically resolving anomalies.",
    p2_h2: "Engineered preparation time & spatial distance features, reducing delay metrics by 15%.",
    p2_h3: "Executed correlation matrices & regression models to balance peak order loads.",

    p3_title: "Automotive Sales & Pricing Dynamics Intelligence",
    p3_desc: "In-depth market intelligence project processing 23,000+ car sales records to map price depreciation trends across vehicle age and brand market dominance.",
    p3_h1: "Extracted price elasticity and resale depreciation curves across leading brands.",
    p3_h2: "Identified key regional sales drivers and high-demand automobile segments.",

    p4_title: "Retail POS & Consumer Behavior Analytics",
    p4_desc: "Exploratory data study on 3,500+ commercial coffee shop transactions, modeling customer ordering velocity, peak staffing hours, and cashless payment adoptions.",
    p4_h1: "Determined hourly rush velocity to optimize barista scheduling and inventory readiness.",
    p4_h2: "Analyzed revenue correlation between product categories and payment types.",

    p5_title: "Automated Web Scraping & Data Pipeline",
    p5_desc: "Custom Python web scraper that systematically extracts, normalizes, and stores catalog datasets across 50 dynamic web pages, delivering production-grade clean CSV outputs.",
    p5_h1: "Extracted 1,000+ structured book entries with automated pagination handling.",
    p5_h2: "Delivered 100% complete CSV datasets with zero missing values or data corruption.",

    tag_sandbox: "INTERACTIVE EXPLORATION",
    sandbox_title_1: "Live Data",
    sandbox_title_2: "Sandbox",
    sandbox_subtitle: "Experience real data analytics dynamically. Switch scenarios, filter cohorts, and watch KPIs recalculate in real-time.",
    sb_tab_healthcare: "Healthcare Operations ($895M)",
    sb_tab_food: "Food Delivery (45.5K Orders)",
    sb_tab_cars: "Automotive Sales (23K Records)",
    sb_tab_coffee: "Coffee POS (3.5K Transactions)",
    sb_insight_title: "Automated Analytical Takeaway:",
    sb_rerun: "Recalculate Slice",

    tag_certificates: "OFFICIAL ACCREDITATIONS",
    cert_title_1: "Licenses &",
    cert_title_2: "Certificates",
    cert_subtitle: "Verified certificates from leading Egyptian institutes and international contests.",
    cert_ribbon_top: "100% Top Score",
    btn_view_cert: "Enlarge Certificate",
    btn_view: "View",
    btn_pdf: "Download PDF",

    cert1_name: "Advanced Data Analytics — Summer Training",
    cert1_desc: "Awarded by the National Telecommunication Institute (NTI) and ITIDA. Successfully completed 120 hours of hands-on data cleaning, SQL transformation, Power BI, and DAX dashboard development with a perfect 100% score (Student ID: 231567).",

    cert2_name: "ICPC ACPC Kickoff Contest — Honorable Mention",
    cert2_desc: "Awarded to Ismail Abo Zaid by the ICPC Executive Director William B. Poucher (Assiut University) for distinguished algorithmic problem solving and placement in the top 30% nationally.",

    cert3_name: "ITIDA Gigs Freelance Training Graduate",
    cert3_desc: "Graduated from the intensive 3-month ITIDA Gigs freelance training program, certifying professional skills in client communication, remote contract delivery, and technical project execution.",

    tag_skills: "TECHNICAL TOOLKIT",
    skills_title_1: "Skills &",
    skills_title_2: "Competencies",
    skills_subtitle: "Comprehensive breakdown of programming languages, analytics libraries, and BI tools.",
    cat_prog: "Programming & Querying",
    cat_analysis: "Data Analysis & Modeling",
    cat_bi: "Business Intelligence & Viz",
    cat_ml: "Machine Learning & AI",
    cat_tools: "Scraping, Tools & Platforms",
    cat_soft: "Professional Soft Skills",

    soft1: "Problem Solving & Critical Thinking",
    soft2: "Leadership & Team Coordination",
    soft3: "Communication & Presentation",
    soft4: "Adaptability & Fast Learning",
    soft5: "Time Management Under Pressure",

    tag_contact: "START A CONVERSATION",
    contact_title_1: "Let's Connect &",
    contact_title_2: "Collaborate",
    contact_subtitle: "Available for full-time positions, internships, and freelance data analytics projects.",
    contact_direct_title: "Direct Contact Information",
    contact_direct_desc: "Feel free to reach out directly via phone, WhatsApp, email, or LinkedIn. I typically respond within a few hours.",
    contact_email_lbl: "Email Address",
    contact_phone_lbl: "Phone & WhatsApp",
    contact_location_lbl: "Location",
    contact_location_val: "Cairo, Egypt (Open to Remote Globally)",
    contact_cv_prompt: "Need my complete resume?",
    contact_cv_sub: "Download the official PDF format.",
    btn_download_cv: "Download CV",

    form_title: "Send Me a Message",
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject / Project Type",
    form_message: "Message",
    form_send_btn: "Send Message",

    footer_tagline: "Ismail Mahmoud Mohamed — Transforming data into strategic intelligence."
  },

  ar: {
    nav_about: "عنّي",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_sandbox: "مختبر البيانات",
    nav_certificates: "الشهادات",
    nav_skills: "المهارات",
    nav_contact: "تواصل معي",
    btn_resume: "السيرة الذاتية",
    btn_lets_talk: "تواصل الآن",

    hero_status: "متاح لفرص العمل في علم وتحليل البيانات",
    hero_greeting: "أهلاً بك، أنا",
    hero_i_am: "أنا",
    hero_bio: "متخصص في علم البيانات وتحليل البيانات، ماهر في تحويل مجموعات البيانات المعقدة والواقعية إلى قرارات استراتيجية ورؤى تنفيذية. أمتلك خبرة شاملة في معالجة وتنظيف البيانات، الاستكشاف الإحصائي (EDA)، النمذجة التنبؤية، وبناء لوحات التحكم التفاعلية في Power BI.",
    hero_btn_projects: "استكشف المشاريع",
    hero_btn_cv: "تحميل السيرة الذاتية",
    hero_connect: "تواصل معي عبر:",

    metric_records: "سجل بيانات تم تنظيفه وتحليله",
    metric_records_sub: "نسبة نظافة بيانات 99.2%",
    metric_encounters: "زيارة طبية تمت نمذجتها",
    metric_encounters_sub: "تغطي 5,855+ مقدم رعاية صحية",
    metric_car_sales: "سجل مبيعات سيارات تم تحليله",
    metric_car_sales_sub: "دراسة الأسعار والاتجاهات الإقليمية",
    metric_icpc: "مسألة برمجية تم حلها بنجاح",
    metric_icpc_sub: "مسابقات Codeforces و ICPC",

    tag_about: "نبذة عن مسيرتي",
    about_title_1: "من",
    about_title_2: "أنا",
    about_subtitle: "أساس أكاديمي راسخ في علوم الحاسب مدعوم بتدريب عملي ومشاريع تحليلية تطبيقية.",
    edu_title: "التعليم والتميز الأكاديمي",
    edu_degree: "بكالوريوس علوم الحاسب والمعلومات",
    edu_faculty: "كلية الحاسبات والمعلومات — جامعة أسيوط",
    edu_gpa: "المعدل التراكمي: 3.71 / 4.0",
    edu_grade: "(ممتاز مع مرتبة الشرف)",
    about_p1: "أنا إسماعيل محمود محمد، متخصص في علم البيانات وتحليل الأعمال ومقيم في القاهرة، مصر. شغفي يكمن في تحويل البيانات الخام المبعثرة إلى قصص ورؤى دقيقة تساعد صناع القرار على تقليل النفقات التشغيلية ومضاعفة الأرباح.",
    about_p2: "من خلال خلفيتي في علوم الحاسب وخبرتي في البرمجة التنافسية، أجمع بين التفكير الخوارزمي المنطقي القوي والمهارات التطبيقية في تحليل واستكشاف البيانات (EDA)، بناء نماذج الذكاء الاصطناعي، وتطوير لوحات Power BI التفاعلية.",
    fact_location: "القاهرة، مصر",
    fact_languages: "العربية (اللغة الأم) | الإنجليزية (إتقان مهني)",
    fact_status: "متاح للعمل بدوام كامل أو عن بُعد",

    pillar_1_title: "تنظيف وهندسة البيانات (Data Wrangling)",
    pillar_1_desc: "معالجة القيم المفقودة، التخلص من القيم الشاذة، وهندسة الخصائص باستخدام بايثون (Pandas, NumPy) وقواعد بيانات SQL Server.",
    pillar_2_title: "ذكاء الأعمال ولوحات Power BI & DAX",
    pillar_2_desc: "بناء النماذج العلائقية (Star Schema)، كتابة معادلات DAX المتقدمة، وتصميم لوحات تحكم تنفيذية تركز على مؤشرات الأداء الرئيسية.",
    pillar_3_title: "تعلم الآلة والنماذج التنبؤية (Machine Learning)",
    pillar_3_desc: "تدريب نماذج التصنيف والانحدار، استخراج الخصائص المؤثرة، والشبكات العصبية باستخدام خوارزميات الذكاء الاصطناعي.",
    pillar_4_title: "حل المشكلات والبرمجة التنافسية (ICPC)",
    pillar_4_desc: "حل أكثر من 500 مسألة خوارزمية على منصة Codeforces، وتصنيف ضمن أفضل 30% على مستوى الجمهورية في تصفيات ICPC.",

    tag_experience: "المسار المهني والتدريبي",
    exp_title_1: "الخبرات",
    exp_title_2: "المهنية",
    exp_subtitle: "تدريبات ومبادرات حكومية متقدمة ومسابقات تنافسية.",
    exp1_role: "متدرب علم بيانات (Data Science Trainee)",
    exp1_company: "مبادرة رواد مصر الرقمية (DEPI)",
    exp1_b1: "تنظيف وتحليل مجموعات بيانات ضخمة عبر مشروعين باستخدام بايثون (Pandas, NumPy, Matplotlib).",
    exp1_b2: "تحليل أكثر من 23 ألف سجل لمبيعات السيارات وتحديد اتجاهات الأسعار، والماركات، والمناطق الجغرافية.",
    exp1_b3: "تحليل 3,500+ معاملة بيع لمقهى لتحديد ساعات الذروة، ونمو الإيرادات، وأنماط الدفع المفضلة.",
    exp1_b4: "تطوير مهارات متقدمة في استعلامات SQL، وهندسة نماذج تعلم الآلة التنبؤية.",

    exp2_role: "أخصائي إدخال بيانات وعمليات إدارية",
    exp2_company: "شركة راكاء (RAAKAA LTD) — سلطنة عمان",
    exp2_b1: "إدارة وتدقيق بيانات المنتجات والمبيعات بالاعتماد على منصة زد (Zid) و Airtable و Microsoft Excel.",
    exp2_b2: "إدخال وتنظيم وتحديث قوائم المنتجات وجداول المخزون والسجلات التجارية بدقة عالية.",
    exp2_b3: "دعم العمليات الإدارية وسرعة تدفق بيانات التجارة الإلكترونية بنسبة دقة 100%.",

    exp3_role: "متدرب ذكاء اصطناعي وتعلم آلة",
    exp3_company: "معهد تكنولوجيا المعلومات (ITI)",
    exp3_b1: "تطوير مشروع متكامل لتحليل بيانات توصيل الطعام (Food Delivery) وبناء نماذج تنبؤية باستخدام لغة بايثون.",
    exp3_b2: "تطبيق تقنيات تعلم الآلة والتعلم العميق، والشبكات العصبية، ومفاهيم الجبر الخطي في حل المشكلات الواقعية.",
    exp3_b3: "إتمام 120 ساعة تدريبية مكثفة بنجاح في مجالات الذكاء الاصطناعي.",

    exp4_role: "متدرب تحليل بيانات (بدرجة امتياز 100%)",
    exp4_company: "المعهد القومي للاتصالات (NTI)",
    exp4_b1: "تطوير لوحة تحكم تفاعلية متقدمة لتحليل بيانات الرعاية الصحية في Power BI لتحليل العمليات وبيانات المرضى والتكاليف.",
    exp4_b2: "استخدام SQL Server و Power Query و Power BI لتنظيف البيانات، وبناء النموذج العلائقي، وصياغة معادلات DAX.",
    exp4_b3: "إتمام 120 ساعة تدريبية بنجاح والحصول على شهادة رسمية بنسبة تقييم 100% كاملة.",

    exp5_role: "مبرمج تنافسي (Competitive Programmer)",
    exp5_company: "مسابقة البرمجة الجامعية الدولية (ICPC)",
    exp5_b1: "حل أكثر من 500 مسألة خوارزمية على منصة Codeforces، وتطوير أسلوب تفكير تحليلي دقيق وسريع.",
    exp5_b2: "الحصول على الترتيب ضمن أفضل 30% على مستوى مصر في تصفيات مسابقة ICPC ACPC الفردية مع تكريم شرفي.",

    tag_projects: "معرض الأعمال والمشاريع",
    proj_title_1: "أبرز",
    proj_title_2: "المشاريع",
    proj_subtitle: "مشاريع عملية في تحليل الأعمال، لوحات التحكم، ونماذج تعلم الآلة التنبؤية بأرقام ونتائج مثبتة.",
    filter_all: "جميع المشاريع",
    filter_bi: "لوحات Power BI",
    filter_ml: "تعلم الآلة وبايثون",
    filter_scraping: "جمع وهندسة البيانات (ETL)",

    view_outside: "المنظور الخارجي (لوحات التحكم ومؤشرات الأعمال)",
    view_inside: "المنظور الداخلي (الأكواد، واستعلامات SQL، وهندسة البيانات)",
    perspective_hint: "بدّل بين لوحات العرض التنفيذية للأعمال وكواليس الأكواد واستعلامات قواعد البيانات!",
    badge_star_project: "★ المشروع الرئيسي المميز",
    btn_view_gallery: "عرض المعرض الكامل (9 صور)",
    btn_deep_dive: "دراسة الحالة والمعرض",
    btn_zoom: "تكبير الصورة",
    btn_preview: "معاينة اللوحة",
    btn_inspect_code: "كواليس الكود",

    p1_title: "لوحة التحكم الذكية لبيانات الرعاية الصحية والعمليات السريرية",
    p1_desc: "منظومة تحليلية شاملة للرعاية الصحية نمذجت بيانات 5,855+ مقدم خدمة صحية وأكثر من 53,000 زيارة مريض ومصروفات تفوق 895 مليون دولار.",
    p1_h1: "بناء 12 مقياس KPI ديناميكي في Power BI باستخدام صيغ DAX متقدمة.",
    p1_h2: "تحديد فرص لتقليص النفقات بنسبة 8% من إجمالي مصروفات علاجية بقيمة $895M+.",
    p1_h3: "تصميم نموذج بيانات علائقي متكامل (Star Schema) يربط 11 جدول حقائق وأبعاد.",
    p1_h4: "دمج نماذج بايثون لتحديد أهم العوامل المؤثرة على المخاطر الصحية للمرضى.",

    p2_title: "تحسين مواعيد توصيل الطلبات والنمذجة التنبؤية (Food Delivery)",
    p2_desc: "مشروع متكامل في علم البيانات يحلل 45,593 سجلاً عبر 20 متغيراً للتنبؤ بتأخيرات التوصيل وتوزيع السائقين خلال ساعات الذروة.",
    p2_h1: "تحقيق نسبة نظافة بيانات 99.2% عبر إزالة القيم الشاذة والمفقودة بأساليب إحصائية.",
    p2_h2: "هندسة خصائص زمن التحضير والمسافة الجغرافية مما قلص مؤشرات التأخير بنسبة 15%.",
    p2_h3: "بناء مصفوفات الارتباط ونماذج الانحدار لتحسين كفاءة توزيع الطلبات في أوقات الضغط.",

    p3_title: "تحليل ديناميكيات أسعار وسوق مبيعات السيارات",
    p3_desc: "دراسة استقصائية معمقة لأكثر من 23 ألف سجل مبيعات سيارات لرسم منحنيات انخفاض القيمة السعرية وحصص العلامات التجارية بالسوق.",
    p3_h1: "استخراج مرونة الأسعار ومعدل الإهلاك حسب عمر السيارة لكل علامة تجارية.",
    p3_h2: "تحديد الأسواق الإقليمية الأكثر طلباً والأنماط المفضلة لدى المشترين.",

    p4_title: "تحليل سلوك المستهلك ومعاملات نقاط البيع (POS)",
    p4_desc: "تحليل استكشافي لأكثر من 3,500 معاملة بيع لمقهى تجاري، لتحديد ساعات الذروة، سرعة تدفق المبيعات، وتفضيلات طرق الدفع.",
    p4_h1: "تحديد فترات الضغط بدقة لتنظيم جداول عمل الموظفين والجاهزية التشغيلية للمخزون.",
    p4_h2: "تحليل العلاقة بين قيمة الفاتورة وأنواع المنتجات وطرق الدفع غير النقدي.",

    p5_title: "منظومة سحب وهيكلة بيانات الكتب التلقائية (Web Scraping & ETL)",
    p5_desc: "أداة سحب ومعالجة بيانات آلية بلغة بايثون تستخلص وتبوّب بيانات 1,000+ كتاب عبر 50 صفحة ويب وتصدر ملفات بيانات نقية وخالية من الأخطاء.",
    p5_h1: "استخلاص تلقائي لبيانات الكتب مع دعم الانتقال التلقائي بين الصفحات المتعددة.",
    p5_h2: "تسليم ملف CSV متكامل بنسبة 100% دون أي قيم مفقودة أو بيانات تالفة.",

    tag_sandbox: "استكشاف تفاعلي مباشر",
    sandbox_title_1: "مختبر البيانات",
    sandbox_title_2: "التفاعلي الحي",
    sandbox_subtitle: "عايش تحليلات البيانات واقعياً: غيّر السيناريوهات، صفّ الشرائح، وشاهد مؤشرات الأداء والرسوم تتحدث فورياً.",
    sb_tab_healthcare: "بيانات الرعاية الصحية ($895M)",
    sb_tab_food: "توصيل الطعام (45.5K طلب)",
    sb_tab_cars: "مبيعات السيارات (23K سجل)",
    sb_tab_coffee: "مبيعات المقهى (3.5K معاملة)",
    sb_insight_title: "الخلاصة التحليلية الذكية:",
    sb_rerun: "إعادة حساب الشريحة",

    tag_certificates: "الاعتمادات والتكريمات",
    cert_title_1: "الشهادات",
    cert_title_2: "والاعتمادات الرسمية",
    cert_subtitle: "شهادات معتمدة وموثقة من كبرى المعاهد التكنولوجية المصرية والمسابقات الدولية.",
    cert_ribbon_top: "الدرجة النهائية 100%",
    btn_view_cert: "تكبير الشهادة",
    btn_view: "عرض",
    btn_pdf: "تحميل PDF",

    cert1_name: "شهادة تحليل البيانات المتقدم (Advanced Data Analytics)",
    cert1_desc: "ممنوحة من المعهد القومي للاتصالات (NTI) وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA). إتمام 120 ساعة تدريبية بنسبة نجاح تامة 100% (رقم الطالب: 231567).",

    cert2_name: "تكريم مسابقة البرمجة الجامعية ICPC — مرتبة الشرف",
    cert2_desc: "ممنوحة للمبرمج إسماعيل محمود من المدير التنفيذي لمؤسسة ICPC د. ويليام باوتشر ممثلاً لجامعة أسيوط لتحقيقه ترتيباً ضمن أفضل 30% على مستوى الجمهورية.",

    cert3_name: "شهادة تخرج برنامج التدريب على العمل الحر (ITIDA Gigs)",
    cert3_desc: "تخرج رسمي من برنامج ITIDA Gigs التابع لوزارة الاتصالات و eyouth لتأهيل المستقلين واحتراف تنفيذ وإدارة مشاريع البيانات والتقنية.",

    tag_skills: "الأدوات والمهارات التقنية",
    skills_title_1: "المهارات",
    skills_title_2: "والقدرات",
    skills_subtitle: "مخطط تفصيلي للغات البرمجة، حزم تحليل البيانات، وأدوات ذكاء الأعمال المتقنة.",
    cat_prog: "لغات البرمجة والاستعلام",
    cat_analysis: "تحليل ونمذجة البيانات",
    cat_bi: "ذكاء الأعمال ولوحات التحكم",
    cat_ml: "تعلم الآلة والذكاء الاصطناعي",
    cat_tools: "سحب البيانات والمنصات",
    cat_soft: "المهارات الشخصية والقيادية",

    soft1: "حل المشكلات والتفكير النقدي التحليلي",
    soft2: "القيادة والتنسيق الفعال ضمن فرق العمل",
    soft3: "مهارات التواصل وعرض الأفكار والنتائج",
    soft4: "سرعة التكيف وسرعة تعلم التقنيات الحديثة",
    soft5: "إدارة الوقت والعمل بكفاءة تحت الضغط",

    tag_contact: "تواصل معي",
    contact_title_1: "دعنا نبدأ",
    contact_title_2: "التعاون معاً",
    contact_subtitle: "متاح لعروض العمل بدوام كامل، فترات التدريب، ومشاريع تحليل البيانات التعاقدية.",
    contact_direct_title: "بيانات التواصل المباشر",
    contact_direct_desc: "يمكنك التواصل معي مباشرة عبر الهاتف، الواتساب، البريد الإلكتروني، أو لينكد إن. أرد عادةً خلال ساعات قليلة.",
    contact_email_lbl: "البريد الإلكتروني",
    contact_phone_lbl: "الهاتف والواتساب",
    contact_location_lbl: "الموقع الجغرافي",
    contact_location_val: "القاهرة، مصر (متاح للعمل عن بُعد دولياً)",
    contact_cv_prompt: "هل تحتاج إلى سيرتي الذاتية كاملة؟",
    contact_cv_sub: "حمّل النسخة الرسمية بصيغة PDF الآن.",
    btn_download_cv: "تحميل السيرة الذاتية",

    form_title: "أرسل لي رسالة مباشرة",
    form_name: "الاسم الكريم",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع / نوع المشروع",
    form_message: "نص الرسالة",
    form_send_btn: "إرسال الرسالة",

    footer_tagline: "إسماعيل محمود محمد — نحول البيانات الصامتة إلى قرارات ذكية واستراتيجية."
  }
};

// Titles for Typing Animation
const titles = {
  en: [
    "Data Scientist",
    "Data Analyst",
    "Power BI Specialist",
    "Machine Learning Trainee",
    "Competitive Problem Solver (ICPC)"
  ],
  ar: [
    "أخصائي علم بيانات",
    "محلل بيانات معتمد",
    "مطور لوحات تحكم Power BI",
    "باحث في تعلم الآلة والذكاء الاصطناعي",
    "مبرمج خوارزميات ICPC"
  ]
};

// State Variables
let currentLang = "en";
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;
let soundEnabled = false;
let audioCtx = null;
let currentPerspective = "outside";

// ==================== DOM READY INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Core Initializations
  initNavbarScroll();
  initTopProgressBar();
  initMobileMenu();
  initTypingEffect();
  initLanguageToggle();
  initProjectFilters();
  initModals();
  initMetricCounters();
  initBackToTop();
  initSmoothScroll();

  // Advanced Creative Engines
  initParticlesEngine();
  initCard3DTilt();
  initLiveSandbox();
  initTerminalEngine();
  initSoundEngine();
  initCopyCodeButtons();
});

// ==================== 2. TOP SCROLL PROGRESS BAR ====================
function initTopProgressBar() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${scrollPercent}%`;
  });
}

// ==================== 3. NEURAL DATA PARTICLES CANVAS ENGINE ====================
let particlesActive = true;
function initParticlesEngine() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: -1000, y: -1000, radius: 140 };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.colors = ["#06b6d4", "#3b82f6", "#10b981", "#8b5cf6"];
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.baseAlpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse repulsion
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 2.5;
        this.y -= Math.sin(angle) * force * 2.5;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.baseAlpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  let particles = [];
  function createParticles() {
    particles = [];
    const count = Math.floor((width * height) / 18000); // responsive count
    for (let i = 0; i < Math.min(count, 95); i++) {
      particles.push(new Particle());
    }
  }
  createParticles();

  // Animation Loop
  let frame = 0;
  function animate() {
    if (!particlesActive) return;
    frame++;
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / 115) * 0.22;
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Occasional data packet traveling
          if ((i + j + frame) % 180 === 0) {
            const progress = (frame % 60) / 60;
            const px = particles[i].x + (particles[j].x - particles[i].x) * progress;
            const py = particles[i].y + (particles[j].y - particles[i].y) * progress;
            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            ctx.fillStyle = "#fff";
            ctx.globalAlpha = 0.9;
            ctx.fill();
          }
        }
      }

      // Connect to mouse
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < mouse.radius) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = "#38bdf8";
        ctx.globalAlpha = (1 - mDist / mouse.radius) * 0.5;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }
  animate();

  // FX Toggle button in navbar
  const fxBtn = document.getElementById("fxToggle");
  if (fxBtn) {
    fxBtn.addEventListener("click", () => {
      particlesActive = !particlesActive;
      playSynthSfx("click");
      if (particlesActive) {
        fxBtn.classList.add("active");
        canvas.classList.remove("paused");
        animate();
      } else {
        fxBtn.classList.remove("active");
        canvas.classList.add("paused");
        ctx.clearRect(0, 0, width, height);
      }
    });
  }
}

// ==================== 4. 3D CARD PERSPECTIVE TILT ====================
function initCard3DTilt() {
  const cards = document.querySelectorAll(".project-card, .metric-card, .cert-card, .pillar-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Spotlight coordinates for CSS
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // 3D rotation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

// ==================== 5. PERSPECTIVE SWITCHER (INSIDE VS OUTSIDE) ====================
function setPerspective(mode) {
  currentPerspective = mode;
  playSynthSfx("whoosh");

  const btnOutside = document.getElementById("btnOutsideView");
  const btnInside = document.getElementById("btnInsideView");
  const allDrawers = document.querySelectorAll(".project-inside-drawer");

  if (mode === "inside") {
    btnInside?.classList.add("active");
    btnOutside?.classList.remove("active");
    allDrawers.forEach((drawer) => drawer.classList.add("open"));
  } else {
    btnOutside?.classList.add("active");
    btnInside?.classList.remove("active");
    allDrawers.forEach((drawer) => drawer.classList.remove("open"));
  }
}

function toggleDrawer(button) {
  playSynthSfx("click");
  const card = button.closest(".project-card");
  if (!card) return;
  const drawer = card.querySelector(".project-inside-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

function copyCodeSnippet(button) {
  playSynthSfx("beep");
  const drawer = button.closest(".project-inside-drawer");
  if (!drawer) return;
  const code = drawer.querySelector("code");
  if (!code) return;

  navigator.clipboard.writeText(code.innerText).then(() => {
    button.innerHTML = '<i data-lucide="check"></i>';
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      button.innerHTML = '<i data-lucide="copy"></i>';
      if (window.lucide) window.lucide.createIcons();
    }, 1800);
  });
}

function initCopyCodeButtons() {
  // Global helper
}

// ==================== 6. LIVE INTERACTIVE DATA SANDBOX ====================
const sandboxDatasets = {
  healthcare: {
    label: "Healthcare Operations & Patient Demographics (53,350 Encounters)",
    query: "SELECT AgeGroup, COUNT(*) as Patients, SUM(Expenses) as TotalCost FROM Encounters GROUP BY AgeGroup",
    insight: "Senior cohorts drive 53.69% of all out-of-pocket costs ($472.84M). Targeted preventive care protocols yield an estimated 8% cost reduction.",
    cohorts: ["All Demographics", "Senior (65+)", "Adults (25-64)", "Young Adults (15-24)", "Pediatric"],
    kpis: [
      { label: "Modeled Encounters", val: 53350, suffix: "+", sub: "5,855 Providers" },
      { label: "Total Healthcare Expenses", val: 895, prefix: "$", suffix: "M+", sub: "8% Cost Reduction identified" },
      { label: "Out of Pocket Share", val: 881, prefix: "$", suffix: "M", sub: "Patient direct responsibility" },
      { label: "Average Patient Age", val: 52.4, suffix: " Yrs", sub: "Normal distribution across counties" }
    ],
    bars: [
      { name: "Senior (65+)", value: 472.8, color: "#38bdf8" },
      { name: "Adult (35-64)", value: 278.4, color: "#06b6d4" },
      { name: "Young Adult", value: 111.0, color: "#818cf8" },
      { name: "Pediatric", value: 33.5, color: "#10b981" }
    ]
  },
  food: {
    label: "Food Delivery Logistics & Anomaly Pruning (45,593 Orders)",
    query: "SELECT HourOfDay, AVG(DelayMinutes), COUNT(Orders) FROM DeliveryFleet GROUP BY HourOfDay",
    insight: "Engineering distance and prep-time features reduced average delivery delay by 15%, keeping peak dinner hour on-time rate above 94.6%.",
    cohorts: ["All Shifts", "Dinner Rush (7-10 PM)", "Lunch Peak (12-3 PM)", "Late Night", "Breakfast"],
    kpis: [
      { label: "Audited Orders", val: 45593, suffix: "", sub: "99.2% Data Cleanliness" },
      { label: "Delay Reduction", val: 15, suffix: "%", sub: "Via Feature Engineering" },
      { label: "On-Time Fulfillment", val: 94.6, suffix: "%", sub: "+2.1% improvement" },
      { label: "Avg Delivery ETA", val: 28.4, suffix: " Min", sub: "Reduced from 33.4 Min" }
    ],
    bars: [
      { name: "Dinner Peak (8 PM)", value: 89, color: "#f97316" },
      { name: "Lunch Rush (1 PM)", value: 74, color: "#fb923c" },
      { name: "Afternoon (4 PM)", value: 42, color: "#38bdf8" },
      { name: "Late Night (11 PM)", value: 31, color: "#a855f7" }
    ]
  },
  cars: {
    label: "Automotive Sales Dynamics & Pricing Depreciation (23,000+ Vehicles)",
    query: "SELECT Brand, MedianPrice, DepreciationRate FROM RegionalCarSales GROUP BY Brand",
    insight: "Japanese manufacturers retain highest resale value after 5 years (Toyota 62%, Honda 58%), while luxury German brands exhibit steepest early depreciation.",
    cohorts: ["All Categories", "SUVs", "Sedans", "Electric Vehicles", "Commercial"],
    kpis: [
      { label: "Vehicles Analyzed", val: 23410, suffix: "+", sub: "50+ Regions Covered" },
      { label: "Median Selling Price", val: 41500, prefix: "$", suffix: "", sub: "+3.1% YoY Velocity" },
      { label: "Depreciation Curve", val: 14.5, suffix: "%/yr", sub: "Benchmark Across 5 Yrs" },
      { label: "Top Brand Volume", val: 145, suffix: "K Units", sub: "Toyota & Honda Leadership" }
    ],
    bars: [
      { name: "Toyota", value: 145, color: "#06b6d4" },
      { name: "Honda", value: 118, color: "#a855f7" },
      { name: "Ford", value: 78, color: "#3b82f6" },
      { name: "Tesla", value: 54, color: "#10b981" }
    ]
  },
  coffee: {
    label: "Retail Coffee Shop POS & Consumer Behavior (3,500+ Transactions)",
    query: "SELECT HourOfDay, SUM(BasketTotal), PaymentMethod FROM CoffeeTransactions GROUP BY HourOfDay",
    insight: "Peak morning rush occurs between 8:15 AM - 9:30 AM (148 transactions/hour). 76% of transactions are cashless, with 18% higher basket value.",
    cohorts: ["All Days", "Weekday Rush", "Weekend Leisure", "Morning Window", "Afternoon"],
    kpis: [
      { label: "Audited Transactions", val: 3520, suffix: "+", sub: "3 Months Operating Period" },
      { label: "Morning Velocity", val: 148, suffix: " Tx/Hr", sub: "Optimal Staffing Scheduled" },
      { label: "Digital Payments", val: 76, suffix: "%", sub: "Card & Mobile Wallet" },
      { label: "Avg Ticket Value", val: 13.15, prefix: "£", suffix: "", sub: "+12.4% vs Baseline" }
    ],
    bars: [
      { name: "Morning Peak (8-10 AM)", value: 148, color: "#f59e0b" },
      { name: "Lunch Break (12-2 PM)", value: 112, color: "#fbbf24" },
      { name: "Afternoon (3-5 PM)", value: 85, color: "#06b6d4" },
      { name: "Evening (6-8 PM)", value: 44, color: "#8b5cf6" }
    ]
  }
};

let currentScenario = "healthcare";
let activeCohortIndex = 0;

function initLiveSandbox() {
  renderSandboxScenario(currentScenario);
}

function switchSandboxScenario(key) {
  playSynthSfx("click");
  currentScenario = key;
  activeCohortIndex = 0;

  // Update Scenario Tab classes
  document.querySelectorAll(".s-tab").forEach((tab) => {
    if (tab.getAttribute("data-scenario") === key) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderSandboxScenario(key);
}

function renderSandboxScenario(key) {
  const data = sandboxDatasets[key];
  if (!data) return;

  // Label & Query
  const activeLabel = document.getElementById("sandboxActiveLabel");
  const queryBadge = document.getElementById("sandboxQueryBadge");
  const insightText = document.getElementById("sandboxInsightText");

  if (activeLabel) activeLabel.textContent = `Dataset: ${data.label}`;
  if (queryBadge) queryBadge.textContent = data.query;
  if (insightText) insightText.textContent = data.insight;

  // Filter Chips
  const chipsContainer = document.getElementById("sandboxFilterChips");
  if (chipsContainer) {
    chipsContainer.innerHTML = "";
    data.cohorts.forEach((cohort, idx) => {
      const chip = document.createElement("button");
      chip.className = `sb-chip ${idx === activeCohortIndex ? "active" : ""}`;
      chip.textContent = cohort;
      chip.onclick = () => {
        playSynthSfx("click");
        activeCohortIndex = idx;
        document.querySelectorAll(".sb-chip").forEach((c, i) => {
          c.classList.toggle("active", i === idx);
        });
        rerunSandboxAnalysis();
      };
      chipsContainer.appendChild(chip);
    });
  }

  // Render KPIs
  renderSandboxKPIs(data.kpis);

  // Draw Chart
  drawSandboxChart(data.bars);
}

function renderSandboxKPIs(kpis) {
  const container = document.getElementById("sandboxKPIs");
  if (!container) return;

  container.innerHTML = "";
  kpis.forEach((kpi) => {
    const card = document.createElement("div");
    card.className = "sandbox-kpi-card";

    const label = document.createElement("span");
    label.className = "sb-kpi-label";
    label.textContent = kpi.label;

    const val = document.createElement("span");
    val.className = "sb-kpi-val";
    val.textContent = (kpi.prefix || "") + kpi.val.toLocaleString() + (kpi.suffix || "");

    const sub = document.createElement("span");
    sub.className = "sb-kpi-sub";
    sub.textContent = kpi.sub;

    card.appendChild(label);
    card.appendChild(val);
    card.appendChild(sub);
    container.appendChild(card);
  });
}

function drawSandboxChart(bars) {
  const canvas = document.getElementById("sandboxChartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = canvas.parentElement.clientWidth || 800);
  const height = (canvas.height = 320);

  ctx.clearRect(0, 0, width, height);

  const maxValue = Math.max(...bars.map((b) => b.value)) * 1.25;
  const paddingX = 70;
  const paddingBottom = 45;
  const paddingTop = 30;
  const chartHeight = height - paddingBottom - paddingTop;
  const barWidth = Math.min((width - paddingX * 2) / (bars.length * 1.8), 75);
  const gap = (width - paddingX * 2 - barWidth * bars.length) / (bars.length + 1);

  // Draw background grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingX - 10, y);
    ctx.lineTo(width - paddingX + 10, y);
    ctx.stroke();

    // Value label
    ctx.fillStyle = "#64748b";
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.textAlign = "right";
    const labelVal = Math.round(maxValue - (maxValue / 4) * i);
    ctx.fillText(labelVal, paddingX - 15, y + 4);
  }

  // Draw Bars
  bars.forEach((bar, idx) => {
    const x = paddingX + gap * (idx + 1) + barWidth * idx;
    const currentValHeight = (bar.value / maxValue) * chartHeight;
    const y = paddingTop + chartHeight - currentValHeight;

    // Bar Gradient
    const gradient = ctx.createLinearGradient(0, y, 0, y + currentValHeight);
    gradient.addColorStop(0, bar.color);
    gradient.addColorStop(1, "rgba(6, 182, 212, 0.15)");

    ctx.fillStyle = gradient;
    ctx.shadowColor = bar.color;
    ctx.shadowBlur = 10;

    // Rounded Top Rect
    const radius = 6;
    ctx.beginPath();
    ctx.moveTo(x, y + currentValHeight);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.lineTo(x + barWidth - radius, y);
    ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
    ctx.lineTo(x + barWidth, y + currentValHeight);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // Value on top
    ctx.fillStyle = "#fff";
    ctx.font = "bold 12px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(bar.value, x + barWidth / 2, y - 8);

    // Label on bottom
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(bar.name, x + barWidth / 2, height - 15);
  });
}

function rerunSandboxAnalysis() {
  playSynthSfx("whoosh");
  const data = sandboxDatasets[currentScenario];
  if (!data) return;

  // Add random variance (+/- 4%) to simulate dynamic querying
  const factor = 1 + (Math.random() * 0.08 - 0.04);
  const updatedBars = data.bars.map((b) => ({
    ...b,
    value: Math.round(b.value * factor * 10) / 10
  }));

  drawSandboxChart(updatedBars);
}

// ==================== 7. INTERACTIVE CLI TERMINAL ENGINE ====================
function openTerminalModal() {
  playSynthSfx("beep");
  const modal = document.getElementById("terminalModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.getElementById("terminalInput")?.focus();
  }, 200);
}

function closeTerminalModal() {
  playSynthSfx("click");
  const modal = document.getElementById("terminalModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function maximizeTerminal() {
  const container = document.querySelector(".terminal-container");
  if (container) container.classList.toggle("modal-wide");
}

function handleCliInput(e) {
  e.preventDefault();
  const input = document.getElementById("terminalInput");
  if (!input) return;
  const cmd = input.value.trim();
  input.value = "";
  if (cmd) executeTerminalCommand(cmd);
}

function runCliCmd(cmd) {
  playSynthSfx("click");
  executeTerminalCommand(cmd);
}

function executeTerminalCommand(rawCmd) {
  const cmd = rawCmd.toLowerCase().trim();
  const output = document.getElementById("terminalOutput");
  if (!output) return;

  // Add User Command Line
  const cmdLine = document.createElement("div");
  cmdLine.className = "t-line";
  cmdLine.innerHTML = `<span class="t-cyan">ismail@data:~$</span> ${rawCmd}`;
  output.appendChild(cmdLine);

  let responseHtml = "";

  switch (cmd) {
    case "help":
      responseHtml = `
        <div class="t-line t-yellow">Available CLI commands:</div>
        <div class="t-line">  <span class="t-cyan">about</span>       - Brief overview & academic foundation</div>
        <div class="t-line">  <span class="t-cyan">skills</span>      - Breakdown of technical and BI skills</div>
        <div class="t-line">  <span class="t-cyan">projects</span>    - Key analytics capstones with verified results</div>
        <div class="t-line">  <span class="t-cyan">education</span>   - University, Computer Science & GPA</div>
        <div class="t-line">  <span class="t-cyan">certs</span>       - Official certificates (NTI 100%, ICPC)</div>
        <div class="t-line">  <span class="t-cyan">cv</span>          - Download official PDF resume</div>
        <div class="t-line">  <span class="t-cyan">contact</span>     - Direct WhatsApp, Email, & Location</div>
        <div class="t-line">  <span class="t-cyan">matrix</span>      - Trigger digital green matrix cascade</div>
        <div class="t-line">  <span class="t-cyan">clear</span>       - Clear terminal window</div>
      `;
      break;

    case "about":
      responseHtml = `
        <div class="t-line"><strong class="t-white">Ismail Mahmoud Mohamed</strong> - Data Scientist & Data Analyst</div>
        <div class="t-line t-muted">Location: Cairo, Egypt | CS Faculty, Assiut University (GPA 3.71 / 4.0 Excellent).</div>
        <div class="t-line">Specialized in turning complex datasets into strategic executive intelligence through Python, SQL, Power BI, and Machine Learning.</div>
      `;
      break;

    case "skills":
      responseHtml = `
        <div class="t-line t-cyan">[Core Technical Stack]</div>
        <div class="t-line">• Programming: Python, SQL (SQL Server), C++, JavaScript</div>
        <div class="t-line">• Analytics: Pandas, NumPy, EDA, Data Cleaning, Statistical Inference</div>
        <div class="t-line">• BI & Dashboards: Power BI, DAX Calculations, Tableau, Excel</div>
        <div class="t-line">• Machine Learning: Predictive Modeling, Neural Networks, Scikit-Learn</div>
        <div class="t-line">• Scraping & Platforms: BeautifulSoup, Requests, Git/GitHub, Airtable, Zid</div>
      `;
      break;

    case "projects":
      responseHtml = `
        <div class="t-line t-green">★ 1. Healthcare Operational & Clinical Analytics (Power BI + DAX + Python)</div>
        <div class="t-line t-muted">   5,855+ providers, 53,000+ patient encounters, 8% cost reduction on $895M expenses.</div>
        <div class="t-line t-green">★ 2. Food Delivery Delay Optimization (ITI Machine Learning)</div>
        <div class="t-line t-muted">   45,593 records, 99.2% cleanliness, 15% delay reduction via feature engineering.</div>
        <div class="t-line t-green">★ 3. Automotive Sales Dynamics (DEPI Python & SQL)</div>
        <div class="t-line t-muted">   23,000+ vehicle records, price depreciation curves across regional markets.</div>
        <div class="t-line t-green">★ 4. Books Web Scraping Pipeline (Python & BeautifulSoup)</div>
        <div class="t-line t-muted">   1,000+ books parsed across 50 pages, 100% clean CSV output.</div>
      `;
      break;

    case "education":
      responseHtml = `
        <div class="t-line"><strong class="t-white">Assiut University</strong> — Faculty of Computers and Information</div>
        <div class="t-line">Degree: Bachelor of Science in Computer Science (Sep 2024 – Present)</div>
        <div class="t-line t-yellow">Academic GPA: 3.71 / 4.0 (Excellent with Honors)</div>
      `;
      break;

    case "certs":
      responseHtml = `
        <div class="t-line">• <strong class="t-green">NTI Advanced Data Analytics</strong>: 120 Hours, Score 100% (ITIDA & NTI)</div>
        <div class="t-line">• <strong class="t-yellow">ICPC ACPC Kickoff Contest 2025</strong>: Honorable Mention (Top 30% Nationally)</div>
        <div class="t-line">• <strong class="t-cyan">ITIDA Gigs Freelance Program</strong>: 3 Months Certification (eyouth & ITIDA)</div>
      `;
      break;

    case "cv":
      responseHtml = `<div class="t-line t-green">Initiating CV download: Ismail-Mahmoud-CV.pdf ...</div>`;
      setTimeout(() => {
        window.open("assets/docs/Ismail-Mahmoud-CV.pdf", "_blank");
      }, 500);
      break;

    case "contact":
      responseHtml = `
        <div class="t-line">WhatsApp & Phone: <a href="https://wa.me/201094360362" target="_blank" class="t-cyan">+20 109 436 0362</a></div>
        <div class="t-line">Email: <a href="mailto:ismaeilabozaid7497@gmail.com" class="t-cyan">ismaeilabozaid7497@gmail.com</a></div>
        <div class="t-line">LinkedIn: <a href="https://linkedin.com/in/ismaeilmahmoud" target="_blank" class="t-cyan">linkedin.com/in/ismaeilmahmoud</a></div>
        <div class="t-line">GitHub: <a href="https://github.com/Ismail-Mahmoud-Mohamed" target="_blank" class="t-cyan">github.com/Ismail-Mahmoud-Mohamed</a></div>
      `;
      break;

    case "matrix":
      responseHtml = `<div class="t-line t-green">Starting Matrix code rain stream... Enjoy!</div>`;
      startTerminalMatrixRain();
      break;

    case "clear":
      output.innerHTML = "";
      return;

    default:
      responseHtml = `<div class="t-line t-red">command not found: '${cmd}'. Type <span class="t-yellow">'help'</span> for list of commands.</div>`;
  }

  const resDiv = document.createElement("div");
  resDiv.innerHTML = responseHtml;
  output.appendChild(resDiv);

  // Auto scroll to bottom
  output.scrollTop = output.scrollHeight;
}

// Matrix digital rain inside terminal
function startTerminalMatrixRain() {
  const output = document.getElementById("terminalOutput");
  if (!output) return;

  const characters = "010101ISMAILMAHMOUD_DATA_SCIENCE_SQL_PYTHON_45K_895M";
  let count = 0;
  const interval = setInterval(() => {
    let str = "";
    for (let i = 0; i < 48; i++) {
      str += characters.charAt(Math.floor(Math.random() * characters.length)) + " ";
    }
    const line = document.createElement("div");
    line.className = "t-line t-green";
    line.style.opacity = Math.random() * 0.8 + 0.2;
    line.textContent = str;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    count++;
    if (count > 25) clearInterval(interval);
  }, 75);
}

// ==================== 8. WEB AUDIO API SYNTH SOUND ENGINE ====================
function initSoundEngine() {
  const soundBtn = document.getElementById("soundToggle");
  const dockBtn = document.getElementById("dockSoundBtn");

  const toggleSound = () => {
    soundEnabled = !soundEnabled;
    updateSoundIcons();
    if (soundEnabled) {
      initAudioContext();
      playSynthSfx("beep");
    }
  };

  soundBtn?.addEventListener("click", toggleSound);
  dockBtn?.addEventListener("click", toggleSound);
}

function toggleSoundFX() {
  soundEnabled = !soundEnabled;
  updateSoundIcons();
  if (soundEnabled) {
    initAudioContext();
    playSynthSfx("beep");
  }
}

function updateSoundIcons() {
  const icon1 = document.getElementById("soundIcon");
  const icon2 = document.getElementById("dockSoundIcon");
  const btn1 = document.getElementById("soundToggle");
  const btn2 = document.getElementById("dockSoundBtn");

  if (soundEnabled) {
    icon1?.setAttribute("data-lucide", "volume-2");
    icon2?.setAttribute("data-lucide", "volume-2");
    btn1?.classList.add("active");
    btn2?.classList.add("active");
  } else {
    icon1?.setAttribute("data-lucide", "volume-x");
    icon2?.setAttribute("data-lucide", "volume-x");
    btn1?.classList.remove("active");
    btn2?.classList.remove("active");
  }
  if (window.lucide) window.lucide.createIcons();
}

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
}

function playSynthSfx(type) {
  if (!soundEnabled) return;
  initAudioContext();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "whoosh") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(620, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "beep") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(1050, now);
      osc.frequency.setValueAtTime(1400, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    }
  } catch (err) {
    // Audio safe fallback
  }
}

// ==================== 9. BILINGUAL LANGUAGE SWITCHER ====================
function initLanguageToggle() {
  const toggleBtn = document.getElementById("langToggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    playSynthSfx("whoosh");
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const langLabel = document.getElementById("langLabel");

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    if (langLabel) langLabel.textContent = "English";
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    if (langLabel) langLabel.textContent = "عربي";
  }

  // Update text elements with data-i18n
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      const icon = el.querySelector("i, svg");
      if (icon) {
        const textSpan = el.querySelector("span") || el;
        textSpan.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Restart typing animation
  if (typingTimeout) clearTimeout(typingTimeout);
  charIndex = 0;
  isDeleting = false;
  typingIndex = 0;
  type();

  // Re-draw sandbox chart for current scenario
  drawSandboxChart(sandboxDatasets[currentScenario].bars);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==================== 10. DYNAMIC TYPING EFFECT ====================
function initTypingEffect() {
  type();
}

function type() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  const currentList = titles[currentLang];
  const fullText = currentList[typingIndex % currentList.length];

  if (isDeleting) {
    charIndex--;
    typingElement.textContent = fullText.substring(0, charIndex);
  } else {
    charIndex++;
    typingElement.textContent = fullText.substring(0, charIndex);
  }

  let delay = isDeleting ? 45 : 95;

  if (!isDeleting && charIndex === fullText.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    delay = 450;
  }

  typingTimeout = setTimeout(type, delay);
}

// ==================== 11. NAVBAR & SCROLL ====================
function initNavbarScroll() {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    let currentId = "";
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".nav-link");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    playSynthSfx("click");
    menu.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// ==================== 12. PROJECT FILTERING ====================
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".projects-grid .project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playSynthSfx("click");
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

function switchMainImage(targetId, newSrc, thumbElement) {
  playSynthSfx("click");
  const mainImg = document.getElementById(targetId);
  if (mainImg) {
    mainImg.src = newSrc;
  }
  const strip = thumbElement.parentElement;
  if (strip) {
    strip.querySelectorAll(".thumb-item").forEach((item) => item.classList.remove("active"));
    thumbElement.classList.add("active");
  }
}

// ==================== 13. MODALS & LIGHTBOX ====================
function initModals() {
  document.querySelectorAll(".open-modal-img").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playSynthSfx("beep");
      const imgSrc = btn.getAttribute("data-img");
      const caption = btn.getAttribute("data-caption") || "";
      openImageModal(imgSrc, caption);
    });
  });

  document.querySelectorAll(".open-gallery-btn, .open-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playSynthSfx("beep");
      openGalleryModal();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImageModal();
      closeGalleryModal();
      closeTerminalModal();
    }
  });

  // Terminal launcher button in navbar
  document.getElementById("terminalToggle")?.addEventListener("click", openTerminalModal);
}

function openImageModal(src, caption) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");
  const cap = document.getElementById("modalCaption");

  if (!modal || !img) return;
  img.src = src;
  if (cap) cap.textContent = caption;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  playSynthSfx("click");
  const modal = document.getElementById("imageModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function openGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  playSynthSfx("click");
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function setGallerySlide(index, imgSrc, title, description) {
  playSynthSfx("click");
  const mainImg = document.getElementById("galleryActiveImg");
  const captionBar = document.getElementById("galleryCaption");
  const thumbs = document.querySelectorAll(".g-thumb");

  if (mainImg) mainImg.src = imgSrc;
  if (captionBar) {
    captionBar.innerHTML = `<strong>Screen ${index + 1} / 9 — ${title}:</strong> ${description}`;
  }

  thumbs.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

// ==================== 14. IMPACT METRIC COUNTERS ====================
function initMetricCounters() {
  const counterElements = document.querySelectorAll(".metric-number");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counterElements.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            animateCount(el, target);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const section = document.querySelector(".metrics-section");
  if (section) observer.observe(section);
}

function animateCount(element, target) {
  let start = 0;
  const duration = 1800;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      clearInterval(timer);
      element.textContent = target.toLocaleString() + "+";
    } else {
      element.textContent = Math.floor(start).toLocaleString() + "+";
    }
  }, stepTime);
}

// ==================== 15. BACK TO TOP & SMOOTH SCROLL ====================
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    playSynthSfx("whoosh");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        playSynthSfx("whoosh");
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ==================== 16. CONTACT FORM ====================
function handleFormSubmit(event) {
  event.preventDefault();
  playSynthSfx("beep");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim() || "Data Analytics Inquiry";
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:ismaeilabozaid7497@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  if (feedback) {
    feedback.className = "form-feedback success";
    if (currentLang === "ar") {
      feedback.textContent = `شكراً لك يا ${name}! جاري تحويلك لإرسال الرسالة إلى بريد إسماعيل...`;
    } else {
      feedback.textContent = `Thank you ${name}! Opening your email client to reach Ismail directly...`;
    }
    feedback.classList.remove("hidden");
  }

  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 750);
}
