const fs = require('fs');
const path = require('path');

const matches = JSON.parse(fs.readFileSync('dataset/matches.json', 'utf8'));

// Mock functions from app.js to see if they throw
function normalizeMatch(match) {
  return {
    articleIntro: "...",
    articleNote: "...",
    ...match,
    related: Number(match.related || 0),
    stats: match.stats || { possession: [50, 50], shots: [0, 0], xg: [0, 0] },
    chapters: Array.isArray(match.chapters) ? match.chapters : [],
    events: Array.isArray(match.events) ? match.events : []
  };
}

function displayStatus(value) {
  return String(value || '').trim();
}

function displayText(value) {
  return String(value || '');
}

function teamCode(name) {
  const cleaned = String(name || "")
    .toUpperCase()
    .replace(/[^A-Z\s]/g, " ")
    .trim();
  if (!cleaned) return "---";
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 3) {
    return `${words[0][0]}${words[1][0]}${words[2][0]}`;
  }
  if (words.length === 2) {
    return `${words[0][0]}${words[1].slice(0, 2)}`;
  }
  return words[0].slice(0, 3);
}

try {
  matches.forEach((m, i) => {
    const match = normalizeMatch(m);
    
    // Check properties used in renderHome and renderDetail
    if (typeof match.id !== 'string') throw new Error(`Match ${i}: id is not a string`);
    if (typeof match.league !== 'string') throw new Error(`Match ${i}: league is not a string`);
    if (typeof match.status !== 'string') throw new Error(`Match ${i}: status is not a string`);
    
    // Check stats
    if (!match.stats.possession || match.stats.possession.length < 2) {
      throw new Error(`Match ${match.id}: possession is invalid`);
    }
    if (!match.stats.shots || match.stats.shots.length < 2) {
      throw new Error(`Match ${match.id}: shots is invalid`);
    }
    if (!match.stats.xg || match.stats.xg.length < 2) {
      throw new Error(`Match ${match.id}: xg is invalid`);
    }
    
    // Check chapters
    match.chapters.forEach((chapter, ci) => {
      if (typeof chapter.minute !== 'number') {
        throw new Error(`Match ${match.id} chapter ${ci}: minute is not a number`);
      }
      if (typeof chapter.label !== 'string') {
        throw new Error(`Match ${match.id} chapter ${ci}: label is not a string`);
      }
      
      // Test the logic on line 1136
      const isGoal = chapter.label.toLowerCase().includes("bàn");
    });
    
    // Check events
    match.events.forEach((event, ei) => {
      if (!Array.isArray(event) || event.length < 2) {
        throw new Error(`Match ${match.id} event ${ei}: invalid event array`);
      }
    });
  });
  
  console.log("All matches inside matches.json successfully validated!");
} catch (e) {
  console.error("Validation failed:", e.message);
}
