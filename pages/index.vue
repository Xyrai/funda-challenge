<template>
  <main>
    <section>
      <div class="container pt-5">
        <div class="row">
          <div class="col-12">
            <h1 class="text-3xl font-semibold text-center">
              {{ data?.TotaalAantalObjecten }} {{ data?.Metadata.Titel }}
            </h1>
            <p class="text-center my-3">
              {{ data?.Metadata.Omschrijving }}
            </p>
            <hr class="my-3" />
            <!-- <UiButton>Test</UiButton> -->
          </div>
        </div>
      </div>
    </section>
    <section class="recent-posts">
      <div class="container">
        <div class="posts">
          <swiper
            :slides-per-view="1"
            :pagination="true"
            :modules="modules"
            :loop="true"
            class="custom-swiper"
          >
            <swiper-slide
              v-for="item in data?.Objects.slice(0, 5)"
              :key="item.GlobalId"
            >
              <a href="#" class="posts-link">
                <picture>
                  <source :srcset="item.FotoLarge" media="(min-width:1400px)" />

                  <source
                    :srcset="item.FotoLargest"
                    media="(min-width:992px)"
                  />

                  <source
                    :srcset="item.FotoLargest"
                    media="(min-width:768px)"
                  />

                  <source :srcset="item.FotoLarge" media="(max-width:575px)" />

                  <img
                    :src="item.FotoLargest"
                    alt=""
                    draggable="false"
                    class="posts-banner"
                  />
                </picture>
              </a>
            </swiper-slide>
          </swiper>
          <div class="posts-content">
            <ul class="news__tab__list">
              <li class="news__tab__item news__tab__item--active">Nieuwste</li>
            </ul>
            <ul class="news__list">
              <li
                v-for="item in data?.Objects.slice(0, 5)"
                :key="item.GlobalId"
              >
                <a class="news__item" href="#"
                  ><p class="news__title ellipsis">{{ item.Adres }}</p>
                  <p class="news__date">
                    {{ item.AangebodenSindsTekst }}
                  </p></a
                >
              </li>
            </ul>
            <a href="/kopen" class="news__more">Meer</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container text-center">
        <h2 class="text-3xl font-semibold">Alle koopwoningen bekijken?</h2>
        <UiButton class="mt-4 mb-5" :href="'/kopen'">Klik hier!</UiButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { IProposal } from '@/interfaces/IProposal';
import UiButton from '@/node_modules/@funda/ui/src/components/ui-button.vue';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination];

const config = useRuntimeConfig();

const { data } = await useFetch<IProposal>(
  `${config.API_BASE_URL}/json/${config.API_KEY}/?type=koop&zo=/amsterdam/tuin/p1`
);
console.log(data);
</script>

