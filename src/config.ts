export const siteConfig = {
  name: "Toni Moya",
  title: "Senior Software Engineer | .NET, Cloud & Modern Frontends",
  description: "Portfolio website of Toni Moya",
  accentColor: "#1d4ed8",
  social: {
    email: "toni.codeworks@gmail.com",
    linkedin: "https://linkedin.com/in/antoniojmoyabejarano",
    //twitter: "https://x.com/rfitzio",
    github: "https://github.com/tonicodev",
  },
  aboutMe: [
      "Senior software engineer with 15+ years’ experience in building scalable enterprise applications — primarily in the energy and corporate sectors.",
      "Specialized in .NET, Azure, and Vue.js ecosystems, and proficient in modern web and cloud technologies like React and AWS.",
      "Passionate about crafting robust cloud solutions, efficient APIs and modern SPA front‑ends, with a strong focus on maintainability, performance and technical quality."
  ], 
  skills: ["Software Architecture", "Tech Lead", "Design Patterns", ".NET", "Azure", "AWS", "Vue.js", "Javascript"],
  projects: [
      {
          name: "HAPI Web App",
          description:
              "Led and contributed to the migration of a .NET Windows Forms application to a modern web SPA built with Vue.js and TypeScript for the energy company Naturgy.",
          link: "",
          skills: [".NET", "Azure", "Vue.js", "vuetify", "devextreme", "typescript", "javascript", "energy"],
      },
    {
      name: "Incident Scheduling Web App",
      description:
        "Designed a prototype (mockup) of a web application for the energy company Naturgy.",
      link: "https://tonicodev.github.io/agendaIncidencias",
      skills: [".NET", "Azure", "Vue.js", "vuetify", "typescript", "javascript", "energy"],
    },
    {
      name: "ETL Tool Development: CATyE",
      description:
        "Contributed to the development team responsible for creating the ETL tool \"CATyE\"",
      link: "",
      skills: [".NET", "Windows Forms", "SQLServer", "ADO.NET", "WCF"],
    },
    {
      name: "App Web Registro de Inducciones",
      description:
        "Developed an internal web application for the Gynecology department at Vélez-Málaga Regional Hospital",
      link: "",
      skills: [".NET", "Vue.js", "vuetify", "PostgreSQL", "typescript", "javascript"],
    },
  ],
  experience: [
    {
      company: "Unatec",
      title: "Engineering Lead",
      dateRange: "Jul 2018 - Present",
      bullets: [
        "Led migration from legacy .NET systems to Azure-based microservices",
        "Oversaw frontend modernization using Vue.js and TypeScript",
        "Mentored developers, fostering technical growth and best practices",
        "Improved scalability and maintainability across enterprise solutions",
        "Implemented CI/CD pipelines and DevOps workflows to optimize deployments"
      ],
    },
    {
      company: "Unatec",
      title: "Senior Software Engineer",
      dateRange: "Jul 2014 - Jun 2018",
      bullets: [
        "Developed and maintained scalable web applications using ASP.NET and jQuery",
        "Designed RESTful APIs and integrated them with JS frontends",
        "Implemented cloud solutions and CI/CD pipelines in Azure",
        "Improved performance and maintainability of enterprise applications"
      ],
    },
    {
      company: "ICES SA",
      title: "Full Stack Developer",
      dateRange: "May 2012 - Jul 2014",
      bullets: [
          "Built full stack web applications using .NET Framework",
          "Developed RESTful APIs and integrated them with frontend",
          "Worked across backend and frontend layers to deliver end-to-end features",
      ],
    },
  ],
  education: [
    {
      school: "University of Córdoba, Spain",
      degree: "Bachelor’s Degree in Computer Management Engineering",
      dateRange: "2012",
      achievements: [
      ],
    },
    {
      school: "Microsoft",
      degree: "Microsoft Certified: Azure Developer Associate", 
      link: "https://learn.microsoft.com/api/credentials/share/es-es/AntonioMoyaBejarano-9208/FA1CDCEBDA3832CE?sharingId=95A567FE75CC0CD5",
      dateRange: "2022",
      achievements: [
      ],
    },
      {
          school: "Microsoft",
          degree: "Microsoft Certified Solutions Developer: Web Applications",
          dateRange: "2016",
          achievements: [
          ],
      },
      {
          school: "Microsoft",
          degree: "Microsoft Certified Solutions Developer: App Builder",
          dateRange: "2016",
          achievements: [
          ],
      },
      {
          school: "Microsoft",
          degree: "Microsoft Specialist: Programming in C#",
          dateRange: "2016",
          achievements: [
          ],
      },
      {
          school: "Microsoft",
          degree: "MCPS: Microsoft Certified Professional",
          dateRange: "2016",
          achievements: [
          ],
      },
  ],
};
