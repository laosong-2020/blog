export const profile = {
  name: 'Zhenlei Song',
  image: 'https://avatars.githubusercontent.com/u/60795200?v=4',
  email: 'songzl0606@gmail.com',
  title: 'PhD in GIScience | Software Engineer',
  socials: {
    github: 'https://github.com/laosong-2020',
    linkedin: 'https://www.linkedin.com/in/zhenleisong/',
  },
}

export const education = [
  {
    schoolName: 'Texas A&M University',
    schoolLocation: 'College Station, TX',
    degree: 'Ph.D in Geographic Information Science and Technology',
    date: 'Aug. 2021 - Dec. 2025',
    imgSrc: '/logos/TAMULogo.png',
    imgSrcDark: '/logos/TAMULogo.png',   // replace with dark variant when ready
    description: 'GPA: 3.8/4.0',
  },
  {
    schoolName: 'Texas A&M University',
    schoolLocation: 'College Station, TX',
    degree: 'M.S in Electronic Engineering',
    date: 'Jan. 2020 - May. 2021',
    imgSrc: '/logos/TAMULogo.png',
    imgSrcDark: '/logos/TAMULogo.png',
    description: 'GPA: 3.8/4.0',
  },
  {
    schoolName: 'Harbing Institute of Technology',
    schoolLocation: 'Harbin, China',
    degree: 'B.E in Electronic Engineering',
    date: 'Sep. 2013 - Jul. 2017',
    imgSrc: '/logos/HITlogo.png',
    imgSrcDark: '/logos/HITlogo.png',
    description: 'GPA: 3.5/4.0',
  },
]

export const experience = [
  {
    companyName: 'Esri',
    companyLocation: 'Redlands, CA',
    position: 'Product Engineer',
    date: 'Jan. 2026 - Present',
    imgSrc: '/logos/Esri-Logo.wine.svg',
    imgSrcDark: '/logos/Esri-Logo.wine.svg',
    description: [] as string[],
  },
  {
    companyName: 'Texas A&M University',
    companyLocation: 'College Station, TX',
    position: 'Graduate Research Assistant',
    date: 'Aug. 2021 - Dec. 2025',
    imgSrc: '/logos/TAMULogo.png',
    imgSrcDark: '/logos/TAMULogo.png',
    description: [
      'Conducted research on geographic information systems and their applications.',
      'Published papers in peer-reviewed journals.',
      'Presented findings at international conferences.',
    ],
  },
  {
    companyName: 'Huawei Technologies',
    companyLocation: 'Shanghai, China',
    position: 'Software Development Engineer',
    date: 'Jun. 2018 - Dec. 2019',
    imgSrc: '/logos/HuaweiLogo.png',
    imgSrcDark: '/logos/HuaweiLogo.png',
    description: [
      'Developed LTE/NR L3 program with the focus on the UE mobility algorithm programming (UE access in, intra/inter frequency handover, redirection).',
      'Conducted department continuous integration tasks such as compile scripts maintenance and troubleshooting errors for product-level development.',
      'Debugged product-level abnormal rebooting errors based on log files, using GDB, decompiling to precisely find concerned code lines.',
    ],
  },
  {
    companyName: 'Sercomm Corporation',
    companyLocation: 'Suzhou, China',
    position: 'Software Development Engineer',
    date: 'Jul. 2017 - Jun. 2018',
    imgSrc: '/logos/SercommLogo.png',
    imgSrcDark: '/logos/SercommLogo.png',
    description: [
      'Developed security camera firmware program. The major task was based on TCP/IP communication.',
      'Led software updating for migrating from H.264 to H.265 protocol.',
      'Led the tuning tasks for the new-camera product during bring-up phase.',
    ],
  },
]

export const skills = [
  { name: 'Python', level: 80 },
  { name: 'Linux C/C++', level: 70 },
  { name: 'Backend Development', level: 60 },
  { name: 'CI/CD', level: 70 },
  { name: 'Frontend Development', level: 40 },
  { name: 'GIS', level: 70 },
]
