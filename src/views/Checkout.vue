<template>
  <div class="checkout">
    <h2>結帳</h2>
    <Steppers />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/Cart";
import Steppers from "@/components/Steppers";

export default {
  name: "Checkout",
  components: {
    Cart,
    Steppers
  },
};
</script>

<style scoped>
.checkout {
  outline: 1px solid red;
  margin: 0 auto;
  padding-bottom: 7.5em;
  width: 90%;
  max-width: 1110px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr auto 2fr;
}
h2 {
  margin: auto 0;
  grid-column: 1/13;
  grid-row: 1/2;
}
</style>