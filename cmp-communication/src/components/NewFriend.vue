<template>
  <form @submit.prevent="createFriend">
    <label for="lastName">Name: </label>
    <input type="text" v-model="name" id="name" />
    <label for="phone">Phone: </label>
    <input type="text" v-model="phone" id="phone" />
    <label for="email">Email: </label>
    <input type="text" v-model="email" id="email" />
    <button type="submit">Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    createFriend() {
      this.$emit("add-friend", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
    }
  }
};
</script>
