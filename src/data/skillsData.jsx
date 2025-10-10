import htmlIcon from "../assets/icons/about_me/html.svg";
import cssIcon from "../assets/icons/about_me/css.svg";
import jsIcon from "../assets/icons/about_me/javascript.svg";
import reactIcon from "../assets/icons/about_me/react.svg";
import reduxIcon from "../assets/icons/about_me/redux.svg";
import figmaIcon from "../assets/icons/about_me/figma.svg";
import performanceIcon from "../assets/icons/about_me/perfor.png";
import WPIcon from "../assets/icons/about_me/wordpress.svg";
import gitIcon from "../assets/icons/about_me/git.svg";
import gitHubIcon from "../assets/icons/about_me/github.svg";
import webpackIcon from "../assets/icons/about_me/webpack.svg";
import viteIcon from "../assets/icons/about_me/vite.svg";
import sassIcon from "../assets/icons/about_me/sass.png";
import npmIcon from "../assets/icons/about_me/npm.svg";
import softIcon from "../assets/icons/about_me/soft.png";
import uberImg  from "../assets/img/works/uber.png";
import pulsImg  from "../assets/img/works/puls.png";
import employeesImg  from "../assets/img/works/employees.png";
import foodImg  from "../assets/img/works/food.png";
import movieImg  from "../assets/img/works/movie.png";
import windowsImg  from "../assets/img/works/windowsShop.png";
import marvelImg  from "../assets/img/works/marvel.png";
import weatherImg from "../assets/img/works/weather.png";



export const aboutInfo = {
  description: [
    `Привет! Меня зовут Валентина, я начинающий Frontend-разработчик.`,
    "Осваиваю создание современных, адаптивных веб-приложений. Пока в моём портфолио — учебные проекты, но каждый из них помогает мне оттачивать навыки и приближаться к уровню коммерческой разработки.",

    "Постоянно учусь и слежу за новыми трендами в веб-технологиях.",
    "Моя цель — превращать идеи в понятные, удобные и визуально приятные интерфейсы.",

    "В работе особенно ценю: чистоту и структуру кода, простоту пользовательского взаимодействия, внимание к деталям.",

    "Готова к новым вызовам и развитию в команде."
    
  ],
  resume: "/files/resume.pdf"
};


export const skills = [
  {
    category: "Website Development",
    icon: htmlIcon,
    alt: "html",
    title: "HTML5",
    text: "Семантическая разметка, адаптивная и кроссбраузерная верстка, Flexbox, Grid, медиа-запросы."
  },
  {
    category: "Website Development",
    icon: cssIcon,
    alt: "css",
    title: "CSS3",
    text: "Семантическая разметка, адаптивная и кроссбраузерная верстка, Flexbox, Grid, медиа-запросы."
  },
  {
    category: "Website Development",
    icon: jsIcon,
    alt: "javascript",
    title: "JavaScript (ES6+)",
    text: "Работа с DOM, промисы, async/await, модули."
  },
  {
    category: "Website Development",
    icon: reactIcon,
    alt: "react",
    title: "React",
    text: "SPA, функциональные компоненты, хуки, маршрутизация, работа с состоянием."
  },
  {
    category: "Website Development",
    icon: reduxIcon,
    alt: "redux",
    title: "Redux Toolkit",
    text: "Управление состоянием приложения, асинхронные запросы (createAsyncThunk), удобная архитектура."
  },
  
  // Web Design
  {
    category: "Web Design",
    icon: figmaIcon,
    alt: "ui-ux",
    title: "UI/UX",
    text: "Работа с макетами в Figma, удобство интерфейсов, внимание к деталям."
  },
  {
    category: "Web Design",
    icon: performanceIcon,
    alt: "performance",
    title: "Optimization",
    text: "Lazy loading, code splitting, оптимизация изображений и производительности приложения."
  },

  // WordPress Development
  {
    category: "WordPress Development",
    icon: WPIcon,
    alt: "wordpress",
    title: "WordPress",
    text: "Работа с темами и плагинами, настройка и кастомизация сайтов, базовая SEO-оптимизация."
  },

  // Tools & DevOps
  {
    category: "Tools & DevOps",
    icon: gitIcon,
    alt: "git",
    title: "Git",
    text: "Контроль версий, работа с ветками, коммиты."
  },
  {
    category: "Tools & DevOps",
    icon: gitHubIcon,
    alt: "github",
    title: "GitHub",
    text: "Совместная разработка, pull requests, деплой на GitHub Pages."
  },
  {
    category: "Tools & DevOps",
    icon: webpackIcon,
    alt: "webpack",
    title: "Webpack",
    text: "Сборка проекта, бандлинг модулей, настройка окружения."
  },
  {
    category: "Tools & DevOps",
    icon: viteIcon,
    alt: "vite",
    title: "Vite",
    text: "Быстрая сборка проектов, HMR, современное окружение."
  },
  {
    category: "Tools & DevOps",
    icon: sassIcon,
    alt: "sass",
    title: "Sass",
    text: "Препроцессор CSS: переменные, миксины, вложенность, импорты."
  },
  {
    category: "Tools & DevOps",
    icon: npmIcon,
    alt: "npm",
    title: "NPM",
    text: "Управление пакетами, скрипты, установка зависимостей."
  },

  // Soft Skills
  {
    category: "Soft Skills",
    icon: softIcon,
    alt: "soft-skills",
    title: "Soft Skills",
    text: "Командная работа, коммуникабельность, самостоятельность, желание учиться новому."
  }
];

