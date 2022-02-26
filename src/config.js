module.exports = {
  siteTitle: 'Abhishek Verma | Software Engineer',
  siteDescription:
    'Abhishek Verma is a Software Engineer at Bridge Solutions Group, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Abhishek Verma, Abhishek, Verma, abhishek460729, software engineer, bookmart, web developer, java, jamshedpur, bridge solutions group, srm',
  siteUrl: 'https://abhishekverma.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abhishek Verma',
  location: 'Jamshedpur, India',
  email: 'abhishek.verma4607@gmail.com',
  github: 'https://github.com/chandrikadeb7',
  twitterHandle: '@Abhishek460729',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abhi460729',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abhishekverma3912/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Abhishek460729',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abhishekverma4607',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
