"use strict";(()=>{var e={};e.id=170,e.ids=[170],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},4e3:(e,s,i)=>{i.r(s),i.d(s,{config:()=>l,default:()=>r,routeModule:()=>u});var n={};i.r(n),i.d(n,{default:()=>handler});var a=i(1802),o=i(7153),t=i(6249);let getMockAIResponse=(e,s)=>{let i=e.toLowerCase().trim();return(console.log("\uD83D\uDD0D Analyzing message:",{lowerMessage:i,courseContext:s}),"Digital Literacy"===s||i.includes("safe")||i.includes("online")||i.includes("internet")||i.includes("password")||i.includes("digital")||i.includes("phone")||i.includes("whatsapp"))?i.includes("safe")||i.includes("online")||i.includes("internet")?`**Online Safety Tips for South Africa:**

1. **Strong Passwords**: Use different passwords for important accounts. Combine letters, numbers, and symbols.

2. **Personal Information**: Never share ID numbers, bank details, or passwords via message or email.

3. **Public WiFi**: Be careful on free WiFi - avoid banking or shopping on public networks.

4. **Suspicious Links**: Don't click unknown links in messages. Scammers often pretend to be from banks or SARS.

5. **Social Media**: Be careful what you share publicly - avoid posting your location or personal details.

Remember: If an offer seems too good to be true, it probably is! What other digital skills would you like to learn?`:i.includes("whatsapp")?`**Using WhatsApp Effectively:**

• **Business Features**: Use WhatsApp Business app for small businesses - it has catalog and auto-reply features
• **Group Management**: Create groups for family, community, or business purposes
• **Media Sharing**: Learn to send photos, documents, and voice notes
• **Privacy Settings**: Adjust who can see your status and profile photo

WhatsApp is a powerful tool for communication and small business in South Africa!`:`**Digital Skills Starter Guide:**

Begin with these essential digital skills:
1. **Basic Smartphone Use**: Learn to make calls, send messages, take photos
2. **WhatsApp**: Master messaging, groups, and voice notes
3. **Google Search**: Find information by typing questions
4. **Online Safety**: Protect your personal information

Practice at free WiFi spots like libraries or shopping malls. Take it one step at a time!`:"Entrepreneurship"===s||i.includes("business")||i.includes("start")||i.includes("sell")||i.includes("money")||i.includes("entrepreneur")||i.includes("product")||i.includes("service")?i.includes("500")||i.includes("start")||i.includes("small")?`**Small Business Ideas Under R500:**

• **Food Services**: Sell vetkoek, sandwiches, or homemade snacks
• **Phone Services**: Offer phone charging or basic repairs
• **Hair & Beauty**: Braiding, plaiting, or basic hairstyling
• **Cleaning Services**: Home or office cleaning
• **Tutoring**: Help students with subjects you know well

**Start Small Tips**:
1. Test your idea with friends/family first
2. Keep simple records of income/expenses
3. Focus on quality service for repeat customers
4. Use WhatsApp for marketing and communication`:`**Entrepreneurship Basics:**

Starting a business begins with identifying a need in your community. Look around - what services are missing? What problems can you solve?

Key steps:
1. **Find Your Idea**: What skills do you have?
2. **Start Small**: Test with minimal investment
3. **Listen to Customers**: Adapt based on feedback
4. **Keep Learning**: Improve your skills continuously

Many successful South African businesses started small!`:"Financial Skills"===s||i.includes("money")||i.includes("save")||i.includes("bank")||i.includes("budget")||i.includes("financial")||i.includes("cash")?i.includes("save")||i.includes("money")?`**Saving Strategies for Limited Income:**

• **Start Small**: Save R5-10 daily - it adds up to R150-300 monthly!
• **Separate Savings**: Keep savings in a different place from spending money
• **Goal Setting**: Save for specific things (school fees, business stock, emergencies)
• **Reduce Small Expenses**: Cut back on snacks or drinks you buy regularly

**Banking Tip**: Most South African banks offer low-cost accounts - visit your local branch to ask about Mzansi or other beginner accounts.`:`**Basic Financial Management:**

1. **Track Spending**: Write down what you spend for one week
2. **Create Simple Budget**: Income vs Expenses
3. **Build Emergency Fund**: Even small amounts help with unexpected costs
4. **Understand Banking**: Learn about different account types

Financial freedom starts with small, consistent habits!`:"Job Readiness"===s||i.includes("job")||i.includes("cv")||i.includes("work")||i.includes("interview")||i.includes("employ")||i.includes("career")?i.includes("cv")||i.includes("resume")?`**Creating Your First CV:**

Even with no formal work experience, include:
• **Personal Details**: Name, contact, location
• **Skills**: Computer skills, languages, driving license
• **Education**: School qualifications and years
• **Volunteer Work**: Community service, helping family business
• **References**: Teacher, community leader, or family friend

**Format Tips**:
- Keep it to one page
- Use clear headings
- No spelling mistakes
- Be honest about your experience

Many libraries offer free CV printing and assistance!`:`**Job Preparation Steps:**

1. **CV Preparation**: Create a simple, honest CV
2. **Practice Interviews**: Prepare answers for common questions
3. **Professional Appearance**: Neat, clean clothing for interviews
4. **Research**: Learn about companies before applying
5. **Follow Up**: Thank interviewers for their time

Your attitude and willingness to learn are valuable to employers!`:i.includes("hello")||i.includes("hi")||i.includes("hey")||i.length<5?`Hi! I'm your AI tutor focused on practical South African skills. I can help you with:

• **Digital Literacy** - Smartphone skills, online safety, WhatsApp
• **Entrepreneurship** - Starting small businesses, marketing
• **Financial Skills** - Budgeting, saving, banking
• **Job Readiness** - CV writing, interview preparation

What would you like to learn about today?`:`I'd love to help you with "${e}"! 

As your AI tutor for South African learners, I specialize in practical skills like:
• Digital literacy and online safety
• Starting small businesses
• Money management and budgeting
• Job hunting and interview skills

Could you tell me which area you're most interested in?`},delay=e=>new Promise(s=>setTimeout(s,e));async function handler(e,s){if("POST"!==e.method)return s.status(405).json({error:"Method not allowed"});try{let{message:i,courseContext:n}=e.body;if(!i)return s.status(400).json({error:"Message is required"});console.log("\uD83E\uDD16 Processing:",{message:i,courseContext:n}),await delay(800+800*Math.random());let a=getMockAIResponse(i,n||"General Learning");console.log("✅ Response ready!"),s.status(200).json({success:!0,response:a,source:"smart-mock-ai"})}catch(e){console.error("Error:",e),s.status(200).json({success:!0,response:"I'm here to help you learn practical skills for success in South Africa. What would you like to explore today?",source:"fallback"})}}let r=(0,t.l)(n,"default"),l=(0,t.l)(n,"config"),u=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/chat",pathname:"/api/chat",bundlePath:"",filename:""},userland:n})}};var s=require("../../webpack-api-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),i=s.X(0,[222],()=>__webpack_exec__(4e3));module.exports=i})();