import {
    blender,
    photoshop,
    passgenerator,
    aftereffects,
    java,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    python,
    carrent,
    jobit,
    tripguide,
    geeka,
    star,
    threejs,
    mam,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name:"Python",
      icon:python,
    },
    {
      name:"blender",
      icon:blender
    },
    {
      name:"photoshop",
      icon:photoshop
    },
    
    {
      name:"After Effects",
      icon:aftereffects
    },

    
    {
      name:"java",
      icon:java,
    },
    

  ];
  
  const experiences = [
    {
      title: "First C Project",
      company_name: "Star Infotech College",
      icon: star,
      iconBg: "#383E56",
      date: "January 2023 - April 2023",
      points: [
        "Created a Hostel Management Project in C langauge.",
        "Work on the whole backend of a Management Application",
        "Implemented C language concepts with some graphics libraries of C language",
        "Guide: Smt. Dipti Kothari",
        "Teammate: Prateek Kumar"
      ],
    },
    {
      title: "Greater -Song from heart",
      company_name: "Star Infotech College",
      icon: star,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Developed a Basic HTML, CSS , JavaScript Frontend Website.",
        "A Normal Website with various songs and many CSS animations.",
        "It's is my first Frontend project.",
      ],
    },
    {
      title: "Saber Game Store",
      company_name: "Star Infotech college",
      icon: star,
      iconBg: "#383E56",
      date: "Dec 2023 - Feb 2024",
      points: [
        "A Highly Developed C++ project.",
        "My First Object Oriented C++ Non-Graphical Game Store Project.",
        "Project with Authorization,Database Management and Security.",
        "Guide : Smt Dipti Kothari & Mr Abid",
      ],
    },
    {
      title: "Full stack Portfolio",
      company_name: "Geeka Creatives",
      icon: geeka,
      iconBg: "#E6DEDD",
      date: "June 2024 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Works With Javascript Biggest Libraries like THREE JS , React JS , EMAIL JS etc.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tarun proved me wrong.",
      name: "Karan Deep",
      designation: "CFO",
      company: "Creams CO",
      image: "https://th.bing.com/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      testimonial:
        "Tarun is my student. Happy to see his progress. God bless you",
      name: "Smt Dipti Kothari",
      designation: "Senior Lecturer",
      company: "Star Infotech",
      image: mam,
    },
    {
      testimonial:
        "Nice Structure and Designs. You're going to be hired soon. God bless you.",
      name: "Mr. Hitesh ",
      designation: "Director",
      company: "Chai or code",
      image: "https://media.licdn.com/dms/image/C4D22AQFAc_gUfXxLDw/feedshare-shrink_1280/0/1656178486858?e=1720656000&v=beta&t=BoXLCKaTQprC58KmczmPO030cmhDpYTrvy-8zKgv3XQ",
    },
  ];
  
  const projects = [
    {
      name: "Tarun X Geeka Creatives",
      description:
        "A ReactXThree JS based Portfolio with attractive 3d visuals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Greater- Song from heart",
      description:
        "HTML , CSS , Javascript based Song Library website.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "BG changer",
      description:
        "A React JS based Background Image Changer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name:"Password Generator",
      description:"A React and Tailwind CSS based Auto Password Generator.",
      tags:[
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image:passgenerator,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  