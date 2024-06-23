<template>
  <UserDetails />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserDetails from '@/components/UserDetails.vue';

export default defineComponent({
  name: 'User',
  components: {
    UserDetails
  }
});
</script>
