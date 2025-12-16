// --- КОНСТАНТЫ И КЛЮЧИ ДАННЫХ ---
const postsFeed = document.getElementById('posts-feed');
const POSTS_KEY = 'tornadoHunterPosts'; 
const USERS_KEY = 'tornadoHunterUsers'; 
const CURRENT_USER_KEY = 'tornadoHunterCurrentUser'; 
const BIO_KEY_PREFIX = 'tornadoHunterBio_'; 
const LANG_KEY = 'tornadoHunterLanguage';
const CHATS_KEY = 'tornadoHunterChats'; // НОВАЯ КОНСТАНТА ДЛЯ ЧАТОВ

// Глобальный объект для хранения всех строк перевода
const texts = {
    ru: {
        title: 'StormChasersForum | Сообщество Охотников за Штормами',
        tagline: 'Ваше сообщество по отслеживанию погоды и погоням за штормами.',
        login_title: 'Вход',
        register_title: 'Регистрация',
        nickname_ph: 'Ваш Никнейм',
        password_ph: 'Пароль',
        login_button: 'Войти',
        register_button: 'Зарегистрироваться',
        logout_button: 'Выйти',
        nav_feed: 'Лента',
        nav_messages: '💬 Сообщения', // НОВЫЙ ПЕРЕВОД
        nav_profile: 'Мой Профиль',
        nav_rules: 'Правила',
        welcome: 'Добро пожаловать',
        logged_in_as: 'Вы вошли как',
        post_form_title: '⚡️ Создать новый отчет',
        media_ph: 'Ссылка на фото/видео (URL) или оставьте пустым',
        content_ph: 'Опишите свою погоню (где, когда, класс торнадо)',
        publish_button: 'Опубликовать отчет',
        feed_title: 'Лента сообщества',
        profile_title_1: '⭐ Профиль',
        posts_count: 'Постов',
        likes_count: 'Лайков',
        member_since: 'На сайте с',
        bio_editor_title: '✍️ Обо мне',
        bio_ph: 'Расскажите о себе, своем любимом снаряжении или самой запоминающейся погоне.',
        save_button: 'Сохранить информацию',
        rules_main_title: '📜 Основные Правила Сообщества',
        rule_1_p: '**Уважение:** Всегда будьте вежливы к другим участникам, независимо от их опыта.',
        rule_2_p: '**Релевантность:** Публикуйте только контент, связанный с охотой на штормы, метеорологией и опасными погодными явлениями.',
        rule_3_p: '**Безопасность:** Не публикуйте контент, который пропагандирует опасное поведение или нарушение закона.',
        media_guide_title: '📸 Инструкция: Публикация медиа',
        media_guide_p1: 'Используйте прямую ссылку (URL) на изображение или видео для публикации:',
        media_guide_step1: 'Найдите медиафайл и **скопируйте прямую ссылку** (URL).',
        media_guide_step2: 'Вставьте ссылку в поле **"Ссылка на фото/видео"** в форме публикации.',
        back_to_feed: 'Вернуться в Ленту',
        footer_copy: '&copy; 2025 StormChasersForum. Сделано с ⚡️.',
        
        // ЧАТЫ
        chats_title: '💬 Диалоги',
        msg_no_chats: 'Пока нет активных чатов.',
        msg_select_chat: 'Выберите собеседника...',
        msg_chat_input_ph: 'Написать сообщение...',
        
        // Интерактивные сообщения
        msg_reg_exists: 'Пользователь с таким никнеймом уже существует!',
        msg_reg_success: (nickname) => `Регистрация успешна! Теперь Вы можете войти как ${nickname}.`,
        msg_login_welcome: (nickname) => `Добро пожаловать, ${nickname}!`,
        msg_login_fail: 'Неверный никнейм или пароль!',
        msg_logout: 'Вы вышли из системы.',
        msg_post_fail: 'Ошибка авторизации. Попробуйте войти снова.',
        msg_content_req: 'Пожалуйста, добавьте описание к вашему отчету.',
        msg_post_success: (nickname) => `Ваш отчет от ${nickname} опубликован!`,
        msg_bio_saved: 'Информация сохранена!',
        msg_profile_unknown: 'Неизвестно',
        msg_post_empty: 'Пока нет постов. Будьте первым!',
        msg_delete_confirm: (name) => `Вы уверены, что хотите удалить пост от "${name}"?`,
        msg_delete_fail: 'У Вас нет прав на удаление этого поста.',
        msg_no_bio: 'Пользователь пока ничего о себе не рассказал.',
        msg_like: 'Нравится',
        msg_unlike: 'Нравится',
        msg_report_by: 'Отчет от',
        msg_you: '(Вы)',
        msg_published: 'Опубликовано',
        msg_delete: 'Удалить',
        msg_toggle_comments: 'Показать/Скрыть комментарии',
        msg_comment_count: (count) => `Комментариев: ${count}`,
        msg_comment_input_ph: 'Напишите комментарий...',
        msg_comment_button: 'Комментировать',
        lang_ru_short: 'EN',
    },
    en: {
        title: 'StormChasersForum | Storm Chasers Community',
        tagline: 'Your community for weather tracking and storm chasing.',
        login_title: 'Login',
        register_title: 'Register',
        nickname_ph: 'Your Nickname',
        password_ph: 'Password',
        login_button: 'Login',
        register_button: 'Register',
        logout_button: 'Logout',
        nav_feed: 'Feed',
        nav_messages: '💬 Messages', // НОВЫЙ ПЕРЕВОД
        nav_profile: 'My Profile',
        nav_rules: 'Rules',
        welcome: 'Welcome',
        logged_in_as: 'Logged in as',
        post_form_title: '⚡️ Create New Report',
        media_ph: 'Link to photo/video (URL) or leave empty',
        content_ph: 'Describe your chase (where, when, tornado class)',
        publish_button: 'Publish Report',
        feed_title: 'Community Feed',
        profile_title_1: '⭐ Profile',
        posts_count: 'Posts',
        likes_count: 'Likes',
        member_since: 'Member since',
        bio_editor_title: '✍️ About Me',
        bio_ph: 'Tell us about yourself, your gear, or your most memorable chase.',
        save_button: 'Save Info',
        rules_main_title: '📜 Community Main Rules',
        rule_1_p: '**Respect:** Always be polite to other members, regardless of their experience.',
        rule_2_p: '**Relevance:** Only post content related to storm chasing, meteorology, and severe weather.',
        rule_3_p: '**Safety:** Do not post content that promotes dangerous behavior or law violation.',
        media_guide_title: '📸 Guide: Posting Media',
        media_guide_p1: 'Use a direct link (URL) to an image or video for posting:',
        media_guide_step1: 'Find the media file and **copy the direct link** (URL).',
        media_guide_step2: 'Paste the link into the **"Link to photo/video"** field in the publish form.',
        back_to_feed: 'Back to Feed',
        footer_copy: '&copy; 2025 StormChasersForum. Made with ⚡️.',

        // ЧАТЫ
        chats_title: '💬 Dialogs',
        msg_no_chats: 'No active chats yet.',
        msg_select_chat: 'Select a user...',
        msg_chat_input_ph: 'Write a message...',

        // Интерактивные сообщения
        msg_reg_exists: 'A user with this nickname already exists!',
        msg_reg_success: (nickname) => `Registration successful! You can now log in as ${nickname}.`,
        msg_login_welcome: (nickname) => `Welcome, ${nickname}!`,
        msg_login_fail: 'Incorrect nickname or password!',
        msg_logout: 'You have logged out.',
        msg_post_fail: 'Authorization error. Please try logging in again.',
        msg_content_req: 'Please add a description to your report.',
        msg_post_success: (nickname) => `Your report from ${nickname} has been published!`,
        msg_bio_saved: 'Information saved!',
        msg_profile_unknown: 'Unknown',
        msg_post_empty: 'No posts yet. Be the first!',
        msg_delete_confirm: (name) => `Are you sure you want to delete the post by "${name}"?`,
        msg_delete_fail: 'You do not have permission to delete this post.',
        msg_no_bio: 'The user has not shared any information yet.',
        msg_like: 'Like',
        msg_unlike: 'Like',
        msg_report_by: 'Report by',
        msg_you: '(You)',
        msg_published: 'Published',
        msg_delete: 'Delete',
        msg_toggle_comments: 'Show/Hide Comments',
        msg_comment_count: (count) => `Comments: ${count}`,
        msg_comment_input_ph: 'Write a comment...',
        msg_comment_button: 'Comment',
        lang_ru_short: 'RU',
    }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'ru';


// --- ФУНКЦИИ УПРАВЛЕНИЯ ЯЗЫКОМ (i18n) ---

/** Применяет перевод ко всем элементам с атрибутом data-i18n */
function translatePage(lang) {
    const translation = texts[lang];
    if (!translation) return;

    // Перевод статических элементов
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (typeof translation[key] === 'string') {
            el.innerHTML = translation[key];
        }
    });

    // Перевод плейсхолдеров
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (typeof translation[key] === 'string') {
            el.setAttribute('placeholder', translation[key]);
        }
    });

    // Перевод заголовка
    document.title = translation.title;
    
    // Обновление кнопок языка
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.textContent = lang === 'ru' ? 'EN' : 'RU';
    });
}

