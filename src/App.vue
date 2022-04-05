<script setup lang="ts">

</script>

<template>
  <div class="px-4 pt-3 bg-zinc-800 text-zinc-50 ">
    <h1 class="mb-4 text-lg font-bold">Meditative viewing of the characters "Rick and Morty"</h1>
    <nav class="h-10 bg-zinc-700 flex flex-row items-center space-x-3 ">
      <div class="ml-4 cursor-pointer h-8 leading-8 hover:bg-zinc-600" >
        <router-link to="/">Characters</router-link> 
      </div>
      <div class="cursor-pointer h-8 leading-8 hover:bg-zinc-600">
        <router-link to="/about"> About </router-link> 
      </div>
    </nav>
    <section >
      <router-view>  </router-view>

    </section>

  </div>
</template>

<style>

</style>
