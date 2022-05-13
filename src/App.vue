<template>
  <div id="alpha-shop">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
#alpha-shop {
  font-family: "Noto Sans TC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2A2A2A;  
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.btn,
button,
button:focus,
input:focus,
textarea:focus,
select,
select:focus,
a:focus {
  outline: 0px !important;
}

button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
</style>
