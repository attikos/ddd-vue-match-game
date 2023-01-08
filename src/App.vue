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
</style>
