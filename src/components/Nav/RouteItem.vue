<template>
    <li class="menu__list-item">
        <router-link :to="'/' + routeTo ? routeTo : ''">
            <slot></slot>
        </router-link>
    </li>
</template>

<script>
export default {
    name: "RouteItem",
    props: ['routeTo']
}
</script>

<style lang="scss" scoped>
.menu {
    &__list-item {
        position: fixed;
        display: flex;
        justify-content: center;
        text-align: center;
        font-weight: 600;
        color: $color-dark-grey;

        &_1 {
            top: 50%;
            right: 19px;
            transform: translateY(-50%) translateX(50%) rotate(90deg);
        }

        &_2 {
            bottom: 19px;
            left: 50%;
            transform: translateX(-50%);
        }

        &_3{
            top: 50%;
            left: 19px;
            transform: translateY(-50%) translateX(-50%) rotate(-90deg);
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

@include media(1024) {
    .menu {
        &__list-item {
            font-size: 14px;

            &_1 {
                right: 10px;
            }

            &_2 {
                bottom: 10px;
            }

            &_3{
                left: 10px;
            }
        }
    }
}

@include media(550) {
    .menu {
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