<template>
  <UAnimateContainer>
    <div id="section0" class="header-placeholder"></div>
    <section id="section1" class="main-banner" :class="classActive">
      <div class="container">
        <div :style="{ backgroundImage: 'url(/images/banner.jpg)' }" class="bg">
          <div class="row row-center">
            <div class="col-lg-5 col-md-6 col-sm-12">
              <UAnimate name="flipInX" class="main-banner-left">
                <h3 class="color-primary mb-5">
                  TẬN HƯỞNG ÂM NHẠC
                  <br />CẢ KHI MÀN HÌNH KHOÁ
                </h3>
                <p>
                  Ứng dụng nghe nhạc được phát triển trên nền tảng di động cho
                  phép bạn nghe, tìm kiếm và sắp xếp nhạc trực tiếp từ YouTube.
                </p>
                <div class="downloads">
                  <p class="sub mb-4">Hiện có sẵn trên:</p>
                  <div class="d-flex">
                    <button
                      class="btn-store"
                      @click.prevent="handleClickStore('ios')"
                    >
                      <img src="/images/appstore.png" alt />
                    </button>
                    <button
                      class="btn-store"
                      @click.prevent="handleClickStore('android')"
                    >
                      <img src="/images/playstore.png" alt />
                    </button>
                  </div>
                </div>
              </UAnimate>
            </div>
            <div class="col-lg-7 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="main-brand" :class="classActive">
      <div class="container">
        <UAnimate name="zoomIn" class="main-brans-slider">
          <VueSlickCarousel v-bind="settings">
            <div class="owl-item">
              <img src="/images/brand1.jpg" alt />
            </div>
            <div class="owl-item">
              <img src="/images/brand2.jpg" alt />
            </div>
          </VueSlickCarousel>
        </UAnimate>
      </div>
    </section>

    <section id="section3" class="main-features" :class="classActive">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <UAnimate name="zoomIn" class="left">
              <p class="sub">Không chỉ là nghe</p>
              <h3 class="color-primary mb-5 text-uppercase">
                Tính năng nổi bật
              </h3>
              <p>
                Âm nhạc còn là tiếng nói của cảm xúc. Cho phép thưởng thức tất
                cả các bản nhạc trực tuyến trong một trình phát đơn giản, gọn
                gàng.
              </p>
              <div class="slick-btn">
                  <button class="btn-slick" @click="showPrev"><IconLeft/></button>
                  <button class="btn-slick" @click="showNext"><IconRight/></button>
              </div>
            </UAnimate>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
            <UAnimate name="zoomIn">
              <VueSlickCarousel ref="carousel" v-bind="settings2">
                  <div class="owl-item">
                    <div>
                    <Icon1 />
                    <h4>Chơi nhạc khi khoá màn hình</h4>
                    <p>
                      Nghe nhạc trên YouTube ngay cả khi đang sử dụng những ứng
                      dụng khác và khi màn hình điện thoại khoá.
                    </p>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div>
                    <img src="/images/music.png" alt />
                    <h4>Dark and light mode</h4>
                    <p>
                      Bật tắt linh hoạt 2 chế độ, tạo cảm giác không nhàm chán.
                      Dark mode hỗ trợ tiết kiệm pin.
                    </p>
                  </div>
                  </div>
                  <div class="owl-item">
                    <div>
                    <Icon3 />
                    <h4>Hỗ trợ Airplay</h4>
                    <p>Stream nhạc tới các thiết bị hỗ trợ AirPlay.</p>
                  </div>
                  </div>
                  <div class="owl-item">
                    <div>
                    <Icon4 />
                    <h4>Hẹn giờ ngủ</h4>
                    <p>
                      Cài đặt hẹn giờ tự động tắt nhạc, không lo điện thoại bị
                      sập nguồn khi bạn quên không tắt ứng dụng.
                    </p>
                  </div>
                  </div>
                  <div class="owl-item">
                    <div>
                    <Icon5 />
                    <h4>Tạo playlist</h4>
                    <p>Sắp xếp danh sách nhạc mang đậm dấu ấn cá nhân.</p>
                  </div>
                  </div>
              </VueSlickCarousel>
            </UAnimate>
          </div>
        </div>
      </div>
    </section>

    <section id="section4" class="main-trending" :class="classActive">
      <div class="container">
        <div class="bg">
          <div class="row row-center">
            <div class="col-lg-6 col-md-6 col-sm-12 line-height-0">
              <UAnimate name="zoomIn">
                <img src="/images/image1.png" alt />
              </UAnimate>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <UAnimate name="bounceInRight" class="content">
                <p class="sub">“Non-stop" music</p>
                <h3 class="color-primary mb-5 text-uppercase">
                  Tận hưởng không gian âm nhạc của bạn
                </h3>
                <p>
                  Tìm kiếm bài hát trên UPBEAT mang lại cảm giác chân thật hệt
                  như đang sử dụng YouTube. Không cần nhớ tên ca khúc, bạn chỉ
                  cần nhớ 1 đoạn lời là đã có thể tìm ra bài hát, nghệ sĩ trình
                  bày và những Playlist có chứa từ khoá liên quan.
                </p>
                <button class="btn btn-info mt-6">read more</button>
              </UAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section5" class="main-why" :class="classActive">
      <div class="container">
        <div class="bg">
          <div class="row row-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <UAnimate name="fadeInLeft" class="left">
                <p class="sub">+1M listener choose us</p>
                <h3 class="color-primary mb-5 text-uppercase">
                  Vì sao chọn chúng tôi?
                </h3>
                <p>
                  Hỗ trợ bạn sử dụng song song giữa YouTube và những ứng dụng
                  khác. Giao diện đơn giản dễ sử dụng, phát trực tuyến trên các
                  thiết bị AirPlay.
                </p>
                <div class="row">
                  <UAnimate name="fadeInLeft" delay="0.5s" class="col-sm-6">
                    <div class="item">
                      <div class="icon">
                        <IconLightbulb />
                      </div>
                      <div>
                        <strong>1,398,900</strong>
                        <p>Active user worldwide</p>
                      </div>
                    </div>
                  </UAnimate>
                  <UAnimate name="fadeInLeft" delay="0.2s" class="col-sm-6">
                    <div class="item">
                      <div class="icon">
                        <IconTimeLine />
                      </div>
                      <div>
                        <strong>10,398,900</strong>
                        <p>Total listening hours</p>
                      </div>
                    </div>
                  </UAnimate>
                  <UAnimate name="fadeInLeft" delay="0.5s" class="col-sm-6">
                    <div class="item">
                      <div class="icon">
                        <IconHeadphone />
                      </div>
                      <div>
                        <strong>1,568</strong>
                        <p>Listening user, now</p>
                      </div>
                    </div>
                  </UAnimate>
                  <UAnimate name="fadeInLeft" delay="0.2s" class="col-sm-6">
                    <div class="item">
                      <div class="icon">
                        <IconLanguage />
                      </div>
                      <div>
                        <strong>24+</strong>
                        <p>Countries bla bla</p>
                      </div>
                    </div>
                  </UAnimate>
                </div>
              </UAnimate>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 text-center">
              <UAnimate name="zoomIn">
                <img src="/images/image2.png" alt />
              </UAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section6" class="main-client" :class="classActive">
      <div class="container">
        <div class="bg">
          <div class="row row-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <UAnimate name="zoomIn" class="left">
                <p class="sub">listening to user</p>
                <h3 class="color-primary mb-5 text-uppercase">
                  người dùng đánh giá
                </h3>
                <p class="mb-6">
                  Chúng tôi luôn lắng nghe và cập nhật liên tục để mang đến cho
                  bạn những trải nghiệm nghe nhạc tốt nhất.
                </p>
                <img src="/images/image3.png" alt />
              </UAnimate>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="right">
                <UAnimate name="bounceInRight" class="item">
                  <img src="/images/avatar1.png" alt />
                  <div>
                    <h6 class="text-uppercase">tiendatleo</h6>
                    <p>
                      Nghe nhạc youtube k cần bật màn hình, miễn phí, k quảng
                      cáo chen ngang. Khuyên dùng nhaaaa
                    </p>
                    <div class="stars">
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStarHalf />
                    </div>
                  </div>
                </UAnimate>
                <UAnimate name="bounceInRight" delay="0.2s" class="item">
                  <img src="/images/avatar2.png" alt />
                  <div>
                    <h6 class="text-uppercase">Phương Ngân</h6>
                    <p>
                      Hay quá mình thích nghe mấy cái list cover trên Youtube
                      lắm, zing vs nhaccuatui thì ko có.
                    </p>
                    <div class="stars">
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStarHalf />
                    </div>
                  </div>
                </UAnimate>
                <UAnimate name="bounceInRight" delay="0.4s" class="item">
                  <img src="/images/avatar3.png" alt />
                  <div>
                    <h6 class="text-uppercase">Hồng Linh</h6>
                    <p>
                      App rất hay, đúng cái mình đang tìm nhưng chưa thấy bản
                      cho Android trên CHPlay nhỉ. Sớm update nhé!
                    </p>
                    <div class="stars">
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStar />
                      <IconStarHalf />
                    </div>
                  </div>
                </UAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section7" class="main-price text-center" :class="classActive">
      <div class="container">
        <h3 class="color-primary mb-4 text-uppercase">bảng giá</h3>
        <div class="tooltip">
          <div class="tool"><IconInfo class="mr-3" />Nâng cấp Premium</div>
          <div class="tip">
            <div class="innner">
              <div class="title">
                <IconCrown />
                Nâng cấp Premium
              </div>
              <div class="items">
                <div class="item"><IconVip1 />Xoá toàn bộ quảng cáo</div>
                <div class="item">
                  <IconVip2 />Tiếp tục nghe nhạc tại nơi bạn đã dừng
                </div>
                <div class="item">
                  <IconVip3 />Hỗ trợ CarPlay <span>(coming soon)</span>
                </div>
                <div class="item">
                  <IconVip4 />Backup Playlist <span>(coming soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text">
          Tận hưởng nhạc hay, tiết kiệm và ưu đãi. Trải nghiệm ngay hôm nay!
        </p>

        <div class="row content">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <UAnimate name="flipInY" class="item">
              <img src="/images/appointment.png" alt />
              <h5 class="mt-5">3 THÁNG</h5>
              <p class="sub-2">Dùng thử chỉ với</p>
              <h2 class="color-primary mt-6">$ 0,89</h2>
              <p class="sub-2">một tháng</p>
              <button class="btn btn-info mt-5">Mua ngay</button>
            </UAnimate>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 active">
            <UAnimate
              name="flipInY"
              class="item bg center"
              :style="{ backgroundImage: 'url(/images/bg.png)' }"
            >
              <img src="/images/song.png" alt />
              <h5 class="mt-5">1 NĂM</h5>
              <p class="sub-2">Tiết kiệm 35%</p>
              <h2>$ 1,99</h2>
              <p class="sub-2">một tháng</p>
              <button class="btn btn-white mt-5">Mua ngay</button>
              <p class="sub-2 mt-4">
                * Đề xuất cho bạn
              </p>
            </UAnimate>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <UAnimate name="flipInY" class="item">
              <img src="/images/time.png" alt />
              <h5 class="mt-5">TRỌN ĐỜI</h5>
              <p class="sub-2">Thanh toán một lần</p>
              <h2 class="color-primary mt-6">$ 11,89</h2>
              <p class="sub-2"></p>
              <button class="btn btn-info mt-5">Mua ngay</button>
            </UAnimate>
          </div>
        </div>
      </div>
    </section>

    <section id="section8" class="main-download" :class="classActive">
      <div class="container">
        <div :style="{ backgroundImage: 'url(/images/bg2.jpg)' }" class="bg">
          <h3 class="color-primary text-uppercase mb-5">Tải upbeat ngay</h3>
          <p>
            Nghe nhạc youtube trên di động cả khi khoá màn hình.<br />Nhạc hay
            không giới hạn
          </p>
          <UAnimate name="bounceInUp" class="buttons">
            <button class="btn-store" @click.prevent="handleClickStore('ios')">
              <img src="/images/appstore.png" alt />
            </button>
            <button
              class="btn-store"
              @click.prevent="handleClickStore('android')"
            >
              <img src="/images/playstore.png" alt />
            </button>
          </UAnimate>
        </div>
      </div>
    </section>
  </UAnimateContainer>
</template>

<script>
import IconApple from "~/assets/svg/icons/apple.svg?inline";
import IconPlayStore from "~/assets/svg/icons/playstore.svg?inline";
import IconLeft from "~/assets/svg/icons/arrow-left.svg?inline";
import IconRight from "~/assets/svg/icons/arrow-right.svg?inline";
import IconLanguage from "~/assets/svg/icons/language.svg?inline";
import IconHeadphone from "~/assets/svg/icons/headphone.svg?inline";
import IconTimeLine from "~/assets/svg/icons/time-line.svg?inline";
import IconStar from "~/assets/svg/icons/star.svg?inline";
import IconStarHalf from "~/assets/svg/icons/star-half.svg?inline";
import IconLightbulb from "~/assets/svg/icons/lightbulb.svg?inline";
import IconTime from "~/assets/svg/icons/time.svg?inline";
import IconSong from "~/assets/svg/icons/song.svg?inline";
import IconAppointment from "~/assets/svg/icons/appointment.svg?inline";
import IconCrown from "~/assets/svg/icons/crown.svg?inline";
import IconInfo from "~/assets/svg/icons/info.svg?inline";
import IconVip1 from "~/assets/svg/icons/vip1.svg?inline";
import IconVip2 from "~/assets/svg/icons/vip2.svg?inline";
import IconVip3 from "~/assets/svg/icons/vip3.svg?inline";
import IconVip4 from "~/assets/svg/icons/vip4.svg?inline";
import Icon1 from "~/assets/svg/icons/Icon1.svg?inline";
import Icon2 from "~/assets/svg/icons/Icon2.svg?inline";
import Icon3 from "~/assets/svg/icons/Icon3.svg?inline";
import Icon4 from "~/assets/svg/icons/Icon4.svg?inline";
import Icon5 from "~/assets/svg/icons/Icon5.svg?inline";
import brand1 from "~/assets/images/brand1.jpg";
import brand2 from "~/assets/images/brand2.jpg";
import brand3 from "~/assets/images/brand3.jpg";
import brand4 from "~/assets/images/brand4.jpg";
import brand5 from "~/assets/images/brand5.jpg";
import image1 from "~/assets/images/image1.png";
import image2 from "~/assets/images/image2.png";
import image3 from "~/assets/images/image3.png";
import avatar1 from "~/assets/images/avatar1.png";
import avatar2 from "~/assets/images/avatar2.png";
import avatar3 from "~/assets/images/avatar3.png";
import appstore from "~/assets/images/appstore.png";
import playstore from "~/assets/images/playstore.png";
import bg2 from "~/assets/images/bg2.jpg";
import bg from "~/assets/images/bg.png";
import banner from "~/assets/images/banner.jpg";
import time from "~/assets/images/time.png";
import song from "~/assets/images/song.png";
import music from "~/assets/images/music.png";
import appointment from "~/assets/images/appointment.png";
import { UAnimateContainer, UAnimate } from "vue-wow";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
    IconCrown,
    IconInfo,
    IconVip1,
    IconVip2,
    IconVip3,
    IconVip4,
    IconApple,
    IconPlayStore,
    IconLightbulb,
    IconTimeLine,
    IconHeadphone,
    IconLanguage,
    IconStarHalf,
    IconStar,
    IconAppointment,
    IconSong,
    IconTime,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    IconLeft,
    IconRight,
    UAnimateContainer,
    UAnimate
  },

  data() {
    return {
      classActive: "",
      sliderIndex1: 0,
      sliderIndex2: 0,
      settings: {
        "dots": false,
        "arrows": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 5,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1199,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 4,
              "initialSlide": 4
            }
          },
          {
            "breakpoint": 800,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "initialSlide": 3,
              "arrows": false
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "arrows": false
            }
          },
          {
            "breakpoint": 320,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "arrows": false
            }
          }
        ]
      },
      settings2: {
        "dots": false,
        "arrows": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1199,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 1
            }
          },
          {
            "breakpoint": 991,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "arrows": false
            }
          }
        ]
      }
    };
  },

  watch: {
  },

  created() {
    setTimeout(() => {
      this.classActive = "active";
    }, 500);
  },

  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    handleClickStore(_os) {
      if (_os == "ios") {
        window.open("https://apps.apple.com/vn/app/id1508711717");
      } else if (_os == "android") {
        window.open(
          "https://play.google.com/store/apps/details?id=luxcheck.legit.check.seller"
        );
      }
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";
</style>
<style lang="scss">
.carousel-wrapper {
  padding: 40px;
  height: 150px;
  .VueCarousel-slide {
    text-align: center;
  }
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
