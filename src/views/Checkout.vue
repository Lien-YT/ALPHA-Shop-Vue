<template>
  <div class="checkout">
    <h2>結帳</h2>
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/Cart'

export default {
  name: 'Checkout',
  components: {
    Cart
  }
}
</script>
