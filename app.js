// ========================================
//  ハレタス - app.js
// ========================================

'use strict';

// ======== データ定義 ========

const TODAY_WORDS = [
  "今日の5分が半年後を変える","未来の自分が応援している","やる気は行動の後から来る",
  "まずは1分だけやってみよう","完璧より継続","小さな一歩も前進",
  "昨日の自分より少しだけ前へ","続けることが才能になる","未来は今日作られる",
  "コツコツは最強の近道","今日も未来を晴らそう","ハレタスへようこそ、今日も未来を育てよう",
  "一歩踏み出した勇気が明日につながる","やらない後悔より、やった後悔","積み重ねは裏切らない",
  "今日の努力は未来への贈り物","小さな習慣が大きな変化を生む","焦らなくていい、続けることが大事",
  "今日もよく来たね","未来の自分はきっと喜んでいる","行動した分だけ前に進む",
  "諦めない心が未来を切り開く","今日の選択が明日を作る","一日一歩、千里の道も",
  "努力は静かに積み上がっている","今日できることを今日やろう","未来は行動した人のもの",
  "続けることが最高の才能","今日もまず一歩","小さな積み重ねが人生を変える",
  "今日の行動が三ヶ月後を変える","未来の景色は今日作られる","夢は諦めない人に近づいてくる",
  "今日も自分を褒めていい","完璧でなくていい、続けることが大事","行動する人に未来は開ける",
  "今日も一緒に頑張ろう","小さな勝利を積み重ねよう","未来の自分への手紙を今日書こう",
  "今日の一歩が百歩分の価値がある","継続は力なり","今日の努力を信じよう",
  "明日になれば後悔するかもしれない、でも今日なら間に合う","未来は変えられる",
  "今日も新しいページを開こう","一日一日が大切な積み重ね","今日の自分を大切に",
  "未来の笑顔のために今日も頑張る","行動すれば何かが変わる","今日も前を向いて進もう",
  "コツコツが最強の戦略","今日の選択を信じよう","未来は今日の行動の積み重ね",
  "焦らず、でも止まらず","今日も成長した自分に乾杯","小さな習慣が大きな夢を叶える",
  "今日の努力は消えない","未来の自分がここにいる","行動した記録は一生残る",
  "今日も種をまこう","未来の花は今日咲き始める","一歩でも前に進めば十分",
  "今日も未来を育てよう","昨日より少しだけ前進","今日の自分に感謝しよう",
  "未来は積み重ねの先にある","諦めなければいつか必ず届く","今日も自分らしく",
  "小さな行動が大きな流れを作る","未来の自分はもっと輝いている","今日も一歩一歩",
  "積み重ねた日々は宝物","行動の先に答えがある","今日も前進あるのみ",
  "未来への種まき完了","今日の努力は未来の余裕になる","小さな習慣を大切に",
  "行動した人だけが見える景色がある","今日も自分を信じよう","コツコツが花を咲かせる",
  "今日の積み重ねが未来の自信になる","未来は今日作られる、必ず","一歩一歩が最速の近道",
  "今日も未来を信じて進もう","行動は最高の答え","今日もよく頑張った",
  "小さな一歩も立派な前進","未来の自分から「ありがとう」をもらおう","今日の行動に意味がある",
  "積み重ねが人生を豊かにする","今日も新しい自分へ","行動すれば道は開ける",
  "未来の笑顔が今日を応援している","今日も着実に前進","コツコツが最高の近道",
  "一日一日を大切に積み重ねよう","未来の自分が今日の努力に感謝する","今日も一緒に未来を育てよう"
];

const CATEGORIES = ["ダイエット","筋トレ","貯金・節約","NISA","勉強","家族・未来","開業・副業","健康","その他"];

