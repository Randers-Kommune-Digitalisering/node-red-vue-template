<template>
  <div class="item">
    <i>
    </i>
    <div class="details">
      <h3>
        <slot name="icon"></slot>&nbsp;
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>