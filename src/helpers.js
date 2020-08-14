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

//TODO Make colors conform to https://styleguide.github.com/primer/support/color-system/

export const getColor = (name) => {
  const palette = {
    white: "#ffffff",
    lightgrey: "#f6f8fa",
    darkgrey: "#2f363d",
    dark: "#0c131a",
    lightBorder: "#e1e4e8",
    clearBorder: "#e1e4e8",
    font: "rgb(41,41,41)",
    success: "#2ea44f",
    //500
    info: "#6f42c1",
    //000
    infoBG: "#f5f0ff",
    //100
    infoLight: "#e6dcfd",
    //200
    infoMed: "#d1bcf9",
    danger: "#d73a49",
    //500
    primary: "#0366d6",

    //100
    primaryBG: "#dbedff",
    //200
    primaryLight: "#c8e1ff",
    //300
    primaryMed: "#79b8ff",
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

export const getFakeQAs = () => {
  return [
    {
      id: 0,
      question: "Lorem ipsum dolor sit amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "section",
    },
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "section",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "sub-section",
    },
    {
      id: 3,
      question: "Amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      type: "section",
    },
    {
      id: 4,
      question: "Lorem ipsumsit amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "sub-section",
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit t",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "sub-section",
    },
    {
      id: 6,
      question: "Lorem ipsum",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "sub-section",
    },
    {
      id: 7,
      question: "Lorem ipsum",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "section",
    },
    {
      id: 8,
      question: "Lorem ipsum dolor sit amet",
      answer:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      type: "sub-section",
    },
  ];
};

export const instructions = [
  {
    step: 0,
    tag: "Q0",
    frame: [
      {
        type: "message",
        title: "Starting a Project on Code Cause",
        subTitle: "Here's what you need to know",
        body: {
          type: "list",
          strings: [
            "Code Cause is a community of builders and creators",
            "Creators post open source projects ideas to CodeCause",
            "Builders (developers, designers, etc) search for projects that inspire them and join up",
            "Together they work on the project through stages until it's completed",
            "(Future Idea)",
            "Creators and Builders gain karma for finished work",
            "Karma is used to upvote projects to the top of the listing",
            "Also, the more karma attatched to a project, the more people gain by finishing it",
          ],
        },
      },
      {
        type: "singleQA",
        title: "Tell us About your Project Idea",
        question: "What's the elevator pitch?",
        tag: "Q0",
        details:
          "Try to sum the project up in one sentence. If you can't, odds are the idea is too complex and needs to be refined. Take your time to get to the core of what your project is. ",
        help:
          "An elevator pitch is a one-liner pitch that describes your idea in a hurry, as if you were trying to explain your idea to someone important while sharing an elevator ride.",
        input: {
          type: "textBox",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
    ],
  },
  {
    step: 1,
    tag: "Q1",
    frame: [
      {
        type: "message",
        title: "Sounds Great!",
        subTitle: "Here's a few things to consider before sharing your idea.",
        body: {
          type: "list",
          strings: [
            "Code Cause is generally for non-profit/open source projects.",
            "While for-profits are welcome, we currently have no way of enforcing or arbitrating agreements.",
            "When you post your project idea to the world, it's out there, and anyone can now use it.",
            "Which means Code Cause is better suited (at the moment) for projects that need to be made for some altruistic benefit as opossed to starting a business.",
            "The best projects have creators that bring energy, creativity, and a solid vision to the table.",
            "So make sure you have enough time to direct the project from begininning to completion",
            "And remember that the best form of leadership is from those who lead from the front. Be ready to help your team in any way you can.",
          ],
        },
      },
      {
        type: "singleQA",
        title: "The Problem",
        question: "What problem is your project going to solve.",
        details:
          "Give some detail, but don't go longer than a paragraph. We can get into the hard details later.",
        tag: "Q1",
        input: {
          type: "textBox",
          validation: [
            { type: "not-empty", response: "Please type in a response" },
          ],
        },
      },
      {
        type: "results",
        title: "Results",
      },
    ],
  },
];
export const mapTagsToObject = (data) => {
  //TODO make functionality for MultiQuestion frames
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    obj[data[i].tag] = "";
  }
  return obj;
};
