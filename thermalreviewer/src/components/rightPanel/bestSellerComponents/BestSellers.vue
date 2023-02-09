<template>
    <div>
        <div v-for="data in getBestSellers" v-bind:key="data.id" v-on:click="affiliateLinkClick(data.affiliateLink)">
            <div class="best-seller-div">
                <div>
                    <h3 class="best-seller-title-p">
                        {{data.brand + " " + data.model}}
                    </h3>
                </div>
                <div>
                    <img class="best-seller-picture" :src="data.images[0]" alt="" >
                </div>
                <div>
                    <p class="best-seller-price-p">
                        Starting at: {{ data.price }}
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import TestData from '../../../data/testData.json';

export default {
    name: "best-sellers",
    data() {
        return {

        }
    },
    methods: {
        affiliateLinkClick(url) {
            window.location.href = url
        }
    },
    computed: {
        // Get the best sellers for current category.
        getBestSellers() {
            /* Scopes Best Sellers */
            if (this.$route.path.includes('scopes') !== false) {
                return TestData.scopes.filter(scope => {
                    if (scope.bestSeller) {
                        return scope;
                    }
                });
            }
            /* Binoculars Best Sellers */
            if (this.$route.path.includes('binoculars') !== false) {
                return TestData.binoculars.filter(binocular => {
                    if (binocular.bestSeller) {
                        return binocular;
                    }
                });
            }
            /* Monoculars Best Sellers */
            if (this.$route.path.includes('monoculars') !== false) {
                return TestData.monoculars.filter(monocular => {
                    if (monocular.bestSeller) {
                        return monocular;
                    }
                });
            }
            return "";
        }
    }
}
</script>

<style>

.best-seller-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 5%;
    border: solid 1px black;
    border-radius: 15px;
    background-color: rgba(226, 209, 182, 0.658);
    cursor: pointer;
}


.best-seller-title-p {
    margin-top: 0px;
    margin-bottom: 5px;
    font-weight: 600;
    user-select: none;
    color: black;
}

.best-seller-price-p {
    margin: 2px;
    font-weight: 600;
    user-select: none;
    color: black;
}

.best-seller-picture {
    width: 180px;
    height: 120px;
    border: solid 1px black;
    border-radius: 16px;
    user-select: none;
}

</style>