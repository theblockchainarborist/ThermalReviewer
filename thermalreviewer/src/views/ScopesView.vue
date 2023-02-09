<template>
    <div>
        <div id="best-selling-scopes-div">

        </div>

        <div>
            <brand-review />
        </div>
    </div>
</template>

<script>
import BrandReview from '../components/brandComponents/BrandReview.vue';
import testData from '../data/testData.json';

export default {
  components: { BrandReview },
    name: "scopes-view"
}
</script>

<style>

</style>