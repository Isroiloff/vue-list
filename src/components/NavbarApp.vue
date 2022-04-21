<template>
  <div>
    <v-app-bar>
      <v-img class="img__nav" src="../images/allin.svg" alt="No " />

      <!-- bv-list -->
      <v-list class="d-flex">
        <v-list-item v-for="list in lists" :key="list">
          <v-list-title>
            <a href="#" class="header__menu-link">
              {{ list.title }}
            </a>
          </v-list-title>
        </v-list-item>
      </v-list>
      <!-- v-menu -->
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="black" v-bind="props"> Uz</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(language, i) in languages" :key="i">
            <v-list-item-title>{{ language }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <button-v style="color: white; background: #33cc66"
        >Отслеживание
      </button-v>
    </v-app-bar>
    <!-- section__details -->
    <v-container fluid style="margin-top: 20px" class="page__wrap">
      <v-row class="section__details">
        <v-col md="12" class="pa-2 section__details-item">
          <h1>Новости</h1>
          <v-breadcrumbs :items="items"></v-breadcrumbs>
        </v-col>
      </v-row>
    </v-container>
    <!-- section -->
    <v-container>
      <section class="section">
        <div class="section__top">
          <div class="section__top-left">
            <div v-for="(b, i) in lefts" :key="i">
              <button-v class="lefts__btn">{{ b }}</button-v>
            </div>
          </div>
          <div class="section__top-right">
            <v-text-field
              label="Поиск"
              :rules="rules"
              hide-details="auto"
              color="success"
              loading
            >
            </v-text-field>
          </div>
        </div>
      </section>
    </v-container>
  </div>
  <div></div>
</template>

<script>
import ButtonV from "../comp/ButtonV.vue";
export default {
  components: {
    ButtonV,
  },
  data() {
    return {
      lists: [
        { title: "Главная" },
        { title: "Тарифы и услуги" },
        { title: "Новости" },
        { title: "Зона покрытия" },
        { title: "О нас" },
        { title: "Контакты" },
      ],
      languages: ["Uz", "Ru", "Eng"],
      items: ["Главная", "Новости"],
      lefts: ["Все", "Новости", "События", "Акции"],
    };
  },
};
</script>

<style>
header {
  box-shadow: none !important;
}

.header__menu-link {
  text-decoration: none;
  font-size: 14px;
  font-family: "MuseoSansCyrl", sans-serif !important;
  color: #555867;
  font-weight: 500;
}

.v-toolbar__content {
  height: 104px !important;
}

.v-img__img {
  left: -25px !important;
}

.img__nav {
  width: 180px;
  height: 43px;
}

.v-toolbar {
  box-shadow: 0 !important;
}

/* section--details */
.section__details {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #3c6;
}

.section__details-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}

.section__details-item h1 {
  font-size: 42px;
  font-weight: 700;
}

/* section */
.section {
  padding: 130px 0;
}

.section__top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.section__top-left {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.lefts__btn:hover {
  background-color: #33cc66;
  color: white;
}

.section__top-right {
  width: 300px;
  position: relative;
}

.search__img {
  width: 19px;
  height: 19px;
  position: absolute;
}
</style>
