<template>
    <div class="language-select">
        <img :src="require('@/assets/tongue-icon.svg')" alt="">

        <div class="language-select__items">
            <div class="language-select__item language-select__item_1">UA</div>
            <div class="language-select__item language-select__item_2">RU</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LanguageSelect",
}
</script>

<style lang="scss" scoped>
.language-select {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid rgba($color-white, 0.12);
    cursor: pointer;

    &:hover {
        .language-select__item {
            opacity: 1;
            visibility: visible;
        }
    }

    img {
        width: 15px;
        object-fit: contain;
    }

    &__items {
        position: absolute;
        display: flex;
        gap: 8px;
        left: calc(100% + 10px);
    }

    &__item {
        font-weight: 400;
        line-height: 120%;
        transition: 0.5s ease-in-out all;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        background-color: $color-yellow;
        color: $color-white;
        padding: 3px 4px;
        border-radius: 4px;

        &:hover {
            background-color: $color-white;
            color: $color-dark-grey;
        }

        &_2 {
            transition-delay: 0.3s;
        }
    }
}

@include media(1024) {
    .language-select {
        width: 34px;
        height: 34px;

        &__item {
            font-size: 14px;
        }
    }
}
</style>