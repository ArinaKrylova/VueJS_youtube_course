<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input
          type="text"
          id="name"
          placeholder="Введи имя"
          v-model.trim="name"
        />
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->
      <!-- trim - для удаления лишних пробелов -->
      <app-input
      placeholder="Введи имя"
      :error="errors.name"
      label="Как тебя зовут?"
      v-model="name"
      >
      </app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" v-model.number="age" max="70" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="no" />
            Нет</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              value="vuex"
              name="skills"
            />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              value="vue cli"
              name="skills"
            />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              value="vue router"
              name="skills"
            />
            Vue Router</label
          >
        </div>
      </div>

      <div class="form-checkbox" :class="{ error: errors.agree }">
        <span class="label">Правила</span>
        <div class="checkbox">
          <label
            ><input type="checkbox" v-model="agree" name="agree" />С правилами
            согласен</label
          >
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";
export default {
  data() {
    return {
      name: "",
      age: 23,
      city: "nsk",
      relocate: null,
      skills: [],
      agree: false,
      errors: {
        name: null,
        agree: null,
      },
    };
  },
  components: { AppInput },
  methods: {
    formIsValid() {
      let isValid = true;

      if (this.name.length === 0) {
        this.errors.name = "Имя не может быть пустым";
      } else {
        this.errors.name = null;
      }

      if (!this.agree) {
        this.errors.agree = "Вы должны согласиться с правилами";
        isValid = false;
      } else {
        this.errors.agree = null;
      }

      return isValid;
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.group("Form Data");
        console.log("Name", this.name);
        console.log("Age", this.age);
        console.log("City", this.city);
        console.log("To Tokyo", this.relocate);
        console.log("Skills", this.skills);
        console.log("Agree", this.agree);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border-color: red;
}

.form-checkbox.error {
  border: 1px solid red;
  padding: 5px;
}
</style>
