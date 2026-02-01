function login(username, password, rememberMe) {
    const users = getDemoUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        const sessionUser = {
            id: user.id,
            username: user.username,
            fullName: user.fullName,
            role: user.role,
            loginTime: new Date().toISOString(),
            rememberMe: rememberMe
        };
        setCurrentUser(sessionUser);
        
        const activities = getActivities();
        activities.push({
            id: getNextId('dashboardActivities'),
            userName: user.fullName,
            action: 'Logged in to the system',
            timestamp: new Date().toISOString(),
            status: 'success'
        });
        saveActivities(activities);
        
        return true;
    }
    return false;
}

function logout() {
    const user = getCurrentUser();
    if (user) {
        const activities = getActivities();
        activities.push({
            id: getNextId('dashboardActivities'),
            userName: user.fullName,
            action: 'Logged out from the system',
            timestamp: new Date().toISOString(),
            status: 'success'
        });
        saveActivities(activities);
    }
    
    clearCurrentUser();
    window.location.href = 'index.html';
}

function isAuthenticated() {
    const user = getCurrentUser();
    if (!user) return false;
    
    const loginTime = new Date(user.loginTime);
    const now = new Date();
    const hoursSinceLogin = (now - loginTime) / (1000 * 60 * 60);
    
    if (!user.rememberMe && hoursSinceLogin > 24) {
        clearCurrentUser();
        return false;
    }
    
    return true;
}

function getDemoUsers() {
    const users = localStorage.getItem('demoUsers');
    return users ? JSON.parse(users) : [];
}