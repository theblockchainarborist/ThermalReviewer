
<template>
  <div id="app-main-div">

    <div id="head-main-div" class="test">
      <div>
        <title-logo />
      </div>
      <div>
        <menu-component />
      </div>
    </div>

    <div id="left-main-div" class="test">
    </div>

    <div id="right-main-div" class="test">
    </div>

    <div id="body-main-div" class="test">
    </div>

    <div id="footer-main-div" class="test">
    </div>

  </div>
</template>

<script>
import TitleLogo from "./components/TitleLogo.vue";
import MenuComponent from './components/MenuComponent.vue';

export default {
    name: "app",
    components: {TitleLogo, MenuComponent}
}

</script>

<style scoped>
/* Main App */
  #app-main-div {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: 
    'head head head'
    'left body right'
    'foot foot foot';
    width: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }
/* Header */
  #head-main-div {
    grid-area: head;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: green;
  }
/* Left */
  #left-main-div {
    grid-area: left;
    height: 80vh;
    width: 100%;
    background-color: brown;
  }
/* Right */
  #right-main-div {
    grid-area: right;
    height: 80vh;
    width: 100%;
    background-color: brown;
  }
/* Body */
  #body-main-div {
    grid-area: body;
    width: 100%;
    height: 100%;
  }
/* Footer */
  #footer-main-div {
    grid-area: foot;
    width: 100%;
    background-color: darkcyan;
  }

  .test {
    background-color: blue;
    border: solid 1px black;
    width: 50px;
    height: 50px;
  }
</style>
