<template>
  <!-- CHANGE: Dynamically bind the "hover" CSS class to the class attribute of the element:
  if data.hover evaluates to 'true', then the hover class will be applied-->
  <tr
    :class="{ hover: hover, 'room-row': true }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <!-- CHANGE: add event handlers using the `@` shorthand syntax -->

    <td class="code">{{room.code}}</td>
    <td class="desc">{{room.desc}}</td>
    <td class="type">{{room.type}}</td>
    <td class="status">{{room.status}}</td>
    <td class="actions"></td>
  </tr>
</template>

<script>
export default {
    name: 'Room',
 
  //We declare a "prop" named "book", which represents our book object
  props: ['room']

};
</script>
