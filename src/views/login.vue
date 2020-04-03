/*eslint no-useless-escape: "error"*/
<template>
  <div id="app">
    <v-app>
      <!-- <main> -->
      <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
          <v-flex xs12 sm4 elevation-6>
            <v-toolbar class="pt-5 blue darken-4">
              <v-toolbar-title class="white--text"
                ><h4>Welcome Back</h4></v-toolbar-title
              >
            </v-toolbar>
            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <v-form v-model="valid" ref="form">
                    <v-text-field
                      label="Enter your e-mail address"
                      v-model="email"
                      :rules="[rules.required, rules.min]"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Enter your password"
                      v-model="password"
                      min="8"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => changeE1"
                      @click:append="e1 = !e1"
                      :type="e1 ? 'password' : 'text'"
                      :rules="passwordRules"
                      counter
                      required
                    ></v-text-field>
                    <v-layout justify-space-between>
                      <v-btn
                        @click="submit"
                        :class="{
                          'blue darken-4 white--text': valid,
                          disabled: !valid
                        }"
                        >Login</v-btn
                      >
                      <a href="">Forgot Password</a>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- </main> -->
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      e1: true,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Min 6 characters"
      ],
      email: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 6 || "Min 6 characters",
        regex: v =>
          v.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) || "E-mail must be valid"
        // emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit();
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    changeE1() {
      console.log(this.e1);
      this.e1 = !this.e1;
    }
  }
};
</script>
<style scoped>
#app {
  background-image: url("https://images.unsplash.com/photo-1497733942558-e74c87ef89db?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=");
  background-size: cover;
  overflow: hidden;
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
}

/* .loginOverlay {
  background:rgba(33,150,243,0.3);
} */

.photoCredit {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>
