const seedMatches = [
  {
    id: "u17-vietnam-australia",
    league: "AFC U17 Asian Cup",
    status: "Preview",
    time: "00:00, 17/05/2026",
    home: "U17 Việt Nam",
    away: "U17 Australia",
    score: "0 - 0",
    title: "Nhận định U17 Việt Nam vs U17 Australia: Bến duyên với cú xoay biên",
    summary:
      "Việt Nam cần tốc độ ở hai biên và khả năng thoát pressing tốt hơn để kéo Australia ra khỏi khối phòng ngự tầm trung.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80",
    readTime: "5 phút",
    related: 18,
    stats: { possession: [43, 57], shots: [8, 11], xg: [1.1, 1.4] },
    chapters: [
      { minute: 4, label: "Australia ép cánh phải" },
      { minute: 18, label: "Việt Nam đổi nhịp pressing" },
      { minute: 37, label: "Cơ hội từ tình huống cố định" },
      { minute: 66, label: "Chuỗi thay người quyết định" }
    ],
    events: [
      ["04'", "Australia đẩy hậu vệ biên lên rất cao, buộc Việt Nam lùi block thấp."],
      ["18'", "Việt Nam chuyển sang thoát bóng qua trung lộ trước khi bẻ ra cánh trái."],
      ["37'", "Pha đá phạt góc tạo ra cú đánh đầu đầu tiên đi trúng mục tiêu."],
      ["66'", "Hai thay đổi nhân sự giúp tốc độ phản công tốt hơn trong 15 phút cuối."]
    ]
  },
  {
    id: "man-city-arsenal",
    league: "Premier League",
    status: "Analysis",
    time: "21:30, Chủ nhật",
    home: "Man City",
    away: "Arsenal",
    score: "2 - 2",
    title: "City và Arsenal chia điểm: trận đấu của các bẫy pressing tầng hai",
    summary:
      "Hai đội kéo nhau vào cuộc đấu kiểm soát cực chặt, nơi mỗi đường chuyền chéo sân đều mở ra một điểm nóng mới.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    readTime: "7 phút",
    related: 32,
    stats: { possession: [54, 46], shots: [14, 10], xg: [1.8, 1.6] },
    chapters: [
      { minute: 9, label: "City overload half-space" },
      { minute: 23, label: "Arsenal phản pressing" },
      { minute: 51, label: "Bàn gỡ từ cut-back" },
      { minute: 84, label: "Trận đấu vỡ cấu trúc" }
    ],
    events: [
      ["09'", "City tạo tam giác bên phải để kéo tiền vệ trụ Arsenal rời vị trí."],
      ["23'", "Arsenal khóa Rodri bằng pressing bóng hai, giành lại thế trận trong 10 phút."],
      ["51'", "Một pha cut-back sau lưng trung vệ mở ra bàn gỡ quan trọng."],
      ["84'", "Hai đội cùng đẩy tốc độ, khoảng trống giữa tuyến phòng ngự lộ rõ."]
    ]
  },
  {
    id: "psg-marseille",
    league: "Ligue 1",
    status: "Live brief",
    time: "02:00, Thứ hai",
    home: "PSG",
    away: "Marseille",
    score: "1 - 0",
    title: "PSG thắng tối thiểu: khi số 10 mới nhận quyền điều phối",
    summary:
      "Bàn thắng đến từ một pha chuyển trạng thái, nhưng điểm đáng xem là cách PSG phân phối bóng quanh vòng cấm.",
    image:
      "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=1200&q=80",
    readTime: "4 phút",
    related: 11,
    stats: { possession: [61, 39], shots: [16, 6], xg: [2.0, 0.7] },
    chapters: [
      { minute: 12, label: "PSG bó vào trung lộ" },
      { minute: 34, label: "Marseille phản công 3v3" },
      { minute: 58, label: "Bàn mở tỷ số" },
      { minute: 78, label: "Kiểm soát nhịp cuối trận" }
    ],
    events: [
      ["12'", "PSG đặt hai tiền vệ công vào khoảng giữa hậu vệ và tiền vệ Marseille."],
      ["34'", "Marseille có pha phản công hiếm hoi nhưng thiếu đường chuyền cuối."],
      ["58'", "PSG ghi bàn sau khi đoạt bóng ngay trên phần sân đối thủ."],
      ["78'", "Đội chủ nhà giảm tốc và giữ bóng ở biên để bảo vệ lợi thế."]
    ]
  },
  {
    id: "japan-korea",
    league: "Friendly",
    status: "Tactical room",
    time: "18:00, 20/05",
    home: "Nhật Bản",
    away: "Hàn Quốc",
    score: "3 - 1",
    title: "Nhật Bản bóp nghẹt tuyến giữa Hàn Quốc bằng cự ly đội hình 28 mét",
    summary:
      "Một case study gọn về spacing: giữ đội hình đủ hẹp để pressing nhưng vẫn đủ rộng để thoát bóng.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 phút",
    related: 23,
    stats: { possession: [49, 51], shots: [13, 8], xg: [2.4, 1.0] },
    chapters: [
      { minute: 7, label: "Nhật Bản khóa số 6" },
      { minute: 29, label: "Bàn thắng từ third-man run" },
      { minute: 54, label: "Hàn Quốc đổi sơ đồ" },
      { minute: 72, label: "Đòn kết liễu" }
    ],
    events: [
      ["07'", "Nhật Bản dùng tiền đạo lệch trái che đường chuyền vào tiền vệ trụ."],
      ["29'", "Pha chạy người thứ ba phá vỡ hàng thủ và tạo bàn mở tỷ số."],
      ["54'", "Hàn Quốc chuyển sang 4-2-3-1 để tăng người ở trung tuyến."],
      ["72'", "Nhật Bản tận dụng khoảng trống sau lưng hậu vệ biên để ghi bàn thứ ba."]
    ]
  }
];

const HOME_INITIAL_COUNT = 7;
const HOME_STEP = 6;

const LEAGUE_THEMES = {
  "Premier League": {
    bg: "var(--league-premier)",
    ink: "var(--league-premier-ink)",
    accent: "#d25a7a"
  },
  "UEFA Champions League": {
    bg: "var(--league-champions)",
    ink: "var(--league-champions-ink)",
    accent: "#4b6fc6"
  },
  "Ligue 1": {
    bg: "var(--league-ligue1)",
    ink: "var(--league-ligue1-ink)",
    accent: "#2e8a60"
  },
  Bundesliga: {
    bg: "var(--league-bundesliga)",
    ink: "var(--league-bundesliga-ink)",
    accent: "#d4703c"
  },
  "Serie A": {
    bg: "var(--league-seriea)",
    ink: "var(--league-seriea-ink)",
    accent: "#2f7ea3"
  },
  "La Liga": {
    bg: "var(--league-laliga)",
    ink: "var(--league-laliga-ink)",
    accent: "#c39a2d"
  }
};

const DEFAULT_LEAGUE_THEME = {
  bg: "#f1efe8",
  ink: "#2a2a24",
  accent: "var(--accent)"
};

const EVENT_TYPES = new Set([
  "goal",
  "yellow card",
  "red card",
  "second yellow",
  "second yellow card",
  "penalty",
  "own goal",
  "substitution",
  "var",
  "injury"
]);