/** Переключает язык между 'ru' и 'en' */
function switchLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem(LANG_KEY, currentLang);
    translatePage(currentLang);
    renderPosts(); // Перерисовываем посты, чтобы обновить текст в них
    updateContextualText(loadUserSession());
    // Обновляем список чатов
    if (document.getElementById('messages-scene').style.display === 'block') {
         renderChatList();
    }
}

/** Обновляет контекстуальный текст в заголовках (например, "Обо мне") */
function updateContextualText(nickname) {
    const lang = currentLang;
    const currentSessionUser = loadUserSession();
    const isCurrentUser = nickname === currentSessionUser;
    
    // Обновление заголовка биографии
    const bioTitleEl = document.getElementById('bio-editor-title');
    const saveBtnEl = document.getElementById('save-bio-btn');
    const bioTextareaEl = document.getElementById('profile-bio');

    if (bioTitleEl) {
        if (isCurrentUser) {
            bioTitleEl.innerHTML = lang === 'ru' ? '✍️ Обо мне (Редактировать)' : '✍️ About Me (Edit)';
            if (saveBtnEl) saveBtnEl.style.display = 'block';
            if (bioTextareaEl) bioTextareaEl.disabled = false;
        } else {
            bioTitleEl.innerHTML = lang === 'ru' ? `✍️ О пользователе (${nickname})` : `✍️ About User (${nickname})`;
            if (saveBtnEl) saveBtnEl.style.display = 'none';
            if (bioTextareaEl) bioTextareaEl.disabled = true; // Запрещаем редактирование чужого профиля
        }
    }
}

