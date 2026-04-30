/**
 * JobsGO Layout Manager
 * Centralized configuration and component rendering for Candidate/User pages.
 */

const JOBSGO_CONFIG = {
    brand: {
        name: "JobsGO",
        logo: "assets/icons/logo-primary.svg",
        link: "index.html",
        slogan: "Kết nối đam mê, kiến tạo sự nghiệp."
    },
    navigation: [
        { 
            label: "Việc làm", 
            id: "nav-jobs",
            link: "search.html",
            subLinks: [
                { label: "Tìm việc làm", link: "search.html", isPrimary: true },
                { label: "Việc làm đã lưu", link: "saved-jobs.html", isPrimary: true },
                { label: "Việc làm đã ứng tuyển", link: "applied-jobs.html", isPrimary: true },
                { label: "Việc làm phù hợp", link: "#" }
            ]
        },
        { 
            label: "Công ty", 
            id: "nav-companies",
            link: "company.html",
            subLinks: [
                { label: "Danh sách công ty", link: "company.html", isPrimary: true },
                { label: "Công ty nổi bật", link: "#"},
                { label: "Công ty đang tuyển dụng", link: "#"},
                { label: "Đánh giá công ty", link: "#"}
            ]
        },
        { 
            label: "Blog", 
            id: "nav-blog",
            link: "blog.html",
            subLinks: [
                { label: "Tất cả bài viết", link: "blog.html", isPrimary: true },
                { label: "Kinh nghiệm tìm việc", link: "blog-job-experience.html", isPrimary: true },
                { label: "Cẩm nang nghề nghiệp", link: "blog-career-guide.html", isPrimary: true },
                { label: "Tin tức thị trường", link: "blog-market-news.html", isPrimary: true }
            ]
        },
        { 
            label: "Liên hệ", 
            id: "nav-contact",
            link: "contact.html",
            subLinks: [
                { label: "Hỗ trợ khách hàng", link: "contact.html", isPrimary: true },
                { label: "Gửi yêu cầu hỗ trợ", link: "contact.html", isPrimary: true },
                { label: "Chính sách & Điều khoản", link: "about.html", isPrimary: true },
                { label: "Báo lỗi hệ thống", link: "report-bug.html", isPrimary: true }
            ]
        }
    ],
    footer: {
        about: "JobsGO là nền tảng tuyển dụng trực tuyến giúp kết nối hiệu quả giữa ứng viên và nhà tuyển dụng, mang đến trải nghiệm tìm việc nhanh chóng, minh bạch và cá nhân hóa.",
        columns: [
            {
                sections: [
                    {
                        title: "Giới Thiệu",
                        content: "JobsGO là nền tảng tuyển dụng trực tuyến giúp kết nối hiệu quả giữa ứng viên và nhà tuyển dụng, mang đến trải nghiệm tìm việc nhanh chóng, minh bạch và cá nhân hóa."
                    }
                ],
                showSocial: true,
                showLogo: true
            },
            {
                sections: [
                    {
                        title: "Về JobsGO",
                        links: [
                            { label: "Giới thiệu", link: "about.html" },
                            { label: "Tuyển dụng", link: "careers.html", isPrimary: true },
                            { label: "Liên hệ", link: "contact.html", isPrimary: true },
                            { label: "Hỏi đáp", link: "about.html", isPrimary: true },
                            { label: "Chính sách bảo mật", link: "about.html", isPrimary: true },
                            { label: "Điều khoản sử dụng", link: "about.html", isPrimary: true }
                        ]
                    },
                    {
                        title: "Hồ sơ & CV",
                        links: [
                            { label: "Quản lý CV", link: "user-dashboard.html", isPrimary: true },
                            { label: "Tạo CV online", link: "create-cv.html", isPrimary: true },
                            { label: "Thư viện CV", link: "cv-library.html", isPrimary: true },
                            { label: "Hướng dẫn viết CV", link: "cv-guides.html", isPrimary: true }
                        ]
                    }
                ]
            },
            {
                sections: [
                    {
                        title: "Dành cho ứng viên",
                        links: [
                            { label: "Tìm việc làm", link: "search.html", isPrimary: true },
                            { label: "Việc làm theo ngành", link: "jobs-by-category.html", isPrimary: true },
                            { label: "Việc làm theo địa điểm", link: "jobs-by-location.html", isPrimary: true },
                            { label: "Việc làm nổi bật", link: "featured-jobs.html", isPrimary: true },
                            { label: "Việc làm mới nhất", link: "latest-jobs.html", isPrimary: true }
                        ]
                    },
                    {
                        title: "Dành cho nhà tuyển dụng",
                        links: [
                            { label: "Đăng tin tuyển dụng", link: "post-job.html", isPrimary: true },
                            { label: "Quản lý tin tuyển dụng", link: "manage-job-postings.html", isPrimary: true },
                            { label: "Tìm kiếm ứng viên", link: "search-candidates.html", isPrimary: true },
                            { label: "Báo cáo & thống kê", link: "reports.html", isPrimary: true }
                        ]
                    }
                ]
            },
            {
                sections: [
                    {
                        title: "Khám phá",
                        links: [
                            { label: "Gợi ý việc làm", link: "blog-market-news.html", isPrimary: true },
                            { label: "Blog & chia sẻ", link: "blog.html", isPrimary: true },
                            { label: "Cẩm nang nghề nghiệp", link: "blog-career-guide.html", isPrimary: true },
                            { label: "Công cụ hỗ trợ", link: "#" }
                        ]
                    },
                    {
                        title: "Thông tin liên hệ",
                        links: [
                            { label: "Hà Nội, Việt Nam", link: "#" },
                            { label: "contact@jobgos.vn", link: "mailto:contact@jobgos.vn" },
                            { label: "0123 456 789", link: "tel:0123456789" }
                        ]
                    }
                ]
            }
        ],
        copyright: "© 2026 JobsGO. All rights reserved. Thiết kế bởi nhóm sinh viên Công nghệ Đa phương tiện.",
        userDropdown: [
            {
                title: "Quản lý tìm việc",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Việc làm đã lưu", link: "saved-jobs.html" },
                    { label: "Việc làm đã ứng tuyển", link: "applied-jobs.html" },
                    { label: "Việc làm phù hợp", link: "index.html" },
                    { label: "Gợi ý việc làm", link: "index.html" }
                ]
            },
            {
                title: "Quản lý CV",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "CV của tôi", link: "manage-cv.html" },
                    { label: "Chi tiết CV", link: "index.html" }
                ]
            },
            {
                title: "Cài đặt email & thông báo",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Cài đặt thông báo việc làm", link: "job-notifications.html", isPrimary: true },
                    { label: "Cài đặt cá nhân email", link: "email-notifications.html", isPrimary: true }
                ]
            },
            {
                title: "Cá nhân & bảo mật",
                icon: "assets/images/ic_file_menu.png",
                links: [
                    { label: "Hồ sơ của tôi", link: "update-profile.html" },
                    { label: "Sửa thông tin hồ sơ", link: "update-profile.html?edit=true", isPrimary: true }
                ]
            }
        ]
    }
};

