<template>
  <NuxtLink to="/" class="logo-link">
    <img
      class="logo"
      src="@/assets/img/fundawonen-logo.svg"
      width="101"
      height="36"
      alt="Funda Logo"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  object-fit: contain;

  &-link {
    display: flex;
    max-width: 100px;
    max-height: 50px;
  }
}
</style>
