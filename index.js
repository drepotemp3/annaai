import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import { connectDB } from "./models/db.js";
import { startPreaching, stopPreaching } from "./helpers/preaching.js";
import { startMessageMonitoring, stopMessageMonitoring } from "./helpers/messageMonitor.js";
import launchBot from "./helpers/launchbot.js";
import express from "express";
import mongoose from "mongoose"
import fetch from "node-fetch"
dotenv.config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
global.bot = bot;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MONGO_URI = process.env.MONGO_URI;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});


const context = `I am Andronik Anna, born 02/11/1992 (2nd of november, 1992). My company name is Swim Mimi 
How I work for you information 
🧩 Work Process 
📩 How Clients Reach Me 
Clients usually contact me directly via: Instagram WhatsApp Telegram VK TikTok 
Around 80% of my new clients come from personal recommendations — happy parents referring me to other families. 
The rest find me through social media, ads, or doctor referrals. 
📍 Where I Work I work exclusively in Dubai, offering home visits. 
Sessions take place: at home — in the bathtub, in a residential pool, or at the family’s villa. 
Prices depend on the location: sessions at villas or remote areas may cost more. 
I don’t travel to desert communities — those areas don’t fit my pricing or client segment. 
👶 Who I Work With I specialize in working with babies from the 5th day of life up to 3 years old. 
My approach is based on: care, love, and trust, gentle friendship and emotional bonding, early socialization (teaching not to shout, not to hit), early discipline (no peeing/pooping in the pool), development through play and affection. 
Children over 3 years old require a different approach — more authority, psychology, and structure. 
That stage is handled by trainers who specialize in older kids. 
I always go to water with children, for adult kids coach not go to water, stay on land. 
💬 What I Ask in the First Conversation Child’s age — to confirm if the child fits my training range. 
Location — to calculate the session cost and check if I can travel there. 
Reason for starting lessons — parents’ personal choice or a doctor’s referral (I’m a certified rehabilitation therapist for children with special needs, so my approach may vary). 
Child’s daily schedule — we plan sessions around nap and meal times, choosing the window when the baby is: awake and active, not hungry, not sleepy. 
In Dubai, many babies attend nurseries from 8 months old, so I always adapt to their daily rhythm. 
🕒 Best Time for Swimming The ideal time for swimming is during the child’s active awake phase — when they’re full of energy, calm, and focused. 
Not before sleep or right after feeding. 
🛁 Where to Start For babies under 6 months, I always recommend starting at home — in the family bathtub. 
That’s the safest and healthiest choice, supported by WHO guidelines. 
Why? A newborn’s thermoregulation and immunity are still developing. 
Public pools contain microbes, lotions, urine, mucus, and various skin or intimate infections. 
I always inform parents about these risks. If they still prefer pool sessions, we continue — but under parental responsibility. 
👩‍👦 The First Session For the first class, I always invite one of the parents to join us in the water. 
It’s very important because: Parents can observe my teaching style and attitude — after all, I help shape their child’s first experiences. 
I can observe the parent-child interaction to understand the child’s emotional background. 
Not all children immediately trust new adults — sometimes they refuse to be held, and that can be unsafe in the water. 
The first session is always about connection and adaptation, not performance. ❤️ My Philosophy Baby swimming is not just physical training. It’s about love, trust, emotional bonding, and early development. I don’t just teach babies how to swim — I help parents raise confident, calm, and water-loving children from the very first days of life. 
The price is for one 45-minute lesson (I don't offer discounts for multiple lessons, otherwise they get cheeky and other clients complain when they find out I've given it to someone else). 
The price includes: Travel to your location I bring the necessary equipment Payment is accepted in cash or by credit card. 
Cancellation of a lesson *one hour* is a 100-aed fee. Cancellation of a lesson *15 minutes in advance or at the lesson start time* is a 100% fee. 
I always write 24 hours in advance to confirm everything is still in effect 🪷 The first time, I recommend having the nearest adult join us in the water so the child can gradually adapt to the trainer and the adult can observe my approach. 
My type of clients 👆🏼 Intermediaries👇🏻 - Grandmothers 35-55 - Bloggers - Haters - Swimming coach colleagues - Nanny - Massage therapist - Obstetrician, gynecologist - Maternity hospital, maternity center - Yoga, fitness for pregnant women - Psychologists - Kindergarten - Clothing for children and pregnant women - Children's products (diapers, baby food, toys) - Courses for mothers and children Client Needs - Child don’t scare water - can swim independently - Moves, expends energy - Physical health, strengthens immunity - Tired - sleeps, and eats better after training - The trainer has instilled discipline in the child (the trainer plays the "bad cop") - Socialization, meeting new people (some mothers don't allow people into the house, and children never see other people) - Free time for parents - Sometimes parents aren't thinking about improving their child's health, they want to show off to friends/relatives what good parents they are. Pretend on Instagram: “Look, we have money for a trainer in Dubai!" - Comfort—the trainer comes to your home, no need to travel anywhere - Safety: everything is under the professional's control - Individual approach to the child 
Services: 1. Aquapatronage (Infant swimming at home in a bathtub) from 5 days to 3 years 
2. Pool for children up to 3 years 
2.1 Individual 2.2 Group 
3. Aquayoga for pregnant women 
4. Watsu for adults and children with special needs 
5. Online aquapatronage


Mobile number (what’s app)
 +971 585374745

Instagram https://www.instagram.com/swim_mimi

VK https://vk.com/swim_mimi

FB https://m.facebook.com/swimmimishka/

TikTok https://www.tiktok.com/@swim_mimi

YouTube https://youtube.com/@swim_mimi
Telegram @Annet_253


FAQ:
 Health and Safety
— Contraindications Infections, fever, skin inflammation, digestive disorders, seizures, heart conditions — wait for doctor’s approval.
— Can you swim with a runny nose? If there is no fever and the child feels well — yes. Avoid getting chilled.
— How long to wait after illness? Usually 3–5 days after temperature normalizes and activity returns to normal.
— Is doctor’s approval needed? Recommended before starting classes, especially for infants under 6 months. Consult a pediatrician, neurologist, and, if needed, a cardiologist.
— First aid if the child swallows water Take out of water, lift slightly, let the child cough, calm them. See a doctor if coughing persists.
— What to do if the child slips into the water Calmly lift and hold the child, let them catch their breath. Do not scare or raise your voice — the child senses your emotions. Wait for their reaction; you can gently joke: “Were you looking for fish?”
— What to do if water gets into the nose/ears/eyes? Nose — let the child gently blow their nose. Ears — dab with a towel at the end of the session, do not use cotton swabs. Eyes — usually nothing; if seawater, rinse with clean water.
— What to do if the child drinks water or opens their mouth underwater? This is normal at early stages. Teach them to close the mouth and blow bubbles.
— How to properly dry and dress the baby after swimming Quickly wrap in a dry towel, allow a short time to cool down and adapt, gently pat the skin dry, then dress in dry, warm clothes.
— Should creams or oils be used? After swimming — optional, if skin is dry or prone to irritation, without fragrances. Before swimming — not recommended, as the baby may slip. Sunscreen — if needed.
— Can the belly button get wet? Yes, bathing is allowed if done carefully without injuring the belly button. Afterward, gently dry it — do not use iodine or antiseptic solutions.
— Does swimming affect sleep? Yes, swimming usually relaxes, improving falling asleep and sleep quality. But sometimes the activity can excite the child, causing temporary overstimulation.




Emotions and Adaptation
Why might a baby be afraid of water? Babies may be afraid if the water is unfamiliar, too stimulating (sensory overload), too cold, or if they sense anxiety from adults. Fear is normal. Infant swimming lessons help gently and safely overcome these fears, gradually introducing the baby to water.
What to do if the baby cries? Stay calm and supportive. Hold and comfort the baby, give breaks, sing, offer breastfeeding, or distract with a toy or “little bird.” The main thing is to maintain a sense of safety and avoid sudden exits from the water.
What if the baby is afraid of the instructor? It’s normal for babies to be cautious with someone new. Parents can enter the water during the first lessons to show that the instructor is friendly. Gradually, the baby will get used to the instructor and feel comfortable with them.
What if the baby doesn’t want to go into the water or dive? Never force the child. Use gentle encouragement and playful games, allowing the baby to explore the water at their own pace. Show by example how fun it is to play in water, use floating or sinking toys, throw balls, and play with a watering can to create movement in the water. This way, the baby learns through observation and play.
When can diving be introduced? Diving should be introduced gradually, when the baby feels confident and relaxed in the water. Start with gentle games: splash water on the face, wash the face, and use toys. Show how to close the mouth properly and blow bubbles from the mouth or nose. It’s normal for water to get in the mouth or nose — even for instructors and Olympic swimmers — the key is to calmly spit it out or blow the nose.
How to help dad get involved? It’s helpful for dads to participate in lessons with the baby: hold, support, and play in the water. This strengthens trust, helps the baby feel calm, and makes the swimming process more comfortable for the whole family. If dads are usually less involved in the child’s development, the water provides a unique opportunity to build a special connection. Often dads confidently join right away and may start diving from the first minutes, which also allows mom to delegate part of the process and have some free time.



The Pool
How to choose a pool? Choose a clean, warm pool (32–34 °C / 90–93 °F) without a strong chlorine smell. Make sure there’s a comfortable area for changing, resting, and feeding, a safe entry into the water, and a calm atmosphere. Ideally, a lifeguard and friendly staff should be present.
Is a swim diaper necessary? Yes, a special reusable or disposable swim diaper is required — it protects the water and keeps your child comfortable. If an accident happens, the pool may ask for payment for cleaning and reheating, so it’s best to come prepared.
What to bring? Bring a towel, swimsuit or swim trunks, swim diaper, a favorite water toy, a head covering, dry clothes, and a snack or milk after the lesson. For infants, it’s helpful to bring a changing mat. Sunscreen can be included if needed.
Goggles and accessories At the beginner stage, goggles are not necessary — they can interfere with natural water adaptation. The instructor provides everything needed for the exercises. Floaties or rings are not needed: they create an illusion of swimming and do not help develop real skills.
Can the child swim independently after the lesson? Yes, if the child feels well — not tired or cold — and the parent knows how to maintain safe contact in the water. Independent play helps reinforce skills but does not replace lessons with the instructor.
How to keep the child interested? The main thing is to play! Change toys, sing songs, and have fun together. Outside the pool, you can read books or watch cartoons about swimming, observe how animals swim, or show examples of water sports. Parents’ own example is also very motivating for the child.


Home Bathing (Bath)
— How to prepare your child for their first bath? Make sure your baby is healthy, well-fed, and calm, and that the water and air are at a comfortable temperature. It's important to rule out any medical contraindications. Parents should simply relax, let go of anxiety, and explore the world of water with their child.

— How to clean the bathtub before bathing?
Simply wash the bathtub with a regular, non-chlorine cleaner and rinse thoroughly. Avoid strong-smelling cleaning products, as their fumes can irritate your baby's breathing. After cleaning, ventilate the bathroom and fill it with fresh water at a comfortable temperature.

— What if you don't have a bathtub?
A shower is also suitable for bathing—the main thing is that your baby is warm and comfortable. You can also arrange for a friend or neighbor who has a bathtub. Another option is a collapsible bathtub; they're easy to find on Amazon or in baby stores.

- Water Temperature. Water temperature depends on the child's age: the younger the baby, the warmer the water should be. Thermoregulation is still developing in babies under 6 months, so it's important to gradually warm them up and avoid hypothermia. For regular swimming, a temperature of 36–37°C is optimal. For training, a comfortable and safe temperature of 32–35°C is ideal, close to body temperature. Gradually, the temperature can be lowered to 30°C.
Children's pools are usually around 30°C, while adult pools are 26–28°C, so it's important to take this difference into account and prepare your baby for cooler water in advance.

— How to check the water temperature without a thermometer?
You can try the "grandmother's method" of placing your wrist or elbow in the water. However, this method is subjective and often inaccurate: the water may seem comfortable to an adult but be too hot or cold for a baby. It's better to use a special water thermometer—it's reliable and safe.

When should I transition from a bath to a pool?
According to the WHO, pool lessons can begin at 6 months—by this time, a baby's immune system and thermoregulation skills have already developed.
Sometimes the transition is made earlier, but it's important to understand that this decision remains the responsibility of the parents, who assume all possible risks and closely monitor their child's well-being.




Basics of Infant Swimming

— What is infant swimming?
Infant swimming is a gentle introduction to water for babies, helping them adapt to life after birth. Water reminds them of their familiar environment, improves their health, develops natural movements and breathing, and creates a sense of security and trust in the world.

— At what age can you start swimming?
If your baby is healthy, you can start swimming as early as 2-4 weeks after birth, initially at home or in the bath. According to WHO recommendations, babies can move on to pool lessons from 6 months.

— How often should you swim?
For health and enjoyment, once a week is sufficient.
For consistent progress and "start swimming on your own" results, 2-3 times a week is optimal. And if you're training a future Olympian, then 6 days a week, 4 hours each morning and evening.

— What's the best time to swim?
Practice during a waking period when your baby isn't hungry or sleepy. After swimming, your baby can either relax and fall asleep, or, conversely, feel energized. The key is to observe their reactions and adjust the timing individually.

- Nutrition and Swimming
About 20-30 minutes should pass after feeding before swimming.
You can feed afterward when your baby is calm and ready—usually immediately or a few minutes after the session.
Sometimes breastfeeding during bathing becomes part of the calming process—this is completely normal for infants.

- When will I see results?
The result is not only the ability to move in the water, but also confidence, pleasure, connection, and joy. These changes are noticeable after just a few sessions.
Physiological improvements (sleep, appetite, tone) usually appear after 3-5 sessions, and the first conscious movements and skills appear after 1-2 months.
For a child to swim on their own, it usually takes 6 months to 2 years of regular sessions—but the pace is different for every baby.  

— How long does a class last?
On average, a class lasts about 45 minutes: the first 10-15 minutes are massage and warm-up, followed by swimming (20-25 minutes). Over time, you can shorten the massage and increase the time in the water.
The main thing is to focus on the child, not the clock.

— How does a class proceed?
A class involves gentle interaction between the child and the water and the parent: breathing, support, gaze, and movement.
We begin with a warm-up and massage, then gradually move on to exercises in the water, preparation for diving, and relaxation.
We also spend time discussing fears and questions with the parent so that both parent and child feel calm and confident.

— How do you choose a trainer, and is it possible to change?
Trust and emotional safety are more important than any method. If a child is anxious around a trainer, learning will be more difficult.
If rapport doesn't develop, you can change the trainer. Talk to other parents, read reviews, and consult with the trainer. Diplomas are important, but the most important thing is that the trainer is developing and is a good fit for your child.
Choosing a trainer is like choosing shoes: try them on, feel the comfort, and only then will you know if they're right for you.

Can a parent be present during a lesson? Yes, especially during the first lessons: a parent can enter the water to show the child that the trainer is a friend and help them feel safe. This also gives the parent the opportunity to see the trainer's methods and determine if they're right for them. For infants, parental participation is beneficial for at least a couple of lessons—the child learns through the adult's body and emotions, and the water becomes a shared environment.

Why is it important to have a relative swim with you?
A parent's presence reduces anxiety and helps the child feel safe. When mom or dad is in the water, a special "aquatic connection" develops—it's not about technique, but about closeness. Swimming together is a physical form of communication that builds trust in the world around them.

What toys should be used during lessons? Various toys are suitable:

* Floating toys: balls, ducks;
* Sinking toys: sticks, rings;
* Watering can
* Teething toys (for infants).





`



mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => {
    console.error('Mongo connection error', err);
    process.exit(1);
  });

const ConversationEntrySchema = new mongoose.Schema({
  question: { type: String, required: true },
  aiReply: { type: String, default: null }
}, { _id: false });

const UserSchema = new mongoose.Schema({
  chatId: { type: Number, required: true, unique: true },
  language: { type: String, enum: ['en', 'ru'], default: 'en' },
  conversation: { type: [ConversationEntrySchema], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

/**
 * Helper: simple language keyboards
 */
const languageKeyboard = Markup.inlineKeyboard([
  Markup.button.callback('English', 'lang_en'),
  Markup.button.callback('Русский', 'lang_ru')
]);

/**
 * Strip all markdown and formatting from text
 */
function stripFormatting(text) {
  if (!text) return '';
  
  return text
    // Remove bold markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove italic markers (but protect @usernames and phone numbers)
    .replace(/(?<!@\w)__([^_]+)__(?![\w\d])/g, '$1')
    .replace(/(?<![@\w])_([^_@]+)_(?![\w\d])/g, '$1')
    // Remove code blocks
    .replace(/```[^`]*```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    // Remove links [text](url)
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove other markdown
    .replace(/[#>\-\+]/g, '')
    .trim();
}

/**
 * Escape markdown special characters for Telegram
 */
function escapeMarkdown(text) {
  // Escape Telegram markdown special characters
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

/**
 * Safely format text for Telegram
 * Attempts to send as Markdown, falls back to plain text if parsing fails
 */
function sanitizeForTelegram(text) {
  if (!text) return '';
  
  // Remove or fix common markdown issues
  let sanitized = text
    // Fix unmatched asterisks - remove single asterisks not part of pairs
    .replace(/\*([^*\n]*)\*/g, (match, content) => {
      // If content is empty or just whitespace, remove the asterisks
      if (!content.trim()) return content;
      return match;
    })
    // Fix unmatched underscores
    .replace(/_([^_\n]*)_/g, (match, content) => {
      if (!content.trim()) return content;
      return match;
    })
    // Ensure code blocks are properly closed
    .replace(/```/g, (match, offset, string) => {
      const before = string.substring(0, offset);
      const count = (before.match(/```/g) || []).length;
      return count % 2 === 0 ? '```' : '';
    });
  
  return sanitized;
}

/**
 * OpenRouter call
 */
async function callOpenRouter(messages) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-5.1',
      messages,
      max_tokens: 800,
      temperature: 0.0
    })
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`OpenRouter error ${res.status}: ${txt}`);
  }

  const j = await res.json();
  const reply = j?.choices?.[0]?.message?.content ?? j?.choices?.[0]?.text ?? null;
  return reply;
}

