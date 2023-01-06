<script lang="ts" setup>
const emit = defineEmits(['openCard'])

const props = defineProps({
    image: String,
    isFlipped: Boolean,
    isShowed: Boolean
})
</script>

<template>
    <div class="card-parent">
        <div
            class="card-wrapper"
            :class="{ 'card-wrapper--flipped' : props.isFlipped }"
            @click="emit('openCard')"
        >
            <div class="card card__back"></div>

            <img
                v-if="props.isShowed"
                :src="props.image"
                alt=""
                class="card card__front"
            />
        </div>
    </div>
</template>

<style lang="scss">
.card-parent {
    perspective: 500px;
}

.card-wrapper {
    position: relative;
    display: flex;
    margin: 6px;
    cursor: pointer;
    height: 70px;
    width: 114px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    flex: 1;
    box-sizing: border-box;

    &--flipped {
        transform: rotateY(180deg);
        cursor: default;
        pointer-events: none;
    }
}

.card {
    border-radius: 10px;
    height: 70px;
    width: 114px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &__front {
        background: #fff;
        transform: rotateY(180deg);
    }

    &__back {
        background-color:#05d0d0;
        background-image:
        repeating-linear-gradient(
            45deg,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.8) 10px,
            transparent 0px,
            transparent 20px
        ),
        repeating-linear-gradient(
            -45deg,
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.5) 10px,
            transparent 0px,
            transparent 20px
        );
    }
}
</style>
