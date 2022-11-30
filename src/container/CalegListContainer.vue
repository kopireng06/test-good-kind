<script setup>
import { ref } from "vue";
import CalegCard from "../components/CalegCard.vue";
import listCaleg from "../assets/listCaleg.json";

const listCalegData = ref(listCaleg.data);
</script>

<template>
  <div class="sm:container mx-auto p-4">
    <h1 class="text-blue-400 font-bold text-lg sm:text-2xl text-center py-10">
      Temukan Pelayan-Pelayan Masyarakat untuk anda dukung dan pilih
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CalegCard
        v-for="caleg in listCalegData"
        :key="caleg.id"
        :image-u-r-l="caleg.picThumbUrl"
        :name="caleg.name"
        :location="caleg.community.name"
        :partai-name="caleg.party_name"
      />
    </div>
  </div>
</template>
