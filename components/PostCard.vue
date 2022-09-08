<template>
  <a :href="post.URL" class="post-card" target="_blank">
    <div class="post-card__image">
      <img :src="post.FotoLargest" width="562" height="352" draggable="false" />
    </div>
    <div class="post-card__content">
      <h2 class="text-xl font-semibold">{{ post.Adres }}</h2>
      <p class="description font-semibold">
        €
        {{
          isKoopWoning
            ? post.Koopprijs.toString().replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                '$1.'
              )
            : post.Huurprijs.toString().replace(
                /(\d)(?=(\d{3})+(?!\d))/g,
                '$1.'
              )
        }}
        k.k.
      </p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  post: Object,
  isKoopWoning: Boolean,
});
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #16112d;
  text-decoration: none;
  border: 1px solid #7166b2;

  &:hover {
    background: rgba(#16112d, 0.6);
  }

  &__image {
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      min-height: 380px;
      max-height: 380px;
    }
  }

  &__content {
    padding: 20px 45px;
    height: 100%;

    h2 {
      color: #fff;
    }

    .description {
      text-align: left;
      color: #e02674;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
