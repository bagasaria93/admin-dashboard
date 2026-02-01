let currentPage = 1;
let itemsPerPage = 10;
let filteredUsers = [];
let allUsers = [];
let sortColumn = '';
let sortDirection = 'asc';
let deleteId = null;

function initUsersPage() {
    loadUsers();
    setupEventListeners();
}

function loadUsers() {
    allUsers = getUsers();
    filteredUsers = [...allUsers];
    renderUsers();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterUsers);
    document.getElementById('roleFilter').addEventListener('change', filterUsers);
    document.getElementById('statusFilter').addEventListener('change', filterUsers);
    document.getElementById('userForm').addEventListener('submit', saveUser);
}

function filterUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const role = document.getElementById('roleFilter').value;
    const status = document.getElementById('statusFilter').value;
    
    filteredUsers = allUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm) || 
                            user.email.toLowerCase().includes(searchTerm);
        const matchesRole = !role || user.role === role;
        const matchesStatus = !status || user.status === status;
        return matchesSearch && matchesRole && matchesStatus;
    });
    
    currentPage = 1;
    renderUsers();
}

function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    filteredUsers.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
    
    renderUsers();
}

function renderUsers() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUsers = filteredUsers.slice(start, end);
    
    const tbody = document.getElementById('usersTable');
    
    if (paginatedUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="px-6 py-12 text-center text-gray-500">No users found</td></tr>';
    } else {
        tbody.innerHTML = paginatedUsers.map(user => `
            <tr class="hover:bg-gray-50 transition">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">${user.name}</td>
                <td class="px-6 py-4 text-sm text-gray-600">${user.email}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'Admin' ? 'bg-cyan-100 text-cyan-800' : 
                        user.role === 'Manager' ? 'bg-green-100 text-green-800' : 
                        'bg-gray-100 text-gray-800'
                    }">
                        ${user.role}
                    </span>
                </td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }">
                        ${user.status}
                    </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">${formatDateTime(user.lastLogin)}</td>
                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center space-x-2">
                        <button onclick="editUser(${user.id})" class="text-blue-600 hover:text-blue-800">
                            <i data-lucide="edit" class="w-4 h-4"></i>
                        </button>
                        <button onclick="openDeleteModal(${user.id})" class="text-red-600 hover:text-red-800">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    document.getElementById('showingStart').textContent = filteredUsers.length > 0 ? start + 1 : 0;
    document.getElementById('showingEnd').textContent = Math.min(end, filteredUsers.length);
    document.getElementById('totalItems').textContent = filteredUsers.length;
    
    renderPagination();
    setTimeout(() => lucide.createIcons(), 100);
}

function renderPagination() {
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const button = document.createElement('button');
            button.textContent = i;
            button.className = i === currentPage 
                ? 'px-3 py-1 bg-cyan-600 text-white rounded-lg text-sm font-medium'
                : 'px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100';
            button.onclick = () => goToPage(i);
            pageNumbers.appendChild(button);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.className = 'px-2 text-gray-500';
            pageNumbers.appendChild(dots);
        }
    }
    
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
}

function goToPage(page) {
    currentPage = page;
    renderUsers();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderUsers();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderUsers();
    }
}

function openAddUserModal() {
    document.getElementById('modalTitle').textContent = 'Add New User';
    document.getElementById('userForm').reset();
    document.getElementById('userId').value = '';
    document.getElementById('userModal').classList.remove('hidden');
    setTimeout(() => lucide.createIcons(), 100);
}

function editUser(id) {
    const users = getUsers();
    const user = users.find(u => u.id === id);
    
    if (user) {
        document.getElementById('modalTitle').textContent = 'Edit User';
        document.getElementById('userId').value = user.id;
        document.getElementById('userFullName').value = user.name;
        document.getElementById('userEmail').value = user.email;
        document.getElementById('userPhone').value = user.phone;
        document.getElementById('userRoleSelect').value = user.role;
        document.getElementById('userDepartment').value = user.department;
        document.getElementById('userStatus').value = user.status;
        
        document.getElementById('userModal').classList.remove('hidden');
        setTimeout(() => lucide.createIcons(), 100);
    }
}

function closeUserModal() {
    document.getElementById('userModal').classList.add('hidden');
}

function saveUser(e) {
    e.preventDefault();
    
    const users = getUsers();
    const currentUser = getCurrentUser();
    const id = document.getElementById('userId').value;
    
    const user = {
        name: document.getElementById('userFullName').value,
        email: document.getElementById('userEmail').value,
        phone: document.getElementById('userPhone').value,
        role: document.getElementById('userRoleSelect').value,
        department: document.getElementById('userDepartment').value,
        status: document.getElementById('userStatus').value,
        lastLogin: new Date().toISOString()
    };
    
    if (id) {
        const index = users.findIndex(u => u.id === parseInt(id));
        users[index] = { ...users[index], ...user };
        showToast('User updated successfully!');
        
        const activities = getActivities();
        activities.push({
            id: getNextId('dashboardActivities'),
            userName: currentUser.fullName,
            action: `Updated user: ${user.name}`,
            timestamp: new Date().toISOString(),
            status: 'success'
        });
        saveActivities(activities);
    } else {
        user.id = getNextId('dashboardUsers');
        users.push(user);
        showToast('User added successfully!');
        
        const activities = getActivities();
        activities.push({
            id: getNextId('dashboardActivities'),
            userName: currentUser.fullName,
            action: `Added new user: ${user.name}`,
            timestamp: new Date().toISOString(),
            status: 'success'
        });
        saveActivities(activities);
    }
    
    saveUsers(users);
    closeUserModal();
    loadUsers();
}

function openDeleteModal(id) {
    deleteId = id;
    const users = getUsers();
    const user = users.find(u => u.id === id);
    
    if (user) {
        document.getElementById('deleteName').textContent = user.name;
        document.getElementById('deleteModal').classList.remove('hidden');
        setTimeout(() => lucide.createIcons(), 100);
    }
}

function closeDeleteModal() {
    deleteId = null;
    document.getElementById('deleteModal').classList.add('hidden');
}

function confirmDelete() {
    if (deleteId) {
        const users = getUsers();
        const user = users.find(u => u.id === deleteId);
        const filtered = users.filter(u => u.id !== deleteId);
        saveUsers(filtered);
        
        const currentUser = getCurrentUser();
        const activities = getActivities();
        activities.push({
            id: getNextId('dashboardActivities'),
            userName: currentUser.fullName,
            action: `Deleted user: ${user.name}`,
            timestamp: new Date().toISOString(),
            status: 'success'
        });
        saveActivities(activities);
        
        closeDeleteModal();
        loadUsers();
        showToast('User deleted successfully!');
    }
}

function exportUsers() {
    const users = getUsers();
    const data = users.map(u => ({
        Name: u.name,
        Email: u.email,
        Phone: u.phone,
        Role: u.role,
        Department: u.department,
        Status: u.status
    }));
    exportToCSV(data, 'users-export.csv');
}