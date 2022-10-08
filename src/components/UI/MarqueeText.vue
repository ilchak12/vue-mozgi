<template>
    <Vue3Marquee clone :class="['marquee-text hero__marquee-text', {'hero__marquee-text_reverse': reverse}]">
        <slot>
            FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
        </slot>
    </Vue3Marquee>
</template>

<script>
import {Vue3Marquee} from "vue3-marquee";
import 'vue3-marquee/dist/style.css'

export default {
    name: "MarqueeText",
    props: ['reverse'],
    components: {
        Vue3Marquee
    },
}
</script>

<style lang="scss" scoped>
.vue3-marquee {
    &.marquee-text {
        font-weight: 700;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: $color-dark-grey;
        color: transparent;
        font-size: toRem(52);
        opacity: 0.1;
    }
}

.hero {
    &__marquee-text {
        &_reverse {
            transform: scale(-1);
        }
    }
}

@include media(1024) {
    .vue3-marquee {
        &.marquee-text {
            font-size: toRem(42);
        }
    }
}

@include media(550) {
    .vue3-marquee {
        &.marquee-text {
            font-size: toRem(28);
        }
    }
}
</style>