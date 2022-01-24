<template>
  <q-layout view="lHh Lpr lFf">
    <keep-alive>
      <router-view />
    </keep-alive>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {};
  },
});
</script>
