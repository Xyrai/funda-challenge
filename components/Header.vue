<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wrapper">
            <Logo />
            <nav>
              <NuxtLink
                :class="route.path == '/kopen' ? 'active' : null"
                to="/kopen"
                >Kopen</NuxtLink
              >
              <NuxtLink
                :class="route.path == '/huren' ? 'active' : null"
                to="/huren"
                >Huren</NuxtLink
              >
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 53px;
  max-height: 53px;
  background: #16112d;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 25px;

    a {
      color: #8377cb;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .active {
      color: #fff;
    }

    @include media-breakpoint-up(lg) {
      column-gap: px(50);
    }
  }
}
</style>
