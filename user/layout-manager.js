/**
 * JobGos Layout Manager
 * Centralized configuration and component rendering for Candidate/User pages.
 */

const JOBGOS_CONFIG = {
    brand: {
        name: "JobsGo",
        logo: "assets/icons/logo-primary.svg", // Fallback text used if image fails
        slogan: "Kết nối đam mê, kiến tạo sự nghiệp."
    },
    navigation: [
        { label: "Việc làm", link: "search.html", hasDropdown: true },
        { label: "Công ty", link: "company.html" },
        { label: "Blog", link: "blog.html" },
        { label: "Về chúng tôi", link: "#" }
    ],
    footer: {
        about: "JobGos là nền tảng tuyển dụng trực tuyến giúp kết nối hiệu quả giữa ứng viên và nhà tuyển dụng, mang đến trải nghiệm tìm việc nhanh chóng, minh bạch và cá nhân hóa.",
        sections: [
            {
                title: "Về JobGos",
                links: [
                    { label: "Giới thiệu", link: "index.html" },
                    { label: "Tuyển dụng", link: "#" },
                    { label: "Liên hệ", link: "#" },
                    { label: "Hỏi đáp", link: "#" }
                ]
            },
            {
                title: "Hồ sơ & CV",
                links: [
                    { label: "Quản lý CV", link: "user-dashboard.html" },
                    { label: "Tạo CV online", link: "#" },
                    { label: "Thư viện CV", link: "#" },
                    { label: "Hướng dẫn viết CV", link: "#" }
                ]
            },
            {
                title: "Dành cho ứng viên",
                links: [
                    { label: "Tìm việc làm", link: "search.html" },
                    { label: "Việc làm theo ngành", link: "#" },
                    { label: "Việc làm địa điểm", link: "#" },
                    { label: "Việc làm mới nhất", link: "#" }
                ]
            }
        ],
        contact: {
            address: "Hà Nội, Việt Nam",
            email: "contact@jobgos.vn",
            phone: "0123 456 789"
        },
        copyright: "© 2026 JobGos. All rights reserved. Thiết kế bởi nhóm sinh viên Công nghệ Đa phương tiện.",
        userDropdown: [
            {
                title: "Quản lý tìm việc",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Việc làm đã lưu", link: "#" },
                    { label: "Việc làm đã ứng tuyển", link: "#" },
                    { label: "Việc làm phù hợp", link: "#" },
                    { label: "Gợi ý việc làm", link: "#" }
                ]
            },
            {
                title: "Quản lý CV",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "CV của tôi", link: "user-dashboard.html" },
                    { label: "Chi tiết CV", link: "#" }
                ]
            },
            {
                title: "Cài đặt email & thông báo",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Cài đặt thông báo việc làm", link: "#" },
                    { label: "Cài đặt cá nhân email", link: "#" }
                ]
            },
            {
                title: "Cá nhân & bảo mật",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Hồ sơ của tôi", link: "update-profile.html" },
                    { label: "Sửa thông tin hồ sơ", link: "#" }
                ]
            }
        ]
    }
};

class LayoutManager {
    constructor() {
        this.config = JOBGOS_CONFIG;
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }

    renderHeader(containerId = 'header-container') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const navHtml = this.config.navigation.map(item => `
            <a href="${item.link}" class="user-nav-link">${item.label}</a>
        `).join('');

        const dropdownHtml = this.config.footer.userDropdown.map(section => `
            <div class="dropdown-section">
                <div class="section-title-wrapper" onclick="this.parentElement.classList.toggle('is-closed')">
                    <div class="section-title">
                        <img src="${section.icon}" alt="" onerror="this.src='assets/icons/ic_job.svg'">
                        <span>${section.title}</span>
                    </div>
                    <div class="section-arrow"></div>
                </div>
                <ul class="section-links">
                    ${section.links.map(link => `<li><a href="${link.link}" class="dropdown-link">${link.label}</a></li>`).join('')}
                </ul>
            </div>
        `).join('');

