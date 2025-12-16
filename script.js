// --- КОНСТАНТЫ И КЛЮЧИ ДАННЫХ ---
const postsFeed = document.getElementById('posts-feed');
const POSTS_KEY = 'tornadoHunterPosts'; 
const USERS_KEY = 'tornadoHunterUsers'; 
const CURRENT_USER_KEY = 'tornadoHunterCurrentUser'; 
const BIO_KEY_PREFIX = 'tornadoHunterBio_'; 
const LANG_KEY = 'tornadoHunterLanguage';

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
        lang_ru_short: 'EN', // Отображается, когда активен RU
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
        msg_unlike: 'Unlike',
        msg_report_by: 'Report by',
        msg_you: '(You)',
        msg_published: 'Published',
        msg_delete: 'Delete',
        msg_toggle_comments: 'Show/Hide Comments',
        msg_comment_count: (count) => `Comments: ${count}`,
        msg_comment_input_ph: 'Write a comment...',
        msg_comment_button: 'Comment',
        lang_ru_short: 'RU', // Отображается, когда активен EN
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
        if (translation[key]) {
            el.innerHTML = translation[key];
        }
    });

    // Перевод плейсхолдеров
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translation[key]) {
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
    // Обновляем текст в полях, где он не является placeholder
    updateContextualText(loadUserSession());
}

/** Обновляет контекстуальный текст в заголовках (например, "Обо мне") */
function updateContextualText(nickname) {
    const lang = currentLang;
    const isCurrentUser = nickname === loadUserSession();
    
    // Обновление заголовка биографии
    const bioTitleEl = document.getElementById('bio-editor-title');
    if (bioTitleEl) {
        if (isCurrentUser) {
            bioTitleEl.innerHTML = lang === 'ru' ? '✍️ Обо мне (Редактировать)' : '✍️ About Me (Edit)';
        } else {
            bioTitleEl.innerHTML = lang === 'ru' ? `✍️ О пользователе (${nickname})` : `✍️ About User (${nickname})`;
        }
    }
}

// --- ФУНКЦИИ УПРАВЛЕНИЯ ДАННЫМИ (LocalStorage) ---

