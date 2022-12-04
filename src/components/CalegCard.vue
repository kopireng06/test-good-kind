<script setup>
import { RouterLink } from "vue-router";

defineProps({
  imageURL: String,
  name: String,
  partaiName: String,
  location: String,
  path: String,
});
</script>

<template>
  <RouterLink
    :to="`/user/${path}`"
    class="w-full rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer"
  >
    <p class="text-xs font-semibold text-gray-600 my-1">{{ partaiName }}</p>
    <p class="text-xs text-gray-600 my-1">
      {{ location }}
    </p>
    <img
      class="h-24 w-24 object-cover rounded-full my-2"
      :src="imageURL"
      :alt="name"
    />
    <p class="font-bold text-sm text-gray-800 my-1">{{ name }}</p>
    <p
      class="bg-gray-200 px-4 py-2 rounded-2xl text-green-600 font-semibold text-xs"
    >
      Pelayan Masyarakat
    </p>
    <button
      class="border-blue-400 border-2 p-1 rounded-2xl w-36 text-sm my-5 text-blue-400"
    >
      Ikuti
    </button>
  </RouterLink>
</template>
