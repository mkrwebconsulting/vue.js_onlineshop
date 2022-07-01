<template>
  <TwoCol :leftCol="'col-md-8 bg-vue'" :rightCol="'col-md-4'" :fullsize="true">
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Der Shop</div>
        <div class="display-4 my-5">Exklusive Artikel</div>
        <div class="my-5 offset-5 col-4">
          <img src="@/assets/shopping.svg" class="img-fluid" />
        </div>
      </div>
    </template>

    <template #rightCol>
      <transition enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutRight" mode="out-in">
        <component
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </transition>
    </template>
  </TwoCol>
</template>

<script>
import TwoCol from "@/layouts/TwoCol";
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";

export default {
  name: "HomePage",
  components: {
    TwoCol,
    Register,
    Login,
  },
  data() {
    return {
      componentName: "register",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style></style>
