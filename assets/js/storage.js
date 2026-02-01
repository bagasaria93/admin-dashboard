function getUsers() {
    const users = localStorage.getItem('dashboardUsers');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('dashboardUsers', JSON.stringify(users));
}

function getActivities() {
    const activities = localStorage.getItem('dashboardActivities');
    return activities ? JSON.parse(activities) : [];
}

function saveActivities(activities) {
    localStorage.setItem('dashboardActivities', JSON.stringify(activities));
}

function getNextId(arrayName) {
    const items = JSON.parse(localStorage.getItem(arrayName) || '[]');
    if (items.length === 0) return 1;
    return Math.max(...items.map(item => item.id)) + 1;
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
}