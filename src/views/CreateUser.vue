<template>
  <UserCreate />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCreate from '../components/UserCreate.vue';

export default defineComponent({
  name: 'CreateUser',
  components: {
    UserCreate
  }
});
</script>
