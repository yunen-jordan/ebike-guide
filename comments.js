/**
 * 评测文章评论系统
 * 基于 Supabase 用户认证 + 评论功能
 */

(function() {
    // 避免重复初始化
    if (window.CommentsInit) return;
    window.CommentsInit = true;

    // 加载 Supabase SDK
    var sbScript = document.createElement('script');
    sbScript.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    sbScript.onload = initComments;
    document.head.appendChild(sbScript);

    function initComments() {
        var config = window.SUPABASE_CONFIG;
        if (!config) {
            console.error('Supabase config not found');
            return;
        }

        var supabase = window.supabase.createClient(config.url, config.anonKey);

        // 获取当前页面ID（从URL或页面标题）
        var articleId = getArticleId();
        var currentUser = null;

        // ========== 首页登录面板切换 ==========
        window.toggleLoginPanel = function() {
            var panel = document.getElementById('loginPanel');
            if (panel) {
                panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
            }
        };

        // 点击外部关闭登录面板
        document.addEventListener('click', function(e) {
            var panel = document.getElementById('loginPanel');
            var card = document.getElementById('userLoginCard');
            if (panel && card && !card.contains(e.target)) {
                panel.style.display = 'none';
            }
        });

        // 首页登录功能
        window.homeSignUp = async function() {
            var email = document.getElementById('homeCommentEmail').value.trim();
            var password = document.getElementById('homeCommentPassword').value;

            if (!email || !password) {
                alert('请填写邮箱和密码');
                return;
            }

            var { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: { data: { nickname: email.split('@')[0] } }
            });

            if (error) {
                alert('注册失败: ' + error.message);
            } else {
                alert('注册成功！请查收验证邮件后登录');
            }
        };

        window.homeSignIn = async function() {
            var email = document.getElementById('homeCommentEmail').value.trim();
            var password = document.getElementById('homeCommentPassword').value;

            if (!email || !password) {
                alert('请填写邮箱和密码');
                return;
            }

            var { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                alert('登录失败: ' + error.message);
            } else {
                currentUser = data.user;
                updateHomeUserInfo();
                toggleLoginPanel();
            }
        };

        function updateHomeUserInfo() {
            var loginPrompt = document.getElementById('loginPrompt');
            var loginPanel = document.getElementById('loginPanel');
            var userInfo = document.getElementById('userInfo');

            if (!currentUser) {
                if (loginPrompt) loginPrompt.style.display = 'flex';
                if (loginPanel) loginPanel.style.display = 'none';
                if (userInfo) userInfo.style.display = 'none';
                return;
            }

            var meta = currentUser.user_metadata || {};
            var name = meta.nickname || currentUser.email.split('@')[0];
            var avatar = meta.avatar_url || 'https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(name);

            if (loginPrompt) loginPrompt.style.display = 'none';
            if (loginPanel) loginPanel.style.display = 'none';
            if (userInfo) {
                userInfo.style.display = 'flex';
                var avatarImg = document.getElementById('userAvatar');
                var nameSpan = document.getElementById('userName');
                if (avatarImg) avatarImg.src = avatar;
                if (nameSpan) nameSpan.textContent = name;
            }
        }

        // ========== 用户认证 ==========
        async function signUp() {
            var email = document.getElementById('commentEmail');
            var password = document.getElementById('commentPassword');
            var nickname = document.getElementById('commentNickname');
            if (!email || !password) return;

            email = email.value.trim();
            password = password.value;
            var nickVal = nickname ? nickname.value.trim() : '';

            if (!email || !password) {
                showMessage('请填写邮箱和密码', 'error');
                return;
            }

            var { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: { nickname: nickVal || email.split('@')[0] }
                }
            });

            if (error) {
                showMessage('注册失败: ' + error.message, 'error');
            } else {
                showMessage('注册成功！请查收验证邮件后登录', 'success');
                toggleAuthForm('login');
            }
        }

        async function signIn() {
            var email = document.getElementById('commentEmail');
            var password = document.getElementById('commentPassword');
            if (!email || !password) return;

            email = email.value.trim();
            password = password.value;

            if (!email || !password) {
                showMessage('请填写邮箱和密码', 'error');
                return;
            }

            var { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                showMessage('登录失败: ' + error.message, 'error');
            } else {
                currentUser = data.user;
                updateAuthUI();
                updateHomeUserInfo();
                showMessage('登录成功！', 'success');
                loadComments();
            }
        }

        async function signOut() {
            await supabase.auth.signOut();
            currentUser = null;
            updateAuthUI();
            updateHomeUserInfo();
            showMessage('已退出登录', 'info');
        }

        async function signInWithGithub() {
            var { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: window.location.href
                }
            });
            if (error) {
                showMessage('GitHub登录失败: ' + error.message, 'error');
            }
        }

        async function signInWithGoogle() {
            var { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.href
                }
            });
            if (error) {
                showMessage('Google登录失败: ' + error.message, 'error');
            }
        }

        // ========== 评论功能 ==========
        async function submitComment() {
            if (!currentUser) {
                showMessage('请先登录后发表评论', 'error');
                toggleAuthForm('login');
                return;
            }

            var content = document.getElementById('commentContent').value.trim();
            if (!content) {
                showMessage('评论内容不能为空', 'error');
                return;
            }

            if (content.length > 500) {
                showMessage('评论内容不能超过500字', 'error');
                return;
            }

            var userMeta = currentUser.user_metadata || {};
            var userName = userMeta.nickname || currentUser.email.split('@')[0];
            var avatar = userMeta.avatar_url || 'https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(userName);

            var { data, error } = await supabase
                .from('comments')
                .insert({
                    article_id: articleId,
                    user_id: currentUser.id,
                    user_name: userName,
                    user_avatar: avatar,
                    content: content
                })
                .select()
                .single();

            if (error) {
                showMessage('评论失败: ' + error.message, 'error');
            } else {
                document.getElementById('commentContent').value = '';
                showMessage('评论发布成功！', 'success');
                loadComments();
            }
        }

        async function loadComments() {
            var container = document.getElementById('commentsList');
            if (!container) return;

            container.innerHTML = '<div class="comment-loading"><i class="fas fa-spinner fa-spin"></i> 加载中...</div>';

            var { data, error } = await supabase
                .from('comments')
                .select('*')
                .eq('article_id', articleId)
                .order('created_at', { ascending: false });

            if (error) {
                container.innerHTML = '<div class="comment-error">评论加载失败，请刷新重试</div>';
                return;
            }

            if (!data || data.length === 0) {
                container.innerHTML = '<div class="comment-empty">暂无评论，来发表第一看法吧~</div>';
                updateCommentCount(0);
                return;
            }

            container.innerHTML = data.map(function(c) {
                return createCommentHTML(c);
            }).join('');
            updateCommentCount(data.length);
        }

        function createCommentHTML(comment) {
            var date = new Date(comment.created_at);
            var timeAgo = getTimeAgo(date);
            var isOwner = currentUser && currentUser.id === comment.user_id;

            return '<div class="comment-item" data-id="' + comment.id + '">' +
                '<img src="' + escapeHTML(comment.user_avatar) + '" alt="avatar" class="comment-avatar">' +
                '<div class="comment-body">' +
                    '<div class="comment-header">' +
                        '<span class="comment-author">' + escapeHTML(comment.user_name) + '</span>' +
                        '<span class="comment-time">' + timeAgo + '</span>' +
                    '</div>' +
                    '<div class="comment-content">' + escapeHTML(comment.content).replace(/\n/g, '<br>') + '</div>' +
                    '<div class="comment-actions">' +
                        '<button class="comment-action-btn" onclick="window.toggleReplyForm(\'' + comment.id + '\')">' +
                            '<i class="fas fa-reply"></i> 回复' +
                        '</button>' +
                        (isOwner ? '<button class="comment-action-btn delete" onclick="window.deleteComment(\'' + comment.id + '\')">' +
                            '<i class="fas fa-trash"></i> 删除' +
                        '</button>' : '') +
                    '</div>' +
                    '<div class="reply-form" id="reply-form-' + comment.id + '" style="display:none;">' +
                        '<textarea placeholder="写下你的回复..." id="reply-content-' + comment.id + '"></textarea>' +
                        '<button onclick="window.submitReply(\'' + comment.id + '\')">发布回复</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }

        async function deleteComment(commentId) {
            if (!confirm('确定要删除这条评论吗？')) return;

            var { error } = await supabase
                .from('comments')
                .delete()
                .eq('id', commentId);

            if (error) {
                showMessage('删除失败', 'error');
            } else {
                showMessage('评论已删除', 'success');
                loadComments();
            }
        }

        window.deleteComment = deleteComment;

        window.toggleReplyForm = function(commentId) {
            var form = document.getElementById('reply-form-' + commentId);
            if (form) {
                form.style.display = form.style.display === 'none' ? 'block' : 'none';
            }
        };

        window.submitReply = async function(commentId) {
            if (!currentUser) {
                showMessage('请先登录', 'error');
                return;
            }
            var content = document.getElementById('reply-content-' + commentId).value.trim();
            if (!content) {
                showMessage('回复内容不能为空', 'error');
                return;
            }
            // 简化的回复：作为评论发布
            var { error } = await supabase
                .from('comments')
                .insert({
                    article_id: articleId,
                    user_id: currentUser.id,
                    user_name: currentUser.user_metadata?.nickname || currentUser.email.split('@')[0],
                    user_avatar: currentUser.user_metadata?.avatar_url || '',
                    content: '↳ ' + content
                });
            if (error) {
                showMessage('回复失败', 'error');
            } else {
                showMessage('回复成功', 'success');
                loadComments();
            }
        };

        // ========== UI 更新 ==========
        function updateAuthUI() {
            var authSection = document.getElementById('commentAuth');
            var authForm = document.getElementById('commentForm');
            if (!authSection) return;

            if (currentUser) {
                var meta = currentUser.user_metadata || {};
                var name = meta.nickname || currentUser.email.split('@')[0];
                var avatar = meta.avatar_url || 'https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(name);
                authSection.innerHTML = 
                    '<div class="comment-user-info">' +
                        '<img src="' + avatar + '" alt="avatar">' +
                        '<span>' + escapeHTML(name) + '</span>' +
                        '<button onclick="window.commentsSignOut()" class="btn-logout">退出</button>' +
                    '</div>';
                if (authForm) authForm.style.display = 'block';
            } else {
                authSection.innerHTML = 
                    '<p class="comment-auth-tip">登录后即可发表评论</p>' +
                    '<div class="comment-auth-buttons">' +
                        '<button onclick="window.commentsSignInWithGithub()" class="btn-github"><i class="fab fa-github"></i> GitHub</button>' +
                        '<button onclick="window.commentsSignInWithGoogle()" class="btn-google"><i class="fab fa-google"></i> Google</button>' +
                        '<button onclick="window.commentsToggleAuthForm(\'login\')" class="btn-email">邮箱登录</button>' +
                    '</div>' +
                    '<div class="comment-auth-form" id="emailAuthForm" style="display:none;">' +
                        '<input type="email" id="commentEmail" placeholder="邮箱地址">' +
                        '<input type="password" id="commentPassword" placeholder="密码">' +
                        '<input type="text" id="commentNickname" placeholder="昵称（注册时填写）">' +
                        '<div class="auth-form-btns">' +
                            '<button onclick="window.commentsSignIn()" class="btn-primary">登录</button>' +
                            '<button onclick="window.commentsSignUp()" class="btn-secondary">注册</button>' +
                            '<button onclick="window.commentsToggleAuthForm(\'hide\')" class="btn-text">取消</button>' +
                        '</div>' +
                    '</div>';
                if (authForm) authForm.style.display = 'none';
            }
        }

        window.commentsSignOut = signOut;
        window.commentsSignInWithGithub = signInWithGithub;
        window.commentsSignInWithGoogle = signInWithGoogle;
        window.commentsSignUp = signUp;
        window.commentsSignIn = signIn;
        window.commentsToggleAuthForm = function(show) {
            var form = document.getElementById('emailAuthForm');
            if (form) form.style.display = show === 'hide' ? 'none' : (show === 'login' ? 'block' : 'none');
        };

        function toggleAuthForm(show) {
            var form = document.getElementById('emailAuthForm');
            if (form) form.style.display = show === 'hide' ? 'none' : 'block';
        }

        window.commentsSubmitComment = submitComment;
        window.toggleReplyForm = window.toggleReplyForm;
        window.submitReply = window.submitReply;

        // ========== 辅助函数 ==========
        function getArticleId() {
            var path = window.location.pathname;
            var filename = path.split('/').pop() || 'index';
            return filename.replace('.html', '');
        }

        function escapeHTML(str) {
            var div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }

        function getTimeAgo(date) {
            var seconds = Math.floor((new Date() - date) / 1000);
            if (seconds < 60) return '刚刚';
            var minutes = Math.floor(seconds / 60);
            if (minutes < 60) return minutes + '分钟前';
            var hours = Math.floor(minutes / 60);
            if (hours < 24) return hours + '小时前';
            var days = Math.floor(hours / 24);
            if (days < 30) return days + '天前';
            return date.toLocaleDateString('zh-CN');
        }

        function updateCommentCount(count) {
            var el = document.getElementById('commentCount');
            if (el) el.textContent = count;
        }

        function showMessage(text, type) {
            var existing = document.querySelector('.comment-message');
            if (existing) existing.remove();
            var msg = document.createElement('div');
            msg.className = 'comment-message ' + type;
            msg.innerHTML = text;
            document.querySelector('.comments-section').prepend(msg);
            setTimeout(function() { msg.remove(); }, 3000);
        }

        // ========== 初始化 ==========
        async function init() {
            // 检查登录状态
            var session = await supabase.auth.getSession();
            if (session.data.session) {
                currentUser = session.data.session.user;
            }

            // 监听登录状态变化
            supabase.auth.onAuthStateChange(function(event, session) {
                if (event === 'SIGNED_IN' && session) {
                    currentUser = session.user;
                    updateAuthUI();
                    updateHomeUserInfo();
                    loadComments();
                } else if (event === 'SIGNED_OUT') {
                    currentUser = null;
                    updateAuthUI();
                    updateHomeUserInfo();
                }
            });

            updateAuthUI();
            updateHomeUserInfo();
            loadComments();

            // 绑定提交按钮
            var submitBtn = document.getElementById('submitComment');
            if (submitBtn) {
                submitBtn.addEventListener('click', submitComment);
            }
        }

        init();
    }
})();
