<template>
    <div>
    <Preview />
    </div>
</template>

<script>
import Preview from '@/components/Preview.vue';

export default {
    setup() {
        return {};
    },
    components: { Preview }
}
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
    background-color: $cbackground;
}
</style>