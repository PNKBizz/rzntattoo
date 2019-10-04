<template>
    <section class="container-fluid full-height price-back">
        <div class="row justify-content-center align-items-end full-height">
            <div class="price-table col-md-10 col-lg-6">
                <h1>Сколько стоит татуировка?</h1>
                <p>Здравствуйте, <span class="red">2000р.</span> минимальная стоимость, далее оплата по сеансам. Час работы - <span class="red">3000р.</span>, 2 часа - <span class="red">6000р.</span>, 3х часовой сеанс - <span class="red">8500р.</span> На большие сеансы действует скидка, например 5-ти часовой сеанс уже будет стоить <span class="red">13000р.</span>, а не <b>15000р.</b> Длительность сеанса будет зависеть от размера, детализации и сложности рисунка, и места нанесения.</p>
                <h1>А пирсинг?</h1>
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

    .price-table p {
        line-height: 2;
    }
</style>