// --- ФУНКЦИИ УПРАВЛЕНИЯ ДАННЫМИ (LocalStorage) ---

function loadPosts() {
    const savedPosts = localStorage.getItem(POSTS_KEY);
    const posts = savedPosts ? JSON.parse(savedPosts) : [];
    // Гарантируем, что у каждого поста есть поля 'likedBy' и 'comments'
    return posts.map(post => ({
        ...post,
        likedBy: post.likedBy || [],
        comments: post.comments || []
    }));
}

function savePosts(postsArray) {
    localStorage.setItem(POSTS_KEY, JSON.stringify(postsArray));
}

function loadUsers() {
    const savedUsers = localStorage.getItem(USERS_KEY);
    return savedUsers ? JSON.parse(savedUsers) : {}; 
}

function loadUserSession() {
    return localStorage.getItem(CURRENT_USER_KEY);
}

function saveUserSession(nickname) {
    localStorage.setItem(CURRENT_USER_KEY, nickname);
}

function loadBio(nickname) {
    return localStorage.getItem(BIO_KEY_PREFIX + nickname) || '';
}

function loadDisplayName(nickname) {
    const users = loadUsers();
    return users[nickname]?.displayName || nickname;
}


// --- ФУНКЦИИ УПРАВЛЕНИЯ ЧАТАМИ (НОВЫЙ БЛОК) ---

