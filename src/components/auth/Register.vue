/* eslint-disable vue/multi-word-component-names */ /* eslint-disable
vue/multi-word-component-names */
<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p>
        oder
        <a class="text-vue2" role="button" @click="changeComponent('login')">
          melden Sie sich mit Ihrem Konto an</a>
      </p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"
            ><strong>Passwort wiederholen</strong></label
          >
          <Field
            as="input"
            name="confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
          />
          <small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Registrieren</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  /* eslint-disable */
  name: "Register",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "login") {
        return false;
      }
      return true;
    },
  },

  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email wird benötigt")
        .trim()
        .email("Keine gültige Emailadresse"),
      password: yup
        .string()
        .required("Password wird benötigt")
        .min(6, "Passwort muss mind. 6 Zeichen lang sein"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein"),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("EMAIL_EXISTS")) {
          return "Emailadresse existiert bereits";
        }
        return "Unbekannter Fehler aufgetreten";
      }
      return "";
    },
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      this.$store
        .dispatch("signup", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          this.isLoading = false;
          //console.log(this.$store.state);
          this.changeComponent("login");
        })
        .catch((error) => {
          this.error = error.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped></style>
