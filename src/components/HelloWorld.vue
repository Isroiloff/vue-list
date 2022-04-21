<template>
  <div>
    <div v-for="user in this.users" :key="user.id">
      <p>Name: {{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      urlUsers: "https://jsonplaceholder.typicode.com/users",
      users: ref([]),
      errors: [],
    };
  },
  async mounted() {
    try {
      const res = await fetch(this.urlUsers);
      const result = await res.json();
      console.log(result);
      this.users.push(result);
      console.log(this.users);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
