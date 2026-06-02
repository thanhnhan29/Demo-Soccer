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
    readTimeMinutes: 5,
    relatedCount: 18,
    source: null,
    stats: { possession: [43, 57], shots: [8, 11], xg: [1.1, 1.4] },
    chapters: [
      { minute: 4, label: "Australia ép cánh phải" },
      { minute: 18, label: "Việt Nam đổi nhịp pressing" },
      { minute: 37, label: "Cơ hội từ tình huống cố định" },
      { minute: 66, label: "Chuỗi thay người quyết định" }
    ],
    events: [
      { minute: "04'", minuteVal: 4,  text: "Australia đẩy hậu vệ biên lên rất cao, buộc Việt Nam lùi block thấp." },
      { minute: "18'", minuteVal: 18, text: "Việt Nam chuyển sang thoát bóng qua trung lộ trước khi bẻ ra cánh trái." },
      { minute: "37'", minuteVal: 37, text: "Pha đá phạt góc tạo ra cú đánh đầu đầu tiên đi trúng mục tiêu." },
      { minute: "66'", minuteVal: 66, text: "Hai thay đổi nhân sự giúp tốc độ phản công tốt hơn trong 15 phút cuối." }
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
    readTimeMinutes: 7,
    relatedCount: 32,
    source: null,
    stats: { possession: [54, 46], shots: [14, 10], xg: [1.8, 1.6] },
    chapters: [
      { minute: 9, label: "City overload half-space" },
      { minute: 23, label: "Arsenal phản pressing" },
      { minute: 51, label: "Bàn gỡ từ cut-back" },
      { minute: 84, label: "Trận đấu vỡ cấu trúc" }
    ],
    events: [
      { minute: "09'", minuteVal: 9,  text: "City tạo tam giác bên phải để kéo tiền vệ trụ Arsenal rời vị trí." },
      { minute: "23'", minuteVal: 23, text: "Arsenal khóa Rodri bằng pressing bóng hai, giành lại thế trận trong 10 phút." },
      { minute: "51'", minuteVal: 51, text: "Một pha cut-back sau lưng trung vệ mở ra bàn gỡ quan trọng." },
      { minute: "84'", minuteVal: 84, text: "Hai đội cùng đẩy tốc độ, khoảng trống giữa tuyến phòng ngự lộ rõ." }
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
    readTimeMinutes: 4,
    relatedCount: 11,
    source: null,
    stats: { possession: [61, 39], shots: [16, 6], xg: [2.0, 0.7] },
    chapters: [
      { minute: 12, label: "PSG bó vào trung lộ" },
      { minute: 34, label: "Marseille phản công 3v3" },
      { minute: 58, label: "Bàn mở tỷ số" },
      { minute: 78, label: "Kiểm soát nhịp cuối trận" }
    ],
    events: [
      { minute: "12'", minuteVal: 12, text: "PSG đặt hai tiền vệ công vào khoảng giữa hậu vệ và tiền vệ Marseille." },
      { minute: "34'", minuteVal: 34, text: "Marseille có pha phản công hiếm hoi nhưng thiếu đường chuyền cuối." },
      { minute: "58'", minuteVal: 58, text: "PSG ghi bàn sau khi đoạt bóng ngay trên phần sân đối thủ." },
      { minute: "78'", minuteVal: 78, text: "Đội chủ nhà giảm tốc và giữ bóng ở biên để bảo vệ lợi thế." }
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
    readTimeMinutes: 6,
    relatedCount: 23,
    source: null,
    stats: { possession: [49, 51], shots: [13, 8], xg: [2.4, 1.0] },
    chapters: [
      { minute: 7, label: "Nhật Bản khóa số 6" },
      { minute: 29, label: "Bàn thắng từ third-man run" },
      { minute: 54, label: "Hàn Quốc đổi sơ đồ" },
      { minute: 72, label: "Đòn kết liễu" }
    ],
    events: [
      { minute: "07'", minuteVal: 7,  text: "Nhật Bản dùng tiền đạo lệch trái che đường chuyền vào tiền vệ trụ." },
      { minute: "29'", minuteVal: 29, text: "Pha chạy người thứ ba phá vỡ hàng thủ và tạo bàn mở tỷ số." },
      { minute: "54'", minuteVal: 54, text: "Hàn Quốc chuyển sang 4-2-3-1 để tăng người ở trung tuyến." },
      { minute: "72'", minuteVal: 72, text: "Nhật Bản tận dụng khoảng trống sau lưng hậu vệ biên để ghi bàn thứ ba." }
    ]
  }
];

const HOME_INITIAL_COUNT = 7;
const HOME_STEP = 6;
const DEFAULT_VIDEO_URL = "http://localhost:8008/videos/fc-barcelona-royal-antwerp_1.mp4";
const DEFAULT_AGENT_API_URL = (() => {
  const rawHost = window.location.hostname || "localhost";
  const host = rawHost === "0.0.0.0" ? "127.0.0.1" : rawHost;
  return `http://${host}:8008/api/agent`;
})();
function getConfiguredAgentApiUrl() {
  if (window.AGENT_API_URL) return window.AGENT_API_URL;
  const stored = localStorage.getItem("agentApiUrl");
  const pageHost = window.location.hostname;
  if (
    stored &&
    pageHost &&
    !["localhost", "127.0.0.1"].includes(pageHost) &&
    /\/\/(localhost|127\.0\.0\.1):8008\/api\/agent\/?$/.test(stored)
  ) {
    const migrated = `http://${pageHost}:8008/api/agent`;
    localStorage.setItem("agentApiUrl", migrated);
    return migrated;
  }
  return stored || DEFAULT_AGENT_API_URL;
}
const AGENT_API_URL =
  getConfiguredAgentApiUrl();
const AGENT_TIMEOUT_MS = Number(
  window.AGENT_TIMEOUT_MS ||
  localStorage.getItem("agentTimeoutMs") ||
  180000
);
const APP_BUILD = "agent-chat-stable-20260525-2";
const chatMemory = new Map();
const agentInFlightByMatch = new Set();

window.__MATCHPULSE_BUILD = APP_BUILD;
window.__MATCHPULSE_AGENT_API_URL = AGENT_API_URL;
console.info("[MatchPulse] build", APP_BUILD, "agent", AGENT_API_URL);

const LEAGUE_THEMES = {
  "Premier League": {
    bg: "var(--league-premier)",
    ink: "var(--league-premier-ink)",
    accent: "#e31c5f"
  },
  "UEFA Champions League": {
    bg: "var(--league-champions)",
    ink: "var(--league-champions-ink)",
    accent: "#0f52ba"
  },
  "Ligue 1": {
    bg: "var(--league-ligue1)",
    ink: "var(--league-ligue1-ink)",
    accent: "#2d6a4f"
  },
  Bundesliga: {
    bg: "var(--league-bundesliga)",
    ink: "var(--league-bundesliga-ink)",
    accent: "#c84b31"
  },
  "Serie A": {
    bg: "var(--league-seriea)",
    ink: "var(--league-seriea-ink)",
    accent: "#207398"
  },
  "La Liga": {
    bg: "var(--league-laliga)",
    ink: "var(--league-laliga-ink)",
    accent: "#b58900"
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
    siteTitle: "MatchPulse - Phân tích bóng đá",
    brandTagline: "blog bóng đá có Agent",
    navHome: "Trang chủ",
    navLeagues: "Giải đấu",
    navWatch: "Xem",
    navAgent: "Agent",
    navAdmin: "Quản trị",
    roleUser: "Người dùng",
    roleAdmin: "Quản trị viên",
    refreshFeed: "Làm mới",
    homeScoreStripLabel: "Trận đấu nổi bật",
    homeMatchListLabel: "Danh sách trận đấu",
    homeEmptyTitle: "Chưa có bài trận đấu",
    homeEmptyDesc: "Đăng nhập Admin để thêm bài viết đầu tiên.",
    homeEmptyAction: "Mở Admin",
    homeOpenMatchRoom: "Mở phòng trận đấu",
    homeAgentContext: "Agent-ready context",
    homeHotReads: "Bài viết nổi bật",
    homeAgentBrief: "Tóm tắt Agent",
    homeMore: "Xem thêm ({count})",
    agentBriefIntro: "Agent nên nhận context theo từng lớp thay vì toàn bộ bài viết.",
    agentBriefMatchLabel: "Gói trận đấu",
    agentBriefMatch: "metadata, score, lineups, stats, event timeline.",
    agentBriefMediaLabel: "Gói media",
    agentBriefMedia: "current timestamp, selected chapter, transcript window ±90s.",
    agentBriefMemoryLabel: "Gói memory",
    agentBriefMemory: "user intent summary, preferences, unresolved questions.",
    relatedLabel: "liên quan",
    leaguesKicker: "Giải đấu",
    leaguesTitle: "Bảng xếp hạng demo theo mẫu giải đấu",
    leaguesSubtitle: "Bảng xếp hạng được tính từ các trận đấu mẫu để phục vụ trải nghiệm blog và truyền tải câu chuyện.",
    leagueBoardKicker: "Bảng xếp hạng",
    leagueBoardMeta: "{count} bài trận đấu · bảng xếp hạng demo",
    leagueBoardPill: "Bảng pastel",
    leagueLatestStories: "Bài mới nhất",
    leagueNote: "Bảng xếp hạng demo dựa trên một phần dữ liệu, sẽ được cập nhật khi LLM hoàn thiện nội dung.",
    leagueNotFound: "Chưa có dữ liệu.",
    standingsRank: "#",
    standingsClub: "CLB",
    standingsPlayed: "Trận",
    standingsGd: "HS",
    standingsPts: "Điểm",
    detailMatchCenter: "Trung tâm trận đấu",
    detailAskAgent: "Hỏi Agent trận đấu",
    detailMemoryOn: "bộ nhớ: bật",
    detailSend: "Gửi",
    detailPromptSummary: "Tóm tắt 5 điểm chính",
    detailPromptGoal: "Vì sao bàn thắng xảy ra?",
    detailPromptHighlight: "Nhảy tới pha hay nhất",
    detailEdit: "Chỉnh sửa bài này",
    detailVideoLabel: "video",
    detailLoadingEvents: "Đang tải sự kiện...",
    detailNoEvents: "Không có sự kiện nào.",
    detailMoreEvents: "Xem thêm sự kiện ({count})",
    adminAccessKicker: "Truy cập Admin",
    adminLoginTitle: "Đăng nhập khu biên tập",
    adminLoginDesc: "Admin có thể thêm, sửa, xóa bài trận đấu và chỉnh sửa từng phần nội dung chi tiết.",
    adminPasswordLabel: "Mật khẩu demo",
    adminLoginBtn: "Vào dashboard",
    adminLoginHint: "Bản thử nghiệm sử dụng mật khẩu {password}. Bản chính thức cần xác thực backend.",
    adminLoginError: "Mật khẩu chưa đúng.",
    adminDashboardKicker: "Bảng điều khiển Admin",
    adminDashboardTitle: "Quản lý blog trận đấu",
    adminDashboardDesc: "Dashboard chỉ để quản lý nhanh. Nhấp Sửa sẽ mở đúng giao diện bài viết để sửa trực tiếp trên giao diện thực tế.",
    adminAddDraft: "Thêm bản nháp",
    adminLogout: "Đăng xuất",
    adminListTitle: "Danh sách bài viết",
    adminInlineTitle: "Trình chỉnh sửa trực tiếp",
    adminInlineDesc: "Bấm Sửa để mở trang bài ở chế độ biên tập. Tiêu đề, tóm tắt, nội dung và dòng thời gian được chỉnh sửa trực tiếp trên giao diện thực tế.",
    adminListEmpty: "Chưa có bài viết nào.",
    adminNewDraftTitle: "Bài viết nháp mới",
    adminDraftSummary: "Nhập tóm tắt trận đấu tại đây.",
    adminDraftLeague: "Giải đấu nháp",
    adminDraftHome: "CLB Nhà",
    adminDraftAway: "CLB Khách",
    adminDeleteConfirm: "Xóa bài viết \"{title}\"?",
    adminEdit: "Sửa",
    adminView: "Xem",
    adminDelete: "Xóa",
    adminEditingLive: "Đang chỉnh sửa giao diện trực tiếp",
    adminPublishControls: "Kiểm soát xuất bản",
    adminStatus: "Trạng thái",
    adminScore: "Tỷ số",
    adminRelated: "Số liên quan",
    adminSave: "Lưu thay đổi",
    adminViewUser: "Xem bản người dùng",
    adminDashboard: "Bảng điều khiển",
    adminCoverLabel: "Đường dẫn ảnh bìa",
    adminVideoLabel: "Đường dẫn video",
    notFound: "Chưa có dữ liệu.",
    chatAgentIntro:
      "Mình đang giữ thông tin trận đấu, dòng thời gian và ngữ cảnh video hiện tại. Bạn có thể hỏi về chiến thuật, cầu thủ hoặc yêu cầu nhảy tới pha bóng đang xem.",
    agentThinkingInitial: "Agent đã nhận câu hỏi. Đang chuẩn bị suy luận...",
    agentThinkingBusy: "Agent đang xử lý câu trước, đợi mình một chút.",
    agentThinkingDone: "Đã có câu trả lời.",
    mockAgent:
      "Mock agent: mình sẽ trả lời dựa trên {teams}, tỷ số {score}, video phút {minute}. {event}",
    mockAgentEvent: "Mốc gần nhất: {events}",
    mockAgentNoEvent: "Hiện chưa có sự kiện nào gần mốc thời gian này.",
    statPossession: "Kiểm soát",
    statShots: "Sút",
    statXg: "xG",
    minute: "Phút",
    detailVideoSegmentLabel: "Chọn đoạn phân tích:",
    detailAttachSegment: "Đính kèm",
    cancel: "Hủy",
    timelineSelectingRange: "Đang chọn: Phút",
    detailPinMoment: "Ghim mốc",
    detailPinMomentTitle: "Ghim mốc thời gian này làm câu hỏi",
    detailAskAgentChapter: "Hỏi Agent về chương này",
    detailAskAgentEvent: "Hỏi Agent về sự kiện này",
    chapterPillLabel: "📎 Đã ghim chương: {label}",
    eventPillLabel: "📎 Đã ghim sự kiện: Phút {minute}'",
    rangePillLabel: "📎 Đã ghim: Phút {start} - {end}",
    momentPillLabel: "📎 Đã ghim: Phút {minute}",
    defaultTimePillLabel: "📷 Mốc đang phát: Phút {minute}:00",
    adminSearchPlaceholder: "Tìm kiếm bài viết...",
    adminSortLabel: "Sắp xếp",
    adminSortNewest: "Thời gian (Mới nhất)",
    adminSortOldest: "Thời gian (Cũ nhất)",
    adminSortTitleAsc: "Tiêu đề (A-Z)",
    adminSortTitleDesc: "Tiêu đề (Z-A)",
    adminSortLeague: "Giải đấu (A-Z)",
    adminFilterLeagueAll: "Tất cả giải đấu",
    adminFilterStatusLabel: "Trạng thái",
    adminFilterStatusAll: "Tất cả trạng thái",
    adminGroupLabel: "Nhóm theo",
    adminGroupNone: "Không nhóm",
    adminGroupLeague: "Giải đấu",
    adminGroupStatus: "Trạng thái",
    clearPinTitle: "Hủy ghim"
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
    adminVideoLabel: "Video URL",
    notFound: "Not found.",
    chatAgentIntro:
      "I am holding the match packet, timeline, and current video context. Ask about tactics, players, or jump to highlights.",
    agentThinkingInitial: "Agent received the question. Preparing reasoning...",
    agentThinkingBusy: "Agent is still working on the previous question.",
    agentThinkingDone: "Answer ready.",
    mockAgent:
      "Mock agent: I will answer using {teams}, score {score}, minute {minute}. {event}",
    mockAgentEvent: "Nearest: {events}",
    mockAgentNoEvent: "No nearby events for this timestamp.",
    statPossession: "Possession",
    statShots: "Shots",
    statXg: "xG",
    minute: "Min",
    detailVideoSegmentLabel: "Select analysis segment:",
    detailAttachSegment: "Attach",
    cancel: "Cancel",
    timelineSelectingRange: "Selecting: Min",
    detailPinMoment: "Pin moment",
    detailPinMomentTitle: "Pin this timestamp as context",
    detailAskAgentChapter: "Ask Agent about this chapter",
    detailAskAgentEvent: "Ask Agent about this event",
    chapterPillLabel: "📎 Pinned chapter: {label}",
    eventPillLabel: "📎 Pinned event: Min {minute}'",
    rangePillLabel: "📎 Pinned: Min {start} - {end}",
    momentPillLabel: "📎 Pinned: Min {minute}",
    defaultTimePillLabel: "📷 Playback time: Min {minute}:00",
    adminSearchPlaceholder: "Search stories...",
    adminSortLabel: "Sort",
    adminSortNewest: "Time (Newest)",
    adminSortOldest: "Time (Oldest)",
    adminSortTitleAsc: "Title (A-Z)",
    adminSortTitleDesc: "Title (Z-A)",
    adminSortLeague: "League (A-Z)",
    adminFilterLeagueAll: "All leagues",
    adminFilterStatusLabel: "Status",
    adminFilterStatusAll: "All status",
    adminGroupLabel: "Group by",
    adminGroupNone: "None",
    adminGroupLeague: "League",
    adminGroupStatus: "Status",
    clearPinTitle: "Clear pin"
  }
};

const STATUS_LABELS = {
  vi: {
    Final: "Kết thúc",
    Preview: "Xem trước",
    Analysis: "Phân tích",
    "Live brief": "Tóm tắt trực tiếp",
    "Tactical room": "Phòng chiến thuật",
    Draft: "Bản nháp"
  },
  en: {
    Final: "Final",
    Preview: "Preview",
    Analysis: "Analysis",
    "Live brief": "Live brief",
    "Tactical room": "Tactical room",
    Draft: "Draft"
  }
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
let activeContext = null;
let adminSearchQuery = "";
let adminSortBy = "time-desc";
let adminFilterLeague = "all";
let adminFilterStatus = "all";
let adminGroupBy = "none";
const adminCollapsedGroups = new Set();

const SEED_TRANSLATIONS = {
  en: {
    "u17-vietnam-australia": {
      title: "Tactical Preview: Vietnam U17 vs Australia U17 - Overlapping Wingbacks battle",
      summary: "Vietnam needs speed on the flanks and better press resistance to pull Australia out of their midblock.",
      articleIntro: "U17 Vietnam enters this clash with a clear intent to challenge Australia's physical dominance through quick vertical transition and overload...",
      articleNote: "Note: Vietnam's wingers must track back aggressively to support the fullbacks against Australia's high-pressing wide defenders.",
      chapters: [
        { minute: 4, label: "Australia overload right wing" },
        { minute: 18, label: "Vietnam changes press tempo" },
        { minute: 37, label: "Set piece opportunity" },
        { minute: 66, label: "Tactical substitutions payoff" }
      ],
      events: [
        { minute: "04'", minuteVal: 4,  text: "Australia push their wingbacks high, forcing Vietnam into a low defensive block." },
        { minute: "18'", minuteVal: 18, text: "Vietnam transitions through the center before shifting play to the left wing." },
        { minute: "37'", minuteVal: 37, text: "A corner kick results in the first header on target for the hosts." },
        { minute: "66'", minuteVal: 66, text: "Two substitutions increase counter-attacking speed during the final 15 minutes." }
      ]
    },
    "man-city-arsenal": {
      title: "City and Arsenal Share Points: A Game of Second-Line Pressing Traps",
      summary: "Both sides locked each other in a tight possession duel, where every diagonal pass opened a new tactical front.",
      articleIntro: "The highly anticipated clash between Manchester City and Arsenal delivered a masterclass in tactical discipline...",
      articleNote: "Note: Pressing structures were key to neutralising both Haaland and Saka in their respective final thirds.",
      chapters: [
        { minute: 9, label: "City overload half-space" },
        { minute: 23, label: "Arsenal counter-pressing" },
        { minute: 51, label: "Equalizer from cut-back" },
        { minute: 84, label: "Structural breakdown" }
      ],
      events: [
        { minute: "09'", minuteVal: 9,  text: "City create a right-side triangle to drag Arsenal's defensive midfielder out of position." },
        { minute: "23'", minuteVal: 23, text: "Arsenal lock Rodri down using second-ball pressing, reclaiming momentum for 10 minutes." },
        { minute: "51'", minuteVal: 51, text: "A cut-back behind the center-backs sets up a crucial equalizing goal." },
        { minute: "84'", minuteVal: 84, text: "Both teams push the tempo, exposing large spaces between the lines." }
      ]
    },
    "psg-marseille": {
      title: "PSG Edge Marseille: The New Number 10 Pulling the Strings",
      summary: "The goal came from a quick transition, but the main story was PSG's ball distribution around the box.",
      articleIntro: "PSG secured a narrow victory over Marseille in a hard-fought Classique...",
      articleNote: "Note: Marseille's deep block was difficult to break down, requiring patient central combinations.",
      chapters: [
        { minute: 12, label: "PSG tucking inside" },
        { minute: 34, label: "Marseille 3v3 counter-attack" },
        { minute: 58, label: "Opening goal" },
        { minute: 78, label: "Closing match control" }
      ],
      events: [
        { minute: "12'", minuteVal: 12, text: "PSG position two attacking midfielders in the space between Marseille's defense and midfield." },
        { minute: "34'", minuteVal: 34, text: "Marseille launch a rare counter-attack but fail to deliver the final pass." },
        { minute: "58'", minuteVal: 58, text: "PSG open the scoring after winning possession high up the pitch." },
        { minute: "78'", minuteVal: 78, text: "The hosts slow down the tempo and keep possession wide to secure their lead." }
      ]
    },
    "japan-korea": {
      title: "Japan Stifle South Korea with a Compact 28-Meter Vertical Block",
      summary: "A perfect study in spacing: keeping the shape narrow enough to press, yet wide enough to escape pressure.",
      articleIntro: "Japan's tactical discipline was on display as they restricted South Korea's build-up options...",
      articleNote: "Note: Dynamic positioning between Japan's front three prevented simple progress through the center.",
      chapters: [
        { minute: 7, label: "Japan lock Korea's number 6" },
        { minute: 29, label: "Goal from third-man run" },
        { minute: 54, label: "Korea change shape" },
        { minute: 72, label: "Clinical finish" }
      ],
      events: [
        { minute: "07'", minuteVal: 7,  text: "Japan's left winger covers the passing lane to South Korea's holding midfielder." },
        { minute: "29'", minuteVal: 29, text: "A third-man running sequence penetrates the defense and scores the opening goal." },
        { minute: "54'", minuteVal: 54, text: "Korea switch to a 4-2-3-1 to increase numbers in the center of midfield." },
        { minute: "72'", minuteVal: 72, text: "Japan exploit the space behind the fullbacks to secure a third goal." }
      ]
    }
  }
};

const TEAM_TRANSLATIONS = {
  "U17 Việt Nam": "Vietnam U17",
  "U17 Australia": "Australia U17",
  "Nhật Bản": "Japan",
  "Hàn Quốc": "South Korea",
  "Genoa": "Genoa",
  "Napoli": "Napoli",
  "Juventus": "Juventus",
  "Lazio": "Lazio",
  "Toulouse": "Toulouse",
  "Clermont": "Clermont",
  "Strasbourg": "Strasbourg",
  "Sevilla": "Sevilla",
  "Girona": "Girona",
  "PSG": "PSG",
  "Lens": "Lens",
  "Verona": "Verona",
  "AS Roma": "AS Roma",
  "B. Monchengladbach": "M'gladbach",
  "Bayer Leverkusen": "Leverkusen",
  "Arsenal": "Arsenal",
  "Fulham": "Fulham",
  "Heidenheim": "Heidenheim",
  "Hoffenheim": "Hoffenheim"
};

function translateTeam(name) {
  if (currentLanguage === "en") {
    return TEAM_TRANSLATIONS[name] || name;
  }
  return name;
}

function getTranslatedMatch(match) {
  if (!match) return match;
  const cloned = { ...match };
  cloned.home = translateTeam(cloned.home);
  cloned.away = translateTeam(cloned.away);

  if (currentLanguage === "en") {
    const trans = SEED_TRANSLATIONS.en && SEED_TRANSLATIONS.en[match.id];
    if (trans) {
      cloned.title = trans.title;
      cloned.summary = trans.summary;
      if (trans.articleIntro) cloned.articleIntro = trans.articleIntro;
      if (trans.articleNote) cloned.articleNote = trans.articleNote;
      if (trans.chapters) cloned.chapters = trans.chapters;
      if (trans.events) cloned.events = trans.events;
    } else {
      if (cloned.title && cloned.title.includes("Nhận định")) {
        cloned.title = cloned.title.replace("Nhận định", "Preview").replace("vs", "vs");
      }
    }
    if (cloned.time && cloned.time.includes("Chủ nhật")) {
      cloned.time = cloned.time.replace("Chủ nhật", "Sunday");
    } else if (cloned.time && cloned.time.includes("Thứ hai")) {
      cloned.time = cloned.time.replace("Thứ hai", "Monday");
    }
  }
  return cloned;
}

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
  let value = Object.prototype.hasOwnProperty.call(dictionary, key)
    ? dictionary[key]
    : Object.prototype.hasOwnProperty.call(COPY.en, key)
      ? COPY.en[key]
      : key;
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

// ---------------------------------------------------------------------------
// Schema helpers
// ---------------------------------------------------------------------------

/**
 * Parses the numeric value from a minute string like "04'" or "66+2'".
 * Returns 0 if unparseable.
 */
function parseMinuteVal(minuteStr) {
  const match = String(minuteStr || "").match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

/**
 * Normalizes a raw Match object (from dataset, localStorage, or seedMatches)
 * into the canonical schema. Handles backward-compat for old field names and
 * old event tuple format.
 *
 * @param {object} match - Raw match data
 * @returns {object} Normalized match conforming to the canonical MatchObject schema
 */
function normalizeMatch(match) {
  // --- events: support both legacy [string, string][] tuples and new {minute, minuteVal, text} objects ---
  const rawEvents = Array.isArray(match.events) ? match.events : [];
  const events = rawEvents.map((evt) => {
    if (Array.isArray(evt)) {
      // Legacy tuple format: [minuteStr, text]
      const minuteStr = String(evt[0] || "");
      return {
        minute: minuteStr,
        minuteVal: parseMinuteVal(minuteStr),
        text: String(evt[1] || "")
      };
    }
    // Already an object — ensure all required fields exist
    const minuteStr = String(evt.minute || "");
    return {
      minute: minuteStr,
      minuteVal: Number.isFinite(evt.minuteVal) ? evt.minuteVal : parseMinuteVal(minuteStr),
      text: String(evt.text || "")
    };
  });

  // --- readTimeMinutes: parse from readTime string if numeric field missing ---
  let readTimeMinutes = Number(match.readTimeMinutes);
  if (!Number.isFinite(readTimeMinutes) || readTimeMinutes <= 0) {
    const parsed = String(match.readTime || "").match(/(\d+)/);
    readTimeMinutes = parsed ? Number(parsed[1]) : 3;
  }

  // --- relatedCount: backward compat with old 'related' field ---
  const relatedCountValue = match.relatedCount !== null && match.relatedCount !== undefined
    ? match.relatedCount
    : match.related;
  const relatedCount = Number(relatedCountValue !== null && relatedCountValue !== undefined ? relatedCountValue : 0);

  return {
    articleIntro:
      "Bài phân tích được sinh hoặc biên tập từ database trận đấu: metadata, lineup, sự kiện, thống kê nâng cao, transcript và các đoạn highlight đã được index theo thời gian.",
    articleNote:
      "Với video 90 phút, frontend chỉ nên preload metadata, phát qua HLS/DASH adaptive streaming, chia chapter theo event, và cho agent trả lời kèm deep link tới timestamp.",
    ...match,
    // Normalized / canonical fields (override spread above)
    relatedCount,
    readTimeMinutes,
    source: match.source !== undefined && match.source !== null ? match.source : null,
    videoUrl: getMatchVideoUrl(match),
    stats: match.stats || { possession: [50, 50], shots: [0, 0], xg: [0, 0] },
    chapters: Array.isArray(match.chapters) ? match.chapters : [],
    events
  };
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

function getMatchVideoUrl(match) {
  const candidates = [
    match && match.videoUrl,
    match && match.media && match.media.videoUrl,
    match && match.video,
    DEFAULT_VIDEO_URL
  ];
  for (const candidate of candidates) {
    const url = String(candidate || "").trim();
    if (url) return url;
  }
  return DEFAULT_VIDEO_URL;
}

function getVideoMimeType(videoUrl) {
  const cleanUrl = String(videoUrl || "").split(/[?#]/, 1)[0].toLowerCase();
  if (cleanUrl.endsWith(".webm")) return "video/webm";
  if (cleanUrl.endsWith(".mov")) return "video/quicktime";
  if (cleanUrl.endsWith(".m3u8")) return "application/vnd.apple.mpegurl";
  if (cleanUrl.endsWith(".mpd")) return "application/dash+xml";
  return "video/mp4";
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
          <span>${match.relatedCount} ${escapeHtml(t("relatedLabel"))}</span>
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
  const sortedMatches = getSortedMatches(matches).map(getTranslatedMatch);
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
  const translatedMatches = matches.map(getTranslatedMatch);
  const grouped = groupBy(translatedMatches, (match) => match.league || "Unknown");
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
  return (dateB ? dateB.getTime() : 0) - (dateA ? dateA.getTime() : 0);
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
  if (!match || !match.source) return false;
  if (!Array.isArray(match.events) || match.events.length === 0) return true;
  if (match.events.length === 1 && isMissingText(match.events[0] ? match.events[0].text : undefined)) return true;
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
  const comments = raw && Array.isArray(raw.comments) ? raw.comments : [];
  /** @type {Array<{minuteVal: number, minute: string, text: string}>} */
  const events = [];

  comments.forEach((comment) => {
    const type = String(comment && comment.comments_type || "").trim().toLowerCase();
    if (!EVENT_TYPES.has(type)) return;
    const minuteVal = parseEventMinute(comment && comment.time_stamp, comment && comment.half);
    if (minuteVal === null) return;
    const text = String(comment && comment.comments_text || "").trim();
    if (!text) return;
    events.push({ minuteVal, text });
  });

  events.sort((a, b) => a.minuteVal - b.minuteVal);
  return events.map(({ minuteVal, text }) => ({
    minute: `${minuteVal}'`,
    minuteVal,
    text
  }));
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
  wireTimelineEvents(match);
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
      (evt) => {
        const { minute, minuteVal, text } = evt;
        const isSelected = activeContext && activeContext.type === "event" && activeContext.minute === minuteVal;
        const className = isSelected ? "timeline-event is-selected-event" : "timeline-event";
        return `
          <div class="${className}" data-event-min="${minuteVal}">
            <div class="minute">${escapeHtml(minute)}</div>
            <div class="event-desc-row">
              <span class="event-text-content">${escapeHtml(text)}</span>
              <button class="event-pin-btn" data-pin-event-minute="${minuteVal}" data-pin-event-text="${escapeAttr(text)}" title="${escapeAttr(t("detailAskAgentEvent"))}" type="button">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>
          </div>`;
      }
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
  const match = getTranslatedMatch(matches.find((item) => item.id === matchId) || matches[0]);
  if (!match) {
    renderHome();
    return;
  }
  if (agentInFlightByMatch.has(match.id) && app.querySelector(".detail-page") && getCurrentMatchId() === match.id) {
    console.info("[MatchPulse] skipped detail re-render while agent is answering", match.id);
    updateRoleBadge();
    return;
  }

  activeContext = null;
  updateRoleBadge();
  const shouldLoad = shouldLoadEvents(match);
  const visibleCount = getTimelineCount(match);
  const videoUrl = getMatchVideoUrl(match);
  const videoType = getVideoMimeType(videoUrl);
  const view = detailTemplate.content.cloneNode(true);
  view.querySelector(".detail-page").innerHTML = `
    <div class="article-main">
      <header class="article-header">
        ${isAdmin() ? `<div class="admin-inline-toolbar"><a class="ghost-button" href="#/admin/edit/${match.id}">${escapeHtml(t("detailEdit"))}</a></div>` : ""}
        <p class="kicker">${escapeHtml(match.league)} · ${escapeHtml(displayText(match.time))}</p>
        <h1>${escapeHtml(match.title)}</h1>
        <p class="dek">${escapeHtml(displayText(match.summary))}</p>
        <div class="meta-row">
          <span>${renderTeamAbbr(match.home)} vs ${renderTeamAbbr(match.away)}</span>
          <span>${match.readTime}</span>
          <span>${match.relatedCount} ${escapeHtml(t("relatedLabel"))}</span>
        </div>
      </header>
      <section class="media-stage">
        <div class="video-wrap">
          <video id="matchVideo" controls preload="metadata" poster="${match.image}">
            <source src="${escapeAttr(videoUrl)}" type="${escapeAttr(videoType)}" />
          </video>
        </div>
        <div class="marker-bar" aria-label="Timeline video"></div>
        <div class="chapter-list">
          ${match.chapters
            .map(
              (chapter) => `
              <div class="chapter-item">
                <button class="chapter-button" data-minute="${chapter.minute}" type="button">
                  <span>${chapter.minute}'</span>
                  ${chapter.label}
                </button>
                <button class="chapter-pin-btn" data-pin-chapter="${chapter.minute}" data-pin-label="${escapeAttr(chapter.label)}" title="${escapeAttr(t("detailAskAgentChapter"))}" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </button>
              </div>`
            )
            .join("")}
        </div>
        <!-- Custom Segment Action Bar (Replaces Slider) -->
        <div class="segment-action-bar" id="segmentActionBar">
          <div class="action-bar-info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;vertical-align:middle;color:var(--accent);"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <span>${escapeHtml(t("timelineSelectingRange"))} <strong id="selectedRangeText">0 - 15</strong></span>
          </div>
          <div class="action-bar-buttons">
            <button class="cancel-segment-btn" id="cancelSegmentBtn" type="button">${escapeHtml(t("cancel"))}</button>
            <button class="attach-segment-btn" id="attachSegmentBtn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px;vertical-align:middle;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              ${escapeHtml(t("detailAttachSegment"))}
            </button>
          </div>
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
            <div class="timer-context-row">
              <span id="videoContext">${escapeHtml(t("detailVideoLabel"))} 00:00</span>
              <button id="pinMomentBtn" class="pin-moment-btn" type="button" title="${escapeAttr(t("detailPinMomentTitle"))}">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:2px;vertical-align:middle;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                ${escapeHtml(t("detailPinMoment"))}
              </button>
            </div>
            <span>${escapeHtml(t("detailMemoryOn"))}</span>
          </div>
        </div>
        <div class="chat-log" id="chatLog">
          ${renderChatLogHtml(match.id)}
        </div>
        <div class="quick-prompts" id="quickPrompts">
          <button type="button">${escapeHtml(t("detailPromptSummary"))}</button>
          <button type="button">${escapeHtml(t("detailPromptGoal"))}</button>
          <button type="button">${escapeHtml(t("detailPromptHighlight"))}</button>
        </div>
        <div class="chat-form" id="chatForm">
          <div class="chat-context-bar" id="chatContextBar"></div>
          <div class="chat-composer">
            <textarea id="chatInput" rows="1" placeholder="${escapeAttr(t("detailAskAgent"))}..."></textarea>
            <button class="send-button" type="button">${escapeHtml(t("detailSend"))}</button>
          </div>
        </div>
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
  const uniqueLeagues = Array.from(new Set(matches.map(m => m.league).filter(Boolean))).sort();
  const leagueOptions = uniqueLeagues.map(l => `<option value="${escapeAttr(l)}">${escapeHtml(l)}</option>`).join("");

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
          
          <div class="admin-controls-card">
            <div class="admin-search-wrapper">
              <input type="text" id="adminSearchInput" class="admin-search-input" placeholder="${escapeAttr(t("adminSearchPlaceholder"))}" />
            </div>
            
            <div class="admin-filters-grid">
              <div class="admin-filter-col">
                <label for="adminSortSelect">${escapeHtml(t("adminSortLabel"))}</label>
                <select id="adminSortSelect" class="admin-select-field">
                  <option value="time-desc">${escapeHtml(t("adminSortNewest"))}</option>
                  <option value="time-asc">${escapeHtml(t("adminSortOldest"))}</option>
                  <option value="title-asc">${escapeHtml(t("adminSortTitleAsc"))}</option>
                  <option value="title-desc">${escapeHtml(t("adminSortTitleDesc"))}</option>
                  <option value="league-asc">${escapeHtml(t("adminSortLeague"))}</option>
                </select>
              </div>

              <div class="admin-filter-col">
                <label for="adminFilterLeague">${escapeHtml(t("adminDraftLeague"))}</label>
                <select id="adminFilterLeague" class="admin-select-field">
                  <option value="all">${escapeHtml(t("adminFilterLeagueAll"))}</option>
                  ${leagueOptions}
                </select>
              </div>

              <div class="admin-filter-col">
                <label for="adminFilterStatus">${escapeHtml(t("adminFilterStatusLabel"))}</label>
                <select id="adminFilterStatus" class="admin-select-field">
                  <option value="all">${escapeHtml(t("adminFilterStatusAll"))}</option>
                  <option value="Final">${escapeHtml(displayStatus("Final"))}</option>
                  <option value="Preview">${escapeHtml(displayStatus("Preview"))}</option>
                  <option value="Analysis">${escapeHtml(displayStatus("Analysis"))}</option>
                  <option value="Live brief">${escapeHtml(displayStatus("Live brief"))}</option>
                  <option value="Tactical room">${escapeHtml(displayStatus("Tactical room"))}</option>
                  <option value="Draft">${escapeHtml(displayStatus("Draft"))}</option>
                </select>
              </div>

              <div class="admin-filter-col">
                <label for="adminGroupSelect">${escapeHtml(t("adminGroupLabel"))}</label>
                <select id="adminGroupSelect" class="admin-select-field">
                  <option value="none">${escapeHtml(t("adminGroupNone"))}</option>
                  <option value="league">${escapeHtml(t("adminGroupLeague"))}</option>
                  <option value="status">${escapeHtml(t("adminGroupStatus"))}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="admin-list"></div>
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
  renderAdminList();
  wireAdmin();
}

function renderAdminListItem(match) {
  const style = buildLeagueStyle(match.league);
  return `
    <article class="admin-list-item" style="${style}">
      <img src="${escapeAttr(match.image)}" alt="" />
      <div>
        <h3>${escapeHtml(match.title)}</h3>
        <p>${escapeHtml(match.league)} · ${escapeHtml(match.home)} vs ${escapeHtml(match.away)}</p>
        <div class="admin-row-actions">
          <a href="#/admin/edit/${match.id}">${escapeHtml(t("adminEdit"))}</a>
          <a href="#/match/${match.id}">${escapeHtml(t("adminView"))}</a>
          <button type="button" data-delete="${match.id}">${escapeHtml(t("adminDelete"))}</button>
        </div>
      </div>
    </article>`;
}

function renderAdminList() {
  const listContainer = document.querySelector(".admin-list");
  if (!listContainer) return;

  let filtered = matches.filter(match => {
    const query = (adminSearchQuery || "").toLowerCase().trim();
    const matchesQuery = !query || 
      (match.title || "").toLowerCase().includes(query) ||
      (match.home || "").toLowerCase().includes(query) ||
      (match.away || "").toLowerCase().includes(query) ||
      (match.league || "").toLowerCase().includes(query);

    const matchesLeague = adminFilterLeague === "all" || match.league === adminFilterLeague;
    const matchesStatus = adminFilterStatus === "all" || match.status === adminFilterStatus;

    return matchesQuery && matchesLeague && matchesStatus;
  });

  filtered.sort((a, b) => {
    if (adminSortBy === "time-desc") {
      return getMatchTimeValue(b) - getMatchTimeValue(a);
    } else if (adminSortBy === "time-asc") {
      return getMatchTimeValue(a) - getMatchTimeValue(b);
    } else if (adminSortBy === "title-asc") {
      return (a.title || "").localeCompare(b.title || "");
    } else if (adminSortBy === "title-desc") {
      return (b.title || "").localeCompare(a.title || "");
    } else if (adminSortBy === "league-asc") {
      return (a.league || "").localeCompare(b.league || "");
    }
    return 0;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `<p class="chat-note">${escapeHtml(t("adminListEmpty"))}</p>`;
    return;
  }

  if (adminGroupBy === "none") {
    listContainer.innerHTML = filtered.map(renderAdminListItem).join("");
  } else {
    const grouped = groupBy(filtered, match => {
      if (adminGroupBy === "league") {
        return match.league || "Unknown League";
      } else {
        return displayStatus(match.status) || "Draft";
      }
    });

    const entries = Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
    
    listContainer.innerHTML = entries.map(([groupName, groupMatches]) => {
      const isCollapsed = adminCollapsedGroups.has(groupName);
      const collapsedClass = isCollapsed ? "admin-group-section is-collapsed" : "admin-group-section";
      const cardsHtml = groupMatches.map(renderAdminListItem).join("");
      return `
        <div class="${collapsedClass}" data-group-name="${escapeAttr(groupName)}">
          <button type="button" class="admin-group-header">
            <span class="group-title">${escapeHtml(groupName)} <span class="group-count">${groupMatches.length}</span></span>
            <span class="group-chevron">▼</span>
          </button>
          <div class="admin-group-content">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join("");
  }
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
            <label>
              <span>${escapeHtml(t("adminVideoLabel"))}</span>
              <input id="inlineVideo" value="${escapeAttr(getMatchVideoUrl(match))}" />
            </label>
          </div>
        </div>
      </section>
      <section class="article-body">
        <p data-edit="articleIntro" contenteditable="true">${escapeHtml(match.articleIntro)}</p>
        <div class="timeline-block editable-events">
          ${match.events
            .map(
              (evt, index) => `
              <div class="timeline-event">
                <div class="minute" data-event-minute="${index}" contenteditable="true">${escapeHtml(evt.minute)}</div>
                <div data-event-text="${index}" contenteditable="true">${escapeHtml(evt.text)}</div>
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
        ${adminInput("related", t("adminRelated"), match.relatedCount, "12", false, "number")}
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

  // Search Query Input
  const searchInput = document.querySelector("#adminSearchInput");
  if (searchInput) {
    searchInput.value = adminSearchQuery;
    searchInput.addEventListener("input", (e) => {
      adminSearchQuery = e.target.value;
      renderAdminList();
    });
  }

  // Sort Selector
  const sortSelect = document.querySelector("#adminSortSelect");
  if (sortSelect) {
    sortSelect.value = adminSortBy;
    sortSelect.addEventListener("change", (e) => {
      adminSortBy = e.target.value;
      renderAdminList();
    });
  }

  // League Filter Selector
  const leagueSelect = document.querySelector("#adminFilterLeague");
  if (leagueSelect) {
    leagueSelect.value = adminFilterLeague;
    leagueSelect.addEventListener("change", (e) => {
      adminFilterLeague = e.target.value;
      renderAdminList();
    });
  }

  // Status Filter Selector
  const statusSelect = document.querySelector("#adminFilterStatus");
  if (statusSelect) {
    statusSelect.value = adminFilterStatus;
    statusSelect.addEventListener("change", (e) => {
      adminFilterStatus = e.target.value;
      renderAdminList();
    });
  }

  // Group By Selector
  const groupSelect = document.querySelector("#adminGroupSelect");
  if (groupSelect) {
    groupSelect.value = adminGroupBy;
    groupSelect.addEventListener("change", (e) => {
      adminGroupBy = e.target.value;
      renderAdminList();
    });
  }

  const listContainer = document.querySelector(".admin-list");
  if (listContainer) {
    listContainer.addEventListener("click", (event) => {
      // Handle collapsible group headers click
      const header = event.target.closest(".admin-group-header");
      if (header) {
        const groupSection = header.closest(".admin-group-section");
        if (groupSection) {
          const groupName = groupSection.dataset.groupName;
          if (adminCollapsedGroups.has(groupName)) {
            adminCollapsedGroups.delete(groupName);
            groupSection.classList.remove("is-collapsed");
          } else {
            adminCollapsedGroups.add(groupName);
            groupSection.classList.add("is-collapsed");
          }
        }
        return;
      }

      // Handle delete button click inside match card
      const deleteBtn = event.target.closest("[data-delete]");
      if (deleteBtn) {
        const id = deleteBtn.dataset.delete;
        const match = matches.find((item) => item.id === id);
        if (!match || !confirm(t("adminDeleteConfirm", { title: match.title }))) return;
        matches = matches.filter((item) => item.id !== id);
        saveMatches();
        renderAdmin();
      }
    });
  }

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
  const videoInput = document.querySelector("#inlineVideo");
  const cover = document.querySelector(".edit-cover");
  imageInput.addEventListener("input", () => {
    cover.style.backgroundImage = `url('${imageInput.value}')`;
  });

  document.querySelector("#saveInlineBtn").addEventListener("click", () => {
    const getText = (selector) => {
      const node = document.querySelector(selector);
      return node ? node.textContent.trim() : "";
    };
    const eventMinutes = [...document.querySelectorAll("[data-event-minute]")];
    const events = eventMinutes.map((minuteNode, index) => {
      const minuteStr = minuteNode.textContent.trim();
      const textNode = document.querySelector(`[data-event-text="${index}"]`);
      const text = textNode ? textNode.textContent.trim() : "";
      return {
        minute: minuteStr,
        minuteVal: parseMinuteVal(minuteStr),
        text
      };
    });

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
      videoUrl: videoInput.value.trim() || DEFAULT_VIDEO_URL,
      status: document.querySelector('[name="status"]').value.trim(),
      score: document.querySelector('[name="score"]').value.trim(),
      relatedCount: Number(document.querySelector('[name="related"]').value || 0),
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
    season: "",
    status: "Draft",
    time: "",
    home: "",
    away: "",
    score: "0 - 0",
    title: "",
    summary: "",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    readTime: "5 phút",
    readTimeMinutes: 5,
    relatedCount: 0,
    source: null,
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
  return String(value !== null && value !== undefined ? value : "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function renderInlineMarkdown(text) {
  const codeSpans = [];
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    const marker = `@@CODE${codeSpans.length}@@`;
    codeSpans.push(`<code>${code}</code>`);
    return marker;
  });
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
    return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/(^|[\s(])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  html = html.replace(/(^|[\s(])_([^_\n]+)_/g, "$1<em>$2</em>");
  codeSpans.forEach((code, index) => {
    html = html.replace(`@@CODE${index}@@`, code);
  });
  return html;
}

function renderSafeMarkdown(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let inCodeBlock = false;
  let codeLines = [];

  const closeParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = null;
  };
  const openList = (type) => {
    closeParagraph();
    if (listType === type) return;
    closeList();
    listType = type;
    html.push(`<${type}>`);
  };
  const closeCodeBlock = () => {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeLines = [];
    inCodeBlock = false;
  };

  lines.forEach((line) => {
    if (/^```/.test(line.trim())) {
      if (inCodeBlock) {
        closeCodeBlock();
      } else {
        closeParagraph();
        closeList();
        inCodeBlock = true;
        codeLines = [];
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (!line.trim()) {
      closeParagraph();
      closeList();
      return;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = Math.min(4, Math.max(3, heading[1].length + 2));
      html.push(`<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`);
      return;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    if (unordered) {
      openList("ul");
      html.push(`<li>${renderInlineMarkdown(unordered[1])}</li>`);
      return;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      openList("ol");
      html.push(`<li>${renderInlineMarkdown(ordered[1])}</li>`);
      return;
    }

    const quote = line.match(/^\s*>\s?(.+)$/);
    if (quote) {
      closeParagraph();
      closeList();
      html.push(`<blockquote>${renderInlineMarkdown(quote[1])}</blockquote>`);
      return;
    }

    closeList();
    paragraph.push(line.trim());
  });

  if (inCodeBlock) closeCodeBlock();
  closeParagraph();
  closeList();
  return html.join("");
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

function highlightMarkerBarRange(start, end) {
  document.querySelectorAll(".marker-bar .marker").forEach((marker) => {
    const min = Number(marker.dataset.minute);
    if (min >= start && min <= end) {
      marker.classList.add("is-selected-range");
    } else {
      marker.classList.remove("is-selected-range");
    }
  });
}

function highlightSelectedEventInTimeline(minute) {
  document.querySelectorAll(".timeline-event").forEach((el) => {
    if (minute !== null && el.dataset.eventMin === String(minute)) {
      el.classList.add("is-selected-event");
    } else {
      el.classList.remove("is-selected-event");
    }
  });
}

function updateChatContextBar(currentVideoMinute) {
  const bar = document.querySelector("#chatContextBar");
  if (!bar) return;

  if (activeContext) {
    bar.classList.add("is-active");
    let displayLabel = "";

    if (activeContext.type === "moment") {
      displayLabel = t("momentPillLabel", { minute: activeContext.minute });
      highlightMarkerBarRange(-1, -1);
      highlightSelectedEventInTimeline(null);
    } else if (activeContext.type === "range") {
      displayLabel = t("rangePillLabel", { start: activeContext.start, end: activeContext.end });
      highlightMarkerBarRange(activeContext.start, activeContext.end);
      highlightSelectedEventInTimeline(null);
    } else if (activeContext.type === "chapter") {
      displayLabel = t("chapterPillLabel", { label: activeContext.label });
      highlightMarkerBarRange(-1, -1);
      highlightSelectedEventInTimeline(null);
    } else if (activeContext.type === "event") {
      displayLabel = t("eventPillLabel", { minute: activeContext.minute });
      highlightMarkerBarRange(-1, -1);
      highlightSelectedEventInTimeline(activeContext.minute);
    }

    bar.innerHTML = `
      <span class="chat-context-pill">
        ${escapeHtml(displayLabel)}
      </span>
      <button type="button" class="chat-context-clear-btn" title="${escapeAttr(t("clearPinTitle"))}">&times;</button>
    `;

    const clearBtn = bar.querySelector(".chat-context-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        activeContext = null;
        updateChatContextBar(currentVideoMinute);
        const actionBar = document.querySelector("#segmentActionBar");
        if (actionBar) actionBar.classList.remove("is-active");
      });
    }
  } else {
    // Default dynamic time context
    const min = Number.isFinite(currentVideoMinute) ? currentVideoMinute : 0;
    const label = t("defaultTimePillLabel", { minute: String(Math.floor(min)).padStart(2, "0") });
    bar.classList.add("is-active");
    bar.innerHTML = `
      <span class="chat-context-pill is-default" style="color: var(--muted); font-weight: normal;">
        ${escapeHtml(label)}
      </span>
    `;
    highlightMarkerBarRange(-1, -1);
    highlightSelectedEventInTimeline(null);
  }
}

function wireTimelineEvents(match) {
  document.querySelectorAll(".event-pin-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const minute = Number(btn.dataset.pinEventMinute);
      const text = btn.dataset.pinEventText;
      activeContext = {
        type: "event",
        minute,
        text
      };
      const video = document.querySelector("#matchVideo");
      const currentMin = video ? Math.floor(video.currentTime / 60) : 0;
      updateChatContextBar(currentMin);

      const chatInput = document.querySelector("#chatInput");
      if (chatInput) {
        chatInput.focus();
      }
    });
  });
}

function wireDetail(match) {
  const video = document.querySelector("#matchVideo");
  const videoContext = document.querySelector("#videoContext");
  const chatForm = document.querySelector("#chatForm");
  const chatInput = document.querySelector("#chatInput");
  const chatLog = document.querySelector("#chatLog");
  const quickPrompts = document.querySelector("#quickPrompts");

  let isTimelineDragging = false;
  let timelineStartMin = 0;
  let timelineEndMin = 0;
  let dragOccurred = false;

  let startMin = 0;
  let endMin = 15;

  const actionBar = document.querySelector("#segmentActionBar");
  const rangeText = document.querySelector("#selectedRangeText");
  const cancelBtn = document.querySelector("#cancelSegmentBtn");
  const attachBtn = document.querySelector("#attachSegmentBtn");
  const markerBar = document.querySelector(".marker-bar");

  function showActionBar(start, end) {
    if (!actionBar || !rangeText) return;
    startMin = start;
    endMin = end;
    rangeText.textContent = `${start} - ${end}`;
    actionBar.classList.add("is-active");
    highlightMarkerBarRange(start, end);
  }

  function hideActionBar() {
    if (!actionBar) return;
    actionBar.classList.remove("is-active");
  }

  function seekToSegmentStart(minute) {
    if (!video || !Number.isFinite(minute)) return;
    const targetMinute = Math.max(0, minute);
    const durationSeconds = Number.isFinite(video.duration) && video.duration > 0
      ? video.duration
      : targetMinute * 60;
    video.currentTime = Math.min(durationSeconds, targetMinute * 60);
    updateVideoContext(targetMinute);
    updateChatContextBar(targetMinute);
  }

  function jumpToMinute(minute) {
    if (!video || !Number.isFinite(minute)) return;
    hideActionBar();
    highlightMarkerBarRange(-1, -1);
    if (activeContext && activeContext.type === "range") {
      activeContext = null;
    }
    updateChatContextBar(minute);
    seekToSegmentStart(minute);
    video.play().catch(() => {});
  }

  function getVideoTimelineMinutes() {
    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      return Math.max(1, Math.ceil(video.duration / 60));
    }
    return 0;
  }

  function minuteFromPointerX(clientX) {
    if (!markerBar) return null;
    const totalMinutes = getVideoTimelineMinutes();
    if (!totalMinutes) return null;
    const rect = markerBar.getBoundingClientRect();
    if (!rect.width) return null;
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    return Math.min(totalMinutes, Math.max(1, Math.floor(ratio * totalMinutes) + 1));
  }

  function updateDraggedTimelineSelection(clientX) {
    if (!isTimelineDragging) return;
    const minute = minuteFromPointerX(clientX);
    if (!minute) return;
    timelineEndMin = minute;
    if (timelineEndMin !== timelineStartMin) {
      dragOccurred = true;
    }
    const start = Math.min(timelineStartMin, timelineEndMin);
    const end = Math.max(timelineStartMin, timelineEndMin);
    if (start === end) {
      highlightMarkerBarRange(start, end);
      return;
    }
    showActionBar(start, end);
  }

  function startTimelineDrag(clientX) {
    const minute = minuteFromPointerX(clientX);
    if (!minute) return false;
    isTimelineDragging = true;
    dragOccurred = false;
    timelineStartMin = minute;
    timelineEndMin = minute;
    highlightMarkerBarRange(minute, minute);
    return true;
  }

  function renderTimelineMarkers() {
    if (!markerBar) return;
    const totalMinutes = getVideoTimelineMinutes();
    markerBar.style.setProperty("--timeline-minutes", String(totalMinutes || 1));
    markerBar.innerHTML = Array.from({ length: totalMinutes }, (_, index) => {
      const minute = index + 1;
      const chapter = match.chapters.find((item) => Math.abs(item.minute - minute) <= 1);
      const isGoal = chapter && (chapter.label.toLowerCase().includes("bàn") || chapter.label.toLowerCase().includes("goal"));
      const className = chapter ? (isGoal ? "marker is-goal" : "marker is-hot") : "marker";
      return `<button class="${className}" data-minute="${minute}" title="${escapeAttr(t("minute"))} ${minute}"></button>`;
    }).join("");
    if (actionBar && actionBar.classList.contains("is-active")) {
      highlightMarkerBarRange(startMin, endMin);
    }

    markerBar.querySelectorAll(".marker").forEach((marker) => {
      marker.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        startTimelineDrag(e.clientX);
        e.preventDefault();
      });
    });
  }

  if (markerBar) {
    markerBar.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      if (!startTimelineDrag(e.clientX)) return;
      e.preventDefault();
    });

    markerBar.addEventListener("click", (e) => {
      const marker = e.target.closest(".marker");
      if (!marker) return;
      if (dragOccurred) {
        e.preventDefault();
        e.stopPropagation();
        dragOccurred = false;
        return;
      }
      jumpToMinute(Number(marker.dataset.minute));
    });

    markerBar.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      startTimelineDrag(touch.clientX);
    }, { passive: true });

    markerBar.addEventListener("touchmove", (e) => {
      if (!isTimelineDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      updateDraggedTimelineSelection(touch.clientX);
    }, { passive: true });

    const onTouchEnd = () => {
      if (!isTimelineDragging) return;
      isTimelineDragging = false;
      const finalStart = Math.min(timelineStartMin, timelineEndMin);
      const finalEnd = Math.max(timelineStartMin, timelineEndMin);
      if (dragOccurred && finalStart !== finalEnd) {
        showActionBar(finalStart, finalEnd);
      } else {
        highlightMarkerBarRange(-1, -1);
      }
    };
    markerBar.addEventListener("touchend", onTouchEnd);
  }

  const onGlobalMouseUp = () => {
    if (!isTimelineDragging) return;
    isTimelineDragging = false;

    const finalStart = Math.min(timelineStartMin, timelineEndMin);
    const finalEnd = Math.max(timelineStartMin, timelineEndMin);

    if (dragOccurred && finalStart !== finalEnd) {
      showActionBar(finalStart, finalEnd);
    } else {
      highlightMarkerBarRange(-1, -1);
    }
  };

  const onGlobalMouseMove = (event) => {
    if (!isTimelineDragging) return;
    updateDraggedTimelineSelection(event.clientX);
  };

  if (window._onGlobalMouseUpCleanup) {
    window._onGlobalMouseUpCleanup();
  }
  window._onGlobalMouseUpCleanup = () => {
    window.removeEventListener("mouseup", onGlobalMouseUp);
    window.removeEventListener("mousemove", onGlobalMouseMove);
  };
  window.addEventListener("mouseup", onGlobalMouseUp);
  window.addEventListener("mousemove", onGlobalMouseMove);
  video.addEventListener("loadedmetadata", renderTimelineMarkers);
  video.addEventListener("durationchange", renderTimelineMarkers);
  renderTimelineMarkers();

  // Wire chapter clicks. Marker clicks are delegated on the dynamic marker bar.
  document.querySelectorAll(".chapter-button[data-minute]").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (dragOccurred) {
        e.preventDefault();
        e.stopPropagation();
        dragOccurred = false;
        return;
      }

      const minute = Number(button.dataset.minute);
      jumpToMinute(minute);
    });
  });

  video.addEventListener("timeupdate", () => {
    const currentMin = Math.floor(video.currentTime / 60);
    updateVideoContext(currentMin);
    updateChatContextBar(currentMin);
  });

  let agentInFlight = false;
  const sendButton = chatForm.querySelector(".send-button");
  const quickPromptButtons = Array.from(quickPrompts.querySelectorAll("button"));
  const setChatPending = (isPending) => {
    agentInFlight = isPending;
    if (isPending) {
      agentInFlightByMatch.add(match.id);
    } else {
      agentInFlightByMatch.delete(match.id);
    }
    chatForm.classList.toggle("is-busy", isPending);
    chatInput.disabled = isPending;
    if (sendButton) sendButton.disabled = isPending;
    quickPromptButtons.forEach((button) => {
      button.disabled = isPending;
    });
  };

  const submitChat = async () => {
    if (agentInFlight) {
      appendMessage(chatLog, t("agentThinkingBusy"), "agent");
      return;
    }
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(chatLog, text, "user");
    rememberChatMessage(match.id, "user", text);
    chatInput.value = "";
    resizeComposer();

    const packet = buildAgentContext(match, Math.floor(video.currentTime / 60), text);
    const requestId = createAgentRequestId();
    const answerNode = appendMessage(chatLog, t("agentThinkingInitial"), "agent thinking");

    setChatPending(true);
    try {
      const answer = await askAgent(packet, requestId);
      answerNode.className = "message agent";
      setAgentMessageHtml(answerNode, answer);
      rememberChatMessage(match.id, "agent", answer);
      chatLog.scrollTop = chatLog.scrollHeight;
    } catch (error) {
      console.warn("Agent API error.", error);
      answerNode.className = "message agent";
      const errorText = `Không gọi được Agent API.\n\nEndpoint đang dùng: \`${AGENT_API_URL}\`\n\nLỗi: \`${formatAgentError(error)}\``;
      setAgentMessageHtml(answerNode, errorText);
      rememberChatMessage(match.id, "agent", errorText);
      chatLog.scrollTop = chatLog.scrollHeight;
    } finally {
      setChatPending(false);
      chatInput.focus();
    }
  };

  if (sendButton) {
    sendButton.addEventListener("click", (event) => {
      event.preventDefault();
      submitChat();
    });
  }

  chatInput.addEventListener("input", resizeComposer);
  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      submitChat();
    }
  });

  quickPrompts.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || agentInFlight) return;
    chatInput.value = button.textContent;
    resizeComposer();
    chatInput.focus();
  });

  // Pin current moment button wiring
  const pinMomentBtn = document.querySelector("#pinMomentBtn");
  if (pinMomentBtn) {
    pinMomentBtn.addEventListener("click", () => {
      const minute = Math.floor(video.currentTime / 60);
      activeContext = {
        type: "moment",
        minute: minute
      };
      updateChatContextBar(minute);
      chatInput.focus();
    });
  }

  // Attach button inside ActionBar
  if (attachBtn) {
    attachBtn.addEventListener("click", () => {
      activeContext = {
        type: "range",
        start: startMin,
        end: endMin
      };
      seekToSegmentStart(startMin);
      hideActionBar();
      chatInput.focus();
    });
  }

  // Cancel button inside ActionBar
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      hideActionBar();
      highlightMarkerBarRange(-1, -1);
      if (activeContext && activeContext.type === "range") {
        activeContext = null;
        const currentMin = Math.floor(video.currentTime / 60);
        updateChatContextBar(currentMin);
      }
    });
  }

  // Quick chapter pin buttons wiring
  document.querySelectorAll(".chapter-pin-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const minute = Number(btn.dataset.pinChapter);
      const label = btn.dataset.pinLabel;
      activeContext = {
        type: "chapter",
        minute,
        label
      };
      const currentMin = Math.floor(video.currentTime / 60);
      updateChatContextBar(currentMin);
      chatInput.focus();
    });
  });

  // Wire initial timeline events
  wireTimelineEvents(match);

  // Initialize chat context bar with passive dynamic time
  const currentMin = Math.floor(video.currentTime / 60);
  updateChatContextBar(currentMin);

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
  chatLog.scrollTop = chatLog.scrollHeight;
}

