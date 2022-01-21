<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="height: 85px;">
      <q-toolbar >
        <q-toolbar-title style="margin-top: 40px; margin-left: 8px;">
          <q-icon name="mood" style="font-size: 1.5rem; margin-bottom: 3px;" /> 电量信息
        </q-toolbar-title>
        <div style="margin-top: 40px; margin-right: 8px; font-size: 16px;">星恒 48V 24Ah</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: { },

  setup () {
    return { }
  }
})
</script>
