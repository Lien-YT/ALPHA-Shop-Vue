<template>
  <div class="step-control">
    <div
      class="
        container
        stepper-container    
      "
    >
      <div class="step active">
        <div class="circle-container">1</div>
        <div class="label-container">寄送地址</div>
      </div>
      <div class="step checked">
        <span class="connect-line"></span>
        <div class="circle-container">2</div>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step">
        <span class="connect-line"></span>
        <div class="circle-container">3</div>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-control {
  outline: 1px solid yellow;
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
/* .step.checked > .circle-container::after {
  content: "\2714";
} */

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
.connect-line {
  height: 1px;
  width: calc((45vw  - 4.5rem - 1.5rem - 12rem - 8rem) / 2);
  background-color: #AFB1BD;
  position: absolute;
  top: 12px;
  right: calc(100% + 1.5rem);
}
</style>