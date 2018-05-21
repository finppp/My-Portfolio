import firebaseSVG from '../icons/firebase.svg'
import reactSVG from '../icons/react.svg'
import gitSVG from '../icons/git.svg'
import cssSVG from '../icons/css3.svg'
import githubSVG from '../icons/github.svg'
import photoshopSVG from '../icons/photoshop.svg'
import illustratorSVG from '../icons/illustrator.svg'
import javascriptSVG from '../icons/javascript.svg'
import googleSVG from '../icons/google.svg'
import cloudSVG from '../icons/cloud.svg'
import htmlSVG from '../icons/html5.svg'
import wordpressSVG from '../icons/wordpress.svg'
import cSVG from '../icons/c.svg'
import seoSVG from '../icons/seo.svg'
import sassSVG from '../icons/sass.svg'
import arduinoSVG from '../icons/arduino.svg'
import audioSVG from '../icons/audio.svg'
import cordovaSVG from '../icons/cordova.svg'
import webpackSVG from '../icons/webpack.svg'
import gulpSVG from '../icons/gulp.svg'
import nodejsSVG from '../icons/nodejs.svg'

const skillData = [
  {
    title: `JavaScript`,
    icon: javascriptSVG,
    description: `I have over 5 years experience with JavaScript and is my strongest programming language.

    Each project in my portfolio has at least some use of JavaScript.`
  },
  {
    title: `ReactJS`,
    icon: reactSVG,
    description: `ReactJS is my go to framework for creating web apps.

    I have used ReactJS with Styled Components in several projects including this website.
    You can view the code to this portfolio on my GitHub page.`
  },
  {
    title: `Firebase`,
    icon: firebaseSVG,
    description: `I have used Firebase databases in many web applications. I have used it in this website to create the interactive grid system at the top of this page. `
  },
  {
    title: `Git`,
    icon: gitSVG,
    description: `A standard in version control. I have used this in every single project.`
  },
  {
    title: `Github`,
    icon: githubSVG,
    description: `I use Github on nearly all my projects. It is an amazing tool when working on code as a team. I have created created bug  reports on open source projects, helping other developers fix issues with their software. Through the years I have created hundreds of Issues on GitHub and spent time prioritising which issues need to be fixed first.`
  },
  {
    title: `HTML`,
    icon: htmlSVG,
    description: `I have used HTML for many years. Through to accessibility features such as ARIA. When to use certain tags and when to avoid.`
  },
  {
    title: `CSS3`,
    icon: cssSVG,
    description: `lorem`
  },
  {
    title: `Sass`,
    icon: sassSVG,
    description: `lorem`

  },
  {
    title: `Google Cloud Services`,
    icon: cloudSVG,
    description: `I have had the most use in hosting and maintenance using Googles Cloud infrastructure.
    This ranges from tasks such as scheduling database backups, installing SSL certificates, writing Cloud Functions to resize images in database storage and beyond.`
  },
  {
    title: `SEO & Analytics`,
    icon: seoSVG,
    description: `I have used Google AdWords, AdSense and Analytics. From searching for great keywords to target to altering content and copy to boost ranking performance.

    I have used Analytics on a range of projects from launch, using this information to help shape the future of the websites/Direction of the.`
  },
  {
    title: `Adobe CC`,
    icon: photoshopSVG,
    description: `I have used a variety of Adobes products grasping the essential tools required to get by.
    This has been a great lesson in image optimisation in the web world, learning about image sizing, compression and images formats.`
    // icon2: illustratorSVG,
  },
  {
    title: `C++`,
    icon: cSVG,
    description: `C++ was my introduction to the programming world. This is where my passion in programming began. This is a language that I have not had many opportunities to. But is a language I am looking to get back to learning and mastering.`
  },
  {
    title: `Cordova`,
    icon: cordovaSVG,
    description: `I have created several mobile applications using Cordova. This has allowed me to further my web programming skills while launching applications on the Google Play Store.`
  },
  {
    title: `WordPress`,
    icon: wordpressSVG,
    description: `I have created a wide range of websites using the wordpress contenet mangements system. I have also had excellent experience helping guide clients through how to use Wordpress`
  },
  {
    title: `Arduino & Electronics`,
    icon: arduinoSVG,
    description: `I have a good understanding of circuitry which has led me me havin g a great overall comporehensiln of input output systems. This was also my introduction to programming in C++, which Arduino code is a dialect of.`
  },
  {
    title: `Digital Audio & DSP`,
    icon: audioSVG,
    description: `With a BSc in Music and Audio Technology I have excellent knowledge of how audio systems work. Using software such as Max to design signal flows. Through to implementing these designs in web applications using JavaScript. I have written beat detection algorithms in JavaScript, which have been used in my Android applications I have written. `
  },
  {
    title: `Gulp & Grunt`,
    icon: gulpSVG,
    description: `I have used a range of build tools and task runners, all great for automating tasks and saving time.
    Although Gulp, Grunt and Webpack have their similarities, Webpacks hot and live reloading really makes it stand out from the crowd.`
  },
  {
    title: `Webpack`,
    icon: webpackSVG,
    description: `I have used a range of build tools and task runners, all great for automating tasks and saving time.
    Although Gulp, Grunt and Webpack have their similarities, Webpacks hot and live reloading really makes it stand out from the crowd.`
  },
  {
    title: `Node.js`,
    icon: nodejsSVG,
    description: `I have used a range of build tools and task runners, all great for automating tasks and saving time.
    Although Gulp, Grunt and Webpack have their similarities, Webpacks hot and live reloading really makes it stand out from the crowd.`
  }
]

