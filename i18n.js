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
        nav_lang: "🌐 EN",
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
        hero_badge: "🔥 618购车最佳时机 | 7月1日上牌截止倒计时",
        hero_btn_explore: "开始探索",
        hero_btn_login: "登录 / 注册",
        
        // 功能卡片
        feature1_title: "🛒 选购指南",
        feature1_desc: "2026新国标政策解读，主流品牌车型对比，不同预算购车推荐，避坑指南，让你不再踩雷！",
        feature1_link: "开始选购",
        feature2_title: "⚡ 升级改装",
        feature2_desc: "哪些改装合法合规？电池升级、控制器优化、安全强化，让你的小电驴性能拉满！",
        feature2_link: "查看方案",
        feature3_title: "💡 升级计算器",
        feature3_desc: "根据你的需求和预算，智能计算升级方案成本和效果，电池、控制器、刹车一键估算！",
        feature3_link: "开始计算",
        feature4_title: "⭐ 品牌评测",
        feature4_desc: "雅迪、爱玛、小牛、九号等热门品牌深度评测，真实用户体验，帮你选出性价比之王！",
        feature4_link: "查看评测",
        
        // 选购指南
        guide_title: "🔥 选购指南",
        guide_subtitle: "2026新国标政策下，如何pick最适合你的电动车？超全选购攻略来袭！",
        
        // Tabs
        tab_policy: "📋 新国标政策",
        tab_budget: "💰 预算选择",
        tab_compare: "🏆 品牌对比",
        
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
        
        // 常用按钮
        btn_view_more: "查看更多",
        btn_view_details: "查看详情",
        btn_learn_more: "了解更多",
        btn_start_shopping: "开始选购",
        btn_view_plans: "查看方案",
        btn_view_reviews: "查看评测",
        btn_view_compare: "查看对比",
        btn_contact: "联系我们",
        btn_buy_now: "立即购买",
        btn_compare: "对比",
        
        // 常用词汇
        pros: "优点",
        cons: "缺点",
        features: "特点",
        specs: "参数",
        price: "价格",
        warranty: "质保",
        battery: "电池",
        motor: "电机",
        speed: "速度",
        range: "续航",
        weight: "重量",
        charging: "充电",
        
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
        nav_lang: "🌐 中文",
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
        hero_badge: "🔥 Best Time to Buy! | Deadline: July 1",
        hero_btn_explore: "Start Exploring",
        hero_btn_login: "Login / Register",
        
        // 功能卡片
        feature1_title: "🛒 Buying Guide",
        feature1_desc: "2026 new standards explained, brand comparisons, budget recommendations, avoid pitfalls!",
        feature1_link: "Start Shopping",
        feature2_title: "⚡ Upgrade & Mod",
        feature2_desc: "Legal upgrades explained! Battery upgrades, controller optimization, safety enhancements!",
        feature2_link: "View Plans",
        feature3_title: "💡 Upgrade Calculator",
        feature3_desc: "Smart calculation of upgrade costs and effects, battery, controller, brakes estimation!",
        feature3_link: "Calculate",
        feature4_title: "⭐ Brand Reviews",
        feature4_desc: "In-depth reviews of Yadea, Aima, Ninebot, NIU - find the best value!",
        feature4_link: "View Reviews",
        
        // 选购指南
        guide_title: "🔥 Buying Guide",
        guide_subtitle: "How to pick the perfect e-bike under 2026 new standards?",
        
        // Tabs
        tab_policy: "📋 New Policy",
        tab_budget: "💰 Budget",
        tab_compare: "🏆 Brand Compare",
        
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
        
        // 常用按钮
        btn_view_more: "View More",
        btn_view_details: "View Details",
        btn_learn_more: "Learn More",
        btn_start_shopping: "Start Shopping",
        btn_view_plans: "View Plans",
        btn_view_reviews: "View Reviews",
        btn_view_compare: "View Compare",
        btn_contact: "Contact Us",
        btn_buy_now: "Buy Now",
        btn_compare: "Compare",
        
        // 常用词汇
        pros: "Pros",
        cons: "Cons",
        features: "Features",
        specs: "Specs",
        price: "Price",
        warranty: "Warranty",
        battery: "Battery",
        motor: "Motor",
        speed: "Speed",
        range: "Range",
        weight: "Weight",
        charging: "Charging",
        
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

// 更新语言切换链接
function updateLangButton(lang) {
    const btn = document.getElementById('langSwitchBtn');
    if (btn) {
        btn.textContent = translations[lang].nav_lang;
        btn.setAttribute('data-i18n', 'nav_lang');
    }
}

// 切换语言
function toggleLang(e) {
    e.preventDefault();
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
    
    // 添加切换链接点击事件
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
