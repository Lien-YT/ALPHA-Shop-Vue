<template>
  <div class="buttons-control">
    <button class="btn btn-outline">
      <div class="prev-btn">
        <img src="./../assets/images/arrow-left-black.png"/>上一步
      </div>
    </button>
    <button
      class="btn next-btn btn-primary"
    >
      下一步<img src="./../assets/images/arrow-right.png"/>
    </button>
  </div>
</template>

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
}
.next-btn {
  margin-left: 1rem;
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