function initAnalytics() {
    renderSalesChart();
    renderGrowthChart();
    renderCategoryPieChart();
    renderRadarChart();
    renderPolarChart();
    renderBarChart();
}

function renderSalesChart() {
    const ctx = document.getElementById('salesChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales',
                data: [12000, 19000, 15000, 24500],
                borderColor: '#06B6D4',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#06B6D4',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
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

function renderGrowthChart() {
    const ctx = document.getElementById('growthChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'New Customers',
                    data: [45, 52, 48, 65, 72, 85],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Returning Customers',
                    data: [35, 42, 38, 48, 55, 62],
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
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

function renderCategoryPieChart() {
    const ctx = document.getElementById('categoryPieChart');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: [
                    '#06B6D4',
                    '#10B981',
                    '#F59E0B',
                    '#8B5CF6',
                    '#EC4899'
                ],
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
                        padding: 12,
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
}

function renderRadarChart() {
    const ctx = document.getElementById('radarChart');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Quality', 'Price', 'Service', 'Delivery', 'Support'],
            datasets: [{
                label: 'Current Quarter',
                data: [85, 78, 92, 88, 90],
                borderColor: '#06B6D4',
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                pointBackgroundColor: '#06B6D4',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                }
            }
        }
    });
}

function renderPolarChart() {
    const ctx = document.getElementById('polarChart');
    
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['North', 'South', 'East', 'West', 'Central'],
            datasets: [{
                data: [28, 22, 35, 18, 25],
                backgroundColor: [
                    'rgba(6, 182, 212, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(236, 72, 153, 0.7)'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
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
            },
            scales: {
                r: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                }
            }
        }
    });
}

function renderBarChart() {
    const ctx = document.getElementById('barChart');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'This Year',
                    data: [42000, 48000, 45000, 52000, 58000, 62000],
                    backgroundColor: '#06B6D4',
                    borderRadius: 6
                },
                {
                    label: 'Last Year',
                    data: [38000, 42000, 40000, 45000, 50000, 54000],
                    backgroundColor: '#94a3b8',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
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