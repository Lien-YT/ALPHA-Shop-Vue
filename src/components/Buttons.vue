<template>
  <div class="buttons-control">
    <button
      v-show="currentStep !== 1"
      class="btn btn-outline"
      @click.stop.prevent="handleChangeStep('prev')"
    >
      <div class="prev-btn">
        <img src="./../assets/images/arrow-left-black.png" />上一步
      </div>
    </button>
    <button v-if="currentStep === 3" class="btn next-btn btn-primary">
      確認下單
    </button>
    <button
      v-else
      class="btn next-btn btn-primary"
      @click.stop.prevent="handleChangeStep('next')"
    >
      下一步<img src="./../assets/images/arrow-right.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleChangeStep(order) {
      this.$emit("after-change-step", order);
    },
  },
};
</script>

<style scoped>
.buttons-control {
  padding: 1.5rem 0;
  border-top: 1px solid #e6e6eb;
  display: flex;
  justify-content: space-between;
  grid-column: 1/7;
  grid-row: 4/5;
}
.btn {
  height: 46px;
  width: 100%;
  max-width: 11rem;
}
.prev-btn {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 1rem;
}
.next-btn {
  margin: 0 0 0 auto;
  border-radius: 8px;
  background-color: #f67599;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 9px;
  width: 21px;
}
.prev-btn > img {
  margin-right: 0.75rem;
}
.next-btn > img {
  margin-left: 0.75rem;
}
</style>