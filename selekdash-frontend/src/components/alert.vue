<script setup>
    defineProps({
        color : String
    })
</script>

<template>
    <div :class="`alert alert-${color}`">
        <slot>
            Fallback massage alert
        </slot>
    </div>
</template>

<style>
    .alert{
        padding: .5rem;
        border-radius: .3rem;
    }

    .alert-blue{
        background-color: aqua;
        border: 2px solid blueviolet;
    }
     .alert-green{
        background-color: rgb(0, 255, 51);
        border: 2px solid blueviolet;
    }
     .alert-red{
        background-color: rgb(245, 73, 16);
        border: 2px solid blueviolet;
    }
</style>