const LANGUAGE_KEY = "matchpulse.lang";
const SUPPORTED_LANGS = ["vi", "en"];
const COPY = {
  vi: {
    siteTitle: "MatchPulse - Phan tich bong da",
    brandTagline: "blog bong da co agent",
    navHome: "Trang chu",
    navLeagues: "Giai dau",
    navWatch: "Xem",
    navAgent: "Agent",
    navAdmin: "Quan tri",
    roleUser: "Nguoi dung",
    roleAdmin: "Quan tri vien",
    refreshFeed: "Lam moi",
    homeScoreStripLabel: "Tran dau dang noi bat",
    homeMatchListLabel: "Danh sach tran dau",
    homeEmptyTitle: "Chua co bai tran dau",
    homeEmptyDesc: "Dang nhap admin de them bai dau tien.",
    homeEmptyAction: "Mo admin",
    homeOpenMatchRoom: "Mo match room",
    homeAgentContext: "Agent-ready context",
    homeHotReads: "Bai viet noi bat",
    homeAgentBrief: "Agent brief",
    homeMore: "Xem them ({count})",
    agentBriefIntro: "Agent nen nhan context theo tung lop thay vi toan bo bai viet.",
    agentBriefMatchLabel: "Goi tran dau",
    agentBriefMatch: "metadata, score, lineups, stats, event timeline.",
    agentBriefMediaLabel: "Goi media",
    agentBriefMedia: "current timestamp, selected chapter, transcript window ±90s.",
    agentBriefMemoryLabel: "Goi memory",
    agentBriefMemory: "user intent summary, preferences, unresolved questions.",
    relatedLabel: "lien quan",
    leaguesKicker: "Giai dau",
    leaguesTitle: "Bang xep hang demo theo mau giai dau",
    leaguesSubtitle: "Bang xep hang duoc tinh tu sample matches de phuc vu trai nghiem blog va storytelling.",
    leagueBoardKicker: "Bang xep hang",
    leagueBoardMeta: "{count} bai tran dau · demo standings",
    leagueBoardPill: "Pastel board",
    leagueLatestStories: "Bai moi nhat",
    leagueNote: "Bang xep hang demo dua tren mot phan du lieu, se duoc cap nhat khi LLM hoan thien noi dung.",
    leagueNotFound: "Chua co du lieu.",
    standingsRank: "#",
    standingsClub: "CLB",
    standingsPlayed: "Tran",
    standingsGd: "HS",
    standingsPts: "Diem",
    detailMatchCenter: "Match center",
    detailAskAgent: "Hoi agent tran dau",
    detailMemoryOn: "bo nho:on",
    detailSend: "Gui",
    detailPromptSummary: "Tom tat 5 diem chinh",
    detailPromptGoal: "Vi sao ban thang xay ra?",
    detailPromptHighlight: "Nhay toi pha hay nhat",
    detailEdit: "Edit bai nay",
    detailVideoLabel: "video",
    detailLoadingEvents: "Dang tai events...",
    detailNoEvents: "Khong co event nao.",
    detailMoreEvents: "Xem them events ({count})",
    adminAccessKicker: "Admin access",
    adminLoginTitle: "Dang nhap khu bien tap",
    adminLoginDesc: "Admin co the them, sua, xoa bai tran dau va chinh tung phan noi dung chi tiet.",
    adminPasswordLabel: "Mat khau demo",
    adminLoginBtn: "Vao dashboard",
    adminLoginHint: "Prototype dung password {password}. Production can auth backend that.",
    adminLoginError: "Mat khau chua dung.",
    adminDashboardKicker: "Admin dashboard",
    adminDashboardTitle: "Quan ly blog tran dau",
    adminDashboardDesc: "Dashboard chi de quan ly nhanh. Edit se mo dung giao dien bai viet de sua truc tiep tren view.",
    adminAddDraft: "Them bai nhap",
    adminLogout: "Logout",
    adminListTitle: "Danh sach bai",
    adminInlineTitle: "Inline editor",
    adminInlineDesc: "Bam Edit de mo trang bai o che do bien tap. Cac doan title, summary, noi dung va timeline sua ngay tren layout that.",
    adminListEmpty: "Chua co bai nao.",
    adminNewDraftTitle: "Bai nhap moi",
    adminDraftSummary: "Nhap tom tat tran dau tai day.",
    adminDraftLeague: "Draft league",
    adminDraftHome: "Home FC",
    adminDraftAway: "Away FC",
    adminDeleteConfirm: "Xoa bai \"{title}\"?",
    adminEdit: "Edit",
    adminView: "View",
    adminDelete: "Delete",
    adminEditingLive: "Editing live view",
    adminPublishControls: "Publish controls",
    adminStatus: "Trang thai",
    adminScore: "Ty so",
    adminRelated: "So lien quan",
    adminSave: "Luu thay doi",
    adminViewUser: "Xem ban user",
    adminDashboard: "Dashboard",
    adminCoverLabel: "Cover image URL",
    notFound: "Chua co du lieu.",
    chatAgentIntro:
      "Minh dang giu match packet, timeline va context video hien tai. Ban co the hoi ve chien thuat, cau thu, hoac yeu cau nhay toi pha dang xem.",
    mockAgent:
      "Mock agent: minh se tra loi dua tren {teams}, score {score}, video phut {minute}. {event}",
    mockAgentEvent: "Moc gan nhat: {events}",
    mockAgentNoEvent: "Hien chua co event gan timestamp nay.",
    statPossession: "Kiem soat",
    statShots: "Sut",
    statXg: "xG"
  },
  en: {
    siteTitle: "MatchPulse - Football Intelligence",
    brandTagline: "agentic football blog",
    navHome: "Home",
    navLeagues: "Leagues",
    navWatch: "Watch",
    navAgent: "Agent",
    navAdmin: "Admin",
    roleUser: "User mode",
    roleAdmin: "Admin mode",
    refreshFeed: "Refresh feed",
    homeScoreStripLabel: "Featured matches",
    homeMatchListLabel: "Match list",
    homeEmptyTitle: "No match stories yet",
    homeEmptyDesc: "Login as admin to add the first story.",
    homeEmptyAction: "Open admin",
    homeOpenMatchRoom: "Open match room",
    homeAgentContext: "Agent-ready context",
    homeHotReads: "Hot reads",
    homeAgentBrief: "Agent brief",
    homeMore: "More stories ({count})",
    agentBriefIntro: "Agents should fetch layered context instead of the full article.",
    agentBriefMatchLabel: "Match packet",
    agentBriefMatch: "metadata, score, lineups, stats, event timeline.",
    agentBriefMediaLabel: "Media packet",
    agentBriefMedia: "current timestamp, selected chapter, transcript window ±90s.",
    agentBriefMemoryLabel: "Memory packet",
    agentBriefMemory: "user intent summary, preferences, unresolved questions.",
    relatedLabel: "related",
    leaguesKicker: "Leagues",
    leaguesTitle: "Pastel league boards",
    leaguesSubtitle: "Standings are computed from the sample matches for a blog-first experience.",
    leagueBoardKicker: "League board",
    leagueBoardMeta: "{count} match stories · demo standings",
    leagueBoardPill: "Pastel board",
    leagueLatestStories: "Latest stories",
    leagueNote: "Demo standings based on partial data, will update when LLM finishes the content.",
    leagueNotFound: "Not found.",
    standingsRank: "#",
    standingsClub: "Club",
    standingsPlayed: "P",
    standingsGd: "GD",
    standingsPts: "Pts",
    detailMatchCenter: "Match center",
    detailAskAgent: "Ask the match agent",
    detailMemoryOn: "memory:on",
    detailSend: "Send",
    detailPromptSummary: "Summarize 5 key points",
    detailPromptGoal: "Why did the goal happen?",
    detailPromptHighlight: "Jump to the best moment",
    detailEdit: "Edit this story",
    detailVideoLabel: "video",
    detailLoadingEvents: "Loading events...",
    detailNoEvents: "No events found.",
    detailMoreEvents: "More events ({count})",
    adminAccessKicker: "Admin access",
    adminLoginTitle: "Enter the newsroom",
    adminLoginDesc: "Admins can create, edit, and delete match stories with inline updates.",
    adminPasswordLabel: "Demo password",
    adminLoginBtn: "Open dashboard",
    adminLoginHint: "Prototype password is {password}. Production needs real auth.",
    adminLoginError: "Incorrect password.",
    adminDashboardKicker: "Admin dashboard",
    adminDashboardTitle: "Manage match stories",
    adminDashboardDesc: "Dashboard is for quick management. Edit opens the live article layout.",
    adminAddDraft: "Add draft",
    adminLogout: "Logout",
    adminListTitle: "Story list",
    adminInlineTitle: "Inline editor",
    adminInlineDesc: "Hit Edit to open the story with live editing. Update title, summary, content, and timeline on the real layout.",
    adminListEmpty: "No stories yet.",
    adminNewDraftTitle: "New draft",
    adminDraftSummary: "Add the match summary here.",
    adminDraftLeague: "Draft league",
    adminDraftHome: "Home FC",
    adminDraftAway: "Away FC",
    adminDeleteConfirm: "Delete story \"{title}\"?",
    adminEdit: "Edit",
    adminView: "View",
    adminDelete: "Delete",
    adminEditingLive: "Editing live view",
    adminPublishControls: "Publish controls",
    adminStatus: "Status",
    adminScore: "Score",
    adminRelated: "Related",
    adminSave: "Save changes",
    adminViewUser: "View user",
    adminDashboard: "Dashboard",
    adminCoverLabel: "Cover image URL",
    notFound: "Not found.",
    chatAgentIntro:
      "I am holding the match packet, timeline, and current video context. Ask about tactics, players, or jump to highlights.",
    mockAgent:
      "Mock agent: I will answer using {teams}, score {score}, minute {minute}. {event}",
    mockAgentEvent: "Nearest: {events}",
    mockAgentNoEvent: "No nearby events for this timestamp.",
    statPossession: "Possession",
    statShots: "Shots",
    statXg: "xG"
  }
};

