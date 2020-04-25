<template>
  <v-card class="score--zone" outlined>
    <v-list>
      <v-list-item-group>
        <v-list-item disabled class="liner">
          <v-list-item-icon
            class="mr-1"
            :class="{
              'ml-12': $vuetify.breakpoint.lgAndUp,
              'ml-11': $vuetify.breakpoint.md,
              'ml-5': $vuetify.breakpoint.sm,
            }"
          >
            <ion-icon
              name="book-outline"
              class="pr-2 text--grey icon--show--learn"
            ></ion-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text--show">Học</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- total -->
        <v-list-item disabled class="show ">
          <v-list-item-content>
            <v-list-item-subtitle
              class="number--show"
              v-html="counter.total"
            ></v-list-item-subtitle>
            <v-list-item-title
              class="subtext--show "
              twoLine
              v-html="`Còn lại`"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item disabled class="show ">
          <v-list-item-content>
            <v-list-item-title class="subtext--show">
              <ion-icon
                name="arrow-down-sharp"
                class="pr-2 text--grey icon--show"
              ></ion-icon
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- remember -->
        <v-list-item disabled class="show">
          <v-list-item-content>
            <v-list-item-subtitle
              class="number--show text--remember"
              v-html="counter.remember"
            ></v-list-item-subtitle>
            <v-list-item-title
              class="subtext--show text--remember"
              twoLine
              v-html="`Đã thuộc`"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item disabled class="show">
          <v-list-item-content>
            <v-list-item-title class="subtext--show">
              <ion-icon
                name="arrow-down-sharp"
                class="pr-2 text--grey icon--show"
              ></ion-icon
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- forget -->
        <v-list-item disabled class="show">
          <v-list-item-content>
            <v-list-item-subtitle
              class="number--show"  
              v-html="counter.forget"
            ></v-list-item-subtitle>
            <v-list-item-title
              class="subtext--show text--forget"
              twoLine
              v-html="`Chưa thuộc`"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <v-card-actions>
              
              <v-btn text>Button</v-btn>
            </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      counter: {
        total: 10,
        remember: 1,
        forget: 9,
      },
    };
  },
};
</script>

<style>
.score--zone {
  min-height: 500px;
}
.liner {
  align-content: center;
  justify-content: center !important;
  border-bottom: 1px solid #cacaca !important;
}
.icon--show {
  font-size: 35px;
  color: #99ceff;
  fill: #4257b2;
}
.icon--show--learn {
  font-size: 35px;
  color: #4257b2;
  fill: #4257b2;
}
.text--forget {
  color: #ff725b;
}
.text--remember {
  color: #23b26d;
}
.text--show {
  font-size: 20px;
  color: grey;
}
.show {
  align-content: center;
  text-align: center;
}
.number--show {
  font-size: 35px !important;
  font-weight: 700 !important;
}
.subtext--show {
  font-size: 15px !important;
  font-weight: 700 !important;
}
</style>
