<template>
  <div class="checkout">
    <h2>結帳</h2>
    <Steppers :currentStep="currentStep" />
    <Form
      :cities="cities"
      :shippingWays="shippingWays"
      :orderData="orderData"
      :currentStep="currentStep"
      @after-active-wrap="setActiveWrap"
    />
    <Buttons
      :currentStep="currentStep"
      :orderData="orderData"
      @after-change-step="changeStep"
      @after-submit-order="submitOrder"
    />
    <Modal :isShow="isShow" :order="order" @toggle-modal="toggleModal" />
    <Cart
      :initialCartItems="cartItems"
      :shippingCost="shippingCost"
      :totalCost="totalCost"
      @after-amount-change="resetCartItems"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Steppers from "@/components/Steppers";
import Form from "@/components/Form";
import Buttons from "@/components/Buttons";
import Cart from "@/components/Cart";
import Modal from "@/components/Modal";

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
    subtotal: 3999,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    image: "/images/product_two.png",
    amount: 1,
    price: 1299,
    subtotal: 1299,
  },
];

export default {
  name: "Checkout",
  components: {
    Steppers,
    Form,
    Buttons,
    Cart,
    Modal,
  },
  data() {
    return {
      cities: [],
      shippingWays: [],
      cartItems: [],
      shippingCost: 0,
      currentStep: 1,
      orderData: {
        title: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        addr: "",
        shippingWay: "",
        cardName: "",
        cardNo: "",
        expDate: "",
        cvv: "",
      },
      order: {},
      isShow: false,
    };
  },
  computed: {
    totalCost() {
      return (
        this.cartItems.reduce((total, item) => total + item.subtotal, 0) +
        this.shippingCost
      );
    },
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
          this.shippingCost = shippingWay.cost;
          return {
            ...shippingWay,
            isActive: true,
          };
        }
      });
    },
    resetCartItems(cartItems) {
      this.cartItems = cartItems;
    },
    changeStep(order) {
      if (this.currentStep < 3 && order === "next") {
        this.currentStep++;
      } else {
        this.currentStep--;
      }
    },
    submitOrder() {
      // 挑戰1-1: 資料處理-console
      // const order = {
      //   ...this.orderData,
      //   totalPrice: this.totalCost,
      // };
      // console.log(order)

      // 挑戰1-2: 資料處理-Modal
      this.order = {
        ...this.orderData,
        totalPrice: this.totalCost,
      };
      this.toggleModal()
    },
    toggleModal() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.checkout {
  margin: 0 auto;
  padding-bottom: 7.5em;
  width: 90%;
  max-width: 1110px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 86px 86px 1fr 100px;
}
h2 {
  margin: auto 0;
  grid-column: 1/13;
  grid-row: 1/2;
}
</style>