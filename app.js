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

const STORAGE_KEY = "matchpulse.matches";
const ADMIN_SESSION_KEY = "matchpulse.role";
const ADMIN_PASSWORD = "admin123";

let matches = loadMatches();

const app = document.querySelector("#app");
const homeTemplate = document.querySelector("#homeTemplate");
const detailTemplate = document.querySelector("#detailTemplate");
const adminTemplate = document.querySelector("#adminTemplate");
const roleBadge = document.querySelector("#roleBadge");

function loadMatches() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) {
      return saved.map(normalizeMatch);
    }
  } catch (error) {
    console.warn("Could not load saved matches", error);
  }

  return seedMatches.map(normalizeMatch);
}

function saveMatches() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(matches));
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
  roleBadge.textContent = isAdmin() ? "Admin mode" : "User mode";
  roleBadge.classList.toggle("is-admin", isAdmin());
}

function renderHome() {
  updateRoleBadge();
  const view = homeTemplate.content.cloneNode(true);
  const [featured, ...rest] = matches;

  if (!featured) {
    app.innerHTML = `<section class="empty-state"><h1>Chưa có bài trận đấu</h1><p>Đăng nhập admin để thêm bài đầu tiên.</p><a class="pill-button" href="#/admin">Mở admin</a></section>`;
    return;
  }

  view.querySelector(".score-strip").innerHTML = matches
    .map(
      (match) => `
        <a class="score-card" href="#/match/${match.id}">
          <span>${match.league} · ${match.status}</span>
          <div class="score-line">
            <div>${match.home}</div>
            <b>${match.score}</b>
            <div>${match.away}</div>
          </div>
        </a>`
    )
    .join("");

  view.querySelector(".hero-match").innerHTML = `
    <a class="hero-media" href="#/match/${featured.id}" style="background-image: url('${featured.image}')">
      <span class="live-badge">${featured.status}</span>
    </a>
    <div class="hero-copy">
      <div>
        <p class="kicker">${featured.league} · ${featured.time}</p>
        <h1>${featured.title}</h1>
        <p class="dek">${featured.summary}</p>
        <div class="meta-row">
          <span>${featured.readTime}</span>
          <span>${featured.related} phân tích liên quan</span>
          <span>Agent-ready context</span>
        </div>
      </div>
      <a class="pill-button" href="#/match/${featured.id}">Mở match room</a>
    </div>`;

  view.querySelector(".match-grid").innerHTML = rest
    .map(
      (match) => `
        <a class="match-card" href="#/match/${match.id}">
          <img src="${match.image}" alt="${match.home} vs ${match.away}" />
          <div class="match-card-body">
            <span class="tag">${match.status}</span>
            <h2>${match.title}</h2>
            <p>${match.summary}</p>
            <div class="meta-row">
              <span>${match.readTime}</span>
              <span>${match.related} liên quan</span>
            </div>
          </div>
        </a>`
    )
    .join("");

  view.querySelector(".hot-list").innerHTML = matches
    .map(
      (match) => `
        <a class="hot-item" href="#/match/${match.id}">
          <img src="${match.image}" alt="" />
          <div>
            <h3>${match.title}</h3>
            <span>${match.league} · ${match.readTime}</span>
          </div>
        </a>`
    )
    .join("");

  view.querySelector(".agent-brief").innerHTML = `
    <p>Agent nên nhận context theo từng lớp thay vì toàn bộ bài viết.</p>
    <div class="brief-chip"><b>Match packet:</b> metadata, score, lineups, stats, event timeline.</div>
    <div class="brief-chip"><b>Media packet:</b> current timestamp, selected chapter, transcript window ±90s.</div>
    <div class="brief-chip"><b>Memory packet:</b> user intent summary, preferences, unresolved questions.</div>`;

  app.replaceChildren(view);
}

function renderDetail(matchId) {
  updateRoleBadge();
  const match = matches.find((item) => item.id === matchId) || matches[0];
  if (!match) {
    renderHome();
    return;
  }
  const view = detailTemplate.content.cloneNode(true);
  view.querySelector(".detail-page").innerHTML = `
    <div class="article-main">
      <header class="article-header">
        ${isAdmin() ? `<div class="admin-inline-toolbar"><a class="ghost-button" href="#/admin/edit/${match.id}">Edit bài này</a></div>` : ""}
        <p class="kicker">${match.league} · ${match.time}</p>
        <h1>${match.title}</h1>
        <p class="dek">${match.summary}</p>
        <div class="meta-row">
          <span>${match.home} vs ${match.away}</span>
          <span>${match.readTime}</span>
          <span>${match.related} liên quan</span>
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
        <p>${match.articleIntro}</p>
        <div class="timeline-block">
          ${match.events
            .map(
              ([minute, text]) => `
              <div class="timeline-event">
                <div class="minute">${minute}</div>
                <div>${text}</div>
              </div>`
            )
            .join("")}
        </div>
        <p>${match.articleNote}</p>
      </section>
    </div>
    <aside class="detail-rail">
      <section class="match-side-panel">
        <div class="panel-heading">
          <span class="accent-bar"></span>
          <h2>Match center</h2>
        </div>
        <div class="mini-score">
          <span>${match.home}</span>
          <strong>${match.score}</strong>
          <span class="team-right">${match.away}</span>
        </div>
        <div class="stat-table">
          ${statRow("Possession", match.stats.possession[0], match.stats.possession[1], "%")}
          ${statRow("Shots", match.stats.shots[0], match.stats.shots[1], "")}
          ${statRow("xG", match.stats.xg[0], match.stats.xg[1], "")}
        </div>
      </section>
      <section class="chat-panel" aria-label="Chat với agent">
        <div class="chat-header">
          <h2>Ask the match agent</h2>
          <div class="context-pills">
            <span>${match.id}</span>
            <span id="videoContext">video 00:00</span>
            <span>memory:on</span>
          </div>
        </div>
        <div class="chat-log" id="chatLog">
          <div class="message agent">Mình đang giữ match packet, timeline và context video hiện tại. Bạn có thể hỏi về chiến thuật, cầu thủ, hoặc yêu cầu nhảy tới pha đáng xem.</div>
        </div>
        <div class="quick-prompts" id="quickPrompts">
          <button type="button">Tóm tắt 5 điểm chính</button>
          <button type="button">Vì sao bàn thắng xảy ra?</button>
          <button type="button">Nhảy tới pha hay nhất</button>
        </div>
        <form class="chat-form" id="chatForm">
          <textarea id="chatInput" rows="1" placeholder="Hỏi về trận đấu..."></textarea>
          <button class="send-button" type="submit">Send</button>
        </form>
      </section>
    </aside>`;

  app.replaceChildren(view);
  wireDetail(match);
}