const STATUS_LABELS = {
  vi: {
    Final: "Ket thuc",
    Preview: "Xem truoc",
    Analysis: "Phan tich",
    "Live brief": "Tom tat live",
    "Tactical room": "Phong chien thuat",
    Draft: "Nhap"
  },
  en: {}
};

const TIMELINE_INITIAL_COUNT = 10;
const TIMELINE_STEP = 10;

const STORAGE_KEY = "matchpulse.matches";
const USER_EDITS_KEY = "matchpulse.userEdits";
const ADMIN_SESSION_KEY = "matchpulse.role";
const ADMIN_PASSWORD = "admin123";
const DATASET_URL = "./dataset/matches.json";

let matches = [];
let homeVisibleCount = HOME_INITIAL_COUNT;
const timelineVisibleCounts = new Map();
let currentLanguage = getInitialLanguage();

const app = document.querySelector("#app");
const homeTemplate = document.querySelector("#homeTemplate");
const detailTemplate = document.querySelector("#detailTemplate");
const adminTemplate = document.querySelector("#adminTemplate");
const roleBadge = document.querySelector("#roleBadge");
const langButtons = document.querySelectorAll(".lang-button");
const navHome = document.querySelector("#navHome");
const navLeagues = document.querySelector("#navLeagues");
const navWatch = document.querySelector("#navWatch");
const navAgent = document.querySelector("#navAgent");
const navAdmin = document.querySelector("#navAdmin");
const brandTagline = document.querySelector("#brandTagline");
const refreshBtn = document.querySelector("#refreshBtn");

async function loadMatches() {
  const hasUserEdits = localStorage.getItem(USER_EDITS_KEY) === "1";
  if (hasUserEdits) {
    const cached = readStoredMatches();
    if (cached.length) {
      return cached;
    }
  }

  const dataset = await fetchDataset();
  if (dataset.length) {
    const normalized = dataset.map(normalizeMatch);
    cacheMatches(normalized, false);
    return normalized;
  }

  const cached = readStoredMatches();
  if (cached.length) {
    return cached;
  }

  return seedMatches.map(normalizeMatch);
}

function getInitialLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (SUPPORTED_LANGS.includes(stored)) {
    return stored;
  }
  const browser = String(navigator.language || "").toLowerCase();
  return browser.startsWith("vi") ? "vi" : "en";
}

function t(key, params = {}) {
  const dictionary = COPY[currentLanguage] || COPY.en;
  let value = dictionary[key] ?? COPY.en[key] ?? key;
  Object.entries(params).forEach(([paramKey, paramValue]) => {
    value = value.replaceAll(`{${paramKey}}`, String(paramValue));
  });
  return value;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = t("siteTitle");
  if (brandTagline) {
    brandTagline.textContent = t("brandTagline");
  }
  if (navHome) navHome.textContent = t("navHome");
  if (navLeagues) navLeagues.textContent = t("navLeagues");
  if (navWatch) navWatch.textContent = t("navWatch");
  if (navAgent) navAgent.textContent = t("navAgent");
  if (navAdmin) navAdmin.textContent = t("navAdmin");
  if (refreshBtn) refreshBtn.textContent = t("refreshFeed");
  updateLanguageButtons();
}

function setLanguage(language) {
  if (!SUPPORTED_LANGS.includes(language)) return;
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage();
  updateRoleBadge();
  router();
}

function updateLanguageButtons() {
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function displayStatus(value) {
  const label = String(value || "").trim();
  if (!label) return "";
  const map = STATUS_LABELS[currentLanguage] || {};
  return map[label] || label;
}

function isMissingText(value) {
  if (value === null || value === undefined) return true;
  const trimmed = String(value).trim();
  return trimmed === "" || trimmed.toLowerCase() === "not found.";
}

function displayText(value) {
  return isMissingText(value) ? t("notFound") : String(value);
}

function readStoredMatches() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) {
      return saved.map(normalizeMatch);
    }
  } catch (error) {
    console.warn("Could not load saved matches", error);
  }

  return [];
}

function cacheMatches(nextMatches, markUserEdits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMatches));
  if (markUserEdits) {
    localStorage.setItem(USER_EDITS_KEY, "1");
  }
}

async function fetchDataset() {
  try {
    const response = await fetch(DATASET_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    }
    if (data && Array.isArray(data.matches)) {
      return data.matches;
    }
  } catch (error) {
    console.warn("Could not load dataset matches", error);
  }

  return [];
}

function saveMatches() {
  cacheMatches(matches, true);
}

function normalizeMatch(match) {
  return {
    articleIntro:
      "Bài phân tích được sinh hoặc biên tập từ database trận đấu: metadata, lineup, sự kiện, thống kê nâng cao, transcript và các đoạn highlight đã được index theo thời gian.",
    articleNote:
      "Với video 90 phút, frontend chỉ nên preload metadata, phát qua HLS/DASH adaptive streaming, chia chapter theo event, và cho agent trả lời kèm deep link tới timestamp.",
    ...match,
    related: Number(match.related || 0),
    stats: match.stats || { possession: [50, 50], shots: [0, 0], xg: [0, 0] },
    chapters: Array.isArray(match.chapters) ? match.chapters : [],
    events: Array.isArray(match.events) ? match.events : []
  };
}

function getLeagueTheme(league) {
  return LEAGUE_THEMES[league] || DEFAULT_LEAGUE_THEME;
}

function buildLeagueStyle(league, delay = 0) {
  const theme = getLeagueTheme(league);
  const delayValue = Number.isFinite(delay) ? delay : 0;
  return `--league-color:${theme.bg};--league-ink:${theme.ink};--league-accent:${theme.accent};--delay:${delayValue}s;`;
}

function isAdmin() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "admin";
}

function setAdminMode(enabled) {
  if (enabled) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "admin");
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
  updateRoleBadge();
}