const TARA_MESSAGES = {
  "ダイエット": [
    "ワンサイズ下の服が着られていたかも",
    "体が軽くなっていたかも",
    "写真写りが変わっていたかも",
    "あの時サラダチキンを選んでいタラ体が軽くなっていたかも",
    "階段が楽になっていたかも",
    "お気に入りの服がもう少し似合っていたかも"
  ],
  "筋トレ": [
    "腕が太くなっていたかも",
    "腹筋が見えていたかも",
    "自信がついていたかも",
    "Tシャツ姿が変わっていたかも",
    "姿勢が良くなっていたかも"
  ],
  "貯金・節約": [
    "旅行資金が貯まっていたかも",
    "欲しかった物が買えていたかも",
    "将来の安心につながっていたかも",
    "外食を減らしていタラ目標に近づいていたかも"
  ],
  "NISA": [
    "複利の力で資産が育っていたかも",
    "将来の安心が近づいていたかも",
    "未来の自分が感謝していたかも"
  ],
  "勉強": [
    "知識が積み重なっていたかも",
    "試験に近づいていたかも",
    "未来の選択肢が広がっていたかも",
    "昨日より少し賢くなっていたかも"
  ],
  "家族・未来": [
    "大切な人が喜んでいたかも",
    "未来の安心が育っていたかも",
    "家族の笑顔が増えていたかも"
  ],
  "開業・副業": [
    "開業に一歩近づいていたかも",
    "未来のお客様が増えていたかも",
    "夢が少し近づいていたかも"
  ],
  "健康": [
    "体が喜んでいたかも",
    "将来の医療費が減っていたかも",
    "毎日が少し楽になっていたかも"
  ],
  "その他": [
    "続けていタラ何かが変わっていたかも",
    "未来の自分が喜んでいたかも",
    "小さな積み重ねが大きな変化になっていたかも"
  ]
};

const REBA_MESSAGES = {
  "ダイエット": [
    "この調子で続けれバ理想の体型に近づく",
    "未来の自分が鏡の前で微笑んでいる",
    "継続が成果になっていく",
    "ワンサイズ下の服が少し近づいた"
  ],
  "筋トレ": [
    "体は確実に変わり始めている",
    "続ければ結果はついてくる",
    "未来の筋肉貯金が増えた",
    "あと少しで理想の体型が見えてくる"
  ],
  "貯金・節約": [
    "未来の自由が増えている",
    "目標に一歩近づいた",
    "コツコツが大きな成果になる",
    "未来の旅行資金が着実に育っている"
  ],
  "NISA": [
    "複利が静かに働き始めている",
    "未来の安心に着実に近づいている",
    "今日の積立が未来を変える"
  ],
  "勉強": [
    "知識は誰にも奪われない財産になった",
    "未来の選択肢が一つ増えた",
    "継続が最大の才能を証明している",
    "脳が静かに成長している"
  ],
  "家族・未来": [
    "大切な人への積立が増えた",
    "未来の笑顔が近づいている",
    "コツコツが家族の安心になる"
  ],
  "開業・副業": [
    "未来のお客様が待っている",
    "夢は行動した分だけ近づく",
    "開業資金にまた一歩近づいた"
  ],
  "健康": [
    "体は今日の努力を覚えている",
    "健康な未来に近づいた",
    "毎日の積み重ねが最高の投資"
  ],
  "その他": [
    "続けることが最強の才能",
    "未来の自分が感謝している",
    "小さな積み重ねが大きな変化になる"
  ]
};

const PLANT_TYPES = [
  { id: "sunflower", name: "ひまわり", stages: ["🌱","🌿","🌻","🌻","🌻🌟"] },
  { id: "leaf",      name: "観葉植物", stages: ["🌱","🪴","🪴","🌿","🌿✨"] },
  { id: "sakura",    name: "桜",       stages: ["🌱","🌿","🌸","🌸","🌸🎉"] },
  { id: "veggie",    name: "野菜",     stages: ["🌱","🌿","🥕","🥦","🥗✨"] },
  { id: "cactus",    name: "サボテン", stages: ["🌵","🌵","🌵🌸","🌵🌺","🌵🌺✨"] }
];

