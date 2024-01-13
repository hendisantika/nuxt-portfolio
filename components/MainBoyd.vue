<script lang="ts" setup>
import {mainBody} from '@/data/info'

const colorMode = useColorMode()

const onDarkClick = () => colorMode.value = 'light'
const onLightClick = () => colorMode.value = 'dark'

const mode = computed(() => colorMode.value)
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-2">
        <div class="flex justify-between">
          <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
            {{ mainBody.name }}
          </h1>
        </div>
        <div class="flex space-x-3 items-center">
          <a :href="`https://twitter.com/${mainBody.twitter}`" class="hover:scale-110 transition-all ease-out" target="_blank"
             title="Twitter">
            <Icon name="logos:twitter" size="20"/>
          </a>
          <a :href="`https://github.com/${mainBody.github}`" class="hover:scale-110 transition-all ease-out" target="_blank"
             title="GitHub">
            <Icon name="logos:github-octocat" size="20"/>
          </a>
          <a :href="`https://www.linkedin.com/in/${mainBody.linkedIn}`" class="hover:scale-110 transition-all ease-out" target="_blank"
             title="LinkedIn">
            <Icon name="devicon:linkedin" size="20"/>
          </a>
          <a :href="`https://stackoverflow.com/users/16781395/${mainBody.stackOverflow}`" class="hover:scale-110 transition-all ease-out"
             target="_blank" title="Stackoverflow">
            <Icon name="logos:stackoverflow-icon" size="20"/>
          </a>
          <a :href="`mailto:${mainBody.email}`" class="hover:scale-110 transition-all ease-out" title="Gmail">
            <Icon name="logos:google-gmail" size="20"/>
          </a>
          <a v-if="mode === 'light'" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" name="dark-mode"
             title="Dark" @click="onLightClick">
            <Icon name="icon-park:moon" size="20"/>
          </a>
          <a v-if="mode === 'dark'" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" name="light-mode"
             title="Light" @click="onDarkClick">

            <Icon name="noto:sun" size="20"/>
          </a>
        </div>

        <p class="pt-4 text-sm sm:text-base hidden sm:block">
          {{ mainBody.about }}
        </p>
      </div>
      <div class="justify-center mt-3 items-start flex">
        <div class="rounded-md w-20 sm:w-40 overflow-hidden">
          <NuxtImg alt="Profile Picture" src="/rsz_1riyad.jpg" width="160px"/>
        </div>
      </div>
    </div>
    <p class="pt-4 text-sm sm:text-lg block sm:hidden">
      {{ mainBody.about }}
    </p>
  </div>
</template>
