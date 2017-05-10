<template>
    <section :class="['gallery-overlay', {isActive}]">
        <button type="button" class="close" aria-label="Close" @click="closeCallback">
            <span aria-hidden="true">&times;</span>
        </button>
        <button type="button" class="prev btn btn-link" @click="closeCallback"></button>
        <button type="button" class="next btn btn-link" @click="closeCallback"></button>
        <img :src="'/src/assets/gallery/' + master.name + '/' + picture" class="gallery-overlay__item">
    </section>
</template>

<script>
    export default {
        data() {
            return {
                overlayIsActive: this.isActive
            }
        },
        props: {
            isActive: Boolean,
            picture: String,
            master: Object,
            closeCallback: Function
        }
    }
</script>

<style lang="scss">
    .gallery-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
        z-index: 99;
        display: none;

        &.isActive {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__item {
            height: 80vh;
        }

        button.close {
            position: fixed;
            top: 0;
            right: 0;
            color: darkred;
            font-size: 2em;
            padding: 15px 20px;
            margin: 20px;
            background-color: white;
            opacity: 1;
            box-sizing: border-box;
            border-radius: 50%;
        }

        button.prev {
            color: white;
            font-size: 6em;
            position: fixed;
            left: 5%;
            top: 50%;
            transform: translateY(-50%);

            &:after {
                content: '\2039';
            }
        }

        button.next {
            color: white;
            font-size: 6em;
            position: fixed;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);

            &:after {
                content: '\203A';
            }
        }
    }
</style>

