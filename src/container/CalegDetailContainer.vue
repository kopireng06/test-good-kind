<script setup>
import { ref } from "vue";
import CalegCard from "../components/CalegCard.vue";
import listCaleg from "../assets/listCaleg.json";
import { useRoute } from "vue-router";

const listCalegData = ref(
  listCaleg.data.reduce((calegData, caleg) => {
    calegData[caleg.path] = { ...caleg };
    return calegData;
  }, {})
);
const route = useRoute();
</script>

<template>
  <div class="sm:container mx-auto p-4 h-screen">
    <div class="flex flex-col h-full justify-center items-center gap-4">
      <h1 class="text-blue-400 font-bold text-lg sm:text-2xl text-center">
        {{ listCalegData[route.params.path].name }}
      </h1>
      <div class="w-72">
        <CalegCard
          :image-u-r-l="listCalegData[route.params.path].picThumbUrl"
          :name="listCalegData[route.params.path].name"
          :location="listCalegData[route.params.path].community.name"
          :partai-name="listCalegData[route.params.path].party_name"
          :path="listCalegData[route.params.path].path"
        />
      </div>
    </div>
  </div>
</template>
