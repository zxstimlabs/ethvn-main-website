// Topic summaries condensed from ethereum.org (vi). Quizzes and glossary terms are generated
// from the same source; see quizzes.ts and glossary.ts.

import type { GlossaryKey } from "./glossary"
import { org } from "./nav"
import type { QuizKey } from "./quizzes"

export const FACETS = [
  "Là gì?",
  "Vì sao quan trọng?",
  "Cách hoạt động",
  "Bắt đầu",
] as const

type Facets = [string[], string[], string[], string[]]

export type Topic = {
  id: string
  title: string
  href: string
  stat?: { value: string; label: string }
  facets: Facets
  terms: GlossaryKey[]
  quiz: QuizKey
}

export const topics: Topic[] = [
  {
    id: "ethereum",
    title: "Ethereum là gì?",
    href: org("/what-is-ethereum/"),
    stat: { value: "2015", label: "năm ra mắt mạng chính" },
    facets: [
      [
        "Mạng lưới máy tính toàn cầu, không ai sở hữu.",
        "Chuỗi khối có thể lập trình: chạy được ứng dụng, không chỉ chuyển tiền.",
        "Tiền tệ bản địa là ether (ETH).",
      ],
      [
        "Bạn trực tiếp nắm giữ tài sản, dữ liệu và danh tính của mình.",
        "Hoạt động liên tục từ năm 2015, chưa từng ngừng hoạt động.",
        "Bất kỳ ai có internet đều dùng được, không cần cấp phép.",
      ],
      [
        "Hàng nghìn nút độc lập cùng lưu một bản ghi chung.",
        "Trình xác thực đặt cọc ETH để đề xuất và chứng thực khối.",
        "Mỗi khe 12 giây có thể có một khối mới.",
      ],
      [
        "Chọn một ví và tạo tài khoản.",
        "Nhận một ít ETH để trả phí giao dịch.",
        "Thử các ứng dụng trên Ethereum và lớp 2.",
      ],
    ],
    terms: [
      "blockchain",
      "block",
      "node",
      "mainnet",
      "consensus",
      "ether",
      "smart-contract",
    ],
    quiz: "what-is-ethereum",
  },
  {
    id: "ether",
    title: "Ether (ETH)",
    href: org("/what-is-ether/"),
    stat: { value: "10¹⁸", label: "wei = 1 ETH" },
    facets: [
      [
        "Tiền mã hóa bản địa của Ethereum, ký hiệu ETH.",
        "Đơn vị nhỏ nhất là wei: 1 ETH = 10¹⁸ wei.",
        "Gửi được cho bất kỳ ai, ở bất kỳ đâu.",
      ],
      [
        "Mọi giao dịch trên Ethereum đều trả phí bằng ETH.",
        "ETH được đặt cọc để bảo mật mạng lưới.",
        "Là tài sản thế chấp phổ biến trong DeFi.",
      ],
      [
        "Phí cơ bản của mỗi giao dịch bị đốt, rút khỏi lưu thông.",
        "ETH mới được phát hành làm phần thưởng cho trình xác thực.",
        "Giao dịch thường được đưa vào khối chỉ sau vài giây.",
      ],
      [
        "Mua ETH trên sàn giao dịch hoặc ngay trong ví.",
        "Rút về ví mà bạn tự nắm giữ khóa.",
        "Luôn giữ lại một ít ETH để trả phí.",
      ],
    ],
    terms: ["ether", "wei", "gwei", "token", "transaction"],
    quiz: "what-is-ether",
  },
  {
    id: "wallets",
    title: "Ví Ethereum",
    href: org("/wallets/"),
    stat: { value: "12–24", label: "từ trong cụm từ khôi phục" },
    facets: [
      [
        "Ứng dụng để quản lý tài khoản Ethereum của bạn.",
        "Ví không giữ tiền; ví giữ khóa truy cập tài khoản.",
        "Có ví trình duyệt, ví di động và ví phần cứng.",
      ],
      [
        "Bạn toàn quyền kiểm soát tài sản, không cần ngân hàng.",
        "Một tài khoản dùng được với mọi ứng dụng Ethereum.",
        "Ví cũng là danh tính để đăng nhập ứng dụng.",
      ],
      [
        "Khóa riêng tư ký mọi giao dịch bạn gửi đi.",
        "Cụm từ khôi phục sao lưu toàn bộ tài khoản.",
        "Địa chỉ công khai (0x…) dùng để nhận tiền.",
      ],
      [
        "Chọn ví theo tính năng bạn cần.",
        "Ghi cụm từ khôi phục ra giấy, cất ở nơi an toàn.",
        "Thử gửi một khoản nhỏ trước.",
      ],
    ],
    terms: [
      "wallet",
      "account",
      "address",
      "eoa",
      "private-key",
      "public-key",
      "nonce",
    ],
    quiz: "wallets",
  },
  {
    id: "security",
    title: "Bảo mật & lừa đảo",
    href: org("/security/"),
    stat: { value: "0", label: "người được biết cụm từ khôi phục" },
    facets: [
      [
        "Trên Ethereum, bạn tự bảo vệ tài sản của mình.",
        "Giao dịch đã xác nhận thì không thể hoàn tác.",
        "Kẻ lừa đảo nhắm vào con người, không phải mạng lưới.",
      ],
      [
        "Mất cụm từ khôi phục là mất quyền truy cập tài khoản.",
        "Không có tổng đài nào lấy lại tiền giúp bạn.",
        "Nhận diện chiêu lừa phổ biến giúp bạn an toàn.",
      ],
      [
        "Giả làm nhân viên hỗ trợ để xin cụm từ khôi phục.",
        "Hứa tặng quà hoặc nhân đôi số ETH bạn gửi.",
        "Trang web giả yêu cầu bạn ký giao dịch lạ.",
      ],
      [
        "Không bao giờ chia sẻ cụm từ khôi phục với bất kỳ ai.",
        "Dùng ví phần cứng cho số tiền lớn.",
        "Kiểm tra kỹ địa chỉ và nội dung trước khi ký.",
      ],
    ],
    terms: ["private-key", "public-key", "wallet", "address", "transaction"],
    quiz: "security",
  },
  {
    id: "gas",
    title: "Gas & phí",
    href: org("/gas/"),
    stat: { value: "10⁹", label: "wei = 1 gwei" },
    facets: [
      [
        "Gas đo lượng tính toán mà một giao dịch cần.",
        "Phí gas trả bằng ETH, thường tính theo gwei.",
        "1 gwei = 10⁹ wei = 0,000000001 ETH.",
      ],
      [
        "Phí ngăn thư rác và các vòng lặp vô tận.",
        "Phí trả công cho trình xác thực xử lý giao dịch.",
        "Hiểu phí giúp bạn tiết kiệm tiền.",
      ],
      [
        "Phí = gas sử dụng × (phí cơ bản + phí ưu tiên).",
        "Phí cơ bản do giao thức đặt ra và bị đốt.",
        "Phí ưu tiên (tiền boa) trả cho trình xác thực.",
        "Mạng càng đông, phí cơ bản càng cao.",
      ],
      [
        "Giao dịch lúc mạng vắng để trả phí thấp hơn.",
        "Dùng mạng lưới lớp 2 để giảm phí đáng kể.",
        "Ví thường tự ước tính phí giúp bạn.",
      ],
    ],
    terms: ["gas", "gas-limit", "base-fee", "gwei", "wei"],
    quiz: "gas",
  },
  {
    id: "smart-contracts",
    title: "Hợp đồng thông minh",
    href: org("/smart-contracts/"),
    stat: { value: "1994", label: "Nick Szabo đặt ra thuật ngữ" },
    facets: [
      [
        "Chương trình chạy trên chuỗi khối Ethereum.",
        "Tự thực thi khi đủ điều kiện, như máy bán hàng tự động.",
        "Nền tảng của DeFi, NFT, DAO và các ứng dụng.",
      ],
      [
        "Quy tắc công khai, ai cũng kiểm tra được.",
        "Không cần tin tưởng bên trung gian.",
        "Các hợp đồng kết hợp được với nhau.",
      ],
      [
        "Mã (thường viết bằng Solidity) được biên dịch thành bytecode.",
        "Máy ảo Ethereum (EVM) chạy bytecode trên mọi nút.",
        "Đã triển khai thì mã rất khó thay đổi.",
      ],
      [
        "Đọc tài liệu dành cho nhà phát triển.",
        "Viết hợp đồng đầu tiên trên mạng thử nghiệm.",
        "Kiểm thử và kiểm toán trước khi triển khai.",
      ],
    ],
    terms: ["smart-contract", "evm", "solidity", "bytecode", "oracle", "dapp"],
    quiz: "smart-contracts",
  },
  {
    id: "defi",
    title: "DeFi",
    href: org("/defi/"),
    stat: { value: "24/7", label: "thị trường luôn mở cửa" },
    facets: [
      [
        "Tài chính phi tập trung: dịch vụ tài chính không cần ngân hàng.",
        "Vay, cho vay, giao dịch, tiết kiệm bằng hợp đồng thông minh.",
        "Mở cho bất kỳ ai có kết nối internet.",
      ],
      [
        "Không cần kiểm tra tín dụng hay chờ phê duyệt.",
        "Thị trường mở cửa 24/7.",
        "Bạn luôn giữ quyền kiểm soát tài sản.",
      ],
      [
        "Sàn phi tập trung (DEX) hoán đổi token bằng hợp đồng thông minh.",
        "Vay bằng cách cung cấp tài sản thế chấp.",
        "Các ứng dụng ghép nối với nhau như những khối lego.",
      ],
      [
        "Tìm hiểu rủi ro: lỗi hợp đồng, biến động giá.",
        "Bắt đầu với số tiền nhỏ.",
        "Khám phá ứng dụng DeFi trên ethereum.org.",
      ],
    ],
    terms: ["defi", "dex", "liquidity", "stablecoin", "erc-20", "oracle"],
    quiz: "defi",
  },
  {
    id: "stablecoins",
    title: "Stablecoin",
    href: org("/stablecoins/"),
    stat: { value: "1:1", label: "neo giá với đô la Mỹ (phổ biến)" },
    facets: [
      [
        "Token được thiết kế để giữ giá ổn định.",
        "Phổ biến nhất là loại neo 1:1 với đô la Mỹ.",
        "Ví dụ: USDC, DAI.",
      ],
      [
        "Dùng tiền mã hóa mà không lo biến động giá.",
        "Chuyển tiền xuyên biên giới nhanh, phí thấp.",
        "Là tài sản cốt lõi trong DeFi.",
      ],
      [
        "Thế chấp bằng tiền pháp định do bên phát hành nắm giữ.",
        "Thế chấp bằng tiền mã hóa, thường thế chấp vượt mức.",
        "Neo theo hàng hóa như vàng, hoặc điều chỉnh nguồn cung bằng thuật toán.",
      ],
      [
        "Mua trên sàn hoặc hoán đổi trên DEX.",
        "Gửi stablecoin vẫn cần trả phí bằng ETH.",
        "Tìm hiểu bên phát hành và cơ chế neo giá.",
      ],
    ],
    terms: ["stablecoin", "erc-20", "token", "defi"],
    quiz: "stablecoins",
  },
  {
    id: "nft",
    title: "NFT",
    href: org("/nft/"),
    stat: { value: "ERC-721", label: "tiêu chuẩn token NFT" },
    facets: [
      [
        "Token không thể thay thế: mỗi token là duy nhất.",
        "Đại diện quyền sở hữu tài sản số hoặc vật lý.",
        "Nghệ thuật, vé sự kiện, tên miền, vật phẩm game…",
      ],
      [
        "Quyền sở hữu minh bạch, ai cũng xác minh được.",
        "Nhà sáng tạo có thể nhận tiền bản quyền khi bán lại.",
        "Tài sản mang theo được giữa các ứng dụng.",
      ],
      [
        "Tạo bằng hợp đồng thông minh theo ERC-721 hoặc ERC-1155.",
        "Mỗi token có mã định danh riêng.",
        "Lịch sử sở hữu được ghi lại trên chuỗi.",
      ],
      [
        "Chuẩn bị ví và một ít ETH.",
        "Khám phá các chợ NFT.",
        "Cẩn thận với NFT giả mạo và liên kết lạ.",
      ],
    ],
    terms: ["nft", "erc-721", "erc-1155", "token", "smart-contract"],
    quiz: "nfts",
  },
  {
    id: "dao",
    title: "DAO",
    href: org("/dao/"),
    facets: [
      [
        "Tổ chức tự trị phi tập trung.",
        "Vận hành theo quy tắc được mã hóa trên chuỗi khối.",
        "Thành viên cùng sở hữu và cùng ra quyết định.",
      ],
      [
        "Hợp tác toàn cầu mà không cần tin tưởng lẫn nhau.",
        "Ngân quỹ minh bạch, chỉ chi khi được bỏ phiếu.",
        "Không cần một ông chủ trung tâm.",
      ],
      [
        "Thành viên đưa ra đề xuất rồi bỏ phiếu.",
        "Quyền biểu quyết thường dựa trên token hoặc tư cách thành viên.",
        "Hợp đồng thông minh thực thi kết quả bỏ phiếu.",
      ],
      [
        "Tìm một DAO có mục tiêu bạn quan tâm.",
        "Tham gia thảo luận trên diễn đàn của DAO.",
        "Đọc kỹ quy tắc quản trị trước khi tham gia.",
      ],
    ],
    terms: ["dao", "token", "smart-contract", "erc-20"],
    quiz: "daos",
  },
  {
    id: "staking",
    title: "Đặt cọc",
    href: org("/staking/"),
    stat: { value: "32 ETH", label: "để kích hoạt một trình xác thực" },
    facets: [
      [
        "Đặt cọc ETH để trở thành trình xác thực.",
        "Trình xác thực bảo mật mạng lưới bằng bằng chứng cổ phần.",
        "Đổi lại, bạn nhận phần thưởng bằng ETH.",
      ],
      [
        "Giúp Ethereum an toàn và phi tập trung hơn.",
        "Kiếm phần thưởng cho số ETH đang nắm giữ.",
        "Tiêu thụ rất ít năng lượng so với khai thác.",
      ],
      [
        "Đặt cọc độc lập cần 32 ETH và một máy chạy liên tục.",
        "Trình xác thực đề xuất và chứng thực khối.",
        "Hành vi gian lận có thể bị phạt và mất ETH.",
      ],
      [
        "Ít hơn 32 ETH? Tham gia đặt cọc chung.",
        "Dùng staking như một dịch vụ nếu không muốn tự vận hành.",
        "Chạy một nút để hoàn toàn tự chủ.",
      ],
    ],
    terms: [
      "staking",
      "validator",
      "pos",
      "slot",
      "epoch",
      "finality",
      "beacon-chain",
    ],
    quiz: "staking-solo",
  },
  {
    id: "layer-2",
    title: "Lớp 2",
    href: org("/layer-2/"),
    facets: [
      [
        "Mạng lưới xây trên Ethereum để giao dịch nhanh và rẻ hơn.",
        "Kế thừa bảo mật từ mạng chính Ethereum.",
        "Phổ biến nhất là các bản cuộn (rollup).",
      ],
      [
        "Phí thấp hơn nhiều so với mạng chính.",
        "Giúp Ethereum mở rộng cho hàng triệu người dùng.",
        "Dùng được với ví và ứng dụng quen thuộc.",
      ],
      [
        "Gom nhiều giao dịch thành một lô.",
        "Gửi dữ liệu của lô về Ethereum.",
        "Rollup lạc quan dùng bằng chứng gian lận; ZK rollup dùng bằng chứng không kiến thức.",
      ],
      [
        "Chọn mạng lưới L2 phù hợp với bạn.",
        "Chuyển tài sản qua cầu nối hoặc rút thẳng từ sàn.",
        "Kiểm tra ứng dụng bạn cần có trên L2 đó không.",
      ],
    ],
    terms: [
      "layer-2",
      "rollups",
      "optimistic-rollup",
      "zk-proof",
      "bridge",
      "mainnet",
    ],
    quiz: "layer-2",
  },
  {
    id: "merge",
    title: "The Merge",
    href: org("/roadmap/merge/"),
    stat: { value: "99,95%", label: "năng lượng tiêu thụ được cắt giảm" },
    facets: [
      [
        "Sự kiện hợp nhất mạng chính với Chuỗi Beacon.",
        "Diễn ra ngày 15 tháng 9 năm 2022.",
        "Chuyển Ethereum sang bằng chứng cổ phần.",
      ],
      [
        "Giảm khoảng 99,95% mức tiêu thụ năng lượng.",
        "Chấm dứt việc khai thác bằng máy đào.",
        "Mở đường cho các nâng cấp mở rộng sau này.",
      ],
      [
        "Chuỗi Beacon chạy song song từ tháng 12 năm 2020.",
        "Trình xác thực thay thế thợ đào.",
        "Người dùng không cần làm gì, số dư giữ nguyên.",
      ],
      [
        "Đọc lộ trình Ethereum.",
        "Tìm hiểu mức tiêu thụ năng lượng của Ethereum.",
        'Không có "nâng cấp lên ETH2": đó là lừa đảo.',
      ],
    ],
    terms: [
      "pos",
      "pow",
      "beacon-chain",
      "consensus-client",
      "execution-client",
      "hard-fork",
    ],
    quiz: "merge",
  },
  {
    id: "web3",
    title: "Web3",
    href: org("/web3/"),
    facets: [
      [
        "Thế hệ internet mới xây trên chuỗi khối.",
        "Người dùng sở hữu tài sản và dữ liệu của mình.",
        "Ethereum là nền tảng cốt lõi của Web3.",
      ],
      [
        "Web2: nền tảng sở hữu dữ liệu của bạn.",
        "Web3: bạn sở hữu và mang dữ liệu theo mọi nơi.",
        "Không công ty đơn lẻ nào chặn được quyền truy cập.",
      ],
      [
        "Ví là danh tính, thay cho tài khoản và mật khẩu.",
        "Thanh toán tích hợp sẵn bằng ETH.",
        "Ứng dụng chạy trên hợp đồng thông minh mở.",
      ],
      [
        "Đăng nhập ứng dụng Web3 bằng ví.",
        "Khám phá ứng dụng trên ethereum.org.",
        "Hiểu cả hạn chế: trải nghiệm, khả năng mở rộng.",
      ],
    ],
    terms: ["web3", "dapp", "wallet", "smart-contract", "account"],
    quiz: "web3",
  },
]
