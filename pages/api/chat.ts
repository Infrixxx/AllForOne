import { NextApiRequest, NextApiResponse } from 'next';

// Improved response detection
const getMockAIResponse = (userMessage: string, courseContext: string): string => {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  console.log('🔍 Analyzing message:', { lowerMessage, courseContext });

  // ===== DIGITAL LITERACY RESPONSES =====
  if (courseContext === 'Digital Literacy' || 
      lowerMessage.includes('safe') || 
      lowerMessage.includes('online') || 
      lowerMessage.includes('internet') || 
      lowerMessage.includes('password') ||
      lowerMessage.includes('digital') ||
      lowerMessage.includes('phone') ||
      lowerMessage.includes('whatsapp')) {
    
    if (lowerMessage.includes('safe') || lowerMessage.includes('online') || lowerMessage.includes('internet')) {
      return `**Online Safety Tips for South Africa:**

1. **Strong Passwords**: Use different passwords for important accounts. Combine letters, numbers, and symbols.

2. **Personal Information**: Never share ID numbers, bank details, or passwords via message or email.

3. **Public WiFi**: Be careful on free WiFi - avoid banking or shopping on public networks.

4. **Suspicious Links**: Don't click unknown links in messages. Scammers often pretend to be from banks or SARS.

5. **Social Media**: Be careful what you share publicly - avoid posting your location or personal details.

Remember: If an offer seems too good to be true, it probably is! What other digital skills would you like to learn?`;
    }
    
    if (lowerMessage.includes('whatsapp')) {
      return `**Using WhatsApp Effectively:**

• **Business Features**: Use WhatsApp Business app for small businesses - it has catalog and auto-reply features
• **Group Management**: Create groups for family, community, or business purposes
• **Media Sharing**: Learn to send photos, documents, and voice notes
• **Privacy Settings**: Adjust who can see your status and profile photo

WhatsApp is a powerful tool for communication and small business in South Africa!`;
    }

    return `**Digital Skills Starter Guide:**

Begin with these essential digital skills:
1. **Basic Smartphone Use**: Learn to make calls, send messages, take photos
2. **WhatsApp**: Master messaging, groups, and voice notes
3. **Google Search**: Find information by typing questions
4. **Online Safety**: Protect your personal information

Practice at free WiFi spots like libraries or shopping malls. Take it one step at a time!`;
  }

  // ===== ENTREPRENEURSHIP RESPONSES =====
  if (courseContext === 'Entrepreneurship' || 
      lowerMessage.includes('business') || 
      lowerMessage.includes('start') || 
      lowerMessage.includes('sell') || 
      lowerMessage.includes('money') ||
      lowerMessage.includes('entrepreneur') ||
      lowerMessage.includes('product') ||
      lowerMessage.includes('service')) {
    
    if (lowerMessage.includes('500') || lowerMessage.includes('start') || lowerMessage.includes('small')) {
      return `**Small Business Ideas Under R500:**

• **Food Services**: Sell vetkoek, sandwiches, or homemade snacks
• **Phone Services**: Offer phone charging or basic repairs
• **Hair & Beauty**: Braiding, plaiting, or basic hairstyling
• **Cleaning Services**: Home or office cleaning
• **Tutoring**: Help students with subjects you know well

**Start Small Tips**:
1. Test your idea with friends/family first
2. Keep simple records of income/expenses
3. Focus on quality service for repeat customers
4. Use WhatsApp for marketing and communication`;
    }

    return `**Entrepreneurship Basics:**

Starting a business begins with identifying a need in your community. Look around - what services are missing? What problems can you solve?

Key steps:
1. **Find Your Idea**: What skills do you have?
2. **Start Small**: Test with minimal investment
3. **Listen to Customers**: Adapt based on feedback
4. **Keep Learning**: Improve your skills continuously

Many successful South African businesses started small!`;
  }

  // ===== FINANCIAL SKILLS RESPONSES =====
  if (courseContext === 'Financial Skills' || 
      lowerMessage.includes('money') || 
      lowerMessage.includes('save') || 
      lowerMessage.includes('bank') || 
      lowerMessage.includes('budget') ||
      lowerMessage.includes('financial') ||
      lowerMessage.includes('cash')) {
    
    if (lowerMessage.includes('save') || lowerMessage.includes('money')) {
      return `**Saving Strategies for Limited Income:**

• **Start Small**: Save R5-10 daily - it adds up to R150-300 monthly!
• **Separate Savings**: Keep savings in a different place from spending money
• **Goal Setting**: Save for specific things (school fees, business stock, emergencies)
• **Reduce Small Expenses**: Cut back on snacks or drinks you buy regularly

**Banking Tip**: Most South African banks offer low-cost accounts - visit your local branch to ask about Mzansi or other beginner accounts.`;
    }

    return `**Basic Financial Management:**

1. **Track Spending**: Write down what you spend for one week
2. **Create Simple Budget**: Income vs Expenses
3. **Build Emergency Fund**: Even small amounts help with unexpected costs
4. **Understand Banking**: Learn about different account types

Financial freedom starts with small, consistent habits!`;
  }

  // ===== JOB READINESS RESPONSES =====
  if (courseContext === 'Job Readiness' || 
      lowerMessage.includes('job') || 
      lowerMessage.includes('cv') || 
      lowerMessage.includes('work') || 
      lowerMessage.includes('interview') ||
      lowerMessage.includes('employ') ||
      lowerMessage.includes('career')) {
    
    if (lowerMessage.includes('cv') || lowerMessage.includes('resume')) {
      return `**Creating Your First CV:**

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

Many libraries offer free CV printing and assistance!`;
    }

    return `**Job Preparation Steps:**

1. **CV Preparation**: Create a simple, honest CV
2. **Practice Interviews**: Prepare answers for common questions
3. **Professional Appearance**: Neat, clean clothing for interviews
4. **Research**: Learn about companies before applying
5. **Follow Up**: Thank interviewers for their time

Your attitude and willingness to learn are valuable to employers!`;
  }

  // ===== GREETINGS & GENERAL =====
  if (lowerMessage.includes('hello') || 
      lowerMessage.includes('hi') || 
      lowerMessage.includes('hey') ||
      lowerMessage.length < 5) {
    return `Hi! I'm your AI tutor focused on practical South African skills. I can help you with:

• **Digital Literacy** - Smartphone skills, online safety, WhatsApp
• **Entrepreneurship** - Starting small businesses, marketing
• **Financial Skills** - Budgeting, saving, banking
• **Job Readiness** - CV writing, interview preparation

What would you like to learn about today?`;
  }

  // ===== FALLBACK =====
  return `I'd love to help you with "${userMessage}"! 

As your AI tutor for South African learners, I specialize in practical skills like:
• Digital literacy and online safety
• Starting small businesses
• Money management and budgeting
• Job hunting and interview skills

Could you tell me which area you're most interested in?`;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, courseContext } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('🤖 Processing:', { message, courseContext });

    // Simulate thinking time
    await delay(800 + Math.random() * 800);

    const aiResponse = getMockAIResponse(message, courseContext || 'General Learning');

    console.log('✅ Response ready!');
    
    res.status(200).json({ 
      success: true, 
      response: aiResponse,
      source: 'smart-mock-ai'
    });

  } catch (error: any) {
    console.error('Error:', error);
    
    res.status(200).json({ 
      success: true, 
      response: "I'm here to help you learn practical skills for success in South Africa. What would you like to explore today?",
      source: 'fallback'
    });
  }
}