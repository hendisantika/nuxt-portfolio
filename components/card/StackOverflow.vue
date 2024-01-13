<script lang="ts" setup>
import {stackOverflow} from '@/data/info'
</script>

<template>
  <a
      :href="`https://stackoverflow.com/users/${stackOverflow.handle}`"
      class=" overflow-hidden border dark:border-gray-700 rounded-xl shadow"
      target="_blank"
  >
    <div
        class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <Icon name="logos:stackoverflow-icon" size="20"/>
          <span class="text-xl font-medium">StackOverflow</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon class="dark:text-cyan-500" name="ph:check-circle" size="20"/>
          <p>Total Reputation {{ stackOverflow.reputation }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon class="dark:text-cyan-500" name="fa-regular:handshake" size="19"/>
          <p>Total Impact ~{{ stackOverflow.impact }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon class="dark:text-cyan-500" name="material-symbols:airline-stops-rounded" size="20"/>
          <p>Top {{ stackOverflow.top }} This Year</p>
        </div>
        <div class="flex items-center space-x-5">
          <div class="flex items-center space-x-1">
            <Icon name="emojione:1st-place-medal"/>
            <p>{{ stackOverflow.badge.gold }}</p>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="emojione:2nd-place-medal"/>
            <p>{{ stackOverflow.badge.silver }}</p>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="emojione:3rd-place-medal"/>
            <p>{{ stackOverflow.badge.bronze }}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
