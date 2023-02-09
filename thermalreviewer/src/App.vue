<script setup>
import TitleLogo from "./components/TitleLogo.vue";
import HomeView from "./views/HomeView.vue";
import FooterComponent from './components/FooterComponent.vue'
import LeftMenu from './components/leftPanel/LeftMenu.vue'
import RightPanel from "./components/rightPanel/RightPanel.vue";
</script>


<template>
  <div id="app-main-div">

    <div id="head-main-div">
      <div>
        <title-logo />
      </div>
    </div>

    <div id="left-main-div" >
      <left-menu />
    </div>

    <div id="right-main-div">
      <right-panel />
    </div>

    <div id="body-main-div">

      <div>
        <router-view />
      </div>
      
    </div>

    <div id="footer-main-div" class="test">
      <FooterComponent />
    </div>

  </div>
</template>

<style scoped>
/* Main App */
  #app-main-div {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: 
    'left head right'
    'left body right'
    'foot foot foot';
    width: 100%;
  }
/* Header */
  #head-main-div {
    grid-area: head;
    display: flex;
    justify-content: center;
    width: 100%;
  }
/* Left */
  #left-main-div {
    grid-area: left;
    display: flex;
    height: auto;
    width: auto;
    min-width: 300px;
    background-color: rgba(249, 249, 240, 0.493);
    border-right: solid 3px black;
    border-top-right-radius: 100px;
    border-top: solid 1px black;
  }
/* Right */
  #right-main-div {
    grid-area: right;
    display: flex;
    height: auto;
    width: auto;
    min-width: 300px;
    background-color: rgba(249, 249, 240, 0.493);
    border-left: solid 3px black;
    border-top-left-radius: 100px;
    border-top: solid 1px black;
    margin-right: -15px;
  }
/* Body */
  #body-main-div {
    grid-area: body;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 99.75%;
    border-bottom: solid 3px black;
  }
/* Footer */
  #footer-main-div {
    grid-area: foot;
    width: 110%;
    height: auto;
    background-color: rgba(249, 249, 240, 0.493);
  }


</style>
