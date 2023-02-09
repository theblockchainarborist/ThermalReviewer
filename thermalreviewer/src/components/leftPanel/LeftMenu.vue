<template>
    <div id="left-menu-outer-div">

        <div id="menu-btn-div">
            <menu-component />
        </div>

    </div>
</template>

<script>
import store from '../../store/index';
import testData from '../../data/testData.json';
import MenuComponent from './MenuComponent.vue';

export default {
  components: { MenuComponent },
    name: "left-menu-component",
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    }

}
</script>

<style>

#left-menu-outer-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

#radio-button-div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 15vw;
}

.radio-p {
    font-size: 20px;
    font-weight: 600;
    margin-top: 0px;
}

.center-radio-btns {
    display: flex;
    flex-direction: column;
}

.center {
    display: flex;
    justify-content: center;
}

#menu-btn-div {
    width: 100%;
    margin-top: 100px;
}

</style>