const PLANT_STAGE_LABELS = ["種🌱","芽吹き🌿","葉が育つ🍃","花が咲く🌸","満開🎉"];

// ======== State ========

let state = loadState();

function defaultState() {
  return {
    tasks: [],
    goal: { text: "", category: "" },
    plantId: "sunflower",
    harePoints: 0,
    streak: 0,
    lastDate: "",
    totalCompleted: 0,
    growthHistory: [],
    userTara: [],
    userReba: []
  };
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem("haretasu_state") || "null");
    if (!s) return defaultState();
    return Object.assign(defaultState(), s);
  } catch { return defaultState(); }
}

function saveState() {
  localStorage.setItem("haretasu_state", JSON.stringify(state));
}

// ======== Date utilities ========

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function fmtDate(str) {
  if (!str) return "";
  const d = new Date(str + "T00:00:00");
  return `${d.getMonth()+1}/${d.getDate()}`;
}

function isOverdue(task) {
  if (!task.dueDate || task.done) return false;
  return task.dueDate < todayStr();
}

// ======== Today / overdue / future ========

function getTodayTasks() {
  const t = todayStr();
  return state.tasks.filter(tk => !tk.done && (tk.dueDate === t || !tk.dueDate));
}

function getOverdueTasks() {
  const t = todayStr();
  return state.tasks.filter(tk => !tk.done && tk.dueDate && tk.dueDate < t);
}

function getFutureTasks() {
  const t = todayStr();
  return state.tasks.filter(tk => tk.dueDate && tk.dueDate > t);
}

function getDoneTasks() {
  const t = todayStr();
  return state.tasks.filter(tk => tk.done && tk.completedDate === t);
}

// ======== Points & growth ========

function calcProgress() {
  const todayTasks = getTodayTasks().concat(getDoneTasks());
  if (!todayTasks.length) return 0;
  const done = todayTasks.filter(t => t.done).length;
  return done / todayTasks.length;
}

function getPlant() {
  return PLANT_TYPES.find(p => p.id === state.plantId) || PLANT_TYPES[0];
}

function getPlantStage() {
  const pts = state.harePoints;
  if (pts < 50)  return 0;
  if (pts < 150) return 1;
  if (pts < 300) return 2;
  if (pts < 500) return 3;
  return 4;
}

function getSkyClass() {
  const p = calcProgress();
  if (p === 0) return "cloudy";
  if (p < 0.33) return "partly-cloudy";
  if (p < 0.66) return "clear";
  if (p < 1)    return "sunny";
  return "sunny";
}

function getSkyLabel() {
  const p = calcProgress();
  if (p === 0) return "☁️ くもり空 — タスクをやってみよう";
  if (p < 0.33) return "⛅ 少し晴れてきた！";
  if (p < 0.66) return "🌤️ いい調子！空が明るくなってきた";
  if (p < 1)    return "☀️ もうすぐ快晴！あと少し！";
  return "🌞 快晴！すばらしい！全タスク達成！";
}

// ======== Daily check ========

function dailyCheck() {
  const today = todayStr();
  if (state.lastDate === today) return;

  // carry over logic: unfinished tasks become overdue (already handled by date)
  // streak
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  if (state.lastDate === yesterday) {
    // streak continues if yesterday had tasks done
  } else if (state.lastDate && state.lastDate < yesterday) {
    state.streak = 0;
  }

  state.lastDate = today;
  saveState();
}

// ======== Complete task ========

function completeTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task || task.done) return;

  task.done = true;
  task.completedDate = todayStr();
  state.harePoints += 10;
  state.totalCompleted++;

  // check all today done
  const todayAll = getTodayTasks().concat(getDoneTasks());
  const allDone = todayAll.every(t => t.done);
  if (allDone && todayAll.length > 0) {
    state.harePoints += 20;
    state.streak++;
    state.harePoints += 5; // streak bonus
  }

  saveState();
  renderAll();
  spawnConfetti();

  // show reba
  const cat = state.goal.category || "その他";
  showTarareba("reba", cat);
}

