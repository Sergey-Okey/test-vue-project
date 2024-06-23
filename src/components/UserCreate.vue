<template>
  <div class="create-user">
    <h1>Create User</h1>
    <form @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="user.name" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" id="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" v-model="user.phone" id="phone" required />
      </div>
      <div class="form-group">
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
import { User } from '@/types';

export default defineComponent({
  name: 'UserCreate',
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
      createUser
    };
  }
});
</script>

<style scoped lang="scss">
.create-user {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #42b983;
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #369b77;
    }
  }
}
</style>
