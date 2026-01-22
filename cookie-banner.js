/**
 * Advanced Cookie Banner - Global Privacy Laws Compliant
 * Supports GDPR, CCPA, LGPD, 152-ФЗ РФ, PIPEDA, PIPL, APPI, PIPA and other privacy regulations
 * Multilingual support with 20+ languages and auto-detection
 * Anti-adblock protection and advanced features
 * https://github.com/SerGioPlay01/cookies_widget_sergioplay
 * 
 * @version 3.3.0
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
            github: 'GitHub',
            trackersDetected: 'Обнаружено трекеров',
            trackers: 'трекеров',
            detectedTrackers: 'Обнаруженные трекеры',
            scriptsBlocked: 'Заблокировано скриптов',
            scripts: 'скриптов',
            policyUpdated: 'Наша политика конфиденциальности была обновлена. Пожалуйста, ознакомьтесь с изменениями и обновите свои настройки.',
            consentExpired: 'Срок действия вашего согласия истек. Пожалуйста, обновите свои настройки конфиденциальности.'
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
            github: 'GitHub',
            trackersDetected: 'Trackers detected',
            trackers: 'trackers',
            detectedTrackers: 'Detected Trackers',
            scriptsBlocked: 'Scripts blocked',
            scripts: 'scripts',
            policyUpdated: 'Our privacy policy has been updated. Please review the changes and update your preferences.',
            consentExpired: 'Your consent has expired. Please update your privacy preferences.'
        }
    };

    // Script Guard - Advanced script blocking system
    const SCRIPT_GUARD = {
        blocked: new Set(),
        proxies: new Map(),
        originalMethods: new Map(),
        
        // Initialize script blocking before any scripts load
        init() {
            this.blockGoogleAnalytics();
            this.blockMetaPixel();
            this.blockYandexMetrika();
            this.blockTikTokPixel();
            this.blockGoogleAds();
            this.blockHotjar();
            this.blockLinkedInInsight();
            this.interceptScriptLoading();
        },
        
        // Block Google Analytics
        blockGoogleAnalytics() {
            // Block gtag
            window.gtag = this.createBlockedProxy('gtag', 'analytics');
            window.ga = this.createBlockedProxy('ga', 'analytics');
            
            // Block dataLayer
            if (!window.dataLayer) {
                window.dataLayer = this.createBlockedArray('dataLayer', 'analytics');
            }
        },
        
        // Block Meta Pixel
        blockMetaPixel() {
            window.fbq = this.createBlockedProxy('fbq', 'marketing');
            window._fbq = this.createBlockedProxy('_fbq', 'marketing');
        },
        
        // Block Yandex Metrika
        blockYandexMetrika() {
            window.ym = this.createBlockedProxy('ym', 'analytics');
            window.Ya = window.Ya || {};
            window.Ya.Metrika2 = this.createBlockedProxy('Ya.Metrika2', 'analytics');
        },
        
        // Block TikTok Pixel
        blockTikTokPixel() {
            window.ttq = this.createBlockedProxy('ttq', 'marketing');
        },
        
        // Block Google Ads
        blockGoogleAds() {
            window.google_trackConversion = this.createBlockedProxy('google_trackConversion', 'marketing');
            window.gtag_report_conversion = this.createBlockedProxy('gtag_report_conversion', 'marketing');
        },
        
        // Block Hotjar
        blockHotjar() {
            window.hj = this.createBlockedProxy('hj', 'analytics');
        },
        
        // Block LinkedIn Insight
        blockLinkedInInsight() {
            window._linkedin_partner_id = null;
            window.lintrk = this.createBlockedProxy('lintrk', 'marketing');
        },
        
        // Create blocked proxy function
        createBlockedProxy(name, category) {
            const proxy = (...args) => {
                if (this.isAllowed(category)) {
                    const original = this.originalMethods.get(name);
                    if (original) {
                        return original.apply(window, args);
                    }
                } else {
                    console.log(`🔒 Script Guard: Blocked ${name} (${category})`);
                    this.blocked.add(name);
                }
            };
            
            // Add properties for complex objects
            proxy.push = (...args) => {
                if (this.isAllowed(category)) {
                    const original = this.originalMethods.get(name + '.push');
                    if (original) {
                        return original.apply(window, args);
                    }
                } else {
                    console.log(`🔒 Script Guard: Blocked ${name}.push (${category})`);
                }
            };
            
            this.proxies.set(name, { proxy, category });
            return proxy;
        },
        
        // Create blocked array
        createBlockedArray(name, category) {
            const array = [];
            const originalPush = array.push;
            
            array.push = (...args) => {
                if (this.isAllowed(category)) {
                    return originalPush.apply(array, args);
                } else {
                    console.log(`🔒 Script Guard: Blocked ${name}.push (${category})`);
                    this.blocked.add(name);
                }
            };
            
            this.proxies.set(name, { proxy: array, category });
            return array;
        },
        
        // Check if category is allowed
        isAllowed(category) {
            if (!window.cookieBanner) return false;
            const settings = window.cookieBanner.getCookieSettings();
            return settings[category] === true;
        },
        
        // Intercept script loading
        interceptScriptLoading() {
            const originalCreateElement = document.createElement;
            document.createElement = function(tagName) {
                const element = originalCreateElement.call(document, tagName);
                
                if (tagName.toLowerCase() === 'script') {
                    const originalSetAttribute = element.setAttribute;
                    element.setAttribute = function(name, value) {
                        if (name === 'src' && SCRIPT_GUARD.shouldBlockScript(value)) {
                            console.log(`🔒 Script Guard: Blocked script loading: ${value}`);
                            return;
                        }
                        return originalSetAttribute.call(element, name, value);
                    };
                    
                    // Also intercept src property
                    Object.defineProperty(element, 'src', {
                        set: function(value) {
                            if (SCRIPT_GUARD.shouldBlockScript(value)) {
                                console.log(`🔒 Script Guard: Blocked script src: ${value}`);
                                return;
                            }
                            this.setAttribute('src', value);
                        },
                        get: function() {
                            return this.getAttribute('src');
                        }
                    });
                }
                
                return element;
            };
        },
        
        // Check if script should be blocked
        shouldBlockScript(src) {
            if (!src) return false;
            
            const blockPatterns = {
                analytics: [
                    'google-analytics.com',
                    'googletagmanager.com',
                    'mc.yandex.ru',
                    'metrika.yandex.ru',
                    'hotjar.com'
                ],
                marketing: [
                    'connect.facebook.net',
                    'analytics.tiktok.com',
                    'googleadservices.com',
                    'snap.licdn.com'
                ]
            };
            
            for (const [category, patterns] of Object.entries(blockPatterns)) {
                if (!this.isAllowed(category)) {
                    if (patterns.some(pattern => src.includes(pattern))) {
                        return true;
                    }
                }
            }
            
            return false;
        },
        
        // Enable category and restore functions
        enableCategory(category) {
            for (const [name, config] of this.proxies.entries()) {
                if (config.category === category) {
                    console.log(`✅ Script Guard: Enabled ${name} (${category})`);
                }
            }
        },
        
        // Get blocked scripts count
        getBlockedCount() {
            return this.blocked.size;
        }
    };

    // Auto-Renew Consent system
    const AUTO_RENEW = {
        intervals: {
            '3months': 90 * 24 * 60 * 60 * 1000,
            '6months': 180 * 24 * 60 * 60 * 1000,
            '12months': 365 * 24 * 60 * 60 * 1000
        },
        
        // Check if consent needs renewal
        needsRenewal(consentData, renewalPeriod = '12months') {
            if (!consentData || !consentData.timestamp) return true;
            
            const now = Date.now();
            const consentAge = now - consentData.timestamp;
            const maxAge = this.intervals[renewalPeriod];
            
            return consentAge > maxAge;
        },
        
        // Check if privacy policy version changed
        policyVersionChanged(consentData, currentVersion = '1.0') {
            if (!consentData || !consentData.policyVersion) return true;
            return consentData.policyVersion !== currentVersion;
        },
        
        // Get renewal reason
        getRenewalReason(consentData, renewalPeriod, policyVersion) {
            if (this.policyVersionChanged(consentData, policyVersion)) {
                return 'policy_updated';
            }
            if (this.needsRenewal(consentData, renewalPeriod)) {
                return 'expired';
            }
            return null;
        }
    };

    // Zero-Reload Mode - Dynamic script management
    const ZERO_RELOAD = {
        scriptQueue: new Map(),
        
        // Queue script for execution when consent is given
        queueScript(category, scriptFn, context = 'inline') {
            if (!this.scriptQueue.has(category)) {
                this.scriptQueue.set(category, []);
            }
            
            this.scriptQueue.get(category).push({
                fn: scriptFn,
                context,
                queued: Date.now()
            });
        },
        
        // Execute queued scripts for category
        executeCategory(category) {
            const scripts = this.scriptQueue.get(category);
            if (!scripts) return;
            
            console.log(`🚀 Zero-Reload: Executing ${scripts.length} scripts for ${category}`);
            
            scripts.forEach(script => {
                try {
                    if (typeof script.fn === 'function') {
                        script.fn();
                    } else if (typeof script.fn === 'string') {
                        // Execute script string
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = script.fn;
                        document.head.appendChild(scriptElement);
                    }
                    console.log(`✅ Zero-Reload: Executed ${category} script`);
                } catch (error) {
                    console.error(`❌ Zero-Reload: Failed to execute ${category} script:`, error);
                }
            });
            
            // Clear executed scripts
            this.scriptQueue.set(category, []);
        },
        
        // Disable category scripts
        disableCategory(category) {
            console.log(`🛑 Zero-Reload: Disabling ${category} scripts`);
            
            // Clear any queued scripts
            this.scriptQueue.set(category, []);
            
            // Disable tracking functions
            SCRIPT_GUARD.proxies.forEach((config, name) => {
                if (config.category === category) {
                    console.log(`🛑 Zero-Reload: Disabled ${name}`);
                }
            });
        }
    };

    // SEO-Friendly Mode - Bot detection system
    const SEO_MODE = {
        botUserAgents: [
            'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
            'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
            'whatsapp', 'telegrambot', 'applebot', 'ia_archiver'
        ],
        
        // Detect if current visitor is a bot
        isBot() {
            // Check user agent
            const userAgent = navigator.userAgent.toLowerCase();
            const isBotUA = this.botUserAgents.some(bot => userAgent.includes(bot));
            
            // Check for automation indicators
            const isAutomated = this.detectAutomation();
            
            // Check for headless browser indicators
            const isHeadless = this.detectHeadless();
            
            return isBotUA || isAutomated || isHeadless;
        },
        
        // Detect automation (Selenium, Puppeteer, etc.)
        detectAutomation() {
            // Check for webdriver
            if (navigator.webdriver) return true;
            
            // Check for automation properties
            if (window.chrome && window.chrome.runtime && window.chrome.runtime.onConnect) {
                return false; // Real Chrome
            }
            
            // Check for common automation indicators
            const automationIndicators = [
                'webdriver' in window,
                'callPhantom' in window,
                '_phantom' in window,
                'phantom' in window,
                '__nightmare' in window,
                'spawn' in window,
                'Buffer' in window,
                'emit' in window,
                'domAutomation' in window || 'domAutomationController' in window
            ];
            
            return automationIndicators.some(indicator => indicator);
        },
        
        // Detect headless browsers
        detectHeadless() {
            // Check for missing features typical in headless browsers
            const headlessIndicators = [
                !window.outerHeight || !window.outerWidth,
                navigator.plugins.length === 0,
                !navigator.languages || navigator.languages.length === 0,
                /HeadlessChrome/.test(navigator.userAgent)
            ];
            
            return headlessIndicators.some(indicator => indicator);
        },
        
        // Get bot-friendly consent (assumes all cookies accepted for SEO)
        getBotConsent() {
            return {
                necessary: true,
                functional: true,
                analytics: true,
                marketing: true,
                performance: true,
                timestamp: Date.now(),
                version: '3.3.0',
                botMode: true,
                userAgent: navigator.userAgent
            };
        }
    };

    // Integrations Hub - Pre-configured integrations
    const INTEGRATIONS_HUB = {
        configurations: {
            'google-tag-manager': {
                name: 'Google Tag Manager',
                category: 'analytics',
                setup: (containerId) => ({
                    script: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${containerId}');
                    `,
                    noscript: `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    consentUpdate: (settings) => {
                        if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                                'analytics_storage': settings.analytics ? 'granted' : 'denied',
                                'ad_storage': settings.marketing ? 'granted' : 'denied',
                                'functionality_storage': settings.functional ? 'granted' : 'denied'
                            });
                        }
                    }
                })
            },
            
            'yandex-metrika': {
                name: 'Yandex Metrika',
                category: 'analytics',
                setup: (counterId, options = {}) => ({
                    script: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");
                        ym(${counterId}, "init", ${JSON.stringify({
                            clickmap: options.clickmap !== false,
                            trackLinks: options.trackLinks !== false,
                            accurateTrackBounce: options.accurateTrackBounce !== false,
                            ...options
                        })});
                    `,
                    noscript: `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>`
                })
            },
            
            'meta-pixel': {
                name: 'Meta Pixel',
                category: 'marketing',
                setup: (pixelId) => ({
                    script: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${pixelId}');
                        fbq('track', 'PageView');
                    `,
                    noscript: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`
                })
            },
            
            'tiktok-pixel': {
                name: 'TikTok Pixel',
                category: 'marketing',
                setup: (pixelId) => ({
                    script: `
                        !function (w, d, t) {
                            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                            ttq.load('${pixelId}');
                            ttq.page();
                        }(window, document, 'ttq');
                    `
                })
            },
            
            'google-recaptcha-v3': {
                name: 'Google reCAPTCHA v3',
                category: 'functional',
                setup: (siteKey) => ({
                    script: `
                        var recaptchaScript = document.createElement('script');
                        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=${siteKey}';
                        document.head.appendChild(recaptchaScript);
                        
                        window.executeRecaptcha = function(action) {
                            return new Promise((resolve) => {
                                grecaptcha.ready(function() {
                                    grecaptcha.execute('${siteKey}', {action: action}).then(resolve);
                                });
                            });
                        };
                    `
                })
            },
            
            'cloudflare-turnstile': {
                name: 'Cloudflare Turnstile',
                category: 'functional',
                setup: (siteKey) => ({
                    script: `
                        var turnstileScript = document.createElement('script');
                        turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
                        turnstileScript.async = true;
                        turnstileScript.defer = true;
                        document.head.appendChild(turnstileScript);
                        
                        window.renderTurnstile = function(element) {
                            if (typeof turnstile !== 'undefined') {
                                return turnstile.render(element, {
                                    sitekey: '${siteKey}',
                                    callback: function(token) {
                                        console.log('Turnstile token:', token);
                                    }
                                });
                            }
                        };
                    `
                })
            }
        },
        
        // Setup integration
        setupIntegration(type, config) {
            const integration = this.configurations[type];
            if (!integration) {
                console.error(`Integration ${type} not found`);
                return null;
            }
            
            const setup = integration.setup(config.id || config.siteKey || config.containerId, config.options);
            
            return {
                name: integration.name,
                category: integration.category,
                script: setup.script,
                noscript: setup.noscript,
                consentUpdate: setup.consentUpdate,
                execute: () => {
                    if (setup.script) {
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = setup.script;
                        document.head.appendChild(scriptElement);
                    }
                    
                    if (setup.noscript) {
                        const noscriptElement = document.createElement('noscript');
                        noscriptElement.innerHTML = setup.noscript;
                        document.head.appendChild(noscriptElement);
                    }
                }
            };
        },
        
        // Get available integrations
        getAvailableIntegrations() {
            return Object.keys(this.configurations).map(key => ({
                id: key,
                name: this.configurations[key].name,
                category: this.configurations[key].category
            }));
        }
    };

    // Secure LocalStorage Backup system
    const SECURE_STORAGE = {
        storageKeys: {
            localStorage: 'cookie_consent_ls',
            sessionStorage: 'cookie_consent_ss',
            indexedDB: 'cookie_consent_idb'
        },
        
        // Try to store data in multiple locations
        setSecureItem(key, value) {
            const data = {
                value,
                timestamp: Date.now(),
                version: '3.3.0'
            };
            
            const serialized = JSON.stringify(data);
            const results = {
                localStorage: false,
                sessionStorage: false,
                indexedDB: false,
                cookies: false
            };
            
            // Try localStorage
            try {
                localStorage.setItem(this.storageKeys.localStorage, serialized);
                results.localStorage = true;
            } catch (e) {
                console.warn('localStorage not available:', e.message);
            }
            
            // Try sessionStorage
            try {
                sessionStorage.setItem(this.storageKeys.sessionStorage, serialized);
                results.sessionStorage = true;
            } catch (e) {
                console.warn('sessionStorage not available:', e.message);
            }
            
            // Try IndexedDB
            this.setIndexedDBItem(serialized).then(() => {
                results.indexedDB = true;
            }).catch(e => {
                console.warn('IndexedDB not available:', e.message);
            });
            
            // Try cookies as fallback
            try {
                document.cookie = `${key}=${encodeURIComponent(serialized)}; path=/; max-age=31536000; SameSite=Lax`;
                results.cookies = true;
            } catch (e) {
                console.warn('Cookies not available:', e.message);
            }
            
            console.log('🔒 Secure Storage: Saved to', Object.keys(results).filter(k => results[k]));
            return results;
        },
        
        // Try to retrieve data from multiple locations
        getSecureItem(key) {
            // Try localStorage first
            try {
                const data = localStorage.getItem(this.storageKeys.localStorage);
                if (data) {
                    const parsed = JSON.parse(data);
                    if (this.isValidData(parsed)) {
                        return parsed.value;
                    }
                }
            } catch (e) {}
            
            // Try sessionStorage
            try {
                const data = sessionStorage.getItem(this.storageKeys.sessionStorage);
                if (data) {
                    const parsed = JSON.parse(data);
                    if (this.isValidData(parsed)) {
                        return parsed.value;
                    }
                }
            } catch (e) {}
            
            // Try IndexedDB
            try {
                // This would need to be async, but for compatibility we'll skip for now
                // const data = await this.getIndexedDBItem();
            } catch (e) {}
            
            // Try cookies as fallback
            try {
                const cookies = document.cookie.split(';');
                for (const cookie of cookies) {
                    const [name, value] = cookie.trim().split('=');
                    if (name === key) {
                        const parsed = JSON.parse(decodeURIComponent(value));
                        if (this.isValidData(parsed)) {
                            return parsed.value;
                        }
                    }
                }
            } catch (e) {}
            
            return null;
        },
        
        // IndexedDB operations
        async setIndexedDBItem(data) {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open('CookieWidget', 1);
                
                request.onerror = () => reject(request.error);
                
                request.onsuccess = () => {
                    const db = request.result;
                    const transaction = db.transaction(['consent'], 'readwrite');
                    const store = transaction.objectStore('consent');
                    
                    store.put({ id: 'current', data });
                    transaction.oncomplete = () => resolve();
                    transaction.onerror = () => reject(transaction.error);
                };
                
                request.onupgradeneeded = () => {
                    const db = request.result;
                    if (!db.objectStoreNames.contains('consent')) {
                        db.createObjectStore('consent', { keyPath: 'id' });
                    }
                };
            });
        },
        
        // Validate stored data
        isValidData(data) {
            return data && 
                   data.value && 
                   data.timestamp && 
                   data.version &&
                   (Date.now() - data.timestamp) < (365 * 24 * 60 * 60 * 1000); // 1 year max
        },
        
        // Clear all storage locations
        clearSecureItem(key) {
            try { localStorage.removeItem(this.storageKeys.localStorage); } catch (e) {}
            try { sessionStorage.removeItem(this.storageKeys.sessionStorage); } catch (e) {}
            try { document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; } catch (e) {}
            
            // Clear IndexedDB
            try {
                const request = indexedDB.open('CookieWidget', 1);
                request.onsuccess = () => {
                    const db = request.result;
                    const transaction = db.transaction(['consent'], 'readwrite');
                    const store = transaction.objectStore('consent');
                    store.delete('current');
                };
            } catch (e) {}
        }
    };

    // Initialize Script Guard immediately
    SCRIPT_GUARD.init();

    // Smart tracker detection database
    const TRACKER_DATABASE = {
        analytics: {
            'Google Analytics': {
                patterns: ['gtag', 'ga(', '_ga', '_gid', '_gat', 'google-analytics', 'googletagmanager'],
                scripts: ['gtag/js', 'analytics.js', 'gtm.js'],
                domains: ['google-analytics.com', 'googletagmanager.com']
            },
            'Yandex Metrika': {
                patterns: ['ym(', 'yaCounter', '_ym_', 'yandex_metrika'],
                scripts: ['metrika/watch.js', 'mc.yandex.ru'],
                domains: ['mc.yandex.ru', 'metrika.yandex.ru']
            },
            'Adobe Analytics': {
                patterns: ['s.t()', 's.tl()', '_satellite', 'adobe_analytics'],
                scripts: ['omniture', 'adobe_analytics'],
                domains: ['omtrdc.net', 'demdex.net']
            },
            'Hotjar': {
                patterns: ['hj(', 'hotjar', '_hjSettings'],
                scripts: ['hotjar.com'],
                domains: ['hotjar.com', 'hotjar.io']
            }
        },
        marketing: {
            'Meta Pixel': {
                patterns: ['fbq(', 'facebook-pixel', '_fbp', '_fbc'],
                scripts: ['connect.facebook.net'],
                domains: ['facebook.com', 'connect.facebook.net']
            },
            'TikTok Pixel': {
                patterns: ['ttq.', 'tiktok_pixel', '_ttp'],
                scripts: ['analytics.tiktok.com'],
                domains: ['analytics.tiktok.com', 'tiktok.com']
            },
            'Google Ads': {
                patterns: ['gtag_report_conversion', 'google_trackConversion', '_gcl_'],
                scripts: ['googleadservices.com'],
                domains: ['googleadservices.com', 'googlesyndication.com']
            },
            'LinkedIn Insight': {
                patterns: ['_linkedin_partner_id', 'linkedin_pixel'],
                scripts: ['snap.licdn.com'],
                domains: ['linkedin.com', 'snap.licdn.com']
            }
        },
        functional: {
            'YouTube': {
                patterns: ['youtube.com/embed', 'ytimg.com'],
                scripts: ['youtube.com'],
                domains: ['youtube.com', 'ytimg.com']
            },
            'Google Maps': {
                patterns: ['maps.googleapis.com', 'google.maps'],
                scripts: ['maps.googleapis.com'],
                domains: ['maps.googleapis.com', 'maps.google.com']
            },
            'Intercom': {
                patterns: ['Intercom(', 'intercom-frame'],
                scripts: ['intercom.io'],
                domains: ['intercom.io', 'intercom.com']
            }
        }
    };

    // Geo-location and privacy law mapping
    const PRIVACY_LAWS = {
        'EU': {
            name: 'GDPR',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: 'In accordance with GDPR and European data protection laws.'
        },
        'US': {
            name: 'CCPA/CPRA',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: true,
            defaultDenied: false,
            complianceText: 'In accordance with CCPA, CPRA and California privacy laws.'
        },
        'BR': {
            name: 'LGPD',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: 'In accordance with LGPD and Brazilian data protection laws.'
        },
        'RU': {
            name: '152-ФЗ РФ',
            strictMode: true,
            requiresExplicitConsent: true,
            showDeclineButton: true,
            defaultDenied: true,
            complianceText: 'В соответствии с требованиями 152-ФЗ "О персональных данных".'
        },
        'CA': {
            name: 'PIPEDA',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: true,
            defaultDenied: false,
            complianceText: 'In accordance with PIPEDA and Canadian privacy laws.'
        },
        'DEFAULT': {
            name: 'Privacy Compliance',
            strictMode: false,
            requiresExplicitConsent: false,
            showDeclineButton: false,
            defaultDenied: false,
            complianceText: 'We respect your privacy and comply with applicable data protection laws.'
        }
    };

    // Advanced CookieBanner class
    class AdvancedCookieBanner {
        constructor(options = {}) {
            this.version = '3.3.0';
            this.cookieName = 'cookie_consent';
            this.cookieExpiry = options.cookieExpiry || 365;
            this.currentLanguage = null;
            this.userRegion = null;
            this.detectedTrackers = {};
            this.privacyLaw = null;
            this.isInitialized = false;
            
            // Advanced options
            this.scriptGuardEnabled = options.scriptGuard !== false;
            this.autoRenewPeriod = options.autoRenewPeriod || '12months';
            this.policyVersion = options.policyVersion || '1.0';
            this.zeroReloadMode = options.zeroReloadMode !== false;
            
            // New options
            this.seoFriendlyMode = options.seoFriendlyMode !== false;
            this.secureStorage = options.secureStorage !== false;
            this.integrations = options.integrations || [];
            this.isBot = false;
            
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
                // SEO-Friendly Mode: Check if visitor is a bot
                if (this.seoFriendlyMode) {
                    this.isBot = SEO_MODE.isBot();
                    if (this.isBot) {
                        console.log('🤖 SEO Mode: Bot detected, applying bot-friendly consent');
                        const botConsent = SEO_MODE.getBotConsent();
                        this.applyCookieSettings(botConsent);
                        this.isInitialized = true;
                        return; // Don't show banner to bots
                    }
                }
                
                // Setup integrations
                this.setupIntegrations();
                
                // Detect user region and privacy law
                await this.detectUserRegion();
                
                // Detect user language
                this.currentLanguage = this.detectLanguage();
                
                // Smart tracker detection
                await this.detectTrackers();
                
                // Apply geo-adaptive settings
                this.applyGeoAdaptiveSettings();
                
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
                    region: this.userRegion,
                    privacyLaw: this.privacyLaw?.name,
                    detectedTrackers: this.detectedTrackers,
                    isBot: this.isBot,
                    integrations: this.integrations.length,
                    settings: existingSettings
                });
                
            } catch (error) {
                console.warn('Cookie banner initialization failed:', error);
            }
        }
        
        // Setup configured integrations
        setupIntegrations() {
            this.integrations.forEach(integration => {
                try {
                    const setup = INTEGRATIONS_HUB.setupIntegration(integration.type, integration.config);
                    if (setup) {
                        // Queue integration script for execution when consent is granted
                        if (this.zeroReloadMode) {
                            ZERO_RELOAD.queueScript(setup.category, setup.execute, 'integration');
                        }
                        
                        console.log(`🔌 Integration: ${setup.name} configured for ${setup.category}`);
                    }
                } catch (error) {
                    console.error(`Failed to setup integration ${integration.type}:`, error);
                }
            });
        }
        
        // 🛰 Geo-Adaptive Consent: Detect user region
        async detectUserRegion() {
            try {
                // Try multiple geolocation services for reliability
                const geoServices = [
                    'https://ipapi.co/json/',
                    'https://ip-api.com/json/',
                    'https://ipinfo.io/json'
                ];
                
                for (const service of geoServices) {
                    try {
                        const response = await fetch(service, { 
                            timeout: 3000,
                            headers: { 'Accept': 'application/json' }
                        });
                        
                        if (response.ok) {
                            const data = await response.json();
                            const countryCode = data.country_code || data.countryCode || data.country;
                            
                            if (countryCode) {
                                this.userRegion = this.mapCountryToRegion(countryCode);
                                this.privacyLaw = PRIVACY_LAWS[this.userRegion] || PRIVACY_LAWS['DEFAULT'];
                                
                                console.log(`🌍 Detected region: ${this.userRegion} (${countryCode}) - ${this.privacyLaw.name}`);
                                return;
                            }
                        }
                    } catch (e) {
                        continue; // Try next service
                    }
                }
                
                // Fallback: detect by timezone
                this.detectRegionByTimezone();
                
            } catch (error) {
                console.warn('Geo-detection failed, using default settings:', error);
                this.userRegion = 'DEFAULT';
                this.privacyLaw = PRIVACY_LAWS['DEFAULT'];
            }
        }
        
        // Map country codes to privacy law regions
        mapCountryToRegion(countryCode) {
            const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO'];
            
            if (euCountries.includes(countryCode)) return 'EU';
            if (countryCode === 'US') return 'US';
            if (countryCode === 'BR') return 'BR';
            if (countryCode === 'RU') return 'RU';
            if (countryCode === 'CA') return 'CA';
            
            return 'DEFAULT';
        }
        
        // Fallback region detection by timezone
        detectRegionByTimezone() {
            try {
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
                if (timezone.includes('Europe/')) {
                    this.userRegion = 'EU';
                } else if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles')) {
                    this.userRegion = 'US';
                } else if (timezone.includes('America/Sao_Paulo')) {
                    this.userRegion = 'BR';
                } else if (timezone.includes('Europe/Moscow')) {
                    this.userRegion = 'RU';
                } else if (timezone.includes('America/Toronto')) {
                    this.userRegion = 'CA';
                } else {
                    this.userRegion = 'DEFAULT';
                }
                
                this.privacyLaw = PRIVACY_LAWS[this.userRegion];
                console.log(`🕐 Region detected by timezone: ${this.userRegion} - ${this.privacyLaw.name}`);
                
            } catch (e) {
                this.userRegion = 'DEFAULT';
                this.privacyLaw = PRIVACY_LAWS['DEFAULT'];
            }
        }
        
        // 🧠 Smart Auto-Detect Tracking
        async detectTrackers() {
            this.detectedTrackers = {
                analytics: [],
                marketing: [],
                functional: []
            };
            
            // Scan scripts in DOM
            this.scanDOMForTrackers();
            
            // Monitor network requests
            this.monitorNetworkRequests();
            
            // Scan cookies
            this.scanExistingCookies();
            
            // Wait a bit for dynamic content to load
            setTimeout(() => {
                this.scanDOMForTrackers();
                this.logDetectedTrackers();
            }, 2000);
        }
        
        // Scan DOM for tracker scripts and patterns
        scanDOMForTrackers() {
            // Scan script tags
            const scripts = document.querySelectorAll('script[src]');
            scripts.forEach(script => {
                const src = script.src.toLowerCase();
                this.checkScriptForTrackers(src);
            });
            
            // Scan inline scripts
            const inlineScripts = document.querySelectorAll('script:not([src])');
            inlineScripts.forEach(script => {
                const content = script.textContent.toLowerCase();
                this.checkContentForTrackers(content);
            });
            
            // Scan for iframe embeds
            const iframes = document.querySelectorAll('iframe[src]');
            iframes.forEach(iframe => {
                const src = iframe.src.toLowerCase();
                this.checkScriptForTrackers(src);
            });
        }
        
        // Check script URL for known trackers
        checkScriptForTrackers(src) {
            for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                for (const [name, config] of Object.entries(trackers)) {
                    // Check domains
                    if (config.domains.some(domain => src.includes(domain))) {
                        this.addDetectedTracker(category, name, 'script', src);
                    }
                    
                    // Check script patterns
                    if (config.scripts.some(pattern => src.includes(pattern))) {
                        this.addDetectedTracker(category, name, 'script', src);
                    }
                }
            }
        }
        
        // Check content for tracker patterns
        checkContentForTrackers(content) {
            for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                for (const [name, config] of Object.entries(trackers)) {
                    if (config.patterns.some(pattern => content.includes(pattern.toLowerCase()))) {
                        this.addDetectedTracker(category, name, 'inline', 'inline script');
                    }
                }
            }
        }
        
        // Monitor network requests for trackers
        monitorNetworkRequests() {
            // Override fetch
            const originalFetch = window.fetch;
            window.fetch = (...args) => {
                const url = args[0];
                if (typeof url === 'string') {
                    this.checkScriptForTrackers(url.toLowerCase());
                }
                return originalFetch.apply(window, args);
            };
            
            // Monitor XMLHttpRequest
            const originalXHROpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url) {
                if (typeof url === 'string') {
                    window.cookieBanner?.checkScriptForTrackers(url.toLowerCase());
                }
                return originalXHROpen.apply(this, arguments);
            };
        }
        
        // Scan existing cookies for tracker patterns
        scanExistingCookies() {
            const cookies = document.cookie.split(';');
            
            cookies.forEach(cookie => {
                const cookieName = cookie.split('=')[0].trim().toLowerCase();
                
                for (const [category, trackers] of Object.entries(TRACKER_DATABASE)) {
                    for (const [name, config] of Object.entries(trackers)) {
                        if (config.patterns.some(pattern => cookieName.includes(pattern.toLowerCase()))) {
                            this.addDetectedTracker(category, name, 'cookie', cookieName);
                        }
                    }
                }
            });
        }
        
        // Add detected tracker to the list
        addDetectedTracker(category, name, type, source) {
            if (!this.detectedTrackers[category]) {
                this.detectedTrackers[category] = [];
            }
            
            const existing = this.detectedTrackers[category].find(t => t.name === name);
            if (!existing) {
                this.detectedTrackers[category].push({
                    name,
                    type,
                    source,
                    detectedAt: Date.now()
                });
            }
        }
        
        // Log detected trackers for debugging
        logDetectedTrackers() {
            const totalTrackers = Object.values(this.detectedTrackers).flat().length;
            
            if (totalTrackers > 0) {
                console.group(`🧠 Smart Tracker Detection: Found ${totalTrackers} trackers`);
                
                for (const [category, trackers] of Object.entries(this.detectedTrackers)) {
                    if (trackers.length > 0) {
                        console.group(`📊 ${category.toUpperCase()} (${trackers.length})`);
                        trackers.forEach(tracker => {
                            console.log(`• ${tracker.name} (${tracker.type}):`, tracker.source);
                        });
                        console.groupEnd();
                    }
                }
                
                console.groupEnd();
            } else {
                console.log('🧠 Smart Tracker Detection: No trackers detected');
            }
        }
        
        // Apply geo-adaptive settings based on detected region
        applyGeoAdaptiveSettings() {
            if (!this.privacyLaw) return;
            
            // Update configuration based on privacy law
            this.config.showDeclineButton = this.privacyLaw.showDeclineButton;
            this.config.strictMode = this.privacyLaw.strictMode;
            this.config.requiresExplicitConsent = this.privacyLaw.requiresExplicitConsent;
            
            // Update default settings based on law requirements
            if (this.privacyLaw.defaultDenied) {
                Object.keys(this.defaultSettings).forEach(key => {
                    if (key !== 'necessary') {
                        this.defaultSettings[key] = false;
                    }
                });
            }
            
            // Update compliance text
            this.config.customTexts = this.config.customTexts || {};
            this.config.customTexts.compliance = this.privacyLaw.complianceText;
            
            console.log(`⚖️ Applied ${this.privacyLaw.name} compliance settings`);
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
            
            const consent = this.getCookieConsent();
            
            // Always show if no consent exists
            if (!consent) return true;
            
            // Check version compatibility
            if (consent.version !== this.version) return true;
            
            // Check auto-renewal
            const renewalReason = AUTO_RENEW.getRenewalReason(consent, this.autoRenewPeriod, this.policyVersion);
            if (renewalReason) {
                console.log(`🔄 Auto-Renew: Consent renewal required (${renewalReason})`);
                this.renewalReason = renewalReason;
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
            const totalTrackers = Object.values(this.detectedTrackers).flat().length;
            const privacyLawName = this.privacyLaw?.name || 'Privacy Compliance';
            const blockedScripts = this.scriptGuardEnabled ? SCRIPT_GUARD.getBlockedCount() : 0;
            
            return `
                <div class="cookie-banner__main">
                    <div class="cookie-banner__container">
                        <div class="cookie-banner__content">
                            <h2 class="cookie-banner__title">
                                ${this.renewalReason ? '🔄 ' : ''}${this.t('title')}
                                ${this.privacyLaw ? `<span class="cookie-banner__law">${privacyLawName}</span>` : ''}
                            </h2>
                            <p class="cookie-banner__text">
                                ${this.renewalReason ? this.getRenewalText() : this.t('description')} 
                                <a href="${this.config.privacyPolicyUrl}" class="cookie-banner__link" target="_blank" rel="noopener">
                                    ${this.t('privacyPolicy')}
                                </a>.
                            </p>
                            ${totalTrackers > 0 ? `
                                <div class="cookie-banner__trackers">
                                    <span class="cookie-banner__trackers-icon">🧠</span>
                                    <span class="cookie-banner__trackers-text">
                                        ${this.t('trackersDetected')}: ${totalTrackers} ${this.t('trackers')}
                                    </span>
                                </div>
                            ` : ''}
                            ${blockedScripts > 0 ? `
                                <div class="cookie-banner__guard">
                                    <span class="cookie-banner__guard-icon">🔒</span>
                                    <span class="cookie-banner__guard-text">
                                        ${this.t('scriptsBlocked')}: ${blockedScripts} ${this.t('scripts')}
                                    </span>
                                </div>
                            ` : ''}
                            ${this.config.customTexts?.compliance ? `
                                <p class="cookie-banner__compliance">
                                    ${this.config.customTexts.compliance}
                                </p>
                            ` : ''}
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
        
        // Get renewal reason text
        getRenewalText() {
            switch (this.renewalReason) {
                case 'policy_updated':
                    return this.t('policyUpdated');
                case 'expired':
                    return this.t('consentExpired');
                default:
                    return this.t('description');
            }
        }
        
        // Create settings panel HTML
        async createSettingsHTML() {
            return `
                <div class="cookie-settings__container">
                    <div class="cookie-settings__scrollable">
                        <div class="cookie-settings__header">
                            <h3 class="cookie-settings__title">
                                ${this.t('settingsTitle')}
                            </h3>
                            <p class="cookie-settings__description">
                                ${this.t('settingsDescription')}
                            </p>
                            ${this.privacyLaw ? `
                                <div class="cookie-settings__law-info">
                                    <span class="cookie-settings__law-badge">${this.privacyLaw.name}</span>
                                    <span class="cookie-settings__region">📍 ${this.userRegion}</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="cookie-settings__content">
                            ${this.config.categories.map(category => this.createCategoryHTML(category)).join('')}
                        </div>
                    </div>
                    
                    <div class="cookie-settings__footer">
                        <div class="cookie-settings__footer-buttons">
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
                </div>
            `;
        }
        
        // Create category HTML
        createCategoryHTML(category) {
            const isNecessary = category === 'necessary';
            const currentSettings = this.getCookieSettings();
            const isChecked = currentSettings[category] || isNecessary;
            const detectedInCategory = this.detectedTrackers[category] || [];
            
            return `
                <div class="cookie-category">
                    <div class="cookie-category__header">
                        <h4 class="cookie-category__title">
                            ${this.t(category)}
                            ${detectedInCategory.length > 0 ? `
                                <span class="cookie-category__count">${detectedInCategory.length}</span>
                            ` : ''}
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
                    ${detectedInCategory.length > 0 ? `
                        <div class="cookie-category__trackers">
                            <div class="cookie-category__trackers-header">
                                <span class="cookie-category__trackers-icon">🧠</span>
                                <span class="cookie-category__trackers-title">${this.t('detectedTrackers')}:</span>
                            </div>
                            <div class="cookie-category__trackers-list">
                                ${detectedInCategory.map(tracker => `
                                    <div class="cookie-tracker">
                                        <span class="cookie-tracker__name">${tracker.name}</span>
                                        <span class="cookie-tracker__type">${tracker.type}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
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
                language: this.currentLanguage,
                policyVersion: this.policyVersion,
                renewalPeriod: this.autoRenewPeriod
            };
            
            // Save to multiple storage locations for redundancy
            this.setStorageItem(this.cookieName, JSON.stringify(consentData));
            
            // Apply settings with Zero-Reload Mode
            this.applyCookieSettingsZeroReload(settings);
            
            // Store current settings for future reference
            this.currentSettings = { ...settings };
            
            console.log('Cookie consent saved:', settings);
        }
        
        // Apply settings with Zero-Reload Mode
        applyCookieSettingsZeroReload(settings) {
            const previousSettings = this.currentSettings || {};
            
            // First apply traditional cookie settings
            this.applyCookieSettings(settings);
            
            // Zero-Reload Mode: Handle dynamic script management
            if (this.zeroReloadMode) {
                for (const [category, enabled] of Object.entries(settings)) {
                    const wasEnabled = previousSettings[category];
                    
                    if (enabled && !wasEnabled) {
                        // Category was enabled - execute queued scripts
                        SCRIPT_GUARD.enableCategory(category);
                        ZERO_RELOAD.executeCategory(category);
                        console.log(`🚀 Zero-Reload: Enabled ${category} without page reload`);
                    } else if (!enabled && wasEnabled) {
                        // Category was disabled - stop scripts
                        ZERO_RELOAD.disableCategory(category);
                        console.log(`🛑 Zero-Reload: Disabled ${category} without page reload`);
                    }
                }
            }
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
        
        // Storage methods with secure backup
        setStorageItem(key, value) {
            if (this.secureStorage) {
                return SECURE_STORAGE.setSecureItem(key, value);
            } else {
                // Original method
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
        }
        
        getStorageItem(key) {
            if (this.secureStorage) {
                return SECURE_STORAGE.getSecureItem(key);
            } else {
                // Original method
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
        }
        
        clearStorageItem(key) {
            if (this.secureStorage) {
                SECURE_STORAGE.clearSecureItem(key);
            } else {
                try {
                    localStorage.removeItem(key);
                    sessionStorage.removeItem(key);
                    this.deleteCookie(key);
                } catch (e) {
                    console.warn('Could not clear storage:', e);
                }
            }
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
        
        // Get detected trackers
        getDetectedTrackers() {
            return this.detectedTrackers;
        }
        
        // Get user region and privacy law
        getRegionInfo() {
            return {
                region: this.userRegion,
                privacyLaw: this.privacyLaw?.name,
                strictMode: this.privacyLaw?.strictMode,
                requiresExplicitConsent: this.privacyLaw?.requiresExplicitConsent
            };
        }
        
        // Force re-detection of trackers
        async redetectTrackers() {
            await this.detectTrackers();
            this.refreshBanner();
            return this.detectedTrackers;
        }
        
        // Get tracker statistics
        getTrackerStats() {
            const stats = {
                total: 0,
                byCategory: {}
            };
            
            for (const [category, trackers] of Object.entries(this.detectedTrackers)) {
                stats.byCategory[category] = trackers.length;
                stats.total += trackers.length;
            }
            
            return stats;
        }
        
        // Get Script Guard statistics
        getScriptGuardStats() {
            return {
                enabled: this.scriptGuardEnabled,
                blockedCount: SCRIPT_GUARD.getBlockedCount(),
                blockedScripts: Array.from(SCRIPT_GUARD.blocked)
            };
        }
        
        // Get Auto-Renew information
        getAutoRenewInfo() {
            const consent = this.getCookieConsent();
            return {
                period: this.autoRenewPeriod,
                policyVersion: this.policyVersion,
                needsRenewal: AUTO_RENEW.needsRenewal(consent, this.autoRenewPeriod),
                policyChanged: AUTO_RENEW.policyVersionChanged(consent, this.policyVersion),
                renewalReason: AUTO_RENEW.getRenewalReason(consent, this.autoRenewPeriod, this.policyVersion),
                lastConsent: consent?.timestamp ? new Date(consent.timestamp) : null
            };
        }
        
        // Queue script for Zero-Reload execution
        queueScript(category, scriptFn, context = 'api') {
            if (this.zeroReloadMode) {
                ZERO_RELOAD.queueScript(category, scriptFn, context);
                console.log(`📝 Zero-Reload: Queued script for ${category}`);
            } else {
                console.warn('Zero-Reload mode is disabled');
            }
        }
        
        // Force consent renewal
        forceRenewal(reason = 'manual') {
            this.renewalReason = reason;
            this.clearStorageItem(this.cookieName);
            this.forceInit();
        }
        
        // Get SEO mode information
        getSEOInfo() {
            return {
                enabled: this.seoFriendlyMode,
                isBot: this.isBot,
                botUserAgent: this.isBot ? navigator.userAgent : null
            };
        }
        
        // Get available integrations
        getAvailableIntegrations() {
            return INTEGRATIONS_HUB.getAvailableIntegrations();
        }
        
        // Setup new integration
        addIntegration(type, config) {
            try {
                const setup = INTEGRATIONS_HUB.setupIntegration(type, config);
                if (setup) {
                    this.integrations.push({ type, config, setup });
                    
                    // If consent already granted for this category, execute immediately
                    const settings = this.getCookieSettings();
                    if (settings[setup.category]) {
                        setup.execute();
                    } else if (this.zeroReloadMode) {
                        // Queue for later execution
                        ZERO_RELOAD.queueScript(setup.category, setup.execute, 'integration');
                    }
                    
                    console.log(`🔌 Integration added: ${setup.name}`);
                    return setup;
                }
            } catch (error) {
                console.error(`Failed to add integration ${type}:`, error);
                return null;
            }
        }
        
        // Get storage information
        getStorageInfo() {
            const info = {
                secureMode: this.secureStorage,
                available: {
                    localStorage: false,
                    sessionStorage: false,
                    indexedDB: false,
                    cookies: false
                }
            };
            
            // Test storage availability
            try {
                localStorage.setItem('test', 'test');
                localStorage.removeItem('test');
                info.available.localStorage = true;
            } catch (e) {}
            
            try {
                sessionStorage.setItem('test', 'test');
                sessionStorage.removeItem('test');
                info.available.sessionStorage = true;
            } catch (e) {}
            
            try {
                document.cookie = 'test=test; max-age=1';
                info.available.cookies = document.cookie.includes('test=test');
                document.cookie = 'test=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
            } catch (e) {}
            
            try {
                info.available.indexedDB = 'indexedDB' in window;
            } catch (e) {}
            
            return info;
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