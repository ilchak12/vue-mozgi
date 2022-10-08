<template>
    <nav :class="['menu', {active: menuIsOpened}]">
        <div class="menu__btn" @click="openMenu"></div>

        <ul class="menu__list">
            <route-item class="menu__list-item_1" route-to="test">What?</route-item>
            <route-item class="menu__list-item_2" route-to="test">Who?</route-item>
            <route-item class="menu__list-item_3" route-to="test">Where?</route-item>
        </ul>
    </nav>
</template>

<script>
import RouteItem from "@/components/Nav/RouteItem";
export default {
    name: "TheNav",
    components: {RouteItem},
    data() {
        return {
            menuIsOpened: false,
        }
    },
    methods: {
        openMenu() {
            this.menuIsOpened = !this.menuIsOpened;
        },
    },
}
</script>

<style lang="scss" scoped>
.menu {
    width: 38px;
    height: 38px;
}

@include media(550) {
    .menu {
        width: 22px;
        height: 10px;

        &.active {
            .menu {
                &__btn {
                    &::before {
                        transform: rotate(45deg);
                    }

                    &::after {
                        transform: rotate(-45deg);
                    }
                }

                &__list {
                    transform: none;
                }
            }
        }

        &__btn {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            z-index: 110;

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: $color-black;
                transition: 0.5s ease-in-out all;
            }

            &::before {
                transform: translateY(-5px);
            }

            &::after {
                transform: translateY(5px);
            }
        }

        &__list {
            position: fixed;
            inset: 0;
            background-color: $color-yellow;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            align-items: center;
            transition: 0.7s ease-in-out all;
            transform: translateY(-110%);
        }

        &__list-item {
            position: relative;
            display: flex;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: $color-dark-grey;
            font-size: 18px;

            &_1 {
                top: auto;
                right: auto;
                transform: none;
            }

            &_2 {
                bottom: auto;
                left: auto;
                transform: none;
            }

            &_3{
                top: auto;
                left: auto;
                transform: none;
            }

            &:hover {
                color: $color-white;

                a {
                    &::before {
                        left: 0;
                        right: auto;
                        width: 100%;
                    }
                }
            }

            a {
                width: max-content;
                color: inherit;
                position: relative;
                transition: 0.3s ease-in-out all;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    right: 0;
                    height: 2px;
                    background-color: $color-white;
                    transition: inherit;
                    width: 0;
                }
            }
        }
    }
}
</style>