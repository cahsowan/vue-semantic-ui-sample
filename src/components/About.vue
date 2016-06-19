<template>
  <div class="ui container">
    <h1>About</h1>
    <hr>
    <select name="skills" multiple="" class="ui fluid dropdown">
      <option value="">Skills</option>
      <option v-for="item in skills" value="{{ item.toLowerCase() }}">{{ item }}</option>
    </select>
  </div>
</template>
<script>
  export default {
    ready() {
      const $ = window.jQuery;
      $('.dropdown').dropdown();
    },
    data() {
      return {
        skills: ['HTML', 'Css', 'Javascript', 'Ruby', 'Python'],
      };
    },
  };
</script>