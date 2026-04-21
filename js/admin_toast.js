/**
 * Shared Admin Toast Component logic
 * Usage: showToast('Your message here')
 */
function showToast(message) {
    let toast = document.getElementById('globalToast');
    
    // Create toast element if it doesn't exist
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'top-success-alert-j';
        document.body.appendChild(toast);
    }
    
    // Update content
    toast.innerHTML = `
        <span class="toast-text-j" style="color: #2563EB; font-weight: 800; font-size: 20px;">${message}</span>
        <div class="close-toast-v2-j" onclick="hideToast('globalToast')">&times;</div>
    `;

    // Show toast
    toast.style.display = 'flex';
    
    // Auto hide after 3 seconds
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        hideToast('globalToast');
    }, 3000);
}

function hideToast(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}
