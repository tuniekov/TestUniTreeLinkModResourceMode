<template>
  <UniTreePanel :treetabs="testunitreelinkmodresourcemode"/>
</template>

<script setup>
  import { PVTables, UniTreePanel } from 'pvtables/dist/pvtables'
  import { ref } from 'vue'
  const testunitreelinkmodresourcemode = ref({
    modResourceTree:{
      type:'tree',
      title: 'modResourceTree',
      table: 'modResourceTree',
    },
  });
</script>
<style>
 #testunitreelinkmodresourcemode{
  display: flex;
  width: auto;
  height: 100vh;
 }
</style>