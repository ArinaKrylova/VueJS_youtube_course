<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }} </strong>
        | Прочитано: <strong>{{ readRate }}</strong>
      </span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
    ></app-news>
    <!-- <AppNews/> -->
  </div>
</template>

<script lang="ts">

import AppNews from "./components/AppNews.vue";

// interface New {
//   title: string;
//   id: number;
//   isOpen: boolean;
//   wasRead: boolean
// }

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      notRead: 0,
      news: [
        {
          title: "Lorem ipsum dolor sit amet consectetur",
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: "Lorem ipsum dolor sit ",
          id: 2,
          isOpen: false,
          wasRead: false,
        },
      ],
    };
  },
  provide() {
    return {
      title: "Список всех новостей",
      news: this.news,
    }
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++;
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    AppNews,
    // AppNews: AppNews
  },
  // methods: {
  //   changeIsOpen(item:New) {
  //     const findIndex = this.news
  //       .findIndex((n:New) => n.id === item.id)

  //     if (findIndex > -1) {
  //       this.news[findIndex].isOpen = !this.news[findIndex].isOpen
  //     }
  //   }
  // }
};
</script>

<style></style>
