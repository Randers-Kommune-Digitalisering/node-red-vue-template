<template>

    <div class="sidebar">

        <div class="randers-logo"></div>
        
        <a href="/" class="selected" >Start</a>
        <a href="/">Hjælp</a>

    </div>

</template>

<style scoped>
.sidebar {
    background-color: rgb(250, 250, 250);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding-top: 25px;
}

.sidebar a {
    padding-right: 15px;
    border-right: 4px solid #ffffff00;
    line-height: 35px;
}
    .sidebar a:first-of-type {
        margin-top: 25px;
    }
    .sidebar a:hover {
        border-right: 4px solid #ad85c6;
    }
    .sidebar a.selected {
        border-right: 4px solid #9b4dca!important;
        border-right: 4px solid #6c2f92!important;
    }
</style>