<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="wrapper">
            <Logo />
            <nav>
              <a :class="route.path == '/kopen' ? 'active' : null" href="/kopen"
                >Kopen</a
              >
              <a :class="route.path == '/huren' ? 'active' : null" href="/huren"
                >Huren</a
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
      column-gap: 50px;
    }
  }
}
</style>
