<template>
  <div :class="style['create-user']">
    <h1>Create User</h1>
    <form @submit.prevent="createUser">
      <div :class="style['form-group']">
        <label for="name">Name:</label>
        <input type="text" v-model="user.name" id="name" required />
      </div>
      <div :class="style['form-group']">
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" id="email" required />
      </div>
      <div :class="style['form-group']">
        <label for="phone">Phone:</label>
        <input type="tel" v-model="user.phone" id="phone" required />
      </div>
      <div :class="style['form-group']">
        <label for="address">Address:</label>
        <input type="text" v-model="user.address.street" id="address" required />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import axios from 'axios';
import style from './createUser.module.scss'; // Импортируем модульные стили
import { User } from '@/types';

export default defineComponent({
  name: 'CreateUser',
  setup() {
    const user = reactive<Partial<User>>({
      name: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: ''
      }
    });

    const createUser = async () => {
      console.log('User data to be sent:', user);
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
        alert('User created successfully!');
        console.log('Response:', response.data);
      } catch (error) {
        alert('Failed to create user');
        console.error('Error:', error);
      }
    };

    return {
      user,
      createUser,
      style // Возвращаем стиль для использования в шаблоне
    };
  }
});
</script>
