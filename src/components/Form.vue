<template>
  <div class="form-panel">
    <form id="a-form">
      <!-- Part 1: 寄送地址 -->
      <div class="part">
        <div id="shipping-info">
          <h2 class="part-title">寄送地址</h2>
          <div class="form-row">
            <label>稱謂</label>
            <div class="select-wrapper">
              <select name="a-type" id="a-title" required>
                <option value="" disabled selected>請選擇稱謂</option>
                <option value="mr">先生</option>
                <option value="ms">女士</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label>姓名</label>
            <input
              id="receiver-name"
              type="text"
              placeholder="請輸入姓名"
              required
            />
          </div>
          <div class="form-row">
            <label>電話</label>
            <input
              id="receiver-tel"
              type="text"
              placeholder="請輸入行動電話"
              required
            />
          </div>
          <div class="form-row">
            <label>E-mail</label>
            <input
              id="receiver-mail"
              type="text"
              placeholder="請輸入電子郵件"
              required
            />
          </div>
          <div class="form-row">
            <label>縣市</label>
            <div class="select-wrapper">
              <select name="a-type" id="a-city" required>
                <option value="" disabled selected>請選擇縣市</option>
                <option v-for="city of cities" :key="cities.indexOf(city)" value="">{{ city }}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label>地址</label>
            <input
              id="receiver-address"
              type="text"
              placeholder="請輸入地址"
              required
            />
          </div>
        </div>
      </div>
      <!-- Part 2: 運送方式 -->
      <div class="part" id="shipping-way">
        <h2 class="part-title">運送方式</h2>
        <div v-for="shippingWay of shippingWays" :key="shippingWay.id" class="form-wrap" :class="{'active':shippingWay.isActive}" >
          <input :class="{'active':shippingWay.isActive}" name="shipping-type" type="radio" value="standard" @click="setActive(shippingWay.id)"/>
          <div class="shipping-type-desc">
            <label>{{ shippingWay.way }}</label>
            <p>{{ shippingWay.description }}</p>
          </div>
          <div class="shipping-type-cost">{{ shippingWay.cost | renderCost }}</div>
        </div>
      </div>
      <!-- Part 3: 付款資訊 -->
      <div class="part">
        <div id="payment-info">
          <h2 class="part-title">付款資訊</h2>
          <div class="form-row">
            <label>持卡人姓名</label>
            <input id="cardholder-name" type="text" placeholder="John Doe" />
          </div>
          <div class="form-row">
            <label>卡號</label>
            <input
              id="card-number"
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
          <div class="form-row">
            <label>有效期限</label>
            <input id="expiration-date" type="text" placeholder="MM/YY" />
          </div>
          <div class="form-row">
            <label>CVC / CCV</label>
            <input id="CVV" type="text" placeholder="123" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  filters: {
    renderCost (cost) {
      return cost === 0
       ? `免費`
       : `$${cost}`
    },
  },
  props: {
    cities: {
      type: Array,
      required: true
    },
    initialShippingWays: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      shippingWays: this.initialShippingWays
    }
  },
  
  methods: {
    setActive(id) {
      this.shippingWays = this.shippingWays.map((shippingWay) => {
        if (shippingWay.id !== id) {
          return {
            ...shippingWay,
            isActive: false
          }
        } else {
          return {
            ...shippingWay,
           isActive: true
          }
        }
      });
    }
  }
}
</script>
<style scoped>
.form-panel {
  grid-column: 1/7;
  grid-row: 3/4;
}

h2,
.form-row,
.form-wrap {
  margin-bottom: 1.5rem;
}

.form-row > label {
  margin-bottom: 0.5rem;
  display: block;
  font-size: 12px;
  color: #808080;
}

input,
select {
  padding: 12px 16px;
  height: 40px;
  width: 100%;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  font-size: 12px;
}
input[type="text"]::placeholder {
  color: #999999;
}
input[type="radio"] {
  -webkit-appearance: none;
  cursor: pointer;
  margin: 20px;
  padding: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border-color: #222222;
}
input:checked {
  box-shadow: inset 0 0 0 6px #2a2a2a;
}

.select-wrapper {
  position: relative;
  z-index: 0;
}
.select-wrapper::after {
  content: "";
  border-style: solid;
  border-width: 5px 4.5px 0 4.5px;
  border-color: #2a2a2a transparent;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: -1;
}
select {
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
}
select:invalid {
  color: #999999;
}

/* Part 1: 寄送地址 */
#shipping-info {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1.875rem;
}
#shipping-info > h2 {
  grid-column: 1/7;
}
#shipping-info > div:nth-child(2),
#shipping-info > div:nth-child(6) {
  grid-column: 1/3;
}
#shipping-info > div:nth-child(3),
#shipping-info > div:nth-child(7) {
  grid-column: 3/7;
}
#shipping-info > div:nth-child(4) {
  grid-column: 1/4;
}
#shipping-info > div:nth-child(5) {
  grid-column: 4/7;
}

/* Part 2: 運送方式 */
.form-wrap {
  height: 60px;
  min-width: 170px;
  border: 1px solid #f0f0f5;
  border-radius: 4px;
  font-size: 12px;
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}
.form-wrap.active {
  border-color: #2a2a2a;
}

.shipping-type-desc {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
}
.shipping-type-desc > label {
  font-size: 14px;
  font-weight: bold;
}

.shipping-type-cost {
  position: absolute;
  top: 13px;
  right: 20px;
}

/* Part 3: 付款資訊 */
#payment-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.875rem;
}

#payment-info > .form-row {
  max-width: 350px;
}

#payment-info > div:nth-child(2),
#payment-info > div:nth-child(3) {
  grid-column: 1/3;
}
</style>