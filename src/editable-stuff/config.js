// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#1b767c, #1b767c",
  firstName: "Chris",
  middleName: "",
  lastName: "Filiatrault",
  message: "Software Developer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Chris-Filiatrault",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chris-filiatrault/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About",
  imageLink: require("../editable-stuff/2021-green-lower-res.jpg"),
  imageSize: 375,
  message1: "Hi there! My name's Chris.",
  message2: "I graduated with a Bachelor of Economics from the Australian National University. Statistical courses introduced me to the world of programming, where bit by bit I've enjoyed skilling up and now working as a Developer. Outside of work and study I enjoy road cycling and mountain biking, successfully manage a condition called Fibromyalgia and speak Japanese.",
  // resume: "https://1drv.ms/b/s!ArD4GThUJSRbmddvtoJ9QmLRG3Z5lw?e=MnhFG9",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Chris-filiatrault", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/2021-green-lower-res.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/2021-green-lower-res.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS/JS", value: 85 },
    { name: "React", value: 70 },
    { name: "Source Control", value: 80 },
    { name: "iOS Development", value: 90 },
    { name: "OOP (Python, C#)", value: 70 },
    { name: "MarkLogic (NoSQL)", value: 75 },
    { name: "Statistics/Data Analysis", value: 80 },
    { name: "Japanese", value: 90 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Learning", value: 95 },
    { name: "Critial Thinking", value: 90 },
    { name: "Teamwork", value: 85 },
    { name: "Communication", value: 90 },
    { name: "Adaptability", value: 75 },
    { name: "Time Management", value: 90 },
    { name: "Emotional Awareness", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Developer positions in the Front End or .NET space. To arrange a conversation, please feel free to reach out on "
};

const experiences = {
  show: false,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    }
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
