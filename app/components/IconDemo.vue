<template>
  <div class="space-y-4 p-4">
    <!-- 基本的主題切換按鈕 -->
    <button
      class="flex items-center gap-2 rounded-lg border px-4 py-2"
      @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
    >
      <!-- 根據主題切換圖示 -->
      <Icon name="material-symbols:dark-mode" class="block h-5 w-5 dark:hidden" />
      <Icon name="material-symbols:light-mode" class="hidden h-5 w-5 dark:block" />
      <span class="block dark:hidden">深色模式</span>
      <span class="hidden dark:block">淺色模式</span>
    </button>

    <!-- 響應式圖示範例 -->
    <div class="grid grid-cols-4 gap-4">
      <!-- 基本圖示 -->
      <div class="text-center">
        <Icon name="material-symbols:home" class="mx-auto mb-2 h-8 w-8" />
        <p class="text-sm">Home</p>
      </div>

      <!-- 填充圖示 -->
      <div class="text-center">
        <Icon name="material-symbols:star-filled" class="mx-auto mb-2 h-8 w-8 text-yellow-500" />
        <p class="text-sm">Star Filled</p>
      </div>

      <!-- 圓角圖示 -->
      <div class="text-center">
        <Icon name="material-symbols:favorite-rounded" class="mx-auto mb-2 h-8 w-8 text-red-500" />
        <p class="text-sm">Heart Rounded</p>
      </div>

      <!-- 尖銳圖示 -->
      <div class="text-center">
        <Icon name="material-symbols:settings-sharp" class="mx-auto mb-2 h-8 w-8" />
        <p class="text-sm">Settings Sharp</p>
      </div>
    </div>

    <!-- 主題響應式顏色圖示 -->
    <div class="flex justify-center gap-4">
      <Icon
        name="material-symbols:brightness-6"
        class="h-12 w-12 text-orange-500 dark:text-yellow-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 這個元件展示基本的 Google Icons 用法
</script>
