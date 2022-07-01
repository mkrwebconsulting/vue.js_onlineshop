<template>
  <div class="container-fluid" :class="containerClasses">
    <div class="row" :class="rowClasses">
      <div :class="leftCol">
        <slot name="leftCol">
          <h1>links</h1>
        </slot>
      </div>

      <div :class="rightCol">
        <slot name="rightCol">
          <h1>rechts</h1>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoCol",
  props: {
    leftCol: {
      type: String,
      default: "col-md-8",
    },
    rightCol: {
      type: String,
      default: "col-md-4",
    },
    fullsize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    leftColClasses() {
      return [this.leftCol, this.fullsize ? "h-100" : ""];
    },
    rightColClasses() {
      return [this.rightCol, this.fullsize ? "h-100" : ""];
    },
    rowClasses() {
      return [this.fullsize ? "h-100" : ""];
    },
    containerClasses() {
      return [this.fullsize ? "vh-100" : ""];
    },
  },
};
</script>

<style></style>
