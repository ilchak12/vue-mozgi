<template>
    <h1 class="hero__title">
        <slot>
            FULL-CYCLE EVENT AGENCY
        </slot>
    </h1>
</template>

<script>
export default {
    name: "HeroTitle",
}
</script>

<style lang="scss" scoped>
.hero {
    &__title {
        text-align: center;
        font-size: toRem(82);
        line-height: 100%;
        cursor: default;
        transition: 0.7s linear all;
    }
}

@include media(1024) {
    .hero {
        &__title {
            font-size: toRem(58);
        }
    }
}

@include media(550) {
    .hero {
        &__title {
            font-size: toRem(34);
        }
    }
}
</style>