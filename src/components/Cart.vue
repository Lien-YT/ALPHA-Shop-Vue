<template>
  <div class="cart">
    <h3 class="cart-title">購物籃</h3>
    <div class="cart-products">
      <div v-for="cartItem in cartItems" :key="cartItem.id" class="c-product-card">
        <div class="c-product-img">
          <img :src="cartItem.image" alt="" />
        </div>
        <div class="c-product-info">
          <p class="c-product-name">{{ cartItem.name }}</p>
          <div class="c-product-qty" :key="cartItem.id">
            <button class="btn btn-minus"><img src="./../assets/images/minus.png" /></button>
            <span class="c-product-qty_amount"> {{ cartItem.amount }}</span>
            <button class="btn btn-plus"><img src="./../assets/images/plus.png" /></button>
          </div>
          <b class="c-product-price price"> 
            {{cartItem.subtotal.toLocaleString("en-US")}}
            </b
          >
        </div>
      </div>
    </div>
    <div class="freight-cost">
      <p class="freight-cost_p">運費</p>
      <b class="freight-cost_b price"> -- </b>
    </div>
    <div class="total-cost">
      <p class="total-cost_p">小計</p>
      <b class="total-cost_b price"></b>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.cart {
  padding: 2rem 1.5rem;
  border: 1px solid #f0f0f5;
  border-radius: 8px;
  color: #000000;
  grid-column: 8/13;
  grid-row: 2/5;
}
h3 {
  margin-bottom: 2rem;
}
.c-product-card {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
}
.c-product-img {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
.c-product-info {
  flex: 1;
  margin-left: 21px;
  text-align: end;

  display: grid;
  grid-template-areas:
    "name price"
    "qty qty";
  grid-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
}
.c-product-name {
  grid-area: name;
}
.c-product-price {
  grid-area: price;
}
.c-product-qty {
  grid-area: qty;
  height: 26px;
  width: 116px;
  margin: auto 0 0 0;
  display: flex;
  align-items: center;
}
.c-product-qty > span {
  text-align: center;
  flex: 1;
  font-size: 14px;
}
.c-product-qty > button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #f0f0f5;
}
button > img {
  height: 11px;
  width: 11px;
  margin: 0 auto;
}
.c-product-price {
  height: 22px;
  line-height: 100%;
}
.freight-cost,
.total-cost {
  border-top: 1px solid #f0f0f5;
  font-size: 14px;
}
</style>