        const authHtml = this.isLoggedIn ? `
            <div class="user-auth-btns">
                <div class="user-avatar-wrapper" id="user-avatar-trigger">
                    <img src="assets/images/avtar_user_sample.svg" alt="User" class="user-avatar-img">
                    <span class="avatar-caret-custom"></span>
                </div>

                <div class="employer-cta">
                    <span class="cta-label">Bạn là nhà tuyển dụng?</span>
                    <a href="#" class="cta-link">Đăng tuyển ngay >></a>
                </div>

                <!-- User Dropdown Menu -->
                <div class="user-dropdown" id="user-dropdown-menu">
                    <div class="dropdown-user-info">
                        <img src="assets/images/avtar_user_sample.svg" alt="Avatar" style="width: 64px; border-radius: 50%; border: 2px solid var(--primary); padding: 2px;">
                        <div class="info-details">
                            <h4>Ninh Khoa</h4>
                            <p style="color: #64748b; display: flex; align-items: center; gap: 4px;">
                                <img src="assets/icons/ic_ticked.svg" style="width: 14px;" onerror="this.style.display='none'"> Tài khoản đã xác thực
                            </p>
                            <p style="font-size: 11px; opacity: 0.7;">ID: 12345678</p>
                        </div>
                        <div class="close-dropdown" id="close-dropdown-btn">×</div>
                    </div>

                    <div class="dropdown-menu-list">
                        ${dropdownHtml}
                    </div>

                    <button class="logout-btn-dropdown" onclick="layoutManager.logout()">
                        <img src="assets/images/ic_log_out.svg" alt="">
                        ĐĂNG XUẤT
                    </button>
                </div>
            </div>
        ` : `
            <div class="user-auth-btns">
                <a href="register.html" class="btn-secondary">Đăng ký</a>
                <a href="login.html" class="btn-primary">Đăng nhập</a>
            </div>
        `;

        container.innerHTML = `
            <header class="user-header-sticky">
                <div class="user-header-container">
                    <a href="index.html" class="user-brand">${this.config.brand.name}</a>
                    <nav class="user-nav">
                        ${navHtml}
                    </nav>
                    ${authHtml}
                </div>
            </header>
        `;

        if (this.isLoggedIn) {
            this.initializeDropdown();
        }
    }

    initializeDropdown() {
        const trigger = document.getElementById('user-avatar-trigger');
        const menu = document.getElementById('user-dropdown-menu');
        const closeBtn = document.getElementById('close-dropdown-btn');

        if (!trigger || !menu) return;

        const toggleMenu = (e) => {
            e.stopPropagation();
            menu.classList.toggle('is-active');
            trigger.classList.toggle('is-open');
        };

        const closeMenu = () => {
            menu.classList.remove('is-active');
            trigger.classList.remove('is-open');
        };

        trigger.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !trigger.contains(e.target)) {
                closeMenu();
            }
        });

        // Close on Scroll (optional but recommended for sticky headers)
        window.addEventListener('scroll', () => {
            if (menu.classList.contains('is-active')) {
                closeMenu();
            }
        }, { passive: true });
    }

    renderFooter(containerId = 'footer-container') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const sectionsHtml = this.config.footer.sections.map(section => `
            <div class="footer-col">
                <h4 class="footer-col-title">${section.title}</h4>
                <ul class="footer-links">
                    ${section.links.map(link => `<li><a href="${link.link}" class="footer-link">${link.label}</a></li>`).join('')}
                </ul>
            </div>
        `).join('');

        container.innerHTML = `
            <footer class="user-footer">
                <div class="user-footer-grid">
                    <div class="footer-col-brand">
                        <a href="index.html" class="user-brand">${this.config.brand.name}</a>
                        <p class="footer-desc">${this.config.footer.about}</p>
                        <div class="footer-socials">
                             <a href="#" class="social-icon"><img src="assets/icons/ic_fb.svg" alt="Facebook" onerror="this.src='https://cdn-icons-png.flaticon.com/512/733/733547.png'"></a>
                             <a href="#" class="social-icon"><img src="assets/icons/ic_linkedin.svg" alt="Linkedin" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png'"></a>
                             <a href="#" class="social-icon"><img src="assets/icons/ic_youtube.svg" alt="Youtube" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png'"></a>
                        </div>
                    </div>
                    ${sectionsHtml}
                    <div class="footer-col">
                        <h4 class="footer-col-title">Liên hệ</h4>
                        <ul class="footer-links" style="gap: 16px;">
                            <li class="footer-link"><img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" width="16"> ${this.config.footer.contact.address}</li>
                            <li class="footer-link"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width="16"> ${this.config.footer.contact.email}</li>
                            <li class="footer-link"><img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="16"> ${this.config.footer.contact.phone}</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>${this.config.footer.copyright}</p>
                    <div style="display: flex; gap: 24px;">
                        <a href="#" style="text-decoration: none; color: inherit;">Privacy Policy</a>
                        <a href="#" style="text-decoration: none; color: inherit;">Terms of Service</a>
                    </div>
                </div>
            </footer>
        `;
    }

    logout() {
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    }

    init() {
        this.renderHeader();
        this.renderFooter();
    }
}

const layoutManager = new LayoutManager();
document.addEventListener('DOMContentLoaded', () => layoutManager.init());