/**
 * Build system prompt (language aware)
 */
function buildMessagesForModel(user, incomingText) {
  const lang = user.language || 'en';

  const systemInEnglish = `
You are a helpful assistant called MimiAi. You MUST ONLY use the data provided in the "context" and the provided conversation history to answer user questions. Do NOT hallucinate or invent facts. If the user asks something outside the provided context, respond briefly in the user's language and refer them to @Annet_253 on Telegram for more information.

Always:
- Prepend the conversation history (array of objects {question, aiReply}) as the first element in the prompt to the model (this has already been included).
- Use the variable 'context' exactly as provided. The context variable contains the agency details.
- When asked "who created you", briefly describe the company owner using the information in the context.
- When asked "what are you", respond: "I am MimiAi, an ai bot developed by swim mimi to answer all your questions".
- If the user's message appears to be a direct follow-up or continuation of the conversation (short, ambiguous, or context-dependent), prioritize the conversation history when constructing the answer.
- Keep tone warm, friendly, sweet and concise.
- Do not add any content that is not supported by context or conversation history.
- IMPORTANT: Use PLAIN TEXT ONLY. Do NOT use any markdown, asterisks, underscores, bold, italic, bullet points, numbered lists, or any special formatting. Write in simple paragraphs with natural line breaks only.
`;

  const systemInRussian = `
Вы — полезный ассистент по имени MimiAi. ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ ТОЛЬКО ДАННЫЕ, ПРЕДОСТАВЛЕННЫЕ В "context" и истории диалога, чтобы отвечать на вопросы пользователя. НЕ выдумывайте факты. Если вопрос выходит за рамки имеющегося контекста, кратко ответьте на языке пользователя и направьте его к @Annet_253 в Telegram для получения дополнительной информации.

Всегда:
- Включайте историю диалога (массив объектов {question, aiReply}) как первый элемент в подсказке модели (уже включено).
- Используйте переменную 'context' точно как предоставлена. В ней — информация об агентстве.
- На вопрос "кто тебя создал" кратко опишите владельца компании, используя данные из context.
- На вопрос "что ты такое" отвечайте: "I am MimiAi, an ai bot developed by swim mimi to answer all your questions".
- Если сообщение пользователя похоже на продолжение предыдущего (короткое, неясное или зависящее от контекста), при ответе делайте приоритет на историю разговора.
- Тон: тёплый, дружелюбный, ласковый, но краткий.
- Не добавляйте ничего, что не подтверждено контекстом или историей.
- ВАЖНО: Используйте ТОЛЬКО ПРОСТОЙ ТЕКСТ. НЕ используйте markdown, звездочки, подчеркивания, жирный шрифт, курсив, маркированные списки, нумерованные списки или любое специальное форматирование. Пишите простыми абзацами с естественными переносами строк.
`;

  const system = (lang === 'ru') ? systemInRussian : systemInEnglish;

  const convoArray = user.conversation || [];
  const convoString = JSON.stringify(convoArray);

  const messages = [
    { role: 'system', content: system },
    { role: 'system', content: `context:\n${context}` },
    { role: 'system', content: `conversation_history_array:${convoString}` },
    { role: 'user', content: `Using ONLY the context and the conversation_history_array, answer the question below in ${lang === 'ru' ? 'Russian' : 'English'}. If question is outside context, refer to @Annet_253. If the question asks "what are you", respond exactly: "I am MimiAi, an ai bot developed by swim mimi to answer all your questions". If the question asks "who created you", briefly describe the company owner using the context. Do NOT hallucinate.\n\nUser question:\n${incomingText}` }
  ];

  return messages;
}