let activeChatPartner = null;

function loadChats() {
    const savedChats = localStorage.getItem(CHATS_KEY);
    return savedChats ? JSON.parse(savedChats) : {}; 
}

function saveChats(chatsObject) {
    localStorage.setItem(CHATS_KEY, JSON.stringify(chatsObject));
}

function getDialogKey(user1, user2) {
    // Гарантируем одинаковый ключ для диалога независимо от порядка пользователей
    return [user1, user2].sort().join('-');
}

function formatTimeAgo(date, lang) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const t = texts[lang];

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) {
        return date.toLocaleDateString(lang);
    } else if (days > 0) {
        return lang === 'ru' ? `${days} д. назад` : `${days} d. ago`;
    } else if (hours > 0) {
        return lang === 'ru' ? `${hours} ч. назад` : `${hours} h. ago`;
    } else if (minutes > 0) {
        return lang === 'ru' ? `${minutes} мин. назад` : `${minutes} m. ago`;
    } else {
        return lang === 'ru' ? 'только что' : 'just now';
    }
}

function renderChatList() {
    const currentNickname = loadUserSession();
    if (!currentNickname) return;

    const chats = loadChats();
    const chatList = document.getElementById('chat-list');
    
    const t = texts[currentLang];
    chatList.innerHTML = `<h3 data-i18n="chats_title">${t.chats_title}</h3>`;
    
    let hasChats = false;

    const dialogKeys = Object.keys(chats).filter(key => key.includes(currentNickname));

    dialogKeys.forEach(key => {
        hasChats = true;
        const participants = key.split('-');
        const partnerNickname = participants.find(n => n !== currentNickname);
        
        // Используем никнейм как отображаемое имя, если нет другого механизма
        const partnerDisplayName = partnerNickname; 

        const activeClass = (partnerNickname === activeChatPartner) ? 'active' : '';

        const dialogItem = document.createElement('div');
        dialogItem.className = `chat-dialog-item ${activeClass}`;
        dialogItem.textContent = partnerDisplayName;
        dialogItem.setAttribute('data-partner', partnerNickname);

        dialogItem.addEventListener('click', () => {
            setActiveChat(partnerNickname);
        });

        chatList.appendChild(dialogItem);
    });

    if (!hasChats) {
        chatList.innerHTML += `<p class="text-muted">${t.msg_no_chats}</p>`;
    }
}

