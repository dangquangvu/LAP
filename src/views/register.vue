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
                ><h4>Đăng Ký</h4></v-toolbar-title
              ><br />
            </v-toolbar>

            <v-card>
              <v-card-text class="pt-4">
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
                    <a href="">Forgot Password</a><br>
                    <router-link to="/login">Login</router-link>
                    <br />
                    <br />
                    <v-layout>
                      <v-flex >
                        <v-btn
                          @click="submit"
                          :class="{
                            'blue darken-4 white--text': valid,
                            disabled: !valid
                          }"
                          >Register</v-btn
                        >
                      </v-flex>
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
      card_root: {
        id: 1,
        title: "Tiếng nhật",
        description: "0 thuật ngữ",
        img: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        author: "xyz"
      },
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
