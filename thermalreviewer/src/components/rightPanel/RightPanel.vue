<template>
    <div id="right-panel-main-div">
        <div id="top-selling-group-title-div">
            <h1 class="center-group-title">{{getPathName}}</h1>
        </div>
        <div>
            <best-sellers />
        </div>
    </div>
</template>

<script>
import BestSellers from './bestSellerComponents/BestSellers.vue'
export default {
  components: { BestSellers },
    name: "right-panel-component",
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        getPathName() {
            if (this.$route.path.includes('scopes') !== false) {
                return "Top Selling Scopes";
            } else if (this.$route.path.includes('binoculars') !== false) {
                return "Top Selling Binoculars";
            } else if (this.$route.path.includes('monoculars') !== false) {
                return "Top Selling Monoculars"
            }
            return ""
        }
    }

}
</script>

<style>
#right-panel-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.panel-add {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 5%;
    border: solid 1px black;
    border-radius: 15px;
    background-color: rgba(226, 209, 182, 0.658);
}

.add-link-title {
    font-size: 25;
    font-weight: 600;
    text-decoration: none;
}

.panel-add-inner-div {
    width: fit-content;
    height: 150px;
    border-radius: 15px;
    overflow: hidden;
    border: solid 1px black;
}

#top-selling-group-title-div {
    display: flex;
    width: 100%;
    height: auto;
}

.center-group-title {
    text-align: center;
    margin: 0px 10%;
}
</style>