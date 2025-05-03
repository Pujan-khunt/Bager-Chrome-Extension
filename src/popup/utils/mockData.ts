import { MessageResponseMap, MESSAGE_TYPES } from "@/shared/messages";

export const mockResponses: Partial<MessageResponseMap> = {
  [MESSAGE_TYPES.GET_VERSION]: {
    type: "mock",
    version: "1.0.0-dev",
  },
  [MESSAGE_TYPES.GET_BOOKMARK_TREE]: {
    type: "mock",
    data: [
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "dateAdded": 1743852009761,
                    "dateLastUsed": 1745735236764,
                    "id": "22",
                    "index": 0,
                    "parentId": "23",
                    "syncing": false,
                    "title": "dukaaan-app-ui/src/components/Fotter.jsx at main · Shivam29k/dukaaan-app-ui",
                    "url": "https://github.com/Shivam29k/dukaaan-app-ui/blob/main/src/components/Fotter.jsx"
                  },
                  {
                    "dateAdded": 1743964803231,
                    "id": "37",
                    "index": 1,
                    "parentId": "23",
                    "syncing": false,
                    "title": "Projects | 100xDevs",
                    "url": "https://projects.100xdevs.com/"
                  },
                  {
                    "dateAdded": 1744779514756,
                    "id": "63",
                    "index": 2,
                    "parentId": "23",
                    "syncing": false,
                    "title": "Initial Commit · Jadu07/Portfolio-V2@78f2a4e",
                    "url": "https://github.com/Jadu07/Portfolio-V2/commit/78f2a4e13a57b6453c6555fc6c19d452923d456e"
                  },
                  {
                    "dateAdded": 1745135965798,
                    "id": "69",
                    "index": 3,
                    "parentId": "23",
                    "syncing": false,
                    "title": "TypoTamer/src/Auth/GuestLogin.jsx at main · aniket-969/TypoTamer",
                    "url": "https://github.com/aniket-969/TypoTamer/blob/main/src/Auth/GuestLogin.jsx"
                  },
                  {
                    "dateAdded": 1745213279726,
                    "id": "71",
                    "index": 4,
                    "parentId": "23",
                    "syncing": false,
                    "title": "jamiebuilds/the-super-tiny-compiler: :snowman: Possibly the smallest compiler ever",
                    "url": "https://github.com/jamiebuilds/the-super-tiny-compiler"
                  },
                  {
                    "dateAdded": 1745315361122,
                    "id": "72",
                    "index": 5,
                    "parentId": "23",
                    "syncing": false,
                    "title": "satnaing/shadcn-admin: Admin Dashboard UI built with Shadcn and Vite.",
                    "url": "https://github.com/satnaing/shadcn-admin"
                  },
                  {
                    "dateAdded": 1745874367091,
                    "id": "90",
                    "index": 6,
                    "parentId": "23",
                    "syncing": false,
                    "title": "Building an AI Icon Generator using the T3 Stack (Next.js, Prisma, TailwindCSS, Typescript, Dall-E API)",
                    "url": "https://1017897100294.gumroad.com/l/jipjfm"
                  },
                  {
                    "dateAdded": 1746122972436,
                    "id": "102",
                    "index": 7,
                    "parentId": "23",
                    "syncing": false,
                    "title": "Lens | Magic UI",
                    "url": "https://magicui.design/docs/components/lens"
                  }
                ],
                "dateAdded": 1743852051768,
                "dateGroupModified": 1746175366441,
                "id": "23",
                "index": 0,
                "parentId": "11",
                "syncing": false,
                "title": "Code/Project"
              },
              {
                "children": [
                  {
                    "dateAdded": 1743486907101,
                    "id": "10",
                    "index": 0,
                    "parentId": "25",
                    "syncing": false,
                    "title": "Nested Classes (The Java™ Tutorials > Learning the Java Language > Classes and Objects)",
                    "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html"
                  },
                  {
                    "dateAdded": 1743486926740,
                    "id": "12",
                    "index": 1,
                    "parentId": "25",
                    "syncing": false,
                    "title": "binary-tree-to-string/BinaryTree.java at master · eirikhalvard/binary-tree-to-string",
                    "url": "https://github.com/eirikhalvard/binary-tree-to-string/blob/master/BinaryTree.java"
                  },
                  {
                    "dateAdded": 1743486930305,
                    "id": "13",
                    "index": 2,
                    "parentId": "25",
                    "syncing": false,
                    "title": "What is a CI/CD pipeline?",
                    "url": "https://www.redhat.com/en/topics/devops/what-cicd-pipeline"
                  },
                  {
                    "dateAdded": 1743847854670,
                    "id": "18",
                    "index": 3,
                    "parentId": "25",
                    "syncing": false,
                    "title": "Using Text Editors for Programming with LSP | Toptal®",
                    "url": "https://www.toptal.com/javascript/language-server-protocol-tutorial"
                  },
                  {
                    "dateAdded": 1743947294177,
                    "id": "32",
                    "index": 4,
                    "parentId": "25",
                    "syncing": false,
                    "title": "Hashing a Password in NodeJs - MojoAuth - Go Passwordless",
                    "url": "https://mojoauth.com/blog/hashing-passwords-in-nodejs/"
                  },
                  {
                    "dateAdded": 1744139864040,
                    "id": "46",
                    "index": 5,
                    "parentId": "25",
                    "syncing": false,
                    "title": "A Guide to Java HashMap | Baeldung",
                    "url": "https://www.baeldung.com/java-hashmap"
                  }
                ],
                "dateAdded": 1743858871013,
                "dateGroupModified": 1744139870701,
                "id": "25",
                "index": 1,
                "parentId": "11",
                "syncing": false,
                "title": "Articles/Tuts"
              },
              {
                "children": [
                  {
                    "dateAdded": 1743858972986,
                    "id": "29",
                    "index": 0,
                    "parentId": "26",
                    "syncing": false,
                    "title": "Help a newbie get lazygit working on a lazyvim install : r/neovim",
                    "url": "https://www.reddit.com/r/neovim/comments/1f7kkol/help_a_newbie_get_lazygit_working_on_a_lazyvim/?rdt=37371"
                  },
                  {
                    "dateAdded": 1743949048563,
                    "dateLastUsed": 1744906740739,
                    "id": "34",
                    "index": 1,
                    "parentId": "26",
                    "syncing": false,
                    "title": "express-async-handler - npm",
                    "url": "https://www.npmjs.com/package/express-async-handler"
                  },
                  {
                    "dateAdded": 1744392288872,
                    "id": "54",
                    "index": 2,
                    "parentId": "26",
                    "syncing": false,
                    "title": "tmux cheatsheet",
                    "url": "https://gist.github.com/scottjwood/9067d332f2933a0c0c0e"
                  }
                ],
                "dateAdded": 1743858894548,
                "dateGroupModified": 1744468323554,
                "id": "26",
                "index": 2,
                "parentId": "11",
                "syncing": false,
                "title": "Improvs"
              }
            ],
            "dateAdded": 1743486921292,
            "dateGroupModified": 1743858894548,
            "id": "11",
            "index": 0,
            "parentId": "1",
            "syncing": false,
            "title": "Worth a read"
          },
          {
            "dateAdded": 1743500694028,
            "dateLastUsed": 1744197388839,
            "id": "15",
            "index": 1,
            "parentId": "1",
            "syncing": false,
            "title": "LC Questions By Kshitij Sir - Google Sheets",
            "url": "https://docs.google.com/spreadsheets/d/1HEUBvg5nbhwygCxzW8OJzRGyM_lJF6D40XJi8ygMhhc/edit?gid=0#gid=0"
          },
          {
            "children": [
              {
                "dateAdded": 1743858943477,
                "id": "28",
                "index": 0,
                "parentId": "27",
                "syncing": false,
                "title": "lewis6991/gitsigns.nvim: Git integration for buffers",
                "url": "https://github.com/lewis6991/gitsigns.nvim"
              },
              {
                "dateAdded": 1744179140345,
                "id": "48",
                "index": 1,
                "parentId": "27",
                "syncing": false,
                "title": "Signup Form",
                "url": "https://ui.aceternity.com/components/signup-form"
              }
            ],
            "dateAdded": 1743858941565,
            "dateGroupModified": 1745071646340,
            "id": "27",
            "index": 2,
            "parentId": "1",
            "syncing": false,
            "title": "Yet to add/install"
          },
          {
            "children": [
              {
                "dateAdded": 1743945329304,
                "dateLastUsed": 1746103183628,
                "id": "31",
                "index": 0,
                "parentId": "30",
                "syncing": false,
                "title": "Rainbow table - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Rainbow_table"
              },
              {
                "dateAdded": 1743947327849,
                "id": "33",
                "index": 1,
                "parentId": "30",
                "syncing": false,
                "title": "Hashing a Password in NodeJs - MojoAuth - Go Passwordless",
                "url": "https://mojoauth.com/blog/hashing-passwords-in-nodejs/"
              },
              {
                "dateAdded": 1743967184540,
                "dateLastUsed": 1744105577717,
                "id": "38",
                "index": 2,
                "parentId": "30",
                "syncing": false,
                "title": "Why Arch is the sexiest OS?",
                "url": "https://chatgpt.com/c/67f2cf61-0cd8-8004-88ae-89c1342aab16"
              },
              {
                "dateAdded": 1744041287856,
                "id": "40",
                "index": 3,
                "parentId": "30",
                "syncing": false,
                "title": "Your complete guide to routing in React | Hygraph",
                "url": "https://hygraph.com/blog/routing-in-react"
              },
              {
                "dateAdded": 1744097370162,
                "id": "42",
                "index": 4,
                "parentId": "30",
                "syncing": false,
                "title": "Critical Next.js Vulnerability Allows Attackers to Bypass Middleware Authorization Checks",
                "url": "https://thehackernews.com/2025/03/critical-nextjs-vulnerability-allows.html"
              },
              {
                "dateAdded": 1744132567631,
                "id": "45",
                "index": 5,
                "parentId": "30",
                "syncing": false,
                "title": "Library of Babel",
                "url": "https://libraryofbabel.info/"
              },
              {
                "dateAdded": 1744139885085,
                "id": "47",
                "index": 6,
                "parentId": "30",
                "syncing": false,
                "title": "A Guide to Java HashMap | Baeldung",
                "url": "https://www.baeldung.com/java-hashmap"
              },
              {
                "dateAdded": 1744918191821,
                "id": "65",
                "index": 7,
                "parentId": "30",
                "syncing": false,
                "title": "Chai npm package explained",
                "url": "https://chatgpt.com/c/68012a8b-19c4-8004-a713-3c880d7a13fc"
              },
              {
                "dateAdded": 1744921914529,
                "id": "66",
                "index": 8,
                "parentId": "30",
                "syncing": false,
                "title": "When i create a full stack application using react, node.js, express, zod. While creating the backend REST API, I keep facing an issue. Inorder the understand the issue let me tell you why do i need the feature which causes the issue in the first place. Feature: An async handler for all the route handlers. So i create a file where AsyncHandler.js and have this inside of it. export const asyncHandler = (requestHandler) => { return async (req, res, next) => { try { await requestHandler(req, res, next); } catch (error) { next(error); // Calls the first error handling middleware } }; }; The above code is my asyncHandler. I use it for every single route handler. For eg. Here I used it with the authenticateUser route handler. export const authenticateUser = asyncHandler(async (req, res) => { // Getting credentials from req.body parsed by express.json() middleware. const { username, email, password } = req.body; // Either one of them should be satisfied. // 1. Username and Password // 2. Email and Password if (!((username || email) && password)) { if(!password) { throw new ApiError(400, \"password is required to authenticate a User.\"); } throw new ApiError(400, \"Either username or email needs to be present.\"); } // Find the user either based on their email or username. const existingUser = getUserByEmailOrUsername(username, email); if (!existingUser) { throw new ApiError(404, \"User doesn't exist.\"); } // Verify the password provided with the hashed password from DB. const passwordMatches = await existingUser.comparePassword(password); if (!passwordMatches) { throw new ApiError(401, \"Password is invalid.\"); } // Save refresh token in the DB. const { accessToken, refreshToken } = generateTokens(existingUser); // Only a set number of sessions are allowed per user if (existingUser.refreshTokens.length >= process.env.MAX_SESSIONS) { // Remove/Invalidate the oldest session and save after adding a new refresh token. existingUser.refreshTokens.shift(); } // Add the new refresh token into db. (as its not been used to generate a new access token yet) existingUser.refreshTokens.push(refreshToken); await existingUser.save(); // Send refresh token as HTTP-only cookie res.cookie(\"refreshToken\", refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === \"production\", maxAge: 7 * 24 * 60 * 60 * 100, }); const loginSuccessfulMessage = username !== null ? `User with username '${existingUser.username}' successfully logged in.` : `User with email '${existingUser.email}' successfully logged in.`; res.status(200).json( new ApiResponse( 200, { accessToken, expiresIn: expiresInSeconds }, loginSuccessfulMessage ) ); }); The authenticateUser route handler is used in my application like this. import { registerUser } from \"../controllers/register.controller.js\"; import { verifyUser } from \"../controllers/verification.controller.js\"; import { authenticateUser } from \"../controllers/authenticate.controller.js\"; import { handleRefreshToken } from \"../controllers/refreshToken.controller.js\"; import { refreshLimiter } from \"../middlewares/refreshLimiter.middleware.js\"; import { Router } from \"express\"; const router = Router(); router.post(\"/register\", registerUser); router.get(\"/verify/:token\", verifyUser); router.post(\"/authenticate\", refreshLimiter, authenticateUser); router.get(\"/refresh\", refreshLimiter, handleRefreshToken); export default router; The above code is where the authenticateUser route handler is being used. Now, the reason I use an async handler is that whenever I create a new route handler function inside a controller, I will have to create a separate try-catch block to catch all the errors. Now to eliminate this issue, I use an async handler which calls my route handlers inside a try-catch block, so whenever I implement the logic for the route handler function i dont have to write a try catch block every single time, since i use an async handlers all the errors that i throw will be caught by that single async handler which will pass the errors to a global error handler. Now the thing is that i handle different errors in the global error",
                "url": "https://www.perplexity.ai/search/when-i-create-a-full-stack-app-PNF2XzlPRRiqmHc04vs0OQ"
              },
              {
                "dateAdded": 1745071646340,
                "id": "68",
                "index": 9,
                "parentId": "30",
                "syncing": false,
                "title": "Setting upstream for branch",
                "url": "https://chatgpt.com/c/6803a58a-6f34-8004-a5ec-8d1054803e73"
              },
              {
                "dateAdded": 1745412527378,
                "id": "74",
                "index": 10,
                "parentId": "30",
                "syncing": false,
                "title": "High Agency",
                "url": "https://www.highagency.com/"
              },
              {
                "dateAdded": 1745414651694,
                "id": "75",
                "index": 11,
                "parentId": "30",
                "syncing": false,
                "title": "(389) Lecture 1 - How to Start a Startup (Sam Altman, Dustin Moskovitz) - YouTube",
                "url": "https://www.youtube.com/watch?v=CBYhVcO4WgI&list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1"
              }
            ],
            "dateAdded": 1743945322917,
            "dateGroupModified": 1745414651694,
            "id": "30",
            "index": 3,
            "parentId": "1",
            "syncing": false,
            "title": "Interesting to Read/Learn"
          },
          {
            "dateAdded": 1744120882667,
            "dateLastUsed": 1746081271782,
            "id": "43",
            "index": 4,
            "parentId": "1",
            "syncing": false,
            "title": "SST Info Hub | Category View",
            "url": "https://sst-student-council.notion.site/1c4dfe6e33018008bafcdffd9dd1a163?v=1c4dfe6e3301803ebcdb000c80d5f96f&p=1cbdfe6e330180409575d86c38e8d674&pm=s"
          },
          {
            "dateAdded": 1744197378419,
            "dateLastUsed": 1745838967282,
            "id": "50",
            "index": 5,
            "parentId": "1",
            "syncing": false,
            "title": "[Batch'28] Leetcode Questions - Google Sheets",
            "url": "https://docs.google.com/spreadsheets/d/1qwzJyBNlX7T8ZBIjGQzy7qcoTOequfkG14cCvgqlguc/edit?gid=329050139#gid=329050139&range=A:A"
          },
          {
            "dateAdded": 1745434556535,
            "id": "78",
            "index": 6,
            "parentId": "1",
            "syncing": false,
            "title": "Tags",
            "url": "https://rollout.site/projects/bager-smart-bookmai05e/edit#tags"
          },
          {
            "dateAdded": 1744716498866,
            "dateLastUsed": 1745478812138,
            "id": "61",
            "index": 7,
            "parentId": "1",
            "syncing": false,
            "title": "YouTube Music",
            "url": "https://music.youtube.com/watch?v=65-VQkyE72I&list=PLzaM2wDRTQ73d0TM-1FuE9bllz-y0ACs2"
          },
          {
            "children": [
              {
                "dateAdded": 1745437366734,
                "dateLastUsed": 1745997038346,
                "id": "80",
                "index": 0,
                "parentId": "79",
                "syncing": false,
                "title": "bolt.new",
                "url": "https://bolt.new/~/sb1-9mx1uwjw"
              },
              {
                "dateAdded": 1745437419094,
                "dateLastUsed": 1745996843762,
                "id": "81",
                "index": 1,
                "parentId": "79",
                "syncing": false,
                "title": "Private Chat – v0 by Vercel",
                "url": "https://v0.dev/chat/bager-chrome-extension-ui-8Y5SGJOTpLc"
              },
              {
                "dateAdded": 1745437427373,
                "id": "82",
                "index": 2,
                "parentId": "79",
                "syncing": false,
                "title": "Rollout AI - AI Landing Page Builder & Website Builder [FREE]",
                "url": "https://rollout.site/projects/bager-smart-bookmai05e/edit"
              },
              {
                "dateAdded": 1746032650640,
                "id": "96",
                "index": 3,
                "parentId": "79",
                "syncing": false,
                "title": "typescript-cheatsheets/react: Cheatsheets for experienced React developers getting started with TypeScript",
                "url": "https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets"
              }
            ],
            "dateAdded": 1745437364912,
            "dateGroupModified": 1746081320238,
            "id": "79",
            "index": 8,
            "parentId": "1",
            "syncing": false,
            "title": "bager"
          },
          {
            "children": [
              {
                "dateAdded": 1745567903596,
                "id": "85",
                "index": 0,
                "parentId": "84",
                "syncing": false,
                "title": "TabSwish - Control Your Browser Like a Power User",
                "url": "https://tabswish.com/"
              }
            ],
            "dateAdded": 1745567900469,
            "dateGroupModified": 1745671749961,
            "id": "84",
            "index": 9,
            "parentId": "1",
            "syncing": false,
            "title": "chrome-extension-ideas"
          },
          {
            "dateAdded": 1745671749961,
            "dateLastUsed": 1745852282601,
            "id": "87",
            "index": 10,
            "parentId": "1",
            "syncing": false,
            "title": "(407) 50 Movies to Watch Before You Die - YouTube",
            "url": "https://www.youtube.com/watch?v=uY5oF0tZiWI"
          },
          {
            "dateAdded": 1745687294028,
            "dateLastUsed": 1745896426732,
            "id": "88",
            "index": 11,
            "parentId": "1",
            "syncing": false,
            "title": "cssqtl",
            "url": "https://devhints.io/mysql"
          },
          {
            "dateAdded": 1745876852917,
            "id": "91",
            "index": 12,
            "parentId": "1",
            "syncing": false,
            "title": "React Hook Form - Complete Tutorial (with Zod) - YouTube",
            "url": "https://www.youtube.com/watch?v=cc_xmawJ8Kg"
          },
          {
            "dateAdded": 1745879312505,
            "id": "92",
            "index": 13,
            "parentId": "1",
            "syncing": false,
            "title": "From 0 to Production - The Modern React Tutorial (RSCs, Next.js, Shadui, Drizzle, TS and more) - YouTube",
            "url": "https://www.youtube.com/watch?v=d5x0JCZbAJs"
          },
          {
            "dateAdded": 1745879627084,
            "id": "93",
            "index": 14,
            "parentId": "1",
            "syncing": false,
            "title": "Build Nextjs Inventory Management Dashboard & Deploy on AWS | Postgres, Node, Tailwind, EC2, RDS, S3 - YouTube",
            "url": "https://www.youtube.com/watch?v=ddKQ8sZo_v8"
          },
          {
            "dateAdded": 1746081320238,
            "id": "98",
            "index": 15,
            "parentId": "1",
            "syncing": false,
            "title": "How to use CSS variables with Tailwind CSS - Stack Overflow",
            "url": "https://stackoverflow.com/questions/64872861/how-to-use-css-variables-with-tailwind-css?rq=3"
          },
          {
            "children": [
              {
                "dateAdded": 1746091339550,
                "id": "99",
                "index": 0,
                "parentId": "100",
                "syncing": false,
                "title": "analysis - Why is Qxb2 so much better than Bxb2? - Chess Stack Exchange",
                "url": "https://chess.stackexchange.com/questions/46932/why-is-qxb2-so-much-better-than-bxb2"
              },
              {
                "dateAdded": 1746093354341,
                "id": "101",
                "index": 1,
                "parentId": "100",
                "syncing": false,
                "title": "labirinth/lab2.sh at master · EvilTosha/labirinth",
                "url": "https://github.com/EvilTosha/labirinth/blob/master/lab2.sh"
              }
            ],
            "dateAdded": 1746091351149,
            "dateGroupModified": 1746122972436,
            "id": "100",
            "index": 16,
            "parentId": "1",
            "syncing": false,
            "title": "interesting to think about"
          }
        ],
        "dateAdded": 1743184613100,
        "dateGroupModified": 1746091339550,
        "folderType": "bookmarks-bar",
        "id": "1",
        "index": 0,
        "parentId": "0",
        "syncing": false,
        "title": "Bookmarks"
      },
      {
        "children": [
          {
            "dateAdded": 1745417266972,
            "id": "77",
            "index": 0,
            "parentId": "2",
            "syncing": false,
            "title": "Wallet",
            "url": "chrome://wallet/crypto/onboarding/welcome"
          },
          {
            "dateAdded": 1745416991618,
            "id": "76",
            "index": 1,
            "parentId": "2",
            "syncing": false,
            "title": "Manage Chrome side panel - Google Chrome Help",
            "url": "https://support.google.com/chrome/answer/13156494?hl=en"
          },
          {
            "dateAdded": 1743184949099,
            "id": "5",
            "index": 2,
            "parentId": "2",
            "syncing": false,
            "title": "GSOC 25",
            "url": "https://eastern-thistle-375.notion.site/Google-Summer-of-Code-GSoC-2025-Organization-Guide-1c2bc2b60f3e80e9a823cb8e76adcaa5"
          },
          {
            "dateAdded": 1743335332011,
            "id": "7",
            "index": 3,
            "parentId": "2",
            "syncing": false,
            "title": "Recordings of Python Libraries from Scaler Online - Google Docs",
            "url": "https://docs.google.com/document/d/1HPlqfJtsXgAoxhSbhE4TB3aNFEXKE-5pE2lr2F1WcDM/edit?tab=t.0"
          },
          {
            "dateAdded": 1743510387237,
            "id": "16",
            "index": 4,
            "parentId": "2",
            "syncing": false,
            "title": "SOP for Meeting Room Booking (Staff and Students) - Google Docs",
            "url": "https://docs.google.com/document/d/1rofya1xSg-74ZPi_eSihq0uEQ5plGohMpVQcqZhKhbg/edit?tab=t.0#heading=h.j8v2ev1vj1qq"
          },
          {
            "dateAdded": 1744468323554,
            "id": "56",
            "index": 5,
            "parentId": "2",
            "syncing": false,
            "title": "Aceternity UI",
            "url": "https://ui.aceternity.com/"
          },
          {
            "dateAdded": 1744468356187,
            "id": "57",
            "index": 6,
            "parentId": "2",
            "syncing": false,
            "title": "Marquee | Magic UI",
            "url": "https://magicui.design/docs/components/marquee"
          },
          {
            "dateAdded": 1744315279064,
            "id": "52",
            "index": 7,
            "parentId": "2",
            "syncing": false,
            "title": "What exactly does 'Ghazwa-e-Hind' mean? How and when did such a term come into existence? Do Indian Muslims believe or support this theory? - Quora",
            "url": "https://www.quora.com/What-exactly-does-Ghazwa-e-Hind-mean-How-and-when-did-such-a-term-come-into-existence-Do-Indian-Muslims-believe-or-support-this-theory"
          },
          {
            "dateAdded": 1744618189165,
            "id": "59",
            "index": 8,
            "parentId": "2",
            "syncing": false,
            "title": "spring1843/go-dsa: Go Data Structures and Algorithms is an open source tool for learning and rehearsing data structures and algorithms in Go.",
            "url": "https://github.com/spring1843/go-dsa"
          },
          {
            "dateAdded": 1746175366441,
            "id": "104",
            "index": 9,
            "parentId": "2",
            "syncing": false,
            "title": "BITS | ID card",
            "url": "https://online-programs.bits-pilani.ac.in/"
          }
        ],
        "dateAdded": 1743184613100,
        "dateGroupModified": 1746175369681,
        "folderType": "other",
        "id": "2",
        "index": 1,
        "parentId": "0",
        "syncing": false,
        "title": "Other bookmarks"
      }
    ],
  },
};
