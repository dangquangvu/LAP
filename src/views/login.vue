/*eslint no-useless-escape: "error"*/
<template>
  <v-form id="app">
    <v-app>
      <!-- <main> -->
      <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
          <v-flex xs10 sm6 elevation-6>
            <v-toolbar class="pt-2 blue darken-4">
              <v-toolbar-title class="white--text"
                ><h4>Đăng Nhập</h4></v-toolbar-title
              ><br />
            </v-toolbar>

            <v-card>
              <v-card-text class="pt-4">
                <v-card class="100vw " style="margin:0px" :outlined="true">
                  <!-- :elevation="hover ? 8 : 4" -->
                  <v-card-title primary-title class=" ma-1 pa-1">
                    <img
                      class="ml-2"
                      width="24"
                      height="24"
                      src="../assets/iconfinder-icon.svg"
                    />
                    <h6
                      class="headline ma-0 pa-0 pl-6"
                      style="font-size: 15px!important;font-weight: bold;"
                    >
                      Đăng nhập với google
                    </h6>
                  </v-card-title>
                </v-card>
                <br />
                <v-card class="100vw " style="margin:0px" :outlined="true">
                  <!-- :elevation="hover ? 8 : 4" -->
                  <v-card-title primary-title class=" ma-1 pa-1">
                    <img
                      class="ml-2"
                      width="24"
                      height="24"
                      src="../assets/iconfinder_square-facebook_317727.svg"
                    />
                    <h6
                      class="headline ma-0 pa-0 pl-6"
                      style="font-size: 15px!important;font-weight: bold;"
                    >
                      Đăng nhập với facebook
                    </h6>
                  </v-card-title>
                </v-card>

                <br />
                <v-form>
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
                    <a href="">Forgot Password</a><br />
                    <router-link to="/register">Register</router-link>
                    <br />
                    <br />
                    <v-layout class="justify-center">
                      <v-flex class="justify-center">
                        <!-- :disabled="loading" -->
                        <v-btn
                          @click="submit"
                          :class="{
                            'blue darken-4 white--text': valid,
                            disabled: !valid
                          }"
                        >
                          <span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                          ></span>
                          <span>Login</span></v-btn
                        >
                      </v-flex>
                      <!-- <v-flex  xs4>
                        <v-btn
                        to="/register"
                        :class="{
                            'blue darken-4 white--text': 'true'
                          }"
                        >Register</v-btn
                      > </v-flex> -->
                    </v-layout>
                  </v-form>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- </main> -->
    </v-app>
  </v-form>
</template>
<script>
import User from "../models/user";
export default {
  data() {
    return {
      valid: false,
      e1: true,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 3 || "Min 3 characters"
      ],
      email: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 3 || "Min 3 characters",
        regex: v =>
          v.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) || "E-mail must be valid"
        // emailMatch: () => "The email and password you entered don't match"
      },
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  computed: {
    //   loggedIn() {
    //     return this.$store.state.auth.status.loggedIn;
    //   }
    // },
    // created() {
    //   if (this.loggedIn) {
    //     this.$router.push("/home");
    //   }
  },
  methods: {
    submit() {
      this.loading = true;
      console.log(this.email, this.password);
      if (this.email && this.password) {
        this.$store
          .dispatch("auth/login", { email: this.email, password: this.password })
          .then(
            () => {
              this.$router.push("/home");
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
      }
    }
    // submit() {
    //   if (this.$refs.form.validate()) {
    //     this.$refs.form.$el.submit();
    //   }
    // },
    // clear() {
    //   this.$refs.form.reset();
    // }
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
