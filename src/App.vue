<template>
    <the-header>
        <template #default>
            <language-select class="header__language-select"></language-select>
            <the-logo class="header__logo" :page-is-loaded="pageIsLoaded"></the-logo>
            <the-nav class="header__menu"></the-nav>
        </template>
    </the-header>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
    <div :class="['page-transition', {'route-change': routeChange}]" ref="pageTransition"></div>
</template>

<script>

import TheHeader from "@/components/Header/TheHeader";
import TheLogo from "@/components/UI/TheLogo";
import LanguageSelect from "@/components/UI/LanguageSelect";
import TheNav from "@/components/Nav/TheNav";

export default {
    components: {
        TheNav,
        LanguageSelect,
        TheLogo,
        TheHeader,
    },
    data() {
        return {
            pageIsLoaded: false,
            routeChange: false,
            routeName: this.$route.name
        }
    },
    watch: {
        $route() {
            if (this.routeName) {
                this.routeChange = true;
                setTimeout(() => this.routeChange = false, 1500);
            }
            this.routeName = this.$route.name;
        }
    },
    mounted() {
        this.pageIsLoaded = true;
    }
}
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.page-transition {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-yellow;
    transform: skewX(10deg) translateX(120%);

    &.route-change {
        animation: slideRight 1.5s forwards ease-in-out;
    }
}

@keyframes slideRight {
    0% {
        transform: skewX(20deg) translateX(-120%);
    }

    30%,
    70% {
        transform: skewX(0deg) translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>