/**
 * Set bot commands
 */
bot.telegram.setMyCommands([
  { command: 'start', description: 'Start the bot' },
  { command: 'language', description: 'Change language / Изменить язык' },
  { command: 'showconv', description: 'Show recent conversation (debug)' }
]);

/**
 * Start bot
 */
bot.start(async (ctx) => {
  const chatId = ctx.chat.id;
  const found = await User.findOne({ chatId });

  if (found) {
    // existing user - greet and ask how to help
    const greeting = (found.language === 'ru')
      ? 'Привет! Чем могу помочь?'
      : 'Hi! How may I help you today?';
    await ctx.reply(greeting);
    return;
  }

  // new user: ask to choose language
  await ctx.reply(
    'Welcome! Please choose a language / Пожалуйста, выберите язык',
    languageKeyboard
  );
});

/**
 * Language command
 */
bot.command('language', async (ctx) => {
  await ctx.reply('Choose language / Выберите язык', languageKeyboard);
});

/**
 * Language selection handlers (callback queries)
 */
bot.action('lang_en', async (ctx) => {
  const chatId = ctx.chat.id;
  let user = await User.findOne({ chatId });

  if (!user) {
    user = new User({ chatId, language: 'en' });
    await user.save();
  } else {
    user.language = 'en';
    await user.save();
  }

  await ctx.answerCbQuery();
  await ctx.editMessageText('Language set: English');
  await ctx.reply('Hi! I am MimiAi. How can I help you today?');
});