function loadPosts() {
    const savedPosts = localStorage.getItem(POSTS_KEY);
    const posts = savedPosts ? JSON.parse(savedPosts) : [];
    // Гарантируем, что у каждого поста есть поля 'likedBy' (для лайков-переключателей) и 'comments'
    return posts.map(post => ({
        ...post,
        likedBy: post.likedBy || [], // Массив никнеймов, которые лайкнули
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

// --- ФУНКЦИИ ОТОБРАЖЕНИЯ И ПЕРЕКЛЮЧЕНИЯ СЦЕН ---

function toggleScenes(showSceneId) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.style.display = 'none';
    });
    document.getElementById(showSceneId).style.display = 'block';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetKey = showSceneId.replace('-scene', '');
    const targetButton = document.querySelector(`.nav-btn[data-target="${targetKey}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }

    const currentNickname = loadUserSession();

    if (showSceneId === 'profile-scene') {
        loadProfile(currentNickname); 
    } else if (showSceneId === 'main-scene') {
        renderPosts();
    } else if (showSceneId === 'rules-scene') {
        document.getElementById('rules-nickname').textContent = currentNickname;
    }
}


/**
 * Создает HTML-элемент для одного поста, включая комментарии.
 */
function createPostElement(postData, index, currentNickname) { 
    const t = texts[currentLang]; // Получаем тексты для текущего языка
    const mediaUrl = postData.media || "https://via.placeholder.com/760x300?text=Нет+ссылки+на+фото"; 
    const canDelete = postData.name === currentNickname; 
    const authorName = postData.name;
    const isLiked = postData.likedBy.includes(currentNickname);
    const likeCount = postData.likedBy.length;
    const commentCount = postData.comments.length;
    const likeBtnClass = isLiked ? 'primary-btn liked' : 'secondary-btn';

    let mediaTag;

    if (mediaUrl.endsWith('.mp4') || mediaUrl.includes('youtube.com') || mediaUrl.includes('vimeo.com')) {
        mediaTag = `<video controls class="media-preview" src="${mediaUrl}">${t.msg_video_unsupported || 'Ваш браузер не поддерживает видео.'}</video>`;
    } else {
        mediaTag = `<img src="${mediaUrl}" alt="${t.msg_media_content || 'Медиа контент'}" class="media-preview">`;
    }

    // --- ФОРМИРОВАНИЕ КОММЕНТАРИЕВ ---
    const commentsHtml = postData.comments.map(comment => `
        <div class="comment">
            <span class="comment-author">${comment.user}:</span> 
            ${comment.text}
            <span class="comment-date">(${comment.date})</span>
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
            
            <small>${t.msg_published}: ${postData.date}</small>

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
    
    posts.slice().reverse().forEach((post, i) => {
        const originalIndex = posts.length - 1 - i; 
        postsFeed.insertAdjacentHTML('beforeend', createPostElement(post, originalIndex, currentNickname)); 
    });

    if (posts.length === 0) {
        postsFeed.innerHTML = `<p style="text-align: center; color: #95a5a6; grid-column: 1 / -1;">${t.msg_post_empty}</p>`;
    }
}

function loadProfile(nickname) {
    const allPosts = loadPosts();
    const users = loadUsers();
    
    const isCurrentUser = nickname === loadUserSession();
    const t = texts[currentLang];
    
    const userPosts = allPosts.filter(post => post.name === nickname);
    // Лайки считаются по длине массива likedBy
    const totalLikes = allPosts.reduce((sum, post) => sum + post.likedBy.length, 0); 

    const regDate = users[nickname] && users[nickname].regDate 
        ? new Date(users[nickname].regDate).toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US') 
        : t.msg_profile_unknown;
    
    const bio = loadBio(nickname);

    document.getElementById('profile-nickname').textContent = loadUserSession();
    document.getElementById('profile-display-name').textContent = nickname;
    document.getElementById('post-count').textContent = userPosts.length;
    document.getElementById('like-count').textContent = totalLikes;
    document.getElementById('reg-date').textContent = regDate;
    
    const bioTextarea = document.getElementById('profile-bio');
    const saveBioBtn = document.getElementById('save-bio-btn');
    
    bioTextarea.value = bio;
    
    updateContextualText(nickname); // Обновляем заголовок "Обо мне"
    
    if (isCurrentUser) {
        bioTextarea.disabled = false;
        saveBioBtn.style.display = 'block';
    } else {
        bioTextarea.disabled = true;
        saveBioBtn.style.display = 'none';
        if (!bio) {
            bioTextarea.value = t.msg_no_bio;
        }
    }
}

function viewParticipantProfile(nickname) {
    toggleScenes('profile-scene');
    loadProfile(nickname);
}


// --- ФУНКЦИИ ИНТЕРАКТИВА (ЛАЙКИ И КОММЕНТАРИИ) ---

/**
 * Обрабатывает лайк/дизлайк.
 * @param {number} index - Индекс поста.
 * @param {string} currentNickname - Никнейм текущего пользователя.
 */
function handleLike(index, currentNickname) {
    const posts = loadPosts();
    const post = posts[index];

    if (post) {
        const likedIndex = post.likedBy.indexOf(currentNickname);

        if (likedIndex > -1) {
            // Пользователь уже лайкнул -> Убрать лайк
            post.likedBy.splice(likedIndex, 1);
        } else {
            // Пользователь не лайкнул -> Поставить лайк
            post.likedBy.push(currentNickname);
        }

        savePosts(posts);
        renderPosts(); // Перерисовываем, чтобы обновить счетчик
    }
}

/**
 * Обрабатывает добавление комментария.
 * @param {number} index - Индекс поста.
 * @param {string} commentText - Текст комментария.
 * @param {string} currentNickname - Никнейм текущего пользователя.
 */
function handleAddComment(index, commentText, currentNickname) {
    const posts = loadPosts();
    const post = posts[index];

    if (post && commentText.trim()) {
        const now = new Date();
        const dateString = now.toLocaleTimeString(currentLang === 'ru' ? 'ru-RU' : 'en-US', { hour: '2-digit', minute: '2-digit' });

        const newComment = {
            user: currentNickname,
            text: commentText,
            date: dateString
        };

        post.comments.push(newComment);
        savePosts(posts);
        renderPosts(); // Перерисовываем
    }
}

/**
 * Обрабатывает клик "Удалить".
 */
function handleDelete(index) {
    const currentNickname = loadUserSession();
    const posts = loadPosts();
    const t = texts[currentLang];
    
    if (posts[index] && posts[index].name === currentNickname) {
        if (confirm(t.msg_delete_confirm(posts[index].name))) {
            posts.splice(index, 1);
            savePosts(posts);
            
            const activeSceneElement = document.querySelector('.scene[style*="block"]');
            const activeSceneId = activeSceneElement ? activeSceneElement.id : 'main-scene';
            
            if (activeSceneId === 'profile-scene') {
                loadProfile(currentNickname); 
            } else {
                renderPosts();
            }
        }
    } else {
        alert(t.msg_delete_fail);
    }
}

// --- ОСНОВНАЯ ЛОГИКА САЙТА (ИНИЦИАЛИЗАЦИЯ) ---
document.addEventListener('DOMContentLoaded', () => {
    
    translatePage(currentLang); // ПЕРВЫЙ ЗАПУСК ПЕРЕВОДА

    // 1. ПРОВЕРКА АВТОРИЗАЦИИ при старте
    const currentUser = loadUserSession();
    if (currentUser) {
        toggleScenes('main-scene');
    } else {
        toggleScenes('login-scene');
    }

    // 2. ОБРАБОТКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА (Все кнопки)
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.addEventListener('click', switchLanguage);
    });

    // 3. ОБРАБОТКА РЕГИСТРАЦИИ (Сцена 1)
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const nickname = document.getElementById('reg-nickname').value.trim();
        const password = document.getElementById('reg-password').value;
        const users = loadUsers();
        const t = texts[currentLang];

        if (users[nickname]) {
            alert(t.msg_reg_exists);
            return;
        }

        users[nickname] = {
            password: password,
            regDate: new Date().toISOString()
        };
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        alert(t.msg_reg_success(nickname));
        this.reset();
    });

    // 4. ОБРАБОТКА ВХОДА (Сцена 1)
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const nickname = document.getElementById('log-nickname').value.trim();
        const password = document.getElementById('log-password').value;
        const users = loadUsers();
        const t = texts[currentLang];

        if (users[nickname] && users[nickname].password === password) {
            saveUserSession(nickname);
            alert(t.msg_login_welcome(nickname));
            toggleScenes('main-scene');
        } else {
            alert(t.msg_login_fail);
        }
    });

    // 5. ОБРАБОТКА ВЫХОДА (Все кнопки)
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            localStorage.removeItem(CURRENT_USER_KEY);
            alert(texts[currentLang].msg_logout);
            toggleScenes('login-scene');
        });
    });

    // 6. ОБРАБОТКА ПЕРЕКЛЮЧЕНИЯ СЦЕН (Лента/Профиль/Правила)
    document.querySelectorAll('.nav-btn, .scene-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target === 'dashboard') {
                toggleScenes('main-scene');
            } else if (target === 'profile') {
                toggleScenes('profile-scene');
            } else if (target === 'rules') { 
                toggleScenes('rules-scene');
            }
        });
    });

    // 7. ОБРАБОТКА СОХРАНЕНИЯ БИОГРАФИИ
    if (document.getElementById('save-bio-btn')) {
        document.getElementById('save-bio-btn').addEventListener('click', function() {
            const currentNickname = loadUserSession();
            const bio = document.getElementById('profile-bio').value;
            localStorage.setItem(BIO_KEY_PREFIX + currentNickname, bio); 
            
            const statusElement = document.getElementById('save-status');
            statusElement.textContent = texts[currentLang].msg_bio_saved;
            setTimeout(() => statusElement.textContent = '', 3000);
        });
    }

    // 8. ОБРАБОТКА ПУБЛИКАЦИИ (Сцена 2)
    if (document.getElementById('new-post-form')) {
        document.getElementById('new-post-form').addEventListener('submit', function(e) { 
            e.preventDefault(); 
            
            const authorName = loadUserSession(); 
            const t = texts[currentLang];
            if (!authorName) return alert(t.msg_post_fail);
            
            const content = document.getElementById('post-content').value;
            const media = document.getElementById('post-media').value; 
            
            if (content.trim() === "") {
                return alert(t.msg_content_req);
            }

            const now = new Date();
            const dateString = now.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            });

            const newPost = {
                name: authorName,
                media: media, 
                content: content,
                date: dateString,
                likedBy: [], // Инициализируем пустым массивом для лайков
                comments: [] // Инициализируем пустым массивом для комментариев
            };

            const allPosts = loadPosts();
            allPosts.push(newPost);
            savePosts(allPosts); 
            renderPosts();

            this.reset();
            // Сбрасываем поле media на заглушку
            document.getElementById('post-media').value = "https://via.placeholder.com/760x300?text=Мой+Отчет+о+Шторме";
            alert(t.msg_post_success(authorName));
        });
    }

    // 9. Обработка кликов по ленте (Лайки/Удаление/Профиль/Комментарии)
    if (postsFeed) {
        postsFeed.addEventListener('click', function(e) {
            const target = e.target;
            const currentNickname = loadUserSession();
            // Находим ближайший родительский элемент .chase-report для получения data-index
            const postArticle = target.closest('.chase-report');
            const index = postArticle ? parseInt(postArticle.getAttribute('data-index')) : -1;
            
            if (index === -1) return;

            if (target.classList.contains('like-btn')) {
                // ЛОГИКА ЛАЙК/ДИЗЛАЙК
                handleLike(index, currentNickname);
            } else if (target.classList.contains('delete-btn')) {
                 // ЛОГИКА УДАЛЕНИЯ
                handleDelete(index);
            } else if (target.classList.contains('author-link') || target.closest('.author-link')) {
                // ЛОГИКА ПРОСМОТРА ПРОФИЛЯ
                const nickname = target.closest('.author-link').getAttribute('data-nickname');
                viewParticipantProfile(nickname);
            } else if (target.classList.contains('comment-toggle-btn')) {
                // ЛОГИКА ПОКАЗАТЬ/СКРЫТЬ КОММЕНТАРИИ
                const commentSection = document.getElementById(`comments-section-${index}`);
                if (commentSection) {
                    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
                }
            }
        });

        postsFeed.addEventListener('submit', function(e) {
            // ЛОГИКА ДОБАВЛЕНИЯ КОММЕНТАРИЯ
            if (e.target.classList.contains('comment-form')) {
                e.preventDefault();
                const form = e.target;
                const index = parseInt(form.getAttribute('data-index'));
                const textarea = form.querySelector('textarea');
                const commentText = textarea.value;

                handleAddComment(index, commentText, loadUserSession());
                textarea.value = ''; // Очистка поля ввода
                
                // Снова показываем секцию комментариев после добавления
                const commentSection = document.getElementById(`comments-section-${index}`);
                 if (commentSection) {
                    commentSection.style.display = 'block';
                }
            }
        });
    }
});