// auth.js - 處理全站登入狀態
const SUPABASE_URL = 'https://nlhqslyecdmwqdrtluki.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5saHFzbHllY2Rtd3FkcnRsdWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMjM4NjAsImV4cCI6MjA3OTc5OTg2MH0.YlCfxdNP_aQh5Vge-dj079l2hdPeLzzAU0crGGU7XkM'; // 請填入您最新的 Key
const authClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 檢查並返回使用者資訊
function getUser() {
    return JSON.parse(localStorage.getItem('maztica_user'));
}

// 登入功能 (彈出式或跳轉)
function login(username) {
    localStorage.setItem('maztica_user', JSON.stringify({ name: username }));
    location.reload();
}

// 登出功能
function logout() {
    localStorage.removeItem('maztica_user');
    location.reload();
}

// 保護頁面功能：若未登入則導回首頁
function protectPage() {
    if (!getUser()) {
        alert("⚠️ 此功能需要冒險者權限，請先前往公會大廳登入！");
        window.location.href = 'index.html';
    }
}

// 在 auth.js 加入這一行
function authLogin(inputId) {
    const name = document.getElementById(inputId).value.trim();
    if(name) {
        login(name);
    } else {
        alert("請輸入冒險者稱號！");
    }
}