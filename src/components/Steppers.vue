<template>
  <div class="step-control">
    <div
      class="
        container
        stepper-container    
      "
    >
      <div v-for="step in steps" :key="step.id" :class="['step', { active: currentStep === step.id , checked: currentStep > step.id }]">
        <span class="connect-line"></span>
        <div v-if="currentStep > step.id" class="circle-container"> &#10004; </div>
        <div v-else class="circle-container">{{ step.id  }}</div>
        <div class="label-container">{{ step.title }}</div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Steppers",
  props: {
    currentStep: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      steps: [
        {
          id: 1,
          title: '寄送地址',
        },
        {
          id: 2,
          title: '運送方式',
        },
        {
          id: 3,
          title: '付款資訊',
        }
      ],
    }
  },
}
</script>

<style scoped>
.step-control {
  width: 100%;
  height: 24px;

  grid-column: 1/7;
  grid-row: 2/3;
}
.stepper-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #AFB1BD;
}
.step.active, .step.checked {
  color: #333333;
}
.step.active > .circle-container {
  border-color: #333333;
}
.step.checked > .circle-container {
  border-color: #333333;
  background-color: #333333;
  color: white;
}

.circle-container {
  height: 24px;
  width: 24px;
  border: 1px solid #AFB1BD;
  border-radius: 50%;
  background-color: transparent;
  line-height: 150%;
}
.label-container {
  margin-left: 0.5rem;
}
span {
  height: 1px;
  width: calc((45vw  - 4.5rem - 1.5rem - 12rem - 8rem) / 2);
  background-color: #AFB1BD;
  position: absolute;
  top: 12px;
  right: calc(100% + 1.5rem);
}
.step:first-of-type > span {
  display: none;
}
</style>