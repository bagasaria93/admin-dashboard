const SAMPLE_USERS = [
    {
        id: 1,
        name: 'John Anderson',
        email: 'john.anderson@company.com',
        phone: '+1 234 567 8901',
        role: 'Admin',
        department: 'IT',
        status: 'Active',
        lastLogin: '2025-01-31T14:30:00'
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@company.com',
        phone: '+1 234 567 8902',
        role: 'Admin',
        department: 'Administration',
        status: 'Active',
        lastLogin: '2025-01-31T10:15:00'
    },
    {
        id: 3,
        name: 'Michael Chen',
        email: 'michael.chen@company.com',
        phone: '+1 234 567 8903',
        role: 'Manager',
        department: 'Sales',
        status: 'Active',
        lastLogin: '2025-01-31T09:45:00'
    },
    {
        id: 4,
        name: 'Emily Davis',
        email: 'emily.davis@company.com',
        phone: '+1 234 567 8904',
        role: 'Manager',
        department: 'Marketing',
        status: 'Active',
        lastLogin: '2025-01-30T16:20:00'
    },
    {
        id: 5,
        name: 'David Martinez',
        email: 'david.martinez@company.com',
        phone: '+1 234 567 8905',
        role: 'Manager',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-30T14:10:00'
    },
    {
        id: 6,
        name: 'Jessica Wilson',
        email: 'jessica.wilson@company.com',
        phone: '+1 234 567 8906',
        role: 'Manager',
        department: 'HR',
        status: 'Active',
        lastLogin: '2025-01-30T11:30:00'
    },
    {
        id: 7,
        name: 'James Brown',
        email: 'james.brown@company.com',
        phone: '+1 234 567 8907',
        role: 'User',
        department: 'Sales',
        status: 'Active',
        lastLogin: '2025-01-31T13:00:00'
    },
    {
        id: 8,
        name: 'Linda Garcia',
        email: 'linda.garcia@company.com',
        phone: '+1 234 567 8908',
        role: 'User',
        department: 'Marketing',
        status: 'Active',
        lastLogin: '2025-01-31T08:45:00'
    },
    {
        id: 9,
        name: 'Robert Taylor',
        email: 'robert.taylor@company.com',
        phone: '+1 234 567 8909',
        role: 'User',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-30T15:30:00'
    },
    {
        id: 10,
        name: 'Patricia Anderson',
        email: 'patricia.anderson@company.com',
        phone: '+1 234 567 8910',
        role: 'User',
        department: 'Finance',
        status: 'Active',
        lastLogin: '2025-01-30T12:15:00'
    },
    {
        id: 11,
        name: 'Christopher Lee',
        email: 'christopher.lee@company.com',
        phone: '+1 234 567 8911',
        role: 'Manager',
        department: 'Engineering',
        status: 'Active',
        lastLogin: '2025-01-29T16:40:00'
    },
    {
        id: 12,
        name: 'Amanda White',
        email: 'amanda.white@company.com',
        phone: '+1 234 567 8912',
        role: 'User',
        department: 'Support',
        status: 'Active',
        lastLogin: '2025-01-29T14:20:00'
    },
    {
        id: 13,
        name: 'Daniel Harris',
        email: 'daniel.harris@company.com',
        phone: '+1 234 567 8913',
        role: 'User',
        department: 'Sales',
        status: 'Inactive',
        lastLogin: '2025-01-20T10:00:00'
    },
    {
        id: 14,
        name: 'Jennifer Martin',
        email: 'jennifer.martin@company.com',
        phone: '+1 234 567 8914',
        role: 'User',
        department: 'Marketing',
        status: 'Active',
        lastLogin: '2025-01-31T11:25:00'
    },
    {
        id: 15,
        name: 'Matthew Thompson',
        email: 'matthew.thompson@company.com',
        phone: '+1 234 567 8915',
        role: 'User',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-30T13:50:00'
    },
    {
        id: 16,
        name: 'Elizabeth Moore',
        email: 'elizabeth.moore@company.com',
        phone: '+1 234 567 8916',
        role: 'Manager',
        department: 'Customer Success',
        status: 'Active',
        lastLogin: '2025-01-31T09:30:00'
    },
    {
        id: 17,
        name: 'Anthony Jackson',
        email: 'anthony.jackson@company.com',
        phone: '+1 234 567 8917',
        role: 'User',
        department: 'Engineering',
        status: 'Active',
        lastLogin: '2025-01-30T16:10:00'
    },
    {
        id: 18,
        name: 'Maria Rodriguez',
        email: 'maria.rodriguez@company.com',
        phone: '+1 234 567 8918',
        role: 'User',
        department: 'HR',
        status: 'Active',
        lastLogin: '2025-01-29T15:45:00'
    },
    {
        id: 19,
        name: 'Joshua Lewis',
        email: 'joshua.lewis@company.com',
        phone: '+1 234 567 8919',
        role: 'User',
        department: 'Finance',
        status: 'Inactive',
        lastLogin: '2025-01-15T11:20:00'
    },
    {
        id: 20,
        name: 'Lisa Walker',
        email: 'lisa.walker@company.com',
        phone: '+1 234 567 8920',
        role: 'User',
        department: 'Support',
        status: 'Active',
        lastLogin: '2025-01-31T10:00:00'
    },
    {
        id: 21,
        name: 'Kevin Hall',
        email: 'kevin.hall@company.com',
        phone: '+1 234 567 8921',
        role: 'Manager',
        department: 'Product',
        status: 'Active',
        lastLogin: '2025-01-30T14:35:00'
    },
    {
        id: 22,
        name: 'Nancy Allen',
        email: 'nancy.allen@company.com',
        phone: '+1 234 567 8922',
        role: 'User',
        department: 'Sales',
        status: 'Active',
        lastLogin: '2025-01-31T12:40:00'
    },
    {
        id: 23,
        name: 'Steven Young',
        email: 'steven.young@company.com',
        phone: '+1 234 567 8923',
        role: 'User',
        department: 'Marketing',
        status: 'Active',
        lastLogin: '2025-01-29T13:15:00'
    },
    {
        id: 24,
        name: 'Karen King',
        email: 'karen.king@company.com',
        phone: '+1 234 567 8924',
        role: 'User',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-30T09:20:00'
    },
    {
        id: 25,
        name: 'Paul Wright',
        email: 'paul.wright@company.com',
        phone: '+1 234 567 8925',
        role: 'User',
        department: 'Engineering',
        status: 'Active',
        lastLogin: '2025-01-31T15:10:00'
    },
    {
        id: 26,
        name: 'Sandra Lopez',
        email: 'sandra.lopez@company.com',
        phone: '+1 234 567 8926',
        role: 'Manager',
        department: 'Design',
        status: 'Active',
        lastLogin: '2025-01-30T11:50:00'
    },
    {
        id: 27,
        name: 'Mark Hill',
        email: 'mark.hill@company.com',
        phone: '+1 234 567 8927',
        role: 'User',
        department: 'Support',
        status: 'Active',
        lastLogin: '2025-01-29T10:30:00'
    },
    {
        id: 28,
        name: 'Betty Scott',
        email: 'betty.scott@company.com',
        phone: '+1 234 567 8928',
        role: 'User',
        department: 'Finance',
        status: 'Active',
        lastLogin: '2025-01-31T08:15:00'
    },
    {
        id: 29,
        name: 'Donald Green',
        email: 'donald.green@company.com',
        phone: '+1 234 567 8929',
        role: 'Manager',
        department: 'Legal',
        status: 'Active',
        lastLogin: '2025-01-30T10:45:00'
    },
    {
        id: 30,
        name: 'Helen Adams',
        email: 'helen.adams@company.com',
        phone: '+1 234 567 8930',
        role: 'User',
        department: 'HR',
        status: 'Active',
        lastLogin: '2025-01-29T14:00:00'
    },
    {
        id: 31,
        name: 'George Baker',
        email: 'george.baker@company.com',
        phone: '+1 234 567 8931',
        role: 'User',
        department: 'Sales',
        status: 'Active',
        lastLogin: '2025-01-31T13:30:00'
    },
    {
        id: 32,
        name: 'Dorothy Nelson',
        email: 'dorothy.nelson@company.com',
        phone: '+1 234 567 8932',
        role: 'User',
        department: 'Marketing',
        status: 'Inactive',
        lastLogin: '2025-01-18T09:00:00'
    },
    {
        id: 33,
        name: 'Kenneth Carter',
        email: 'kenneth.carter@company.com',
        phone: '+1 234 567 8933',
        role: 'Manager',
        department: 'R&D',
        status: 'Active',
        lastLogin: '2025-01-30T15:20:00'
    },
    {
        id: 34,
        name: 'Carol Mitchell',
        email: 'carol.mitchell@company.com',
        phone: '+1 234 567 8934',
        role: 'User',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-31T09:55:00'
    },
    {
        id: 35,
        name: 'Brian Perez',
        email: 'brian.perez@company.com',
        phone: '+1 234 567 8935',
        role: 'User',
        department: 'Engineering',
        status: 'Active',
        lastLogin: '2025-01-29T16:25:00'
    },
    {
        id: 36,
        name: 'Michelle Roberts',
        email: 'michelle.roberts@company.com',
        phone: '+1 234 567 8936',
        role: 'User',
        department: 'Support',
        status: 'Active',
        lastLogin: '2025-01-30T12:40:00'
    },
    {
        id: 37,
        name: 'Edward Turner',
        email: 'edward.turner@company.com',
        phone: '+1 234 567 8937',
        role: 'User',
        department: 'Finance',
        status: 'Active',
        lastLogin: '2025-01-31T11:10:00'
    },
    {
        id: 38,
        name: 'Laura Phillips',
        email: 'laura.phillips@company.com',
        phone: '+1 234 567 8938',
        role: 'Manager',
        department: 'Content',
        status: 'Active',
        lastLogin: '2025-01-29T13:45:00'
    },
    {
        id: 39,
        name: 'Jason Campbell',
        email: 'jason.campbell@company.com',
        phone: '+1 234 567 8939',
        role: 'User',
        department: 'Sales',
        status: 'Active',
        lastLogin: '2025-01-30T14:55:00'
    },
    {
        id: 40,
        name: 'Sharon Parker',
        email: 'sharon.parker@company.com',
        phone: '+1 234 567 8940',
        role: 'User',
        department: 'Marketing',
        status: 'Active',
        lastLogin: '2025-01-31T10:20:00'
    },
    {
        id: 41,
        name: 'Ryan Evans',
        email: 'ryan.evans@company.com',
        phone: '+1 234 567 8941',
        role: 'User',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2025-01-29T11:35:00'
    },
    {
        id: 42,
        name: 'Kimberly Edwards',
        email: 'kimberly.edwards@company.com',
        phone: '+1 234 567 8942',
        role: 'User',
        department: 'HR',
        status: 'Active',
        lastLogin: '2025-01-30T08:50:00'
    },
    {
        id: 43,
        name: 'Jacob Collins',
        email: 'jacob.collins@company.com',
        phone: '+1 234 567 8943',
        role: 'User',
        department: 'Engineering',
        status: 'Active',
        lastLogin: '2025-01-31T14:05:00'
    },
    {
        id: 44,
        name: 'Deborah Stewart',
        email: 'deborah.stewart@company.com',
        phone: '+1 234 567 8944',
        role: 'User',
        department: 'Support',
        status: 'Active',
        lastLogin: '2025-01-29T15:15:00'
    },
    {
        id: 45,
        name: 'Gary Morris',
        email: 'gary.morris@company.com',
        phone: '+1 234 567 8945',
        role: 'Admin',
        department: 'IT',
        status: 'Active',
        lastLogin: '2025-01-31T12:00:00'
    }
];

