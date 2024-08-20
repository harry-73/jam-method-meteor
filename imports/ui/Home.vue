<script setup>
import Info from './Info.vue'
import { createTodo } from '/imports/methods/todos'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Home mounted')
  createEntry()
})

async function createEntry() {
  try {
    await createTodo({ text: 'Meteor is great' });
  } catch (error) {
    console.error('CreateTodo Error', error)
  }
}

</script>

<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor!</h1>

  <Info />
</template>