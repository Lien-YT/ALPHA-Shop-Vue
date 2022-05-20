<template>
  <div
    :style="modalStyle"
    id="modal-template"
    class="modal-mask"
    @click.self="handleToggle"
  >
    <div class="modal">
      <div class="modal-header">
        <h6 name="header">已收到訂單！</h6>
      </div>
      <div class="modal-body">
        <p>訂購人：{{ order.title }} {{ order.name }}</p>
        <p>電話：{{ order.tel }}</p>
        <p>Email：{{ order.email }}</p>
        <p>地址：{{ order.city }} {{ order.addr }}</p>
        <p>運送方式：{{ order.shippingWay }}</p>
        <hr />
        <p>訂單總金額：${{ order.totalPrice }}</p>
        <hr />
        <p>持卡人：{{ order.cardName }}</p>
        <p>卡號：{{ order.cardNo }}</p>
        <p>有效期限：{{ order.expDate }}</p>
        <p>CVC / CCV：{{ order.cvv }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalStyle() {
      return {
        display: this.isShow ? "" : "none",
      };
    },
  },
  methods: {
    toggleModal() {
      this.isShow = !this.isShow;
    },
    handleToggle() {
      this.$emit("toggle-modal");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #ffcccc4d;
}

.modal {
  text-align: center;
  background-color: white;
  height: 450px;
  width: 400px;
  margin: auto;
  padding: 30px;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  /* margin: 20px 0; */
}

.modal-body {
  margin-top: 30px;
}

p {
  font-size: 16px;
  margin: 8px 0;
}

hr {
  border: 0.25px dotted  palevioletred;
  opacity: 30%;
}

</style>