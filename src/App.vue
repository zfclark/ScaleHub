<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>
