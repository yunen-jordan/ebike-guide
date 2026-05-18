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
        footer_contact_desc: "如有问题或合作意向，请通过以下方式联系我们：",
        footer_copyright: "© 2026 电动车选购指南 | 让出行更简单",
        footer_about_desc: "我们是一个专注于电动车选购、使用和升级的指南平台，提供最新的政策解读、产品评测和技术指导。年轻人的出行神器指南！",
        footer_copyright_1: "© 2026 rushbike. 版权所有. 本网站内容仅供参考，实际购买请以官方信息为准。",
        footer_copyright_2: "⚡ 让出行更简单，让选择更明智 |年轻人的电动车攻略站",
        
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
        faq_h1_full: "❓ 常见问题 FAQ",
        faq_subtitle: "解答选购电动车的常见疑问",
        
        // 预算推荐页
        budget_title: "预算推荐",
        budget_subtitle: "根据不同预算找到最适合你的电动车",
        
        // 品牌对比页
        brands_title: "品牌对比",
        brands_subtitle: "深度对比各大品牌电动车优缺点",
        
        // 升级改装页
        upgrade_title: "升级改装",
        upgrade_subtitle: "合法合规的前提下，如何让小电驴性能拉满？",
        
        // 保养指南页
        maintenance_title: "保养指南",
        maintenance_subtitle: "延长电动车寿命的保养技巧",
        
        // 配件商城页
        accessories_title: "配件商城",
        accessories_subtitle: "精选高品质电动车配件",
        
        // 官方商城页
        shop_title: "官方商城",
        shop_subtitle: "热门电动自行车 · 正品保障 · 限时补贴",
        
        // 政策页
        policy_title: "2026年新国标政策",
        policy_subtitle: "了解最新政策法规，安全合规出行",
        
        // 上牌指南页
        tips_title: "电动车上牌指南",
        tips_subtitle: "选购电动车必看的10大要点，避免踩雷！",
        
        // 升级改装指南
        upgrade_section_title: "⚡ 升级改装指南",
        upgrade_section_desc: "合法合规的前提下，如何让小电驴性能拉满？我们有专业升级建议！",
        upgrade_card_battery: "🔋 电池升级方案",
        upgrade_card_battery_desc: "铅酸换锂电，48V升级60V/72V方案，双电池并联，安全注意事项全解析！",
        upgrade_card_performance: "🚀 性能优化方案",
        upgrade_card_performance_desc: "控制器优化、电机维护、轮胎升级、减震改进，在不超速的前提下提升骑行体验！",
        upgrade_card_maintenance: "🛠️ 保养指南",
        upgrade_card_maintenance_desc: "电池保养、轮胎维护、刹车检查、四季养护，让你的小电驴多骑5年！",
        btn_view_guide: "查看指南",
        upgrade_card_accessories: "🛒 配件选购",
        upgrade_card_accessories_desc: "头盔、锁、车灯、GPS定位器等必备配件推荐，帮你的小电驴武装到牙齿！",
        upgrade_card_safety: "🛡️ 安全强化方案",
        upgrade_card_safety_desc: "ABS防抱死、TCS牵引力控制、刹车升级、灯光改进，全方位提升骑行安全！",
        
        // 品牌对比
        brand_compare_title: "🏆 主流品牌对比",
        brand_compare_desc: "自由选择品牌，一键生成对比，帮你做出明智选择！",
        brand_compare_select: "选择你想对比的品牌（至少2个）",
        btn_start_compare: "开始对比",
        
        // 升级计算器
        calculator_title: "💡 升级成本计算器",
        calculator_desc: "根据你的需求和预算，一键计算升级方案的成本和效果！",
        calculator_battery_label: "当前电池类型",
        calculator_battery_lead: "铅酸电池 (48V12Ah)",
        calculator_battery_lithium: "锂电池 (48V20Ah)",
        calculator_battery_none: "无(新购车)",
        calculator_range_label: "目标续航 (km)",
        calculator_range_40: "40-60km",
        calculator_range_60: "60-80km",
        calculator_range_80: "80-100km",
        calculator_range_100: "100km以上",
        calculator_type_label: "升级类型",
        calculator_type_battery: "仅电池升级",
        calculator_type_performance: "性能综合升级",
        calculator_type_safety: "安全强化升级",
        calculator_type_full: "全面升级",
        calculator_budget_label: "预算范围 (元)",
        calculator_budget_1000: "1000元以下",
        calculator_budget_2000: "1000-2000元",
        calculator_budget_3000: "2000-3000元",
        calculator_budget_5000: "3000-5000元",
        calculator_btn_calculate: "计算升级方案",
        calculator_result_title: "🎯 推荐升级方案",
        calculator_result_battery: "🔋 电池升级：",
        calculator_result_controller: "⚡ 控制器优化：",
        calculator_result_brake: "🛑 刹车升级：",
        calculator_result_tire: "🛞 轮胎升级：",
        calculator_result_total: "💰 预估总费用：",
        calculator_result_range: "📈 预计续航提升：",
        calculator_result_speed: "🚀 预计速度提升：",
        
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
        ad_placeholder: "广告位招商中",
        
        // 热门车型展示
        gallery_title: "🔥 热门车型展示",
        gallery_subtitle: "2026年最受欢迎的电动车实拍，各品牌明星产品一网打尽！",
        
        // 最新资讯
        news_title: "📰 最新资讯",
        news_subtitle: "电动车行业热点追踪，政策解读、行业动态一网打尽！",
        news_tag_alert: "⚠️ 重要提醒",
        news_tag_policy: "📋 政策解读",
        news_tag_industry: "📈 行业动态",
        news_tag_safety: "🛡️ 安全必读",
        news_title_1: "7月1日电池新国标倒计时",
        news_desc_1: "距离GB 38031-2025实施仅44天！不起火、不爆炸，史上最严动力电池安全标准即将生效！",
        news_title_2: "5月1日起电动车四大新规落地",
        news_desc_2: "上牌·骑行·改装·充电全链条管控升级！公安部工信部多部门联合推行，4.48亿车主必读！",
        news_title_3: "雅迪九号台铃爱玛集体涨价300元",
        news_desc_3: "碳酸锂从7.6万飙至12.5万/吨翻倍暴涨+新安全配置强制加装，涨价推手全解析！",
        news_title_4: "电动车安全选购指南",
        news_desc_4: "认准CCC认证、远离非法改装、避开低价陷阱，新国标实施后合规车型才是正道！",
        btn_read_details: "详细阅读",
        
        // 官方商城
        shop_section_title: "🛍️ 官方商城",
        shop_section_subtitle: "精选配件与周边正品，好货低价，品质保障！",
        shop_card_title: "精选配件商城",
        shop_card_desc: "头盔、锁具、车灯、GPS定位器等必备配件，官方正品保障",
        shop_tag_genuine: "正品保障",
        shop_tag_shipping: "快递包邮",
        shop_tag_return: "7天退换",
        btn_enter_shop: "进入商城",
        
        // 升级改装指南按钮
        btn_view_details: "查看详情",
        
        // 品牌对比结果
        compare_result_title: "📊 对比结果",
        data_label_models: "主力车型",
        data_label_price: "价格区间",
        data_label_range: "续航里程",
        data_label_highlight: "核心亮点",
        data_label_score: "综合评分",
        data_label_battery: "电池类型",
        data_label_weight: "车身重量",
        data_label_smart: "智能配置",
        data_label_aftersale: "售后保障",
        btn_view_review: "查看评测",
        alert_select_two: "请至少选择2个品牌进行对比！",
        
        // 计算器结果
        calc_no_upgrade: "无需升级",
        calc_yuan: "元",
        calc_km: "km",
        calc_speed_compliant: "不超过25km/h (符合国标)"
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
        footer_contact_desc: "For questions or cooperation, contact us:",
        footer_copyright: "© 2026 EBike Guide | Making Travel Easier",
        footer_about_desc: "A platform focused on e-bike selection, usage, and upgrades. Latest policy updates, product reviews, and technical guides for young riders!",
        footer_copyright_1: "© 2026 rushbike. All rights reserved. Content for reference only.",
        footer_copyright_2: "⚡ Making travel easier, choices wiser | Young riders' e-bike guide",
        
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
        faq_h1_full: "❓ FAQ",
        faq_subtitle: "Answers to common e-bike questions",
        
        // 预算推荐页
        budget_title: "Budget Picks",
        budget_subtitle: "Find the best e-bike for your budget",
        
        // 品牌对比页
        brands_title: "Brand Comparison",
        brands_subtitle: "In-depth comparison of major e-bike brands",
        
        // 升级改装页
        upgrade_title: "Upgrades & Mods",
        upgrade_subtitle: "How to maximize performance legally?",
        
        // 保养指南页
        maintenance_title: "Maintenance Guide",
        maintenance_subtitle: "Tips to extend your e-bike lifespan",
        
        // 配件商城页
        accessories_title: "Accessories Store",
        accessories_subtitle: "Premium quality e-bike accessories",
        
        // 官方商城页
        shop_title: "Official Shop",
        shop_subtitle: "Popular E-Bikes · Authentic · Limited Subsidy",
        
        // 政策页
        policy_title: "2026 New National Standards",
        policy_subtitle: "Stay informed about latest regulations",
        
        // 上牌指南页
        tips_title: "E-Bike Registration Guide",
        tips_subtitle: "10 must-know tips for buying e-bikes!",
        
        // 升级改装指南
        upgrade_section_title: "⚡ Upgrade Guide",
        upgrade_section_desc: "Learn how to maximize your e-bike's performance legally and safely!",
        upgrade_card_battery: "🔋 Battery Upgrade",
        upgrade_card_battery_desc: "Lead-acid to lithium, 48V to 60V/72V, dual battery parallel - safety tips included!",
        upgrade_card_performance: "🚀 Performance Tune",
        upgrade_card_performance_desc: "Controller optimization, motor maintenance, tire and suspension upgrades!",
        upgrade_card_maintenance: "🛠️ Maintenance",
        upgrade_card_maintenance_desc: "Battery care, tire checks, brake inspection - keep your e-bike running 5 years longer!",
        btn_view_guide: "View Guide",
        upgrade_card_accessories: "🛒 Accessories",
        upgrade_card_accessories_desc: "Helmets, locks, lights, GPS trackers - gear up your e-bike!",
        upgrade_card_safety: "🛡️ Safety Upgrade",
        upgrade_card_safety_desc: "ABS, TCS, brake upgrades, lighting improvements for safer rides!",
        
        // 品牌对比
        brand_compare_title: "🏆 Brand Comparison",
        brand_compare_desc: "Compare brands freely, one-click comparison to help you make the right choice!",
        brand_compare_select: "Select brands to compare (at least 2)",
        btn_start_compare: "Compare",
        
        // 升级计算器
        calculator_title: "💡 Upgrade Calculator",
        calculator_desc: "Calculate upgrade costs and effects based on your needs and budget!",
        calculator_battery_label: "Current Battery",
        calculator_battery_lead: "Lead-acid (48V12Ah)",
        calculator_battery_lithium: "Lithium (48V20Ah)",
        calculator_battery_none: "None (New Purchase)",
        calculator_range_label: "Target Range (km)",
        calculator_range_40: "40-60km",
        calculator_range_60: "60-80km",
        calculator_range_80: "80-100km",
        calculator_range_100: "100km+",
        calculator_type_label: "Upgrade Type",
        calculator_type_battery: "Battery Only",
        calculator_type_performance: "Performance Upgrade",
        calculator_type_safety: "Safety Upgrade",
        calculator_type_full: "Full Upgrade",
        calculator_budget_label: "Budget (CNY)",
        calculator_budget_1000: "Under ¥1000",
        calculator_budget_2000: "¥1000-2000",
        calculator_budget_3000: "¥2000-3000",
        calculator_budget_5000: "¥3000-5000",
        calculator_btn_calculate: "Calculate",
        calculator_result_title: "🎯 Recommended Plan",
        calculator_result_battery: "🔋 Battery:",
        calculator_result_controller: "⚡ Controller:",
        calculator_result_brake: "🛑 Brakes:",
        calculator_result_tire: "🛞 Tires:",
        calculator_result_total: "💰 Total Cost:",
        calculator_result_range: "📈 Range Boost:",
        calculator_result_speed: "🚀 Speed Boost:",
        
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
        ad_placeholder: "Ad Space",
        
        // 热门车型展示
        gallery_title: "🔥 Popular Models",
        gallery_subtitle: "2026's most popular e-bikes, all star products in one place!",
        
        // 最新资讯
        news_title: "📰 Latest News",
        news_subtitle: "Industry trends, policy updates, and market insights!",
        news_tag_alert: "⚠️ Alert",
        news_tag_policy: "📋 Policy",
        news_tag_industry: "📈 Industry",
        news_tag_safety: "🛡️ Safety",
        news_title_1: "July 1 Battery Standard Countdown",
        news_desc_1: "Only 44 days until GB 38031-2025! The strictest battery safety standard ever is coming!",
        news_title_2: "4 New E-Bike Rules from May 1",
        news_desc_2: "Full-chain control upgrade! Must-read for 448 million e-bike owners!",
        news_title_3: "Major Brands Raise Prices by ¥300",
        news_desc_3: "Lithium prices doubled + mandatory safety features, full analysis!",
        news_title_4: "E-Bike Safety Buying Guide",
        news_desc_4: "Check CCC certification, avoid illegal mods, compliant models only!",
        btn_read_details: "Read Details",
        
        // 官方商城
        shop_section_title: "🛍️ Official Shop",
        shop_section_subtitle: "Premium accessories and genuine products, great value!",
        shop_card_title: "Premium Accessories",
        shop_card_desc: "Helmets, locks, lights, GPS trackers - genuine quality guaranteed",
        shop_tag_genuine: "Genuine",
        shop_tag_shipping: "Free Shipping",
        shop_tag_return: "7-Day Return",
        btn_enter_shop: "Enter Shop",
        
        // 升级改装指南按钮
        btn_view_details: "View Details",
        
        // 品牌对比结果
        compare_result_title: "📊 Comparison Results",
        data_label_models: "Main Models",
        data_label_price: "Price Range",
        data_label_range: "Range",
        data_label_highlight: "Highlights",
        data_label_score: "Overall Score",
        data_label_battery: "Battery",
        data_label_weight: "Weight",
        data_label_smart: "Smart Features",
        data_label_aftersale: "Warranty",
        btn_view_review: "View Review",
        alert_select_two: "Please select at least 2 brands to compare!",
        
        // 计算器结果
        calc_no_upgrade: "No upgrade needed",
        calc_yuan: "CNY",
        calc_km: "km",
        calc_speed_compliant: "≤25km/h (Compliant)"
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
