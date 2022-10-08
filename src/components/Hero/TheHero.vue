<template>
    <section class="hero">
        <div class="container hero__container">
            <slot>

            </slot>
        </div>

        <div class="hero__marquee-text-area" v-if="$slots.marqueeText">
            <slot name="marqueeText">

            </slot>
        </div>
    </section>
</template>

<script>
export default {
    name: "TheHero",
}
</script>

<style lang="scss" scoped>
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        background-color: $color-yellow;
        border-radius: 50%;
        width: 578px;
        height: 578px;
        z-index: -1;
        pointer-events: none;
        filter: blur(38px);
    }

    &__container {
        display: flex;
        justify-content: center;
        width: 89%;
        position: relative;
    }

    &__marquee-text-area {
        position: absolute;
        z-index: -2;
        transform: rotate(-30deg);
        width: 120vw;
    }
}

@include media(1024) {
    .hero {
        &::before {
            height: 482px;
            width: 482px;
        }
    }
}

@include media(550) {
    .hero {
        &::before {
            width: 294px;
            height: 294px;
            filter: blur(23px);
        }

        &__container {
            width: 100%;
        }

        &__marquee-text-area {
            transform: rotate(-57deg);
            width: 220%;
        }
    }
}
</style>