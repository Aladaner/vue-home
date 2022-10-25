<template>
    <div>
       <Questions />
    </div>
</template>

<script>
import Questions from "@/components/Questions.vue"

export default {
    
    components: {Questions}
}
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
    background-color: $cbackground;
}
</style>