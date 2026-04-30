/**
 * Employer Layout Manager
 * Centralized component rendering for Employer pages including sidebar, header, and footer.
 */

const EMPLOYER_CONFIG = {
    sidebarMainItems: [
        { id: "nav-overview", label: "Tổng quan", link: "employer-dashboard.html", icon: "ic-tong-quan.svg" },
        { id: "nav-company-profile", label: "Hồ sơ công ty", link: "employer-company-profile.html", icon: "ic-ho-so-cong-ty.svg" },
        { id: "nav-manage-jobs", label: "Quản lý tin tuyển dụng", link: "employee-manage-job.html", icon: "ic-quan-li-tin-tuyen-dung.svg" },
        { id: "nav-manage-candidates", label: "Quản lý ứng viên", link: "employee-manage-user.html", icon: "ic-quan-li-ung-vien.svg" },
        { id: "nav-reports", label: "Báo cáo & phân tích", link: "reports.html", icon: "ic-bao-cao-phan-tich.svg" }
    ],
    user: {
        name: "Nguyen An Hoang",
        role: "NHÀ TUYỂN DỤNG",
        avatar: "avatar-user.svg", // located in assets/images/nha-tuyen-dung/tong-quan/
        verified: true
    }
};

class EmployerLayoutManager {
    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderSidebar();
            this.renderHeader();
            this.renderFooter();
            this.highlightActiveNav();
        });
    }

    static renderSidebar() {
        const container = document.getElementById('employer-sidebar-container');
        if (!container) return;

        const sidebarHTML = `
            <aside class="employer-sidebar">
                <div class="sidebar-brand">
                    <a href="employer-dashboard.html" class="logo">JobsGO</a>
                </div>
                
                <div class="sidebar-user-profile">
                    <div class="user-avatar-wrapper">
                        <img src="assets/images/nha-tuyen-dung/tong-quan/${EMPLOYER_CONFIG.user.avatar}" alt="User Avatar" class="user-avatar">
                    </div>
                    <div class="user-info">
                        <div class="user-name">${EMPLOYER_CONFIG.user.name}</div>
                        <div class="user-role">${EMPLOYER_CONFIG.user.role}</div>
                        ${EMPLOYER_CONFIG.user.verified ? `
                            <div class="verification-badge">
                                <img src="assets/images/nha-tuyen-dung/tong-quan/ic-da-xac-minh.svg" alt="Verified">
                                <span>Đã xác minh</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <nav class="sidebar-nav">
                    <ul>
                        ${EMPLOYER_CONFIG.sidebarMainItems.map(item => `
                            <li>
                                <a href="${item.link}" id="${item.id}" class="nav-item">
                                    <img src="assets/images/nha-tuyen-dung/tong-quan/${item.icon}" alt="${item.label}" class="nav-icon">
                                    <span>${item.label}</span>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </nav>
            </aside>
        `;
        container.innerHTML = sidebarHTML;
    }

    static renderHeader() {
        const container = document.getElementById('employer-header-container');
        if (!container) return;

        const headerHTML = `
            <header class="employer-header">
                <div class="header-left">
                    <button class="btn-primary-blue" onclick="window.location.href='post-job.html'">
                        <img src="assets/images/nha-tuyen-dung/tong-quan/ic-add.svg" alt="+">
                        Đăng tin mới
                    </button>
                    <button class="btn-header-outline" onclick="window.location.href='employee-manage-user.html'">
                        Tìm ứng viên
                    </button>
                    <button class="btn-header-outline" onclick="window.location.href='reports.html'">
                        Báo cáo
                    </button>
                </div>
                <div class="header-right">
                    <button class="btn-icon-bell" onclick="window.location.href='notifications.html'">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span class="notification-dot"></span>
                    </button>
                    <button class="btn-logout-outline" onclick="window.location.href='login.html'">
                        Đăng xuất
                    </button>
                </div>
            </header>
        `;
        container.innerHTML = headerHTML;
    }

    static renderFooter() {
        const container = document.getElementById('employer-footer-container');
        if (!container) return;

        const footerHTML = `
            <footer class="employer-footer">
                <p>&copy; 2026 <strong>JobsGO</strong>. All rights reserved. Thiết kế bởi nhóm sinh viên Công nghệ Đa phương tiện.</p>
            </footer>
        `;
        container.innerHTML = footerHTML;
    }

    static highlightActiveNav() {
        const currentPath = window.location.pathname.split('/').pop() || 'employer-dashboard.html';
        const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
        
        navItems.forEach(item => {
            const itemHref = item.getAttribute('href');
            if (itemHref === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

EmployerLayoutManager.init();
