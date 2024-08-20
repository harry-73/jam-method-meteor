<script setup>
import Info from './Info.vue'
import { createTodo } from '/imports/methods/todos'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Home mounted')
  createTodo({ text: 'Meteor is great' }).then(() => { console.log('Link created') }).catch((error) => { console.error("CreateTodo", error) });
})



</script>

<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor!</h1>

  <Info />
</template>
../methods/todos