function updateRoleBadge() {
  roleBadge.textContent = isAdmin() ? t("roleAdmin") : t("roleUser");
  roleBadge.classList.toggle("is-admin", isAdmin());
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

function renderTeamAbbr(name) {
  return `<span class="team-code" title="${escapeAttr(name)}">${escapeHtml(teamCode(name))}</span>`;
}

function renderScoreCard(match, index) {
  const style = buildLeagueStyle(match.league, index * 0.04);
  return `
    <a class="score-card" href="#/match/${match.id}" style="${style}">
      <span>${escapeHtml(match.league)} · ${escapeHtml(displayStatus(match.status))}</span>
      <div class="score-line">
        <div>${renderTeamAbbr(match.home)}</div>
        <b>${escapeHtml(match.score)}</b>
        <div>${renderTeamAbbr(match.away)}</div>
      </div>
    </a>`;
}

function renderMatchCard(match, index) {
  const style = buildLeagueStyle(match.league, index * 0.06);
  return `
    <a class="match-card" href="#/match/${match.id}" style="${style}">
      <img src="${escapeAttr(match.image)}" alt="${escapeAttr(match.home)} vs ${escapeAttr(match.away)}" />
      <div class="match-card-body">
        <span class="tag">${escapeHtml(displayStatus(match.status))}</span>
        <h2>${escapeHtml(match.title)}</h2>
        <p>${escapeHtml(displayText(match.summary))}</p>
        <div class="meta-row">
          <span>${escapeHtml(match.readTime)}</span>
          <span>${match.related} ${escapeHtml(t("relatedLabel"))}</span>
        </div>
      </div>
    </a>`;
}

function renderHotItem(match, index) {
  const style = buildLeagueStyle(match.league, index * 0.05);
  return `
    <a class="hot-item" href="#/match/${match.id}" style="${style}">
      <img src="${escapeAttr(match.image)}" alt="" />
      <div>
        <h3>${escapeHtml(match.title)}</h3>
        <span>${escapeHtml(match.league)} · ${escapeHtml(match.readTime)}</span>
      </div>
    </a>`;
}

function renderHome() {
  updateRoleBadge();
  const view = homeTemplate.content.cloneNode(true);
  const sortedMatches = getSortedMatches(matches);
  homeVisibleCount = Math.min(homeVisibleCount, sortedMatches.length || HOME_INITIAL_COUNT);
  const visibleMatches = sortedMatches.slice(0, Math.max(homeVisibleCount, 1));
  const [featured, ...rest] = visibleMatches;

  if (!featured) {
    app.innerHTML = `
      <section class="empty-state">
        <h1>${escapeHtml(t("homeEmptyTitle"))}</h1>
        <p>${escapeHtml(t("homeEmptyDesc"))}</p>
        <a class="pill-button" href="#/admin">${escapeHtml(t("homeEmptyAction"))}</a>
      </section>`;
    return;
  }

  const scoreStripMatches = sortedMatches.slice(0, 12);
  view.querySelector(".score-strip").innerHTML = scoreStripMatches
    .map((match, index) => renderScoreCard(match, index))
    .join("");

  const heroNode = view.querySelector(".hero-match");
  heroNode.style.cssText = buildLeagueStyle(featured.league);
  heroNode.innerHTML = `
    <a class="hero-media" href="#/match/${featured.id}" style="background-image: url('${escapeAttr(featured.image)}')">
      <span class="live-badge">${escapeHtml(displayStatus(featured.status))}</span>
    </a>
    <div class="hero-copy">
      <div>
        <p class="kicker">${escapeHtml(featured.league)} · ${escapeHtml(displayText(featured.time))}</p>
        <h1>${escapeHtml(featured.title)}</h1>
        <p class="dek">${escapeHtml(displayText(featured.summary))}</p>
        <div class="meta-row">
          <span>${escapeHtml(featured.readTime)}</span>
          <span>${featured.related} ${escapeHtml(t("relatedLabel"))}</span>
          <span>${escapeHtml(t("homeAgentContext"))}</span>
        </div>
      </div>
      <a class="pill-button" href="#/match/${featured.id}">${escapeHtml(t("homeOpenMatchRoom"))}</a>
    </div>`;

  view.querySelector(".match-grid").innerHTML = rest
    .map((match, index) => renderMatchCard(match, index))
    .join("");

  const hotMatches = sortedMatches.slice(0, 6);
  view.querySelector(".hot-list").innerHTML = hotMatches
    .map((match, index) => renderHotItem(match, index))
    .join("");

  view.querySelector(".agent-brief").innerHTML = `
    <p>${escapeHtml(t("agentBriefIntro"))}</p>
    <div class="brief-chip"><b>${escapeHtml(t("agentBriefMatchLabel"))}:</b> ${escapeHtml(t("agentBriefMatch"))}</div>
    <div class="brief-chip"><b>${escapeHtml(t("agentBriefMediaLabel"))}:</b> ${escapeHtml(t("agentBriefMedia"))}</div>
    <div class="brief-chip"><b>${escapeHtml(t("agentBriefMemoryLabel"))}:</b> ${escapeHtml(t("agentBriefMemory"))}</div>`;

  app.replaceChildren(view);

  const moreButton = document.querySelector("#loadMoreBtn");
  if (moreButton) {
    const remaining = sortedMatches.length - visibleMatches.length;
    if (remaining > 0) {
      moreButton.textContent = t("homeMore", { count: remaining });
      moreButton.addEventListener("click", () => {
        homeVisibleCount = Math.min(sortedMatches.length, homeVisibleCount + HOME_STEP);
        renderHome();
      });
    } else {
      moreButton.remove();
    }
  }

  const scoreStrip = app.querySelector(".score-strip");
  if (scoreStrip) {
    scoreStrip.setAttribute("aria-label", t("homeScoreStripLabel"));
  }
  const matchGrid = app.querySelector(".match-grid");
  if (matchGrid) {
    matchGrid.setAttribute("aria-label", t("homeMatchListLabel"));
  }
  const hotTitle = app.querySelector(".rail-panel h2");
  if (hotTitle) {
    hotTitle.textContent = t("homeHotReads");
  }
  const agentTitle = app.querySelectorAll(".rail-panel h2")[1];
  if (agentTitle) {
    agentTitle.textContent = t("homeAgentBrief");
  }
}

function renderLeagues() {
  updateRoleBadge();
  const grouped = groupBy(matches, (match) => match.league || "Unknown");
  const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
  const container = document.createElement("section");
  container.className = "leagues-page";
  container.innerHTML = `
    <section class="league-hero">
      <p class="kicker">${escapeHtml(t("leaguesKicker"))}</p>
      <h1>${escapeHtml(t("leaguesTitle"))}</h1>
      <p class="dek">${escapeHtml(t("leaguesSubtitle"))}</p>
    </section>
    <section class="league-grid">
      ${entries
        .map(([league, leagueMatches]) => renderLeagueCard(league, leagueMatches))
        .join("")}
    </section>`;
  app.replaceChildren(container);
}

function renderLeagueCard(league, leagueMatches) {
  const style = buildLeagueStyle(league);
  const standings = buildStandings(leagueMatches).slice(0, 8);
  const rows = standings.length
    ? standings
        .map(
          (row, index) => `
          <tr>
            <td>${index + 1}</td>
            <td class="team-name">${escapeHtml(row.team)}</td>
            <td>${row.played}</td>
            <td>${row.gd > 0 ? `+${row.gd}` : row.gd}</td>
            <td><strong>${row.pts}</strong></td>
          </tr>`
        )
        .join("")
    : `<tr><td colspan="5">${escapeHtml(t("leagueNotFound"))}</td></tr>`;

  const latest = [...leagueMatches].sort(sortByDisplayTimeDesc).slice(0, 3);
  const stories = latest
    .map(
      (match) => `
        <a class="story-link" href="#/match/${match.id}">
          <strong>${escapeHtml(match.title)}</strong>
          <span>${escapeHtml(displayText(match.time))}${match.status ? ` · ${escapeHtml(displayStatus(match.status))}` : ""}</span>
        </a>`
    )
    .join("");

  return `
    <article class="league-card" style="${style}">
      <header class="league-card-header">
        <div>
          <p class="kicker">${escapeHtml(t("leagueBoardKicker"))}</p>
          <h2>${escapeHtml(league)}</h2>
          <p class="league-meta">${escapeHtml(t("leagueBoardMeta", { count: leagueMatches.length }))}</p>
        </div>
        <span class="league-pill">${escapeHtml(t("leagueBoardPill"))}</span>
      </header>
      <div class="league-card-body">
        <div>
          <table class="standings-table">
            <thead>
              <tr>
                <th>${escapeHtml(t("standingsRank"))}</th>
                <th>${escapeHtml(t("standingsClub"))}</th>
                <th>${escapeHtml(t("standingsPlayed"))}</th>
                <th>${escapeHtml(t("standingsGd"))}</th>
                <th>${escapeHtml(t("standingsPts"))}</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
          <p class="league-note">${escapeHtml(t("leagueNote"))}</p>
        </div>
        <div class="league-stories">
          <h3>${escapeHtml(t("leagueLatestStories"))}</h3>
          ${stories || `<p class="chat-note">${escapeHtml(t("leagueNotFound"))}</p>`}
        </div>
      </div>
    </article>`;
}

function groupBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

function parseScore(value) {
  const match = String(value || "").match(/(\d+)\s*-\s*(\d+)/);
  if (!match) return null;
  return [Number(match[1]), Number(match[2])];
}

function buildStandings(leagueMatches) {
  const table = new Map();
  const ensureTeam = (name) => {
    const trimmed = String(name || "").trim();
    if (!trimmed) return null;
    if (!table.has(trimmed)) {
      table.set(trimmed, {
        team: trimmed,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        pts: 0
      });
    }
    return table.get(trimmed);
  };

  leagueMatches.forEach((match) => {
    const score = parseScore(match.score);
    if (!score) return;
    const [homeGoals, awayGoals] = score;
    const home = ensureTeam(match.home);
    const away = ensureTeam(match.away);
    if (!home || !away) return;

    updateTeamStats(home, homeGoals, awayGoals);
    updateTeamStats(away, awayGoals, homeGoals);
  });

  return Array.from(table.values()).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.team.localeCompare(b.team);
  });
}

