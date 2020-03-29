/* eslint-disable */
<template>
  <v-list dense>
    <template v-for="item in items">
      <router-link :key="item.id" :to="item.to">
        <v-list-item  link>
          <v-list-item-action>
            <ion-icon :name="item.icon" class="fontSize"></ion-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="font-size: 16px;">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </template>
  </v-list>
</template>

<script>
export default {
  props: [],
  components: {},
  data: () => ({
    items: [
      {id:1, icon: "home-outline", text: "Trang Chủ",to:"/" },
      {id:2, icon: "settings-outline", text: "Cài đặt",to:"/action" },
      // {id:3, icon: "bookmarks-outline", text: "Học phần" ,to:"/action"},
      // {id:4, icon: "folder-open-outline", text: "Thư mục" ,to:"/action"},
    ]
  }),
};
</script>

<style scoped>
.fontSize {
  font-size: 30px;
}</style
>>