export const categories = [...new Set(skills.map(skill => skill.category))];

export const project = [
  {
    name: "Сайт UBER",
    img: uberImg,
    src: "https://mvamks.github.io/Uber/",
    alt: "сайт заказа такси uber",
    title: "",
    text: "HTML5, CSS3, jQuery, SCSS, методология БЭМ"
  },

  {
    name: "Сайт Puls",
    img: pulsImg,
    src: "https://mvamks.github.io/Puls/",
    alt: "магазин пульсометров Puls",
    title: "",
    text: "HTML5, CSS3, jQuery, SCSS, методология БЭМ"
  },

   {
    name: "База данных сотрудников",
    img: employeesImg,
    src: "https://mvamks.github.io/Employees/",
    alt: "employees",
    title: "",
    text: "React 19, CRA (Create React App), CSS, LocalStorage, React ID Generator"
  },

  {
    name: "Сайт доставки еды",
    img: foodImg,
    src: "https://mvamks.github.io/FOOD_JS/",
    alt: "food",
    title: "Сайт доставки еды",
    text: "HTML5, CSS3 (Sass), JavaScript(ES6+), Babel, Webpack, Gulp, PostCSS, BrowserSync"
  },

   {
    name: "Movie Database",
    img: movieImg,
    src: "https://mvamks.github.io/Movie_Database/",
    alt: "movie",
    title: "",
    text: "JavaScript ES6+, HTML5/SCSS(Sass), Gulp, Webpack, Babel, BrowserSync, GitHub Pages, Fetch API, JSON Server "
  },

  {
    name: "Заказ окон",
    img: windowsImg,
    src: "https://mvamks.github.io/window/",
    alt: "сайт заказа окон windows",
    title: "",
    text: "JavaScript (ES6+), Babel + CoreJS, Gulp, Webpack, Slick Carousel, BrowserSync "
  },

  {
    name: "Информационный портал Marvel",
    img: marvelImg,
    src: "https://mvamks.github.io/marvel_starter-hook/",
    alt: "marvel",
    title: "",
    text: "React (Hooks), React Router, Sass (SCSS), Marvel Developer API, GitHub Pages (деплой)"
  },

  {
    name: "Приложение 'Погода'" ,
    img: weatherImg,
    src: "https://mvamks.github.io/Weather/",
    alt: "weather",
    title: "",
    text: "React 19, Redux Toolkit, Vite, Sass, React Loader Spinner, GitHub Pages"
  },
  
];