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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import style from './userList.module.scss';

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
</script>
