// Mock data sản phẩm với hình ảnh thực tế
export const products = [
  {
    id: 1,
    name: 'Khóa học Tiếng Anh Giao Tiếp',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    shortDesc: 'Học tiếng Anh giao tiếp cơ bản đến nâng cao',
    longDesc: 'Khóa học tiếng Anh giao tiếp được thiết kế cho người mới bắt đầu. Bạn sẽ học được các kỹ năng giao tiếp cơ bản, phát âm chuẩn và tự tin trong các tình huống thực tế.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Luyện thi IELTS 7.0+',
    price: 800000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    shortDesc: 'Chuẩn bị cho kỳ thi IELTS với điểm số cao',
    longDesc: 'Khóa học luyện thi IELTS chuyên sâu giúp bạn đạt điểm số 7.0+. Bao gồm 4 kỹ năng: Listening, Reading, Writing, Speaking với giáo viên bản ngữ.',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Tiếng Anh cho Trẻ em',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
    shortDesc: 'Phương pháp học tiếng Anh hiệu quả cho trẻ',
    longDesc: 'Chương trình học tiếng Anh đặc biệt dành cho trẻ em từ 3-12 tuổi. Sử dụng phương pháp học qua trò chơi, bài hát và hoạt động tương tác.',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Tiếng Anh Thương mại',
    price: 300000,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    shortDesc: 'Tiếng Anh chuyên ngành thương mại và kinh doanh',
    longDesc: 'Khóa học tiếng Anh thương mại giúp bạn tự tin trong môi trường làm việc quốc tế. Học các thuật ngữ chuyên ngành và kỹ năng giao tiếp trong kinh doanh.',
    rating: 4.0
  },
  {
    id: 5,
    name: 'Phát âm Tiếng Anh Chuẩn',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    shortDesc: 'Luyện phát âm tiếng Anh chuẩn như người bản ngữ',
    longDesc: 'Khóa học chuyên sâu về phát âm tiếng Anh. Học cách phát âm chuẩn từng âm, từ, câu và ngữ điệu tự nhiên như người bản ngữ.',
    rating: 4.7
  },
  {
    id: 6,
    name: 'Tiếng Anh Du lịch',
    price: 2000000,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
    shortDesc: 'Tiếng Anh cần thiết cho du lịch và khám phá',
    longDesc: 'Khóa học tiếng Anh du lịch cung cấp từ vựng và mẫu câu cần thiết khi đi du lịch nước ngoài. Từ đặt phòng khách sạn đến giao tiếp với người dân địa phương.',
    rating: 5.0
  },
  {
    id: 7,
    name: 'Luyện thi TOEIC 800+',
    price: 600000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    shortDesc: 'Chuẩn bị cho kỳ thi TOEIC với điểm số cao',
    longDesc: 'Khóa học luyện thi TOEIC giúp bạn đạt điểm số 800+. Tập trung vào 2 kỹ năng: Listening và Reading với các bài tập thực hành và đề thi mẫu.',
    rating: 4.3
  },
  {
    id: 8,
    name: 'Tiếng Anh Công nghệ',
    price: 1100000,
    image: 'https://efis.edu.vn/wp-content/uploads/2020/06/tieng-anh-va-cong-nghe-1.png?w=400&h=300&fit=crop',
    shortDesc: 'Tiếng Anh chuyên ngành công nghệ thông tin',
    longDesc: 'Khóa học tiếng Anh chuyên ngành công nghệ thông tin. Học các thuật ngữ kỹ thuật, đọc tài liệu chuyên ngành và giao tiếp trong môi trường IT.',
    rating: 4.6
  },
  {
    id: 9,
    name: 'Tiếng Anh Y khoa',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    shortDesc: 'Tiếng Anh chuyên ngành y tế và chăm sóc sức khỏe',
    longDesc: 'Khóa học tiếng Anh chuyên ngành y khoa dành cho sinh viên y khoa và nhân viên y tế. Học các thuật ngữ y tế và kỹ năng giao tiếp với bệnh nhân.',
    rating: 4.1
  },
  {
    id: 10,
    name: 'Tiếng Anh Sáng tạo',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    shortDesc: 'Học tiếng Anh qua nghệ thuật và sáng tạo',
    longDesc: 'Khóa học tiếng Anh sáng tạo kết hợp học ngôn ngữ với nghệ thuật, âm nhạc và kể chuyện. Phù hợp cho những ai muốn học tiếng Anh một cách thú vị.',
    rating: 4.9
  },
]; 