<script lang="ts" setup>
import {schools} from '@/data/info'
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Educations
    </h1>
    <div class="space-y-4">
      <template v-for="school in schools" :key="school.name">
        <CardEducation
            :gpa="school.gpa"
            :img="school.img"
            :institute="school.institute"
            :name="school.name"
            :session="school.session"
        />
      </template>
    </div>
  </div>
</template>