function renderAdminLogin(message = "") {
  updateRoleBadge();
  const view = adminTemplate.content.cloneNode(true);
  view.querySelector(".admin-page").innerHTML = `
    <section class="admin-login">
      <div>
        <p class="kicker">Admin access</p>
        <h1>Đăng nhập khu biên tập</h1>
        <p class="dek">Admin có thể thêm, sửa, xóa bài trận đấu và chỉnh từng phần nội dung chi tiết.</p>
      </div>
      <form class="admin-card" id="adminLoginForm">
        <label>
          <span>Mật khẩu demo</span>
          <input name="password" type="password" placeholder="admin123" autocomplete="current-password" />
        </label>
        ${message ? `<p class="form-error">${message}</p>` : ""}
        <button class="pill-button" type="submit">Vào dashboard</button>
        <p class="form-hint">Prototype dùng password <b>admin123</b>. Production cần auth backend thật.</p>
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
    renderAdminLogin("Mật khẩu chưa đúng.");
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
          <p class="kicker">Admin dashboard</p>
          <h1>Quản lý blog trận đấu</h1>
          <p class="dek">Dashboard chỉ để quản lý nhanh. Edit sẽ mở đúng giao diện bài viết để sửa trực tiếp trên view.</p>
        </div>
        <div class="admin-actions">
          <button class="ghost-button" type="button" id="quickCreateBtn">Thêm bài nháp</button>
          <button class="ghost-button" type="button" id="logoutBtn">Logout</button>
        </div>
      </div>
      <div class="admin-layout is-compact">
        <section class="admin-card admin-list-card">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>Danh sách bài</h2>
          </div>
          <div class="admin-list">
            ${matches.map(renderAdminListItem).join("") || `<p class="chat-note">Chưa có bài nào.</p>`}
          </div>
        </section>
        <aside class="admin-card admin-help-card">
          <div class="panel-heading">
            <span class="accent-bar"></span>
            <h2>Inline editor</h2>
          </div>
          <p class="chat-note">Bấm Edit để mở trang bài ở chế độ biên tập. Các đoạn title, summary, nội dung và timeline sửa ngay trên layout thật.</p>
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
          <a href="#/admin/edit/${match.id}">Edit</a>
          <a href="#/match/${match.id}">View</a>
          <button type="button" data-delete="${match.id}">Delete</button>
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
          <span class="edit-mode-pill">Editing live view</span>
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
              <span>Cover image URL</span>
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
          <h2>Publish controls</h2>
        </div>
        ${adminInput("status", "Trạng thái", match.status, "Analysis")}
        ${adminInput("score", "Tỷ số", match.score, "0 - 0")}
        ${adminInput("related", "Số liên quan", match.related, "12", false, "number")}
        <div class="editor-actions">
          <button class="pill-button" type="button" id="saveInlineBtn">Lưu thay đổi</button>
          <a class="ghost-button" href="#/match/${match.id}">Xem bản user</a>
          <a class="ghost-button" href="#/admin">Dashboard</a>
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
      draft.title = "Bài nháp mới";
      draft.summary = "Nhập tóm tắt trận đấu tại đây.";
      draft.league = "Draft league";
      draft.home = "Home FC";
      draft.away = "Away FC";
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
    if (!match || !confirm(`Xóa bài "${match.title}"?`)) return;
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
    videoContext.textContent = `video ${String(Math.floor(safeMinute / 60)).padStart(2, "0")}:${String(safeMinute % 60).padStart(2, "0")}`;
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
    ? `Mốc gần nhất: ${packet.media.nearbyEvents.map((item) => item.join(" ")).join(" ")}`
    : "Hiện chưa có event gần timestamp này.";
  return `Mock agent: mình sẽ trả lời dựa trên ${packet.match.teams.join(" vs ")}, score ${packet.match.score}, video phút ${packet.media.currentMinute}. ${eventText}`;
}

function router() {
  const [, route, id] = window.location.hash.split("/");
  if (route === "admin") {
    if (id === "edit") {
      renderInlineEditor(window.location.hash.split("/")[3]);
    } else {
      renderAdmin();
    }
  } else if (route === "match") {
    renderDetail(id);
  } else {
    renderHome();
  }
}

document.querySelector("#refreshBtn").addEventListener("click", renderHome);
window.addEventListener("hashchange", router);
updateRoleBadge();
router();
