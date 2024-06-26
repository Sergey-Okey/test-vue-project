<template>
  <div :class="style['user-list']">
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import style from './userList.module.scss'; // Импортируем модульные стили

export default defineComponent({
  name: 'UserList',
  setup() {
    const users = ref<any[]>([]);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    onMounted(fetchUsers);

    return {
      users,
      style // Возвращаем стиль для использования в шаблоне
    };
  }
});
</script>
