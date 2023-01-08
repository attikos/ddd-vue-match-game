<script setup lang="ts">
</script>

<template>
    <RouterView></RouterView>
</template>

<style lang="scss">
@mixin theme-color($name, $hue) {
    --hue-#{"" + $name}: #{$hue};
    --color-#{"" + $name}: #{'hsl(var(--hue-#{$name}), 72%, 24%)'};

    &.#{"" + $name} {
        --primary-hue: var(--hue-#{$name});
    }
}

html {
    &:root {
        --primary-hue: 180deg; // default is 'cyan'
        --primary-color: hsl(var(--primary-hue), 72%, 24%);
        --secondary-color: hsl(var(--primary-hue), 95%, 42%);

        @include theme-color(cyan, 180deg);
        @include theme-color(green, 115deg);
        @include theme-color(blue, 200deg);
        @include theme-color(purple, 280deg);
        @include theme-color(red, 12deg);
        @include theme-color(orange, 28deg);
    }
}

body {
    padding: 0;
    margin: 0;
}

.btn {
    color: #fff;
    background: var(--primary-color);
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #999;
    display: inline-block;
    min-width: 96px;

    &:hover {
        color: #ddd;
    }

    &:active {
        color: #ccc;
    }
}
</style>
