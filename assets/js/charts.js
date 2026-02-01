function renderRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [32000, 38000, 35000, 42000, 48000, 45280],
                borderColor: '#06B6D4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: '#06B6D4'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    },
                    grid: {
                        color: '#f1f5f9'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderUserChart() {
    const ctx = document.getElementById('userChart');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Admin', 'Manager', 'User'],
            datasets: [{
                data: [5, 12, 28],
                backgroundColor: ['#06B6D4', '#10B981', '#F59E0B'],
                borderWidth: 3,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function renderTrafficChart() {
    const ctx = document.getElementById('trafficChart');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Direct', 'Social', 'Organic', 'Referral'],
            datasets: [{
                data: [35, 25, 30, 10],
                backgroundColor: ['#06B6D4', '#10B981', '#F59E0B', '#8B5CF6'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 12,
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}