const randomIndex = (num) => Math.floor(Math.random() * num);
const randomRange = ([min, max]) => randomIndex(max - min + 1) + min;
const randomArrItem = (arr) => arr[randomIndex(arr.length)];

export const fakeSkillTags = [
  "Logo",
  "Server",
  "SEO",
  "Interactive UI",
  "Database",
  "Design",
  "SVG Graphics",
  "React",
  "HTML",
  "Rails",
  "CSS",
  "Javascript",
  "Ruby",
  "COBOL",
  "Layout Design",
  "UX/UI",
];

export const fakeProjectTags = [
  "Mobile App",
  "Browser App",
  "Desktop App",
  "IoT",
  "Raspberry Py",
  "Static page",
  "Multiplatform App",
  "Blog",
  "E-Commerce Site",
  "DApp",
];
export const fakeCauseTags = [
  "Healthcare",
  "COVID",
  "Research",
  "Social",
  "Public Utility",
  "Open Source",
];

export const getFakeTags = (arr, min, max) => {
  const newArr = [];
  for (let i = 0; i < randomRange([min, max]); i++) {
    newArr.push(randomArrItem(arr));
  }
  return newArr;
};

export const getColor = (name) => {
  const palette = {
    white: "#ffffff",
    lightgrey: "#f6f8fa",
    darkgrey: "#3d4248",
    dark: "#0c131a",
    lightBorder: "#e1e4e8",
    success: "#2ea44f",
    successLight: "#6dbf84",
    successHighlight: "#eaf6ed",
    successBorder: "#c0e4ca",
    successDark: "#25833f",
    danger: "#d73a49",
    primary: "#0070f3",
    secondary: "#8d97a4",
  };
  return palette[name];
};
export const getFakeData = () => {
  const fakeData = [
    {
      id: 1,
      name: "Project 0",
      description: "This is a description for project 0",
      body: "This is the body for project 0",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 2,
      name: "Project 1",
      description: "This is a description for project 1",
      body: "This is the body for project 1",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 3,
      name: "Project 2",
      description: "This is a description for project 2",
      body: "This is the body for project 2",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 4,
      name: "Project 3",
      description: "This is a description for project 3",
      body: "This is the body for project 3",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 5,
      name: "Project 4",
      description: "This is a description for project 4",
      body: "This is the body for project 4",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 6,
      name: "Project 5",
      description: "This is a description for project 5",
      body: "This is the body for project 5",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 7,
      name: "Project 6",
      description: "This is a description for project 6",
      body: "This is the body for project 6",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 8,
      name: "Project 7",
      description: "This is a description for project 7",
      body: "This is the body for project 7",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
    {
      id: 9,
      name: "Project 8",
      description: "This is a description for project 8",
      body: "This is the body for project 8",
      created_at: "2020-07-20T19:14:19.524Z",
      updated_at: "2020-07-20T19:14:19.524Z",
    },
  ];
  return fakeData;
};