bot.action('lang_ru', async (ctx) => {
  const chatId = ctx.chat.id;
  let user = await User.findOne({ chatId });

  if (!user) {
    user = new User({ chatId, language: 'ru' });
    await user.save();
  } else {
    user.language = 'ru';
    await user.save();
  }

  await ctx.answerCbQuery();
  await ctx.editMessageText('Язык выбран: Русский');
  await ctx.reply('Привет! Я MimiAi. Чем я могу помочь?');
});

/**
 * Message handler
 * Optimized for faster UX: reply immediately, then save to DB
 */
bot.on('message', async (ctx) => {
  try {
    const chatId = ctx.chat.id;
    const text = (ctx.message.text || '').trim();

    // ignore non-text messages
    if (!text) return;

    // Ensure user
    let user = await User.findOne({ chatId });
    if (!user) {
      // default new user: ask for language selection first
      await ctx.reply('Please choose your language first / Пожалуйста, выберите язык', languageKeyboard);
      return;
    }

    // Build messages for model using current conversation state (not yet saved)
    const messages = buildMessagesForModel(user, text);

    // Call OpenRouter
    let aiReply;
    try {
      aiReply = await callOpenRouter(messages);
      if (!aiReply) throw new Error('Empty reply from model');
    } catch (err) {
      console.error('Model error', err);
      const errMsg = (user.language === 'ru')
        ? 'Ошибка на сервере. Попробуйте позже.'
        : 'Server error. Please try again later.';
      await ctx.reply(errMsg);
      return;
    }

    // Strip all formatting to ensure plain text
    const plainTextReply = stripFormatting(aiReply);

    // Reply to user with plain text only
    try {
      await ctx.reply(plainTextReply);
    } catch (sendError) {
      console.error('Send error:', sendError);
      // Fallback: send error message
      const fallbackMsg = (user.language === 'ru')
        ? 'Извините, произошла ошибка. Пожалуйста, попробуйте еще раз.'
        : 'Sorry, there was an error. Please try again.';
      await ctx.reply(fallbackMsg);
      return;
    }

    // Save conversation to DB asynchronously (no await to avoid blocking)
    user.conversation.push({ question: text, aiReply });
    user.save().catch(err => console.error('Error saving conversation:', err));

  } catch (err) {
    console.error('Handler error', err);
    try {
      await ctx.reply('Something went wrong. Please try again later.');
    } catch (e) { /* ignore */ }
  }
});

/**
 * Command to show conversation (for debugging/admin)
 */
bot.command('showconv', async (ctx) => {
  const chatId = ctx.chat.id;
  const user = await User.findOne({ chatId });
  if (!user) return ctx.reply('No conversation found.');
  
  const last = user.conversation.slice(-10).map((c, i) => 
    `${i + 1}\\. Q: ${c.question}\nA: ${c.aiReply ?? '\\[pending\\]'}`
  ).join('\n\n');
  
  await ctx.reply(`Recent conversation:\n\n${last}`, { parse_mode: 'MarkdownV2' });
});

/**
 * Launch
 */
bot.launch().then(() => {
  console.log('Bot up');
});

// graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));