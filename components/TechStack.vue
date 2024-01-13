<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Tech Stack
    </h1>
    <div class="overflow-hidden border dark:border-gray-700 shadow rounded-xl">
      <div class="ease-out transition-transform px-5 py-3">
        <div class="flex flex-wrap pb-4 gap-2 justify-start items-baseline ">
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700  rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:javascript" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:typescript-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:c-plusplus" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:nodejs-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon :color="colorMode" class="hover:scale-[1.1] ease-out transition-transform" name="simple-icons:express"
                  size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:vue" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:nuxt-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:vitejs" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:pinia" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:supabase-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:firebase" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:mongodb-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:linux-tux" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon :color="colorMode" class="hover:scale-[1.1] ease-out transition-transform" name="simple-icons:macos"
                  size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:git-icon" size="35"/>
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon class="hover:scale-[1.1] ease-out transition-transform" name="logos:docker-icon" size="35"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
