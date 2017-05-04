<template>
    <section class="container-fluid full-height price-back">
        <div class="row justify-content-center align-items-end full-height">
            <div class="price-table col-md-10 col-lg-6">
                <h1>Татуировка</h1>
                <p>Час работы мастера стоит <span class="red">4000 руб.</span> Минимальная стоимость работы - 2000 руб.</p>
                <h1>Пирсинг</h1>
                <p>Стоимость пирсинга - <span class="red">от 500р до 1500р.</span> в зависимости от места и сложности.</p>
            </div>
        </div>
    </section>
</template>

<style>
    .price-back {
        background: url('/src/assets/studio.jpg') no-repeat black;
        background-size: cover;
        position: relative;
    }

    .price-table {
        background-color: rgba(0, 0, 0, .8);
        color: white;
        padding: 50px;
        height: 90%;
    }
</style>