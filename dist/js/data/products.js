// products.js
const products = [
  // ==========================
  // 1. IPHONE SERIES
  // ==========================
  {
    id: "iphone-17-pro-max",
    category: "iphone",
    name: "iPhone 17 Pro Max",
    subName: "Pro đỉnh cao.",
    price: "36.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/342679/s16/iphone-17-pro-max-cam-thumb-650x650.png",
    storage: ["256GB", "512GB", "1TB", "2TB"],
    description:
      "Chip A19 Pro, hệ thống camera tối tân với khả năng zoom quang học vượt trội.",
  },
  {
    id: "iphone-17-pro",
    category: "iphone",
    name: "iPhone 17 Pro",
    subName: "Mạnh mẽ, chuyên nghiệp.",
    price: "34.999.000đ",
    status: "NEW",
    image:
      "https://www.apple.com/v/iphone/home/cj/images/overview/select/iphone_17pro__t1j902iw6kya_large_2x.jpg",
    storage: ["256GB", "512GB", "1TB"],
    description: "Cảm biến LiDAR thế hệ mới, quay video 8K ProRes.",
  },
  {
    id: "iphone-17",
    category: "iphone",
    name: "iPhone 17",
    subName: "Đa tài. Đa sắc.",
    price: "24.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png",
    storage: ["256GB", "512GB"],
    description:
      "Màn hình ProMotion 120Hz lần đầu tiên xuất hiện trên dòng tiêu chuẩn.",
  },
  {
    id: "iphone-air",
    category: "iphone",
    name: "iPhone Air",
    subName: "iPhone mỏng nhất từng có.",
    price: "31.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/342670/s16/iphone-air-xanh-thumb_0-650x650.png",
    storage: ["256GB", "1TB", "2TB"],
    description: "Thiết kế siêu mỏng nhẹ, định nghĩa lại trải nghiệm cầm nắm.",
  },
  {
    id: "iphone-17e",
    category: "iphone",
    name: "iPhone 17e",
    subName: "Đủ tính năng. Đầy giá trị.",
    price: "17.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/342693/s16/iphone-17e-512gb-trang-thumb-1-650x650.png",
    storage: ["256GB", "1TB", "2TB"],
    description: "Hiệu năng ổn định, pin trâu, giá tốt.",
  },
  {
    id: "iphone-16-plus",
    category: "iphone",
    name: "iPhone 16 Plus",
    subName: "Sức mạnh bền bỉ.",
    price: "24.390.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329138/s16/iphone-16-plus-xanh-luu-ly-thumbnew-650x650.png",
    storage: ["256GB", "512GB"],
    description: "Thời lượng pin ấn tượng nhất trong dòng iPhone.",
  },
  {
    id: "iphone-16",
    category: "iphone",
    name: "iPhone 16",
    subName: "Cân bằng mọi trải nghiệm.",
    price: "20.690.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329135/s16/iphone-16-hong-1-650x650.png",
    storage: ["256GB", "512GB", "1TB", "2TB"],
    description: "Màu sắc trẻ trung, hiệu năng ổn định.",
  },
  {
    id: "iphone-15-plus",
    category: "iphone",
    name: "iPhone 15 Plus",
    subName: "Đáng tin cậy.",
    price: "17.990.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-black-1-2-650x650.png",
    storage: ["128GB", "512GB"],
    description: "Khung nhôm, camera kép, pin khỏe.",
  },
  {
    id: "iphone-15-pro",
    category: "iphone",
    name: "iPhone 15 Pro",
    price: "23.999.000đ",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-black-1-2-650x650.png",
    storage: ["128GB", "256GB", "512GB"],
    description: "Khung Titan chắc chắn và nhẹ.",
  },

  // ==========================
  // 2. MACBOOK SERIES
  // ==========================
  {
    id: "macbook-neo",
    category: "mac",
    name: "MacBook Neo",
    subName: "Mac tuyệt vời. Giá bất ngờ.",
    price: "36.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/363537/s16/macbook-neo-13-inch-a18-pro-8gb-256gb-vang-thumb-650x650.png",
    storage: ["8GB-256GB", "8GB-512GB"],
    description: "Sự kết hợp hoàn hảo giữa tính di động và hiệu năng mạnh mẽ.",
  },
  {
    id: "macbook-pro-m4",
    category: "mac",
    name: "MacBook Pro M4",
    subName: "Nay với M5, M5 Pro, M5 Max.",
    price: "41.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/358086/s16/macbook-pro-14-inch-m5-16gb-512gb-den-650x650.png",
    storage: ["18GB-512GB"],
    description: "Màn hình Liquid Retina XDR cực sáng và chip M4 thế hệ mới.",
  },
  {
    id: "macbook-air-m4-13",
    category: "mac",
    name: 'MacBook Air M4 13"',
    subName: "Mỏng nhẹ vượt giới hạn.",
    price: "26.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/363474/s16/macbook-air-13-inch-m5-16gb-512gb-xanh-thumb-650x650.png",
    storage: ["256GB", "512GB"],
    description: "Không quạt, hoàn toàn yên tĩnh và mạnh mẽ tuyệt đối.",
  },
  {
    id: "macbook-air-15-m4",
    category: "mac",
    name: 'MacBook Air 15"',
    subName: "Lớn hơn, mạnh hơn.",
    price: "31.990.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/363477/s16/macbook-air-15-inch-m5-16gb-512gb-xanh-da-troi-nhat-650x650.png",
    storage: ["128GB", "512GB"],
    description: "Màn hình rộng rãi, phù hợp sáng tạo nội dung.",
  },
  {
    id: "macbook-pro-nano-m5",
    category: "mac",
    name: "MacBook Pro Nano M5",
    subName: "Hiệu năng vượt trội.",
    price: "41.390.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/358093/s16/macbook-pro-14-inch-nano-m5-16gb-512gb-đen-650x650.png",
    storage: ["18GB-256GB", "18GB-512GB"],
    description: "Chip M5 nano, tản nhiệt tối ưu.",
  },
  {
    id: "macbook-air-m3",
    category: "mac",
    name: "MacBook Air M3",
    subName: "Cân bằng giá trị.",
    price: "20.690.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/335367/s16/macbook-air-13-inch-m4-thumb-vang-650x650.png",
    storage: ["8GB-256GB"],
    description: "Lựa chọn tiết kiệm cho dân văn phòng.",
  },
  {
    id: "imac-24",
    category: "mac",
    name: 'iMac 24"',
    subName: "Màu sắc ấn tượng.",
    price: "34.999.000đ",
    status: "",
    image:
      "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/medium/imac_24_5ff7d017d_2x.jpg",
    storage: ["256GB", "512GB"],
    description: "Thiết kế all-in-one, chip M3, bảy màu sắc.",
  },

  // ==========================
  // 3. IPAD SERIES
  // ==========================
  {
    id: "ipad-pro-m5-13",
    category: "ipad",
    name: "iPad Pro M5 13 inch",
    subName: "Nay siêu mạnh mẽ với M5.",
    price: "38.890.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/358099/s16/ipad-pro-m5-wifi-13-inch-black-thumbtz-650x650.png",
    storage: ["256GB", "512GB"],
    description: "Màn hình OLED hai lớp rực rỡ và sức mạnh xử lý đỉnh cao.",
  },
  {
    id: "ipad-air-m4-11",
    category: "ipad",
    name: "iPad Air M4 11 inch",
    subName: "Sức mạnh Pro trong tầm tay.",
    price: "16.390.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/363417/s16/ipad-air-m4-11-inch-wifi-128gb-xam-thumb-650x650.png",
    storage: ["256GB", "512GB"],
    description:
      "Hỗ trợ Apple Pencil Pro mới cho trải nghiệm sáng tạo không giới hạn.",
  },
  {
    id: "ipad-11-a16",
    category: "ipad",
    name: "iPad 11 (A16) WiFi",
    subName: "Cơ bản mà tốt.",
    price: "9.290.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/335308/s16/ipad-11-wifi-yellow-thumb-650x650.png",
    storage: ["128GB", "512GB"],
    description: "Màn hình Retina, chip A16, dùng Apple Pencil USB-C.",
  },
  {
    id: "ipad-mini-7",
    category: "ipad",
    name: "iPad mini 7 WiFi",
    subName: "Nhỏ gọn, siêu cấu hình.",
    price: "13.290.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/331229/s16/ipad-mini-7-wifi-purple-thumbtz-650x650.png",
    storage: ["128GB"],
    description: "Chip A17 Pro, hỗ trợ Apple Pencil Pro, mang đi dễ dàng.",
  },
  {
    id: "ipad-pro-m5-11-5g",
    category: "ipad",
    name: "iPad Pro M5 11 inch 5G",
    subName: "Kết nối toàn cầu.",
    price: "40.690.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/522/358106/s16/ipad-pro-m5-cellular-wifi-11-inch-sliver-thumbtz-650x650.png",
    storage: ["256GB", "512GB", "1TB", "2TB"],
    description: "Phiên bản 5G, thích hợp làm việc mọi nơi.",
  },

  // ==========================
  // 4. WATCH SERIES
  // ==========================
  {
    id: "watch-s11",
    category: "watch",
    name: "Apple Watch Series 11",
    subName: "Thế hệ mới nhất.",
    price: "11.190.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/344750/s16/apple-watch-series-11-42mm-vien-nhom-day-the-thao-vang-hong-thumb-650x650.png",
    storage: ["42nm", "46nm"],
    description: "Theo dõi giấc ngủ nâng cao và sạc nhanh vượt trội.",
  },
  {
    id: "watch-se-3",
    category: "watch",
    name: "Apple Watch SE 3",
    subName: "Đủ tính năng. Đầy giá trị.",
    price: "6.790.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/344767/s16/apple-watch-se-3-40mm-vien-nhom-day-the-thao-starlight-thumb-650x650.png",
    storage: ["40nm", "44nm"],
    description:
      "Sự lựa chọn kinh tế nhất nhưng vẫn đầy đủ các tính năng an toàn.",
  },
  {
    id: "watch-ultra-3",
    category: "watch",
    name: "Apple Watch Ultra 3",
    subName: "Tay chơi cự phách.",
    price: "23.290.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/344766/s16/apple-watch-ultra-3-gps-cellular-49mm-vien-titanium-day-alpine-titan-thumb-650x650.png",
    storage: ["49nm"],
    description: "Vỏ Titanium bền bỉ cùng thời lượng pin lên đến 60 giờ.",
  },
  {
    id: "watch-se-3-gps",
    category: "watch",
    name: "Apple Watch SE 3 GPS",
    subName: "Thêm GPS, thêm tiện ích.",
    price: "8.390.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/344769/s16/apple-watch-se-3-gps-cellular-40mm-vien-nhom-day-the-thao-starlight-thumb-650x650.png",
    storage: ["40nm", "44nm"],
    description: "Tương tự SE 3 nhưng có GPS độc lập.",
  },
  {
    id: "watch-ultra-2",
    category: "watch",
    name: "Apple Watch Ultra 2 GPS",
    subName: "Bền bỉ, mạnh mẽ.",
    price: "17.690.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/329719/s16/apple-watch-ultra-2-gps-cellular-49mm-vien-titanium-day-alpine-xanh-den-650x650.png",
    storage: ["49nm"],
    description: "Thế hệ trước nhưng vẫn rất đáng mua.",
  },
  {
    id: "watch-series-10",
    category: "watch",
    name: "Apple Watch Series 10 GPS",
    subName: "Vòng đeo thông minh.",
    price: "9.990.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/7077/329708/s16/apple-watch-series-10-lte-42mm-day-vai-xanh-nhat-tb-650x650.png",
    storage: ["42nm", "46nm"],
    description: "Cảm biến nhịp tim thế hệ mới, theo dõi sức khỏe chính xác.",
  },

  // ==========================
  // 5. AIRPODS SERIES
  // ==========================
  {
    id: "airpods-pro-3",
    category: "airpods",
    name: "AirPods Pro 3",
    subName: "Khử tiếng ồn tai chưa từng nghe.",
    price: "6.390.000đ",
    status: "NEW",
    image:
      "https://cdnv2.tgdd.vn/mwg-static/topzone/Products/Images/54/344776/airpods-pro-3-100925-025234-544-650x650.png",
    description: "Chế độ xuyên thấu và âm thanh không gian được cá nhân hóa.",
  },
  {
    id: "airpods-max-2",
    category: "airpods",
    name: "AirPods Max 2",
    subName: "Trải nghiệm nghe sống động hơn.",
    price: "14.999.000đ",
    status: "NEW",
    image:
      "https://cdn.tgdd.vn/Products/Images/54/364790/s16/airpods-max-2-xanh-thumb-650x650.png",
    description:
      "Thiết kế over-ear sang trọng với các màu sắc mới và sạc USB-C.",
  },
  {
    id: "airpods-4",
    category: "airpods",
    name: "AirPods 4",
    subName: "Mới, gọn, hay.",
    price: "3.790.000đ",
    status: "NEW",
    image:
      "https://www.apple.com/v/airpods/shared/compare/g/images/compare/airpods_4_noise_cancellation__f2m5selau1ei_large_2x.png",
    description: "Chống ồn chủ động, âm thanh không gian.",
  },
  {
    id: "airpods-pro-gen2",
    category: "airpods",
    name: "AirPods Pro Gen 2",
    subName: "Chất lượng ổn định.",
    price: "5.190.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/54/315014/s16/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-thumb-12-1-650x650.png",
    description: "Sạc USB-C, chất âm trong trẻo.",
  },
  {
    id: "earpods-usb-c",
    category: "airpods",
    name: "EarPods jack cắm USB-C",
    subName: "Cổ điển và tin cậy.",
    price: "540.000đ",
    status: "",
    image:
      "https://cdn.tgdd.vn/Products/Images/54/315072/s16/tai-nghe-co-day-apple-mtjy3-thumb-650x650.png",
    description: "Sử dụng đơn giản, âm thanh rõ ràng với mọi thiết bị USB-C.",
  },
];

export default products;
