// Performance Monitoring для Cookie Widget
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.observers = {};
        this.init();
    }
    
    init() {
        // Инициализируем мониторинг только если поддерживается
        if ('performance' in window) {
            this.setupPerformanceObservers();
            this.measurePageLoad();
            this.measureResourceLoading();
            this.setupUserTimings();
        }
    }
    
    setupPerformanceObservers() {
        // Core Web Vitals
        this.observeLCP(); // Largest Contentful Paint
        this.observeFID(); // First Input Delay
        this.observeCLS(); // Cumulative Layout Shift
        this.observeFCP(); // First Contentful Paint
        this.observeTTFB(); // Time to First Byte
    }
    
    observeLCP() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.metrics.lcp = lastEntry.startTime;
                    this.reportMetric('LCP', lastEntry.startTime);
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
                this.observers.lcp = observer;
            } catch (e) {
                console.warn('LCP observer not supported');
            }
        }
    }
    
    observeFID() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        this.metrics.fid = entry.processingStart - entry.startTime;
                        this.reportMetric('FID', this.metrics.fid);
                    });
                });
                observer.observe({ entryTypes: ['first-input'] });
                this.observers.fid = observer;
            } catch (e) {
                console.warn('FID observer not supported');
            }
        }
    }
    
    observeCLS() {
        if ('PerformanceObserver' in window) {
            try {
                let clsValue = 0;
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    this.metrics.cls = clsValue;
                    this.reportMetric('CLS', clsValue);
                });
                observer.observe({ entryTypes: ['layout-shift'] });
                this.observers.cls = observer;
            } catch (e) {
                console.warn('CLS observer not supported');
            }
        }
    }
    
    observeFCP() {
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (entry.name === 'first-contentful-paint') {
                            this.metrics.fcp = entry.startTime;
                            this.reportMetric('FCP', entry.startTime);
                        }
                    });
                });
                observer.observe({ entryTypes: ['paint'] });
                this.observers.fcp = observer;
            } catch (e) {
                console.warn('FCP observer not supported');
            }
        }
    }
    
    observeTTFB() {
        if (performance.timing) {
            const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
            this.metrics.ttfb = ttfb;
            this.reportMetric('TTFB', ttfb);
        }
    }
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            // Use requestIdleCallback for non-critical measurements
            const measureWhenIdle = () => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    this.metrics.pageLoad = {
                        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
                        loadComplete: navigation.loadEventEnd - navigation.navigationStart,
                        domInteractive: navigation.domInteractive - navigation.navigationStart
                    };
                    
                    this.reportMetric('DOM Content Loaded', this.metrics.pageLoad.domContentLoaded);
                    this.reportMetric('Load Complete', this.metrics.pageLoad.loadComplete);
                }
            };
            
            if ('requestIdleCallback' in window) {
                requestIdleCallback(measureWhenIdle);
            } else {
                setTimeout(measureWhenIdle, 100);
            }
        });
    }
    
    measureResourceLoading() {
        window.addEventListener('load', () => {
            const resources = performance.getEntriesByType('resource');
            const criticalResources = resources.filter(resource => 
                resource.name.includes('cookie-banner') ||
                resource.name.includes('styles.css') ||
                resource.name.includes('script.js')
            );
            
            this.metrics.resources = criticalResources.map(resource => ({
                name: resource.name.split('/').pop(),
                duration: resource.duration,
                size: resource.transferSize || 0,
                type: resource.initiatorType
            }));
            
            console.log('Critical Resources Performance:', this.metrics.resources);
        });
    }
    
    setupUserTimings() {
        // Измеряем время инициализации Cookie Widget
        performance.mark('cookie-widget-start');
        
        // Слушаем событие готовности виджета
        document.addEventListener('DOMContentLoaded', () => {
            if (window.cookieBanner) {
                performance.mark('cookie-widget-ready');
                performance.measure('cookie-widget-init', 'cookie-widget-start', 'cookie-widget-ready');
                
                const measure = performance.getEntriesByName('cookie-widget-init')[0];
                if (measure) {
                    this.metrics.widgetInit = measure.duration;
                    this.reportMetric('Cookie Widget Init', measure.duration);
                }
            }
        });
    }
    
    reportMetric(name, value) {
        // Определяем качество метрики
        const quality = this.getMetricQuality(name, value);
        
        console.log(`📊 ${name}: ${Math.round(value)}ms (${quality})`);
        
        // Отправляем в аналитику (если настроена)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance_metric', {
                metric_name: name,
                metric_value: Math.round(value),
                metric_quality: quality
            });
        }
        
        // Показываем предупреждения для плохих метрик
        if (quality === 'poor') {
            this.showPerformanceWarning(name, value);
        }
    }
    
    getMetricQuality(name, value) {
        const thresholds = {
            'LCP': { good: 2500, poor: 4000 },
            'FID': { good: 100, poor: 300 },
            'CLS': { good: 0.1, poor: 0.25 },
            'FCP': { good: 1800, poor: 3000 },
            'TTFB': { good: 800, poor: 1800 }
        };
        
        const threshold = thresholds[name];
        if (!threshold) return 'unknown';
        
        if (value <= threshold.good) return 'good';
        if (value <= threshold.poor) return 'needs-improvement';
        return 'poor';
    }
    
    showPerformanceWarning(name, value) {
        // Only show warnings in development mode
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            if (this.warningsShown && this.warningsShown[name]) return;
            
            const warning = document.createElement('div');
            warning.className = 'performance-warning';
            warning.innerHTML = `
                <div class="performance-warning-content">
                    <strong>⚠️ Производительность</strong>
                    <p>${name}: ${Math.round(value)}ms - требует улучшения</p>
                    <button onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `;
            
            // Add styles
            warning.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff9800;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                z-index: 10000;
                max-width: 300px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
            `;
            
            document.body.appendChild(warning);
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                if (warning.parentElement) {
                    warning.remove();
                }
            }, 5000);
            
            // Mark as shown
            this.warningsShown = this.warningsShown || {};
            this.warningsShown[name] = true;
        }
    }
    
    getReport() {
        return {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null,
            metrics: this.metrics,
            recommendations: this.getRecommendations()
        };
    }
    
    getRecommendations() {
        const recommendations = [];
        
        if (this.metrics.lcp > 4000) {
            recommendations.push('Оптимизируйте загрузку изображений и критических ресурсов');
        }
        
        if (this.metrics.fid > 300) {
            recommendations.push('Уменьшите время выполнения JavaScript');
        }
        
        if (this.metrics.cls > 0.25) {
            recommendations.push('Стабилизируйте макет страницы');
        }
        
        if (this.metrics.ttfb > 1800) {
            recommendations.push('Оптимизируйте время ответа сервера');
        }
        
        return recommendations;
    }
    
    exportReport() {
        const report = this.getReport();
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `performance-report-${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }
    
    disconnect() {
        // Отключаем все наблюдатели
        Object.values(this.observers).forEach(observer => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        });
    }
}

// Инициализируем мониторинг производительности
let performanceMonitor;

document.addEventListener('DOMContentLoaded', () => {
    performanceMonitor = new PerformanceMonitor();
    
    // Добавляем глобальный доступ
    window.performanceMonitor = performanceMonitor;
    
    // Добавляем команду в консоль для экспорта отчета
    console.log('💡 Используйте performanceMonitor.exportReport() для экспорта отчета о производительности');
});

// Отключаем мониторинг при выгрузке страницы
window.addEventListener('beforeunload', () => {
    if (performanceMonitor) {
        performanceMonitor.disconnect();
    }
});