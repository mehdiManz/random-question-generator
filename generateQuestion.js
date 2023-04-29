'use strict'
const questions = [
  "What's something that always makes you happy?",
  "How do you like to spend your weekends?",
  "What's a place you've always wanted to visit?",
  "What's the best piece of advice you've ever received?",
  "What's a skill you've always wanted to learn?",
  "What's the most interesting thing you've read or seen lately?",
  "What's your favorite thing about your hometown or current city?",
  "How do you like to relax after a long day?",
  "What's something that always makes you happy?",
"How do you like to spend your weekends?",
"What's a place you've always wanted to visit?",
"What's the best piece of advice you've ever received?",
"What's a skill you've always wanted to learn?",
"What's the most interesting thing you've read or seen lately?",
"What's your favorite thing about your hometown or current city?",
"How do you like to relax after a long day?",
"What's your favorite memory from your childhood?",
"How do you define success?",
"What's something you're passionate about?",
"What's the biggest challenge you've faced in your life so far?",
"What's something you're looking forward to in the near future?",
"What's a lesson you've learned recently?",
"What's something you're proud of accomplishing?",
"What's your favorite way to exercise or stay active?",
"What's a book or movie that's had a big impact on you?",
"What's something you're currently struggling with?",
"What's a goal you're working towards right now?",
"How do you like to spend your free time?",
"What's a cause you care about deeply?",
"What's your favorite thing about your job or field of study?",
"How do you handle stress or difficult situations?",
"What's something you wish you had more time for?",
"How do you like to stay connected with friends and family?",
"What's something you've always wanted to try, but haven't yet?",
"What's a lesson you learned the hard way?",
"What's something that always makes you laugh?",
"What's something you're curious about?",
"What's your favorite thing to do when you're feeling creative?",
"What's a talent or skill you wish you had?",
"What's your favorite way to learn new things?",,
"What's something that scares you, but you want to try anyway?",
"What's a piece of advice you'd give to someone starting out in your field?",
"What's something you've been procrastinating on?",
"What's a place that holds a special meaning to you?",
"What's something you'd like to change about the world?",
"What's something that always puts you in a good mood?",
"What's your favorite way to spend time outdoors?",
"What's something you wish more people knew about you?",
"What's a quote or saying you live by?",
"What's your favorite way to show gratitude?",
"What's something you've learned from a mistake?",
"What's your favorite holiday or celebration?",
"What's a habit you're trying to develop or break?",
"What's a question you've been wanting to ask someone, but haven't yet?",
"What's your favorite type of cuisine or dish?",
"What's a skill or hobby you've picked up during the pandemic?",
"What's something you're looking forward to in the long-term future?",
"What's something you're grateful for today?",
"What is the meaning of life?",
"What are the benefits of meditation?",
"How can I improve my public speaking skills?",
"What is the best way to overcome procrastination?",
"What are the most effective time management techniques?",
"What is the difference between empathy and sympathy?",
"How can I build my self-confidence?",
"What are some effective ways to cope with stress?",
"What are some tips for effective communication in a relationship?",
"What is the best way to start a small business?",
"What are the benefits of exercise?",
"What is the best way to prepare for a job interview?",
"What are some effective study techniques?",
"What are the best ways to improve mental health?",
"What is the meaning of success?",
"What are some effective methods for learning a new language?",
"What are some ways to improve creativity?",
"What are the benefits of a healthy diet?",
"What are the best ways to overcome social anxiety?",
"What is the best way to set and achieve goals?",
"What are the most effective leadership skills?",
"What are some tips for effective time management for students?",
"What is the difference between introverts and extroverts?",
"What are some effective techniques for conflict resolution?",
"What is the best way to build a successful team?",
"What are the benefits of reading?",
"What is the best way to deal with difficult people?",
"What are some effective ways to manage money?",
"What is the meaning of love?",
"What are the benefits of a positive attitude?",
"What is the best way to learn a new skill?",
"What are some effective ways to boost creativity?",
"What are the best ways to overcome writer's block?",
"What is the difference between assertive and aggressive communication?",
"What are the benefits of traveling?",
"What is the best way to handle a crisis?",
"What are some effective ways to improve memory?",
"What are the most important qualities for success?",
"What is the best way to network?",
"What are the benefits of laughter?",
"What are some effective ways to improve emotional intelligence?",
"What is the difference between sympathy and empathy?",
"What are the benefits of volunteering?",
"What is the best way to handle difficult situations?",
"What are some effective ways to improve your relationships?",
"What is the best way to deal with failure?",
"What are the benefits of a good night's sleep?",
"What are some effective ways to overcome self-doubt?",
"What is the best way to develop a growth mindset?",
"What are the benefits of lifelong learning?"
];

function generateRandomQuestion() {
  const question = questions[Math.floor(Math.random() * questions.length)];
  const questionElement = document.getElementById('question');
  questionElement.textContent = question;
}


