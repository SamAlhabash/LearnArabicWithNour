import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    label: "General Excercises تدريبات عامّة",
    isTitle: true,
  },
  {
    label: "التّعابير الشّائعة",
    icon: "far fa-comment",
    subItems: [
      {
        label: "أرتّبُ المحادثة",
        excerciseLink:
          "https://www.wordwall.net/embed/ab5e8beb57f8416c9a8206db643e69b6?themeId=1&templateId=50",
      },
      {
        label: "جُمل وتعابير شائعة",
        excerciseLink:
          "https://www.wordwall.net/embed/273cad984fd949d4b2a9bd62c03c1418?themeId=1&templateId=3",
      },
      {
        label: "متى أستخدم التّعابير الآتية؟",
        excerciseLink:
          "https://www.wordwall.net/embed/8143a9848b444c38ad6a4e0c9efecde1?themeId=1&templateId=46",
      },
      {
        label: "تعابيرُ الصَّفِّ",
        excerciseLink:
          "https://www.wordwall.net/embed/79250a12917040d3a9391d3a6d3b50fe?themeId=1&templateId=46",
      },
      {
        label: "التّعابير المفتاحيّة- 1",
        excerciseLink:
          "https://www.wordwall.net/embed/e6d7469dc8fd40c393098ac06090898c?themeId=1&templateId=3",
      },
    ],
  },
  {
    label: "الأرقامُ",
    icon: "fas fa-sort-numeric-up-alt",
    subItems: [
      {
        label: "الأرقام من1 إلى 10 (عجلة الأرقام)",
        excerciseLink:
          "https://www.wordwall.net/embed/b02391ef2b2a44e7a9eacf417a4b0f71?themeId=52&templateId=8",
      },
      {
        label: "الأرقام جمع وضرب",
        excerciseLink:
          "https://www.wordwall.net/embed/d0558f1f7f7b46659ea56e400cd9ef8e?themeId=1&templateId=46",
      },
      {
        label: "الأرقام في جُمل بسيطة",
        excerciseLink:
          "https://www.wordwall.net/embed/6dad8eb8ac9643169d020316e51bccf3?themeId=1&templateId=46",
      },
      {
        label: "أربط بين الأرقام وكتابتها",
        excerciseLink:
          "https://www.wordwall.net/embed/2efdfcb3ad4143ab8e7c0753ae7b202b?themeId=1&templateId=54",
      },
    ],
  },
  {
    label: "في المدرسة",
    icon: "fas fa-school",
    subItems: [
      {
        label: "أدوات المدرسة",
        excerciseLink:
          "https://www.wordwall.net/embed/bd49cc2f7fa44449a5b84a041fa2273e?themeId=1&templateId=46",
      },
      {
        label: " المدرسة- أربط بين السؤال والجواب",
        excerciseLink:
          "https://www.wordwall.net/embed/8aa98834fed24963828a5655c1ad492a?themeId=1&templateId=3",
      },
      {
        label: "المدرسة- المفرد والجمع",
        excerciseLink:
          "https://www.wordwall.net/embed/b6f52bcd727847b7adc1e317035b9d7d?themeId=1&templateId=3",
      },
    ],
  },
  {
    label: "أسرتي",
    icon: "fas fa-child",
    subItems: [
      {
        label: "أسرتي- مطابقة",
        excerciseLink:
          "https://www.wordwall.net/embed/56fd06c10264492798ab5e0a6cd34fd8?themeId=1&templateId=46",
      },
      {
        label: "أسرتي - هذا وهذه",
        excerciseLink:
          "https://www.wordwall.net/embed/e54f1864b5894919bc9e2e43b57cc970?themeId=1&templateId=2",
      },
      {
        label: "أسرتي - من هذا/هذه؟",
        excerciseLink:
          "https://www.wordwall.net/embed/3865986992c64004ade0c781d8698fc6?themeId=29&templateId=30",
      },
    ],
  },
  {
    label: "وسائل المواصلات",
    excerciseLink:
      "https://wordwall.net/embed/44dd4f59b1fa4e88b98af4cdf48a6038?themeId=1&templateId=46",
    icon: "fas fa-car",
  },
  {
    label: "الحيوانات",
    excerciseLink:
      "https://www.wordwall.net/embed/77b873abeac44001b19e3f1eedb80c12?themeId=41&templateId=5",
    icon: "fas fa-dog",
  },
  {
    label: "المِهن",
    icon: "fas fa-user-md",
    subItems: [
      {
        label: "مطابقة المهن",
        excerciseLink:
          "https://wordwall.net/embed/4dc11cdd4cf7411fb66588e97cc8bcc6?themeId=1&templateId=73",
      },
      {
        label: "المهن، هذا وهذه",
        excerciseLink:
          "https://wordwall.net/embed/ab8923d38cbd4554a6084f2dfee65145?themeId=1&templateId=3",
      },
    ],
  },
  {
    label: "الأماكن",
    icon: "fas fa-map-marked-alt",
    subItems: [
      {
        label: "الأماكن - 1",
        excerciseLink:
          "https://www.wordwall.net/embed/9f9832bd462f4b648180f6878c2b49ec?themeId=1&templateId=5",
      },
      {
        label: "الأماكن - 2",
        excerciseLink:
          "https://www.wordwall.net/embed/ba220eb58dad4383908b4e042a36b2b0?themeId=1&templateId=46",
      },
    ],
  },
  {
    label: "Book's Excercises تدريبات الكتاب",
    icon: "",
    isTitle: true,
  },
  {
    label: "تدريبات كتاب pr. A1.",
    icon: "fas fa-book",
    subItems: [
      {
        label: "المجموعة الأولى للحروف",
        excerciseLink:
          "https://wordwall.net/embed/0d7579a81799416891ac7c26d497daef?themeId=29&templateId=30",
      },
      {
        label: "تدريبات المجموعة الأولى",
        excerciseLink:
          "https://wordwall.net/embed/c037695626be4b3eafe8677476a01279?themeId=1&templateId=46",
      },
      {
        label: "المجموعة الثانية والأولى",
        excerciseLink:
          "https://wordwall.net/embed/e68c3b4f15404115832bf2c7b0759910?themeId=1&templateId=2",
      },
      {
        label: "تدريبات المجموعة الثّانية",
        excerciseLink:
          "https://wordwall.net/embed/114384064a5d4fa7a9252b6d93ccd495?themeId=1&templateId=46",
      },
      {
        label: "أرتّبُ حروف الكلمات في جُمل (حروف المجموعة2)",
        excerciseLink:
          "https://wordwall.net/embed/c98627973e7c40e78cf41a349657d5b3?themeId=1&templateId=38",
      },
      {
        label: "كلمات تبدأُ ب(ج) و(ح)",
        excerciseLink:
          "https://wordwall.net/embed/a99da4a6301e440eb4195e537c20b310?themeId=1&templateId=5",
      },
      {
        label: "ج ح خ ع غ",
        excerciseLink:
          "https://wordwall.net/embed/a02ee3883c2d48c6b152995d235e6873?themeId=29&templateId=30",
      },
      {
        label: "أستمعُ وأختارُ (ح) أو (هـ)",
        excerciseLink:
          "https://wordwall.net/embed/3410725fd1a84cc087db166c62beb4eb?themeId=1&templateId=2",
      },
    ],
  },
  {
    label: "Grammar قواعد",
    icon: "",
    isTitle: true,
  },
  {
    label: "المُذكّر والمؤنَّث",
    excerciseLink:
      "https://wordwall.net/embed/8fdfa6b44f5e45c89e1818846667f97c?themeId=1&templateId=37",
    icon: "fas fa-venus-mars",
  },
  {
    label: "هذا- هذه (أسماء الإشارة)",
    icon: "fas fa-people-arrows",
    subItems: [
      {
        label: "أختارُ هذا- هذه",
        excerciseLink:
          "https://www.wordwall.net/embed/79304d2fd3ad48e196731b7a23b81826?themeId=1&templateId=5",
      },
      {
        label: "أقرأُ وأطابق",
        excerciseLink:
          "https://www.wordwall.net/embed/9aa503d3eca94a9eaca67453690760d1?themeId=45&templateId=3",
      },
      {
        label: "أختارُ (ما؟ أو من؟)",
        excerciseLink:
          "https://www.wordwall.net/embed/4394d3414dde427e9a8e800fd33d3474?themeId=41&templateId=5",
      },
      {
        label: "الضَّمائر وأسماء الإشارة",
        excerciseLink:
          "https://www.wordwall.net/embed/0153f9c8751d491d803e4f5f252b3519?themeId=46&templateId=36",
      },
    ],
  },
  {
    label: "المفرد والجمع",
    icon: "fas fa-users",
    subItems: [
      {
        label: "جمع التّكسير",
        excerciseLink:
          "https://www.wordwall.net/embed/8f0dbdfcdd08492a9d73c32936af88a6?themeId=52&templateId=8",
      },
      {
        label: "أصلُ بين المُفرد والجمع - 1",
        excerciseLink:
          "https://www.wordwall.net/embed/eaeccbdf2d894210bbda89ccbb7401f2?themeId=1&templateId=46",
      },
      {
        label: "أصلُ بين المُفرد والجمع - 2",
        excerciseLink:
          "https://wordwall.net/embed/152148945c164b869c1a3d953981b4a6?themeId=1&templateId=46",
      },
    ],
  },
  {
    label: "الضَّمائر",
    icon: "fas fa-pen-square",
    subItems: [
      {
        label: "عجلةُ الضَّمائر المُفردة",
        excerciseLink: "",
      },
      {
        label: "عجلةُ الضَّمائر",
        excerciseLink:
          "https://www.wordwall.net/embed/bd9f36731ebc4409bb57d39a9468b780?themeId=52&templateId=8",
      },
    ],
  },
  {
    label: "الفعل المضارع",
    icon: "far fa-calendar-check",
    subItems: [
      {
        label: "عجلة أيقونات الفعل",
        excerciseLink:
          "https://www.wordwall.net/embed/b74098e540e84df2a510fb5f8763f26a?themeId=52&templateId=8",
      },
      {
        label: "أُحدّد الفعل",
        excerciseLink:
          "https://www.wordwall.net/embed/446eab782a77427da6078d44036de034?themeId=31&templateId=69",
      },
      {
        label: "أقرأُ الفعل وأختارُ الصُّورة",
        excerciseLink:
          "https://www.wordwall.net/embed/c74589169b0a43e88b32d6f1ab23bbff?themeId=1&templateId=5",
      },
      {
        label: "مطابقة صور الأفعال وتذكّرها",
        excerciseLink:
          "https://www.wordwall.net/embed/46094c51413149f9a9e74ead00ac2744?themeId=1&templateId=25",
      },
      {
        label: "أحدّد الفعل وأختارُ حروفه",
        excerciseLink:
          "https://www.wordwall.net/embed/1b11c22cf83541b0a7e85d855d3399a0?themeId=62&templateId=73",
      },
      {
        label: "مطابقة الجُملة والصُّورة",
        excerciseLink:
          "https://www.wordwall.net/embed/b95a68aa4c43436a865f799844804f16?themeId=1&templateId=46",
      },
      {
        label: "مضارع+ أنا+ حروف الجر",
        excerciseLink:
          "https://www.wordwall.net/embed/2515930ac36b4a78b2732075c4f7a6e6?themeId=31&templateId=69",
      },
      {
        label: "إسناد الفعل المُضارع",
        excerciseLink:
          "https://www.wordwall.net/embed/d9e6b139569a4b7bb6b049b4f3ebcb49?themeId=1&templateId=3",
      },
      {
        label: "أُعبّر ُ عن الصُّورة بجملة فعليَّة",
        excerciseLink:
          "https://www.wordwall.net/embed/cccb08ca71e54ca7a44c98553fbff510?themeId=41&templateId=30",
      },
      {
        label: "أسند الفعل إلى الضمير المكتوب",
        excerciseLink:
          "https://www.wordwall.net/embed/1762fc4704854a83aac01466e472b96c?themeId=52&templateId=8",
      },
    ],
  },
  {
    label: "أدواتُ الاستفهام",
    icon: "fas fa-question-circle",
    subItems: [
      {
        label: "أدوات الاستفهام - 1",
        excerciseLink:
          "https://www.wordwall.net/embed/ffaffc64367c475fb64beae4f81bd382?themeId=1&templateId=3",
      },
      {
        label: "أختارُ أداة الاستفهام",
        excerciseLink:
          "https://wordwall.net/embed/f81bc0454e3342ea850d09b373364058?themeId=1&templateId=3",
      },
      {
        label: "أربط بين السؤال والجواب المناسب",
        excerciseLink:
          "https://wordwall.net/embed/c4378117705c4c8a9ec986ca1cff0121?themeId=1&templateId=3",
      },
    ],
  },
  {
    label: "التاء المربوطة والمبسوطة",
    icon: "fas fa-scroll",
    subItems: [
      {
        label: "أختارُ (ة) أو (ت)",
        excerciseLink:
          "https://www.wordwall.net/embed/cb8f32748b084af896e1bc1ed9c344b3?themeId=48&templateId=2",
      },
    ],
  },
  {
    label: "النّفي",
    icon: "far fa-times-circle",
    subItems: [
      {
        label: "أنفِ الجُمل",
        excerciseLink:
          "https://www.wordwall.net/embed/b33b4ab3620847039e3a0b9aaf47e67a?themeId=2&templateId=30",
      },
    ],
  },
  {
    label: "كلماتٌ وأوزانٌ",
    icon: "fas fa-pencil-ruler",
    excerciseLink:
      "https://www.wordwall.net/embed/c5aef35a8ee04b17b83f3ec19cfd1af9?themeId=28&templateId=8",
  },
  // {
  //   label: "Web Apps",
  //   isTitle: true,
  // },
  // {
  //   label: "Email",
  //   icon: "mail",
  //   subItems: [
  //     {
  //       label: "Inbox",
  //       link: "/apps/email/inbox",
  //     },
  //     {
  //       label: "Read",
  //       link: "/apps/email/read",
  //     },
  //     {
  //       label: "Compose",
  //       link: "/apps/email/compose",
  //     },
  //   ],
  // },
  // {
  //   label: "Chat",
  //   icon: "message-square",
  //   link: "/apps/chat",
  // },
  // {
  //   label: "Calendar",
  //   icon: "calendar",
  //   link: "/apps/calendar",
  //   badge: {
  //     variant: "primary",
  //     text: "New",
  //   },
  // },
  // {
  //   label: "Components",
  //   isTitle: true,
  // },
  // {
  //   label: "UI Kit",
  //   icon: "feather",
  //   subItems: [
  //     {
  //       label: "Alerts",
  //       link: "/ui-components/alerts",
  //     },
  //     {
  //       label: "Badges",
  //       link: "/ui-components/badges",
  //     },
  //     {
  //       label: "Breadcrumbs",
  //       link: "/ui-components/breadcrumbs",
  //     },
  //     {
  //       label: "Buttons",
  //       link: "/ui-components/buttons",
  //     },
  //     {
  //       label: "Button group",
  //       link: "/ui-components/button-group",
  //     },
  //     {
  //       label: "Cards",
  //       link: "/ui-components/cards",
  //     },
  //     {
  //       label: "Carousel",
  //       link: "/ui-components/carousel",
  //     },
  //     {
  //       label: "Collapse",
  //       link: "/ui-components/collapse",
  //     },
  //     {
  //       label: "Datepicker",
  //       link: "/ui-components/datepicker",
  //     },
  //     {
  //       label: "Dropdowns",
  //       link: "/ui-components/dropdowns",
  //     },
  //     {
  //       label: "List group",
  //       link: "/ui-components/list-group",
  //     },
  //     {
  //       label: "Media object",
  //       link: "/ui-components/media-object",
  //     },
  //     {
  //       label: "Modal",
  //       link: "/ui-components/modal",
  //     },
  //     {
  //       label: "Navs",
  //       link: "/ui-components/navs",
  //     },
  //     {
  //       label: "Navbar",
  //       link: "/ui-components/navbar",
  //     },
  //     {
  //       label: "Pagination",
  //       link: "/ui-components/pagination",
  //     },
  //     {
  //       label: "Popovers",
  //       link: "/ui-components/popovers",
  //     },
  //     {
  //       label: "Progress",
  //       link: "/ui-components/progress",
  //     },
  //     {
  //       label: "Rating",
  //       link: "/ui-components/rating",
  //     },
  //     {
  //       label: "Scrollbar",
  //       link: "/ui-components/scrollbar",
  //     },
  //     {
  //       label: "Spinners",
  //       link: "/ui-components/spinners",
  //     },
  //     {
  //       label: "Timepicker",
  //       link: "/ui-components/timepicker",
  //     },
  //     {
  //       label: "Tooltips",
  //       link: "/ui-components/tooltips",
  //     },
  //     {
  //       label: "Typeadhed",
  //       link: "/ui-components/typeahead",
  //     },
  //   ],
  // },
  // {
  //   label: "Advanced UI",
  //   icon: "anchor",
  //   subItems: [
  //     {
  //       label: "Cropper",
  //       link: "/advanced-ui/cropper",
  //     },
  //     {
  //       label: "Owl carousel",
  //       link: "/advanced-ui/owl-carousel",
  //     },
  //     {
  //       label: "Sweet alert",
  //       link: "/advanced-ui/sweet-alert",
  //     },
  //   ],
  // },
  // {
  //   label: "Forms",
  //   icon: "file-text",
  //   subItems: [
  //     {
  //       label: "Basic elements",
  //       link: "/form-elements/basic-elements",
  //     },
  //     {
  //       label: "Advanced elements",
  //       subItems: [
  //         {
  //           label: "Form validation",
  //           link: "/advanced-form-elements/form-validation",
  //         },
  //         {
  //           label: "Input mask",
  //           link: "/advanced-form-elements/input-mask",
  //         },
  //         {
  //           label: "Ng-select",
  //           link: "/advanced-form-elements/ng-select",
  //         },
  //         {
  //           label: "Ngx-chips",
  //           link: "/advanced-form-elements/ngx-chips",
  //         },
  //         {
  //           label: "Ngx-color-picker",
  //           link: "/advanced-form-elements/ngx-color-picker",
  //         },
  //         {
  //           label: "Ngx-dropzone",
  //           link: "/advanced-form-elements/ngx-dropzone-wrapper",
  //         },
  //       ],
  //     },
  //     {
  //       label: "Editors",
  //       link: "/form-elements/editors",
  //     },
  //     {
  //       label: "Wizard",
  //       link: "/form-elements/wizard",
  //     },
  //   ],
  // },
  // {
  //   label: "Charts & graphs",
  //   icon: "pie-chart",
  //   subItems: [
  //     {
  //       label: "ApexCharts",
  //       link: "/charts-graphs/apexcharts",
  //     },
  //     {
  //       label: "ChartJs",
  //       link: "/charts-graphs/chartjs",
  //     },
  //   ],
  // },
  // {
  //   label: "Tables",
  //   icon: "layout",
  //   subItems: [
  //     {
  //       label: "Basic tables",
  //       link: "/tables/basic-table",
  //     },
  //     {
  //       label: "Data table",
  //       link: "/tables/data-table",
  //     },
  //     {
  //       label: "Ngx-datatable",
  //       link: "/tables/ngx-datatable",
  //     },
  //   ],
  // },
  // {
  //   label: "Icons",
  //   icon: "smile",
  //   subItems: [
  //     {
  //       label: "Feather icons",
  //       link: "/icons/feather-icons",
  //     },
  //     {
  //       label: "Flag icons",
  //       link: "/icons/flag-icons",
  //     },
  //     {
  //       label: "Mdi icons",
  //       link: "/icons/mdi-icons",
  //     },
  //   ],
  // },
  // {
  //   label: "Pages",
  //   isTitle: true,
  // },
  // {
  //   label: "Special pages",
  //   icon: "book",
  //   subItems: [
  //     {
  //       label: "Blank page",
  //       link: "/general/blank-page",
  //     },
  //     {
  //       label: "Faq",
  //       link: "/general/faq",
  //     },
  //     {
  //       label: "Invoice",
  //       link: "/general/invoice",
  //     },
  //     {
  //       label: "Profile",
  //       link: "/general/profile",
  //     },
  //     {
  //       label: "Pricing",
  //       link: "/general/pricing",
  //     },
  //     {
  //       label: "Timeline",
  //       link: "/general/timeline",
  //     },
  //   ],
  // },
  // {
  //   label: "Authentication",
  //   icon: "unlock",
  //   subItems: [
  //     {
  //       label: "Login",
  //       link: "/auth/login",
  //     },
  //     {
  //       label: "Register",
  //       link: "/auth/register",
  //     },
  //   ],
  // },
  // {
  //   label: "Error",
  //   icon: "cloud-off",
  //   subItems: [
  //     {
  //       label: "404",
  //       link: "/error/404",
  //     },
  //     {
  //       label: "500",
  //       link: "/error/500",
  //     },
  //   ],
  // },
];
