// PWA Management для Cookie Widget
class PWAManager {
    constructor() {
        this.deferredPrompt = null;
        this.isInstalled = false;
        this.swRegistration = null;
        
        this.init();
    }
    
    async init() {
        // Register Service Worker
        await this.registerServiceWorker();
        
        // Setup PWA events
        this.setupPWAEvents();
        
        // Check install status
        this.checkInstallStatus();
        
        // Setup update notifications
        this.setupUpdateNotifications();
    }
    
    setupUpdateNotifications() {
        // Setup update notifications for PWA
        if (this.swRegistration) {
            this.swRegistration.addEventListener('updatefound', () => {
                const newWorker = this.swRegistration.installing;
                if (newWorker) {
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            this.showUpdateAvailable();
                        }
                    });
                }
            });
        }
    }
    
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                this.swRegistration = await navigator.serviceWorker.register('/sw.js', {
                    scope: '/'
                });
                
                console.log('PWA: Service Worker registered successfully');
                
                // Проверяем обновления каждые 60 секунд
                setInterval(() => {
                    this.swRegistration.update();
                }, 60000);
                
            } catch (error) {
                console.error('PWA: Service Worker registration failed', error);
            }
        }
    }
    
    setupPWAEvents() {
        // Событие beforeinstallprompt
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('%c📱 PWA %cInstall prompt available', 
                'background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
                'color: #333; font-weight: normal;');
            
            // Only prevent default if we're going to handle it ourselves
            if (this.shouldShowInstallButton()) {
                e.preventDefault();
                this.deferredPrompt = e;
                this.showInstallButton();
                console.log('%c📱 PWA %cHandling install prompt with custom button', 
                    'background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
                    'color: #333; font-weight: normal;');
            } else {
                console.log('%c📱 PWA %cLetting browser handle install prompt', 
                    'background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
                    'color: #333; font-weight: normal;');
            }
        });
        
        // Событие appinstalled
        window.addEventListener('appinstalled', () => {
            console.log('%c📱 PWA %cApp installed successfully', 
                'background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
                'color: #333; font-weight: normal;');
            this.isInstalled = true;
            this.hideInstallButton();
            this.showNotification('Приложение установлено!', 'success');
        });
        
        // Handle Service Worker changes
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
            });
        }
    }
    
    checkInstallStatus() {
        // Проверяем, запущено ли приложение как PWA
        if (window.matchMedia('(display-mode: standalone)').matches || 
            window.navigator.standalone === true) {
            this.isInstalled = true;
            console.log('PWA: App is running in standalone mode');
        }
        
        // Проверяем поддержку PWA функций
        this.checkPWASupport();
    }
    
    checkPWASupport() {
        const features = {
            serviceWorker: 'serviceWorker' in navigator,
            pushNotifications: 'PushManager' in window,
            notifications: 'Notification' in window,
            backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
            webShare: 'share' in navigator
        };
        
        console.log('PWA: Supported features', features);
        return features;
    }
    
    async installApp() {
        if (!this.deferredPrompt) {
            this.showNotification('Установка недоступна в этом браузере', 'warning');
            return;
        }
        
        try {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('PWA: User accepted the install prompt');
            } else {
                console.log('PWA: User dismissed the install prompt');
            }
            
            this.deferredPrompt = null;
        } catch (error) {
            console.error('PWA: Install prompt failed', error);
        }
    }
    
    shouldShowInstallButton() {
        // Check if we should show our custom install button
        // Don't show if already installed or if we're in standalone mode
        if (this.isInstalled || window.matchMedia('(display-mode: standalone)').matches) {
            return false;
        }
        
        // Check if we have an install button element on the page
        const installButton = document.querySelector('#pwa-install-button, .pwa-install, [data-pwa-install]');
        if (!installButton) {
            return false; // No install button element found, let browser handle it
        }
        
        // Always allow on desktop for better compatibility
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (!isMobile) {
            return true; // Show on desktop if we have a button element
        }
        
        // On mobile, be more permissive
        const isChrome = /Chrome/i.test(navigator.userAgent);
        const isFirefox = /Firefox/i.test(navigator.userAgent);
        const isSamsung = /SamsungBrowser/i.test(navigator.userAgent);
        
        // Show on most modern mobile browsers if we have a button element
        return isChrome || isFirefox || isSamsung;
    }
    
    showInstallButton() {
        // Создаем кнопку установки, если её нет
        let installButton = document.getElementById('pwa-install-button');
        
        if (!installButton) {
            installButton = document.createElement('button');
            installButton.id = 'pwa-install-button';
            installButton.className = 'pwa-install-btn';
            installButton.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Установить приложение
            `;
            
            installButton.addEventListener('click', () => this.installApp());
            
            // Добавляем кнопку в навигацию
            const navbar = document.querySelector('.navbar .container');
            if (navbar) {
                navbar.appendChild(installButton);
            }
        }
        
        installButton.style.display = 'flex';
    }
    
    hideInstallButton() {
        const installButton = document.getElementById('pwa-install-button');
        if (installButton) {
            installButton.style.display = 'none';
        }
    }
    
    showUpdateAvailable() {
        const updateBanner = document.createElement('div');
        updateBanner.className = 'pwa-update-banner';
        updateBanner.innerHTML = `
            <div class="pwa-update-content">
                <span>Доступно обновление приложения</span>
                <button onclick="pwaManager.applyUpdate()" class="pwa-update-btn">Обновить</button>
                <button onclick="this.parentElement.parentElement.remove()" class="pwa-close-btn">×</button>
            </div>
        `;
        
        document.body.appendChild(updateBanner);
        
        // Автоматически скрываем через 10 секунд
        setTimeout(() => {
            if (updateBanner.parentElement) {
                updateBanner.remove();
            }
        }, 10000);
    }
    
    async applyUpdate() {
        if (this.swRegistration && this.swRegistration.waiting) {
            this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
        }
    }
    
    async requestNotificationPermission() {
        if (!('Notification' in window)) {
            console.log('PWA: Notifications not supported');
            return false;
        }
        
        if (Notification.permission === 'granted') {
            return true;
        }
        
        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            return permission === 'granted';
        }
        
        return false;
    }
    
    showNotification(message, type = 'info') {
        // Создаем уведомление в интерфейсе
        const notification = document.createElement('div');
        notification.className = `pwa-notification pwa-notification--${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Показываем с анимацией
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Скрываем через 3 секунды
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    async shareContent(data) {
        if ('share' in navigator) {
            try {
                await navigator.share(data);
                console.log('PWA: Content shared successfully');
            } catch (error) {
                console.error('PWA: Share failed', error);
                this.fallbackShare(data);
            }
        } else {
            this.fallbackShare(data);
        }
    }
    
    fallbackShare(data) {
        // Fallback для браузеров без Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}`;
        window.open(shareUrl, '_blank');
    }
    
    async clearCache() {
        if (this.swRegistration) {
            const messageChannel = new MessageChannel();
            
            return new Promise((resolve) => {
                messageChannel.port1.onmessage = (event) => {
                    resolve(event.data.success);
                };
                
                this.swRegistration.active.postMessage(
                    { type: 'CLEAR_CACHE' },
                    [messageChannel.port2]
                );
            });
        }
    }
    
    getAppInfo() {
        return {
            isInstalled: this.isInstalled,
            isOnline: navigator.onLine,
            hasServiceWorker: !!this.swRegistration,
            features: this.checkPWASupport()
        };
    }
}

// Инициализируем PWA Manager
let pwaManager;

document.addEventListener('DOMContentLoaded', () => {
    pwaManager = new PWAManager();
    
    // Добавляем глобальные функции
    window.pwaManager = pwaManager;
    
    // Добавляем кнопку "Поделиться"
    const shareButton = document.createElement('button');
    shareButton.className = 'pwa-share-btn';
    shareButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
    `;
    
    shareButton.addEventListener('click', () => {
        pwaManager.shareContent({
            title: 'Cookie Widget - GDPR Compliant',
            text: 'Современный виджет cookie баннера с поддержкой GDPR и 152-ФЗ РФ',
            url: window.location.href
        });
    });
    
    // Добавляем кнопку в футер
    const footer = document.querySelector('.footer-social');
    if (footer) {
        footer.appendChild(shareButton);
    }
});

// Обработка онлайн/офлайн статуса
window.addEventListener('online', () => {
    pwaManager.showNotification('Соединение восстановлено', 'success');
});

window.addEventListener('offline', () => {
    pwaManager.showNotification('Работаем в офлайн режиме', 'warning');
});