const SAMPLE_ACTIVITIES = [
    {
        id: 1,
        userName: 'John Anderson',
        action: 'Updated system settings',
        timestamp: '2025-01-31T14:30:00',
        status: 'success'
    },
    {
        id: 2,
        userName: 'Sarah Johnson',
        action: 'Added new user to the system',
        timestamp: '2025-01-31T13:45:00',
        status: 'success'
    },
    {
        id: 3,
        userName: 'Michael Chen',
        action: 'Generated monthly sales report',
        timestamp: '2025-01-31T12:20:00',
        status: 'success'
    },
    {
        id: 4,
        userName: 'Emily Davis',
        action: 'Updated marketing campaign',
        timestamp: '2025-01-31T11:15:00',
        status: 'success'
    },
    {
        id: 5,
        userName: 'David Martinez',
        action: 'Approved purchase order',
        timestamp: '2025-01-31T10:30:00',
        status: 'success'
    },
    {
        id: 6,
        userName: 'Jessica Wilson',
        action: 'Updated employee records',
        timestamp: '2025-01-31T09:45:00',
        status: 'success'
    },
    {
        id: 7,
        userName: 'James Brown',
        action: 'Created new sales lead',
        timestamp: '2025-01-31T08:50:00',
        status: 'success'
    },
    {
        id: 8,
        userName: 'Linda Garcia',
        action: 'Published blog post',
        timestamp: '2025-01-30T16:40:00',
        status: 'success'
    },
    {
        id: 9,
        userName: 'Robert Taylor',
        action: 'Completed inventory audit',
        timestamp: '2025-01-30T15:25:00',
        status: 'success'
    },
    {
        id: 10,
        userName: 'Patricia Anderson',
        action: 'Processed quarterly invoices',
        timestamp: '2025-01-30T14:10:00',
        status: 'success'
    },
    {
        id: 11,
        userName: 'Christopher Lee',
        action: 'Deployed new feature update',
        timestamp: '2025-01-30T13:30:00',
        status: 'success'
    },
    {
        id: 12,
        userName: 'Amanda White',
        action: 'Resolved customer support ticket',
        timestamp: '2025-01-30T12:15:00',
        status: 'success'
    },
    {
        id: 13,
        userName: 'Jennifer Martin',
        action: 'Scheduled social media posts',
        timestamp: '2025-01-30T11:00:00',
        status: 'success'
    },
    {
        id: 14,
        userName: 'Matthew Thompson',
        action: 'Updated shipping policies',
        timestamp: '2025-01-30T10:20:00',
        status: 'success'
    },
    {
        id: 15,
        userName: 'Elizabeth Moore',
        action: 'Conducted customer feedback survey',
        timestamp: '2025-01-30T09:35:00',
        status: 'success'
    }
];

const DEMO_USERS = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        fullName: 'Admin User',
        role: 'Administrator'
    },
    {
        id: 2,
        username: 'user',
        password: 'user123',
        fullName: 'Demo User',
        role: 'User'
    }
];

function initializeSampleData() {
    localStorage.setItem('dashboardUsers', JSON.stringify(SAMPLE_USERS));
    localStorage.setItem('dashboardActivities', JSON.stringify(SAMPLE_ACTIVITIES));
    localStorage.setItem('demoUsers', JSON.stringify(DEMO_USERS));
}

initializeSampleData();