function setActiveChat(partnerNickname) {
    activeChatPartner = partnerNickname;
    const currentNickname = loadUserSession();
    const partnerDisplayName = partnerNickname;
    
    // Обновляем заголовок
    document.getElementById('chat-header').textContent = `${texts[currentLang].chats_title.replace('💬', '')} с ${partnerDisplayName}`;

    // Активируем форму ввода
    document.getElementById('chat-input').disabled = false;
    document.getElementById('send-chat-btn').disabled = false;
    
    // Снимаем активность со всех диалогов и ставим на текущий
    document.querySelectorAll('.chat-dialog-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.chat-dialog-item[data-partner="${partnerNickname}"]`)?.classList.add('active');

    // Рендерим сообщения
    const dialogKey = getDialogKey(currentNickname, partnerNickname);
    const chats = loadChats();
    const messages = chats[dialogKey] || [];
    const messagesArea = document.getElementById('chat-messages-area');
    messagesArea.innerHTML = '';

    messages.forEach(msg => {
        const isSent = msg.sender === currentNickname;
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${isSent ? 'chat-message-sent' : 'chat-message-received'}`;
        
        const timestamp = formatTimeAgo(new Date(msg.timestamp), currentLang);

        msgDiv.innerHTML = `${msg.text} <span class="chat-timestamp">${timestamp}</span>`;
        messagesArea.appendChild(msgDiv);
    });

    // Прокрутка вниз
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function sendChatMessage(messageText, receiverNickname) {
    const senderNickname = loadUserSession();
    if (!senderNickname || !receiverNickname || !messageText.trim()) return;

    const dialogKey = getDialogKey(senderNickname, receiverNickname);
    const chats = loadChats();

    if (!chats[dialogKey]) chats[dialogKey] = [];

    const newMessage = {
        sender: senderNickname,
        text: messageText.trim(),
        timestamp: new Date().toISOString()
    };

    chats[dialogKey].push(newMessage);
    saveChats(chats);
    
    // Обновляем активный чат и список
    renderChatList();
    setActiveChat(receiverNickname);
}


// --- ФУНКЦИИ ОТОБРАЖЕНИЯ И ПЕРЕКЛЮЧЕНИЯ СЦЕН ---

function toggleScenes(showSceneId, targetNickname = null) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.style.display = 'none';
    });
    document.getElementById(showSceneId).style.display = 'block';
    
    // Обновляем активную кнопку в навигации
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetKey = showSceneId.replace('-scene', '');
    document.querySelectorAll(`.nav-btn[data-target="${targetKey}"]`).forEach(btn => btn.classList.add('active'));


    const currentNickname = loadUserSession();

    if (showSceneId === 'profile-scene') {
        const targetUser = targetNickname || currentNickname;
        loadProfile(targetUser); 
    } else if (showSceneId === 'main-scene') {
        document.getElementById('display-nickname').textContent = currentNickname;
        renderPosts();
    } else if (showSceneId === 'rules-scene') {
        document.getElementById('rules-nickname').textContent = currentNickname;
    } else if (showSceneId === 'messages-scene') { // ОБРАБОТКА НОВОЙ СЦЕНЫ
        document.getElementById('messages-nickname').textContent = currentNickname;
        renderChatList();
        if (targetNickname) {
             setActiveChat(targetNickname);
        } else {
             // Сброс активного чата при входе, если не указан собеседник
             activeChatPartner = null;
             document.getElementById('chat-header').textContent = texts[currentLang].msg_select_chat;
             document.getElementById('chat-messages-area').innerHTML = '';
             document.getElementById('chat-input').disabled = true;
             document.getElementById('send-chat-btn').disabled = true;
        }
    }
}


/**
 * Создает HTML-элемент для одного поста, включая комментарии.
 */
function createPostElement(postData, index, currentNickname) { 
    const t = texts[currentLang]; 
    const mediaUrl = postData.media || "https://via.placeholder.com/760x300?text=Нет+ссылки+на+фото"; 
    const canDelete = postData.name === currentNickname; 
    const authorName = postData.name;
    const isLiked = postData.likedBy.includes(currentNickname);
    const likeCount = postData.likedBy.length;
    const commentCount = postData.comments.length;
    const likeBtnClass = isLiked ? 'primary-btn liked' : 'secondary-btn';

    let mediaTag;

    // Простая проверка URL на наличие расширения .mp4 (неполная, но работает для прототипа)
    if (mediaUrl.endsWith('.mp4') || mediaUrl.includes('youtube.com') || mediaUrl.includes('vimeo.com')) {
        mediaTag = `<video controls class="media-preview" src="${mediaUrl}">${t.msg_video_unsupported || 'Ваш браузер не поддерживает видео.'}</video>`;
    } else {
        mediaTag = `<img src="${mediaUrl}" alt="${t.msg_media_content || 'Медиа контент'}" class="media-preview">`;
    }

    // --- ФОРМИРОВАНИЕ КОММЕНТАРИЕВ ---
    const commentsHtml = postData.comments.map(comment => `
        <div class="comment">
            <span class="comment-author" data-nickname="${comment.user}">${comment.user}:</span> 
            ${comment.text}
            <span class="comment-date">(${formatTimeAgo(new Date(comment.date), currentLang)})</span>
        </div>
    `).join('');

    // --- ШАБЛОН ПОСТА ---
    return `
        <article class="chase-report" data-index="${index}">
            
            <h3 class="author-link" data-nickname="${authorName}">
                ⚡️ ${t.msg_report_by} ${authorName} ${canDelete ? t.msg_you : ''}
            </h3>
            
            ${mediaTag}

            <p>${postData.content}</p>
            
            <div class="post-actions">
                <button class="btn ${likeBtnClass} like-btn" data-index="${index}">
                    ${isLiked ? '❤️' : '🤍'} ${t.msg_like} (${likeCount})
                </button>

                <button class="comment-toggle-btn" data-index="${index}">
                    ${t.msg_toggle_comments} (${commentCount})
                </button>
                
                ${canDelete ? 
                    `<button class="btn secondary-btn delete-btn" data-index="${index}">
                        ${t.msg_delete}
                    </button>` 
                    : ''
                }
            </div>
            
            <small>${t.msg_published}: ${formatTimeAgo(new Date(postData.date), currentLang)}</small>

            <div class="comments-section" id="comments-section-${index}" style="display: none;">
                <div class="comment-list">
                    ${commentCount > 0 ? commentsHtml : `<p style="color:var(--info-color);">${t.msg_comment_empty || (currentLang === 'ru' ? 'Нет комментариев.' : 'No comments yet.')}</p>`}
                </div>

                <form class="comment-form" data-index="${index}">
                    <textarea data-index="${index}" placeholder="${t.msg_comment_input_ph}" required></textarea>
                    <button type="submit" class="btn primary-btn" style="padding: 5px 10px; margin-top: 5px;">
                        ${t.msg_comment_button}
                    </button>
                </form>
            </div>
        </article>
    `;
}

function renderPosts() {
    const posts = loadPosts();
    const currentNickname = loadUserSession(); 
    document.getElementById('display-nickname').textContent = currentNickname; 
    postsFeed.innerHTML = ''; 
    const t = texts[currentLang];
    
    // Отображаем посты в обратном порядке (самые новые сверху)
    posts.slice().reverse().forEach((post, i) => {
        const originalIndex = posts.length - 1 - i; 
        postsFeed.insertAdjacentHTML('beforeend', createPostElement(post, originalIndex, currentNickname)); 
    });

    if (posts.length === 0) {
        postsFeed.innerHTML = `<p style="text-align: center; color: #95a5a6; grid-column: 1 / -1;">${t.msg_post_empty}</p>`;
    }

     // Добавляем слушатели к новым элементам
    document.querySelectorAll('.author-link, .comment-author').forEach(el => {
        el.addEventListener('click', function() {
            const nickname = this.getAttribute('data-nickname');
            toggleScenes('profile-scene', nickname); // Открываем профиль
        });
    });
}

/** * Загружает и отображает профиль.
 * @param {string} nickname - Никнейм пользователя для отображения.
 */
function loadProfile(nickname) {
    const currentNickname = loadUserSession();
    const isCurrentUser = nickname === currentNickname;
    const t = texts[currentLang];

    // 1. Статистика
    const allPosts = loadPosts();
    const userPosts = allPosts.filter(p => p.name === nickname);
    const postCount = userPosts.length;
    const totalLikes = userPosts.reduce((sum, post) => sum + post.likedBy.length, 0);
    const userDetails = loadUsers()[nickname] || {};
    
    document.getElementById('post-count').textContent = postCount;
    document.getElementById('like-count').textContent = totalLikes;
    document.getElementById('reg-date').textContent = userDetails.regDate || t.msg_profile_unknown;
    
    // 2. Биография
    const bioTextarea = document.getElementById('profile-bio');
    const userBio = loadBio(nickname);
    
    bioTextarea.value = userBio || (isCurrentUser ? '' : t.msg_no_bio);
    
    // 3. Заголовок
    document.getElementById('profile-nickname').textContent = currentNickname;
    document.getElementById('profile-display-name').textContent = nickname;

    // 4. Кнопка "Начать Чат"
    // Сначала удаляем старую кнопку чата, если она есть
    document.querySelector('.profile-content-grid .start-chat-btn')?.remove();

    if (!isCurrentUser) {
        const chatButton = document.createElement('button');
        chatButton.className = 'btn secondary-btn full-width mt-10 start-chat-btn';
        chatButton.textContent = t.nav_messages.replace('💬', 'Чат с '); // "Чат с [никнейм]"
        
        chatButton.addEventListener('click', () => {
            toggleScenes('messages-scene', nickname);
        });

        // Добавляем кнопку в контейнер профиля
        const profileContainer = document.querySelector('.profile-content-grid');
        if (profileContainer) {
            // Вставляем кнопку перед секцией редактирования био
            profileContainer.insertBefore(chatButton, profileContainer.querySelector('.bio-editor'));
        }
    }

    // 5. Обновляем текст и доступность полей
    updateContextualText(nickname);
}


// --- ФУНКЦИИ АВТОРИЗАЦИИ И РЕГИСТРАЦИИ ---

function registerUser(nickname, password) {
    const users = loadUsers();
    const t = texts[currentLang];

    if (users[nickname]) {
        alert(t.msg_reg_exists);
        return false;
    }

    users[nickname] = {
        password: password,
        regDate: new Date().toLocaleDateString(currentLang),
        displayName: nickname // На данный момент никнейм и отображаемое имя совпадают
    };

    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    alert(t.msg_reg_success(nickname));
    return true;
}

function loginUser(nickname, password) {
    const users = loadUsers();
    const t = texts[currentLang];
    
    if (users[nickname] && users[nickname].password === password) {
        saveUserSession(nickname);
        alert(t.msg_login_welcome(nickname));
        toggleScenes('main-scene');
        return true;
    } else {
        alert(t.msg_login_fail);
        return false;
    }
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    alert(texts[currentLang].msg_logout);
    toggleScenes('login-scene');
}


// --- ФУНКЦИИ ДЕЙСТВИЙ (ПОСТЫ, ЛАЙКИ, КОММЕНТАРИИ) ---

function addNewPost(mediaUrl, content) {
    const currentNickname = loadUserSession();
    const t = texts[currentLang];

    if (!currentNickname) {
        alert(t.msg_post_fail);
        return;
    }
    if (!content.trim()) {
        alert(t.msg_content_req);
        return;
    }

    const posts = loadPosts();
    const newPost = {
        id: Date.now(),
        name: currentNickname,
        date: new Date().toISOString(),
        media: mediaUrl,
        content: content.trim(),
        likedBy: [],
        comments: []
    };

    posts.push(newPost);
    savePosts(posts);
    renderPosts();
    alert(t.msg_post_success(currentNickname));
}

function toggleLike(index) {
    const posts = loadPosts();
    const currentNickname = loadUserSession();
    const post = posts[index];

    if (!post) return;

    const likeIndex = post.likedBy.indexOf(currentNickname);

    if (likeIndex === -1) {
        post.likedBy.push(currentNickname);
    } else {
        post.likedBy.splice(likeIndex, 1);
    }

    savePosts(posts);
    renderPosts();
}

function deletePost(index) {
    const posts = loadPosts();
    const currentNickname = loadUserSession();
    const post = posts[index];
    const t = texts[currentLang];

    if (!post) return;

    if (post.name !== currentNickname) {
        alert(t.msg_delete_fail);
        return;
    }

    if (confirm(t.msg_delete_confirm(post.name))) {
        posts.splice(index, 1);
        savePosts(posts);
        renderPosts();
    }
}

function addComment(postIndex, commentText) {
    const currentNickname = loadUserSession();
    if (!currentNickname || !commentText.trim()) return;

    const posts = loadPosts();
    const post = posts[postIndex];

    if (!post) return;

    const newComment = {
        user: currentNickname,
        text: commentText.trim(),
        date: new Date().toISOString()
    };

    post.comments.push(newComment);
    savePosts(posts);
    renderPosts();
}

function saveBio(bioText) {
    const currentNickname = loadUserSession();
    const t = texts[currentLang];
    if (currentNickname) {
        localStorage.setItem(BIO_KEY_PREFIX + currentNickname, bioText);
        document.getElementById('save-status').textContent = t.msg_bio_saved;
        setTimeout(() => document.getElementById('save-status').textContent = '', 3000);
    }
}


// --- ИНИЦИАЛИЗАЦИЯ И ОБРАБОТЧИКИ СОБЫТИЙ ---

document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
    const currentNickname = loadUserSession();

    if (currentNickname) {
        toggleScenes('main-scene');
    } else {
        toggleScenes('login-scene');
    }
    
    // 1. ОБРАБОТЧИКИ АВТОРИЗАЦИИ
    document.getElementById('register-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const nickname = document.getElementById('reg-nickname').value;
        const password = document.getElementById('reg-password').value;
        if (registerUser(nickname, password)) {
             this.reset();
        }
    });

    document.getElementById('login-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const nickname = document.getElementById('log-nickname').value;
        const password = document.getElementById('log-password').value;
        loginUser(nickname, password);
    });

    document.querySelectorAll('#logout-btn, #logout-btn-2, #logout-btn-3, #logout-btn-4').forEach(btn => {
        btn.addEventListener('click', logoutUser);
    });
    
    // 2. ОБРАБОТЧИКИ НАВИГАЦИИ (ПЕРЕКЛЮЧЕНИЕ СЦЕН)
    document.querySelectorAll('.nav-btn, .scene-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            toggleScenes(target + '-scene');
        });
    });

    // 3. ОБРАБОТЧИКИ ЯЗЫКА
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.addEventListener('click', switchLanguage);
    });

    // 4. ОБРАБОТЧИК ФОРМЫ ПОСТОВ
    document.getElementById('new-post-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const media = document.getElementById('post-media').value;
        const content = document.getElementById('post-content').value;
        addNewPost(media, content);
        this.reset();
        // Вставляем заглушку, чтобы поле media не выглядело пустым
        document.getElementById('post-media').value = 'https://via.placeholder.com/760x300?text=Мой+Отчет+о+Шторме';
    });

    // 5. ОБРАБОТЧИК ФОРМЫ БИОГРАФИИ
    document.getElementById('save-bio-btn')?.addEventListener('click', function() {
        const bioText = document.getElementById('profile-bio').value;
        saveBio(bioText);
    });

    // 6. ОБРАБОТЧИКИ ЛАЙКОВ, УДАЛЕНИЯ И КОММЕНТАРИЕВ (Делегирование)
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Кнопка ЛАЙКА
        if (target.classList.contains('like-btn')) {
            const index = parseInt(target.getAttribute('data-index'));
            toggleLike(index);
        }

        // Кнопка УДАЛЕНИЯ
        if (target.classList.contains('delete-btn')) {
            const index = parseInt(target.getAttribute('data-index'));
            deletePost(index);
        }

        // Кнопка ПОКАЗАТЬ/СКРЫТЬ КОММЕНТАРИИ
        if (target.classList.contains('comment-toggle-btn')) {
            const index = parseInt(target.getAttribute('data-index'));
            const commentsSection = document.getElementById(`comments-section-${index}`);
            if (commentsSection) {
                commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
            }
        }

        // Клик по автору поста (для перехода в профиль)
        if (target.classList.contains('author-link')) {
             const nickname = target.getAttribute('data-nickname');
             if (nickname) {
                 toggleScenes('profile-scene', nickname);
             }
        }
    });

    // 7. ОБРАБОТЧИК ОТПРАВКИ КОММЕНТАРИЯ
    document.addEventListener('submit', function(e) {
        if (e.target.classList.contains('comment-form')) {
            e.preventDefault();
            const form = e.target;
            const index = parseInt(form.getAttribute('data-index'));
            const textarea = form.querySelector('textarea');
            addComment(index, textarea.value);
            textarea.value = ''; // Очистка поля
        }
    });
    
    // 8. ОБРАБОТЧИК ОТПРАВКИ ЧАТА
    document.getElementById('chat-input-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = document.getElementById('chat-input');
        const messageText = textarea.value;

        if (messageText && activeChatPartner) {
            sendChatMessage(messageText, activeChatPartner);
            textarea.value = ''; 
        }
    });
});