class LayoutManager {
    constructor() {
        this.config = JOBSGO_CONFIG;
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }

    renderHeader(containerId = 'header-container') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const navHtml = this.config.navigation.map(item => `
            <div class="user-nav-item-wrapper" id="${item.id}-wrapper">
                <a href="${item.link}" class="user-nav-link" id="${item.id}-trigger">
                    ${item.label}
                    <img src="assets/images/admin-quan-li-tin-tuyen-dung/chi-tiet/ic-dropdown.svg" class="nav-arrow-icon" alt="">
                </a>
                <div class="user-nav-dropdown" id="${item.id}-dropdown">
                    <div class="nav-dropdown-pointer"></div>
                    <div class="nav-dropdown-header">${item.label.toUpperCase()}</div>
                    <div class="nav-dropdown-list">
                        ${item.subLinks.map(sub => `
                            <a href="${sub.link}" class="nav-dropdown-link ${sub.isPrimary ? 'primary-link' : ''}">
                                ${sub.label}
                                ${sub.isPrimary ? `<img src="assets/images/blog-tin-tuc-thi-truong/ic-xem-chi-tiet.svg" alt="" width="14">` : ''}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
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
            <div class="user-auth-logged-in">
                <div class="user-avatar-trigger-wrapper" id="user-avatar-trigger">
                    <div class="user-avatar-wrapper">
                        <img src="assets/images/avtar_user_sample.svg" alt="User" class="user-avatar-img">
                        <div class="avatar-caret-custom"></div>
                    </div>
                </div>

                <div class="employer-cta">
                    <span class="cta-label">Bạn là nhà tuyển dụng?</span>
                    <a href="#" class="cta-link">Đăng tuyển ngay >></a>
                </div>

                <!-- User Dropdown Menu -->
                <div class="user-dropdown-menu" id="user-dropdown-menu">
                    <div class="dropdown-user-info">
                        <img src="assets/images/avtar_user_sample.svg" alt="Avatar" style="width: 64px; border-radius: 50%; border: 2px solid var(--primary); padding: 2px;">
                        <div class="info-details">
                            <h4>Nguyen Luong</h4>
                            <p style="color: #64748b; display: flex; align-items: center; gap: 4px; font-size: 13px;">
                                <img src="assets/icons/ic_ticked.svg" style="width: 14px;" onerror="this.style.display='none'"> Tài khoản đã xác thực
                            </p>
                            <p style="font-size: 11px; opacity: 0.7;">ID: 10293847</p>
                        </div>
                        <div class="close-dropdown" id="close-dropdown-btn">×</div>
                    </div>

                    <div class="dropdown-menu-list">
                        ${dropdownHtml}
                    </div>

                    <div class="dropdown-logout-wrapper">
                        <button class="logout-btn-dropdown" onclick="layoutManager.logout()">
                            <img src="assets/images/ic_log_out.svg" alt="">
                            ĐĂNG XUẤT
                        </button>
                    </div>
                </div>
            </div>
        ` : `
            <div class="user-auth-btns">
                <a href="#" class="auth-btn btn-secondary" onclick="localStorage.setItem('isLoggedIn', 'true'); window.location.reload();">Đăng ký</a>
                <a href="#" class="auth-btn btn-primary" onclick="localStorage.setItem('isLoggedIn', 'true'); window.location.reload();">Đăng nhập</a>
            </div>
        `;

        container.innerHTML = `
            <header class="user-header-sticky">
                <div class="user-header-container">
                    <a href="${this.config.brand.link}" class="user-brand">
                        <img src="${this.config.brand.logo}" alt="${this.config.brand.name}" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                        <span style="display: none;">${this.config.brand.name}</span>
                    </a>

                    <nav class="user-nav">
                        ${navHtml}
                    </nav>

                    <div class="user-actions">
                        ${authHtml}
                    </div>
                </div>
            </header>
        `;

        if (this.isLoggedIn) {
            this.initializeUserDropdown();
        }
        this.initializeNavDropdowns();
    }

    initializeNavDropdowns() {
        this.config.navigation.forEach(item => {
            const wrapper = document.getElementById(`${item.id}-wrapper`);
            const trigger = document.getElementById(`${item.id}-trigger`);
            const dropdown = document.getElementById(`${item.id}-dropdown`);

            if (wrapper && trigger && dropdown) {
                // Hover behavior
                wrapper.addEventListener('mouseenter', () => {
                    dropdown.classList.add('is-active');
                    trigger.classList.add('is-active');
                });
                wrapper.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('is-active');
                    trigger.classList.remove('is-active');
                });
            }
        });
    }

    initializeUserDropdown() {
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

        // Close on Scroll
        window.addEventListener('scroll', () => {
            if (menu.classList.contains('is-active')) {
                closeMenu();
            }
        }, { passive: true });
    }

    renderFooter(containerId = 'footer-container') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const columnsHtml = this.config.footer.columns.map(col => `
            <div class="footer-col">
                ${col.sections.map(section => `
                    <div class="footer-section">
                        <h4 class="footer-col-title">${section.title}</h4>
                        ${section.content ? `<p class="footer-desc">${section.content}</p>` : ''}
                        ${section.links ? `
                            <ul class="footer-links">
                                ${section.links.map(link => `
                                    <li class="footer-link"><a href="${link.link}">${link.label}</a></li>
                                `).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `).join('')}
                ${col.showLogo ? `<div class="footer-logo-text">JOBSGO</div>` : ''}
                ${col.showSocial ? `
                    <div class="footer-socials">
                         <a href="#" class="social-icon"><img src="assets/icons/ic_fb.svg" alt="Facebook" onerror="this.src='https://cdn-icons-png.flaticon.com/512/733/733547.png'"></a>
                         <a href="#" class="social-icon"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Youtube" width="20"></a>
                         <a href="#" class="social-icon"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20"></a>
                    </div>
                ` : ''}
            </div>
        `).join('');

        container.innerHTML = `
            <footer class="user-footer">
                <div class="footer-main">
                    ${columnsHtml}
                </div>
                <div class="footer-bottom">
                    <p>${this.config.footer.copyright}</p>
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
