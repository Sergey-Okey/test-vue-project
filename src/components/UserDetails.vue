<template>
  <div class="user-details" v-if="user">
    <h1>{{ user.name }}</h1>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.city }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { User } from '@/types';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'UserDetails',
  setup() {
    const route = useRoute();
    const user = ref<User | null>(null);

    onMounted(async () => {
      const userId = route.params.id;
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      user.value = response.data;
    });

    return {
      user
    };
  }
});
</script>

<style scoped lang="scss">
.user-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #42b983;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin: 10px 0;

    strong {
      font-weight: bold;
    }
  }
}
</style>
