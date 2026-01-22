// Скрипт для создания PNG фавиконов из SVG
// Запустите в браузере на странице generate-favicons.html

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="cookieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#45a049;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#cookieGradient)" stroke="#2E7D32" stroke-width="8"/>
  
  <!-- Cookie shape -->
  <circle cx="256" cy="256" r="180" fill="#8BC34A" opacity="0.9"/>
  
  <!-- Cookie chips/dots -->
  <circle cx="200" cy="200" r="15" fill="#2E7D32"/>
  <circle cx="320" cy="180" r="12" fill="#2E7D32"/>
  <circle cx="180" cy="280" r="10" fill="#2E7D32"/>
  <circle cx="300" cy="300" r="14" fill="#2E7D32"/>
  <circle cx="240" cy="320" r="8" fill="#2E7D32"/>
  <circle cx="320" cy="240" r="11" fill="#2E7D32"/>
  <circle cx="220" cy="160" r="9" fill="#2E7D32"/>
  
  <!-- Shield icon overlay -->
  <path d="M256 120 L200 140 L200 220 Q200 280 256 320 Q312 280 312 220 L312 140 Z" 
        fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" stroke-width="3"/>
  
  <!-- Checkmark -->
  <path d="M230 200 L250 220 L290 180" 
        stroke="rgba(255,255,255,0.9)" stroke-width="8" 
        stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

function createPNGFromSVG(svgString, size, filename) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        canvas.width = size;
        canvas.height = size;
        
        img.onload = function() {
            ctx.drawImage(img, 0, 0, size, size);
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                resolve();
            }, 'image/png');
        };
        
        const svgBlob = new Blob([svgString], {type: 'image/svg+xml'});
        const url = URL.createObjectURL(svgBlob);
        img.src = url;
    });
}

// Создаем все необходимые размеры
async function generateAllFavicons() {
    const sizes = [
        { size: 16, name: 'favicon-16x16.png' },
        { size: 32, name: 'favicon-32x32.png' },
        { size: 180, name: 'apple-touch-icon.png' },
        { size: 192, name: 'android-chrome-192x192.png' },
        { size: 512, name: 'android-chrome-512x512.png' },
        { size: 150, name: 'mstile-150x150.png' },
        { size: 96, name: 'shortcut-examples.png' },
        { size: 96, name: 'shortcut-docs.png' }
    ];
    
    console.log('Создание PNG фавиконов...');
    
    for (const { size, name } of sizes) {
        await createPNGFromSVG(svgContent, size, name);
        console.log(`✅ Создан ${name} (${size}x${size})`);
        
        // Небольшая задержка между загрузками
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('🎉 Все фавиконы созданы!');
    console.log('📝 Не забудьте создать favicon.ico из favicon-32x32.png');
}

// Создаем скриншоты для PWA (заглушки)
function createScreenshots() {
    // Wide screenshot (1280x720)
    const wideCanvas = document.createElement('canvas');
    const wideCtx = wideCanvas.getContext('2d');
    wideCanvas.width = 1280;
    wideCanvas.height = 720;
    
    // Создаем градиентный фон
    const wideGradient = wideCtx.createLinearGradient(0, 0, 1280, 720);
    wideGradient.addColorStop(0, '#667eea');
    wideGradient.addColorStop(1, '#764ba2');
    wideCtx.fillStyle = wideGradient;
    wideCtx.fillRect(0, 0, 1280, 720);
    
    // Добавляем текст
    wideCtx.fillStyle = 'white';
    wideCtx.font = 'bold 48px Inter, sans-serif';
    wideCtx.textAlign = 'center';
    wideCtx.fillText('Cookie Widget', 640, 300);
    wideCtx.font = '24px Inter, sans-serif';
    wideCtx.fillText('GDPR & 152-ФЗ Compliant Cookie Banner', 640, 350);
    
    wideCanvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'screenshot-wide.png';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    // Narrow screenshot (640x1136)
    const narrowCanvas = document.createElement('canvas');
    const narrowCtx = narrowCanvas.getContext('2d');
    narrowCanvas.width = 640;
    narrowCanvas.height = 1136;
    
    const narrowGradient = narrowCtx.createLinearGradient(0, 0, 640, 1136);
    narrowGradient.addColorStop(0, '#667eea');
    narrowGradient.addColorStop(1, '#764ba2');
    narrowCtx.fillStyle = narrowGradient;
    narrowCtx.fillRect(0, 0, 640, 1136);
    
    narrowCtx.fillStyle = 'white';
    narrowCtx.font = 'bold 36px Inter, sans-serif';
    narrowCtx.textAlign = 'center';
    narrowCtx.fillText('Cookie Widget', 320, 500);
    narrowCtx.font = '18px Inter, sans-serif';
    narrowCtx.fillText('GDPR & 152-ФЗ Compliant', 320, 540);
    narrowCtx.fillText('Cookie Banner', 320, 570);
    
    narrowCanvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'screenshot-narrow.png';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    console.log('📱 Скриншоты для PWA созданы');
}

// Экспортируем функции
if (typeof window !== 'undefined') {
    window.generateAllFavicons = generateAllFavicons;
    window.createScreenshots = createScreenshots;
    
    console.log('🍪 Генератор фавиконов загружен!');
    console.log('📋 Команды:');
    console.log('  generateAllFavicons() - создать все PNG фавиконы');
    console.log('  createScreenshots() - создать скриншоты для PWA');
}