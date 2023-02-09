<template>
    <div id="home-main-video-div">
        <video class="main-home-head-video" ref="video" loop muted>
            <source :src="videoSrc" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
export default {
    name: "home-head-video",
    data() {
        return {
            videoSrc: '/videos/ThermalColorOptions1.mp4'
        }
    },
    mounted() {
        this.$refs.video.play()
    }
}
</script>

<style>
#home-main-video-div {
    display: flex;
    justify-content: center;
}
.main-home-head-video {
    width: 80%;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    border-radius: 10px;
}

</style>