import Vue from 'vue'

export const EventBus = new Vue({
	data: {
		masters: [],
		description: {
			_shwed: {
				name: 'Сергей "Швед" Чечев',
				full: 'У хорошего человека отношения с женщинами всегда складываются трудно. А я человек хороший. Заявляю без тени смущения, потому что гордиться тут нечем. От хорошего человека ждут соответствующего поведения. К нему предъявляют высокие требования. Он тащит на себе ежедневный мучительный груз благородства, ума, прилежания, совести, юмора. А затем его бросают ради какого-нибудь отъявленного подонка. И этому подонку рассказывают, смеясь, о нудных добродетелях хорошего человека.'
			},
			yydee: {
				name: 'Дина',
				full: 'Нет тяжелее работы, чем стараться выглядеть красивой с восьми утра до полуночи и это чистая правда! Я занимаюсь перманентным макияжем с 2016 года и это то, что мне действительно по душе. Как сказала Джексон Браун: "Найди работу, которая тебе нравится, - так ты добавишь пять дней к каждой неделе."'
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
			yula: {
				name: 'Юля Евсеенко',
				full: 'Я занимаюсь татуировками 4 года. Никогда прежде не думала, что это станет частью моей жизни, но вышло так, что тату стало самым важным в моей жизни. Это не просто моя профессия, это и хобби и способ самовыражения. Это именно тот случай, когда ты любишь свою работу и идешь на неё с огромной радостью в душе. Касаясь стилей, в которых я работаю, могу сказать, что я делаю все стили, во всех есть что-то своё прекрасное, но для себя я выделяю реализм, так как он является самым сложным, а я всегда стремлюсь к развитию себя и своих навыков.'
			},
			yan: {
				name: 'Ян Фоменко',
				full: 'Все началось с 2012 года, когда зашел первый раз в студию РЗН и сделал свою первую татуировку. Затем я заинтересовался художественной стороной этого мира. Купив свою первую машинку я начал царапать кожу своих друзей. Художественного образования у меня нет, когда я решил заниматься татуировкой я купил несколько книг по рисунку и начал учиться самостоятельно. Для меня самое главное - настойчивость и практика. В татуировке предпочитаю работать в стиле реализм.'
			}
		},
		menuIsOpened: false,
		siteIsntLoaded: true
	}
});