// ======== Tarareba ========

function showTarareba(type, category) {
  const pool = type === "reba"
    ? [...(REBA_MESSAGES[category] || REBA_MESSAGES["その他"]), ...state.userReba.map(m => m.text)]
    : [...(TARA_MESSAGES[category] || TARA_MESSAGES["その他"]), ...state.userTara.map(m => m.text)];

  const msg = pool[Math.floor(Math.random() * pool.length)];

  const overlay = document.getElementById("tarareba-overlay");
  const card = document.getElementById("tarareba-card");
  const typeEl = card.querySelector(".tr-type");
  const emojiEl = card.querySelector(".tr-emoji");
  const msgEl = card.querySelector(".tr-message");
  const closeBtn = card.querySelector(".tr-close");

  if (type === "reba") {
    typeEl.textContent = "レバ";
    typeEl.className = "tr-type reba";
    emojiEl.textContent = "🌟";
    closeBtn.className = "tr-close reba-btn";
    closeBtn.textContent = "やったー！";
  } else {
    typeEl.textContent = "タラ";
    typeEl.className = "tr-type tara";
    emojiEl.textContent = "🌧️";
    closeBtn.className = "tr-close tara-btn";
    closeBtn.textContent = "よし、やろう！";
  }
  msgEl.textContent = msg;
  overlay.classList.add("open");
}

// ======== Confetti ========

function spawnConfetti() {
  const colors = ["#FFB347","#FFE066","#6DBF6D","#FF8FAB","#87CEEB","#FFD700"];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = (20 + Math.random() * 60) + "vw";
    el.style.top = "60px";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (8 + Math.random() * 8) + "px";
    el.style.height = (8 + Math.random() * 8) + "px";
    el.style.animationDelay = (Math.random() * 0.4) + "s";
    el.style.animationDuration = (0.9 + Math.random() * 0.6) + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
}

// ======== Render ========

function renderAll() {
  renderSky();
  renderWordCard();
  renderPoints();
  renderPlant();
  renderTasks();
  renderReport();
}

function renderSky() {
  const sky = document.getElementById("sky-area");
  const sun = document.getElementById("sun");
  const clouds = document.querySelectorAll(".cloud");
  const label = document.getElementById("sky-label");

  sky.className = getSkyClass();
  label.textContent = getSkyLabel();

  const p = calcProgress();
  if (p === 0) {
    sun.className = "hidden";
    clouds.forEach(c => c.classList.remove("faded","gone"));
  } else if (p < 0.33) {
    sun.className = "dim";
    clouds.forEach(c => { c.classList.remove("gone"); c.classList.add("faded"); });
  } else if (p < 0.66) {
    sun.className = "bright";
    clouds.forEach((c, i) => {
      if (i === 0) c.classList.add("faded");
      else { c.classList.remove("faded"); c.classList.add("gone"); }
    });
  } else {
    sun.className = "glow";
    clouds.forEach(c => c.classList.add("gone"));
  }
}

function renderWordCard() {
  const el = document.getElementById("word-today");
  if (el) return; // already set at init
}

function renderPoints() {
  document.getElementById("pb-value").textContent = state.harePoints + " pt";
  document.getElementById("pb-streak").textContent = `🔥 ${state.streak}日連続達成`;

  const p = calcProgress();
  document.getElementById("progress-fill").style.width = Math.round(p * 100) + "%";
}

function renderPlant() {
  const plant = getPlant();
  const stage = getPlantStage();
  const emoji = plant.stages[stage];

  document.getElementById("plant-emoji").textContent = emoji;
  document.getElementById("plant-stage-label").textContent = PLANT_STAGE_LABELS[stage];
  document.getElementById("plant-select-btn").textContent = plant.name + " 🌱";

  const pct = Math.min(100, (state.harePoints / 500) * 100);
  document.getElementById("plant-progress-fill").style.width = pct + "%";
}

