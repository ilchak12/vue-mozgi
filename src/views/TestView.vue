<template>
    <the-main>
        <the-hero>
            <hero-title>
                Hello, I`m single page :(
            </hero-title>
        </the-hero>
    </the-main>
</template>

<script>
import TheHero from "@/components/Hero/TheHero";
import HeroTitle from "@/components/Hero/HeroTitle";
import TheMain from "@/components/Main/TheMain";

export default {
    components: {
        HeroTitle,
        TheHero,
        TheMain
    }
}
</script>