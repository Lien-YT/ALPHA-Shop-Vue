<template>
  <div class="checkout">
    <h2>結帳</h2>
    <Steppers />
    <Form
      :cities="cities"
      :shippingWays="shippingWays"
      @after-active-wrap="setActiveWrap"
    />
    <Buttons />
    <Cart
     :initialCartItems="cartItems" :shippingCost="shippingCost" 
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Steppers from "@/components/Steppers";
import Form from "@/components/Form";
import Buttons from "@/components/Buttons";
import Cart from "@/components/Cart";

const formData = {
  cities: [
    "基隆市",
    "台北市",
    "新北市",
    "桃園市",
    "新竹市",
    "新竹縣",
    "宜蘭縣",
    "苗栗縣",
    "台中市",
    "彰化縣",
    "雲林縣",
    "南投縣",
    "嘉義市",
    "嘉義縣",
    "台南市",
    "高雄市",
    "屏東縣",
    "花蓮縣",
    "台東縣",
    "外島地區",
  ],
  shippingWays: [
    {
      id: 1,
      way: "標準運送",
      description: "約 3-7 個工作天",
      cost: 0,
      isActive: true,
    },
    {
      id: 2,
      way: "DHL 貨櫃",
      description: "48 小時內送達",
      cost: 500,
      isActive: false,
    },
  ],
};

const cartItems = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    image: "/images/product_one.png",
    amount: 1,
    price: 3999,
    subtotal: "",
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    image: "/images/product_two.png",
    amount: 1,
    price: 1299,
    subtotal: "",
  },
];

export default {
  name: "Checkout",
  components: {
    Steppers,
    Form,
    Buttons,
    Cart,
  },
  data() {
    return {
      cities: [],
      shippingWays: [],
      cartItems: [],
      shippingCost: 0,
    };
  },
  created() {
    this.fetchCheckoutData();
  },
  methods: {
    fetchCheckoutData() {
      const { cities, shippingWays } = formData;
      this.cities = cities;
      this.shippingWays = shippingWays;
      this.cartItems = cartItems;
    },
    setActiveWrap(id) {
      this.shippingWays = this.shippingWays.map((shippingWay) => {
        if (shippingWay.id !== id) {
          return {
            ...shippingWay,
            isActive: false,
          };
        } else {
          this.shippingCost = shippingWay.cost
          return {
            ...shippingWay,
            isActive: true,
          };
        }
      });
    },
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