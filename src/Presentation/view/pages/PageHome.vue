<script setup lang="ts">
import { getImageUrl } from '@/Presentation/view/utils/get-image-url';

const cardImageUrls = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
];

const cardImages = cardImageUrls.map(img => getImageUrl(img, '../assets/card/'));

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