<style lang="scss">
main {
  background: url('@/assets/img/tile-bg.png');
  background-size: cover;
  color: #fff;

  // NOTE: Remove duplicate css per media query
  .recent-posts {
    padding-bottom: 50px;

    .posts {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 30px;
      padding: 0;

      .custom-swiper {
        width: 100%;
        height: 100%;
        border: 1px solid white;
        margin: 0;
      }

      .posts-link {
        display: flex;
        width: 100%;
        height: 100%;

        .posts-banner {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-content {
        position: relative;
        width: 100%;
        margin: 0;
        font-family: 'Helvetica';

        .news__tab__list {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          margin: 35px auto 0;
          border-bottom: 3px solid rgba(255, 255, 255, 0.1);

          .news__tab__item {
            position: relative;
            padding: 0 19px 12px;
            font-size: 18px;
            text-align: center;

            position: relative;
            padding: 0 15px 10px;
            font-size: 18px;
            margin: 0 10px;
            text-align: center;

            &--active {
              color: #ffd49f;

              &::after {
                position: absolute;
                left: 0;
                bottom: -3px;
                display: block;
                content: '';
                width: 100%;
                height: 3px;
                background: #ffd49f;
              }
            }
          }
        }

        .news__list {
          width: 100%;
          margin: 0 auto;

          .news__item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 60px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.08);
            font-size: 14px;
            color: #fff;
            box-sizing: border-box;

            text-decoration: none;
            text-align: left;

            &:hover {
              background: rgba(183, 159, 255, 0.06);
            }

            .news__title {
              padding-left: 11px;
              color: #fff;

              &.ellipsis {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            .news__date {
              flex-shrink: 0;
              color: rgba(255, 255, 255, 0.35);
              margin: 0 6px;
            }
          }
        }

        .news__more {
          position: absolute;
          left: 50%;
          display: block;
          width: 100%;
          color: #ffd49f;
          text-align: center;
          background: rgba(255, 212, 159, 0.1);
          border: rgba(255, 212, 159, 0.7) solid 1px;
          border-radius: 1px;
          transform: translateX(-50%);
          text-decoration: none;
          padding: 10px;
          font-size: 16px;
        }
      }
    }

    @include media-breakpoint-up(md) {
      .row {
        justify-content: center;
      }
    }

    @include media-breakpoint-up(lg) {
      .posts {
        .custom-swiper {
          max-width: 640px;
          max-height: 400px;
        }

        &-content {
          position: relative;
          width: 640px;
          height: 400px;
          margin: 0;
        }
      }
    }

    @include media-breakpoint-up(xl) {
      .posts {
        flex-direction: row;
        .custom-swiper {
          width: 640px;
          height: 400px;
          border: none;
        }

        &-content {
          position: relative;
          width: 640px;
          height: 400px;
          margin: 0;
          background: rgb(30 20 77 / 30%);
          font-family: 'Helvetica';

          .news__tab__list {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            width: 550px;
            margin: 35px auto 0;
            border-bottom: 3px solid rgba(255, 255, 255, 0.1);

            .news__tab__item {
              position: relative;
              padding: 0 19px 12px;
              font-size: 18px;
              text-align: center;
              margin: 0;

              &--active {
                color: #ffd49f;

                &::after {
                  position: absolute;
                  left: 0;
                  bottom: -3px;
                  display: block;
                  content: '';
                  width: 100%;
                  height: 3px;
                  background: #ffd49f;
                }
              }
            }
          }

          .news__list {
            width: 550px;
            margin: 0 auto;

            .news__item {
              position: relative;
              display: flex;
              align-items: center;
              width: 100%;
              height: 50px;
              border-bottom: 2px solid rgba(255, 255, 255, 0.08);
              box-sizing: content-box;
              font-size: 16px;
              text-decoration: none;
              text-align: left;

              .news__title {
                width: 480px;
                height: 20px;
                line-height: 20px;
                padding-left: 11px;
                color: #fff;

                &.ellipsis {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }

              .news__date {
                position: absolute;
                top: 0;
                right: 11px;
                color: rgba(255, 255, 255, 0.35);
                font-size: 14px;
                height: 50px;
                line-height: 50px;
              }
            }
          }

          .news__more {
            position: absolute;
            right: 0;
            bottom: 30px;
            height: 22px;
            line-height: 22px;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.75);
            cursor: pointer;
            background: url(data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyRDU3MTMyOEFEMDExRUE4QTkwRTJEMENFMkQwM0FFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyRDU3MTMzOEFEMDExRUE4QTkwRTJEMENFMkQwM0FFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTJENTcxMzA4QUQwMTFFQThBOTBFMkQwQ0UyRDAzQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTJENTcxMzE4QUQwMTFFQThBOTBFMkQwQ0UyRDAzQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VsZz3AAAAXElEQVR42mL8f2W+FAMNAAuUfkZlc6WYGGgEBoXBpVBMUhgTA1SGXFAMc4NZcMQ+voiaiUXsDhB308LFjMS4uJuAS9NHU8XgTW64wB1ssU8Ng7tHRhhTvUIFCDAAaTsKe76jZj0AAAAASUVORK5CYII=)
              no-repeat left center/22px;

            border: none;
            width: unset;
            left: unset;
            padding: 0 0 0 38px;

            &:hover {
              color: rgba(255, 212, 159, 0.75);
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MTJEMUUwOEFEMDExRUE5NEFCQTcwRkFCMERGRDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MTJEMUUxOEFEMDExRUE5NEFCQTcwRkFCMERGRDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUxMkQxREU4QUQwMTFFQTk0QUJBNzBGQUIwREZEOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUxMkQxREY4QUQwMTFFQTk0QUJBNzBGQUIwREZEOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oevscAAAAXUlEQVR42mL8f2W+DgMNAAuUfkFlcyWYGGgEBoXBOVBMUhgTAxSHXFAMc4NZcMQ+vojqxSJ2H4in0MLFjMS4eAoBlxaPporBm9xwgfvYYp8aBk8ZGWEsQW2DAQIMAG+3Cn8I2jgMAAAAAElFTkSuQmCC);
            }
          }
        }
      }
    }
  }
}
</style>
