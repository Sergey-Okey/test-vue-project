<template>
  <div class="user-list">
    <h1>All Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { User } from '@/types';

export default defineComponent({
  name: 'UserList',
  setup() {
    const users = ref<User[]>([]);

    onMounted(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      users.value = response.data;
    });

    return {
      users
    };
  }
});
</script>

<style scoped lang="scss">
.user-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #0004e9;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom: none;
      }

      a {
        text-decoration: none;
        color: #0800e8;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
          color: #e1211b;
        }
      }
    }
  }
}
</style>
