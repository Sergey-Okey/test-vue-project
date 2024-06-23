<template>
  <UserList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '../components/UserList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UserList
  }
});
</script>
