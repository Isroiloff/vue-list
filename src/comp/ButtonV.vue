<template>
  <button class="btn-v">
    <slot></slot>
  </button>
</template>

<style>
.btn-v {
  color: white;
  /* background-color: #33cc66; */
  cursor: pointer;
  border: 1px solid #33cc66;
  color: #33cc66;
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
}
</style>