function updateTeamStats(team, goalsFor, goalsAgainst) {
  team.played += 1;
  team.gf += goalsFor;
  team.ga += goalsAgainst;
  team.gd = team.gf - team.ga;
  if (goalsFor > goalsAgainst) {
    team.wins += 1;
    team.pts += 3;
  } else if (goalsFor === goalsAgainst) {
    team.draws += 1;
    team.pts += 1;
  } else {
    team.losses += 1;
  }
}

function sortByDisplayTimeDesc(a, b) {
  const dateA = parseDisplayTime(a.time);
  const dateB = parseDisplayTime(b.time);
  return (dateB?.getTime() || 0) - (dateA?.getTime() || 0);
}

function parseDisplayTime(value) {
  const match = String(value || "").match(/(\d{2}):(\d{2}),\s*(\d{2})\/(\d{2})\/(\d{4})/);
  if (!match) return null;
  const [, hours, minutes, day, month, year] = match;
  return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
}

function getSortedMatches(list) {
  return [...list].sort((a, b) => {
    const timeA = getMatchTimeValue(a);
    const timeB = getMatchTimeValue(b);
    if (timeA !== timeB) {
      return timeB - timeA;
    }
    const leagueCompare = String(a.league || "").localeCompare(String(b.league || ""));
    if (leagueCompare !== 0) return leagueCompare;
    return String(a.title || "").localeCompare(String(b.title || ""));
  });
}

function getMatchTimeValue(match) {
  const date = parseDisplayTime(match.time) || parseIsoTime(match.time);
  return date ? date.getTime() : -Infinity;
}

