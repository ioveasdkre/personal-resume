<template>
  <div class="flex flex-col gap-4 p-6">
    <!-- 主題切換按鈕 -->
    <div class="flex items-center gap-2">
      <button
        class="border-border bg-background text-foreground hover:bg-accent flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
        @click="toggleColorMode"
      >
        <!-- 根據當前主題顯示不同的圖示 -->
        <Icon name="material-symbols:dark-mode" class="block h-5 w-5 dark:hidden" />
        <Icon name="material-symbols:light-mode" class="hidden h-5 w-5 dark:block" />
        <span class="block dark:hidden">深色模式</span>
        <span class="hidden dark:block">淺色模式</span>
      </button>

      <!-- 顯示當前主題 -->
      <span class="text-muted-foreground text-sm"> 目前主題: {{ colorMode.value }} </span>
    </div>

    <!-- Google Material Icons 範例 -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Google Material Icons 範例</h3>

      <!-- 基本圖示 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:home" class="text-foreground h-8 w-8" />
          <span class="text-sm">Home</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:settings" class="text-foreground h-8 w-8" />
          <span class="text-sm">Settings</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:person" class="text-foreground h-8 w-8" />
          <span class="text-sm">Person</span>
        </div>
      </div>

      <!-- 填充版本圖示 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:home-filled" class="text-primary h-8 w-8" />
          <span class="text-sm">Home Filled</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:settings-filled" class="text-primary h-8 w-8" />
          <span class="text-sm">Settings Filled</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:person-filled" class="text-primary h-8 w-8" />
          <span class="text-sm">Person Filled</span>
        </div>
      </div>

      <!-- 帶有深色/淺色模式響應的圖示 -->
      <div class="grid grid-cols-2 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <!-- 使用 Tailwind dark: 修飾符來處理顏色變化 -->
          <Icon name="material-symbols:star" class="h-8 w-8 text-yellow-600 dark:text-yellow-300" />
          <span class="text-sm">響應式星星</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:favorite" class="h-8 w-8 text-red-600 dark:text-red-400" />
          <span class="text-sm">響應式愛心</span>
        </div>
      </div>

      <!-- 圓角版本圖示 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:home-rounded" class="text-foreground h-8 w-8" />
          <span class="text-sm">Home Rounded</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:settings-rounded" class="text-foreground h-8 w-8" />
          <span class="text-sm">Settings Rounded</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:person-rounded" class="text-foreground h-8 w-8" />
          <span class="text-sm">Person Rounded</span>
        </div>
      </div>

      <!-- 尖銳版本圖示 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:home-sharp" class="text-foreground h-8 w-8" />
          <span class="text-sm">Home Sharp</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:settings-sharp" class="text-foreground h-8 w-8" />
          <span class="text-sm">Settings Sharp</span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <Icon name="material-symbols:person-sharp" class="text-foreground h-8 w-8" />
          <span class="text-sm">Person Sharp</span>
        </div>
      </div>
    </div>

    <!-- 使用方法說明 -->
    <div class="border-border bg-muted/50 rounded-lg border p-4">
      <h4 class="mb-2 font-semibold">使用方法：</h4>
      <ul class="text-muted-foreground space-y-1 text-sm">
        <li>
          • 使用 <code class="bg-background rounded px-1">material-symbols:</code> 前綴來使用 Google
          Material Symbols
        </li>
        <li>• 添加 <code class="bg-background rounded px-1">-filled</code> 後綴來使用填充版本</li>
        <li>• 添加 <code class="bg-background rounded px-1">-rounded</code> 後綴來使用圓角版本</li>
        <li>• 添加 <code class="bg-background rounded px-1">-sharp</code> 後綴來使用尖銳版本</li>
        <li>
          • 使用 Tailwind CSS
          <code class="bg-background rounded px-1">dark:</code> 修飾符來控制深色模式樣式
        </li>
      </ul>
    </div>

    <!-- Tailwind Dark Mode 範例 -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Tailwind Dark Mode 範例</h3>

      <!-- 不同顏色變化的圖示 -->
      <div class="grid grid-cols-4 gap-4">
        <div
          class="border-border flex flex-col items-center gap-2 rounded-lg border bg-slate-50 p-4 dark:bg-slate-800"
        >
          <Icon
            name="material-symbols:wb-sunny"
            class="h-8 w-8 text-orange-500 dark:text-yellow-300"
          />
          <span class="text-sm text-slate-700 dark:text-slate-300">太陽</span>
        </div>

        <div
          class="border-border flex flex-col items-center gap-2 rounded-lg border bg-blue-50 p-4 dark:bg-blue-900/20"
        >
          <Icon
            name="material-symbols:water-drop"
            class="h-8 w-8 text-blue-600 dark:text-blue-400"
          />
          <span class="text-sm text-blue-700 dark:text-blue-300">水滴</span>
        </div>

        <div
          class="border-border flex flex-col items-center gap-2 rounded-lg border bg-green-50 p-4 dark:bg-green-900/20"
        >
          <Icon name="material-symbols:eco" class="h-8 w-8 text-green-600 dark:text-green-400" />
          <span class="text-sm text-green-700 dark:text-green-300">生態</span>
        </div>

        <div
          class="border-border flex flex-col items-center gap-2 rounded-lg border bg-purple-50 p-4 dark:bg-purple-900/20"
        >
          <Icon
            name="material-symbols:palette"
            class="h-8 w-8 text-purple-600 dark:text-purple-400"
          />
          <span class="text-sm text-purple-700 dark:text-purple-300">調色盤</span>
        </div>
      </div>

      <!-- 條件顯示圖示 -->
      <div class="grid grid-cols-2 gap-4">
        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <!-- 淺色模式顯示太陽，深色模式顯示月亮 -->
          <Icon
            name="material-symbols:wb-sunny"
            class="block h-8 w-8 text-orange-500 dark:hidden"
          />
          <Icon
            name="material-symbols:nights-stay"
            class="hidden h-8 w-8 text-blue-300 dark:block"
          />
          <span class="text-sm">
            <span class="block dark:hidden">白天模式</span>
            <span class="hidden dark:block">夜晚模式</span>
          </span>
        </div>

        <div class="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
          <!-- 淺色模式顯示眼睛，深色模式顯示閉眼 -->
          <Icon
            name="material-symbols:visibility"
            class="block h-8 w-8 text-gray-700 dark:hidden"
          />
          <Icon
            name="material-symbols:visibility-off"
            class="hidden h-8 w-8 text-gray-400 dark:block"
          />
          <span class="text-sm">
            <span class="block dark:hidden">可見</span>
            <span class="hidden dark:block">隱藏</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>
