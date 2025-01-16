const App = {
  data() { //метод, данные которые есть 
    return {
      placeholderSrting: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2", "Заметка 154"],
    };
  },

  methods: { //набор методов и функций которые существуют
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      console.log("removeNote", idx);
      this.notes.splice(idx, 1);
    },
  },

  computed: {
    doubleCountComputed() {
      console.log("doubleCountComputed");
      return this.notes.length * 2;
    },
  },
  
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
  
};

const app = Vue.createApp(App);

app.mount("#app");