function parseIsoTime(value) {
  if (!value) return null;
  const direct = Date.parse(value);
  if (!Number.isNaN(direct)) {
    return new Date(direct);
  }
  const match = String(value || "").match(/(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
  if (!match) return null;
  const [, year, month, day, hours, minutes] = match;
  return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
}

function shouldLoadEvents(match) {
  if (!match?.source) return false;
  if (!Array.isArray(match.events) || match.events.length === 0) return true;
  if (match.events.length === 1 && match.events[0][1] === "Not found.") return true;
  return false;
}

function getTimelineCount(match) {
  if (!timelineVisibleCounts.has(match.id)) {
    timelineVisibleCounts.set(match.id, TIMELINE_INITIAL_COUNT);
  }
  return timelineVisibleCounts.get(match.id);
}

function setTimelineCount(match, count) {
  timelineVisibleCounts.set(match.id, count);
}

async function hydrateMatchEvents(match) {
  if (!shouldLoadEvents(match) || match.eventsLoaded) return;
  match.eventsLoaded = true;
  const currentId = match.id;

  try {
    const response = await fetch(match.source, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const raw = await response.json();
    const events = extractEventsFromRaw(raw);
    match.events = events;
    setTimelineCount(match, TIMELINE_INITIAL_COUNT);
  } catch (error) {
    console.warn("Could not load match events", error);
    match.eventsLoaded = false;
    return;
  }

  if (getCurrentMatchId() !== currentId) return;
  updateTimelineBlock(match);
}

function extractEventsFromRaw(raw) {
  const comments = Array.isArray(raw?.comments) ? raw.comments : [];
  const events = [];

  comments.forEach((comment) => {
    const type = String(comment?.comments_type || "").trim().toLowerCase();
    if (!EVENT_TYPES.has(type)) return;
    const minute = parseEventMinute(comment?.time_stamp, comment?.half);
    if (minute === null) return;
    const text = String(comment?.comments_text || "").trim();
    if (!text) return;
    events.push([minute, text]);
  });

  events.sort((a, b) => a[0] - b[0]);
  return events.map(([minute, text]) => [`${minute}'`, text]);
}

function parseEventMinute(timeStamp, half) {
  const match = String(timeStamp || "").match(/(\d+):(\d+)/);
  if (!match) return null;
  let minute = Number(match[1]);
  if (!Number.isFinite(minute)) return null;
  const halfValue = Number(half);
  if (halfValue === 2 && minute <= 45) {
    minute += 45;
  } else if (halfValue === 3 && minute <= 15) {
    minute += 90;
  } else if (halfValue === 4 && minute <= 15) {
    minute += 105;
  }
  return minute;
}

function updateTimelineBlock(match) {
  const timeline = document.querySelector(".timeline-block");
  if (!timeline) return;
  const visibleCount = getTimelineCount(match);
  timeline.innerHTML = renderEventsHtml(match.events, false, visibleCount);

  const actions = document.querySelector(".timeline-actions");
  if (actions) {
    actions.innerHTML = renderTimelineMoreButton(match, false, visibleCount);
  }
  wireTimelineMore(match);
}

function renderEventsHtml(events, isLoading, visibleCount) {
  if (isLoading) {
    return `
      <div class="timeline-event">
        <div class="minute">--'</div>
        <div>${escapeHtml(t("detailLoadingEvents"))}</div>
      </div>`;
  }

  if (!Array.isArray(events) || events.length === 0) {
    return `
      <div class="timeline-event">
        <div class="minute">--'</div>
        <div>${escapeHtml(t("detailNoEvents"))}</div>
      </div>`;
  }

  const safeCount = Number.isFinite(visibleCount) ? Math.max(visibleCount, 0) : events.length;
  return events
    .slice(0, safeCount)
    .map(
      ([minute, text]) => `
        <div class="timeline-event">
          <div class="minute">${escapeHtml(minute)}</div>
          <div>${escapeHtml(text)}</div>
        </div>`
    )
    .join("");
}

function renderTimelineMoreButton(match, isLoading, visibleCount) {
  if (isLoading) {
    return "";
  }
  const total = Array.isArray(match.events) ? match.events.length : 0;
  if (total <= visibleCount) {
    return "";
  }
  const remaining = total - visibleCount;
  return `
    <button class="more-button timeline-more" id="timelineMoreBtn" type="button">${escapeHtml(
      t("detailMoreEvents", { count: remaining })
    )}</button>`;
}

function wireTimelineMore(match) {
  const button = document.querySelector("#timelineMoreBtn");
  if (!button) return;
  button.addEventListener("click", () => {
    const total = Array.isArray(match.events) ? match.events.length : 0;
    const nextCount = Math.min(total, getTimelineCount(match) + TIMELINE_STEP);
    setTimelineCount(match, nextCount);
    updateTimelineBlock(match);
  });
}

function getCurrentMatchId() {
  const [, route, id] = window.location.hash.split("/");
  return route === "match" ? id : "";
}

function renderDetail(matchId) {
  updateRoleBadge();
  const match = matches.find((item) => item.id === matchId) || matches[0];
  if (!match) {
    renderHome();
    return;
  }
  const shouldLoad = shouldLoadEvents(match);
  const visibleCount = getTimelineCount(match);
  const view = detailTemplate.content.cloneNode(true);
  view.querySelector(".detail-page").innerHTML = `
    <div class="article-main">
      <header class="article-header">
        ${isAdmin() ? `<div class="admin-inline-toolbar"><a class="ghost-button" href="#/admin/edit/${match.id}">${escapeHtml(t("detailEdit"))}</a></div>` : ""}
        <p class="kicker">${escapeHtml(match.league)} · ${escapeHtml(displayText(match.time))}</p>
        <h1>${match.title}</h1>
        <p class="dek">${escapeHtml(displayText(match.summary))}</p>
        <div class="meta-row">
          <span>${renderTeamAbbr(match.home)} vs ${renderTeamAbbr(match.away)}</span>
          <span>${match.readTime}</span>
          <span>${match.related} ${escapeHtml(t("relatedLabel"))}</span>
        </div>
      </header>
      <section class="media-stage">
        <div class="video-wrap">
          <video id="matchVideo" controls preload="metadata" poster="${match.image}">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="marker-bar" aria-label="Timeline video">
          ${Array.from({ length: 90 }, (_, index) => {
            const minute = index + 1;
            const chapter = match.chapters.find((item) => Math.abs(item.minute - minute) <= 1);
            const className = chapter ? (chapter.label.toLowerCase().includes("bàn") ? "marker is-goal" : "marker is-hot") : "marker";
            return `<button class="${className}" data-minute="${minute}" title="Phút ${minute}"></button>`;
          }).join("")}
        </div>
        <div class="chapter-list">
          ${match.chapters
            .map(
              (chapter) => `
              <button class="chapter-button" data-minute="${chapter.minute}">
                <span>${chapter.minute}'</span>
                ${chapter.label}
              </button>`
            )
            .join("")}
        </div>
      </section>
      <section class="article-body">
        <p>${escapeHtml(displayText(match.articleIntro))}</p>
        <div class="timeline-block">
          ${renderEventsHtml(match.events, shouldLoad, visibleCount)}
        </div>
        <div class="timeline-actions">
          ${renderTimelineMoreButton(match, shouldLoad, visibleCount)}
        </div>
        <p>${escapeHtml(displayText(match.articleNote))}</p>
      </section>
    </div>
    <aside class="detail-rail">
      <section class="match-side-panel">
        <div class="panel-heading">
          <span class="accent-bar"></span>
          <h2>${escapeHtml(t("detailMatchCenter"))}</h2>
        </div>
        <div class="mini-score">
          <span>${renderTeamAbbr(match.home)}</span>
          <strong>${match.score}</strong>
          <span class="team-right">${renderTeamAbbr(match.away)}</span>
        </div>
        <div class="stat-table">
          ${statRow(t("statPossession"), match.stats.possession[0], match.stats.possession[1], "%")}
          ${statRow(t("statShots"), match.stats.shots[0], match.stats.shots[1], "")}
          ${statRow(t("statXg"), match.stats.xg[0], match.stats.xg[1], "")}
        </div>
      </section>
      <section class="chat-panel" aria-label="${escapeAttr(t("detailAskAgent"))}">
        <div class="chat-header">
          <h2>${escapeHtml(t("detailAskAgent"))}</h2>
          <div class="context-pills">
            <span>${match.id}</span>
            <span id="videoContext">${escapeHtml(t("detailVideoLabel"))} 00:00</span>
            <span>${escapeHtml(t("detailMemoryOn"))}</span>
          </div>
        </div>
        <div class="chat-log" id="chatLog">
          <div class="message agent">${escapeHtml(t("chatAgentIntro"))}</div>
        </div>
        <div class="quick-prompts" id="quickPrompts">
          <button type="button">${escapeHtml(t("detailPromptSummary"))}</button>
          <button type="button">${escapeHtml(t("detailPromptGoal"))}</button>
          <button type="button">${escapeHtml(t("detailPromptHighlight"))}</button>
        </div>
        <form class="chat-form" id="chatForm">
          <textarea id="chatInput" rows="1" placeholder="${escapeAttr(t("detailAskAgent"))}..."></textarea>
          <button class="send-button" type="submit">${escapeHtml(t("detailSend"))}</button>
        </form>
      </section>
    </aside>`;

  app.replaceChildren(view);
  wireDetail(match);
  wireTimelineMore(match);
  if (shouldLoad) {
    hydrateMatchEvents(match);
  }
}

function renderAdminLogin(message = "") {
  updateRoleBadge();
  const view = adminTemplate.content.cloneNode(true);
  view.querySelector(".admin-page").innerHTML = `
    <section class="admin-login">
      <div>
        <p class="kicker">${escapeHtml(t("adminAccessKicker"))}</p>
        <h1>${escapeHtml(t("adminLoginTitle"))}</h1>
        <p class="dek">${escapeHtml(t("adminLoginDesc"))}</p>
      </div>
      <form class="admin-card" id="adminLoginForm">
        <label>
          <span>${escapeHtml(t("adminPasswordLabel"))}</span>
          <input name="password" type="password" placeholder="admin123" autocomplete="current-password" />
        </label>
        ${message ? `<p class="form-error">${escapeHtml(message)}</p>` : ""}
        <button class="pill-button" type="submit">${escapeHtml(t("adminLoginBtn"))}</button>
        <p class="form-hint">${escapeHtml(t("adminLoginHint", { password: ADMIN_PASSWORD }))}</p>
      </form>
    </section>`;

  app.replaceChildren(view);
  document.querySelector("#adminLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const password = new FormData(event.currentTarget).get("password");
    if (password === ADMIN_PASSWORD) {
      setAdminMode(true);
      window.location.hash = "#/admin";
      return;
    }
    renderAdminLogin(t("adminLoginError"));
  });
}

function renderAdmin(matchId = "") {
  if (!isAdmin()) {
    renderAdminLogin();
    return;
  }

  updateRoleBadge();
  const view = adminTemplate.content.cloneNode(true);
  view.querySelector(".admin-page").innerHTML = `
    <section class="admin-dashboard">
      <div class="admin-topbar">
        <div>
          <p class="kicker">${escapeHtml(t("adminDashboardKicker"))}</p>
          <h1>${escapeHtml(t("adminDashboardTitle"))}</h1>
          <p class="dek">${escapeHtml(t("adminDashboardDesc"))}</p>
        </div>
        <div class="admin-actions">
          <button class="ghost-button" type="button" id="quickCreateBtn">${escapeHtml(t("adminAddDraft"))}</button>
          <button class="ghost-button" type="button" id="logoutBtn">${escapeHtml(t("adminLogout"))}</button>
        </div>
      </div>
      <div class="admin-layout is-compact">
        <section class="admin-card admin-list-card">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>${escapeHtml(t("adminListTitle"))}</h2>
          </div>
          <div class="admin-list">
            ${matches.map(renderAdminListItem).join("") || `<p class="chat-note">${escapeHtml(t("adminListEmpty"))}</p>`}
          </div>
        </section>
        <aside class="admin-card admin-help-card">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>${escapeHtml(t("adminInlineTitle"))}</h2>
          </div>
          <p class="chat-note">${escapeHtml(t("adminInlineDesc"))}</p>
        </aside>
      </div>
    </section>`;

  app.replaceChildren(view);
  wireAdmin();
  return;

  const current = matches.find((match) => match.id === matchId) || createEmptyMatch();
  const legacyView = adminTemplate.content.cloneNode(true);
  view.querySelector(".admin-page").innerHTML = `
    <section class="admin-dashboard">
      <div class="admin-topbar">
        <div>
          <p class="kicker">Admin dashboard</p>
          <h1>Quản lý blog trận đấu</h1>
          <p class="dek">Các thay đổi đang lưu vào localStorage để mô phỏng database.</p>
        </div>
        <div class="admin-actions">
          <a class="ghost-button" href="#/admin/new">Thêm bài</a>
          <button class="ghost-button" type="button" id="logoutBtn">Logout</button>
        </div>
      </div>
      <div class="admin-layout">
        <section class="admin-card">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>Danh sách bài</h2>
          </div>
          <div class="admin-list">
            ${matches.map(renderAdminListItem).join("") || `<p class="chat-note">Chưa có bài nào.</p>`}
          </div>
        </section>
        <form class="admin-editor admin-card" id="matchEditor">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>${matchId ? "Sửa bài" : "Thêm bài mới"}</h2>
          </div>
          ${adminInput("id", "Slug", current.id, "u17-vietnam-australia", Boolean(matchId))}
          ${adminInput("title", "Tiêu đề", current.title, "Nhận định trận đấu...")}
          <div class="editor-grid">
            ${adminInput("league", "Giải đấu", current.league, "Premier League")}
            ${adminInput("status", "Trạng thái", current.status, "Analysis")}
            ${adminInput("time", "Thời gian", current.time, "21:30, Chủ nhật")}
            ${adminInput("score", "Tỷ số", current.score, "0 - 0")}
            ${adminInput("home", "Đội nhà", current.home, "Home FC")}
            ${adminInput("away", "Đội khách", current.away, "Away FC")}
            ${adminInput("readTime", "Thời lượng đọc", current.readTime, "5 phút")}
            ${adminInput("related", "Số liên quan", current.related, "12", false, "number")}
          </div>
          ${adminInput("image", "Ảnh cover URL", current.image, "https://...")}
          ${adminTextarea("summary", "Tóm tắt card/trang chủ", current.summary)}
          ${adminTextarea("articleIntro", "Đoạn mở bài chi tiết", current.articleIntro)}
          ${adminTextarea("articleNote", "Đoạn phân tích/video/context", current.articleNote)}
          ${adminTextarea("events", "Timeline events JSON", JSON.stringify(current.events, null, 2))}
          <div class="editor-actions">
            <button class="pill-button" type="submit">Lưu bài</button>
            <a class="ghost-button" href="#/match/${current.id || matches[0]?.id || ""}">Xem trang bài</a>
          </div>
        </form>
      </div>
    </section>`;

  app.replaceChildren(view);
  wireAdmin();
}

function renderAdminListItem(match) {
  return `
    <article class="admin-list-item">
      <img src="${match.image}" alt="" />
      <div>
        <h3>${match.title}</h3>
        <p>${match.league} · ${match.home} vs ${match.away}</p>
        <div class="admin-row-actions">
          <a href="#/admin/edit/${match.id}">${escapeHtml(t("adminEdit"))}</a>
          <a href="#/match/${match.id}">${escapeHtml(t("adminView"))}</a>
          <button type="button" data-delete="${match.id}">${escapeHtml(t("adminDelete"))}</button>
        </div>
      </div>
    </article>`;
}

function renderInlineEditor(matchId) {
  if (!isAdmin()) {
    renderAdminLogin();
    return;
  }

  updateRoleBadge();
  const match = matches.find((item) => item.id === matchId);
  if (!match) {
    renderAdmin();
    return;
  }

  const view = detailTemplate.content.cloneNode(true);
  const page = view.querySelector(".detail-page");
  page.classList.add("edit-detail-page");
  page.innerHTML = `
    <div class="article-main inline-edit-surface">
      <header class="article-header">
        <div class="admin-inline-toolbar">
          <span class="edit-mode-pill">${escapeHtml(t("adminEditingLive"))}</span>
        </div>
        <p class="kicker"><span data-edit="league" contenteditable="true">${escapeHtml(match.league)}</span> · <span data-edit="time" contenteditable="true">${escapeHtml(match.time)}</span></p>
        <h1 data-edit="title" contenteditable="true">${escapeHtml(match.title)}</h1>
        <p class="dek" data-edit="summary" contenteditable="true">${escapeHtml(match.summary)}</p>
        <div class="meta-row">
          <span data-edit="home" contenteditable="true">${escapeHtml(match.home)}</span>
          <span>vs</span>
          <span data-edit="away" contenteditable="true">${escapeHtml(match.away)}</span>
          <span data-edit="readTime" contenteditable="true">${escapeHtml(match.readTime)}</span>
        </div>
      </header>
      <section class="media-stage">
        <div class="video-wrap edit-cover" style="background-image:url('${escapeAttr(match.image)}')">
          <div class="cover-edit-fields">
            <label>
              <span>${escapeHtml(t("adminCoverLabel"))}</span>
              <input id="inlineImage" value="${escapeAttr(match.image)}" />
            </label>
          </div>
        </div>
      </section>
      <section class="article-body">
        <p data-edit="articleIntro" contenteditable="true">${escapeHtml(match.articleIntro)}</p>
        <div class="timeline-block editable-events">
          ${match.events
            .map(
              ([minute, text], index) => `
              <div class="timeline-event">
                <div class="minute" data-event-minute="${index}" contenteditable="true">${escapeHtml(minute)}</div>
                <div data-event-text="${index}" contenteditable="true">${escapeHtml(text)}</div>
              </div>`
            )
            .join("")}
        </div>
        <p data-edit="articleNote" contenteditable="true">${escapeHtml(match.articleNote)}</p>
      </section>
    </div>
    <aside class="detail-rail editor-rail">
      <section class="admin-card">
        <div class="panel-heading">
          <span class="accent-bar"></span>
          <h2>${escapeHtml(t("adminPublishControls"))}</h2>
        </div>
        ${adminInput("status", t("adminStatus"), match.status, "Analysis")}
        ${adminInput("score", t("adminScore"), match.score, "0 - 0")}
        ${adminInput("related", t("adminRelated"), match.related, "12", false, "number")}
        <div class="editor-actions">
          <button class="pill-button" type="button" id="saveInlineBtn">${escapeHtml(t("adminSave"))}</button>
          <a class="ghost-button" href="#/match/${match.id}">${escapeHtml(t("adminViewUser"))}</a>
          <a class="ghost-button" href="#/admin">${escapeHtml(t("adminDashboard"))}</a>
        </div>
      </section>
    </aside>`;

  app.replaceChildren(view);
  wireInlineEditor(match);
}

function adminInput(name, label, value = "", placeholder = "", readonly = false, type = "text") {
  return `
    <label>
      <span>${label}</span>
      <input name="${name}" type="${type}" value="${escapeAttr(value)}" placeholder="${placeholder}" ${readonly ? "readonly" : ""} />
    </label>`;
}

function adminTextarea(name, label, value = "") {
  return `
    <label>
      <span>${label}</span>
      <textarea name="${name}" rows="4">${escapeHtml(value)}</textarea>
    </label>`;
}

function wireAdmin() {
  document.querySelector("#logoutBtn").addEventListener("click", () => {
    setAdminMode(false);
    window.location.hash = "#/";
  });

  const quickCreateBtn = document.querySelector("#quickCreateBtn");
  if (quickCreateBtn) {
    quickCreateBtn.addEventListener("click", () => {
      const draft = createEmptyMatch();
      draft.id = `draft-${Date.now()}`;
      draft.title = t("adminNewDraftTitle");
      draft.summary = t("adminDraftSummary");
      draft.league = t("adminDraftLeague");
      draft.home = t("adminDraftHome");
      draft.away = t("adminDraftAway");
      matches = [draft, ...matches];
      saveMatches();
      window.location.hash = `#/admin/edit/${draft.id}`;
    });
  }

  document.querySelector(".admin-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    const id = button.dataset.delete;
    const match = matches.find((item) => item.id === id);
    if (!match || !confirm(t("adminDeleteConfirm", { title: match.title }))) return;
    matches = matches.filter((item) => item.id !== id);
    saveMatches();
    renderAdmin();
  });

  const matchEditor = document.querySelector("#matchEditor");
  if (!matchEditor) return;

  matchEditor.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const id = slugify(data.id || data.title);
    if (!id) return;

    let events = [];
    try {
      events = JSON.parse(data.events || "[]");
    } catch (error) {
      alert("Timeline events JSON chưa hợp lệ.");
      return;
    }

    const existing = matches.find((match) => match.id === id);
    const next = normalizeMatch({
      ...(existing || createEmptyMatch()),
      id,
      title: data.title,
      league: data.league,
      status: data.status,
      time: data.time,
      score: data.score,
      home: data.home,
      away: data.away,
      readTime: data.readTime,
      related: Number(data.related || 0),
      image: data.image,
      summary: data.summary,
      articleIntro: data.articleIntro,
      articleNote: data.articleNote,
      events
    });

    matches = existing ? matches.map((match) => (match.id === id ? next : match)) : [next, ...matches];
    saveMatches();
    window.location.hash = `#/admin/edit/${id}`;
    renderAdmin(id);
  });
}

