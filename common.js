/* ===== 公共JavaScript - 所有页面共享 ===== */

// 移动端菜单切换
(function() {
    var btn = document.getElementById('mobileMenuBtn');
    var nav = document.getElementById('mainNav');
    if (btn && nav) {
        btn.addEventListener('click', function() {
            nav.classList.toggle('active');
            btn.classList.toggle('active');
        });
    }
})();

// 滚动时导航栏效果
(function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                header.style.background = '';
            }
        }
    });
})();

/* ===== AI 智能客服系统 ===== */
(function() {
    // 避免重复初始化
    if (document.getElementById('aiChatFab')) return;

    // ========== 知识库 ==========
    var knowledgeBase = [
        {
            keywords: ['新国标', '国标', '政策', '2026', '规定', '法规', '法律', '上牌'],
            answer: '📋 <b>2026年新国标核心要求：</b><br>' +
                '• 最高车速 ≤ 25km/h<br>' +
                '• 整车质量：铅酸车≤63kg，锂电车≤55kg<br>' +
                '• 电机功率 ≤ 400W<br>' +
                '• 不再强制安装脚踏骑行装置（新标变更）<br>' +
                '• 必须通过CCC认证<br>' +
                '• 蓄电池电压 ≤ 48V<br>' +
                '• 须具备北斗定位功能<br>' +
                '• 塑料件不超过整车5.5%<br><br>' +
                '<b>2026年4月新规：</b>载人限制放宽、加装限制放宽，便民不放任！<br><br>' +
                '购买前务必查验CCC认证，避免买到无法上牌的车。<a href="policy.html" target="_blank">查看详细政策解读 →</a>'
        },
        {
            keywords: ['推荐', '买什么', '选什么', '品牌', '哪个好', '性价比', '选购'],
            answer: '🏆 <b>2026年品牌推荐：</b><br><br>' +
                '<b>高端智能：</b>九号、小牛 — 智能化最强，适合追求科技感的用户<br>' +
                '<b>均衡之选：</b>雅迪、爱玛 — 销量最大，售后网点多，品质可靠<br>' +
                '<b>长续航：</b>台铃 — 云动力技术，续航可达300km<br>' +
                '<b>品质耐用：</b>绿源 — 液冷电机，6年质保<br>' +
                '<b>操控乐趣：</b>极核 — 摩企基因，操控出色<br>' +
                '<b>经济实惠：</b>小刀、凤凰 — 价格亲民，基本需求满足<br><br>' +
                '<a href="brands.html" target="_blank">查看详细品牌对比 →</a> | <a href="budget.html" target="_blank">预算推荐 →</a>'
        },
        {
            keywords: ['电池', '续航', '锂电', '铅酸', '充电', '换电池', '电池升级'],
            answer: '🔋 <b>电池选购与升级指南：</b><br><br>' +
                '<b>铅酸电池：</b>价格低(400-800元)，寿命1.5-2年，重量大，适合预算有限<br>' +
                '<b>锂电池：</b>价格高(1200-2500元)，寿命3-5年，轻量化，适合追求续航和轻便<br>' +
                '<b>石墨烯电池：</b>介于两者之间，雅迪主打技术<br><br>' +
                '<b>升级建议：</b><br>' +
                '• 48V12Ah铅酸 → 48V20Ah锂电：续航+20km，约1200元<br>' +
                '• 48V → 60V升级：续航+30km，需换控制器，约1500元<br>' +
                '⚠️ 注意：升级电压需确保符合新国标要求<br><br>' +
                '<a href="upgrade.html#battery" target="_blank">查看电池升级详情 →</a>'
        },
        {
            keywords: ['升级', '改装', '性能', '提速', '加速', '控制器', '优化'],
            answer: '⚡ <b>合法升级改装方案：</b><br><br>' +
                '<b>电池升级：</b>换大容量锂电，续航提升最明显<br>' +
                '<b>控制器优化：</b>智能控制器提升加速平顺性，约300元<br>' +
                '<b>轮胎升级：</b>防滑真空胎提升抓地力，约400元<br>' +
                '<b>刹车升级：</b>前后碟刹系统提升安全性，约500元<br>' +
                '<b>减震改进：</b>换装液压减震提升舒适度，约600元<br><br>' +
                '⚠️ <b>重要提醒：</b>解限速、改大功率电机等属于违法改装！新国标车速不得超过25km/h。<br><br>' +
                '<a href="upgrade.html" target="_blank">查看合法升级方案 →</a> | <a href="upgrade.html#safety" target="_blank">安全强化 →</a>'
        },
        {
            keywords: ['保养', '维护', '保养周期', '洗车', '轮胎', '刹车', '冬季'],
            answer: '🛠️ <b>电动车保养指南：</b><br><br>' +
                '<b>日常检查：</b><br>' +
                '• 轮胎气压：每月检查，保持适当气压<br>' +
                '• 刹车灵敏度：每周试刹，异响及时检修<br>' +
                '• 电池充电：避免过充过放，电量20%-80%最佳<br><br>' +
                '<b>季节性保养：</b><br>' +
                '• 🔥 夏季：避免暴晒充电，注意电池散热<br>' +
                '• ❄️ 冬季：续航会下降20-30%，属于正常现象<br>' +
                '• 🌧️ 雨天：避免深度涉水，及时擦干电路接口<br><br>' +
                '<a href="maintenance.html" target="_blank">查看完整保养指南 →</a>'
        },
        {
            keywords: ['价格', '多少钱', '预算', '费用', '费用', '成本'],
            answer: '💰 <b>2026年电动车价格参考：</b><br><br>' +
                '<b>1000-3000元：</b>基础款，铅酸电池，续航40-60km，学生党首选<br>' +
                '<b>3000-5000元：</b>中端款，锂电/石墨烯，续航60-100km，通勤神器<br>' +
                '<b>5000-8000元：</b>高端款，智能锂电，续航80-120km，科技感强<br>' +
                '<b>8000元以上：</b>旗舰款，顶配智能，续航100km+，极致体验<br><br>' +
                '<b>升级费用：</b>电池约800-2000元，控制器约300元，碟刹约500元<br><br>' +
                '<a href="budget.html" target="_blank">查看预算推荐 →</a>'
        },
        {
            keywords: ['九号', 'ninebot'],
            answer: '🥉 <b>九号电动车：</b><br><br>' +
                '<b>主力车型：</b>Fz1、Fz3、机械师系列<br>' +
                '<b>价格区间：</b>2999-15000元<br>' +
                '<b>续航：</b>60-110km<br>' +
                '<b>核心亮点：</b>凌波OS智能系统，鼹鼠控，北斗定位<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐⭐ 4.8分<br>' +
                '<b>2026新动态：</b>Q1销量跻身行业前三，Fz1首发价2999元<br><br>' +
                '九号智能化最强，APP功能丰富，适合追求科技感的年轻用户。<br><br>' +
                '<a href="review-jiuhao.html" target="_blank">查看九号深度评测 →</a>'
        },
        {
            keywords: ['雅迪', 'yadea'],
            answer: '🥈 <b>雅迪电动车：</b><br><br>' +
                '<b>主力车型：</b>冠能系列、星舰S80<br>' +
                '<b>价格区间：</b>1800-10000元（4月起涨价300元+）<br>' +
                '<b>续航：</b>60-150km<br>' +
                '<b>核心亮点：</b>石墨烯电池技术，3年质保，门店最多<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐⭐ 4.6分<br><br>' +
                '雅迪门店全国最密集，售后有保障。注意2026年4月起出厂价统一上调300元+。<br><br>' +
                '<a href="brands.html#yadi" target="_blank">查看详细对比 →</a>'
        },
        {
            keywords: ['小牛', 'niu'],
            answer: '<b>小牛电动车：</b><br><br>' +
                '<b>主力车型：</b>MT2026、U1 ONE、FXT系列<br>' +
                '<b>价格区间：</b>3499-10000元<br>' +
                '<b>续航：</b>50-110km<br>' +
                '<b>核心亮点：</b>AI全屏导航+TCS牵引力控制+宁德锂电<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐⭐ 4.7分<br><br>' +
                '小牛2026新推MT2026，配车规级AI全屏导航，权益价3499元起，续航最高110km。<br><br>' +
                '<a href="brands.html#xiaoniu" target="_blank">查看详细对比 →</a>'
        },
        {
            keywords: ['上牌', '牌照', '登记', '行驶证', '牌照流程'],
            answer: '📋 <b>电动车上牌流程：</b><br><br>' +
                '<b>所需材料：</b><br>' +
                '1. 身份证原件及复印件<br>' +
                '2. 购车发票<br>' +
                '3. 车辆合格证<br>' +
                '4. CCC认证证书<br>' +
                '5. 交强险保单<br><br>' +
                '<b>办理流程：</b><br>' +
                '1. 到车管所或指定上牌点<br>' +
                '2. 提交材料，填写申请表<br>' +
                '3. 车辆查验（查验车架号、电机号）<br>' +
                '4. 缴纳费用（一般50-100元）<br>' +
                '5. 领取号牌和行驶证<br><br>' +
                '⚠️ 新国标车必须通过CCC认证才能上牌！<br><br>' +
                '<a href="policy.html" target="_blank">查看新国标政策 →</a> | <a href="tips.html" target="_blank">查看上牌指南 →</a>'
        },
        {
            keywords: ['安全', '刹车', 'ABS', 'TCS', '防盗'],
            answer: '🛡️ <b>电动车安全指南：</b><br><br>' +
                '<b>刹车系统：</b><br>' +
                '• 鼓刹：成本低，基本够用<br>' +
                '• 碟刹：制动力强，推荐前碟后鼓或双碟刹<br><br>' +
                '<b>智能安全：</b><br>' +
                '• ABS防抱死：高端车型标配<br>' +
                '• TCS牵引力控制：防止打滑<br>' +
                '• GPS定位防盗：九号/小牛标配<br><br>' +
                '<b>日常安全：</b><br>' +
                '• 佩戴头盔（法律要求！）<br>' +
                '• 不闯红灯、不逆行<br>' +
                '• 夜间开启灯光<br><br>' +
                '<a href="upgrade.html#safety" target="_blank">查看安全强化方案 →</a>'
        },
        {
            keywords: ['充电', '充电器', '充电时间', '充多久'],
            answer: '🔌 <b>电动车充电指南：</b><br><br>' +
                '<b>充电时间参考：</b><br>' +
                '• 48V12Ah铅酸：6-8小时<br>' +
                '• 48V20Ah锂电：4-6小时<br>' +
                '• 60V20Ah锂电：5-7小时<br><br>' +
                '<b>充电注意事项：</b><br>' +
                '• 使用原装充电器<br>' +
                '• 避免过充（充满后及时拔掉）<br>' +
                '• 避免电量完全耗尽再充<br>' +
                '• 最佳电量范围：20%-80%<br>' +
                '• 避免高温/暴晒环境下充电<br>' +
                '• 充电时远离易燃物<br><br>' +
                '<a href="maintenance.html" target="_blank">查看完整保养指南 →</a>'
        },
        {
            keywords: ['台铃'],
            answer: '🛣️ <b>台铃电动车：</b><br><br>' +
                '<b>主力车型：</b>超能二代/领航者<br>' +
                '<b>价格区间：</b>2500-7000元<br>' +
                '<b>续航：</b>80-300km（云动力长续航）<br>' +
                '<b>核心亮点：</b>云动力技术，续航王者<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐☆ 4.4分<br><br>' +
                '台铃续航能力最强，适合长距离通勤用户。<br><br>' +
                '<a href="brands.html#tailing" target="_blank">查看详细对比 →</a>'
        },
        {
            keywords: ['绿源'],
            answer: '🔧 <b>绿源电动车：</b><br><br>' +
                '<b>主力车型：</b>液冷超模/S30<br>' +
                '<b>价格区间：</b>2500-6500元<br>' +
                '<b>续航：</b>60-120km<br>' +
                '<b>核心亮点：</b>液冷电机，6年超长质保<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐☆ 4.3分<br><br>' +
                '绿源6年质保行业最长，适合注重耐用性的用户。<br><br>' +
                '<a href="brands.html#luyuan" target="_blank">查看详细对比 →</a>'
        },
        {
            keywords: ['爱玛'],
            answer: '🥇 <b>爱玛电动车：</b><br><br>' +
                '<b>主力车型：</b>小金豆、Q5 TR、指挥官<br>' +
                '<b>价格区间：</b>1800-8000元（4月涨价200-300元）<br>' +
                '<b>续航：</b>50-100km<br>' +
                '<b>核心亮点：</b>Q1销量反超第一(240.7万台)+时尚设计<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐⭐ 4.5分<br><br>' +
                '爱玛2026年Q1强势反超，登顶销量第一！外观时尚，骑行舒适。<br><br>' +
                '<a href="brands.html#aima" target="_blank">查看详细对比 →</a>'
        },
        {
            keywords: ['极核'],
            answer: '🏁 <b>极核电动车：</b><br><br>' +
                '<b>主力车型：</b>EZ2i、AE8系列<br>' +
                '<b>价格区间：</b>3780-12000元<br>' +
                '<b>续航：</b>50-110km<br>' +
                '<b>核心亮点：</b>摩企基因，操控之王，EZ4权益价3780元起<br>' +
                '<b>综合评分：</b>⭐⭐⭐⭐☆ 4.5分<br><br>' +
                '极核出身春风动力，操控性能出色，适合追求驾驶乐趣的用户。<br><br>' +
                '<a href="brands.html#jihe" target="_blank">查看详细对比 →</a>'
        }
    ];

    // 默认回复
    var defaultReply = '🤔 这个问题我还在学习中...<br><br>你可以试试问我以下话题：<br>' +
        '• 新国标政策解读<br>' +
        '• 品牌选购推荐<br>' +
        '• 电池与续航<br>' +
        '• 升级改装方案<br>' +
        '• 保养维护指南<br>' +
        '• 价格预算推荐<br><br>' +
        '或者直接点击下方快捷按钮提问！😊';

    // 匹配答案
    function getAnswer(input) {
        var text = input.toLowerCase().replace(/[？?！!。，,\s]/g, '');
        var bestMatch = null;
        var bestScore = 0;

        for (var i = 0; i < knowledgeBase.length; i++) {
            var entry = knowledgeBase[i];
            var score = 0;
            for (var j = 0; j < entry.keywords.length; j++) {
                if (text.indexOf(entry.keywords[j]) !== -1) {
                    score += entry.keywords[j].length;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry;
            }
        }

        return bestScore > 0 ? bestMatch.answer : defaultReply;
    }

    // ========== 创建 DOM ==========
    // 浮动按钮
    var fab = document.createElement('button');
    fab.id = 'aiChatFab';
    fab.className = 'ai-chat-fab';
    fab.setAttribute('aria-label', 'AI智能客服');
    fab.innerHTML = '<i class="fas fa-robot"></i>';

    // 聊天窗口
    var chatWin = document.createElement('div');
    chatWin.id = 'aiChatWindow';
    chatWin.className = 'ai-chat-window';
    chatWin.innerHTML =
        '<div class="ai-chat-header">' +
            '<div class="ai-chat-avatar">🤖</div>' +
            '<div class="ai-chat-header-info">' +
                '<h4>电动车AI助手</h4>' +
                '<p id="aiModeIndicator">在线 · 检测AI服务中...</p>' +
            '</div>' +
        '</div>' +
        '<div class="ai-chat-messages" id="aiChatMessages"></div>' +
        '<div class="ai-quick-questions" id="aiQuickQuestions">' +
            '<button class="ai-quick-btn" data-q="新国标有哪些要求？">📋 新国标</button>' +
            '<button class="ai-quick-btn" data-q="哪个品牌值得买？">🏆 品牌推荐</button>' +
            '<button class="ai-quick-btn" data-q="电池怎么选？">🔋 电池续航</button>' +
            '<button class="ai-quick-btn" data-q="怎么合法升级？">⚡ 升级改装</button>' +
            '<button class="ai-quick-btn" data-q="3000元预算买什么？">💰 预算推荐</button>' +
            '<button class="ai-quick-btn" data-q="怎么保养维护？">🛠️ 保养指南</button>' +
        '</div>' +
        '<div class="ai-chat-input">' +
            '<input type="text" id="aiChatInput" placeholder="输入你的问题..." autocomplete="off">' +
            '<button class="ai-chat-send" id="aiChatSend" aria-label="发送">' +
                '<i class="fas fa-paper-plane"></i>' +
            '</button>' +
        '</div>';

    document.body.appendChild(fab);
    document.body.appendChild(chatWin);

    var messagesEl = document.getElementById('aiChatMessages');
    var inputEl = document.getElementById('aiChatInput');

    // ========== 功能逻辑 ==========

    // 检测 DeepSeek API 是否可用
    var aiMode = 'unknown'; // 'deepseek', 'local', 'unknown'

    // API Key 简单混淆存储（非明文，增加抓取难度）
    var _k = [115,107,45,57,98,53,54,54,99,101,48,54,48,49,50,52,100,52,54,98,97,101,97,50,48,102,49,51,51,55,50,54,50,54,98];
    function _dk(){return _k.map(function(c){return String.fromCharCode(c)}).join('');}

    // 频率限制：每分钟最多8次
    var _callTimes = [];
    function _rateOk() {
        var now = Date.now();
        _callTimes = _callTimes.filter(function(t){ return now - t < 60000; });
        if (_callTimes.length >= 8) return false;
        _callTimes.push(now);
        return true;
    }

    function detectAIMode() {
        if (!_rateOk()) { aiMode = 'local'; updateModeIndicator(); return; }
        callDeepSeekAPI('你好').then(function() {
            aiMode = 'deepseek';
            updateModeIndicator();
        }).catch(function() {
            aiMode = 'local';
            updateModeIndicator();
        });
    }

    function updateModeIndicator() {
        var indicator = document.getElementById('aiModeIndicator');
        if (indicator) {
            if (aiMode === 'deepseek') {
                indicator.innerHTML = '在线 · DeepSeek AI 驱动';
                indicator.style.color = '#00ffaa';
            } else {
                indicator.innerHTML = '在线 · 本地知识库模式';
                indicator.style.color = '';
            }
        }
    }

    // 开关聊天窗口
    fab.addEventListener('click', function() {
        var isOpen = chatWin.classList.toggle('open');
        fab.classList.toggle('active');
        if (isOpen && messagesEl.children.length === 0) {
            detectAIMode();
            var welcome = '👋 你好！我是<strong>电动车AI助手</strong>，专注电动车选购、升级、保养等领域的智能问答。<br><br>';
            welcome += '🤖 当前由 <b>DeepSeek AI</b> 驱动，支持自然语言理解与多轮对话。<br>';
            welcome += '💡 如AI服务不可用，将自动切换到本地知识库模式。<br><br>';
            welcome += '你可以直接输入问题，或者点击下方快捷按钮快速提问！🚀';
            addBotMessage(welcome);
        }
        if (isOpen) {
            setTimeout(function() { inputEl.focus(); }, 400);
        }
    });

    // 添加机器人消息
    function addBotMessage(html) {
        var div = document.createElement('div');
        div.className = 'ai-msg bot';
        div.innerHTML = html;
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    // 添加用户消息
    function addUserMessage(text) {
        var div = document.createElement('div');
        div.className = 'ai-msg user';
        div.textContent = text;
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    // 显示正在输入
    function showTyping() {
        var div = document.createElement('div');
        div.className = 'ai-msg bot';
        div.id = 'aiTypingIndicator';
        div.innerHTML = '<div class="ai-typing"><span></span><span></span><span></span></div>';
        messagesEl.appendChild(div);
        scrollToBottom();
    }

    function removeTyping() {
        var el = document.getElementById('aiTypingIndicator');
        if (el) el.remove();
    }

    function scrollToBottom() {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // 对话历史（用于 DeepSeek API 多轮对话）
    var chatHistory = [];

    // 发送消息
    function sendMessage() {
        var text = inputEl.value.trim();
        if (!text) return;

        addUserMessage(text);
        inputEl.value = '';

        showTyping();

        // 优先尝试 DeepSeek API
        callDeepSeekAPI(text).then(function(reply) {
            removeTyping();
            addBotMessage(reply);
        }).catch(function() {
            // API 失败，回退到本地知识库
            removeTyping();
            var answer = getAnswer(text);
            addBotMessage(answer);
        });
    }

    // 调用 DeepSeek API（前端直连）
    function callDeepSeekAPI(userMessage) {
        return new Promise(function(resolve, reject) {
            if (!_rateOk()) {
                reject('rate_limit');
                return;
            }

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.deepseek.com/chat/completions', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer ' + _dk());
            xhr.timeout = 30000;

            // 构建消息列表
            var messages = [
                { role: 'system', content: '你是"电动车AI助手"，专注中国电动自行车领域。回答要求：1)中文回答，简洁专业 2)适当使用emoji 3)品牌对比给出客观建议 4)绝不推荐违法改装 5)超领域问题礼貌引导回电动车话题 6)使用HTML标签格式化（<br>换行，<b>加粗），不用markdown' }
            ];
            // 加入对话历史
            for (var i = 0; i < chatHistory.length; i++) {
                messages.push(chatHistory[i]);
            }
            messages.push({ role: 'user', content: userMessage });

            xhr.onload = function() {
                if (xhr.status === 200) {
                    try {
                        var data = JSON.parse(xhr.responseText);
                        if (data.choices && data.choices[0] && data.choices[0].message) {
                            var reply = data.choices[0].message.content;
                            // 保存到对话历史
                            chatHistory.push({ role: 'user', content: userMessage });
                            chatHistory.push({ role: 'assistant', content: reply });
                            if (chatHistory.length > 20) {
                                chatHistory = chatHistory.slice(-20);
                            }
                            resolve(formatReply(reply));
                            return;
                        }
                    } catch (e) {}
                }
                reject('API error ' + xhr.status);
            };

            xhr.onerror = function() { reject('Network error'); };
            xhr.ontimeout = function() { reject('Timeout'); };

            xhr.send(JSON.stringify({
                model: 'deepseek-chat',
                messages: messages,
                max_tokens: 1024,
                temperature: 0.7
            }));
        });
    }

    // 格式化 AI 回复（简单 markdown → HTML）
    function formatReply(text) {
        var html = text
            // 代码块
            .replace(/```[\s\S]*?```/g, function(m) {
                return '<code>' + m.replace(/```\w*\n?/g, '').replace(/```/g, '') + '</code>';
            })
            // 行内代码
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // 加粗
            .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
            // 换行
            .replace(/\n/g, '<br>');
        return html;
    }

    // 发送按钮
    document.getElementById('aiChatSend').addEventListener('click', sendMessage);

    // 回车发送
    inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    // 快捷问题按钮
    document.querySelectorAll('.ai-quick-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var q = this.getAttribute('data-q');
            inputEl.value = q;
            sendMessage();
        });
    });

    // 点击外部关闭（可选）
    document.addEventListener('click', function(e) {
        if (!chatWin.contains(e.target) && !fab.contains(e.target)) {
            // 不自动关闭，让用户手动控制
        }
    });

    // ESC 关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatWin.classList.contains('open')) {
            chatWin.classList.remove('open');
            fab.classList.remove('active');
        }
    });
})();
