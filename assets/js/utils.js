function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', dateOptions) + ' ' + date.toLocaleTimeString('en-US', timeOptions);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatNumber(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (type === 'success') {
        toast.className = 'fixed top-4 right-4 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50';
    } else if (type === 'error') {
        toast.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50';
    }
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
    
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

function exportToCSV(data, filename) {
    if (data.length === 0) {
        showToast('No data to export', 'error');
        return;
    }
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => {
            const value = row[header];
            if (typeof value === 'string' && value.includes(',')) {
                return `"${value}"`;
            }
            return value;
        }).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Export successful!', 'success');
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function toggleNotifications() {
    const menu = document.getElementById('notificationDropdown');
    const overlay = document.getElementById('dropdownOverlay');
    const profileMenu = document.getElementById('profileDropdown');
    
    if (profileMenu && profileMenu.classList.contains('show')) {
        profileMenu.classList.remove('show');
    }
    
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    
    if (menu.classList.contains('show')) {
        const badge = document.getElementById('notificationBadge');
        if (badge) badge.textContent = '0';
    }
}

function toggleProfile() {
    const menu = document.getElementById('profileDropdown');
    const overlay = document.getElementById('dropdownOverlay');
    const notifMenu = document.getElementById('notificationDropdown');
    
    if (notifMenu && notifMenu.classList.contains('show')) {
        notifMenu.classList.remove('show');
    }
    
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
}

function closeAllDropdowns() {
    const notifMenu = document.getElementById('notificationDropdown');
    const profileMenu = document.getElementById('profileDropdown');
    const overlay = document.getElementById('dropdownOverlay');
    
    if (notifMenu) notifMenu.classList.remove('show');
    if (profileMenu) profileMenu.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
}

function markAllAsRead() {
    showToast('All notifications marked as read', 'success');
    const badge = document.getElementById('notificationBadge');
    if (badge) badge.textContent = '0';
}

function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    }
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
    }
    
    showToast(`Switched to ${newTheme} mode`, 'success');
}

document.addEventListener('DOMContentLoaded', function() {
    const theme = getTheme();
    if (theme === 'dark') {
        document.body.classList.add('theme-dark');
    } else {
        document.body.classList.add('theme-light');
    }
});