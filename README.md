# Dự Án HTML Chuẩn

Đây là một kiến trúc thư mục dự án HTML chuẩn, theo các best practices hiện đại.

## Cấu Trúc Thư Mục

```
project-root/
├── index.html           # Trang chính
├── css/
│   └── style.css        # Stylesheet chính
├── js/
│   └── script.js        # JavaScript chính
├── assets/
│   ├── images/          # Hình ảnh
│   ├── fonts/           # Font chữ tùy chỉnh
│   └── icons/           # Icons
├── lib/                 # Thư viện bên thứ ba (nếu cần)
├── README.md            # File này
├── .gitignore           # Git ignore file
└── package.json         # Metadata dự án (tùy chọn)
```

## Mô Tả Từng Phần

### `index.html`
- Tập tin HTML chính
- Chứa cấu trúc trang web
- Tham chiếu đến CSS và JavaScript

### `css/` - Thư Mục CSS
- `style.css` - Stylesheet chính
- Sắp xếp từ reset → typography → layout → responsive

### `js/` - Thư Mục JavaScript
- `script.js` - JavaScript chính
- Chứa các hàm, event listeners, utilities

### `assets/` - Thư Mục Tài Nguyên
- **images/** - Hình ảnh (PNG, JPG, WebP, SVG)
- **fonts/** - Font chữ tùy chỉnh (TTF, OTF, WOFF)
- **icons/** - Icons và sprites

### `lib/` - Thư Viện Bên Thứ Ba
- Bootstrap, jQuery, v.v. (nếu sử dụng)

## Bắt Đầu

1. **Chỉnh sửa `index.html`** - Thêm nội dung của bạn
2. **Tùy chỉnh `css/style.css`** - Thiết kế theo ý của bạn
3. **Thêm JavaScript** - Tương tác trong `js/script.js`
4. **Thêm Assets** - Hình ảnh, font vào thư mục `assets/`

## Best Practices

### HTML
- ✅ Sử dụng semantic HTML5 tags
- ✅ Mobile-first design
- ✅ Đảm bảo accessibility

### CSS
- ✅ Mobile-first approach
- ✅ Organize: Reset → Typography → Layout → Components
- ✅ Sử dụng CSS variables cho colors, spacing
- ✅ BEM naming convention (tùy chọn)

### JavaScript
- ✅ DRY principle
- ✅ Event delegation
- ✅ Kiểm tra browser compatibility
- ✅ Minify cho production

## Optimization

### Performance
- Minify CSS/JavaScript
- Optimize images (WebP format)
- Lazy loading cho images
- Caching strategy

### SEO
- Meta tags trong `<head>`
- Semantic HTML structure
- Schema markup
- Clean URLs

## Công Cụ Hữu Ích

- **VS Code** - Code editor
- **Live Server** - Local development server
- **DevTools** - Browser developer tools
- **Lighthouse** - Performance audit

## Build & Deploy

```bash
# Chuẩn bị cho production
# - Minify CSS/JS
# - Optimize images
# - Update meta tags
# - Test trên multiple browsers

# Deploy
# - Upload files to hosting
# - Configure domain
# - Set up SSL
```

## Tài Liệu Tham Khảo

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [CSS Specification](https://www.w3.org/Style/CSS/)
- [JavaScript.info](https://javascript.info/)

## License

MIT License

## Liên Hệ

Nếu có câu hỏi, vui lòng liên hệ qua email hoặc tạo issue.

---

**Ngày tạo:** 2026-04-17  
**Phiên bản:** 1.0.0
