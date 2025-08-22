## 📌 Giới thiệu
Đây là **hệ thống quản lý đặt phòng khách sạn** bao gồm **trang khách hàng (Client)** và **trang quản trị (Admin)**.  
Dự án được xây dựng bằng **ReactJS + TailwindCSS + Ant Design** kết hợp **Socket.IO** để hỗ trợ tư vấn trực tuyến giữa khách hàng và quản lý.  

👉 Hệ thống kết nối với **Backend (Node.js + Express + PostgreSQL)** để hoạt động đầy đủ.

---

## 🚀 Tính năng chính

### 👤 Client (Người dùng)
- **Khám phá & Đặt phòng**
  - Xem danh sách khách sạn, phòng theo danh mục.
  - Bộ lọc: giá, tiện nghi, loại phòng, vị trí.
  - Xem chi tiết phòng (ảnh, mô tả, giá, tiện nghi).
  - Đặt phòng trực tuyến (chọn ngày nhận/trả).

- **Giỏ phòng & Thanh toán**
  - Quản lý giỏ đặt phòng.
  - Tính tổng tiền, phí dịch vụ.
  - Thanh toán online hoặc tại quầy (COD).

- **Quản lý tài khoản**
  - Đăng ký, đăng nhập, đăng xuất.
  - Xem & chỉnh sửa hồ sơ cá nhân.
  - Quản lý lịch sử đặt phòng.
  - Hủy phòng và đánh giá dịch vụ.

- **Tư vấn trực tuyến**
  - Chat trực tiếp với quản lý qua **Socket.IO** để được tư vấn phòng hoặc hỗ trợ khi đặt phòng.

---

### 🛠️ Admin (Quản lý khách sạn)
- **Quản lý phòng & khách sạn**
  - Thêm, sửa, xóa phòng.
  - Cập nhật tiện nghi, giá, mô tả, hình ảnh.
  - Quản lý khách sạn, chi nhánh.

- **Quản lý đặt phòng**
  - Xem danh sách đặt phòng theo trạng thái.
  - Cập nhật trạng thái: Chờ xác nhận, Đã xác nhận, Đang sử dụng, Hoàn tất, Hủy.
  - Quản lý thanh toán (online / COD).

- **Quản lý khách hàng**
  - Xem danh sách người dùng.
  - Hỗ trợ, tư vấn trực tuyến qua **Socket.IO**.
  - Khóa hoặc mở tài khoản.

- **Thống kê & Báo cáo**
  - Biểu đồ doanh thu theo ngày/tháng.
  - Thống kê tỷ lệ lấp phòng, phòng được đặt nhiều nhất.
  - Báo cáo đặt phòng & doanh thu.

- **Xác thực & Phân quyền**
  - Đăng nhập admin.
  - Phân quyền (Admin / Quản lý lễ tân / Nhân viên).

---

## 🛠️ Công nghệ sử dụng
- **Frontend (Client + Admin):**
  - ReactJS (Vite)
  - TailwindCSS (UI styling)
  - Ant Design (UI components)
  - React Router DOM (điều hướng)
  - Recharts (biểu đồ thống kê)
  - Socket.IO Client (chat real-time)

- **Backend:**
  - Node.js + Express.js
  - PostgreSQL (quản lý dữ liệu)
  - Socket.IO Server (chat real-time)
  - JWT (xác thực & phân quyền)
  - Cloudinary / S3 (upload ảnh phòng/khách sạn)
