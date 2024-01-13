<script lang="ts" setup>
const description = 'Hi, I am a full-time software engineer building backend & web applications for more than thirteen years ' +
    'with Java, Spring Boot, PHP, Laravel, NodeJS, Vue, Nuxt, Angular, Typescript and Javascript.'
const ogTitle = 'Hendi Santika | Senior Software Engineer @Pemuda PERSIS'
const image = 'https://kominfo-ana-online-dev2.s3.ap-southeast-1.amazonaws.com/static/hendi.jpeg'
const mySite = 'https://www.hendisantika.my.id'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    {property: 'og:site_name', content: mySite},
    {property: 'og:type', content: 'website'},
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    {name: 'twitter:site', content: '@debs_obrien'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: 'Hendi Santika',
  description: 'Senior Software Engineer @Pemuda PERSIS',
  link: '/hendi.jpeg',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-slate-950;
}
</style>
