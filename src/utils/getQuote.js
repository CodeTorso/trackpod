import { unstable_noStore as noStore } from 'next/cache';

const bruceLeeQuotes = [
  "Do not pray for an easy life, pray for the strength to endure a difficult one.",
  "Absorb what is useful, discard what is not, add what is uniquely your own.",
  "The successful warrior is the average man, with laser-like focus.",
  "It's not the daily increase but daily decrease. Hack away at the unessential.",
  "Knowing is not enough, we must apply. Willing is not enough, we must do.",
  "Adapt what is useful, reject what is useless, and add what is specifically your own.",
  "Mistakes are always forgivable if one has the courage to admit them.",
  "A wise man can learn more from his enemies than a fool from his friends.",
  "The more we value things, the less we value ourselves.",
  "To hell with circumstances; I create opportunities.",
  "Don't fear failure. — Not failure, but low aim, is the crime. In great attempts, it is glorious even to fail.",
  "If you love life, don't waste time, for time is what life is made up of.",
  "The key to immortality is first living a life worth remembering.",
  "The less effort, the faster and more powerful you will be.",
  "I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.",
  "Empty your mind, be formless, shapeless, like water. You put water into a cup, it becomes the cup.",
  "Simplicity is the key to brilliance.",
  "A goal is not always meant to be reached; it often serves simply as something to aim at.",
  "The successful warrior is the one who finds the right balance.",
  "It’s not who you are underneath, it’s what you do that defines you."
];

function getQuote () {
  return bruceLeeQuotes[Math.floor(Math.random() * bruceLeeQuotes.length)];
  noStore()
};

export default getQuote;
