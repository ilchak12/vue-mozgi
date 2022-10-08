<template>
    <the-main>
        <template #default>
            <the-hero @mousemove="stickyHeading($event)">
                <template #default>
                    <hero-title ref="stickyHeader"></hero-title>
                    <circle-text class="hero__circle-text"></circle-text>
                </template>

                <template #marqueeText>
                    <marquee-text :reverse="true"></marquee-text>
                    <marquee-text></marquee-text>
                </template>
            </the-hero>
        </template>
    </the-main>
</template>

<script>
import TheHero from "@/components/Hero/TheHero";
import CircleText from "@/components/UI/CircleText";
import HeroTitle from "@/components/Hero/HeroTitle";
import MarqueeText from "@/components/UI/MarqueeText";
import TheMain from "@/components/Main/TheMain";

export default {
    name: 'HomeView',
    components: {
        TheMain,
        MarqueeText,
        HeroTitle,
        CircleText,
        TheHero,
    },
    data() {
      return {
          pageIsLoaded: false,
      }
    },
    methods: {
        stickyHeading(evt) {
            let posLeft = -(window.innerWidth - evt.clientX * 2) / 4;
            let posTop = -(window.innerHeight - evt.clientY * 2) / 4;

            let xPos = 0,
                yPos = 0,
                maxX = 75,
                maxY = 50;

            if (window.matchMedia('max-width: 550px')) {
                maxX = 15;
                maxY = 50;
            }

            if (posLeft > maxX) {
                xPos = maxX;
            } else if (posLeft < -maxX) {
                xPos = -maxX;
            } else {
                xPos = posLeft;
            }

            if (posTop > maxY) {
                yPos = maxY;
            } else if (posTop < -maxY) {
                yPos = -maxY;
            } else {
                yPos = posTop;
            }

            this.$refs.stickyHeader.$el.style.transform = `translate(${xPos}px, ${yPos}px)`;
        },
    },
    mounted() {
        this.pageIsLoaded = true;
    },
    beforeUnmount() {

    }
}
</script>

<style lang="scss">

</style>
