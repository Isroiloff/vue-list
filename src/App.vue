<template>
  <v-container>
    <div class="d-flex justify-content-between m-3">
      <div class="d-flex flex-wrap w-50 justify-content-between">
        <v-btn-toggle
          type="button"
          class="btn btn-success width-btn"
          @click="forAll"
        >
          Все
        </v-btn-toggle>
        <v-btn-toggle
          type="button"
          class="btn btn-success width-btn"
          @click="filterItems('Новости')"
        >
          Новости
        </v-btn-toggle>
        <v-btn-toggle
          type="button"
          class="btn btn-success width-btn"
          @click="filterItems('События')"
        >
          События
        </v-btn-toggle>
        <v-btn-toggle
          type="button"
          class="btn btn-success width-btn"
          @click="alertAksiya"
        >
          Акции
        </v-btn-toggle>
      </div>
      <div>
        <input
          class="form-control"
          v-model="search"
          @input="searchFilter(search)"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-between items">
      <v-card
        class="mx-auto item"
        max-width="366"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card__img-items">
          <div class="card__img">
            <img :src="item.image_url" alt="rasm" />
          </div>
          <div class="new__type">
            <p class="new__type-text">
              {{ item.category_name }}
            </p>
          </div>
        </div>
        <v-card-text class="card_text">
          <h6 class="text--primary max-lines">{{ item.title }}</h6>

          <div class="description">
            <p>
              {{ item.description }}
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <div class="d-flex justify-content-between mx-3 my-5">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">{{ small }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">{{ big }}</a>
        </li>
      </ul>

      <div>
        <select
          v-model="selection"
          @change="spliceItems"
          class="form-select"
          id="sel1"
          name="sellist1"
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { $http } from "./plugins/axios";

export default {
  name: "App",

  data() {
    return {
      selection: "",
      small: "<",
      big: ">",
      search: "",
      items: [],
      Items: [],
      params: ref({
        page: 1,
        per_page: 6,
        last_page: null,
      }),
      filter: ref({
        category_id: null,
        word: null,
      }),
    };
  },

  async created() {
    try {
      await $http
        .get("news-page/news?page=1&per_page=9&word", {
          params: { per_page: this.params.per_page, page: this.params.page },
        })
        .then((res) => {
          this.items = res.data.data;
          this.Items = res.data.data;
          // console.log(this.items);
        });
    } catch (er) {
      console.log(er);
    }
  },
  methods: {
    spliceItems() {
      this.items = this.Items.slice(0, this.selection);
    },
    changeCategory(id) {
      return this.items.filter(() => {
        return this.items.id === id;
      });
    },
    filterItems(text) {
      this.items = this.Items.filter((item) => {
        return item.category_name == text;
      });
    },
    forAll() {
      this.items = this.Items;
    },
    alertAksiya() {
      this.items = alert("Ma'lumot Topilmadi!");
    },

    searchFilter(text) {
      if (text) {
        // console.log(text);
        this.items = this.Items.filter((item) => {
          if (item.title.match(text)) return item;
        });
      } else {
        this.items = this.Items;
      }
      // console.log(this.items);
    },
  },

  computed: {},
};
</script>

<style>
.width-btn {
  width: 100px;
}
.items {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: calc(100% / 3 - 20px);
  margin: 10px;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
  /* padding-top: 20px; */
}

/* img */
.card__img-items {
  position: relative;
}

.card__img-items .card__img {
  overflow: hidden;
  height: 272px;
}

.card__img-items .card__img img {
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 100%;
  max-height: 272px;
  object-fit: cover;
  transition: 0.3s;
}

.card__img-items .card__img img:hover {
  border-radius: 15px 15px 0 0;
  cursor: pointer;
  transform: scale(1.1);
}

.card__img-items .new__type {
  position: absolute;
  top: calc(100% - 17px);
  background-color: #3c6;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  left: 40px;
}

/*  */
.new__type {
  cursor: pointer;
}

.new__type-text {
  margin-bottom: 0 !important;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.max-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card_text {
  padding: 40px;
}

.card_text h6 {
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;
  color: #303446;
}

.description {
  padding: 10px 0 0;
}

.description p {
  font-family: inherit;
  font-size: 16px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #aaa3bf;
}
</style>