function appendMessage(chatLog, text, role) {
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.textContent = text;
  chatLog.appendChild(node);
  chatLog.scrollTop = chatLog.scrollHeight;
  return node;
}

function setAgentMessageHtml(node, text) {
  node.innerHTML = `<div class="message-markdown">${renderSafeMarkdown(text)}</div>`;
}

function rememberChatMessage(matchId, role, text) {
  const safeText = String(text || "").trim();
  if (!matchId || !safeText) return;
  const current = chatMemory.get(matchId) || [];
  const next = current.concat({ role, text: safeText }).slice(-40);
  chatMemory.set(matchId, next);
}

function renderChatLogHtml(matchId) {
  const messages = chatMemory.get(matchId) || [];
  if (!messages.length) {
    return `<div class="message agent">${escapeHtml(t("chatAgentIntro"))}</div>`;
  }

  return messages
    .map((message) => {
      if (message.role === "user") {
        return `<div class="message user">${escapeHtml(message.text)}</div>`;
      }
      return `<div class="message agent"><div class="message-markdown">${renderSafeMarkdown(message.text)}</div></div>`;
    })
    .join("");
}

function createAgentRequestId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `agent-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function formatAgentError(error) {
  if (!error) return "unknown error";
  if (error.name === "AbortError") return "request timed out";
  return error.message || String(error);
}

function buildAgentContext(match, currentMinute, userMessage) {
  let contextInfo = null;
  let queryMinute = currentMinute;

  if (activeContext) {
    if (activeContext.type === "moment") {
      queryMinute = activeContext.minute;
      contextInfo = {
        type: "moment",
        label: `Phút ${activeContext.minute}`,
        minute: activeContext.minute
      };
    } else if (activeContext.type === "range") {
      queryMinute = Math.floor((activeContext.start + activeContext.end) / 2);
      contextInfo = {
        type: "range",
        label: `Phút ${activeContext.start} - ${activeContext.end}`,
        start: activeContext.start,
        end: activeContext.end
      };
    } else if (activeContext.type === "chapter") {
      queryMinute = activeContext.minute;
      contextInfo = {
        type: "chapter",
        label: `Chương: ${activeContext.label} (Phút ${activeContext.minute})`,
        minute: activeContext.minute
      };
    } else if (activeContext.type === "event") {
      queryMinute = activeContext.minute;
      contextInfo = {
        type: "event",
        label: `Sự kiện: ${activeContext.text} (Phút ${activeContext.minute})`,
        minute: activeContext.minute,
        text: activeContext.text
      };
    }
  }

  let nearbyEvents = [];
  if (activeContext && activeContext.type === "range") {
    nearbyEvents = match.events.filter((evt) =>
      evt.minuteVal >= activeContext.start && evt.minuteVal <= activeContext.end
    );
  } else {
    nearbyEvents = match.events.filter((evt) =>
      Math.abs(evt.minuteVal - queryMinute) <= 12
    );
  }

  return {
    route: "match-detail",
    userMessage,
    activeContext: contextInfo,
    match: {
      id: match.id,
      title: match.title,
      league: match.league,
      season: match.season,
      status: match.status,
      time: match.time,
      teams: [match.home, match.away],
      score: match.score,
      stats: match.stats,
      summary: match.summary,
      source: match.source
    },
    media: {
      currentMinute: queryMinute,
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

function mockAgentAnswer(packet) {
  const ctx = packet.activeContext;
  let contextIntro = "";
  const isVi = currentLanguage === "vi";

  if (ctx) {
    if (ctx.type === "moment") {
      contextIntro = isVi
        ? `Tôi đang phân tích mốc thời gian bạn đã ghim tại phút ${ctx.minute}. `
        : `I am analyzing the pinned timestamp at minute ${ctx.minute}. `;
    } else if (ctx.type === "range") {
      contextIntro = isVi
        ? `Tôi đang xem xét phân đoạn trận đấu từ phút ${ctx.start} đến phút ${ctx.end} theo yêu cầu của bạn. `
        : `I am looking at the match segment from minute ${ctx.start} to ${ctx.end} per your request. `;
    } else if (ctx.type === "chapter") {
      contextIntro = isVi
        ? `Tôi đang phân tích chương "${ctx.label}" được ghim. `
        : `I am analyzing the pinned chapter "${ctx.label}". `;
    } else if (ctx.type === "event") {
      contextIntro = isVi
        ? `Tôi đang phân tích sự kiện diễn ra tại phút ${ctx.minute}: "${ctx.text}". `
        : `I am analyzing the event at minute ${ctx.minute}: "${ctx.text}". `;
    }
  } else {
    contextIntro = isVi
      ? `Tôi đang theo dõi trận đấu tại mốc phát sóng phút ${packet.media.currentMinute}. `
      : `I am following the match at playback minute ${packet.media.currentMinute}. `;
  }

  const eventText = packet.media.nearbyEvents.length
    ? (isVi
        ? `Các sự kiện ghi nhận trong khoảng thời gian này là: ${packet.media.nearbyEvents.map((evt) => `${evt.minute} ${evt.text}`).join("; ")}.`
        : `Events in this window: ${packet.media.nearbyEvents.map((evt) => `${evt.minute} ${evt.text}`).join("; ")}.`)
    : (isVi
        ? `Không có sự kiện đặc biệt nào được ghi nhận xung quanh khoảng thời gian này.`
        : `No significant events recorded around this time.`);

  if (isVi) {
    return `${contextIntro}${eventText}\n\n[Agent]: Dựa trên số liệu thống kê trận đấu giữa ${packet.match.teams.join(" và ")} (Tỷ số: ${packet.match.score}), đây là khoảng thời gian có tính chất chiến thuật cao. ${
      packet.media.nearbyEvents.length ? "Bạn có muốn tôi đi sâu phân tích một trong các tình huống trên không?" : "Bạn có câu hỏi nào cụ thể về các pha bóng diễn ra lúc này không?"
    }`;
  }
  return `${contextIntro}${eventText}\n\n[Agent]: Based on the match data for ${packet.match.teams.join(" vs ")} (${packet.match.score}), this segment represents a key tactical phase. Let me know if you want a detailed breakdown of these actions!`;
}

async function askAgent(packet, requestId = createAgentRequestId()) {
  if (!AGENT_API_URL) {
    return mockAgentAnswer(packet);
  }

  const payload = {
    requestId,
    message: packet.userMessage,
    packet,
    lang: currentLanguage
  };

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), AGENT_TIMEOUT_MS);

  try {
    const response = await fetch(AGENT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    if (!response.ok) {
      let errorMessage = "";
      try {
        const errorData = await response.json();
        errorMessage = typeof errorData.error === "string" ? errorData.error : "";
      } catch (_) {
        errorMessage = "";
      }
      if (response.status === 409 && errorMessage) {
        return errorMessage;
      }
      throw new Error(`Agent API failed (${response.status})`);
    }

    const data = await response.json();
    if (data && typeof data.answer === "string" && data.answer.trim()) {
      return data.answer.trim();
    }
    if (data && typeof data.message === "string" && data.message.trim()) {
      return data.message.trim();
    }

    throw new Error("Empty agent response");
  } catch (error) {
    console.warn("Agent API error.", error);
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
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
