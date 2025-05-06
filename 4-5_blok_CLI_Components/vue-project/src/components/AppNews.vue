<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </button>
    <div v-if="isNewsOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, consectetur?</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">
        Прочесть новость
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  // emits: ['changeIsOpen'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
  },
  // emits: ['open-news'],
  emits: {
    "open-news": null,
    'read-news': null
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news");
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit("read-news", this.id)
    }
  },
};
</script>