export default skillData;


//This is a more updated version of skill data

// const skillData = [
//   {
//     title: `JavaScript`,
//     icon: javascriptSVG,
//     description: `I have over 5 years experience with JavaScript and is my strongest programming language and makes so much sense to me.
//
//     Most of the projects in my portfolio have at least some use of JavaScript.
//
// I have a great interest in keeping up with the latest features and looking to simplify and improve on code I have written.`
//   },
//   {
//     title: `ReactJS`,
//     icon: reactSVG,
//     description: `ReactJS is my go to framework for creating web apps.
//
//     I have used ReactJS with Styled Components in several projects including this website.
//     You can view the code to this portfolio on my GitHub page.`
//   },
//   {
//     title: `Firebase`,
//     icon: firebaseSVG,
//     description: `I have used Firebase databases in many web applications.
//
// An example of the? Firebase Realtime Database is in this website. I have used it to create the interactive grid system at the top of this page, allowing all users of the website to interact live with the same grid pattern anywhere in the world with very low latency.
//
// I have written and tested database rules for web applications including RowSquad and MyBoathouse, ensuring that the database is secure and clients data is protected.`
//   },
//   {
//     title: `Git`,
//     icon: gitSVG,
//     description: `The standard in version control. Git has been used in every project I have been part of, giving me over 4 years experience with this amazing tool.
//  `
//   },
//   {
//     title: `Github`,
//     icon: githubSVG,
//     description: `I use Github on nearly all my projects. It is an amazing tool when working on code as a team. I have created created bug  reports on open source projects, helping other developers fix issues with their software.
//
// Through the years I have created hundreds of Issues on GitHub and spent time prioritising which issues need to be fixed first.`
//   },
//   {
//     title: `HTML`,
//     icon: htmlSVG,
//     description: `I have used HTML for many years. Through to accessibility features such as ARIA. When to use certain tags and when to avoid.`
//   },
//   {
//     title: `CSS3 & Sass`,
//     icon: cssSVG,
//     description: `CSS is now a requirement for any engaging website. With 4 years experience using CSS and Sass creating designs from any brief is easy. `
//   },
//
//   {
//     title: `Google Cloud Services`,
//     icon: cloudSVG,
//     description: `I have had the most use in hosting and maintenance using Googles Cloud infrastructure.
//     This ranges from tasks such as scheduling database backups, installing SSL certificates, writing Cloud Functions to resize images in database storage and beyond.`
//   },
//   {
//     title: `SEO & Analytics`,
//     icon: seoSVG,
//     description: `I have used Google AdWords, AdSense and Analytics. From searching for great keywords to target to altering content and copy to boost ranking performance.
//
//     I have used Analytics on a range of projects from launch, using this information to help shape the future of the websites/Direction of the.`
//   },
//   {
//     title: `Adobe CC`,
//     icon: photoshopSVG,
//     description: `I have used a variety of Adobes products grasping the essential tools required to get by.
//     This has been a great lesson in image optimisation in the web world, learning about image sizing, compression and images formats.`
//     // icon2: illustratorSVG,
//   },
//   {
//     title: `C++`,
//     icon: cSVG,
//     description: `C++ was my introduction to the programming world. This is where my passion in programming began. This is a language that I have not had many opportunities to. But is a language I am looking to get back to learning and mastering.`
//   },
//   {
//     title: `Cordova`,
//     icon: cordovaSVG,
//     description: `I have created several mobile applications using Cordova. This has allowed me to further my web programming skills while launching applications on the Google Play Store.`
//   },
//   {
//     title: `WordPress`,
//     icon: wordpressSVG,
//     description: `I have created a wide range of websites using the wordpress contenet mangements system. I have also had excellent experience helping guide clients through how to use Wordpress`
//   },
//   {
//     title: `Arduino & Electronics`,
//     icon: arduinoSVG,
//     description: `I have a good understanding of circuitry which has led me me havin g a great overall comporehensiln of input output systems. This was also my introduction to programming in C++, which Arduino code is a dialect of.`
//   },
//
//
//
//
//
//
//
// {
//     title: `Digital Audio & DSP`,
//     icon: audioSVG,
//     description: `With a BSc in Music and Audio Technology I have excellent knowledge of how audio systems work. Using software such as Max to design signal flows.
//
// Through to implementing these designs in web applications using JavaScript. I have written beat detection algorithms in JavaScript, which have been used in my Android applications I have written. `
//   },
//   {
//     title: `Gulp, Grunt & Webpack`,
//     icon: webpackSVG,
//     description: `I have used a range of build tools and task runners, all great for automating tasks and saving time.
//     Although Gulp, Grunt and Webpack have their similarities, Webpacks hot and live reloading really makes it stand out from the crowd.`
//   },
// ]
