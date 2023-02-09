<template>
    <div id="brand-review-outer-div">
        <div class="brand-card" v-for="brand in brands" v-bind:key="brand.id" v-on:click="changePage" >
            <div>
                <h1 class="no-margin">{{brand.name}}</h1>
            </div>
            <div class="brand-img">
                <img class="brand-picture" :src="brand.imgPath" alt="" >
            </div>
        </div>
    </div>
</template>

<script>
import Brands from '../../data/Brands.json'

export default {
    name: "brand-review",
    components: { Brands },
    data() {
        return {

        }
    },
    methods: {
        changePage() {
            let eventRoute = event.currentTarget.children[0].innerText.toLowerCase()
            console.log(this.$route.path)
            let currentBaseRoute = this.$route.path
            this.$router.push(`${currentBaseRoute}/${eventRoute}`);
        }
    },
    computed: {
        brands() {
            if (this.$route.path.includes('scopes') !== false) {
                return Brands.filter(brand => {
                    if (brand.productTypes.scopes) {
                        return brand;
                    }
                });
            } else if (this.$route.path.includes('binoculars') !== false) {
                return Brands.filter(brand => {
                    if (brand.productTypes.binoculars) {
                        return brand;
                    }
                });
            } else if (this.$route.path.includes('monoculars') !== false) {
                return Brands.filter(brand => {
                    if (brand.productTypes.monoculars) {
                        return brand;
                    }
                })
            }
        }
    }
}
</script>

<style>
#brand-review-outer-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: auto;
    color: black;
}

.brand-card {
    border: ridge 2px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: fit-content;
    border-radius: 20px;
    background-color: rgba(211, 191, 166, 0.767);
    justify-self: center;
    cursor: pointer;
    margin-bottom: 5%;
    padding-bottom: 4%;
}

.brand-img {
    display: flex;
    width: 15vw;
    height: 10vw;
}

.brand-picture {
    display: flex;
    width: 100%;
    border-radius: 5px;
}

.no-margin {
    margin: 0px;
}

</style>