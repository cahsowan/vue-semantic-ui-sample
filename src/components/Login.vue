<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal header">
        <div class="content">
          Login to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" v-model="credentials.email">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" v-model="credentials.password">
            </div>
          </div>
          <div class="ui fluid large teal submit button">Login</div>
        </div>

        <div class="ui error message"></div>

      </form>
    </div>
  </div>
</template>
<script>
  import fields from '../validations/login';
  export default {
    ready() {
      const $ = window.jQuery;

      $(document).ready(() => {
        $('.ui.form').form({
          fields,
          onSuccess: (event) => {
            this.formSubmit();
            $('input').val('');
            event.preventDefault();
          },
        });
      });
    },

    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
        error: '',
      };
    },

    methods: {
      formSubmit() {
        const credentials = {
          email: this.credentials.email,
          password: this.credentials.password,
        };

        window.console.log(credentials);
      },
    },
  };
</script>
<style scoped>
  .grid {
    /*height: 100%;*/
    margin-top: 100px;
  }
  .column {
    max-width: 450px;
  }
</style>