function wireInlineEditor(match) {
  const imageInput = document.querySelector("#inlineImage");
  const cover = document.querySelector(".edit-cover");
  imageInput.addEventListener("input", () => {
    cover.style.backgroundImage = `url('${imageInput.value}')`;
  });

  document.querySelector("#saveInlineBtn").addEventListener("click", () => {
    const getText = (selector) => document.querySelector(selector)?.textContent.trim() || "";
    const eventMinutes = [...document.querySelectorAll("[data-event-minute]")];
    const events = eventMinutes.map((minuteNode, index) => [
      minuteNode.textContent.trim(),
      document.querySelector(`[data-event-text="${index}"]`)?.textContent.trim() || ""
    ]);

    const next = normalizeMatch({
      ...match,
      league: getText('[data-edit="league"]'),
      time: getText('[data-edit="time"]'),
      title: getText('[data-edit="title"]'),
      summary: getText('[data-edit="summary"]'),
      home: getText('[data-edit="home"]'),
      away: getText('[data-edit="away"]'),
      readTime: getText('[data-edit="readTime"]'),
      articleIntro: getText('[data-edit="articleIntro"]'),
      articleNote: getText('[data-edit="articleNote"]'),
      image: imageInput.value.trim(),
      status: document.querySelector('[name="status"]').value.trim(),
      score: document.querySelector('[name="score"]').value.trim(),
      related: Number(document.querySelector('[name="related"]').value || 0),
      events
    });

    matches = matches.map((item) => (item.id === match.id ? next : item));
    saveMatches();
    renderInlineEditor(match.id);
  });
}

