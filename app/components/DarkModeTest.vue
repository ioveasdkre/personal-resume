<template>
  <div class="space-y-4 p-6">
    <h2 class="text-2xl font-bold">深色模式測試</h2>

    <!-- 測試基本的深色模式 -->
    <div
      class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
    >
      <p class="text-gray-900 dark:text-white">這個文字應該在深色模式下變為白色</p>
    </div>

    <!-- 測試主題切換按鈕 -->
    <button
      class="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors dark:bg-blue-600"
      @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
    >
      <span class="block dark:hidden">切換到深色模式</span>
      <span class="hidden dark:block">切換到淺色模式</span>
    </button>

    <!-- 測試圖示 -->
    <div class="flex gap-4">
      <Icon name="material-symbols:wb-sunny" class="block h-8 w-8 text-yellow-500 dark:hidden" />
      <Icon name="material-symbols:nights-stay" class="hidden h-8 w-8 text-blue-300 dark:block" />
    </div>

    <!-- 顯示當前模式資訊 -->
    <div class="rounded bg-gray-100 p-4 dark:bg-gray-800">
      <p class="text-sm">當前模式: {{ $colorMode.value }}</p>
      <p class="text-sm">偏好設定: {{ $colorMode.preference }}</p>
    </div>

    <!-- 檢查 HTML class -->
    <div class="rounded bg-yellow-100 p-4 dark:bg-yellow-900">
      <p class="text-sm">HTML class: {{ htmlClass }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const htmlClass = ref('');

onMounted(() => {
  // 檢查 HTML 元素的 class
  htmlClass.value = document.documentElement.className;

  // 監聽 class 變化
  const observer = new MutationObserver(() => {
    htmlClass.value = document.documentElement.className;
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
});
</script>
