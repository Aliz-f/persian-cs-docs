const quizData = [
    {
        id: 1,
        question: "کدام‌یک از موارد زیر برای گرفتن بنر (Banner grabbing) استفاده می‌شود؟",
        options: [
            { key: "A", text: "Telnet" },
            { key: "B", text: "FTP" },
            { key: "C", text: "SSH" },
            { key: "D", text: "Wireshark" }
        ],
        correct: "A",
        explanation: "تلنت (Telnet) برای انجام گرفتن بنر علیه یک سیستم استفاده می‌شود. با این حال، ابزارهای دیگری نیز برای انجام این کار در دسترس هستند."
    },
    {
        id: 2,
        question: "کدام‌یک از موارد زیر برای شناسایی سیستم‌عامل وب‌سرور استفاده می‌شود؟",
        options: [
            { key: "A", text: "Telnet" },
            { key: "B", text: "Netcraft" },
            { key: "C", text: "Fragroute" },
            { key: "D", text: "Wireshark" }
        ],
        correct: "B",
        explanation: "نت‌کرفت (Netcraft) برای جمع‌آوری اطلاعات درباره بسیاری از جنبه‌های یک سیستم، از جمله سیستم‌عامل، آدرس IP و حتی کشور مبدأ استفاده می‌شود."
    },
    {
        id: 3,
        question: "کدام‌یک از موارد زیر برای انجام اسکن‌های شبکه سفارشی‌شده استفاده می‌شود؟",
        options: [
            { key: "A", text: "Nessus" },
            { key: "B", text: "Wireshark" },
            { key: "C", text: "AirPcap" },
            { key: "D", text: "nmap" }
        ],
        correct: "D",
        explanation: "Nmap ابزاری است که برای اسکن شبکه‌ها و سیستم‌ها و برای سایر انواع اسکن‌های سفارشی استفاده می‌شود."
    },
    {
        id: 4,
        question: "کدام‌یک از موارد زیر یک پرچم (Flag) روی بسته نیست؟",
        options: [
            { key: "A", text: "URG" },
            { key: "B", text: "PSH" },
            { key: "C", text: "RST" },
            { key: "D", text: "END" }
        ],
        correct: "D",
        explanation: "END یک نوع پرچم نیست. پرچم‌های معتبر عبارتند از ACK, FIN, SYN, URG, RST و PSH."
    },
    {
        id: 5,
        question: "یک حمله SYN از کدام پروتکل استفاده می‌کند؟",
        options: [
            { key: "A", text: "TCP" },
            { key: "B", text: "UDP" },
            { key: "C", text: "HTTP" },
            { key: "D", text: "Telnet" }
        ],
        correct: "A",
        explanation: "پرچم‌های SYN فقط در انتقال‌های مبتنی بر TCP دیده می‌شوند و نه در هیچ‌گونه انتقال UDP."
    },
    {
        id: 6,
        question: "کدام‌یک از انواع حمله زیر هیچ پرچمی تنظیم شده ندارد؟",
        options: [
            { key: "A", text: "SYN" },
            { key: "B", text: "NULL" },
            { key: "C", text: "Xmas tree" },
            { key: "D", text: "FIN" }
        ],
        correct: "B",
        explanation: "یک اسکن NULL هیچ پرچمی روی بسته‌هایش پیکربندی نشده است."
    },
    {
        id: 7,
        question: "چه چیزی در یک اسکن نیمه‌باز (Half-open) وجود ندارد؟",
        options: [
            { key: "A", text: "SYN" },
            { key: "B", text: "ACK" },
            { key: "C", text: "SYN-ACK" },
            { key: "D", text: "FIN" }
        ],
        correct: "B",
        explanation: "یک پرچم ACK متعلق به آخرین بخش از دست دادن سه‌مرحله‌ای است، و این بخش هرگز در یک اسکن نیمه‌باز اتفاق نمی‌افتد (جایی که معمولاً RST فرستاده می‌شود)."
    },
    {
        id: 8,
        question: "در طول یک اسکن FIN، چه چیزی نشان می‌دهد که یک پورت بسته است؟",
        options: [
            { key: "A", text: "هیچ پاسخ بازگشتی" },
            { key: "B", text: "RST" },
            { key: "C", text: "ACK" },
            { key: "D", text: "SYN" }
        ],
        correct: "B",
        explanation: "یک RST نشان می‌دهد که پورت بسته است."
    },
    {
        id: 9,
        question: "در طول یک اسکن درخت کریسمس (Xmas tree scan)، چه چیزی نشان می‌دهد که یک پورت بسته است؟",
        options: [
            { key: "A", text: "هیچ پاسخ بازگشتی" },
            { key: "B", text: "RST" },
            { key: "C", text: "ACK" },
            { key: "D", text: "SYN" }
        ],
        correct: "B",
        explanation: "یک RST نشان می‌دهد پورت بسته است. در بسیاری از انواع اسکن TCP، پاسخ RST در جواب درخواست اتصال نشان می‌دهد که پورت در دسترس نیست."
    },
    {
        id: 10,
        question: "دست دادن سه‌مرحله‌ای (Three-way handshake) چیست؟",
        options: [
            { key: "A", text: "توالی آغازین یک اتصال TCP" },
            { key: "B", text: "نوعی اسکن نیمه‌باز" },
            { key: "C", text: "یک اسکن درخت کریسمس" },
            { key: "D", text: "بخشی از یک اسکن UDP" }
        ],
        correct: "A",
        explanation: "دست دادن سه‌مرحله‌ای در ابتدای هر اتصال TCP اتفاق می‌افتد."
    },
    {
        id: 11,
        question: "یک اسکن تمام-باز (Full-open) به این معنی است که دست دادن سه‌مرحله‌ای تکمیل شده است. تفاوت بین این و یک اسکن نیمه‌باز چیست؟",
        options: [
            { key: "A", text: "نیمه‌باز از TCP استفاده می‌کند." },
            { key: "B", text: "نیمه‌باز از UDP استفاده می‌کند." },
            { key: "C", text: "نیمه‌باز شامل ACK نهایی نمی‌شود." },
            { key: "D", text: "نیمه‌باز شامل ACK نهایی می‌شود." }
        ],
        correct: "C",
        explanation: "دست دادن سه‌مرحله‌ای بخشی از هر اتصال TCP است، اما در مورد اسکن نیمه‌باز، یک ACK نهایی ارسال نمی‌شود، بنابراین اتصال نیمه‌کاره باقی می‌ماند."
    },
    {
        id: 12,
        question: "توالی دست دادن سه‌مرحله‌ای چیست؟",
        options: [
            { key: "A", text: "SYN, SYN-ACK, ACK" },
            { key: "B", text: "SYN, SYN-ACK" },
            { key: "C", text: "SYN, ACK, SYN-ACK" },
            { key: "D", text: "SYN, ACK, ACK" }
        ],
        correct: "A",
        explanation: "توالی کامل برای برقراری اتصال شامل SYN, SYN-ACK, ACK است."
    },
    {
        id: 13,
        question: "اسکن اکو ICMP (ICMP echo scan) چیست؟",
        options: [
            { key: "A", text: "یک پینگ سوییپ (Ping sweep)" },
            { key: "B", text: "یک اسکن SYN" },
            { key: "C", text: "یک اسکن درخت کریسمس" },
            { key: "D", text: "بخشی از یک اسکن UDP" }
        ],
        correct: "A",
        explanation: "یک اسکن اکو ICMP نوعی اسکن پینگ سوییپ است."
    },
    {
        id: 14,
        question: "کدام‌یک بهترین توصیف برای اسکن آسیب‌پذیری است؟",
        options: [
            { key: "A", text: "راهی برای یافتن پورت‌های باز" },
            { key: "B", text: "راهی برای ترسیم نمودار شبکه" },
            { key: "C", text: "یک حمله پروکسی" },
            { key: "D", text: "راهی برای خودکارسازی کشف آسیب‌پذیری‌ها" }
        ],
        correct: "D",
        explanation: "اسکن‌های آسیب‌پذیری برای پیدا کردن ضعف‌ها در یک سیستم طراحی شده‌اند و معمولاً خودکار هستند."
    },
    {
        id: 15,
        question: "هدف پروکسی چیست؟",
        options: [
            { key: "A", text: "برای کمک به اسکن" },
            { key: "B", text: "برای انجام یک اسکن" },
            { key: "C", text: "برای مخفی نگه داشتن یک اسکن" },
            { key: "D", text: "برای خودکارسازی کشف آسیب‌پذیری‌ها" }
        ],
        correct: "C",
        explanation: "یک پروکسی برای پنهان کردن طرفی که اسکن را راه‌اندازی می‌کند، استفاده می‌شود."
    },
    {
        id: 16,
        question: "از Tor برای چه کاری استفاده می‌شود؟",
        options: [
            { key: "A", text: "برای پنهان کردن مرور وب" },
            { key: "B", text: "برای پنهان کردن فرآیند اسکن" },
            { key: "C", text: "برای خودکارسازی اسکن" },
            { key: "D", text: "برای پنهان کردن بنر روی سیستم" }
        ],
        correct: "B",
        explanation: "Tor طراحی شده است تا فرآیند اسکن و همچنین منشأ اسکن را پنهان کند. علاوه بر این، می‌تواند خدمات رمزنگاری برای پنهان کردن خود ترافیک ارائه دهد."
    },
    {
        id: 17,
        question: "چرا ممکن است نیاز داشته باشید از پروکسی برای انجام اسکن استفاده کنید؟",
        options: [
            { key: "A", text: "برای افزایش ناشناس بودن (Anonymity)" },
            { key: "B", text: "برای فریب دادن فایروال‌ها" },
            { key: "C", text: "برای انجام اسکن‌های نیمه‌باز" },
            { key: "D", text: "برای انجام اسکن‌های تمام-باز" }
        ],
        correct: "A",
        explanation: "شما برای انجام اسکن نیازی به استفاده از پروکسی ندارید، اما استفاده از آن فرآیند اسکن را پنهان می‌کند و نظارت بر آن را توسط قربانی یا سایر طرف‌ها دشوارتر می‌سازد."
    },
    {
        id: 18,
        question: "یک اسکن آسیب‌پذیری راه خوبی برای انجام چه کاری است؟",
        options: [
            { key: "A", text: "یافتن پورت‌های باز" },
            { key: "B", text: "یافتن ضعف‌ها" },
            { key: "C", text: "یافتن سیستم‌عامل‌ها" },
            { key: "D", text: "شناسایی سخت‌افزار" }
        ],
        correct: "B", // Note: Source lists A and B. But single choice is usually B as the primary purpose. I'll stick to B as the defining characteristic. However, in source text it says "18. A, B". I will modify the options or explanation to reflect finding weaknesses is the main goal.
        explanation: "اسکنرهای آسیب‌پذیری برای یک فرد امنیتی ضروری هستند تا با یافتن ضعف‌ها (و پورت‌های باز) قبل از اینکه مهاجم آن‌ها را پیدا کند، سیستم‌های خود را تقویت کنند."
    },
    {
        id: 19,
        question: "یک بنر می‌تواند چه کاری انجام دهد؟",
        options: [
            { key: "A", text: "شناسایی یک سیستم‌عامل" },
            { key: "B", text: "کمک در حین اسکن" },
            { key: "C", text: "شناسایی ضعف‌ها" },
            { key: "D", text: "شناسایی یک سرویس" }
        ],
        correct: "D",
        explanation: "یک بنر می‌تواند روی بسیاری از سرویس‌ها تغییر داده شود تا به راحتی شناسایی نشوند. اگر این کار انجام نشود، می‌توان از ابزارهایی مانند Telnet برای کسب اطلاعات درباره یک سرویس استفاده کرد."
    },
    {
        id: 20,
        question: "برای انجام چه نوع اسکنی به nmap نیاز است؟",
        options: [
            { key: "A", text: "اسکن پورت" },
            { key: "B", text: "اسکن آسیب‌پذیری" },
            { key: "C", text: "اسکن سرویس" },
            { key: "D", text: "اسکن تهدید" }
        ],
        correct: "A",
        explanation: "Nmap برای انجام اسکن‌ها علیه پورت‌ها روی یک سیستم یا گروهی از سیستم‌ها طراحی شده است و محبوب‌ترین ابزار در این دسته است."
    }
];

export default quizData;