function createEmptyMatch() {
  return normalizeMatch({
    id: "",
    league: "",
    status: "Draft",
    time: "",
    home: "",
    away: "",
    score: "0 - 0",
    title: "",
    summary: "",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 phút",
    related: 0,
    stats: { possession: [50, 50], shots: [0, 0], xg: [0, 0] },
    chapters: [],
    events: []
  });
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function statRow(label, left, right, suffix) {
  const total = Number(left) + Number(right);
  const width = total ? (Number(left) / total) * 100 : 50;
  return `
    <div class="stat-row">
      <span>${left}${suffix}</span>
      <div>
        <small>${label}</small>
        <div class="bar"><span style="width:${width}%"></span></div>
      </div>
      <span class="team-right">${right}${suffix}</span>
    </div>`;
}

function wireDetail(match) {
  const video = document.querySelector("#matchVideo");
  const videoContext = document.querySelector("#videoContext");
  const chatForm = document.querySelector("#chatForm");
  const chatInput = document.querySelector("#chatInput");
  const chatLog = document.querySelector("#chatLog");
  const quickPrompts = document.querySelector("#quickPrompts");

  document.querySelectorAll("[data-minute]").forEach((button) => {
    button.addEventListener("click", () => {
      const minute = Number(button.dataset.minute);
      video.currentTime = Math.min(video.duration || 5400, minute * 60);
      video.play().catch(() => {});
      updateVideoContext(minute);
    });
  });

  video.addEventListener("timeupdate", () => {
    updateVideoContext(Math.floor(video.currentTime / 60));
  });

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(chatLog, text, "user");
    chatInput.value = "";
    resizeComposer();
    const packet = buildAgentContext(match, Math.floor(video.currentTime / 60), text);
    const answer = await askAgent(packet);
    appendMessage(chatLog, answer, "agent");
  });

  chatInput.addEventListener("input", resizeComposer);
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      chatForm.requestSubmit();
    }
  });

  quickPrompts.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    chatInput.value = button.textContent;
    resizeComposer();
    chatInput.focus();
  });

  function updateVideoContext(minute) {
    const safeMinute = Number.isFinite(minute) ? Math.max(0, minute) : 0;
    videoContext.textContent = `${t("detailVideoLabel")} ${String(Math.floor(safeMinute / 60)).padStart(2, "0")}:${String(safeMinute % 60).padStart(2, "0")}`;
  }

  function resizeComposer() {
    chatInput.style.height = "auto";
    chatInput.style.height = `${Math.min(chatInput.scrollHeight, 154)}px`;
    chatInput.style.overflowY = chatInput.scrollHeight > 154 ? "auto" : "hidden";
  }

  resizeComposer();
}

function appendMessage(chatLog, text, role) {
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.textContent = text;
  chatLog.appendChild(node);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function buildAgentContext(match, currentMinute, userMessage) {
  const nearbyEvents = match.events.filter(([minute]) => {
    const value = Number(minute.replace("'", ""));
    return Math.abs(value - currentMinute) <= 12;
  });

  return {
    route: "match-detail",
    userMessage,
    match: {
      id: match.id,
      title: match.title,
      teams: [match.home, match.away],
      score: match.score,
      stats: match.stats
    },
    media: {
      currentMinute,
      nearbyEvents,
      retrievalWindowSeconds: 180
    },
    memoryPolicy: {
      keepLastTurns: 6,
      summarizeOlderTurns: true,
      retrieveBy: ["match_id", "team", "player", "minute", "topic"]
    }
  };
}

async function askAgent(packet) {
  await new Promise((resolve) => setTimeout(resolve, 350));
  const eventText = packet.media.nearbyEvents.length
    ? t("mockAgentEvent", { events: packet.media.nearbyEvents.map((item) => item.join(" ")).join(" ") })
    : t("mockAgentNoEvent");
  return t("mockAgent", {
    teams: packet.match.teams.join(" vs "),
    score: packet.match.score,
    minute: packet.media.currentMinute,
    event: eventText
  });
}

function router() {
  const [, route, id] = window.location.hash.split("/");
  if (route === "admin") {
    if (id === "edit") {
      renderInlineEditor(window.location.hash.split("/")[3]);
    } else {
      renderAdmin();
    }
  } else if (route === "league") {
    renderLeagues();
  } else if (route === "match") {
    renderDetail(id);
  } else {
    renderHome();
  }
}

document.querySelector("#refreshBtn").addEventListener("click", async () => {
  matches = await loadMatches();
  homeVisibleCount = Math.min(HOME_INITIAL_COUNT, matches.length || HOME_INITIAL_COUNT);
  renderHome();
});
window.addEventListener("hashchange", router);
langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

async function initializeApp() {
  matches = await loadMatches();
  homeVisibleCount = Math.min(HOME_INITIAL_COUNT, matches.length || HOME_INITIAL_COUNT);
  applyLanguage();
  updateRoleBadge();
  router();
}

initializeApp();
