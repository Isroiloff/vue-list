<template>
  <div>
    <v-btn @click="getItem">Click ME</v-btn>
    <!-- <v-pagination
      v-model="params.page"
      :pages="params.last_page"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="getItem"
    /> -->
    <div class="items">
      <div v-for="(item, i) in items" :key="item.id + i">
        <h6>{{ item.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { axios } from "axios";
import $http from "@plugins/axios";
export default {
  data() {
    return {
      items: ref([]),
    };
  },
  setup() {
    const params = ref({
      page: 1,
      per_page: 6,
      last_page: null,
    });
    const getItem = async () => {
      try {
        const {
          data: { data, links },
        } = await $http.get("news-page/news", {
          params: {
            per_page: params.value.per_page,
            page: params.value.page,
          },
        });
        this.items.value = data;
        params.value.last_page = links.last_page;
      } catch (e) {
        console.log(e);
      }
    };
  },
};
</script>

<style lang="scss" scoped></style>
