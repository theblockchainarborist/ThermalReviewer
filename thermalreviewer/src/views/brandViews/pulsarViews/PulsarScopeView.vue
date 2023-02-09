<template>
    <div id="pulsar-scopes-main-div">
        <div>
            <h1>
                Pulsar Scopes
            </h1>
        </div>

        <div id="pulsar-scope-table" class="">
            <!-- Column Names -->
            <div class="product-table">
                <div class="border-right center-text">
                    <p class="bold">
                        Model
                    </p>
                </div>
                <div class="border-right center-text">
                    <p class="bold">
                        Microbolometer Resolution
                    </p>
                </div>
                <div class="border-right center-text">
                    <p class="bold">
                        Detection Range
                    </p>
                </div>
                <div class="border-right center-text">
                    <p class="bold">
                        Swappable Battery
                    </p>
                </div>
                <div class="center-text">
                    <p class="bold">
                        Price
                    </p>
                </div>
            </div>
            <div class="product-table" v-for="scope in pulsarScopes" v-bind:key="scope.id" >
                <!-- Row Data -->
                <div class="border-right center-text">
                    <a :href="scope.affiliateLink">{{scope.model}}</a>
                </div>
                <div class="border-right center-text">
                    <p>
                        {{ scope.stats.microbolometerResolution }}
                    </p>
                </div>
                <div class="border-right center-text">
                    <p>
                        {{ scope.stats.detectionRangeYrds }}
                    </p>
                </div>
                <div class="border-right center-text">
                    <p>
                        {{ scope.batteries.swappable }}
                    </p>
                </div>
                <div class="center-text">
                    <p>
                        {{ scope.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import testData from '../../../data/testData.json';

export default {
    name: "pulsar-scope-view",
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        pulsarScopes() {
            return testData.scopes.filter(scope => {
                if (scope.brand === "Pulsar") {
                    return scope;
                }
            })
        }
    }
}
</script>

<style>

#pulsar-scopes-main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
}

#pulsar-scope-table {
    display: flex;
    flex-direction: column;
    width: 60%;
    min-width: 740px;
}

.product-table {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    border: solid 1px black;
    background-color: rgba(211, 191, 166, 0.767);
}

.border-right {
    border-right: solid 1px black;
}

/* TODO Move to global CSS */
.bold {
    font-weight: 600;
}
.center-text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>