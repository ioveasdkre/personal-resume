<template>
  <div class="bg-background text-foreground min-h-screen">
    <Button />
    <div class="container mx-auto px-4 py-8">
      <h1 class="mb-8 text-3xl font-bold">Google Icons 深色/淺色模式展示</h1>

      <!-- 深色模式測試元件 -->
      <div class="mb-8">
        <DarkModeTest />
      </div>

      <!-- 原本的主題切換元件 -->
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
// 設定頁面的 meta 資訊
useSeoMeta({
  title: 'Google Icons 主題切換展示',
  description: '展示如何在 Nuxt 3 中使用 @nuxt/icon 實現 Google Material Icons 的深色和淺色模式',
});
</script>

<style scoped></style>
