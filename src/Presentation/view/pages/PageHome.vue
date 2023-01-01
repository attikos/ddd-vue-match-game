<script setup lang="ts">
import { CardPresenter } from '@/Presentation/presenter/CardPresenter';
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';
import { computed } from 'vue';


const cardPresenter = CardPresenter() || {};
// const cardPresenter = computed(() => CardPresenter());


const cardImages = cardPresenter.currentCards.value.map(img => getImageUrl(img));

</script>

<template>
    <div>
        <h2>Match Match Game</h2>

        <div class="wrapper">
            <div v-for="image in cardImages" :key="image">
                <img :src="image" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    max-width: 860px;
    justify-content: flex-start;
    flex-wrap: wrap;

    img {
        border-radius: 10px;
        margin: 12px;
        height: 120px;
        width: auto;
    }
}
</style>
