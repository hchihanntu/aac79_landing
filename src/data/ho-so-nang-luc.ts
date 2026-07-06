export type Profile = {
  slug: string;
  navLabel: string;
  group: "AAC79" | "Đối tác";
  eyebrow: string;
  title: string;
  description: string;
  file: string;
};

export const profiles: Profile[] = [
  {
    slug: "aac79-plus",
    navLabel: "Hồ sơ năng lực AAC79 PLUS",
    group: "AAC79",
    eyebrow: "AAC79 PLUS",
    title: "Hồ sơ năng lực AAC79 PLUS",
    description:
      "Tài liệu giới thiệu năng lực AAC79 PLUS về vật liệu, giải pháp và dịch vụ thi công bê tông khí chưng áp.",
    file: "/ho-so-nang-luc-aac79-plus.pdf",
  },
  {
    slug: "aac79-protech",
    navLabel: "Hồ sơ năng lực AAC79 PROTECH",
    group: "AAC79",
    eyebrow: "AAC79 PROTECH",
    title: "Hồ sơ năng lực AAC79 PROTECH",
    description:
      "Tài liệu năng lực 2026 về thẩm định kết cấu, kiểm định công trình, quan trắc sức khỏe công trình và các giải pháp công nghệ BIM-UAV-Digital Twin.",
    file: "/ho-so-nang-luc-aac79-protech.pdf",
  },
  {
    slug: "binh-duong-dia-chat",
    navLabel: "Đối tác - CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG (Địa chất)",
    group: "Đối tác",
    eyebrow: "Đối tác",
    title: "CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG",
    description: "Hồ sơ năng lực địa chất của CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG.",
    file: "/ho-so-nang-luc-binh-duong-dia-chat.pdf",
  },
  {
    slug: "binh-duong-kiem-dinh",
    navLabel: "Đối tác - CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG (Kiểm định)",
    group: "Đối tác",
    eyebrow: "Đối tác",
    title: "CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG",
    description: "Hồ sơ năng lực kiểm định của CÔNG TY TNHH TƯ VẤN KIỂM ĐỊNH XÂY DỰNG BÌNH DƯƠNG.",
    file: "/ho-so-nang-luc-binh-duong-kiem-dinh.pdf",
  },
  {
    slug: "truong-luy",
    navLabel: "Đối tác - CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG TRƯỜNG LŨY",
    group: "Đối tác",
    eyebrow: "Đối tác",
    title: "CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG TRƯỜNG LŨY",
    description: "Hồ sơ năng lực của CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG TRƯỜNG LŨY.",
    file: "/ho-so-nang-luc-truong-luy.pdf",
  },
];
