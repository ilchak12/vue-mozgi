<template>
    <header class="header">
        <div class="container header__container">
            <div class="row header__row">
                <slot>
                    <the-logo class="header__logo"></the-logo>
                </slot>
            </div>
        </div>
    </header>
</template>

<script>
import TheLogo from "@/components/UI/TheLogo";

export default {
    name: "TheHeader",
    components: {
        TheLogo
    },
}
</script>

<style lang="scss">
.header {
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    padding-top: 25px;

    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

@include media(1024) {
    .header {
        padding-top: 18px;
    }
}

@include media(550) {
    header {
        padding-top: 20px;
    }
}
</style>