import Vue from 'vue'

const EventBus = new Vue({
    data: {
        masters: [],
        description: {
            _shwed: {
                name: 'Сергей "Швед" Чечев',
                full: 'Информация обновляется...'
            },
            misha: {
                name: 'Михаил Журавлев',
                full: 'Процесс татуирования я впервые увидел в 15 лет. Уже тогда меня заинтересовал этот процесс, меня всегда привлекали нательные рисунки. Первое оборудование так же как и первая татуировка, были в 17 лет, это была машинка из моторчика и струны)) сразу нашлись подопытные, кто хотел татух. Первое хорошее оборудование преобрел в 21, уже тогда я знал понимал то, что тату станет частью моей жизни. Плотно работаю с 2010года. Как и задумывалось, тату в конце концов стало моим образом жизни, кругом общения, чем-то творческим, интересным, развивающим меня как личность и мастера. Для себя предпочитаю работать в таких стилях как олдскул, ньюскул, японская татуировка, реализм)) Что-то особого в этих выделить не могу, все по своему хороши и сложны))'
            },
            kolya: {
                name: 'Николай "Табатка" Ковалев',
                full: 'Занимаюсь татуировкой 5 лет. Предпочтение отдаю традиционному стилю, в котором и рисую большую часть картинок, но не в коей мере не брезгаю и другими направлениями. В татуировке максимально ценю креатив и оригинальность, а уж если это все замешано на сатире всем случается счастье.'
            },
            nos: {
                name: 'Алексей Коршунов',
                full: 'Занимаюсь татуировкой 2 года. Предпочитаю работать в традиционных стилях: олдскул, японщина и дотворк, так же черно-белый реализм. Предпочитаю работать по своим эскизам, а не заниматься копированием чужих работ. Любая тату- это самовыражение как ее носителя, так и мастера, каждая должна быть индивидуальной.'
            },
            tim: {
                name: 'Тимофей Кравченко',
                full: 'Огромный опыт работы в тату-индустрии, поэтому ему можно смело доверить любые проекты. Предпочитает работать в стиле реализм, но прекрасно справится и с любым другим стилем.'
            },
            tigran: {
                name: 'Тигран',
                full: 'Информация обновляется...'
            }
        },
        menuIsOpened: false,
        siteIsntLoaded: true
    }
})

export default EventBus
