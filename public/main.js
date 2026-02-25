const input = document.getElementById('url-input');
const iframe = document.getElementById('content');

// Register Scramjet Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {
        scope: '/service/' 
    }).then(() => {
        console.log('Geometry Dash Networks: Proxy Ready');
    });
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let url = input.value.trim();
        
        // Simple search/URL logic
        if (!url.includes('.') || url.includes(' ')) {
            url = `https://duckduckgo.com/?q=${encodeURIComponent(url)}`;
        } else if (!url.startsWith('http')) {
            url = `https://${url}`;
        }

        // Encode and route through Scramjet
        // Note: The prefix must match your config (default is /service/)
        iframe.src = `/service/${Scramjet.encodeUrl(url)}`;
    }
});
