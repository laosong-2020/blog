export default defineAppConfig({
  // Configure Content Wind here
  cover: 'assets/cover.jpg',
  profile: {
    image: 'https://avatars.githubusercontent.com/u/60795200?v=4',
    email: 'songzl0606@gmail.com',
    socials: {
      github: 'https://github.com/laosong-2020',
      linkedin: 'https://www.linkedin.com/in/zhenleisong/',
    }
  },
  education: [
    {
      schoolName: 'Harbing Institute of Technology',
      schoolLocation: 'Harbin, China',
      degree: 'B.E in Electronic Engineering',
      date: 'Sep. 2013 - Jul. 2017',
      imgSrc: '/logos/HITlogo.png',
      description: 'GPA: 3.5/4.0',
    },
    {
      schoolName: 'Texas A&M University',
      schoolLocation: 'College Station, TX',
      degree: 'M.S in Electronic Engineering',
      date: 'Jan. 2020 - May. 2021',
      imgSrc: '/logos/TAMULogo.png',
      description: 'GPA: 3.8/4.0',
    },
    {
      schoolName: 'Texas A&M University',
      schoolLocation: 'College Station, TX',
      degree: 'Ph.D in Geographic Information Science and Technology',
      date: 'Aug. 2021 - Present',
      imgSrc: '/logos/TAMULogo.png',
      description: 'GPA: 3.8/4.0',
    }
  ],
  experience: [
    {
      companyName: 'Huawei Technologies',
      companyLocation: 'Shanghai, China',
      position: 'Software Development Engineer',
      date: 'Jun. 2018 - Dec. 2019',
      imgSrc: '/logos/HuaweiLogo.png',
      description: '111'
    },
    {
      companyName: 'Sercomm Corporation',
      companyLocation: 'Suzhou, China',
      position: 'Software Development Engineer',
      date: 'Jul. 2017 - Jun. 2018',
      imgSrc: '/logos/SercommLogo.png',
      description: '222'
    },
    {
      companyName: 'OmniVision Technologies',
      companyLocation: 'Shanghai, China',
      position: 'Software Development Engineer Intern',
      date: 'Jun. 2016 - Oct. 2016',
      imgSrc: '/logos/OmniVisionLogo.png',
      description: '333'
    }
  ],
  skills: [
    {
      name: 'Python',
      level: '80',
    },
    {
      name: 'Linux C/C++',
      level: '70',
    },
    {
      name: 'Backend Development',
      level: '60',
    },
    {
      name: 'CI/CD',
      level: '70',
    },
    {
      name: 'Frontend Development',
      level: '40',
    },
    {
      name: 'GIS',
      level: '70',
    }
  ],
})
