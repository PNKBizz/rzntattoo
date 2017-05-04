import Vue from 'vue'

export const EventBus = new Vue({
    data: {
        masters: [],
        description: {
            shwed: 'Сергей "Швед" Чечев',
            denis: 'Денис Григорьев',
            misha: 'Михаил Журавлев',
            vaganov: 'Алексей Ваганов',
            yurok: 'Юрок',
            nastya: 'Настя',
        }
    }
});
