# Lean Export AI - Checkout-style demo page

Trang tĩnh responsive dùng để thử nghiệm offer và thu lead đăng ký demo Lean Export AI. Đây là prototype, không gửi dữ liệu biểu mẫu ra máy chủ.

## Chạy local

Từ thư mục này:

```bash
npx serve . -l 4173
```

Mở `http://127.0.0.1:4173`.

## Cấu trúc

- `index.html` - nội dung và biểu mẫu accessible.
- `styles.css` - design system black/gold/warm-white, desktop hai cột và mobile một cột.
- `script.js` - native form validation và trạng thái submit local.
- `assets/` - logo Leandigi và Roboto self-hosted.
- `screenshots/` - ảnh kiểm tra desktop 1440px và mobile 390px.

## Hành vi biểu mẫu

- Các trường bắt buộc dùng native HTML validation.
- Email dùng `type="email"`.
- Submit hợp lệ chỉ hiển thị trạng thái thành công trong trang.
- Không có request gửi dữ liệu và không log thông tin cá nhân ra console.
