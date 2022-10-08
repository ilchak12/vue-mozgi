<template>
    <div class="circle-text">
        <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
            </defs>
            <text font-size="16">
                <textPath xlink:href="#circle">
                    <slot>
                        showreel showreel showreel
                    </slot>
                </textPath>
            </text>
        </svg>
    </div>
</template>

<script>
export default {
    name: "CircleText"
}
</script>

<style lang="scss" scoped>
.circle-text {
    width: 125px;
    height: 125px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out all;
    animation: spin 5s linear infinite;
    animation-play-state: paused;

    &:hover {
        animation-play-state: running;
    }

    &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $color-black;
    }

    svg {
        width: inherit;
        height: inherit;

        text {
            font-size: 9px;
            fill: $color-white;
            font-family: $font-main;
        }
    }
}

.hero {
    &__circle-text {
        position: absolute;
        top: calc(100% + 50px);
        right: 30%;
        transform: rotate(-90deg);
    }
}

@include media(1024) {
    .circle-text {
        width: 120px;
        height: 120px;
    }

    .hero {
        &__circle-text {
            right: 25%;
        }
    }
}

@include media(768) {
    .hero {
        &__circle-text {
            top: calc(100% + 25px);
            right: 17%;
        }
    }
}

@include media(550) {
    .circle-text {
        width: 95px;
        height: 95px;

        &::before {
            width: 6px;
            height: 6px;
        }
    }
}

@keyframes spin {
    0% {
        transform: rotate(-90deg);
    }

    100% {
        transform: rotate(-450deg);
    }
}
</style>