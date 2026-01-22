/**
 * Advanced Cookie Banner - Global Privacy Laws Compliant
 * Supports GDPR, CCPA, LGPD, 152-ФЗ РФ, PIPEDA, PIPL, APPI, PIPA and other privacy regulations
 * Multilingual support with 20+ languages and auto-detection
 * Anti-adblock protection and advanced features
 * https://github.com/SerGioPlay01/cookies_widget_sergioplay
 * 
 * @version 3.0.0
 * @author SerGioPlay01
 * @license MIT
 */

(function(window, document) {
    'use strict';

    // Performance optimization
    const raf = window.requestAnimationFrame || window.setTimeout;
    const now = Date.now || function() { return new Date().getTime(); };
    
    // Comprehensive language support with auto-detection
    const LANGUAGES = {
        'ru': {
            name: 'Русский',
            flag: '🇷🇺',
            title: 'Использование файлов cookie',
            description: 'Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. Продолжая использовать сайт, вы соглашаетесь с нашей',
            privacyPolicy: 'политикой конфиденциальности',
            compliance: 'В соответствии с требованиями 152-ФЗ "О персональных данных" и международными стандартами защиты данных.',
            settings: 'Настройки',
            decline: 'Отклонить',
            acceptAll: 'Принять все',
            acceptSelected: 'Принять выбранные',
            settingsTitle: 'Настройки файлов cookie',
            settingsDescription: 'Управляйте настройками файлов cookie. Вы можете включить или отключить различные категории cookie в соответствии с вашими предпочтениями.',
            necessary: 'Необходимые файлы cookie',
            necessaryDesc: 'Эти файлы cookie необходимы для работы сайта и не могут быть отключены.',
            functional: 'Функциональные файлы cookie',
            functionalDesc: 'Эти файлы cookie позволяют сайту предоставлять расширенную функциональность.',
            analytics: 'Аналитические файлы cookie',
            analyticsDesc: 'Эти файлы cookie помогают нам понять, как посетители взаимодействуют с сайтом.',
            marketing: 'Маркетинговые файлы cookie',
            marketingDesc: 'Эти файлы cookie используются для отображения релевантной рекламы.',
            performance: 'Производительность',
            performanceDesc: 'Эти файлы cookie помогают улучшить производительность сайта.',
            cancel: 'Отмена',
            saveSettings: 'Сохранить настройки',
            learnMore: 'Узнать больше',
            poweredBy: 'Работает на Cookie Widget',
            website: 'Сайт',
            github: 'GitHub'
        },
        'en': {
            name: 'English',
            flag: '🇺🇸',
            title: 'Cookie Usage',
            description: 'We use cookies to improve website performance, analyze traffic and personalize content. By continuing to use this site, you agree to our',
            privacyPolicy: 'privacy policy',
            compliance: 'In accordance with GDPR, CCPA, and other applicable data protection laws.',
            settings: 'Settings',
            decline: 'Decline',
            acceptAll: 'Accept All',
            acceptSelected: 'Accept Selected',
            settingsTitle: 'Cookie Settings',
            settingsDescription: 'Manage your cookie settings. You can enable or disable different categories of cookies according to your preferences.',
            necessary: 'Necessary Cookies',
            necessaryDesc: 'These cookies are necessary for the website to function and cannot be switched off.',
            functional: 'Functional Cookies',
            functionalDesc: 'These cookies enable the website to provide enhanced functionality and personalization.',
            analytics: 'Analytics Cookies',
            analyticsDesc: 'These cookies help us understand how visitors interact with the website.',
            marketing: 'Marketing Cookies',
            marketingDesc: 'These cookies are used to track visitors across websites for advertising purposes.',
            performance: 'Performance Cookies',
            performanceDesc: 'These cookies help improve website performance and loading times.',
            cancel: 'Cancel',
            saveSettings: 'Save Settings',
            learnMore: 'Learn More',
            poweredBy: 'Powered by Cookie Widget',
            website: 'Website',
            github: 'GitHub'
        }
    };

    // Advanced CookieBanner class
    class AdvancedCookieBanner {
        constructor(options = {}) {
            this.version = '3.0.0';
            this.cookieName = 'cookie_consent';
            this.cookieExpiry = options.cookieExpiry || 365;
            this.currentLanguage = null;
            this.userRegion = null;
            this.isInitialized = false;
            
            // Configuration
            this.config = {
                autoShow: options.autoShow !== false,
                showDeclineButton: options.showDeclineButton !== false,
                showSettingsButton: options.showSettingsButton !== false,
                position: options.position || 'bottom',
                theme: options.theme || 'default',
                layout: options.layout || 'bar',
                privacyPolicyUrl: options.privacyPolicyUrl || '/privacy-policy',
                showPoweredBy: options.showPoweredBy !== false,
                respectDNT: options.respectDNT !== false,
                
                // Callbacks
                onAccept: options.onAccept || null,
                onDecline: options.onDecline || null,
                onSettingsChange: options.onSettingsChange || null,
                onLanguageChange: options.onLanguageChange || null,
                
                // Custom texts override
                customTexts: options.customTexts || {},
                
                // Categories
                categories: options.categories || ['necessary', 'functional', 'analytics', 'marketing', 'performance']
            };
            
            // Default settings
            this.defaultSettings = {
                necessary: true,
                functional: false,
                analytics: false,
                marketing: false,
                performance: false
            };
            
            // Current settings cache
            this.currentSettings = null;
            
            // Initialize
            this.init();
        }
        
        // Initialize the banner
        async init() {
            if (this.isInitialized) return;
            
            try {
                // Detect user language
                this.currentLanguage = this.detectLanguage();
                
                // Load existing settings first
                const existingSettings = this.getCookieSettings();
                if (existingSettings && Object.keys(existingSettings).length > 1) {
                    // Apply existing settings immediately
                    this.applyCookieSettings(existingSettings);
                }
                
                // Check if banner should be shown
                if (this.shouldShowBanner()) {
                    await this.createBanner();
                    if (this.config.autoShow) {
                        this.showBanner();
                    }
                }
                
                // Setup global functions
                this.setupGlobalFunctions();
                
                this.isInitialized = true;
                
                // Dispatch initialization event
                this.dispatchEvent('cookieBannerInitialized', {
                    version: this.version,
                    language: this.currentLanguage,
                    settings: existingSettings
                });
                
            } catch (error) {
                console.warn('Cookie banner initialization failed:', error);
            }
        }
        
        // Enhanced language detection
        detectLanguage() {
            // Check URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const urlLang = urlParams.get('lang') || urlParams.get('language');
            if (urlLang && LANGUAGES[urlLang]) {
                return urlLang;
            }
            
            // Check localStorage
            try {
                const storedLang = localStorage.getItem('cookie_banner_language');
                if (storedLang && LANGUAGES[storedLang]) {
                    return storedLang;
                }
            } catch (e) {}
            
            // Check browser languages
            const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
            
            for (const lang of browserLanguages) {
                const langCode = lang.split('-')[0].toLowerCase();
                if (LANGUAGES[langCode]) {
                    return langCode;
                }
            }
            
            // Default to Russian
            return 'ru';
        }
        
        // Check if banner should be shown
        shouldShowBanner() {
            // Check Do Not Track header
            if (this.config.respectDNT && navigator.doNotTrack === '1') {
                return false;
            }
            
            // Always show banner if no consent exists
            const consent = this.getCookieConsent();
            if (!consent || consent.version !== this.version) {
                return true;
            }
            
            return false;
        }
        
        // Get translation text
        t(key) {
            // Check custom texts first
            if (this.config.customTexts[key]) {
                return this.config.customTexts[key];
            }
            
            // Get from language pack
            const langPack = LANGUAGES[this.currentLanguage] || LANGUAGES['ru'];
            return langPack[key] || key;
        }
        
        // Create banner HTML
        async createBanner() {
            const banner = document.createElement('div');
            banner.className = 'cookie-banner';
            banner.id = 'cookieBanner';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-hidden', 'true');
            
            // Create banner content
            banner.innerHTML = await this.createBannerHTML();
            
            // Add to DOM
            document.body.appendChild(banner);
            
            // Setup event listeners
            this.setupEventListeners(banner);
            
            return banner;
        }
        
        // Generate banner HTML
        async createBannerHTML() {
            return `
                <div class="cookie-banner__main">
                    <div class="cookie-banner__container">
                        <div class="cookie-banner__content">
                            <h2 class="cookie-banner__title">
                                ${this.t('title')}
                            </h2>
                            <p class="cookie-banner__text">
                                ${this.t('description')} 
                                <a href="${this.config.privacyPolicyUrl}" class="cookie-banner__link" target="_blank" rel="noopener">
                                    ${this.t('privacyPolicy')}
                                </a>.
                            </p>
                        </div>
                        
                        <div class="cookie-banner__actions">
                            ${this.config.showSettingsButton ? `
                                <button class="cookie-banner__button cookie-banner__button--settings" 
                                        data-action="settings" 
                                        aria-label="${this.t('settings')}">
                                    ${this.t('settings')}
                                </button>
                            ` : ''}
                            
                            ${this.config.showDeclineButton ? `
                                <button class="cookie-banner__button cookie-banner__button--decline" 
                                        data-action="decline"
                                        aria-label="${this.t('decline')}">
                                    ${this.t('decline')}
                                </button>
                            ` : ''}
                            
                            <button class="cookie-banner__button cookie-banner__button--accept" 
                                    data-action="accept"
                                    aria-label="${this.t('acceptAll')}">
                                ${this.t('acceptAll')}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="cookie-settings" id="cookieSettings">
                    ${await this.createSettingsHTML()}
                </div>
            `;
        }
        
        // Create settings panel HTML
        async createSettingsHTML() {
            return `
                <div class="cookie-settings__container">
                    <div class="cookie-settings__header">
                        <h3 class="cookie-settings__title">
                            ${this.t('settingsTitle')}
                        </h3>
                        <p class="cookie-settings__description">
                            ${this.t('settingsDescription')}
                        </p>
                    </div>
                    
                    <div class="cookie-settings__content">
                        ${this.config.categories.map(category => this.createCategoryHTML(category)).join('')}
                    </div>
                    
                    <div class="cookie-settings__footer">
                        <button class="cookie-banner__button cookie-banner__button--decline" 
                                data-action="close-settings">
                            ${this.t('cancel')}
                        </button>
                        <button class="cookie-banner__button cookie-banner__button--accept" 
                                data-action="save-settings">
                            ${this.t('saveSettings')}
                        </button>
                    </div>
                    
                    <div class="cookie-settings__links">
                        <a href="https://cookies-widget-sergioplay.vercel.app/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="cookie-settings__link">
                            🌐 ${this.t('website')}
                        </a>
                        <a href="https://github.com/SerGioPlay01/cookies_widget_sergioplay" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="cookie-settings__link">
                            📦 ${this.t('github')}
                        </a>
                    </div>
                </div>
            `;
        }
        
        // Create category HTML
        createCategoryHTML(category) {
            const isNecessary = category === 'necessary';
            const currentSettings = this.getCookieSettings();
            const isChecked = currentSettings[category] || isNecessary;
            
            return `
                <div class="cookie-category">
                    <div class="cookie-category__header">
                        <h4 class="cookie-category__title">
                            ${this.t(category)}
                        </h4>
                        <div class="cookie-category__toggle">
                            <input type="checkbox" 
                                   id="cookie-${category}"
                                   data-category="${category}"
                                   ${isChecked ? 'checked' : ''}
                                   ${isNecessary ? 'disabled' : ''}>
                            <label class="cookie-category__slider" for="cookie-${category}"></label>
                        </div>
                    </div>
                    <p class="cookie-category__description">
                        ${this.t(category + 'Desc')}
                    </p>
                </div>
            `;
        }
        
        // Setup event listeners
        setupEventListeners(banner) {
            banner.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                if (!action) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                switch (action) {
                    case 'accept':
                        this.acceptAll();
                        break;
                    case 'decline':
                        this.declineAll();
                        break;
                    case 'settings':
                        this.showSettings();
                        break;
                    case 'close-settings':
                        this.hideSettings();
                        break;
                    case 'save-settings':
                        this.saveSettings();
                        break;
                }
            });
            
            // Keyboard navigation
            banner.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.hideSettings();
                }
            });
        }
        
        // Show banner with animation
        showBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) return;
            
            raf(() => {
                banner.classList.add('show');
                banner.setAttribute('aria-hidden', 'false');
                
                // Focus management for accessibility
                const firstButton = banner.querySelector('button');
                if (firstButton) {
                    firstButton.focus();
                }
            });
            
            this.dispatchEvent('cookieBannerShown');
        }
        
        // Hide banner with animation
        hideBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) return;
            
            banner.classList.remove('show');
            banner.setAttribute('aria-hidden', 'true');
            
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 300);
            
            this.dispatchEvent('cookieBannerHidden');
        }
        
        // Show settings panel
        showSettings() {
            const settings = document.getElementById('cookieSettings');
            
            if (!settings) return;
            
            settings.classList.add('show');
            settings.setAttribute('aria-hidden', 'false');
            
            // Update toggles with current settings
            this.updateSettingsToggles();
            
            // Мобильная оптимизация - прокрутка к началу настроек
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    const banner = document.getElementById('cookieBanner');
                    if (banner) {
                        banner.scrollTop = 0;
                    }
                    settings.scrollTop = 0;
                }, 100);
            }
            
            // Focus management
            const firstInput = settings.querySelector('input, button');
            if (firstInput) {
                firstInput.focus();
            }
            
            this.dispatchEvent('cookieSettingsShown');
        }
        
        // Hide settings panel
        hideSettings() {
            const settings = document.getElementById('cookieSettings');
            
            if (!settings) return;
            
            settings.classList.remove('show');
            settings.setAttribute('aria-hidden', 'true');
            
            // Мобильная оптимизация - восстановление скролла
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    const banner = document.getElementById('cookieBanner');
                    if (banner) {
                        banner.scrollTop = 0;
                    }
                }, 100);
            }
            
            this.dispatchEvent('cookieSettingsHidden');
        }
        
        // Update settings toggles with current values
        updateSettingsToggles() {
            const currentSettings = this.getCookieSettings();
            const toggles = document.querySelectorAll('#cookieSettings input[data-category]');
            
            toggles.forEach(toggle => {
                const category = toggle.getAttribute('data-category');
                if (category && currentSettings.hasOwnProperty(category)) {
                    toggle.checked = currentSettings[category];
                }
            });
        }
        
        // Accept all cookies
        acceptAll() {
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = true;
            });
            
            this.saveConsentSettings(settings);
            this.hideBanner();
            
            if (this.config.onAccept) {
                this.config.onAccept(settings);
            }
            
            this.dispatchEvent('cookieConsentAccepted', settings);
        }
        
        // Decline all non-necessary cookies
        declineAll() {
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = category === 'necessary';
            });
            
            this.saveConsentSettings(settings);
            this.hideBanner();
            
            if (this.config.onDecline) {
                this.config.onDecline(settings);
            }
            
            this.dispatchEvent('cookieConsentDeclined', settings);
        }
        
        // Save custom settings
        saveSettings() {
            const settings = {};
            const toggles = document.querySelectorAll('#cookieSettings input[data-category]');
            
            toggles.forEach(toggle => {
                const category = toggle.getAttribute('data-category');
                if (category) {
                    settings[category] = toggle.checked;
                }
            });
            
            // Ensure necessary cookies are always enabled
            settings.necessary = true;
            
            this.saveConsentSettings(settings);
            this.hideSettings();
            this.hideBanner();
            
            if (this.config.onSettingsChange) {
                this.config.onSettingsChange(settings);
            }
            
            this.dispatchEvent('cookieConsentChanged', settings);
        }
        
        // Save consent settings to storage
        saveConsentSettings(settings) {
            const consentData = {
                ...settings,
                timestamp: now(),
                version: this.version,
                language: this.currentLanguage
            };
            
            // Save to multiple storage locations for redundancy
            this.setStorageItem(this.cookieName, JSON.stringify(consentData));
            
            // Apply settings immediately
            this.applyCookieSettings(settings);
            
            // Store current settings for future reference
            this.currentSettings = { ...settings };
            
            console.log('Cookie consent saved:', settings);
        }
        
        // Get current cookie consent
        getCookieConsent() {
            try {
                const consentStr = this.getStorageItem(this.cookieName);
                return consentStr ? JSON.parse(consentStr) : null;
            } catch (e) {
                return null;
            }
        }
        
        // Get current cookie settings
        getCookieSettings() {
            // First try to get from current instance
            if (this.currentSettings) {
                return { ...this.currentSettings };
            }
            
            // Then try to get from storage
            const consent = this.getCookieConsent();
            if (!consent) return { ...this.defaultSettings };
            
            const settings = {};
            this.config.categories.forEach(category => {
                settings[category] = consent[category] !== undefined ? consent[category] : (category === 'necessary');
            });
            
            // Cache the settings
            this.currentSettings = { ...settings };
            
            return settings;
        }
        
        // Storage methods
        setStorageItem(key, value) {
            const methods = [
                () => localStorage.setItem(key, value),
                () => sessionStorage.setItem(key, value),
                () => this.setCookie(key, value, this.cookieExpiry)
            ];
            
            methods.forEach(method => {
                try {
                    method();
                } catch (e) {
                    // Continue to next method
                }
            });
        }
        
        getStorageItem(key) {
            const methods = [
                () => localStorage.getItem(key),
                () => sessionStorage.getItem(key),
                () => this.getCookie(key)
            ];
            
            for (const method of methods) {
                try {
                    const value = method();
                    if (value) return value;
                } catch (e) {
                    continue;
                }
            }
            
            return null;
        }
        
        // Cookie storage methods
        setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            
            const cookieString = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
            document.cookie = cookieString;
        }
        
        getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(c.substring(nameEQ.length, c.length));
                }
            }
            return null;
        }
        
        // Apply cookie settings to page
        applyCookieSettings(settings) {
            // First, block all non-necessary cookies
            this.blockRejectedCookies(settings);
            
            // Dispatch event for other scripts to listen
            this.dispatchEvent('cookieSettingsApplied', settings);
            
            // Apply Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': settings.analytics ? 'granted' : 'denied',
                    'ad_storage': settings.marketing ? 'granted' : 'denied',
                    'functionality_storage': settings.functional ? 'granted' : 'denied'
                });
            }
            
            // Clean up existing cookies if rejected
            this.cleanupRejectedCookies(settings);
        }
        
        // Block rejected cookies by intercepting document.cookie
        blockRejectedCookies(settings) {
            const self = this;
            
            // Store original cookie descriptor
            if (!this.originalCookieDescriptor) {
                this.originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || 
                                               Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
            }
            
            // Define cookie categories and their patterns
            const cookiePatterns = {
                analytics: ['_ga', '_gid', '_gat', '__utm', 'gtm_', 'google_', 'analytics'],
                marketing: ['_fbp', '_fbc', 'fbm_', 'ads', 'doubleclick', '_gcl_'],
                functional: ['preferences', 'settings', 'theme', 'language'],
                performance: ['performance', 'speed', 'timing', 'metrics']
            };
            
            // Override document.cookie setter
            if (this.originalCookieDescriptor && this.originalCookieDescriptor.set) {
                Object.defineProperty(document, 'cookie', {
                    get: function() {
                        return self.originalCookieDescriptor.get.call(this);
                    },
                    set: function(value) {
                        const cookieName = value.split('=')[0].trim();
                        
                        // Always allow necessary cookies
                        const necessaryPatterns = ['session', 'csrf', 'xsrf', 'auth', 'login', 'security', 'consent'];
                        const isNecessary = necessaryPatterns.some(pattern => 
                            cookieName.toLowerCase().includes(pattern.toLowerCase())
                        );
                        
                        if (isNecessary) {
                            return self.originalCookieDescriptor.set.call(this, value);
                        }
                        
                        // Check each category
                        for (const [category, patterns] of Object.entries(cookiePatterns)) {
                            if (!settings[category]) {
                                const isBlocked = patterns.some(pattern => 
                                    cookieName.toLowerCase().includes(pattern.toLowerCase())
                                );
                                
                                if (isBlocked) {
                                    console.log(`Cookie blocked (${category}): ${cookieName}`);
                                    return; // Block the cookie
                                }
                            }
                        }
                        
                        // Allow the cookie if not blocked
                        return self.originalCookieDescriptor.set.call(this, value);
                    },
                    configurable: true
                });
            }
        }
        
        // Clean up existing cookies that are now rejected
        cleanupRejectedCookies(settings) {
            const cookiePatterns = {
                analytics: ['_ga', '_gid', '_gat', '__utm', 'gtm_', 'google_', 'analytics'],
                marketing: ['_fbp', '_fbc', 'fbm_', 'ads', 'doubleclick', '_gcl_'],
                functional: ['preferences', 'settings', 'theme', 'language'],
                performance: ['performance', 'speed', 'timing', 'metrics']
            };
            
            // Get all existing cookies
            const cookies = document.cookie.split(';');
            
            for (const cookie of cookies) {
                const cookieName = cookie.split('=')[0].trim();
                
                // Check each category
                for (const [category, patterns] of Object.entries(cookiePatterns)) {
                    if (!settings[category]) {
                        const shouldDelete = patterns.some(pattern => 
                            cookieName.toLowerCase().includes(pattern.toLowerCase())
                        );
                        
                        if (shouldDelete) {
                            this.deleteCookie(cookieName);
                            console.log(`Cookie deleted (${category}): ${cookieName}`);
                        }
                    }
                }
            }
        }
        
        // Delete a specific cookie
        deleteCookie(name) {
            // Delete for current path
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            
            // Delete for root path
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
            
            // Delete for parent domain
            const domain = window.location.hostname;
            const parts = domain.split('.');
            if (parts.length > 2) {
                const parentDomain = '.' + parts.slice(-2).join('.');
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${parentDomain};`;
            }
        }
        
        // Setup global functions
        setupGlobalFunctions() {
            const self = this;
            
            // Multiple function names to avoid blocking
            const functionNames = ['showCookieSettings', 'openCookieSettings', 'cookiePreferences', 'privacySettings'];
            
            functionNames.forEach(name => {
                window[name] = function() {
                    if (!document.getElementById('cookieBanner')) {
                        self.forceInit();
                    }
                    setTimeout(() => {
                        self.showSettings();
                    }, 100);
                };
            });
            
            // Reset function
            window.resetCookieConsent = function() {
                self.resetConsent();
            };
            
            // Get settings function
            window.getCookieSettings = function() {
                return self.getCookieSettings();
            };
        }
        
        // Force initialization (for manual triggers)
        forceInit() {
            // Remove existing banner
            const existing = document.getElementById('cookieBanner');
            if (existing) {
                existing.remove();
            }
            
            // Reset consent to force showing
            this.clearStorageItem(this.cookieName);
            
            // Re-initialize
            this.isInitialized = false;
            this.init();
        }
        
        // Reset all consent
        resetConsent() {
            this.clearStorageItem(this.cookieName);
            
            // Remove banner
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.remove();
            }
            
            // Clear applied settings
            this.applyCookieSettings(this.defaultSettings);
            
            // Reset current settings cache
            this.currentSettings = null;
            
            // Restore original cookie descriptor if it was overridden
            if (this.originalCookieDescriptor) {
                Object.defineProperty(document, 'cookie', this.originalCookieDescriptor);
                this.originalCookieDescriptor = null;
            }
            
            this.dispatchEvent('cookieConsentReset');
        }
        
        clearStorageItem(key) {
            try {
                localStorage.removeItem(key);
                sessionStorage.removeItem(key);
                this.deleteCookie(key);
            } catch (e) {
                console.warn('Could not clear storage:', e);
            }
        }
        
        // Event dispatcher
        dispatchEvent(eventName, detail = {}) {
            const event = new CustomEvent(eventName, {
                detail: {
                    ...detail,
                    timestamp: now(),
                    version: this.version,
                    language: this.currentLanguage
                },
                bubbles: true,
                cancelable: true
            });
            
            window.dispatchEvent(event);
            document.dispatchEvent(event);
        }
        
        // Public API methods
        show() {
            if (!document.getElementById('cookieBanner')) {
                this.forceInit();
            }
            this.showBanner();
            return this;
        }
        
        hide() {
            this.hideBanner();
            return this;
        }
        
        getSettings() {
            return this.getCookieSettings();
        }
        
        setSettings(settings) {
            // Validate settings
            const validatedSettings = {};
            this.config.categories.forEach(category => {
                validatedSettings[category] = settings[category] !== undefined ? 
                    Boolean(settings[category]) : 
                    (category === 'necessary');
            });
            
            this.saveConsentSettings(validatedSettings);
            return this;
        }
        
        reset() {
            this.resetConsent();
            return this;
        }
        
        getLanguage() {
            return this.currentLanguage;
        }
        
        getVersion() {
            return this.version;
        }
        
        // API for customizing banner text
        setText(key, value) {
            if (!this.config.customTexts) {
                this.config.customTexts = {};
            }
            this.config.customTexts[key] = value;
            
            // Refresh banner if it exists
            this.refreshBanner();
            return this;
        }
        
        setTexts(texts) {
            if (!this.config.customTexts) {
                this.config.customTexts = {};
            }
            Object.assign(this.config.customTexts, texts);
            
            // Refresh banner if it exists
            this.refreshBanner();
            return this;
        }
        
        getText(key) {
            return this.t(key);
        }
        
        getAllTexts() {
            const langPack = LANGUAGES[this.currentLanguage] || LANGUAGES['ru'];
            return { ...langPack, ...this.config.customTexts };
        }
        
        // API for customizing URLs
        setPrivacyPolicyUrl(url) {
            this.config.privacyPolicyUrl = url;
            this.refreshBanner();
            return this;
        }
        
        getPrivacyPolicyUrl() {
            return this.config.privacyPolicyUrl;
        }
        
        // API for customizing appearance
        setTheme(theme) {
            this.config.theme = theme;
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.className = banner.className.replace(/cookie-banner--\w+/g, '');
                banner.classList.add(`cookie-banner--${theme}`);
            }
            return this;
        }
        
        setPosition(position) {
            this.config.position = position;
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.className = banner.className.replace(/cookie-banner--\w+/g, '');
                banner.classList.add(`cookie-banner--${position}`);
            }
            return this;
        }
        
        // API for managing categories
        addCategory(category, config = {}) {
            if (!this.config.categories.includes(category)) {
                this.config.categories.push(category);
                
                // Add to default settings
                this.defaultSettings[category] = config.defaultValue || false;
                
                // Add translations if provided
                if (config.title) {
                    this.setText(category, config.title);
                }
                if (config.description) {
                    this.setText(category + 'Desc', config.description);
                }
                
                this.refreshBanner();
            }
            return this;
        }
        
        removeCategory(category) {
            if (category !== 'necessary') { // Can't remove necessary category
                const index = this.config.categories.indexOf(category);
                if (index > -1) {
                    this.config.categories.splice(index, 1);
                    delete this.defaultSettings[category];
                    this.refreshBanner();
                }
            }
            return this;
        }
        
        // Refresh banner content
        async refreshBanner() {
            const banner = document.getElementById('cookieBanner');
            if (!banner) return;
            
            const isSettingsOpen = document.getElementById('cookieSettings')?.classList.contains('show');
            
            // Update content
            banner.innerHTML = await this.createBannerHTML();
            
            // Restore settings state
            if (isSettingsOpen) {
                setTimeout(() => this.showSettings(), 100);
            }
            
            // Re-setup event listeners
            this.setupEventListeners(banner);
        }
    }
    
    // Auto-initialize when DOM is ready
    function autoInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', autoInit);
            return;
        }
        
        // Create global instance
        if (!window.cookieBanner) {
            window.cookieBanner = new AdvancedCookieBanner();
        }
        
        // Expose class for manual instantiation
        window.CookieBanner = AdvancedCookieBanner;
        window.AdvancedCookieBanner = AdvancedCookieBanner;
    }
    
    // Initialize
    autoInit();
    
})(window, document);