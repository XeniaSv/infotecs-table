# infotecs-table
## Описание
Тестовое задание в компанию Infotecs на позицию "Разработчик JS"

В проекте есть 2 ветки:
* master - основна ветка разработки
* gh-pages - ветка деплоя для Github pages (использовался плагин [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages)).

Проект собирается автоматически в папку `build` при изменении любого `html`, `scss`, `js` файла

## Реализованные требования:
* На основе имеющегося массива данных, создать таблицу шириной 50% от экрана;
* Колонки в таблице: 
  *	 Имя (firstName), 
  *	 Фамилия (lastName), 
  *	Описание (about),
  *	Цвет глаз (eyeColor).
*	Данные колонки “about” должны отображаться в две строки, остальное обрезаем многоточием (...);
*	Каждая колонка должна иметь свойство сортировки;
*	При клике на строку в соседнем с таблицей DIV’е отобразить форму редактирования данных выбранной строки.
* Добавить возможность показа/скрытия колонок;
*	В колонке “eyeColor” предоставлять данные в виде цвета, сохраняя возможность сортировки по значению.
* Адаптивная верстка

## Github pages
Результат работы, можете посмотреть [здесь](https://xeniasv.github.io/infotecs-table/).

## Инструкции по запуску
* Склонируйте проект на локалькую машину с помощью комманды `git clone https://github.com/XeniaSv/infotecs-table.git`
* Установите [node.js](https://nodejs.org/en/)
* Выполните команду `npm install`
* Выполните команду `gulp`
* Откройте ссылку в браузере `localhost:3000`
* Для деплоя новой версии проекта используйте команду `gulp deploy` (смотрите более подробно в заметках)
