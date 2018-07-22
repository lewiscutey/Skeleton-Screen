<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="user in users" class="items" v-if="loading" :key="user">
      <user-item :name="user.name" :email="user.email"></user-item>
    </div>
    <div v-for="load in loades" v-if="!loading" :key="load">
      <loading-item></loading-item>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to use Skeleton Screen',
      users: [],
      loading: false,
      loades: 10,
    };
  },
  methods: {
    getUserDetails: function() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(result => result.json())
        .then(result => {
          this.users = result
          this.loading = true
        });
    }
  },
  created: function() {
    setTimeout(() => {
      this.getUserDetails()
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.items {
  width: 500px;
  height: 50px;
  margin: 20px auto;
}
</style>
