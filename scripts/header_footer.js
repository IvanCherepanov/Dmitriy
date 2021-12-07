
function fillHeader() {
    let Container = document.querySelector(".header-container");
    Container.innerHTML = `
    <div class="main_background">
    <div class="wrapper">
    <div class="header">
    <div class="main_menu">
    <div class="logo">
    <a href="index.html"><img class="logo_item" src="/img/logo.png" alt="Logo"></a>
    </div>
    <div class="menu">
    <div class="menu_left">
    <div class="menu_left_item">
    Москва
    </div>
    <div class="menu_left_item"><a href="">+7(927)-128-39-50</a></div>
    </div>
    <div class="menu_right">
    <div class="menu_right_item"><a href="">Журнал</a></div>
    <div class="menu_right_item"><a href="">Акции</a></div>
    <div class="menu_right_item"><a href="">Доставка</a></div>
    <div class="menu_right_item"><a href="">Магазины</a></div>
    <div class="menu_right_item"><a href="">Обратная связь</a></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
}

function fillHeader_1() {
    let Container = document.querySelector(".menu_bottom");
    Container.innerHTML = `
    <div id="nav">
    <div class="nav_menu">
    <p>Каталог товаров</p>
    <div class="nav_menu_list">
    <div class="nav_menu_list_item"><a href="catalog_1.html" class="nev_item">Радиоуправляемые игрушки</a></div>
    <div class="nav_menu_list_item"><a href="catalog_2.html" class="nev_item">Развивающие игрушки</a></div>
    <div class="nav_menu_list_item"><a href="catalog_3.html" class="nev_item">Настольные игры</a></div>
    <div class="nav_menu_list_item"><a href="catalog_4.html" class="nev_item">Интерактивные игрушки</a></div>
    <div class="nav_menu_list_item"><a href="catalog_5.html" class="nev_item">Мягкие игрушки</a></div>
    <div class="nav_menu_list_item"><a href="catalog_6.html" class="nev_item">Роботы и трансформеры</a></div>
    <div class="nav_menu_list_item"><a href="catalog_7.html" class="nev_item">Головоломки, пазлы</a></div>
    <div class="nav_menu_list_item"><a href="catalog_8.html" class="nev_item">Конструкторы</a></div>
    <div class="nav_menu_list_item"><a href="catalog_9.html" class="nev_item">Игровые наборы</a></div>
    </div>
    </div>
    </div>
    
    <form class="find" method="get" action="./search.html">
        <input class="find_item" type="text" onfocus="this.value=''" value="Поиск по товарам" name="query">
        <button type="submit_1">Поиск</button>
    </form>
    <div class="menu_right_main">
    <a href="entry.html">
    <div class="menu_right_main_item">
    <img src="img/войти.png" alt="">
    <div class="header_item_text">Войти</div>
    </div>
    </a>
    <a href="favorites.html">
    <div class="menu_right_main_item">
    <img src="img/избранное.png" alt="">
    <div class="header_item_text">Избранное</div>
    </div>
    </a>
    <a href="basket.html">
    <div class="menu_right_main_item">
    <img src="img/корзина.png" alt="">
    <div class="header_item_text">Корзина</div>
    </div>
    </a>
    </div>

    `
}



function fillFooter() {
    let Container = document.querySelector(".footer");
    Container.innerHTML = `
    <div class="main_footer">
    
    <div class="news">
    <div class="news_text">
    Хочу быть в курсе акций и новинок
    </div>
    <div class="news_main">
    <div class="news_main_item">
    <input class="news_main_item_in" type="text" onfocus="this.value=''" value="Мой e-mail">
    </div>
    <div class="news_main_item">
    <div class="news_main_item_button">
    Подписаться
    </div>
    </div>
    </div>
    </div>
    
    
    <div class="news">
    <div class="news_text">
    Включить уведомления в браузере
    </div>
    <div class="news_main">
    <div class="news_main_item">
    Новости, акции и все самые важные события для вас!
    </div>
    <div class="news_main_item">
    <div class="news_main_item_button">
    Включить
    </div>
    </div>
    </div>
    </div>
    
    <div class="contacts">
    
    <div class="main_contacts">
    <p class="test_item">Контакты</p>
    <p><a href="">Адреса магазинов</a></p>
    <p><a href="">+7(927)-128-39-50</a></p>
    <p>Москва</p>
    <div class="main_contacts_links">
    <a href=""><img src="img/vk.png" alt=""></a>
    <a href=""><img src="img/telegram.png" alt=""></a>
    <a href=""><img src="img/YOUTUBE.png" alt=""></a>
    <a href=""><img src="img/TWITTER.png" alt=""></a>
    <a href=""><img src="img/Facebook.png" alt=""></a>
    </div>
    </div>
    
    <div class="menu_contacts">
    <div class="menu_contacts_item">
    <p><a href="">Журнал</a></p>
    <p><a href="">Акции</a></p>
    <p><a href="">Информация</a></p>
    <p><a href="">Доставка</a></p>
    <p><a href="">Гарантия</a></p>
    <p><a href="">Кредит и рассрочка</a></p>
    
    
    </div>
    <div class="menu_contacts_item">
    <p><a href="">Сервисные центры</a></p>
    <p><a href="">Услуги</a></p>
    <p><a href="">Обзоры</a></p>
    </div>
    <div class="menu_contacts_item">
    <p><a href="">Новости</a></p>
    <p><a href="">Клуб</a></p>
    <p><a href="">Вакансии</a></p>
    </div>
    
    </div>
    </div>
    
    
    <div class="bottom_footer">
    <div class="bottom_footer_line">
    <p>Курсовая работa</p>
    <p class="bottom_footer_line_year">2021</p>
    </div>
    </div>
    
    
    `
}

