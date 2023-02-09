<template>
    <div id="menu-main-div">

        <div id="menu-home" class="" :class="[menuBtnClass('/')]" v-on:click="setRoute('/')" >
            <p class="menu-btn-p">Home</p>
        </div>

        <div id="menu-scopes" :class="[menuBtnClass('/scopes')]" v-on:click="setRoute('/scopes')" >
            <p class="menu-btn-p">Scopes</p>
        </div>

        <div id="menu-binoculars" :class="[menuBtnClass('/binoculars')]" v-on:click="setRoute('/binoculars')" >
            <p class="menu-btn-p">Binoculars</p>
        </div>

        <div id="menu-monoculars" :class="[menuBtnClass('/monoculars')]" v-on:click="setRoute('/monoculars')" >
            <p class="menu-btn-p">Monoculars</p>
        </div>
        <div id="knowledge-center" :class="[menuBtnClass('/knowledge-center')]" v-on:click="setRoute('/knowledge-center')">
            <p class="menu-btn-p">Knowledge Center</p>
        </div>
    </div>
</template>

<script>
import store from '../../store/index';

export default {
    name: "menu-component",
    data() {
        return {
            currentRoute: '/'
        }
    },
    methods: {
        setRoute(route) {
            this.currentRoute = route;
            this.$router.push(route);
        },
        menuBtnClass(route) {
            return ['menu-btn', { 'menu-btn-wide': route === this.currentRoute }]
        }
    },
    computed: {
        
    },
}
</script>

<style>
#menu-main-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-self: center;
}
.menu-btn {
    display: flex;
    justify-content: center;
    width: 75%;
    border: solid 2px rgb(255, 248, 207);
    border-radius: 15px;
    font-size: 25px;
    cursor: pointer;
    font-weight: 700;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    margin: 1%;
    padding: 0px;
}

.menu-btn-p {
    margin: 8px;
}


.menu-btn-wide {
    width: auto;
    background-color: rgba(226, 209, 182, 0.658);
}


</style>