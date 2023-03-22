$(document).ready(function () {
    new Typed('.firstText', {
        strings: ["Hi, I'm Shreyas Walhekar 👋"],
        typeSpeed: 20,
        startDelay: 900,
        showCursor: false
      });
    }),
    new Typed('.personalInfo', {
        strings: ["I'm a Frontend Developer (Well at least trying to be!).<br> I love to make web and mobile applications!👨‍💻<br>  I am from india.My passion is to create cool websites using HTML & CSS.I have built a 2 websites and I have also made a simple calculator. My school name is Jain English School.I have a 72% in 10th class. In 12th I have got 62% from science field. And last My college name is Indira College of Engineering and Management. I am a third year student in Computer Engineering Department."],
        typeSpeed: 50,
        startDelay: 1800,
        showCursor: false
    }),
    new Typed('.mediaInfoStart', {
        strings: ["You can check out my"],
        typeSpeed: 60,
        startDelay: 5500,
        showCursor: false
    }),
    new Typed('.mediaInfoEnd', {
        strings: ["By clicking the icon down below"],
        typeSpeed: 70,
        startDelay: 7000,
        showCursor: false
    }),
    new Typed('.mailInfo', {
        strings: ["Get in touch <a href='mailto:shreyaswalhekar@gmail.com'>shreyaswalhekar@gmail.com</a><span class='cursor'>_</span>"],
        typeSpeed: 70,
        startDelay: 8500,
        showCursor: false
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-138208404-1");