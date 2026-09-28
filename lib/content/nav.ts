// Navigation mirrored from ethereum.org (src/lib/nav/buildNavigation.ts, vi locale).

export const ETHEREUM_ORG = "https://ethereum.org/vi"

export function org(path: string) {
  return `${ETHEREUM_ORG}${path}`
}

export type NavLink = { label: string; description: string; href: string }
export type NavGroup = { label: string; description: string; items: NavLink[] }
export type NavEntry = NavLink | NavGroup
export type NavSection = { id: string; label: string; entries: NavEntry[] }

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry
}

export const navSections: NavSection[] = [
  {
    id: "learn",
    label: "Tìm hiểu",
    entries: [
      {
        label: "Tổng quan",
        description: "Tất cả mọi thứ về giáo dục Ethereum",
        href: org("/learn/"),
      },
      {
        label: "Ethereum là gì?",
        description: "Hiểu điều gì làm cho Ethereum trở nên đặc biệt",
        href: org("/what-is-ethereum/"),
      },
      {
        label: "Các nguyên tắc cốt lõi",
        description:
          "Hiểu các nguyên tắc mà Ethereum được xây dựng dựa trên đó",
        href: org("/values/"),
      },
      {
        label: "Hợp đồng thông minh",
        description: "Các khối xây dựng nền tảng của hệ sinh thái Ethereum",
        href: org("/smart-contracts/"),
      },
      {
        label: "Kiểm tra kiến thức",
        description:
          "Tìm hiểu xem bạn hiểu rõ về Ethereum và tiền mã hóa đến mức nào",
        href: org("/quizzes/"),
      },
    ],
  },
  {
    id: "use",
    label: "Sử dụng",
    entries: [
      {
        label: "Bắt đầu với Ethereum",
        description: "Những bước đầu tiên của bạn để sử dụng Ethereum",
        items: [
          {
            label: "Bắt đầu tại đây",
            description: "Những bước đầu tiên của bạn khi sử dụng Ethereum",
            href: org("/start/"),
          },
          {
            label: "Chọn ví của bạn",
            description: "Ví cho phép bạn sử dụng tiền mã hóa",
            href: org("/wallets/find-wallet/"),
          },
          {
            label: "Nhận ETH",
            description: "Bạn cần ether (ETH) để sử dụng các ứng dụng Ethereum",
            href: org("/get-eth/"),
          },
          {
            label: "Khám phá ứng dụng",
            description: "Tìm và khám phá các ứng dụng Ethereum",
            href: org("/apps/"),
          },
          {
            label: "Xem tất cả hướng dẫn",
            description: "Duyệt qua tất cả các hướng dẫn từng bước",
            href: org("/guides/"),
          },
        ],
      },
      {
        label: "Các trường hợp sử dụng",
        description: "Khám phá các ý tưởng khác nhau về việc sử dụng Ethereum",
        items: [
          {
            label: "Thanh toán",
            description:
              "Thanh toán Ethereum đang thay đổi cách chúng ta gửi và nhận tiền",
            href: org("/payments/"),
          },
          {
            label: "Stablecoin",
            description:
              "Stablecoin là các token Ethereum được thiết kế để duy trì ở một giá trị cố định",
            href: org("/stablecoins/"),
          },
          {
            label: "Thị trường dự đoán",
            description:
              "Thị trường dự đoán là một cách để đặt cược vào tương lai",
            href: org("/prediction-markets/"),
          },
          {
            label: "Tất cả trường hợp sử dụng",
            description: "Khám phá tất cả các cách sử dụng Ethereum",
            href: org("/use-cases/"),
          },
        ],
      },
      {
        label: "Đặt cọc & nút",
        description: "Giúp bảo mật mạng lưới Ethereum",
        items: [
          {
            label: "Đặt cọc độc lập",
            description:
              "Chạy phần cứng tại nhà và đóng góp vào tính bảo mật của mạng lưới",
            href: org("/staking/solo/"),
          },
          {
            label: "Chạy một nút",
            description:
              "Trở nên hoàn toàn tự chủ trong khi giúp bảo mật mạng lưới",
            href: org("/run-a-node/"),
          },
          {
            label: "Đặt cọc chung",
            description:
              "Đặt cọc và nhận phần thưởng với bất kỳ số lượng ETH nào",
            href: org("/staking/pools/"),
          },
          {
            label: "Staking như một dịch vụ",
            description:
              "Nhà điều hành nút bên thứ ba vận hành trình xác thực của bạn",
            href: org("/staking/saas/"),
          },
        ],
      },
      {
        label: "Khám phá mạng lưới",
        description: "Khám phá các mạng lưới lớp 2 của Ethereum",
        items: [
          {
            label: "Mạng lưới lớp 2",
            description: "Giới thiệu về mạng lưới của các mạng lưới Ethereum",
            href: org("/layer-2/"),
          },
          {
            label: "Tìm mạng lưới L2",
            description: "Chọn mạng lưới phù hợp với bạn",
            href: org("/layer-2/networks/"),
          },
          {
            label: "Cầu nối chuỗi khối",
            description:
              "Di chuyển tài sản giữa mạng chính và các mạng lưới L2",
            href: org("/bridges/"),
          },
        ],
      },
    ],
  },
  {
    id: "build",
    label: "Xây dựng",
    entries: [
      {
        label: "Trang chủ nhà phát triển",
        description:
          "Sổ tay cho Ethereum—bởi người xây dựng, dành cho người xây dựng",
        href: org("/developers/"),
      },
      {
        label: "Bắt đầu xây dựng",
        description: "Chọn và thiết lập ngăn xếp phát triển Ethereum của bạn",
        items: [
          {
            label: "Công cụ cho nhà phát triển",
            description: "Các công cụ để xây dựng trên Ethereum",
            href: org("/developers/tools/"),
          },
          {
            label: "Hướng dẫn",
            description: "Danh sách các hướng dẫn cộng đồng được tuyển chọn",
            href: org("/developers/tutorials/"),
          },
          {
            label: "Học qua lập trình",
            description: "Các khóa học tương tác để học phát triển Ethereum",
            href: org("/developers/tools/categories/education-standards/"),
          },
        ],
      },
      {
        label: "Tài liệu",
        description: "Tài liệu giúp bạn hiểu và xây dựng với Ethereum",
        items: [
          {
            label: "Tổng quan tài liệu",
            description: "Trang chủ tài liệu dành cho nhà phát triển",
            href: org("/developers/docs/"),
          },
          {
            label: "Các chủ đề nền tảng",
            description: "Các nguyên tắc cốt lõi để phát triển trên Ethereum",
            href: org("/developers/docs/intro-to-ethereum/"),
          },
          {
            label: "Ngăn xếp Ethereum",
            description: "Hiểu tất cả các chi tiết của ngăn xếp Ethereum",
            href: org("/developers/docs/ethereum-stack/"),
          },
          {
            label: "Thiết kế UX/UI",
            description: "Thách thức thiết kế Web3 và các phương pháp hay nhất",
            href: org("/developers/docs/design-and-ux/"),
          },
        ],
      },
      {
        label: "Doanh nghiệp",
        description: "Kết nối với chuyên gia, nhận hướng dẫn và tài trợ",
        items: [
          {
            label: "Nhà sáng lập",
            description: "Chương trình, cố vấn và tài nguyên cho nhà sáng lập",
            href: org("/founders/"),
          },
          {
            label: "Tổ chức & doanh nghiệp",
            description:
              "Ứng dụng doanh nghiệp trên Mạng chính Ethereum công khai",
            href: "https://institutions.ethereum.org/",
          },
        ],
      },
    ],
  },
  {
    id: "participate",
    label: "Cộng đồng",
    entries: [
      {
        label: "Trung tâm cộng đồng",
        description: "Tổng quan về cách tham gia",
        href: org("/community/"),
      },
      {
        label: "Kết nối",
        description: "Tìm cộng đồng của bạn",
        items: [
          {
            label: "Lịch sự kiện",
            description: "Tìm các sự kiện Ethereum gần bạn",
            href: org("/community/events/"),
          },
          {
            label: "Cộng đồng trực tuyến",
            description: "Tham gia cộng đồng Ethereum trực tuyến",
            href: org("/community/online/"),
          },
          {
            label: "Devcon",
            description: "Hội nghị nhà phát triển thường niên của Ethereum",
            href: "https://devcon.org/",
          },
        ],
      },
      {
        label: "Tham gia",
        description: "Đóng góp cho hệ sinh thái Ethereum",
        items: [
          {
            label: "Bắt đầu từ đâu",
            description: "Tìm cách đóng góp cho Ethereum",
            href: org("/community/get-involved/"),
          },
          {
            label: "Tài trợ",
            description: "Các dự án cung cấp chương trình tài trợ",
            href: org("/community/grants/"),
          },
          {
            label: "Chương trình dịch thuật",
            description: "Cùng mang ethereum.org đến với nhiều ngôn ngữ hơn",
            href: org("/contributing/translation-program/"),
          },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Nghiên cứu",
    entries: [
      {
        label: "Sách trắng Ethereum",
        description: "Sách trắng gốc do Vitalik Buterin viết vào năm 2014",
        href: org("/whitepaper/"),
      },
      {
        label: "Quản trị",
        description: "Quy trình nâng cấp Giao thức Ethereum",
        href: org("/governance/"),
      },
      {
        label: "Lộ trình",
        description: "Hướng tới khả năng mở rộng, bảo mật và bền vững hơn",
        items: [
          {
            label: "Tổng quan lộ trình",
            description: "Tương lai của Ethereum",
            href: org("/roadmap/"),
          },
          {
            label: "Cải thiện bảo mật",
            description: "Chống chịu mọi loại hình tấn công trong tương lai",
            href: org("/roadmap/security/"),
          },
          {
            label: "Giao dịch rẻ hơn",
            description: "Giảm chi phí và tăng tốc độ giao dịch",
            href: org("/roadmap/scaling/"),
          },
          {
            label: "Trải nghiệm tốt hơn",
            description: "Việc sử dụng Ethereum cần được đơn giản hóa",
            href: org("/roadmap/user-experience/"),
          },
        ],
      },
      {
        label: "Phát triển",
        description: "Tiêu chuẩn, đề xuất và cải tiến",
        items: [
          {
            label: "EIP",
            description: "Đề xuất cải tiến Ethereum",
            href: org("/eips/"),
          },
          {
            label: "Tiền thưởng tìm lỗi",
            description: "Nhận phần thưởng khi tìm ra lỗ hổng",
            href: org("/bug-bounty/"),
          },
        ],
      },
      {
        label: "Bối cảnh",
        description: "Bối cảnh và lịch sử của Ethereum",
        items: [
          {
            label: "Mức tiêu thụ năng lượng",
            description: "Mức năng lượng mà Ethereum sử dụng",
            href: org("/energy-consumption/"),
          },
          {
            label: "Lịch sử & nhà sáng lập",
            description: "Câu chuyện đằng sau Ethereum",
            href: org("/ethereum-history-founder-and-ownership/"),
          },
          {
            label: "Lịch sử kỹ thuật",
            description: "Dòng thời gian các đợt phân nhánh và nâng cấp",
            href: org("/ethereum-forks/"),
          },
          {
            label: "Nghiên cứu mở",
            description: "Cộng đồng nghiên cứu tích cực của Ethereum",
            href: org("/community/research/"),
          },
        ],
      },
    ],
  },
]

export type DirectoryLink = NavLink & { section: NavSection["id"] }

// Every link in the nav, flattened for the resource directory.
export const directory: DirectoryLink[] = navSections.flatMap((section) =>
  section.entries.flatMap((entry) =>
    (isNavGroup(entry) ? entry.items : [entry]).map((link) => ({
      ...link,
      section: section.id,
    }))
  )
)
