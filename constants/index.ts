import { CreateAssistantDTO, CreateWorkflowDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const generator: CreateWorkflowDTO = {
  "name": "interview-genius-workflow",
  "nodes": [
    {
      "name": "start",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -452.9988279206251,
          "y": -141.12188482425515
        }
      },
      "prompt": "Greet the user and help them create a new AI interviewer",
      "model": {
        "provider": "openai",
        "model": "gpt-4o",
        "temperature": 0.7,
        "maxTokens": 1000
      },
      "voice": {
        "model": "aura-2",
        "voiceId": "thalia",
        "provider": "deepgram"
      },
      "variableExtractionPlan": {
        "output": [
          {
            "title": "level",
            "description": "The job experience level. ",
            "type": "string",
            "enum": [
              "entry",
              "mid",
              "senior",
              "staff"
            ]
          },
          {
            "title": "amount",
            "description": "How many questions would you like me to generate? ",
            "type": "number",
            "enum": []
          },
          {
            "title": "techstack",
            "description": "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…",
            "type": "string",
            "enum": []
          },
          {
            "title": "role",
            "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX, Product Engineer?",
            "type": "string",
            "enum": []
          },
          {
            "title": "type",
            "description": "What type of the interview should it be?",
            "type": "string",
            "enum": [
              "technical",
              "behavioural",
              "mixed"
            ]
          }
        ]
      },
      "messagePlan": {
        "firstMessage": "Hey there!"
      }
    },
    {
      "name": "hangup_1747512399374",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": -356.9590563226934,
          "y": 1006.8513660186337
        }
      },
      "messagePlan": {
        "firstMessage": "Alright, have a nice day!"
      }
    },
    {
      "name": "conversation_1748201376975",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -449.20642025150823,
          "y": 223.9144811389561
        }
      },
      "prompt": "Say that the Interview will be generated shortly.",
      "model": {
        "provider": "openai",
        "model": "gpt-4o",
        "temperature": 0.7,
        "maxTokens": 1000
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "apiRequest_1748201470702",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -449.20642025150823,
          "y": 473.9144811389561
        }
      },
      "tool": {
        "type": "apiRequest",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "properties": {},
            "required": []
          }
        },
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
        "method": "POST",
        "headers": null,
        "body": {
          "type": "object",
          "properties": {
            "role": {
              "type": "string",
              "description": "",
              "value": "{{role}}"
            },
            "type": {
              "type": "string",
              "description": "",
              "value": "{{type}}"
            },
            "level": {
              "type": "string",
              "description": "",
              "value": "{{level}}"
            },
            "techstack": {
              "type": "string",
              "description": "",
              "value": "{{techstack}}"
            },
            "amount": {
              "type": "number",
              "description": "",
              "value": "{{amount}}"
            }
          }
        }
      }
    },
    {
      "name": "conversation_1748202030787",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -449.20642025150823,
          "y": 723.914481138956
        }
      },
      "prompt": "Thank the user for the conversation and inform them that the inteview has been generated successfully",
      "model": {
        "provider": "openai",
        "model": "gpt-4o",
        "temperature": 0.7,
        "maxTokens": 1000
      },
      "messagePlan": {
        "firstMessage": ""
      }
    }
  ],
  "edges": [
    {
      "from": "start",
      "to": "conversation_1748201376975",
      "condition": {
        "type": "ai",
        "prompt": "if the user provided all the required variables"
      }
    },
    {
      "from": "conversation_1748201376975",
      "to": "apiRequest_1748201470702",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "apiRequest_1748201470702",
      "to": "conversation_1748202030787",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    },
    {
      "from": "conversation_1748202030787",
      "to": "hangup_1747512399374",
      "condition": {
        "type": "ai",
        "prompt": ""
      }
    }
  ]
};

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage: "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
  clientMessages: [],
  serverMessages: []
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];