<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Produktdetails
            <button class="btn btn-lg bg-vue float-end" @click="$router.go(-1)">
              Zurück
            </button>
          </h1>
          <div class="card mt-4" v-if="product">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://dummyimage.com/600x400/34495e/fff"
                  class="card-img"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="card-title mb-4">{{ product.title }}</h5>
                    </div>
                    <div class="col-3">
                      <div class="d-grid">
                        <button
                          class="btn bg-vue2"
                          @click="addProduct({ productId: product.id })">
                          {{ product.price }} €
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <h4>Weitere Produkte</h4>
              <router-link
                :to="{
                  name: 'ReadProduct',
                  params: { id: '-N5EgTiD0GkP59flIe_t' },
                }"
                >Weiteres Produkt</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import { mapActions } from "vuex";
import TheShopLayout from "@/layouts/TheShopLayout";
export default {
  name: "ReadProductPage",
  components: {
    TheShopLayout,
  },
  props: {
    id: String,
  },

  computed: {
    product() {
      return this.$store.getters.product(this.id);
    },
  },

  methods: {
    ...mapActions({ addProduct: "addItemToCart" }),
  },
};
</script>

<style scoped></style>
