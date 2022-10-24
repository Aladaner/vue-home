<template>
    <div>
        <VideoBlock />
    </div>
</template>

<script>
import VideoBlock from '@/components/VideoBlock.vue';
export default {
    setup() {
        return {};
    },
    components: { VideoBlock }
}
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
    background-color: $cbackground;
}
</style>