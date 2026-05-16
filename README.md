# MatchPulse Prototype

Prototype cho web blog tổng hợp trận bóng đá có agent chat đi kèm.

## Mục tiêu sản phẩm

- Trang chủ hiển thị nhiều block trận đấu: score, league, trạng thái, tóm tắt, số bài liên quan.
- Trang chi tiết có bài phân tích, match center, video, chapter timeline và event timeline.
- Chat agent nhận context theo trận và theo mốc video hiện tại để trả lời sát nội dung.

## Kiến trúc đề xuất khi production

### Phân quyền

Prototype hiện tại có 2 role:

- `user`: role mặc định, xem trang chủ, đọc bài, xem video, chat với agent.
- `admin`: đăng nhập qua `#/admin`, thêm bài nháp, xóa bài, và sửa bài trực tiếp trên đúng giao diện bài viết qua `#/admin/edit/:id`.

Mật khẩu demo là `admin123` và chỉ dùng để mô phỏng UX. Khi production, quyền admin phải được enforce ở backend:

- Auth bằng session/JWT/OAuth, không hard-code password trong frontend.
- API admin cần kiểm tra role trước mọi thao tác `create`, `update`, `delete`.
- Ghi audit log cho bài do agent tự sinh và bài do admin sửa thủ công.
- Tách trạng thái bài: `draft`, `review`, `published`, `archived`.
- Với editor production, nên lưu theo block-level versioning để admin sửa từng block trên live preview mà vẫn rollback được.

### Data layer

- `matches`: metadata trận, đội, giải, giờ, trạng thái, ảnh cover, score.
- `match_events`: phút, loại sự kiện, cầu thủ, đội, mô tả, xG/xThreat nếu có.
- `media_assets`: video master, HLS/DASH manifests, thumbnails, transcript chunks.
- `articles`: bài viết/tóm tắt được sinh từ agent hoặc editor duyệt.
- `chat_sessions`: user id, match id, rolling summary, last turns, preferences.

### Video 90 phút

- Không serve trực tiếp một file MP4 lớn cho production.
- Encode thành HLS hoặc MPEG-DASH, adaptive bitrate, CDN cache.
- Frontend dùng `preload="metadata"` để load nhẹ.
- Tạo chapter markers từ `match_events`, highlights, transcript segments.
- Mỗi câu trả lời của agent có thể trả về `seek_to_seconds` để UI nhảy tới pha liên quan.

### Agent context management

Không gửi toàn bộ bài, transcript hoặc lịch sử chat vào agent. Mỗi request nên gom thành packet:

```json
{
  "match": "metadata, score, teams, stats",
  "media": "current timestamp, selected chapter, nearby transcript/events",
  "memory": "rolling summary, user preferences, unresolved questions",
  "retrieval": "top chunks by match_id + minute + topic",
  "last_turns": "4-6 lượt gần nhất"
}
```

Backend nên có context builder:

1. Nhận `match_id`, `message`, `current_time`, `selected_event`.
2. Lấy match packet từ database/cache.
3. Retrieve transcript/event chunks trong cửa sổ gần timestamp, ví dụ ±90 giây.
4. Retrieve các chunks chiến thuật/liên quan theo semantic search.
5. Ghép rolling summary của session và vài turn gần nhất.
6. Gọi agent API.
7. Lưu lại turn mới và cập nhật rolling summary khi vượt token budget.

## Cách chạy

Mở trực tiếp `index.html` trong browser, hoặc dùng một static server bất kỳ nếu muốn test giống môi trường web hơn.
