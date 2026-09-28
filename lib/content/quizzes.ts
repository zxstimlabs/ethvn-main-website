// Generated from ethereum.org (src/intl/vi). Do not edit by hand.

export type QuizQuestion = {
  prompt: string
  answers: { label: string; explanation: string }[]
  correct: number
}

export const quizzes = {
  "what-is-ethereum": [
    {
      prompt: "Sự khác biệt lớn nhất giữa Ethereum và Bitcoin là:",
      answers: [
        {
          label: "Ethereum không cho phép bạn thanh toán cho người khác",
          explanation:
            "Cả Bitcoin và Ethereum đều cho phép bạn thanh toán cho người khác.",
        },
        {
          label: "Bạn có thể chạy các chương trình máy tính trên Ethereum",
          explanation:
            "Ethereum có thể lập trình được. Điều này có nghĩa là bạn có thể đưa bất kỳ chương trình máy tính nào lên Chuỗi khối Ethereum.",
        },
        {
          label: "Bạn có thể chạy các chương trình máy tính trên Bitcoin",
          explanation:
            "Không giống như Ethereum, Bitcoin không thể lập trình được và không thể chạy các chương trình máy tính tùy ý.",
        },
        {
          label: "Chúng có logo khác nhau",
          explanation:
            "Chúng thực sự có logo khác nhau! Nhưng đây không phải là sự khác biệt lớn nhất giữa chúng.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Tiền mã hóa gốc của Ethereum được gọi là:",
      answers: [
        {
          label: "Ether",
          explanation: "Ether là tiền mã hóa gốc của mạng lưới Ethereum.",
        },
        {
          label: "Ethereum",
          explanation:
            "Ethereum là Chuỗi khối, nhưng tiền tệ gốc của nó không được gọi là Ethereum. Đây là một quan niệm sai lầm phổ biến.",
        },
        {
          label: "Ethercoin",
          explanation:
            "Không giống như nhiều loại tiền mã hóa khác, tiền mã hóa gốc của Ethereum không chứa từ ‘coin’.",
        },
        {
          label: "Bitcoin",
          explanation:
            "Bitcoin (chữ B viết hoa) là Chuỗi khối đầu tiên được tạo ra, bitcoin (chữ b viết thường) là tiền mã hóa gốc của nó.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "Ai điều hành Ethereum?",
      answers: [
        {
          label: "Các nhà phát triển",
          explanation:
            "Các nhà phát triển rất quan trọng trong việc xây dựng và cải thiện Ethereum, nhưng họ không phải là nhóm duy trì hoạt động của Ethereum.",
        },
        {
          label: "Thợ khai thác",
          explanation:
            "Việc khai thác đã không còn khả thi kể từ The Merge. Không còn ‘thợ khai thác’ trên Ethereum nữa.",
        },
        {
          label: "The Ethereum Foundation",
          explanation:
            "The Ethereum Foundation không đóng bất kỳ vai trò đáng kể nào trong hoạt động hàng ngày của các nút Ethereum.",
        },
        {
          label: "Bất kỳ ai chạy một nút",
          explanation:
            "Bất kỳ ai chạy một nút đều là một phần quan trọng trong cơ sở hạ tầng của Ethereum. Nếu bạn chưa làm vậy, hãy cân nhắc việc chạy một nút Ethereum.",
        },
      ],
      correct: 3,
    },
    {
      prompt:
        "Làm thế nào Ethereum duy trì hoạt động mà không có thời gian ngừng hoạt động?",
      answers: [
        {
          label:
            "Một công ty chuyên trách duy trì các máy chủ của họ trực tuyến suốt ngày đêm",
          explanation:
            "Không có công ty hay máy chủ trung tâm nào đứng sau Ethereum; đó là mô hình truyền thống mà nó thay thế.",
        },
        {
          label:
            "Nó tạm dừng trong các đợt nâng cấp mạng lưới để đảm bảo an toàn",
          explanation:
            "Các bản nâng cấp được triển khai mà không cần tạm dừng mạng lưới, giống như việc nâng cấp động cơ giữa chuyến bay. Ethereum chưa bao giờ ngừng sản xuất các khối.",
        },
        {
          label:
            "Hàng ngàn nút độc lập đều chạy toàn bộ mạng lưới, vì vậy mạng lưới vẫn hoạt động ngay cả khi một số nút ngoại tuyến.",
          explanation:
            "Bởi vì mạng lưới được phân tán trên hàng ngàn nút, việc mất đi một phần trong số đó không làm gián đoạn mạng lưới. Không một máy tính đơn lẻ nào bắt buộc phải luôn hoạt động.",
        },
        {
          label:
            "Mỗi người dùng tải lên lại một bản sao của Chuỗi khối mỗi ngày",
          explanation:
            "Các nút đồng bộ hóa liên tục và tự động; không có bước sao lưu thủ công.",
        },
      ],
      correct: 2,
    },
    {
      prompt:
        "Ethereum đã cắt giảm đáng kể mức tiêu thụ năng lượng vào năm 2022 như thế nào?",
      answers: [
        {
          label:
            "Bằng cách chuyển tất cả hoạt động sang các mạng lưới lớp 2 (l2)",
          explanation:
            "Các giải pháp lớp 2 (l2) giúp các giao dịch rẻ hơn và nhanh hơn, nhưng chúng không phải là yếu tố làm giảm mức tiêu thụ năng lượng.",
        },
        {
          label: "Bằng cách giảm số lượng nút trên mạng lưới",
          explanation:
            "Sự tiết kiệm đến từ việc thay đổi cách Ethereum đạt được sự đồng thuận, chứ không phải do có ít nút hơn.",
        },
        {
          label:
            "Bằng cách chuyển từ Bằng chứng công việc (PoW) sang Bằng chứng cổ phần (PoS)",
          explanation:
            "Vào năm 2022, Ethereum đã thay thế việc khai thác tiêu tốn nhiều năng lượng bằng Bằng chứng cổ phần (PoS), giảm mức tiêu thụ năng lượng hơn 99,98%.",
        },
        {
          label: "Bằng cách đốt một phần của mỗi khoản phí giao dịch",
          explanation:
            "Việc đốt phí làm thay đổi lượng ETH đang lưu thông, chứ không phải lượng năng lượng được sử dụng.",
        },
      ],
      correct: 2,
    },
  ],
  "what-is-ether": [
    {
      prompt: "Ether còn được gọi là:",
      answers: [
        {
          label: "ETC",
          explanation: "ETC là mã giao dịch của Ethereum Classic.",
        },
        {
          label: "ETR",
          explanation:
            "ETR không phải là mã giao dịch của ether hay bất kỳ loại tiền mã hóa đáng kể nào.",
        },
        {
          label: "ETH",
          explanation: "ETH là mã giao dịch của ether trên Ethereum.",
        },
        {
          label: "BTC",
          explanation:
            "BTC là mã giao dịch của bitcoin trên mạng lưới Bitcoin.",
        },
      ],
      correct: 2,
    },
    {
      prompt: "Trên Ethereum, phí mạng lưới được trả bằng:",
      answers: [
        {
          label: "bitcoin",
          explanation:
            "“bitcoin” viết thường là tiền mã hóa gốc của mạng lưới Bitcoin.",
        },
        {
          label: "ETH",
          explanation:
            "Ether (ETH) là tiền mã hóa gốc của Ethereum. Tất cả phí mạng lưới trên Ethereum đều được trả bằng ETH.",
        },
        {
          label: "USD",
          explanation:
            "Không thể trả phí mạng lưới trên Ethereum bằng USD (Đô la Mỹ) hoặc bất kỳ loại tiền pháp định nào khác.",
        },
        {
          label: "Ethereum",
          explanation:
            "Ethereum là mạng lưới, nhưng phí mạng lưới của Ethereum được trả bằng ETH.",
        },
      ],
      correct: 1,
    },
    {
      prompt:
        "So với giới hạn cố định 21 triệu đồng của Bitcoin, nguồn cung của ETH:",
      answers: [
        {
          label: "Có thể tăng hoặc giảm tùy thuộc vào mức độ sử dụng mạng lưới",
          explanation:
            "ETH mới được phát hành cho các trình xác thực vĩnh viễn trong khi một phần của mỗi khoản phí bị đốt, do đó mức độ sử dụng cao có thể khiến nó giảm phát và mức độ sử dụng thấp khiến nó lạm phát.",
        },
        {
          label: "Cũng được cố định vĩnh viễn ở mức 120 triệu ETH",
          explanation:
            "Không giống như Bitcoin, ETH không có giới hạn cố định; nguồn cung của nó thay đổi theo việc phát hành và đốt.",
        },
        {
          label: "Chỉ tăng lên theo thời gian",
          explanation:
            "Việc đốt có thể làm giảm nguồn cung; vào những ngày bận rộn, lượng ETH bị đốt có thể nhiều hơn lượng được phát hành.",
        },
        {
          label: "Được thiết lập mỗi năm bởi Tổ chức Ethereum",
          explanation:
            "Không có bên tập trung nào quyết định nguồn cung của ETH; Tổ chức Ethereum nắm giữ chưa tới 0,3% tổng số ETH.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "ETH có thể được sử dụng để:",
      answers: [
        {
          label: "Trả phí giao dịch trên Ethereum",
          explanation:
            "Câu trả lời này đúng một phần, nhưng đây chỉ là một trong nhiều công dụng của ETH.",
        },
        {
          label: "Thanh toán ngang hàng không thể bị kiểm duyệt",
          explanation:
            "Câu trả lời này đúng một phần, nhưng đây chỉ là một trong nhiều công dụng của ETH.",
        },
        {
          label: "Tài sản thế chấp cho các khoản vay tiền mã hóa",
          explanation:
            "Câu trả lời này đúng một phần, nhưng đây chỉ là một trong nhiều công dụng của ETH.",
        },
        {
          label: "Tất cả các phương án trên",
          explanation:
            "Các giao dịch Ethereum không thể bị kiểm duyệt, ETH được yêu cầu để thực hiện bất kỳ giao dịch nào trên Ethereum và nó rất quan trọng đối với sự ổn định của hệ sinh thái tài chính phi tập trung (DeFi).",
        },
      ],
      correct: 3,
    },
  ],
  wallets: [
    {
      prompt: "Loại Ví an toàn nhất là:",
      answers: [
        {
          label: "Ví di động",
          explanation:
            "Ví di động lưu giữ các khóa riêng tư trên thiết bị di động, thường có kết nối internet và có khả năng bị xâm phạm bởi các phần mềm khác.",
        },
        {
          label: "Ví phần cứng",
          explanation:
            "Các khóa riêng tư của ví phần cứng được lưu trữ trên một thiết bị chuyên dụng có thể được ngắt kết nối internet và được cách ly khỏi các ứng dụng khác trên thiết bị của bạn.",
        },
        {
          label: "Ví web",
          explanation:
            "Ví web có độ bảo mật thấp hơn ví phần cứng vì các khóa riêng tư được lưu trữ trên một thiết bị có kết nối internet.",
        },
        {
          label: "Ví máy tính để bàn",
          explanation:
            "Ví máy tính để bàn lưu giữ các khóa riêng tư trên ổ cứng máy tính, thường có kết nối internet và có khả năng bị xâm phạm bởi các phần mềm khác.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Bạn nên lưu trữ cụm từ hạt giống của mình như thế nào?",
      answers: [
        {
          label: "Trong một bức ảnh trên điện thoại của bạn",
          explanation:
            "Đây không phải là tùy chọn an toàn nhất. Nếu bức ảnh này được tải lên bộ nhớ đám mây thì tin tặc có thể lấy được hình ảnh này và giành quyền truy cập vào Tài khoản của bạn.",
        },
        {
          label: "Trong một tệp trên máy tính của bạn",
          explanation:
            "Đây không phải là tùy chọn an toàn nhất. Tin tặc ngày càng tìm kiếm thông tin liên quan đến tiền mã hóa trên các thiết bị mục tiêu. Nếu tin tặc truy cập vào tệp chứa cụm từ hạt giống của bạn, chúng sẽ giành được quyền truy cập vào Tài khoản của bạn.",
        },
        {
          label:
            "Trong một tin nhắn văn bản gửi cho một thành viên gia đình đáng tin cậy",
          explanation:
            "Bạn không bao giờ nên nhắn tin cụm từ hạt giống của mình cho bất kỳ ai. Tin nhắn có thể bị chặn bởi bên thứ ba và ngay cả khi bạn hoàn toàn tin tưởng người này, bạn cũng không biết ai có thể truy cập vào điện thoại của họ.",
        },
        {
          label: "Không có phương án nào ở trên",
          explanation:
            "Cụm từ hạt giống của bạn nên được lưu trữ một cách an toàn, lý tưởng nhất là ngoại tuyến. Việc viết nó ra giấy thường được khuyến nghị vì lý do này, nhưng các trình quản lý mật khẩu an toàn cũng là một giải pháp thay thế tốt.",
        },
      ],
      correct: 3,
    },
    {
      prompt:
        "Bạn nên cung cấp cụm từ hạt giống / khóa riêng tư của mình cho ai?",
      answers: [
        {
          label: "Người mà bạn đang thanh toán",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống hoặc khóa riêng tư của mình cho bất kỳ ai. Thay vào đó, hãy gửi token đến Địa chỉ Ví của họ thông qua một giao dịch.",
        },
        {
          label: "Để đăng nhập vào một dapp hoặc Ví",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống / khóa riêng tư của mình để đăng nhập vào Ví hoặc dapp của bạn.",
        },
        {
          label: "Nhân viên hỗ trợ",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống / khóa riêng tư của mình cho bất kỳ ai tự xưng là nhân viên hỗ trợ. Bất kỳ ai yêu cầu bạn cung cấp thông tin này đều là kẻ lừa đảo.",
        },
        {
          label: "Không một ai",
          explanation:
            "Lý tưởng nhất là bạn không bao giờ nên cung cấp cụm từ hạt giống hoặc khóa riêng tư của mình cho bất kỳ ai. Nếu bạn hoàn toàn tin tưởng ai đó với quyền truy cập tuyệt đối vào tiền của bạn (chẳng hạn như vợ/chồng), thì bạn có thể quyết định chia sẻ thông tin này với họ.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Một Ví và một Tài khoản trên Ethereum là cùng một thứ.",
      answers: [
        {
          label: "Đúng",
          explanation:
            "Ví là một giao diện trực quan được sử dụng để tương tác với một Tài khoản Ethereum.",
        },
        {
          label: "Sai",
          explanation:
            "Ví là một giao diện trực quan được sử dụng để tương tác với một Tài khoản Ethereum.",
        },
      ],
      correct: 1,
    },
  ],
  security: [
    {
      prompt:
        "Tại sao bạn nên sử dụng các mật khẩu duy nhất cho tất cả các Tài khoản của mình?",
      answers: [
        {
          label: "Phòng trường hợp một trong các nền tảng bị rò rỉ dữ liệu",
          explanation:
            "Câu trả lời này đúng, nhưng cũng có những câu trả lời đúng khác.",
        },
        {
          label: "Phòng trường hợp ai đó nhìn lén và tìm ra mật khẩu của bạn",
          explanation:
            "Câu trả lời này đúng, nhưng cũng có những câu trả lời đúng khác.",
        },
        {
          label:
            "Phòng trường hợp phần mềm độc hại, chẳng hạn như trình ghi thao tác bàn phím (key-logger), đánh cắp mật khẩu của bạn",
          explanation:
            "Câu trả lời này đúng, nhưng cũng có những câu trả lời đúng khác.",
        },
        {
          label: "Tất cả các phương án trên",
          explanation:
            "Tất cả các câu trả lời đều đúng. Sử dụng các mật khẩu duy nhất là cách tốt nhất để ngăn chặn bất kỳ ai khác truy cập vào Tài khoản của bạn.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Sau The Merge, ETH phải được nâng cấp lên Eth2.",
      answers: [
        {
          label: "Đúng",
          explanation:
            "Bạn không cần phải nâng cấp ETH của mình lên Eth2. Không có Eth2 và đây là một câu chuyện phổ biến được những kẻ lừa đảo sử dụng.",
        },
        {
          label: "Sai",
          explanation:
            "Bạn không cần phải nâng cấp ETH của mình lên Eth2. Không có Eth2 và đây là một câu chuyện phổ biến được những kẻ lừa đảo sử dụng.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Các chương trình tặng ETH là:",
      answers: [
        {
          label: "Một cách tốt để nhận thêm ETH",
          explanation:
            "Các chương trình tặng ETH là những trò lừa đảo được thiết kế để đánh cắp ETH và các token khác của bạn. Chúng không bao giờ là một cách tốt để nhận thêm ETH.",
        },
        {
          label: "Luôn luôn là thật",
          explanation: "Các chương trình tặng ETH không bao giờ là thật.",
        },
        {
          label:
            "Thường được thực hiện bởi các thành viên nổi bật trong cộng đồng",
          explanation:
            "Các thành viên nổi bật trong cộng đồng không thực hiện các chương trình tặng ETH. Những kẻ lừa đảo giả mạo các cá nhân nổi tiếng, chẳng hạn như Elon Musk, đang tặng quà để tạo cho trò lừa đảo của chúng cảm giác hợp pháp.",
        },
        {
          label: "Rất có thể là một trò lừa đảo",
          explanation:
            "Các chương trình tặng ETH luôn là những trò lừa đảo. Tốt nhất là báo cáo và phớt lờ những kẻ lừa đảo.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Các giao dịch Ethereum có thể đảo ngược.",
      answers: [
        {
          label: "Đúng",
          explanation:
            "Các giao dịch Ethereum không thể bị đảo ngược. Bất kỳ ai nói với bạn điều ngược lại đều có thể đang cố lừa đảo bạn.",
        },
        {
          label: "Sai",
          explanation:
            "Các giao dịch Ethereum không thể bị đảo ngược. Bất kỳ ai nói với bạn điều ngược lại đều có thể đang cố lừa đảo bạn.",
        },
      ],
      correct: 1,
    },
    {
      prompt:
        "Bạn nên cung cấp cụm từ hạt giống / khóa riêng tư của mình cho ai?",
      answers: [
        {
          label: "Người mà bạn đang thanh toán",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống hoặc khóa riêng tư của mình cho bất kỳ ai. Thay vào đó, hãy gửi token đến Địa chỉ Ví của họ thông qua một giao dịch.",
        },
        {
          label: "Để đăng nhập vào một dapp hoặc Ví",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống / khóa riêng tư của mình để đăng nhập vào Ví hoặc dapp của bạn.",
        },
        {
          label: "Nhân viên hỗ trợ",
          explanation:
            "Bạn không bao giờ nên cung cấp cụm từ hạt giống / khóa riêng tư của mình cho bất kỳ ai tự xưng là nhân viên hỗ trợ. Bất kỳ ai yêu cầu bạn cung cấp thông tin này đều là kẻ lừa đảo.",
        },
        {
          label: "Không một ai",
          explanation:
            "Lý tưởng nhất là bạn không bao giờ nên cung cấp cụm từ hạt giống hoặc khóa riêng tư của mình cho bất kỳ ai. Nếu bạn hoàn toàn tin tưởng ai đó với quyền truy cập tuyệt đối vào tiền của bạn (chẳng hạn như vợ/chồng), thì bạn có thể quyết định chia sẻ thông tin này với họ.",
        },
      ],
      correct: 3,
    },
  ],
  gas: [
    {
      prompt: "Phí gas là gì?",
      answers: [
        {
          label:
            "Một khoản phí liên quan đến các giao dịch và hoạt động của hợp đồng thông minh",
          explanation:
            "Đúng một phần, phí gas thể hiện chi phí của các giao dịch và hoạt động của hợp đồng thông minh.",
        },
        {
          label:
            "Lượng gas được sử dụng để thực hiện một hoạt động, nhân với chi phí cho mỗi đơn vị gas",
          explanation:
            "Đúng một phần. Mặc dù đúng, nhưng đây không phải là câu trả lời tốt nhất trong các lựa chọn được đưa ra.",
        },
        {
          label:
            "Một khoản thanh toán bao gồm phí ưu tiên để có khả năng đẩy nhanh quá trình xử lý giao dịch",
          explanation:
            "Đúng một phần, tổng phí gas bao gồm phí cơ sở và phí ưu tiên có thể ảnh hưởng đến tốc độ xử lý giao dịch",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "Phí gas bao gồm tất cả các khía cạnh này: chúng bù đắp cho việc tính toán, áp dụng cho cả giao dịch và hợp đồng thông minh, và có thể bao gồm phí ưu tiên để được đưa vào khối nhanh hơn.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Chiến lược nào sau đây KÉM hiệu quả nhất để giảm chi phí gas?",
      answers: [
        {
          label:
            "Thực hiện các giao dịch trong những khoảng thời gian ít tắc nghẽn",
          explanation:
            "Việc căn thời gian giao dịch vào những giờ thấp điểm có thể làm giảm chi phí gas.",
        },
        {
          label: "Chờ đợi giá gas giảm xuống",
          explanation:
            "Chờ đợi giá gas giảm xuống là một chiến lược hợp lý vì gas biến động dựa trên mức độ tắc nghẽn.",
        },
        {
          label: "Sử dụng các chuỗi lớp 2 (l2) để có mức phí thấp hơn",
          explanation:
            "Các giải pháp lớp 2 (l2) giúp giảm phí và là một cách hiệu quả để tiết kiệm gas.",
        },
        {
          label:
            "Sử dụng logic hợp đồng thông minh phức tạp làm tăng yêu cầu tính toán",
          explanation:
            "Logic hợp đồng thông minh phức tạp làm tăng chi phí gas do yêu cầu tính toán nhiều hơn. Thiết kế hiệu quả giúp giảm thiểu các bước, lưu trữ và các hoạt động dư thừa để giảm phí.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Điều gì khiến phí gas tăng cao?",
      answers: [
        {
          label: "Tính toán trên mạng lưới vượt quá một ngưỡng nhất định",
          explanation:
            "Khi tính toán trên Ethereum vượt quá một ngưỡng nhất định, phí gas sẽ tăng lên, đặc biệt là trong các giai đoạn hoạt động cao điểm như các đợt phát hành ứng dụng phi tập trung (dapp) hoặc NFT.",
        },
        {
          label: "Các trình xác thực tăng phí cơ sở theo cách thủ công",
          explanation:
            "Các trình xác thực không thiết lập phí cơ sở theo cách thủ công; chúng được điều chỉnh bởi giao thức dựa trên nhu cầu trong khối trước đó.",
        },
        {
          label: "Các hợp đồng thông minh được viết tốt và tối ưu hóa",
          explanation:
            "Logic hợp đồng thông minh được viết tốt như sử dụng hiệu quả bộ nhớ và các vòng lặp có thể dẫn đến mức tiêu thụ gas thấp hơn.",
        },
        {
          label: "Sự thiếu hụt ETH có sẵn trên mạng lưới",
          explanation:
            "Phí gas không bị ảnh hưởng bởi số lượng ETH có sẵn trên mạng lưới.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "Phí gas giúp giữ cho Ethereum bảo mật như thế nào?",
      answers: [
        {
          label:
            "Bằng cách khuyến khích các trình xác thực hành động trung thực",
          explanation:
            "Các trình xác thực được đền bù theo một số cách, nhưng phí gas chủ yếu không khuyến khích việc spam và sử dụng tài nguyên quá mức.",
        },
        {
          label:
            "Bằng cách không khuyến khích spam và hoạt động độc hại thông qua các chi phí tài chính",
          explanation:
            "Phí gas làm cho spam hoặc hoạt động độc hại trở nên đắt đỏ, ngăn chặn sự lạm dụng và giúp duy trì sự ổn định của mạng lưới.",
        },
        {
          label:
            "Bằng cách đảm bảo các giao dịch được xử lý theo thứ tự ưu tiên",
          explanation:
            "Mức độ ưu tiên có thể được xác định bởi phí ưu tiên, chứ không phải bản thân phí gas.",
        },
        {
          label: "Bằng cách tăng tổng số lượng ETH đang lưu thông",
          explanation:
            "Phí cơ sở (một phần của tổng phí gas) bị đốt cháy, làm giảm lượng ETH đang lưu thông, chứ không làm tăng nó",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Phí gas được tính như thế nào?",
      answers: [
        {
          label: "Giá gas × kích thước giao dịch",
          explanation:
            "Phí gas dựa trên tính toán, không phải kích thước giao dịch.",
        },
        {
          label: "Số đơn vị gas được sử dụng × (phí cơ sở + phí ưu tiên)",
          explanation:
            "Phí gas được xác định bằng công thức: số đơn vị gas được sử dụng × (phí cơ sở + phí ưu tiên).",
        },
        {
          label: "Kích thước khối × giới hạn phí ưu tiên của trình xác thực",
          explanation:
            "Kích thước khối không trực tiếp tham gia vào công thức này.",
        },
        {
          label: "Phí cơ sở + phí ưu tiên + phí ưu tiên",
          explanation:
            "Phí cơ sở và phí ưu tiên là một phần của công thức; khoản phí ưu tiên (tip) chính là phí ưu tiên.",
        },
      ],
      correct: 1,
    },
  ],
  "smart-contracts": [
    {
      prompt: "Các hợp đồng thông minh được đặc trưng như thế nào?",
      answers: [
        {
          label:
            "Các hợp đồng thông minh giống như các hợp đồng pháp lý, nhưng được lưu trữ kỹ thuật số trên Chuỗi khối để lưu nội dung một cách an toàn.",
          explanation:
            "Các hợp đồng thông minh sử dụng logic tương tự như các hợp đồng truyền thống, nhưng ngoài ra thì có rất ít điểm chung.",
        },
        {
          label:
            "Được liên kết với các hệ thống AI tự trị thực thi các giao dịch",
          explanation:
            "Các hợp đồng thông minh thực thi các giao dịch một cách có thể dự đoán được theo logic 'nếu-thì' được quy định trong mã—chúng không sử dụng AI",
        },
        {
          label:
            "Các chương trình trên chuỗi tuân theo logic 'nếu-thì', được đảm bảo thực thi theo các quy tắc riêng của nó",
          explanation:
            "Một hợp đồng thông minh là một Tài khoản Ethereum được triển khai với mã không thể thay đổi nhằm xác định chức năng của nó.",
        },
        {
          label:
            "Chúng là các quy tắc đằng sau Chuỗi khối Ethereum, được phát triển cùng với các luật sư để đảm bảo tuân thủ pháp luật.",
          explanation:
            "Các hợp đồng thông minh là những đoạn mã có thể được tạo bởi các nhà phát triển và được triển khai trên một Chuỗi khối.",
        },
      ],
      correct: 2,
    },
    {
      prompt:
        "Phép ẩn dụ nào mô tả gần nhất hoạt động của các hợp đồng thông minh?",
      answers: [
        {
          label: "Một ngân hàng",
          explanation:
            "Các ngân hàng yêu cầu thực thi thủ công và được cấu trúc như các thực thể phân cấp, trong khi các hợp đồng thông minh được thực thi một cách có thể dự đoán được bởi các máy tính với các quy tắc không thể thay đổi.",
        },
        {
          label: "Một máy bán hàng tự động kỹ thuật số",
          explanation:
            "Máy bán hàng tự động sẽ chỉ phân phối sản phẩm bạn mong muốn sau khi tất cả các yêu cầu được đáp ứng: các đầu vào cụ thể đảm bảo các đầu ra xác định. Điều này tương tự như logic của các hợp đồng thông minh.",
        },
        {
          label: "Một máy tính bỏ túi",
          explanation:
            "Mã hợp đồng thông minh có thể được sử dụng để tính toán, nhưng không giới hạn ở điều đó. Thay vào đó, các hợp đồng thông minh là các chương trình dựa trên Chuỗi khối tuân theo logic 'nếu-thì'.",
        },
        {
          label: "Một trang web",
          explanation:
            "Một trang web là giao diện người dùng (frontend) nắm bắt các chỉ thị của người dùng. Một hợp đồng thông minh là logic phụ trợ (backend) nơi các chỉ thị này được thực thi và kết quả có thể được trả về.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Đâu KHÔNG phải là đặc điểm chính của các hợp đồng thông minh?",
      answers: [
        {
          label: "Thực thi xác định",
          explanation:
            "Lợi ích chính của một hợp đồng thông minh là nó thực thi một cách xác định các mã rõ ràng, không có sự diễn giải hay thiên vị của con người.",
        },
        {
          label: "Hồ sơ công khai",
          explanation:
            "Với các hợp đồng thông minh trên một Chuỗi khối công khai, bất kỳ ai cũng có thể theo dõi ngay lập tức các giao dịch chuyển tài sản và các thông tin liên quan khác.",
        },
        {
          label: "Bảo vệ quyền riêng tư",
          explanation:
            "Vì các Chuỗi khối là các mạng lưới ẩn danh, các giao dịch được gắn công khai với một Địa chỉ mật mã duy nhất, chứ không phải một danh tính.",
        },
        {
          label: "Khả năng thay đổi",
          explanation:
            "Một hợp đồng thông minh không thể bị thay đổi sau khi được tạo—nó được đảm bảo thực thi theo các quy tắc được xác định bởi mã của nó.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Đâu KHÔNG phải là một ứng dụng của các hợp đồng thông minh?",
      answers: [
        {
          label: "Stablecoin",
          explanation:
            "Stablecoin là các đối tượng token được xác định và theo dõi bằng cách sử dụng các hợp đồng thông minh.",
        },
        {
          label: "Các thay đổi Giao thức",
          explanation:
            "Mặc dù các thay đổi Giao thức đôi khi có thể sử dụng các hợp đồng thông minh, nhưng việc tạo và định nghĩa chúng được đề xuất thông qua các diễn đàn trực tuyến minh bạch và được triển khai trong phần mềm máy khách.",
        },
        {
          label: "Token không thể thay thế (NFT)",
          explanation:
            "Các hợp đồng thông minh được sử dụng để xác định một loạt các NFT, từ nghệ thuật kỹ thuật số đến giấy chứng nhận quyền sở hữu tài sản.",
        },
        {
          label: "Sàn giao dịch tiền tệ mở",
          explanation:
            "Các sàn giao dịch phi tập trung (DEX) được xây dựng bằng cách sử dụng các hợp đồng thông minh để hoạt động mà không cần sự kiểm soát tập trung.",
        },
      ],
      correct: 1,
    },
  ],
  defi: [
    {
      prompt: "DeFi là viết tắt của từ gì?",
      answers: [
        {
          label: "Tài chính phi tập trung (Decentralized Finance)",
          explanation:
            "Chính xác! DeFi đề cập đến tài chính phi tập trung (DeFi), một hệ thống tài chính được xây dựng trên Ethereum hoạt động mà không cần các bên trung gian như ngân hàng hoặc tổ chức tài chính.",
        },
        {
          label: "Tài chính kỹ thuật số (Digital Finance)",
          explanation:
            "Điều này không chính xác. Tài chính kỹ thuật số đề cập đến các dịch vụ tài chính được cung cấp thông qua các nền tảng kỹ thuật số, nhưng nó không đặc biệt ngụ ý đến sự phi tập trung.",
        },
        {
          label: "Tài chính phân tán (Distributed Finance)",
          explanation:
            "Điều này không chính xác. Mặc dù 'phân tán' có thể ngụ ý sự phi tập trung, nhưng thuật ngữ được sử dụng trong ngành là 'Tài chính phi tập trung', không phải Tài chính phân tán.",
        },
        {
          label: "Tài chính phát triển (Development Finance)",
          explanation:
            "Điều này không chính xác. Tài chính phát triển thường đề cập đến hỗ trợ tài chính được cung cấp cho các dự án nhằm phát triển kinh tế, thường là ở các nước đang phát triển và không liên quan đến Chuỗi khối hoặc DeFi.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "Bạn KHÔNG THỂ làm gì với DeFi?",
      answers: [
        {
          label: "Gửi tiền đi khắp toàn cầu.",
          explanation:
            "Điều này không chính xác. Với DeFi, bạn có thể gửi giá trị cho bất kỳ ai ở bất kỳ đâu trên thế giới mà không có bất kỳ giới hạn nào.",
        },
        {
          label:
            "Yêu cầu bộ phận hỗ trợ khách hàng hoàn nguyên các sai sót của bạn.",
          explanation:
            "Chính xác! Trong DeFi, các giao dịch là cuối cùng và được kiểm soát bởi mã thay vì một công ty. Nếu xảy ra sai sót, chẳng hạn như gửi tiền đến sai Địa chỉ, sẽ không có bộ phận hỗ trợ khách hàng nào giúp khắc phục. Bạn cần phải cực kỳ cẩn thận.",
        },
        {
          label: "Vay mượn tiền bằng tài sản thế chấp.",
          explanation:
            "Điều này không chính xác. Với DeFi, bạn có thể vay tiền ngay lập tức, tránh được quá trình phê duyệt kéo dài nhiều ngày của các ngân hàng truyền thống.",
        },
        {
          label: "Giao dịch các token của bạn 24/7.",
          explanation:
            "Điều này không chính xác. DeFi cho phép bạn giao dịch token 24/7. Các thị trường luôn mở cửa và bạn có thể giao dịch ETH của mình lấy USDT hoặc bất kỳ loại tiền tệ nào khác bất cứ lúc nào.",
        },
      ],
      correct: 1,
    },
    {
      prompt:
        "Nền tảng DeFi nào được biết đến với việc cho phép người dùng hoán đổi token trực tiếp với nhau?",
      answers: [
        {
          label: "Uniswap",
          explanation:
            "Chính xác! Uniswap là một sàn giao dịch phi tập trung cho phép người dùng giao dịch (hoán đổi) token trực tiếp với nhau bằng cách sử dụng các cơ chế tạo lập thị trường tự động.",
        },
        {
          label: "Aave",
          explanation:
            "Điều này không chính xác. Aave là một Giao thức DeFi tập trung vào việc cho vay và vay mượn, không phải hoán đổi token.",
        },
        {
          label: "PoolTogether",
          explanation:
            "Điều này không chính xác. PoolTogether điều hành các giải xổ số không rủi ro, cung cấp một cách thức đổi mới để tiết kiệm tiền.",
        },
        {
          label: "MakerDao",
          explanation:
            "Điều này không chính xác. MakerDAO là một nền tảng phi tập trung cho phép người dùng phát hành và quản lý stablecoin DAI, nhưng nó không tập trung vào việc hoán đổi token.",
        },
      ],
      correct: 0,
    },
    {
      prompt:
        "Khi bạn sử dụng một ứng dụng DeFi và thực hiện một giao dịch, thông tin giao dịch được lưu giữ ở đâu?",
      answers: [
        {
          label: "ETH",
          explanation:
            "Điều này không chính xác. Dữ liệu không được lưu trữ trong ether (ETH). ETH là tài sản gốc của Chuỗi khối Ethereum.",
        },
        {
          label: "Ví của tôi",
          explanation:
            "Điều này không chính xác. Ví là một ứng dụng quản lý Tài khoản Ethereum của bạn bằng cách kết nối với Chuỗi khối Ethereum. Nó không lưu trữ bất kỳ dữ liệu nào về lịch sử giao dịch của bạn.",
        },
        {
          label: "Các ứng dụng DeFi",
          explanation:
            "Điều này không chính xác. Các ứng dụng DeFi không lưu trữ trực tiếp lịch sử giao dịch của bạn. Thay vào đó, chi tiết giao dịch của bạn được ghi lại trên Chuỗi khối Ethereum.",
        },
        {
          label: "Chuỗi khối Ethereum",
          explanation:
            "Chính xác! Ethereum với tư cách là một Chuỗi khối lưu trữ tất cả dữ liệu do người dùng và ứng dụng của nó tạo ra. Điều này cho phép các trình xác thực duy trì cùng một trạng thái trên toàn mạng lưới ngang hàng.",
        },
      ],
      correct: 3,
    },
    {
      prompt:
        "Điều gì làm cho tài chính phi tập trung (DeFi) có thể thực hiện được trên Ethereum?",
      answers: [
        {
          label: "Hợp đồng thông minh",
          explanation:
            "Chính xác! Các hợp đồng thông minh giống như các câu lệnh 'nếu-thì' kỹ thuật số được viết vào Ethereum. Chúng thay thế các hợp đồng truyền thống và những người trung gian, tự động thực thi các giao dịch nếu đáp ứng các điều kiện nhất định.",
        },
        {
          label: "Người trung gian",
          explanation:
            "Điều này không chính xác. Ethereum không cần người trung gian để các giao dịch diễn ra. Mọi thứ đều chạy trên chuỗi thông qua các hợp đồng thông minh.",
        },
        {
          label: "Bitcoin",
          explanation:
            "Điều này không chính xác. Bitcoin là một mạng lưới đơn giản để lưu trữ giá trị, không phải để chạy các chương trình nâng cao. DeFi yêu cầu một hệ thống linh hoạt hơn, như Ethereum, có thể chạy các chương trình phức tạp để xử lý các khoản vay và giao dịch một cách tự động.",
        },
        {
          label: "Các tổ chức tài chính truyền thống",
          explanation:
            "Điều này không chính xác. Các ứng dụng DeFi không cần các tổ chức tài chính truyền thống. Chúng sử dụng các chương trình Chuỗi khối được gọi là hợp đồng thông minh để xử lý các giao dịch một cách tự động.",
        },
      ],
      correct: 0,
    },
  ],
  stablecoins: [
    {
      prompt: "Stablecoin là gì?",
      answers: [
        {
          label:
            "Tiền mã hóa có độ biến động giá thấp, giá trị của chúng ổn định và tương tự như các loại tiền tệ truyền thống",
          explanation:
            "Chính xác! Stablecoin được thiết kế để giải quyết vấn đề biến động phổ biến ở nhiều loại tiền mã hóa.",
        },
        {
          label: "Đại diện kỹ thuật số của vàng",
          explanation:
            "Điều này không chính xác. Mặc dù một số stablecoin có thể được bảo chứng bằng kim loại quý, chúng cũng có thể được bảo chứng bằng tiền pháp định hoặc các loại tiền mã hóa khác.",
        },
        {
          label: "Một loại thẻ tín dụng mới",
          explanation:
            "Điều này không chính xác. Stablecoin là một loại tiền mã hóa, không phải là thẻ tín dụng.",
        },
        {
          label: "Một sự thay thế cho ether",
          explanation:
            "Điều này không chính xác. Stablecoin không được thiết kế để thay thế ether (ETH). Chúng là một token khác trên mạng lưới Ethereum được thiết kế để duy trì giá trị ổn định theo thời gian.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "Đồng nào sau đây là một stablecoin?",
      answers: [
        {
          label: "Đô la Mỹ",
          explanation:
            "Điều này không chính xác. Mặc dù stablecoin có thể đại diện cho đô la Mỹ, nhưng đô la Mỹ không phải là tiền mã hóa.",
        },
        {
          label: "Token AAVE",
          explanation:
            "Điều này không chính xác. AAVE là một token quản trị cho Giao thức Aave, nơi cung cấp các thị trường cho stablecoin, nhưng bản thân AAVE không phải là một stablecoin.",
        },
        {
          label: "Dai",
          explanation:
            "Chính xác! Dai có lẽ là stablecoin phi tập trung nổi tiếng nhất và giá trị của nó xấp xỉ 1 Đô la Mỹ.",
        },
        {
          label: "Ether",
          explanation:
            "Điều này không chính xác. Ether là tiền tệ gốc của mạng lưới Ethereum, nhưng nó không được thiết kế để giữ giá trị ổn định.",
        },
      ],
      correct: 2,
    },
    {
      prompt: "Stablecoin có thể được sử dụng để làm gì?",
      answers: [
        {
          label: "Để bảo vệ người dùng khỏi những thay đổi biến động về giá",
          explanation:
            "Chưa hoàn toàn đúng. Câu trả lời này đúng một phần, nhưng đó chỉ là một trong nhiều điều mà stablecoin có thể được sử dụng.",
        },
        {
          label: "Để mua đồ trên internet ở bất cứ đâu trên thế giới",
          explanation:
            "Chưa hoàn toàn đúng. Câu trả lời này đúng một phần, nhưng đó chỉ là một trong nhiều điều mà stablecoin có thể được sử dụng.",
        },
        {
          label: "Để kiếm tiền bằng cách cho vay",
          explanation:
            "Chưa hoàn toàn đúng. Câu trả lời này đúng một phần, nhưng đó chỉ là một trong nhiều điều mà stablecoin có thể được sử dụng.",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "Chính xác! Stablecoin có thể được sử dụng để nắm giữ tiền mã hóa với ít biến động hơn, giao dịch toàn cầu trên internet và kiếm lãi khi bạn cho vay chúng.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Điều gì làm cho stablecoin trở nên độc đáo?",
      answers: [
        {
          label: "Nó là một token được gắn với một tài sản trong thế giới thực",
          explanation:
            "Điều này không chính xác. Mặc dù nhiều stablecoin được neo giá vào các tài sản trong thế giới thực, đặc điểm này không chỉ dành riêng cho stablecoin (ví dụ: các token được thế chấp bằng ETH).",
        },
        {
          label:
            "Đó là một token tiền mã hóa được thiết kế đặc biệt để giữ giá trị ổn định",
          explanation:
            "Chính xác! Các stablecoin được thiết kế để giữ giá trị tương đối ổn định, thường được neo vào các tài sản như tiền tệ (ví dụ: 1 USDC = 1 đô la Mỹ), nhưng không phải tất cả các stablecoin đều theo mô hình này (ví dụ: RAI).",
        },
        {
          label: "Nó có khả năng được gửi qua internet",
          explanation:
            "Điều này không chính xác. Mặc dù đây là một khả năng, nhưng nó không phải là duy nhất đối với stablecoin.",
        },
        {
          label: "Nó có thể được sử dụng trên mạng lưới Ethereum.",
          explanation:
            "Điều này không chính xác. Nhiều token tiền mã hóa khác có thể được sử dụng trên mạng lưới Ethereum.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Đâu KHÔNG phải là cách để nhận stablecoin?",
      answers: [
        {
          label: "Hoán đổi chúng với các token khác",
          explanation:
            "Không chính xác, đây là một cách để nhận stablecoin. Một trong những cách phổ biến nhất mà mọi người có được stablecoin là bằng cách hoán đổi các loại tiền mã hóa hiện có của họ lấy stablecoin.",
        },
        {
          label: "Vay mượn chúng",
          explanation:
            "Không chính xác, đây là một cách để nhận stablecoin. Bạn có thể vay mượn một số stablecoin bằng cách sử dụng các loại tiền mã hóa hiện có của mình, chẳng hạn như ether, làm tài sản thế chấp. Bạn sẽ cần phải trả lại các stablecoin đã vay để lấy lại tài sản thế chấp đã bị khóa của mình.",
        },
        {
          label: "Mua chúng từ một sàn giao dịch",
          explanation:
            "Không chính xác, đây là một cách để nhận stablecoin. Nhiều sàn giao dịch và ví cho phép bạn mua stablecoin trực tiếp. Các hạn chế về mặt địa lý có thể áp dụng đối với các sàn giao dịch tập trung.",
        },
        {
          label: "Khai thác chúng",
          explanation:
            "Chính xác! Không giống như bitcoin, bạn không thể khai thác stablecoin.",
        },
      ],
      correct: 3,
    },
  ],
  nfts: [
    {
      prompt: "NFT được định nghĩa một cách toàn diện nhất là:",
      answers: [
        {
          label: "tài sản kỹ thuật số độc nhất",
          explanation: "NFT đại diện cho một tài sản kỹ thuật số độc nhất.",
        },
        {
          label: "tác phẩm nghệ thuật kỹ thuật số",
          explanation:
            "NFT đại diện cho một tài sản kỹ thuật số độc nhất, đây thường là tác phẩm nghệ thuật kỹ thuật số, nhưng không chỉ giới hạn ở nghệ thuật.",
        },
        {
          label: "vé tham dự các sự kiện độc quyền",
          explanation:
            "NFT đại diện cho một tài sản kỹ thuật số độc nhất, đây có thể là một hệ thống bán vé, nhưng không chỉ giới hạn ở vé.",
        },
        {
          label: "các hợp đồng có tính ràng buộc pháp lý",
          explanation:
            "Mặc dù một hợp đồng pháp lý có thể được đại diện dưới dạng NFT, nhưng NFT không chỉ dành riêng cho các hợp đồng có tính ràng buộc pháp lý.",
        },
      ],
      correct: 0,
    },
    {
      prompt: "Hai NFT đại diện cho cùng một tác phẩm nghệ thuật là một.",
      answers: [
        {
          label: "Đúng",
          explanation:
            "NFT là không thể thay thế. Điều này có nghĩa là ngay cả khi chúng đại diện cho cùng một tác phẩm nghệ thuật kỹ thuật số, chúng vẫn có thể được nhận dạng một cách độc nhất. Trong thế giới nghệ thuật truyền thống, điều này có thể tương tự như bản gốc và bản in.",
        },
        {
          label: "Sai",
          explanation:
            "NFT là không thể thay thế. Điều này có nghĩa là ngay cả khi chúng đại diện cho cùng một tác phẩm nghệ thuật kỹ thuật số, chúng vẫn có thể được nhận dạng một cách độc nhất. Trong thế giới nghệ thuật truyền thống, điều này có thể tương tự như bản gốc và bản in.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "NFT thường đại diện nhất cho:",
      answers: [
        {
          label: "Mật khẩu cho Ví của bạn",
          explanation:
            "Đây là một rủi ro bảo mật và nhìn chung là một ý tưởng tồi!",
        },
        {
          label: "Quyền sở hữu một vật phẩm kỹ thuật số độc nhất",
          explanation:
            "NFT thường đại diện cho quyền sở hữu một vật phẩm kỹ thuật số độc nhất.",
        },
        {
          label: "Số dư ETH hiện tại của bạn",
          explanation:
            "NFT không thể đại diện cho số dư ETH của bạn một cách tùy ý.",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "NFT thường đại diện cho quyền sở hữu một vật phẩm kỹ thuật số độc nhất, không phải số dư ETH hay mật khẩu Ví.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "NFT đã giúp tạo ra một:",
      answers: [
        {
          label: "nền kinh tế giám tuyển",
          explanation:
            "NFT đã giúp tạo ra một nền kinh tế mới cho những người sáng tạo, không phải cho những người giám tuyển.",
        },
        {
          label: "nền kinh tế carbon",
          explanation:
            "NFT đã giúp tạo ra một nền kinh tế mới cho những người sáng tạo, không phải cho carbon.",
        },
        {
          label: "nền kinh tế sáng tạo",
          explanation: "NFT đã giúp tạo ra nền kinh tế sáng tạo.",
        },
        {
          label: "nền kinh tế doge",
          explanation:
            "NFT đã giúp tạo ra một nền kinh tế mới cho những người sáng tạo, không phải cho doge 🐶.",
        },
      ],
      correct: 2,
    },
    {
      prompt: "NFT trên Ethereum gây hại cho môi trường",
      answers: [
        {
          label: "Đúng",
          explanation:
            "Kể từ The Merge (quá trình chuyển đổi sang Bằng chứng cổ phần (PoS)), bất kỳ giao dịch nào cũng có tác động không đáng kể đến môi trường.",
        },
        {
          label: "Sai",
          explanation:
            "Kể từ The Merge (quá trình chuyển đổi sang Bằng chứng cổ phần (PoS)), bất kỳ giao dịch nào cũng có tác động không đáng kể đến môi trường.",
        },
      ],
      correct: 1,
    },
  ],
  daos: [
    {
      prompt: "Điều gì là đúng về các DAO?",
      answers: [
        {
          label: "Các DAO được sở hữu tập thể thông qua các token quản trị",
          explanation:
            "Các DAO được sở hữu tập thể, nhưng đó không phải là nhận định đúng duy nhất.",
        },
        {
          label: "Chúng được quản trị bởi các thành viên của mình",
          explanation:
            "Các DAO được quản trị bởi các thành viên của mình, nhưng đó không phải là nhận định đúng duy nhất.",
        },
        {
          label: "Chúng đang hướng tới một sứ mệnh chung",
          explanation:
            "Các DAO đang hướng tới một sứ mệnh chung, nhưng đó không phải là nhận định đúng duy nhất.",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "Chính xác, một DAO là một tổ chức được sở hữu tập thể, được quản trị bằng chuỗi khối và hướng tới một sứ mệnh chung.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Các ví dụ thực tế về cách sử dụng một DAO là gì?",
      answers: [
        {
          label:
            "Các giao thức phi tập trung, các thành viên bỏ phiếu về các vấn đề của giao thức hoặc cách phát triển sản phẩm",
          explanation:
            "Các DAO giao thức là một ví dụ, nhưng các DAO không chỉ giới hạn ở đó.",
        },
        {
          label: "Sở hữu tập thể, ví dụ: đối với các NFT hoặc tài sản vật chất",
          explanation:
            "Các DAO sưu tập là một ví dụ, nhưng các DAO không chỉ giới hạn ở đó.",
        },
        {
          label:
            "Đầu tư mạo hiểm và tài trợ, góp vốn và bỏ phiếu cho các dự án để tài trợ",
          explanation:
            "Các DAO đầu tư mạo hiểm hoặc tài trợ là một ví dụ, nhưng các DAO không chỉ giới hạn ở đó.",
        },
        {
          label: "Tất cả các ý trên",
          explanation: "Một DAO có thể có vô số 'sứ mệnh'.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Không giống như các tổ chức truyền thống, các DAO thì…",
      answers: [
        {
          label: "Thường có tính phân cấp",
          explanation:
            "Các DAO thường có cấu trúc phẳng và được dân chủ hóa hoàn toàn.",
        },
        {
          label: "Minh bạch và công khai hoàn toàn về các hoạt động của chúng",
          explanation:
            "Nhờ vào việc bỏ phiếu trên chuỗi, các quyết định đều minh bạch trên chuỗi khối. Các cuộc thảo luận và những yếu tố khác của quá trình ra quyết định đều cởi mở với tất cả các thành viên.",
        },
        {
          label: "Được kiểm soát bởi một bên tập trung",
          explanation:
            "Các thay đổi yêu cầu sự bỏ phiếu của các thành viên. Các dịch vụ được cung cấp sẽ được xử lý tự động theo phương thức phi tập trung.",
        },
        {
          label: "Bị hạn chế về việc ai có thể đề xuất các thay đổi",
          explanation:
            "Thông thường, mọi thành viên của DAO đều có thể đề xuất các thay đổi.",
        },
      ],
      correct: 1,
    },
    {
      prompt:
        "Điều gì là thiết yếu về các hợp đồng thông minh đối với các DAO?",
      answers: [
        {
          label: "Mã hợp đồng thông minh có thể được sửa đổi",
          explanation:
            "Một khi hợp đồng đã hoạt động trên Ethereum, không ai có thể thay đổi các quy tắc ngoại trừ thông qua việc bỏ phiếu. Điều này cho phép DAO hoạt động theo các quy tắc mà nó đã được lập trình.",
        },
        {
          label:
            "Nó có một chủ sở hữu cá nhân, người giữ quyền thực hiện các thay đổi và gửi tiền từ kho bạc.",
          explanation:
            "Kho bạc được xác định bởi hợp đồng thông minh. Để tiêu tiền, cần có sự chấp thuận của nhóm.",
        },
        {
          label: "Tin tưởng vào sự đồng thuận phân tán của Chuỗi khối cơ sở",
          explanation:
            "Điều quan trọng đối với một DAO là Chuỗi khối cơ sở không thể bị thao túng. Sự đồng thuận của chính Ethereum đủ phân tán và vững chắc để các tổ chức tin tưởng vào mạng lưới.",
        },
        {
          label: "Các DAO không cần hợp đồng thông minh",
          explanation:
            "Xương sống của một DAO là hợp đồng thông minh của nó, xác định các quy tắc của tổ chức và nắm giữ kho bạc của nhóm.",
        },
      ],
      correct: 2,
    },
    {
      prompt: "Đâu không phải là một cơ chế để quản trị một DAO?",
      answers: [
        {
          label: "Tư cách thành viên dựa trên token",
          explanation:
            "Quản trị dựa trên token được sử dụng rất rộng rãi. Nó thường hoàn toàn không cần cấp phép và thường được sử dụng để quản trị các Giao thức phi tập trung rộng lớn và/hoặc chính các token đó.",
        },
        {
          label: "Tư cách thành viên dựa trên cổ phần",
          explanation:
            "Các DAO dựa trên cổ phần có cấp phép nhiều hơn nhưng vẫn khá cởi mở. Bất kỳ thành viên tiềm năng nào cũng có thể gửi đề xuất để tham gia DAO, thường cung cấp một khoản đóng góp có giá trị dưới dạng token hoặc công việc.",
        },
        {
          label: "Tư cách thành viên dựa trên danh tiếng",
          explanation:
            "Không giống như tư cách thành viên dựa trên token hoặc cổ phần, các DAO dựa trên danh tiếng không chuyển giao quyền sở hữu cho những người đóng góp. Các thành viên DAO phải kiếm được danh tiếng thông qua việc tham gia.",
        },
        {
          label: "Ban điều hành và quản lý kho bạc ngoài chuỗi",
          explanation:
            "Cách tiếp cận này sử dụng các cơ chế quản trị mang tính tập trung cao và thiếu minh bạch. Ngược lại, các DAO sử dụng các cơ chế bỏ phiếu có thể xác minh và quản lý kho bạc trên chuỗi để đảm bảo tính minh bạch và trách nhiệm giải trình.",
        },
      ],
      correct: 3,
    },
  ],
  "staking-solo": [
    {
      prompt: "Điều nào sau đây là đúng về phạt cắt giảm?",
      answers: [
        {
          label:
            "Hình phạt cho việc ngoại tuyến, phần thưởng tiếp tục khi trực tuyến trở lại",
          explanation:
            "Việc ngoại tuyến KHÔNG dẫn đến phạt cắt giảm. Các hình phạt nhỏ sẽ phát sinh khi ngoại tuyến và phần thưởng sẽ tiếp tục khi trình xác thực trực tuyến trở lại và tiếp tục các chứng thực.",
        },
        {
          label:
            "Hình phạt cho việc ngoại tuyến, trình xác thực ngay lập tức bị cấm chứng thực vĩnh viễn",
          explanation:
            "Việc ngoại tuyến KHÔNG dẫn đến phạt cắt giảm. Mặc dù phạt cắt giảm sẽ dẫn đến việc trình xác thực bị cấm chứng thực vĩnh viễn và cuối cùng bị buộc loại bỏ, nhưng việc ngoại tuyến sẽ KHÔNG dẫn đến việc bị loại khỏi mạng lưới.",
        },
        {
          label:
            "Hình phạt cho việc vi phạm các quy tắc đồng thuận cụ thể, phần thưởng tiếp tục sau khi phạt cắt giảm",
          explanation:
            "Phạt cắt giảm là một hình phạt nghiêm trọng đối với việc vi phạm các quy tắc đồng thuận cụ thể gây ra mối đe dọa cho mạng lưới. Do đó, một khi trình xác thực bị phạt cắt giảm, họ ngay lập tức bị cấm chứng thực thêm và cuối cùng bị buộc loại khỏi mạng lưới và số ETH còn lại được rút tiền về cho chủ sở hữu.",
        },
        {
          label:
            "Hình phạt cho việc vi phạm các quy tắc đồng thuận cụ thể, trình xác thực ngay lập tức bị cấm chứng thực vĩnh viễn",
          explanation:
            "Phạt cắt giảm là một hình phạt nghiêm trọng đối với việc vi phạm các quy tắc đồng thuận cụ thể gây ra mối đe dọa cho mạng lưới. Do đó, một khi trình xác thực bị phạt cắt giảm, họ ngay lập tức bị cấm chứng thực thêm và cuối cùng bị buộc loại khỏi mạng lưới và số ETH còn lại được rút tiền về cho chủ sở hữu.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Điều gì xảy ra nếu một trình xác thực ngoại tuyến?",
      answers: [
        {
          label: "Không ảnh hưởng đến phần thưởng",
          explanation:
            "Các hình phạt sẽ phát sinh khi một trình xác thực không có sẵn để chứng thực trạng thái của Chuỗi cho bất kỳ Kỷ nguyên nào. Quy mô của các hình phạt này xấp xỉ bằng 75% phần thưởng cho một chứng thực hợp lệ. Phần thưởng tiếp tục khi trình xác thực trực tuyến trở lại và KHÔNG có phạt cắt giảm nào xảy ra.",
        },
        {
          label:
            "Các hình phạt không hoạt động chỉ phát sinh trong khi không có sẵn",
          explanation:
            "Trong khi không có sẵn, một trình xác thực sẽ phải chịu các hình phạt không hoạt động nhỏ, xấp xỉ bằng 75% phần thưởng cho một chứng thực hợp lệ. Trong những trường hợp hiếm gặp/cực đoan khi mạng lưới không thể đạt trạng thái đã chung cuộc (tức là hơn 1/3 mạng lưới cũng ngoại tuyến), các hình phạt này lớn hơn đáng kể. Phần thưởng tiếp tục khi trình xác thực trực tuyến trở lại và không có phạt cắt giảm nào xảy ra.",
        },
        {
          label: "Bị phạt cắt giảm ngay lập tức và loại khỏi mạng lưới",
          explanation:
            "Đây là một quan niệm sai lầm phổ biến, nhưng việc ngoại tuyến KHÔNG dẫn đến phạt cắt giảm! Phạt cắt giảm là một loại hình phạt cụ thể cho hành vi vi phạm nghiêm trọng hơn, với các hình phạt lớn hơn và cũng dẫn đến việc bị loại khỏi tập hợp trình xác thực.",
        },
        {
          label: "Độ trễ một tuần trước khi bị phạt cắt giảm và loại bỏ",
          explanation:
            "Việc ngoại tuyến KHÔNG dẫn đến phạt cắt giảm, ngay cả sau một khoảng thời gian dài. Về lý thuyết, một trình xác thực có thể ngoại tuyến trong nhiều năm mà không bị phạt cắt giảm, mặc dù các hình phạt không hoạt động sẽ tăng lên nếu trình xác thực không thoát.",
        },
      ],
      correct: 1,
    },
    {
      prompt:
        "Đâu KHÔNG phải là phần thưởng nhận được với tư cách là một trình xác thực?",
      answers: [
        {
          label: "Phần thưởng khối",
          explanation:
            "Các trình xác thực nhận được phần thưởng dưới dạng phát hành ETH mới cho việc đề xuất một khối hợp lệ khi được Giao thức chọn ngẫu nhiên. Những phần thưởng này tách biệt với các khoản phí và MEV cũng kiếm được khi đề xuất các khối.",
        },
        {
          label: "Phí ưu tiên / MEV",
          explanation:
            "Phí ưu tiên (phần phí chưa bị đốt) và thu nhập MEV được phân phối cho người đề xuất khối (người đặt cọc/trình xác thực) thông qua Địa chỉ người nhận phí do trình xác thực đó cung cấp. Những phần thưởng này tách biệt với phần thưởng khối cũng kiếm được khi đề xuất các khối.",
        },
        {
          label: "Phần thưởng chứng thực đầu Chuỗi",
          explanation:
            "Các trình xác thực nhận được phần thưởng dưới dạng phát hành ETH mới cho việc chứng thực chính xác và kịp thời đầu Chuỗi, đầu Kỷ nguyên đã được chứng minh hợp lệ hiện tại và đầu Kỷ nguyên đã chung cuộc hiện tại.",
        },
        {
          label: "Phí giao dịch Uniswap",
          explanation:
            "Phí giao dịch do các nền tảng giao dịch và sàn giao dịch tạo ra không được nhận bởi các trình xác thực Ethereum.",
        },
      ],
      correct: 3,
    },
    {
      prompt:
        "Thời gian hoạt động (uptime) nào là cần thiết để một trình xác thực có lợi nhuận?",
      answers: [
        {
          label: "100%",
          explanation:
            "Mặc dù là một mục tiêu lý tưởng, việc đạt được 100% thời gian hoạt động không phải là yêu cầu tối thiểu để một trình xác thực duy trì lợi nhuận.",
        },
        {
          label: "~99%",
          explanation:
            "Mặc dù là một mục tiêu xuất sắc, việc đạt được 99% thời gian hoạt động không phải là yêu cầu tối thiểu để một trình xác thực duy trì lợi nhuận.",
        },
        {
          label: "~50%",
          explanation:
            "Các trình xác thực bị phạt xấp xỉ 75% những gì họ sẽ được thưởng cho việc chứng thực chính xác và kịp thời trạng thái của Chuỗi. Điều này có nghĩa là trong một khoảng thời gian nhất định, việc ngoại tuyến 50% thời gian đó vẫn sẽ có lợi nhuận ròng, mặc dù ít lợi nhuận hơn so với một trình xác thực có sẵn đáng tin cậy hơn.",
        },
        {
          label: "~25%",
          explanation:
            "Một trình xác thực chỉ có 25% thời gian hoạt động sẽ phải chịu các hình phạt cho 75% thời gian còn lại. Với quy mô tương tự của phần thưởng và hình phạt, việc ngoại tuyến gấp 3 lần lượng thời gian trực tuyến sẽ dẫn đến khoản lỗ ròng ETH trong khoảng thời gian đó.",
        },
      ],
      correct: 2,
    },
    {
      prompt:
        "Đâu KHÔNG phải là cách để bảo vệ/ngăn chặn trình xác thực của bạn khỏi bị phạt cắt giảm?",
      answers: [
        {
          label:
            "Tránh các thiết lập quá dư thừa và chỉ lưu trữ các khóa của bạn với một máy khách trình xác thực tại một thời điểm",
          explanation:
            "Phần lớn các trường hợp phạt cắt giảm cho đến nay là do những người vận hành lưu trữ các khóa ký của họ trên nhiều hơn một máy, như một bản sao lưu dự phòng. Điều này rất rủi ro, vì bất kỳ sự cố nào cũng có thể dẫn đến bỏ phiếu kép và phạt cắt giảm.",
        },
        {
          label: "Chạy phần mềm máy khách nguyên bản mà không tự thay đổi mã",
          explanation:
            "Phần mềm máy khách được viết và thử nghiệm để bảo vệ khỏi việc thực hiện các hành động có thể bị phạt cắt giảm. Để thực thi một hành động có thể bị phạt cắt giảm, điều này thường yêu cầu bạn tự thay đổi mã máy khách theo cách độc hại.",
        },
        {
          label:
            "Chạy một máy khách đang được sử dụng bởi phần lớn các trình xác thực khác",
          explanation:
            "Sử dụng cùng một máy khách với phần lớn phần còn lại của mạng lưới khiến bạn có nguy cơ bị phạt cắt giảm trong trường hợp có lỗi phần mềm trong máy khách đó. Chạy một máy khách thiểu số sẽ bảo vệ khỏi điều này.",
        },
        {
          label:
            "Vô hiệu hóa trình xác thực trong 2-4 Kỷ nguyên trước khi di chuyển các khóa sang một máy mới",
          explanation:
            "Điều này cho phép có thời gian để Chuỗi đạt trạng thái đã chung cuộc trong khi nút của bạn ngoại tuyến, nhằm giảm thiểu mọi rủi ro vô tình bỏ phiếu kép và phạt cắt giảm trong quá trình di chuyển khóa.",
        },
      ],
      correct: 2,
    },
    {
      prompt:
        "Điều nào KHÔNG bắt buộc để nhận các khoản thanh toán phần thưởng / rút tiền một phần?",
      answers: [
        {
          label: "Cung cấp một Địa chỉ rút tiền thực thi một lần",
          explanation:
            "Điều này được yêu cầu một lần để quá trình rút tiền biết nơi gửi bất kỳ khoản tiền nào của lớp đồng thuận đến",
        },
        {
          label: "Có số dư hiệu dụng là 32 ETH",
          explanation:
            "Số dư hiệu dụng của bạn phải đạt tối đa ở mức 32 ETH trước khi bất kỳ khoản rút tiền một phần nào được kích hoạt.",
        },
        {
          label: "Có tổng số dư trên 32 ETH",
          explanation:
            "Tổng số dư của bạn phải có phần thưởng trên 32 ETH để bất kỳ khoản rút tiền một phần nào được kích hoạt.",
        },
        {
          label: "Gửi số tiền rút được yêu cầu cùng với thanh toán Gas",
          explanation:
            "Một khi các tiêu chí khác được đáp ứng, các khoản thanh toán phần thưởng là tự động. Người nhận không cần phải gửi giao dịch hoặc trả Gas. Số tiền được rút bằng với số dư của trình xác thực vượt quá 32. Không thể yêu cầu các số tiền tùy chỉnh.",
        },
      ],
      correct: 3,
    },
  ],
  "layer-2": [
    {
      prompt: "Các mạng lưới Chuỗi khối lớp 2 (l2) dùng để:",
      answers: [
        {
          label: "Mở rộng quy mô Ethereum",
          explanation:
            "Mục đích chính của các bản cuộn và các giải pháp lớp 2 (l2) khác là để mở rộng quy mô Ethereum.",
        },
        {
          label: "Thực hiện thanh toán",
          explanation:
            "Mục đích chính của các bản cuộn và các giải pháp lớp 2 (l2) khác là để mở rộng quy mô Ethereum.",
        },
        {
          label: "Mua NFT",
          explanation:
            "Mục đích chính của các bản cuộn và các giải pháp lớp 2 (l2) khác là để mở rộng quy mô Ethereum.",
        },
        {
          label: "Phi tập trung hóa Ethereum",
          explanation:
            "Mục đích chính của các bản cuộn và các giải pháp lớp 2 (l2) khác là để mở rộng quy mô Ethereum.",
        },
      ],
      correct: 0,
    },
    {
      prompt:
        "Để mở rộng quy mô, hầu hết các mạng lưới lớp 1 (l1) thay thế chủ yếu đã hy sinh:",
      answers: [
        {
          label: "Bảo mật",
          explanation:
            "Hầu hết các mạng lưới lớp 1 (l1) thay thế đều hy sinh bảo mật và một số yếu tố khác để mở rộng quy mô.",
        },
        {
          label: "Sự phi tập trung",
          explanation:
            "Hầu hết các mạng lưới lớp 1 (l1) thay thế đều hy sinh sự phi tập trung và một số yếu tố khác để mở rộng quy mô.",
        },
        {
          label: "Giá token",
          explanation:
            "Giá token không có bất kỳ tác động nào đến khả năng mở rộng quy mô.",
        },
        {
          label: "Bảo mật và sự phi tập trung",
          explanation:
            "Hầu hết các mạng lưới lớp 1 (l1) thay thế đều hy sinh cả bảo mật và sự phi tập trung để mở rộng quy mô.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Điều nào sau đây không được coi là lớp 2 (l2)?",
      answers: [
        {
          label: "Validium",
          explanation:
            "Validium không được coi là giải pháp lớp 2 (l2) vì chúng không lấy bảo mật hoặc Tính khả dụng của dữ liệu từ Ethereum. Đây không phải là câu trả lời đúng duy nhất.",
        },
        {
          label: "Sidechain",
          explanation:
            "Sidechain không được coi là giải pháp lớp 2 (l2) vì chúng không lấy bảo mật hoặc Tính khả dụng của dữ liệu từ Ethereum. Đây không phải là câu trả lời đúng duy nhất.",
        },
        {
          label: "Các Chuỗi khối lớp 1 (l1) thay thế",
          explanation:
            "Các Chuỗi khối lớp 1 (l1) thay thế không được coi là giải pháp lớp 2 (l2). Đây không phải là câu trả lời đúng duy nhất.",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "Validium, Sidechain và các Chuỗi khối lớp 1 (l1) thay thế không được coi là giải pháp lớp 2 (l2) vì chúng không lấy bảo mật hoặc Tính khả dụng của dữ liệu từ Ethereum.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Tại sao Ethereum không có một lớp 2 (l2) 'chính thức'?",
      answers: [
        {
          label:
            "Các nhà phát triển cốt lõi quá bận rộn làm việc trên Ethereum",
          explanation:
            "Không có kế hoạch cho một lớp 2 (l2) 'chính thức' trên Ethereum vì chúng ta sẽ được hưởng lợi từ nhiều cách tiếp cận khác nhau trong việc thiết kế các giải pháp lớp 2 (l2).",
        },
        {
          label:
            "Là một lớp 1 (l1), Ethereum cuối cùng sẽ tự đạt được quy mô lớn",
          explanation:
            "Không có kế hoạch cho một lớp 2 (l2) 'chính thức' trên Ethereum vì chúng ta sẽ được hưởng lợi từ nhiều cách tiếp cận khác nhau trong việc thiết kế các giải pháp lớp 2 (l2).",
        },
        {
          label:
            "Các nhà phát triển cốt lõi vẫn đang tranh luận giữa bản cuộn optimistic và bản cuộn zk",
          explanation:
            "Không có kế hoạch cho một lớp 2 (l2) 'chính thức' trên Ethereum vì chúng ta sẽ được hưởng lợi từ nhiều cách tiếp cận khác nhau trong việc thiết kế các giải pháp lớp 2 (l2).",
        },
        {
          label:
            "Ethereum sẽ được hưởng lợi từ nhiều cách tiếp cận khác nhau trong việc thiết kế một lớp 2 (l2)",
          explanation:
            "Không có kế hoạch cho một lớp 2 (l2) 'chính thức' trên Ethereum vì chúng ta sẽ được hưởng lợi từ nhiều cách tiếp cận khác nhau trong việc thiết kế các giải pháp lớp 2 (l2).",
        },
      ],
      correct: 3,
    },
  ],
  merge: [
    {
      prompt: "The Merge đã chuyển Ethereum sang cơ chế đồng thuận nào?",
      answers: [
        {
          label: "Bằng chứng công việc (PoW)",
          explanation:
            "Bằng chứng công việc (PoW) là cơ chế đồng thuận được sử dụng trước The Merge.",
        },
        {
          label: "Bằng chứng cổ phần (PoS)",
          explanation:
            "Chính xác! The Merge đã chuyển Ethereum sang Bằng chứng cổ phần (PoS).",
        },
        {
          label: "Bằng chứng ủy quyền (PoA)",
          explanation:
            "Ethereum không và chưa bao giờ sử dụng bằng chứng ủy quyền (PoA) trên Mạng chính Ethereum.",
        },
        {
          label: "Tất cả các ý trên",
          explanation:
            "Ethereum không thể có tất cả các cơ chế đồng thuận này cùng một lúc.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "The Merge đã giảm mức tiêu thụ năng lượng của Ethereum đi:",
      answers: [
        {
          label: "50%",
          explanation:
            "Mức tiêu thụ năng lượng của Ethereum đã giảm 99,95% sau khi The Merge cho phép chuyển đổi từ Bằng chứng công việc (PoW) sang Bằng chứng cổ phần (PoS).",
        },
        {
          label: "62,5%",
          explanation:
            "Mức tiêu thụ năng lượng của Ethereum đã giảm 99,95% sau khi The Merge cho phép chuyển đổi từ Bằng chứng công việc (PoW) sang Bằng chứng cổ phần (PoS).",
        },
        {
          label: "90%",
          explanation:
            "Mức tiêu thụ năng lượng của Ethereum đã giảm 99,95% sau khi The Merge cho phép chuyển đổi từ Bằng chứng công việc (PoW) sang Bằng chứng cổ phần (PoS).",
        },
        {
          label: "99.95%",
          explanation:
            "Mức tiêu thụ năng lượng của Ethereum đã giảm 99,95% sau khi The Merge cho phép chuyển đổi từ Bằng chứng công việc (PoW) sang Bằng chứng cổ phần (PoS).",
        },
      ],
      correct: 3,
    },
    {
      prompt: "The Merge đã diễn ra khi nào?",
      answers: [
        {
          label: "Ngày 15 tháng 9 năm 2022",
          explanation:
            "The Merge đã diễn ra vào ngày 15 tháng 9 năm 2022 lúc 06:42:42 SA (UTC).",
        },
        {
          label: "Ngày 1 tháng 12 năm 2020",
          explanation:
            "The Merge đã diễn ra muộn hơn thời điểm này. Ngày 1 tháng 12 năm 2020 là lúc Chuỗi Beacon được ra mắt.",
        },
        {
          label: "Ngày 27 tháng 11 năm 2013",
          explanation:
            "The Merge đã diễn ra muộn hơn thời điểm này. Ngày 27 tháng 11 năm 2013 là lúc sách trắng Ethereum được phát hành.",
        },
        {
          label: "Ngày 31 tháng 10 năm 2008",
          explanation:
            "The Merge đã diễn ra muộn hơn thời điểm này. Ngày 31 tháng 10 là ngày sách trắng Bitcoin được phát hành.",
        },
      ],
      correct: 0,
    },
    {
      prompt:
        "The Merge có nghĩa là người dùng phải hoán đổi ETH của họ lấy ETH2:",
      answers: [
        {
          label: "Đúng",
          explanation:
            "ETH không hề thay đổi vào bất kỳ thời điểm nào trước, trong hoặc sau The Merge. Ý tưởng 'nâng cấp' ETH lên ETH2 là một chiến thuật phổ biến của những kẻ xấu nhằm lừa đảo người dùng.",
        },
        {
          label: "Sai",
          explanation:
            "ETH không hề thay đổi vào bất kỳ thời điểm nào trước, trong hoặc sau The Merge. Ý tưởng 'nâng cấp' ETH lên ETH2 là một chiến thuật phổ biến của những kẻ xấu nhằm lừa đảo người dùng.",
        },
      ],
      correct: 1,
    },
    {
      prompt: "Lớp đồng thuận của Ethereum trước đây được gọi là:",
      answers: [
        {
          label: "Bằng chứng công việc (PoW)",
          explanation:
            "Bằng chứng công việc (PoW) là cơ chế đồng thuận được sử dụng trước The Merge.",
        },
        {
          label: "Eth2",
          explanation:
            "Trước khi được đổi tên thành lớp đồng thuận, nó ban đầu được gọi là 'Eth2'.",
        },
        {
          label: "Eth1",
          explanation:
            "Eth1 là tên ban đầu được đặt cho lớp thực thi, không phải lớp đồng thuận.",
        },
        {
          label: "Đặt cọc",
          explanation:
            "Đặt cọc là việc gửi ETH vào một hợp đồng thông minh để giúp bảo mật chuỗi.",
        },
      ],
      correct: 1,
    },
  ],
  web3: [
    {
      prompt: "Web3 cho phép người dùng sở hữu tài sản kỹ thuật số thông qua:",
      answers: [
        {
          label: "Token",
          explanation:
            "Token cung cấp một cách để đại diện cho các đơn vị giá trị có thể hoán đổi cho nhau, được sở hữu bởi một Tài khoản Ethereum. Mặc dù chúng đại diện cho quyền sở hữu, nhưng vẫn có nhiều cách khác để sở hữu tài sản kỹ thuật số trên Ethereum.",
        },
        {
          label: "NFT",
          explanation:
            "NFT (Token không thể thay thế) cung cấp một cách để đại diện cho bất kỳ thứ gì độc nhất dưới dạng tài sản dựa trên Ethereum. Mặc dù chúng đại diện cho quyền sở hữu, nhưng vẫn có nhiều cách khác để sở hữu tài sản kỹ thuật số trên Ethereum.",
        },
        {
          label: "ENS",
          explanation:
            "ENS (Ethereum Name Service) là một dịch vụ đặt tên phi tập trung cho Chuỗi khối Ethereum. Mặc dù chúng đại diện cho quyền sở hữu, nhưng vẫn có nhiều cách khác để sở hữu tài sản kỹ thuật số trên Ethereum.",
        },
        {
          label: "Tất cả các phương án trên",
          explanation:
            "Tất cả các tùy chọn đều cung cấp cách để sở hữu tài sản kỹ thuật số trên Ethereum. Token, NFT và ENS đều là những cách để đại diện cho quyền sở hữu tài sản kỹ thuật số.",
        },
      ],
      correct: 3,
    },
    {
      prompt: "Web1 là chỉ đọc, Web2 là đọc-ghi, Web3 đã được mô tả là:",
      answers: [
        {
          label: "đọc-ghi-bán",
          explanation: "Web3 chưa từng được mô tả theo cách này.",
        },
        {
          label: "đọc-ghi-lưu trữ",
          explanation: "Web3 chưa từng được mô tả theo cách này.",
        },
        {
          label: "đọc-ghi-sở hữu",
          explanation:
            "Web3 cho phép người dùng sở hữu dữ liệu của họ và do đó đã được mô tả là 'đọc-ghi-sở hữu', một sự cải tiến so với Web2, vốn chỉ là 'đọc-ghi'.",
        },
        {
          label: "đọc-ghi-mua",
          explanation: "Web3 chưa từng được mô tả theo cách này.",
        },
      ],
      correct: 2,
    },
    {
      prompt:
        "Phiên bản web nào không phụ thuộc vào các nhà cung cấp dịch vụ thanh toán bên thứ ba?",
      answers: [
        {
          label: "Web1",
          explanation:
            "Web1 không có các khoản thanh toán gốc, được tích hợp sẵn.",
        },
        {
          label: "Web2",
          explanation:
            "Web2 không có các khoản thanh toán gốc, được tích hợp sẵn.",
        },
        {
          label: "Web3",
          explanation:
            "Web3 có các khoản thanh toán gốc, được tích hợp sẵn bằng tiền mã hóa, chẳng hạn như ETH.",
        },
        {
          label: "Tất cả các phương án trên",
          explanation:
            "Web1 và Web2 không có các khoản thanh toán gốc, được tích hợp sẵn.",
        },
      ],
      correct: 2,
    },
    {
      prompt: "Thuật ngữ 'Web3' được đặt ra lần đầu tiên bởi:",
      answers: [
        {
          label: "Gavin Wood",
          explanation:
            "Gavin Wood, một nhà đồng sáng lập của Ethereum, được cho là người đã đặt ra thuật ngữ Web3 ngay sau khi Ethereum ra mắt vào năm 2015.",
        },
        {
          label: "Steve Jobs",
          explanation: "Steve Jobs không đặt ra cụm từ 'Web3'.",
        },
        {
          label: "Vitalik Buterin",
          explanation:
            "Vitalik Buterin, mặc dù là nhà sáng lập ban đầu của Ethereum, nhưng không đặt ra cụm từ 'Web3'.",
        },
        {
          label: "Elon Musk",
          explanation: "Elon Musk không đặt ra cụm từ 'Web3'.",
        },
      ],
      correct: 0,
    },
    {
      prompt:
        "Bạn có thể có một thông tin đăng nhập duy nhất, kháng kiểm duyệt trên toàn bộ web thông qua việc sử dụng:",
      answers: [
        {
          label: "Đăng nhập bằng Facebook",
          explanation: "Đăng nhập bằng Facebook không kháng kiểm duyệt.",
        },
        {
          label: "Đăng nhập bằng Google",
          explanation: "Đăng nhập bằng Google không kháng kiểm duyệt.",
        },
        {
          label: "Đăng nhập bằng Ethereum",
          explanation:
            "Đăng nhập bằng Ethereum là tùy chọn duy nhất kháng kiểm duyệt và có thể sử dụng trên bất kỳ ứng dụng web nào.",
        },
        {
          label: "Đăng nhập bằng Twitter",
          explanation: "Đăng nhập bằng Twitter không kháng kiểm duyệt.",
        },
      ],
      correct: 2,
    },
  ],
} satisfies Record<string, QuizQuestion[]>

export type QuizKey = keyof typeof quizzes
