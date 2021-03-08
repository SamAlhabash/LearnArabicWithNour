import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    label: "Home",
    icon: "fas fa-home",
    link: "/home",
  },
  {
    label: "General Excercises تدريبات عامّة",
    isTitle: true,
  },
  {
    label: "التّعابير الشّائعة",
    icon: 'fas fa-list',
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
    excerciseLink:
      "https://wordwall.net/embed/4dc11cdd4cf7411fb66588e97cc8bcc6?themeId=1&templateId=73",
    icon: "fas fa-user-md",
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
    excerciseLink: "https://wordwall.net/embed/8fdfa6b44f5e45c89e1818846667f97c?themeId=1&templateId=37",
    icon: "fas fa-venus-mars",
  },
  {
    label: "هذا- هذه (أسماء الإشارة)",
    icon: "fas fa-people-arrows",
    subItems: [
      {
        label: "أختارُ هذا- هذه",
        excerciseLink: "",
      },
      {
        label: "أقرأُ وأطابق",
        excerciseLink: "",
      },
      {
        label: "أختارُ (ما؟ أو من؟)",
        excerciseLink: "",
      },
      {
        label: "الضَّمائر وأسماء الإشارة",
        excerciseLink: "",
      },
    ],
  },
  {
    label: "المفرد والجمع",
    icon: "fas fa-users",
    subItems: [
      {
        label: "جمع التّكسير",
      },
      {
        label: "أصلُ بين المُفرد والجمع - 1",
      },
      {
        label: "أصلُ بين المُفرد والجمع - 2",
      },
    ],
  },
  {
    label: "الضَّمائر",
    icon: "fas fa-pen-square",
    subItems: [
      {
        label: "عجلةُ الضَّمائر المُفردة",
      },
      {
        label: "عجلةُ الضَّمائر",
      },
    ],
  },
  {
    label: "الفعل المضارع",
    icon: "far fa-calendar-check",
    subItems: [
      {
        label: "عجلة أيقونات الفعل",
      },
      {
        label: "أُحدّد الفعل",
      },
      {
        label: "أقرأُ الفعل وأختارُ الصُّورة",
      },
      {
        label: "مطابقة صور الأفعال وتذكّرها",
      },
      {
        label: "أحدّد الفعل وأختارُ حروفه",
      },
      {
        label: "مطابقة الجُملة والصُّورة",
      },
      {
        label: "مضارع+ أنا+ حروف الجر",
      },
      {
        label: "إسناد الفعل المُضارع",
      },
      {
        label: "أُعبّر ُ عن الصُّورة بجملة فعليَّة",
      },
      {
        label: "أسند الفعل إلى الضمير المكتوب",
      },
    ],
  },
  {
    label: "أدواتُ الاستفهام",
    icon:'fas fa-question-circle',
    subItems: [
      {
        label: "أدوات الاستفهام - 1",
      },
      {
        label: "أختارُ أداة الاستفهام",
      },
    ],
  },
  {
    label: "التاء المربوطة والمبسوطة",
    subItems: [
      {
        label: "أختارُ (ة) أو (ت)",
      },
    ],
  },
  {
    label: "النّفي",
    icon: 'far fa-times-circle',
    subItems: [
      {
        label: "أنفِ الجُمل",
      },
    ],
  },
  {
    label: "كلماتٌ وأوزانٌ",
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
