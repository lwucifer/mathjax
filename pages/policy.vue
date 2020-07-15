<template>
  <section
    class="main-banner active"
    v-bind:style="{ backgroundImage: 'url(' + require('assets/images/banner.jpg') + ')' }"
  >
    <div class="container">
      <div class="article">
        <div class="article-header">
          <h5>
            <strong class="article-header__title">CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN KHÁCH HÀNG</strong>
          </h5>
        </div>
        <div class="article-body">
          <p class="article-body__term">
            <strong class="article-body__subheader">1. Mục đích và phạm vi thu thập</strong>
          </p>
          <p class="article-body__term__list">
            Việc thu thập dữ liệu chủ yếu trên App
            <strong>LuxCheck</strong> bao gồm: email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ người dùng. Đây là các thông tin mà chúng tôi cần thành viên cung cấp bắt buộc khi đăng ký sử dụng dịch vụ và để chúng tôi liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên ứng dụng nhằm đảm bảo quyền lợi cho người dùng.
          </p>
          <p
            class="article-body__term__list"
          >Trong quá trình xác thực Seller, Ban quản trị ứng dụng cần lưu giữ thông tin chi tiết về số tài khoản ngân hàng, căn cước công dân,… Để đảm bảo tính minh bạch của mỗi hồ sơ.</p>
          <p
            class="article-body__term__list"
          >Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho Ban quản lý ứng dụng về những hành vi sử dụng trái phép, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.</p>

          <p class="article-body__term">
            <strong class="article-body__subheader">2. Phạm vi sử dụng thông tin</strong>
          </p>
          <p class="article-body__term__list">Công ty sử dụng thông tin thành viên cung cấp để:</p>
          <div class="article-body__li">
            <ul>
              <li>- Cung cấp tới những người mua thông tin xác minh độ tin cậy của Seller;</li>
              <li>
                - Gửi các thông báo về các hoạt động trao đổi thông tin giữa thành viên và
                <strong>LuxCheck</strong>;
              </li>
              <li>- Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành viên hoặc các hoạt động giả mạo thành viên;</li>
              <li>- Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt;</li>
              <li>- Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến việc xác minh hồ sơ tại ứng dụng;</li>
              <li>- Trong trường hợp có yêu cầu của pháp luật: Công ty có trách nhiệm hợp tác cung cấp thông tin cá nhân thành viên khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của thành viên;</li>
              <li>- Trong những trường hợp còn lại, chúng tôi sẽ có thông báo cụ thể cho mỗi thành viên khi phải tiết lộ thông tin cho một bên thứ ba và thông tin này chỉ được cung cấp khi được sự phản hồi đồng ‎ý‎ từ phía thành viên.</li>
            </ul>
          </div>

          <p class="article-body__term">
            <strong class="article-body__subheader">3. Thời gian lưu trữ thông tin</strong>
          </p>
          <p>
            Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự khách hàng đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân khách hàng sẽ được bảo mật trên máy chủ của
            <strong>LuxCheck</strong>.
          </p>

          <p class="article-body__term">
            <strong
              class="article-body__subheader"
            >4. Những người hoặc tổ chức có thể được tiếp cận với thông tin đó</strong>
          </p>
          <div class="article-body__li">
            <ul>
              <li>- Ban quản trị và các bộ phận liên quan đến việc xác thực thông tin của mỗi Seller;</li>
              <li>- Những cá nhân hoặc tổ chức có nhu cầu tìm hiểu thông tin Seller;</li>
              <li>- Trong trường hợp có yêu cầu của pháp luật: Công ty có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.</li>
            </ul>
          </div>

          <p class="article-body__term">
            <strong
              class="article-body__subheader"
            >5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</strong>
          </p>
          <p>
            <strong>Công ty Cổ Phần FAMTECH Việt Nam.</strong>
          </p>
          <p>Tầng 4, Mỹ Sơn Tower, 62A Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, TP. Hà Nội.</p>
          <p>
            <a
              href="mailto:luxcheck@luxuria.vn?subject=Please support me!"
              target="_blank"
              style="color: #019d3c"
            >Email: luxcheck@luxuria.vn</a>
          </p>
          <p>
            Đối với các thắc mắc về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân người tiêu dùng, khách hàng có thể liên hệ email:
            <a
              href="mailto:luxcheck@luxuria.vn?subject=Please support me!"
              target="_blank"
              style="color: #019d3c"
            >luxcheck@luxuria.vn</a>
          </p>

          <p class="article-body__term">
            <strong
              class="article-body__subheader"
            >6. Phương thức và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình.</strong>
          </p>
          <p>Thành viên có quyền tự kiểm tra, cập nhật hoặc điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản đã được cấp trên ứng dụng. Sau đó, chọn mục “Hồ sơ cá nhân” để thực hiện việc chỉnh sửa theo yêu cầu của người dùng.</p>

          <p class="article-body__term">
            <strong class="article-body__subheader">7. Cam kết bảo mật thông tin cá nhân khách hàng</strong>
          </p>
          <div class="article-body__li">
            <ul>
              <li>- Thông tin cá nhân của thành viên được chúng tôi cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin của Công ty. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác;</li>
              <li>- Không sử dụng, không chuyển giao cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ thành viên;</li>
              <li>- Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân thành viên, Ban quản trị ứng dụng sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết;</li>
              <li>- Chúng tôi yêu cầu các cá nhân khi đăng ký là thành viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email, số chứng minh nhân dân, điện thoại, số tài khoản, số thẻ thanh toán,… và chịu trách nhiệm về tính pháp lý của những thông tin trên. Chúng tôi không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.</li>
            </ul>
          </div>

          <p class="article-body__term">
            <strong
              class="article-body__subheader"
            >8. Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin cá nhân khách hàng</strong>
          </p>
          <p>Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi, thành viên có thể cung cấp các thông tin, chứng cứ liên quan đến việc này theo địa chỉ:</p>
          <p>
            <strong>Công ty Cổ Phần FAMTECH Việt Nam.</strong>
          </p>
          <p>Tầng 4, Mỹ Sơn Tower, 62A Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, TP. Hà Nội.</p>
          <p>
            Đối với các thắc mắc về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân người tiêu dùng, khách hàng có thể liên hệ email:
            <a
              href="mailto:luxcheck@luxuria.vn?subject=Please support me!"
              target="_blank"
              style="color: #019d3c"
            >luxcheck@luxuria.vn</a>
          </p>
          <p style="margin-top: 1rem">Trong thời hạn 10 ngày làm việc kể từ ngày nhận được khiếu nại của thành viên, Bộ phận/đơn vị chủ trì giải quyết khiếu nại có trách nhiệm tìm ra nguyên nhân khiếu nại và đưa ra phương án giải quyết. Trả lời cho thành viên về kết quả giải quyết khiếu nại. Tùy theo mức độ, tính chất của việc khiếu nại mà Bộ phận/đơn vị chủ trì giải quyết khiếu nại sẽ có biện pháp giải quyết cụ thể.</p>
          <p>Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải quyết được khiếu nại của thành viên thì một trong hai bên sẽ có quyền nhờ đến cơ quan pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích hợp pháp của các bên.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  .text-italic {
    font-style: italic;
  }

  .link-download {
    //   color: red;
  }

  ul {
    list-style: none;
  }

  .article {
    padding: 2rem 3rem;
    border: 1px solid #dfdfdf;
    background-color: #fff;
    font-weight: 400;
    color: #333;
    font-size: 1.4rem;
    line-height: 1.5;

    &-header {
      text-align: center;
      margin: 3rem auto;
    }

    &-body {
      &__term {
        margin: 1rem auto;

        &__list {
          padding-left: 1.5rem;
        }
      }

      &__subheader {
        font-style: italic;
      }

      &__li {
        padding: 0.5rem 3rem;
      }
    }
  }
}
</style>