<template>
    <div>
        <div id="img-slider-div">
            <home-head-video />
        </div>

        <div class="body-content-div">
            <div class="body-content-p-div">
                <p class="body-content-p">
                    Welcome to The Thermal Reviewer, your one-stop source for all things thermal imaging. 
                    Whether you're a hunter, outdoor enthusiast, or professional, our website provides in-depth reviews and analysis of the best thermal scopes, binoculars, and monoculars on the market.
                </p>
            </div>
            <div class="body-content-p-div">
                <p class="body-content-p">
                    Our team of experts has extensive knowledge and experience with thermal imaging technology and is dedicated to providing you with accurate, unbiased, and up-to-date information. 
                    Our reviews are based on extensive research, hands-on testing, and customer feedback, so you can make an informed decision when purchasing your next thermal imaging device.
                </p>
            </div>
            <div class="body-content-p-div">
                <p class="body-content-p">
                    On our website, you will find detailed reviews of the top thermal scopes, binoculars, and monoculars, including their features, specifications, pros and cons, and much more. 
                    We also provide helpful guides and tutorials to assist you in making the most of your thermal imaging device and getting the most out of your outdoor adventures.
                </p>
            </div>
            <div class="body-content-p-div">
                <p class="body-content-p">
                    We believe that every person should have access to the best information when it comes to thermal imaging, and that's why we created The Thermal Reviewer. 
                    Whether you're a seasoned pro or just starting out, our website is the perfect resource for anyone looking to buy the best thermal imaging device for their needs. 
                    Browse our site today and discover the world of thermal imaging like never before.
                </p>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import HomeHeadVideo from '../components/videoComponents/HomeHeadVideo.vue'
export default {
  components: { HomeHeadVideo },
    name: "home-view"
}
</script>

<style>
#img-slider-div {
    display: flex;
    justify-content: center;
    width: 100%;
}

.body-content-div {
    margin: 0% 10%;
}

.body-content-p {
    font-size: 22px;
    color: black;
}

.body-content-p-div {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    border: solid 1px black;
    border-radius: 14px;
    margin: 2%;
}

</style>