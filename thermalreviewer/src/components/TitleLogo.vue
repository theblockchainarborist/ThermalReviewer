<template>
    <div id="title-logo-main-div">
        <h1 id="title">
            The Thermal Reviewer
        </h1>
    </div>
</template>

<script>
export default {
    name: "title-logo-component"
}
</script>

<style>
#title-logo-main-div {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: flex-end;
    margin-top: 45px;
}
#title {
    display: flex;
    align-items: bottom;
    margin-top: 0px;
    font-size: 60px;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    margin-bottom: 4px;
    vertical-align: bottom;
    line-height: 1;
    z-index: 2;
    text-align: center;
}
</style>