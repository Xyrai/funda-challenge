<template>
  <main class="py-5">
    <h1 class="text-3xl font-semibold text-center">
      {{ data.TotaalAantalObjecten }} {{ data.Metadata.Titel }}
    </h1>
    <span class="text-center d-block mt-3">
      {{ data.Metadata.Omschrijving }}
    </span>

    <div class="container my-3 my-md-5">
      <div class="row g-3 justify-content-center">
        <article
          v-for="(_, index) in postsToShow"
          :key="index"
          class="col-12 col-md-6"
        >
          <PostCard
            v-if="index < data.Objects.length"
            :post="data.Objects[index]"
          />
        </article>
      </div>
    </div>

    <div
      v-if="
        postsToShow < data.Objects.length || data.Objects.length > postsToShow
      "
      class="show-more text-center"
    >
      <UiButton @click="postsToShow += 4">Laad meer</UiButton>
    </div>
  </main>
</template>

<script setup lang="ts">
// TS Interfaces
import { IProposal } from '@/interfaces/IProposal';

// Funda UI Library
import UiButton from '@/node_modules/@funda/ui/src/components/ui-button.vue';

onMounted(() => {
  totalPosts = data.value.Objects.length;
});

const config = useRuntimeConfig();

// NOTE: Skipping pagination because I lack time 😐
const { data } = await useFetch<IProposal>(
  `${config.API_BASE_URL}/json/${config.API_KEY}/?type=huur&zo=/amsterdam/tuin/p1`
);

let postsToShow = ref(4);
let totalPosts = 0;
</script>

<style lang="scss">
main {
  background-color: #0e071d;
  color: #fff;
}
</style>
