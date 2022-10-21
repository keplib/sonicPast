<template>
    <Navbar />
    <div class="flex w-full h-[80vh] justify-center items-center">
        <div class="font-karla text-4xl md:text-6xl lg:text-8xl font-bold px-5 py-2 flex flex-row justify-center text-lightest-slate z-10 animate-pulse">
            <span class="underline decoration-1 font-light tracking-wider">soni</span>
            <span class="material-symbols-outlined self-end text-pink font-semibold text-4xl md:text-6xl lg:text-8xl">first_page</span>
            <span class="text-green tracking-tighter font-semibold">past</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>