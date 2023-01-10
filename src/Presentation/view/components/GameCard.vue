<script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['openCard'])

const props = defineProps({
    image: String,
    isFlipped: Boolean,
    isShowed: Boolean
})

const isShowedDelayed = ref<boolean>(false);

// Fix an animation bug of closing cards
watch(() => props.isShowed, (val, oldVal) => {
    if (val && !oldVal) {
        isShowedDelayed.value = true;
    }
    else {
        setTimeout(() => {
            if (props.isShowed === val && !val && oldVal) {
                isShowedDelayed.value = false;
            }
        }, 300);
    }
});
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
                v-if="isShowedDelayed"
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
    height: 85px;
    width: 150px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    flex: 1;
    box-sizing: border-box;

    &--flipped {
        transform: rotateY(180deg);
        cursor: default;
        pointer-events: none;
    }

    &:hover {
        > .card__back {
            box-shadow: 4px 2px 0px var(--color-shaddow-first), -4px -2px 0 var(--color-shaddow-second);
        }
    }
}

.card {
    border-radius: 10px;
    height: 85px;
    width: 150px;
    box-shadow: 0 0px 0px 2px rgba(255, 255, 255, 0.8);
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
        background-color: var(--secondary-color);
        transition: background-color 0.3s ease-in;
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