let currentTab = "today";

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  let tasks = [];
  if (currentTab === "today") {
    tasks = getTodayTasks().concat(getDoneTasks());
  } else if (currentTab === "overdue") {
    tasks = getOverdueTasks();
  } else {
    tasks = getFutureTasks();
  }

  if (!tasks.length) {
    list.innerHTML = `<div class="empty-tasks">${
      currentTab === "today" ? "今日のタスクを追加しよう✨" :
      currentTab === "overdue" ? "やり残しなし！いい調子🌟" :
      "今後の予定はまだないよ📅"
    }</div>`;
    return;
  }

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task-item" + (task.done ? " done" : "") + (isOverdue(task) ? " overdue" : "");
    div.innerHTML = `
      <button class="task-check" data-id="${task.id}" title="完了">
        ${task.done ? "✓" : ""}
      </button>
      <div class="task-info">
        <div class="task-name">${escHtml(task.name)}</div>
        ${task.dueDate ? `<div class="task-due">${isOverdue(task) ? "⚠️ " : "📅 "}${fmtDate(task.dueDate)}</div>` : ""}
      </div>
      <div class="task-actions">
        <button class="task-btn" data-edit="${task.id}" title="編集">✏️</button>
        <button class="task-btn" data-del="${task.id}" title="削除">🗑️</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function renderReport() {
  document.getElementById("rep-streak").textContent = state.streak;
  document.getElementById("rep-total").textContent = state.totalCompleted;
  document.getElementById("rep-points").textContent = state.harePoints;

  const allDone = state.tasks.filter(t => t.done).length;
  const allTotal = state.tasks.length;
  const rate = allTotal > 0 ? Math.round(allDone / allTotal * 100) : 0;
  document.getElementById("rep-rate").textContent = rate + "%";

  const plant = getPlant();
  const stage = getPlantStage();
  document.getElementById("rep-plant").textContent = plant.stages[stage] + " " + plant.name + "（" + PLANT_STAGE_LABELS[stage] + "）";
}

function escHtml(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// ======== Modals ========

function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

// ---- Task Modal ----
let editingTaskId = null;

function openAddTask() {
  editingTaskId = null;
  document.getElementById("task-modal-title").textContent = "タスクを追加";
  document.getElementById("task-name-input").value = "";
  document.getElementById("task-due-input").value = "";
  openModal("task-modal");
}

function openEditTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  editingTaskId = id;
  document.getElementById("task-modal-title").textContent = "タスクを編集";
  document.getElementById("task-name-input").value = task.name;
  document.getElementById("task-due-input").value = task.dueDate || "";
  openModal("task-modal");
}

function saveTask() {
  const name = document.getElementById("task-name-input").value.trim();
  if (!name) { alert("タスク名を入力してね！"); return; }
  const dueDate = document.getElementById("task-due-input").value;

  if (editingTaskId) {
    const task = state.tasks.find(t => t.id === editingTaskId);
    if (task) { task.name = name; task.dueDate = dueDate; }
  } else {
    state.tasks.push({
      id: Date.now().toString(),
      name,
      dueDate,
      done: false,
      completedDate: null
    });
  }
  saveState();
  closeModal("task-modal");
  renderAll();
}

function deleteTask(id) {
  if (!confirm("このタスクを削除する？")) return;
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveState();
  renderAll();
}

// ---- Goal Modal ----
function openGoalModal() {
  document.getElementById("goal-text-input").value = state.goal.text;
  // select category chip
  document.querySelectorAll("#goal-modal .chip").forEach(c => {
    c.classList.toggle("selected", c.dataset.cat === state.goal.category);
  });
  openModal("goal-modal");
}

function saveGoal() {
  const text = document.getElementById("goal-text-input").value.trim();
  const catEl = document.querySelector("#goal-modal .chip.selected");
  state.goal.text = text;
  state.goal.category = catEl ? catEl.dataset.cat : "";
  saveState();
  closeModal("goal-modal");
  renderGoalDisplay();
  renderAll();
}

function renderGoalDisplay() {
  const el = document.getElementById("goal-display");
  const cat = document.getElementById("goal-category");
  const txt = document.getElementById("goal-text");

  if (state.goal.text) {
    el.classList.remove("empty");
    cat.textContent = state.goal.category || "目標";
    txt.textContent = state.goal.text;
  } else {
    el.classList.add("empty");
    cat.textContent = "目標";
    txt.textContent = "目標を設定しよう！";
  }
}

// ---- Plant Select Modal ----
function openPlantModal() {
  renderPlantOptions();
  openModal("plant-modal");
}

function renderPlantOptions() {
  const grid = document.getElementById("plant-grid");
  grid.innerHTML = "";
  PLANT_TYPES.forEach(p => {
    const div = document.createElement("div");
    div.className = "plant-opt" + (state.plantId === p.id ? " selected" : "");
    div.innerHTML = `<div class="po-emoji">${p.stages[getPlantStageFor(p)]}</div><div class="po-name">${p.name}</div>`;
    div.onclick = () => {
      state.plantId = p.id;
      saveState();
      closeModal("plant-modal");
      renderPlant();
    };
    grid.appendChild(div);
  });
}

function getPlantStageFor(plant) {
  const pts = state.harePoints;
  if (pts < 50)  return 0;
  if (pts < 150) return 1;
  if (pts < 300) return 2;
  if (pts < 500) return 3;
  return 4;
}

// ---- Tarareba User Messages ----
function renderUserTarareba() {
  const list = document.getElementById("user-tr-list");
  list.innerHTML = "";
  const all = [
    ...state.userTara.map(m => ({ ...m, type: "tara" })),
    ...state.userReba.map(m => ({ ...m, type: "reba" }))
  ];
  if (!all.length) {
    list.innerHTML = '<p style="color:#aaa;font-size:13px;text-align:center;padding:12px">まだ登録されていません</p>';
    return;
  }
  all.forEach(m => {
    const div = document.createElement("div");
    div.className = "tr-user-item";
    div.innerHTML = `
      <span class="tui-type ${m.type}">${m.type === "tara" ? "タラ" : "レバ"}</span>
      <span class="tui-text">${escHtml(m.text)}</span>
      <button class="tui-del" data-type="${m.type}" data-id="${m.id}">✕</button>
    `;
    list.appendChild(div);
  });
}

function addUserTarareba() {
  const type = document.getElementById("tr-type-select").value;
  const text = document.getElementById("tr-text-input").value.trim();
  if (!text) { alert("メッセージを入力してね！"); return; }
  const msg = { id: Date.now().toString(), text };
  if (type === "tara") state.userTara.push(msg);
  else state.userReba.push(msg);
  document.getElementById("tr-text-input").value = "";
  saveState();
  renderUserTarareba();
}

function deleteUserTarareba(type, id) {
  if (type === "tara") state.userTara = state.userTara.filter(m => m.id !== id);
  else state.userReba = state.userReba.filter(m => m.id !== id);
  saveState();
  renderUserTarareba();
}

// ======== View switching ========

let currentView = "home";

function switchView(view) {
  currentView = view;
  document.getElementById("home-view").style.display = view === "home" ? "block" : "none";
  document.getElementById("report-view").classList.toggle("visible", view === "report");
  document.getElementById("settings-view").classList.toggle("visible", view === "settings");

  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
  });

  if (view === "report") renderReport();
}

// ======== Menu sheet ========

function openMenu() {
  openModal("menu-modal");
}

// ======== Event delegation ========

document.addEventListener("click", e => {
  // task check
  const checkBtn = e.target.closest("[data-id]");
  if (checkBtn && checkBtn.classList.contains("task-check")) {
    completeTask(checkBtn.dataset.id);
    return;
  }

  // task edit
  const editBtn = e.target.closest("[data-edit]");
  if (editBtn) { openEditTask(editBtn.dataset.edit); return; }

  // task delete
  const delBtn = e.target.closest("[data-del]");
  if (delBtn) { deleteTask(delBtn.dataset.del); return; }

  // tarareba delete
  const trDel = e.target.closest("[data-type][data-id]");
  if (trDel && trDel.classList.contains("tui-del")) {
    deleteUserTarareba(trDel.dataset.type, trDel.dataset.id);
    return;
  }
});

// ======== Init ========

document.addEventListener("DOMContentLoaded", () => {
  dailyCheck();

  // Today word
  const word = TODAY_WORDS[Math.floor(Math.random() * TODAY_WORDS.length)];
  document.getElementById("word-today").textContent = word;

  // Date display
  const now = new Date();
  const days = ["日","月","火","水","木","金","土"];
  document.getElementById("date-display").textContent =
    `${now.getMonth()+1}月${now.getDate()}日（${days[now.getDay()]}）`;

  // Goal display
  renderGoalDisplay();

  // Task tabs
  document.querySelectorAll(".task-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTab = btn.dataset.tab;
      document.querySelectorAll(".task-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTasks();
    });
  });

  // Add task button
  document.getElementById("btn-add-task").addEventListener("click", openAddTask);

  // Goal button
  document.getElementById("btn-set-goal").addEventListener("click", openGoalModal);
  document.getElementById("goal-display").addEventListener("click", openGoalModal);

  // Plant select button
  document.getElementById("plant-select-btn").addEventListener("click", openPlantModal);

  // Bottom nav
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  // Menu button
  document.getElementById("menu-btn").addEventListener("click", openMenu);

  // Modal close buttons
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
  });

  // Modal overlay close
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Task save
  document.getElementById("btn-save-task").addEventListener("click", saveTask);

  // Goal chips
  document.querySelectorAll("#goal-modal .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#goal-modal .chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
    });
  });

  // Goal save
  document.getElementById("btn-save-goal").addEventListener("click", saveGoal);

  // Tarareba close
  document.querySelector("#tarareba-card .tr-close").addEventListener("click", () => {
    document.getElementById("tarareba-overlay").classList.remove("open");
  });

  // Tarareba overlay click
  document.getElementById("tarareba-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("tarareba-overlay")) {
      document.getElementById("tarareba-overlay").classList.remove("open");
    }
  });

  // User tarareba
  document.getElementById("btn-add-tr").addEventListener("click", addUserTarareba);

  // Settings items
  document.getElementById("settings-tr-btn").addEventListener("click", () => {
    renderUserTarareba();
    openModal("tr-modal");
  });

  document.getElementById("settings-plant-btn").addEventListener("click", () => {
    openPlantModal();
  });

  document.getElementById("settings-goal-btn").addEventListener("click", () => {
    openGoalModal();
  });

  document.getElementById("settings-reset-btn").addEventListener("click", () => {
    if (confirm("すべてのデータをリセットしますか？")) {
      localStorage.removeItem("haretasu_state");
      state = defaultState();
      renderAll();
      renderGoalDisplay();
      alert("リセットしました！");
    }
  });

  // Test tara button (from menu)
  document.getElementById("menu-tara-btn")?.addEventListener("click", () => {
    closeModal("menu-modal");
    const cat = state.goal.category || "その他";
    showTarareba("tara", cat);
  });
  document.getElementById("menu-reba-btn")?.addEventListener("click", () => {
    closeModal("menu-modal");
    const cat = state.goal.category || "その他";
    showTarareba("reba", cat);
  });

  renderAll();

  // PWA service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
});
// ★通知を閉じるボタンの処理（一番最後に追加）
document.addEventListener("click", e => {
  if (e.target.closest(".tr-close")) {
    document.getElementById("tarareba-overlay")?.classList.remove("open");
  }
});
