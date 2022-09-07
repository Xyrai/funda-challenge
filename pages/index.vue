<template>
  <main>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>
              {{ data?.Metadata.Titel }}
            </h1>
            <p>
              {{ data?.Metadata.Omschrijving }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { IProposal } from '@/interfaces/IProposal';
const config = useRuntimeConfig();

const { data } = await useFetch<IProposal>(
  `${config.API_BASE_URL}/json/${config.API_KEY}/?type=koop&zo=/amsterdam/tuin/p1`
);
console.log(data);
</script>
