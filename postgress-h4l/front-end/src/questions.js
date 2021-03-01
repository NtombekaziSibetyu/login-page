function startSurvey() {
  return survey;
}
export default {
  startSurvey,
};

const survey = [
  {
    section: [
      {
        label: "Choose a site type",
        answers: ["Community", "School"],
        question: 1,
      },
      {
        label: "Choose a site name",
        answers: ["Claremont", "Cape Town CBD"],
        multiple: false,
        question: 2,
      },
      {
        label: "Choose a site district",
        answers: ["Wynberg District", "Durbanville District"],
        multiple: false,
        question: 3,
      },
      {
        label: "Counsellor's name",
        answers: ["Chad", "Khazi", "Kairy"],
        multiple: false,
        question: 4,
      },
      {
        label: 'Client name and surname',
        question: 5,
      }
    ],
    page: 1,
    title: "Site Questions",
  },
  {
    section: [
      {
        label: "Client code",
        question: 5,
      },
      {
        label: "Time in",
        question: 6,
      },
      {
        label: "Gender",
        answers: [{ text: "Female" }, { text: "Male" }],
        question: 7,
      },
      {
        label: "Birth date",
        question: 8
      },
      {
        label: "Grade (school clients only)",
        type: "input-select",
        answers: ["8", "9", "10", "11", "12", "N/A"],
        multiple: false,
        question: 9,
      },
      {
        label: "When last were you tested",
        question: 10,
      },    
      {
        label : 'Age',
        question: 11,
      }
    ],
    page: 2,
    title: "Client Information",
  },
  {
    section: [
      {
        label: "Race",

        answers: [
          { text: "Black" },
          { text: "Colored" },
          { text: "White" },
          { text: "Other" },
        ],
        question: 10,
      },
      {
        label: "Cellphone number (+27..)",
        question: 11,
      },
      {
        label: "Does client consent to receiving smses from Life Choices",
        answers: [{ text: "yes" }, { text: "no" }],
        question: 12,
      },
      {
        label: "Home tel number (if client does not have a cell)",
        question: 13,
      },
      {
        label: "Community where client lives.",
        answers: ["Claremont", "Cape Town CBD"],
        question: 14,
      },
    ],
    page: 3,
    title: "Client Information (Part 2)",
  },
  {
    section: [
      {
        label: "First time doing an HIV test?", //0
        answers: [{ text: "Yes" }, { text: "No" }],
        question: 15,
      },
      {
        label: "First time testing with Life Choices? ",//1
        answers: [{ text: "Yes" }, { text: "No" }],
        question: 16,
      },
      {
        label: "Number of times tested.",//2
        answers: [
          { text: "1" },
          { text: "2" },
          { text: "3" },
          { text: "4" },
          { text: "5" },
          { text: "More than 5 times" },
        ],
        question: 17,
      },
      {
        label: "Last time tested (date)",//3

        question: 18,
      },
      {
        label: "Last test result ",//4
        answers: [{ text: "Negative" }, { text: "Positive" }],
        question: 19,
      },
      {
        label: "Is this a scheduled follow up test?",//5
        answers: [{ text: "Yes" }, { text: "No" }],
        question: 20,
      },
      {
        label: "Did the client consent to testing? ",//6
        answers: [{ text: "Yes" }, { text: "No" }],
        question: 21,
      },
    ],
    page: 4,
    title: "HIV Questions (Part 1)",
  },
  {
    section: [
      {//0
        label: "Is client currently on TB medication?",
        answers: [{ text: "Yes" }, { text: "No" }],
        question: 22,
      },
      {//1
        label: "Has client experienced any of the following symptoms",
        answers: [
          "Cough for more than 2 weeks",
          "Weight loss more than 1.5 kg in a month",
          "Fever more than 2  weeks",
          "Abnorma night sweats",
          "TB contact in house",
          "No symptoms",
        ],
        multiple: true,
        question: 23,
      },
      {//2
        label: "What is the final TB screening result?",
        answers: [{ text: "Negative" }, { text: "Positive" }],
        question: 24,
      },
    ],
    page: 5,
    title: "TB Screening",
  },

  {
    section: [
      {//0
        label: "Has the client ever had sex (vaginal, anal or oral)?",
        answers: [
          { text: "Yes" }, 
          { text: "No" }],
        question: 25,
      },
      {//1
        label: "When did the client last have sex (vaginal, anal or oral)?",
        answers: [
          "In the last 6 weeks",
          "6 weeks to 3 months ago",
          "3 to 6 months ago",
          "6 to 12 months ago ",
          "More than 12 months ago",
        ],
        multiple: false,
        question: 26,
      },
      {//2
        label: "What kind of sex has the client had in the last 6 months?",
        answers: ["Vaginal", "Anal", "Oral"],
        multiple: true,
        question: 27,
      },
      {//3
        label:
          "When did the client last have unprotected sex (vaginal, anal or oral)?",
        answers: [
          "In the last 6 weeks",
          "6 weeks to 3 months ago",
          "3 to 6 months ago",
          "6 to 12 months ago",
          "More than 12 months ago",
          "Never had unprotected sex",
        ],
        multiple: false,
        question: 28,
      },
      {//4
        label: "Has client ever had blood contact?",
        answers: [
          { text: "Yes – in the last 6 weeks" },
          { text: "Yes – more than 6 weeks ago" },
          { text: "No" },
        ],
        question: 29,
      },
      {//5
        label:
          "When is the end of the window period (give specific date if possible)?",
        question: 30,
      },
      {///6
        label: "Has client experienced any of the following symptoms",
        answers: [
          "Discharge (“drop”) from vagina/penis",
          "Sores on vagina/penis",
          "Discharge (“drop”) or blood from anus",
          "Sores on anus",
          "Burning on passing urine",
          "Women only: lower abdominal pain",
        ],
        multiple: true,
        question: 31,
      },
      {//7
        label: "What is the final STI screening result (tick)?",
        answers: [{ text: "Negative" }, { text: "Positive" }],
        question: 32,
      },
    ],
    page: 6,
    title: "Risk and STI screening",
  },
  
  {
    section: [
      {//0
        label: "Did the client receive their test results?",

        answers: [{ text: "Yes" }, { text: "No" }],
        question: 33,
      },
      {//1
        label: "If no, why?",
        question: 34,
      },
      {//2
        label: "If Yes, complete the test results",
        question: 35,
      },
      {//3
        label: "Test 1 type",
        question: 37,
      },
      {//4
        label: "Test 1 lot number",
        question: 38,
      },
      {//5
        label: "Test 2 type",
        question: 39,
      },
      {//6
        label: "Test 2 lot number",
        question: 40,
      },
      {//7
        label: "Test 3 type",
        question: 41,
      },
      {//8
        label: "Test 3 lot number",
        question: 42,
      },
      {//9
        label: "Test 1 results",
        answers: [{ text: "Reactive" }, { text: "Non-reactive" }],
        question: 43,
      },
      {//10
        label: "Test 2 results",
        answers: [{ text: "Reactive" }, { text: "Non-reactive" }],
        question: 44,
      },
      {//11
        label: "Test 3 results",

        answers: [{ text: "Reactive" }, { text: "Non-reactive" }],
        question: 45,
      },
      {//12
        label: "What is the final HIV test result?",

        answers: [{ text: "Positive" }, { text: "Negative" }],
        question: 46,
      },
    ],
    page: 7,
    title: "HIV Testing ",
  },
 
  {
    section: [ 
      {//0
        label:
          "How many risks does the client have? (write a number between 0 and 3)",
        question: 47,
      },
      {//1
        label: "What is the clients’ plan for maintaining their risk low?",
        question: 48,
      },
      {//2
        label:
          "RISK ",
        answers: [
          "Unprotected sex",
          "Multiple partners",
          "Doesn’t know partners’ status",
          "Doesn’t test regularly",
          "Drug use",
          "Alcohol",
          "Other (specify in action plan)",
        ],
        multiple: false,
        question: 49,
      },
      {//3
        label: "Stage for Risk 1",

        answers: [
          "1 - Precontemplation",
          "2 – Contemplation",
          "3 - Preparation",
          "4 –Action",
          "5 - Maintenance",
        ],
        multiple: false,
        question: 50,
      },
      {//4
        label: "Action plan 1",
        type: "input-text",
        question: 51,
      },
      {
        //5
        label:
          "PLAN FOR CLIENTS TESTING HIV POSITIVE :Which step/s the client agrees to follow?",
        placeholder: "Which step/s the client agrees to follow?",
        answers: [
          "Step 1: Dealing with fears and feelings",
          "Step 2: Go to clinic for tests",
          "Step 3: Disclosure and support",
          "Step 4: Risk reduction",
        ],
        selected: [],
        multiple: true,
        question: 52,
      },
      {
        //6
        label: "State client action plans for each step",

        answers: [
          { text: "", label: "Step 1 action plan" },
          { text: "", label: "Step 2 action plan" },
          { text: "", label: "Step 3 action plan" },
          { text: "", label: "Step 4 action plan" }
        ],
        question: 53,
      },
      {
        //7
        label:
          "RISK ",
        answers: [
          "Unprotected sex",
          "Multiple partners",
          "Doesn’t know partners’ status",
          "Doesn’t test regularly",
          "Drug use",
          "Alcohol",
          "Other (specify in action plan)",
        ],
        multiple: false,
        question: 54,
      },
     
      {//8
        label:
        "RISK ",
      answers: [
        "Unprotected sex",
        "Multiple partners",
        "Doesn’t know partners’ status",
        "Doesn’t test regularly",
        "Drug use",
        "Alcohol",
        "Other (specify in action plan)",
      ],
      multiple: false,
      question: 55,
      },
      {//9
        label: "Stage for Risk 2",
        answers: [
          "1 - Precontemplation",
          "2 – Contemplation",
          "3 - Preparation",
          "4 –Action",
          "5 - Maintenance",
        ],
        multiple: false,
        question: 56,
      },
      {
        //10
        label: "Action plan 2",
        question: 57,
      },

      //risk reduction plan 3
      {
        //11
        label: "Stage for Risk 3",
        answers: [
          "1 - Precontemplation",
          "2 – Contemplation",
          "3 - Preparation",
          "4 –Action",
          "5 - Maintenance",
        ],
        multiple: false,
        question: 58,
      },
      {//12
        label: "Action plan 3",
        question: 59,
      },
    ],
    page: 8,
    title: "HIV Risks & Risk Reduction Planning ",
  },
  {
    section: [
      {//0
        label: "Was the client referred to another service?",

        answers: [{ text: "Yes" }, { text: "No" }],
        question: 60,
      },
      {//1
        label: "If yes, what was the referral point?",

        answers: [
          "Clinic/Day Hospital",
          "Counselling services",
          "Legal services",
          "Preventative services",
          "Rape Crisis",
          "Other",
        ],
        multiple: true,
        question: 61,
      },
      {//2
        label: "If yes, why was the client referred?",

        answers: [
          "Medical Unspecified",
          "TB Screening",
          "STI Screening",
          "PMTCT Services",
          "Support Group",
          "Couples counselling",
          "Family Planning Services",
          "Legal Services/Advice",
          "Rape",
          "Preventive Information",
          "Other",
        ],
        multiple: true,
        question: 62,
      },
    ],
    page: 9,
    title: "Referral Questions",
  },
// end
  {
    section: [
      {//0
        label: "Is a follow up with the client necessary? ",

        answers: [{ text: "Yes" }, { text: "No" }],
        question: 63,
      },
      {//1
        label: "If yes, what is the reason for the follow up (be specific)?",
        question: 64,
      },
      {//2
        label:
          "If yes, what is the proposed date of follow up (give exact date)?",
        question: 65,
      },
    ],
    page: 10,
    title: "Follow-up Questions",
  },
  // {
  //   section: [{}],
  //   page: 11,
  //   title : 'Survey Complete'
  // }
];