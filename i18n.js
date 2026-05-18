// 语言切换模块 - i18n.js
const translations = {
    zh: {
        // 导航
        nav_home: "首页",
        nav_reviews: "评测",
        nav_faq: "常见问题",
        nav_budget: "预算推荐",
        nav_upgrade: "升级改装",
        nav_brands: "品牌对比",
        nav_maintenance: "保养指南",
        nav_accessories: "配件商城",
        nav_shop: "官方商城",
        nav_policy: "政策",
        nav_tips: "上牌指南",
        
        // 页脚
        footer_about: "关于我们",
        footer_quick_links: "快速链接",
        footer_policy: "政策与法律",
        footer_contact: "联系我们",
        footer_copyright: "© 2026 电动车选购指南 | 让出行更简单",
        
        // 通用
        btn_read_more: "阅读更多",
        btn_view_all: "查看全部",
        btn_back: "返回",
        label_new: "新文章",
        label_hot: "热门",
        label_recommended: "推荐",
        label_updated: "更新",
        
        // 视频评测
        video_section_title: "视频评测",
        video_recommended: "精选推荐",
        
        // 首页
        hero_title: "2026年电动自行车选购指南",
        hero_subtitle: "新国标政策 | 品牌评测 | 选购攻略 | 升级改装",
        hero_desc: "最全面的电动车选购平台，提供最新的政策解读、产品评测、技术指导和改装方案",
        
        // 评测页
        reviews_title: "品牌评测",
        reviews_subtitle: "深度体验，真实感受，帮你找到最适合的电动车",
        
        // FAQ页
        faq_title: "常见问题",
        faq_subtitle: "解答选购电动车的常见疑问",
        
        // 预算推荐页
        budget_title: "预算推荐",
        budget_subtitle: "根据不同预算找到最适合你的电动车",
        
        // 品牌对比页
        brands_title: "品牌对比",
        brands_subtitle: "深度对比各大品牌电动车优缺点",
        
        // 升级改装页
        upgrade_title: "升级改装",
        upgrade_subtitle: "让你的电动车性能更上一层楼",
        
        // 保养指南页
        maintenance_title: "保养指南",
        maintenance_subtitle: "延长电动车寿命的保养技巧",
        
        // 配件商城页
        accessories_title: "配件商城",
        accessories_subtitle: "精选高品质电动车配件",
        
        // 官方商城页
        shop_title: "官方商城",
        shop_subtitle: "正品保障，官方授权",
        
        // 政策页
        policy_title: "2026年新国标政策",
        policy_subtitle: "了解最新政策法规，安全合规出行",
        
        // 上牌指南页
        tips_title: "电动车上牌指南",
        tips_subtitle: "一文搞懂上牌流程和注意事项",
        
        // 语言切换
        lang_switch: "EN",
        lang_current: "中文",
        
        // 广告位
        ad_placeholder: "广告位招商中"
    },
    en: {
        // 导航
        nav_home: "Home",
        nav_reviews: "Reviews",
        nav_faq: "FAQ",
        nav_budget: "Budget",
        nav_upgrade: "Upgrade",
        nav_brands: "Brands",
        nav_maintenance: "Maintenance",
        nav_accessories: "Accessories",
        nav_shop: "Shop",
        nav_policy: "Policy",
        nav_tips: "Registration",
        
        // 页脚
        footer_about: "About Us",
        footer_quick_links: "Quick Links",
        footer_policy: "Policies & Terms",
        footer_contact: "Contact Us",
        footer_copyright: "© 2026 EBike Guide | Making Travel Easier",
        
        // 通用
        btn_read_more: "Read More",
        btn_view_all: "View All",
        btn_back: "Back",
        label_new: "New",
        label_hot: "Hot",
        label_recommended: "Recommended",
        label_updated: "Updated",
        
        // 视频评测
        video_section_title: "Video Reviews",
        video_recommended: "Featured",
        
        // 首页
        hero_title: "2026 Electric Bike Buying Guide",
        hero_subtitle: "New Standards | Brand Reviews | Buying Tips | Upgrades",
        hero_desc: "The most comprehensive electric vehicle selection platform with latest policy updates, product reviews, and technical guides",
        
        // 评测页
        reviews_title: "Brand Reviews",
        reviews_subtitle: "In-depth reviews to help you find the perfect e-bike",
        
        // FAQ页
        faq_title: "FAQ",
        faq_subtitle: "Answers to common e-bike questions",
        
        // 预算推荐页
        budget_title: "Budget Picks",
        budget_subtitle: "Find the best e-bike for your budget",
        
        // 品牌对比页
        brands_title: "Brand Comparison",
        brands_subtitle: "In-depth comparison of major e-bike brands",
        
        // 升级改装页
        upgrade_title: "Upgrades & Mods",
        upgrade_subtitle: "Upgrade your e-bike performance",
        
        // 保养指南页
        maintenance_title: "Maintenance Guide",
        maintenance_subtitle: "Tips to extend your e-bike lifespan",
        
        // 配件商城页
        accessories_title: "Accessories Store",
        accessories_subtitle: "Premium quality e-bike accessories",
        
        // 官方商城页
        shop_title: "Official Shop",
        shop_subtitle: "Authentic products, official warranty",
        
        // 政策页
        policy_title: "2026 New National Standards",
        policy_subtitle: "Stay informed about latest regulations",
        
        // 上牌指南页
        tips_title: "E-Bike Registration Guide",
        tips_subtitle: "Everything about registration process",
        
        // 语言切换
        lang_switch: "中文",
        lang_current: "EN",
        
        // 广告位
        ad_placeholder: "Ad Space"
    }
};

// 获取当前语言
function getCurrentLang() {
    return localStorage.getItem('lang') || 'zh';
}

// 设置语言
function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    updatePageLang(lang);
    updateLangButton(lang);
}

// 更新页面语言
function updatePageLang(lang) {
    const t = translations[lang];
    
    // 更新带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // 更新带有 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // 更新带有 data-i18n-title 属性的元素
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) {
            el.title = t[key];
        }
    });
}

// 更新语言切换按钮
function updateLangButton(lang) {
    const btn = document.getElementById('langSwitchBtn');
    if (btn) {
        btn.textContent = translations[lang].lang_switch;
    }
}

// 切换语言
function toggleLang() {
    const currentLang = getCurrentLang();
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setLang(newLang);
}

// 初始化
function initI18n() {
    const lang = getCurrentLang();
    document.documentElement.lang = lang;
    
    // 页面加载时更新语言
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => updatePageLang(lang));
    } else {
        updatePageLang(lang);
    }
    
    // 添加切换按钮点击事件
    const btn = document.getElementById('langSwitchBtn');
    if (btn) {
        btn.addEventListener('click', toggleLang);
    }
    
    updateLangButton(lang);
}

// 导出
window.i18n = {
    getCurrentLang,
    setLang,
    toggleLang,
    initI18n,
    translations
};
