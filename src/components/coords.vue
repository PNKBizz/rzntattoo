<template>
    <section class="container-fluid full-height content-section">
        <div class="row full-height">
            <div class="content-section__back col-12 no-padding" id="yandexMap"></div>
        </div>
        <div class="content-section__text">
            <h2>Мы находимся по адресу:</h2>
            <p>Первомайский проспект, 9<br>
                8 (960) 575-29-50, 51-03-32<br>
                <a href="https://vk.com/rzntatu">РЗН Тату</a> (запись ВКонтакте)</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'info',
        data() {
            return {
                coord: [54.62896654088406,39.731893822753904]
            }
        },
        mounted() {
            ymaps.ready(init.bind(this));
            var myMap,
                myPlacemark;

            function init(){
                myMap = new ymaps.Map("yandexMap", {
                    center: this.coord,
                    zoom: 18
                });

                myPlacemark = new ymaps.Placemark(this.coord, {
                    hintContent: 'Тату-студия «РЗН Тату»',
                    balloonContent: 'Тату-студия «РЗН Тату». +7 (960) 575-29-50'
                });

                myMap.geoObjects.add(myPlacemark);
            }
        }
    }
</script>

<style>
    .content-section__back {
        margin: 0;
    }

    .content-section__text {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, .8);
        padding: 50px;
    }
</style>