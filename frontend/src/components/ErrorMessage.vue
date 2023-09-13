<template>
    <div v-if="errMsg">
        {{ errMsg }}
    </div>
</template>

<script>
    export default {
        props:{
            errMsg: String
        }
    }
</script>

<style scoped>

</style>