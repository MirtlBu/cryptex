<form class="main-exchange">
    <div class="container-1230px">
        <div class="container-820px">
            <h1>Title with main keyword</h1>
            <div class="error">
                <p>Извините, на данный момент заявки не выполняются. Зайдите позже.</p>
            </div>
            <div class="main-exchange-field">
                <div class="main-exchange-field__item">
                    <label class="form--error">
                        <div class="title3 title3--light">Отдаёте</div>
                        <input type="text" class="form__input form__input--main-exchange">
                    </label>
                    <select id="select-pay">
                        <option value="bitcoin" data-value="rub" data-icon="/static/desktop/images/icon-bank.png">Bitcoin</option>
                        <option value="webmoney" data-value="eur" data-icon="/static/desktop/images/icon-currency.png">Webmoney</option>
                        <option value="paypal" data-value="usd" data-icon="/static/desktop/images/icon-bank.png">Paypal</option>
                        <option value="perfectmoney" data-value="eur" data-icon="/static/desktop/images/icon-currency.png">Perfectmoney</option>
                    </select>
                </div>
                <div class="main-exchange-field__item from-to-1"></div>
                <div class="main-exchange-field__item">
                    <label>
                        <div class="title3 title3--light">Получаете</div>
                        <input type="text" class="form__input form__input--main-exchange">
                    </label>
                    <select id="select-take">
                        <option value="bitcoin" data-value="rub" data-icon="/static/desktop/images/icon-bank.png">Bitcoin</option>
                        <option value="webmoney" data-value="eur" data-icon="/static/desktop/images/icon-currency.png">Webmoney</option>
                        <option value="paypal" data-value="usd" data-icon="/static/desktop/images/icon-bank.png">Paypal</option>
                        <option value="perfectmoney" data-value="eur" data-icon="/static/desktop/images/icon-currency.png">Perfectmoney</option>
                    </select>
                </div>
            </div>
            <ul class="main-exchange-info">
                <li class="main-exchange-info__item">
                    <div class="main-exchange-info__title">Комиссия за перевод</div>
                    <div class="main-exchange-info__amount">2 usd</div>
                </li><!--
                --><li class="main-exchange-info__item">
                    <div class="main-exchange-info__title">Комиссия</div>
                    <div class="main-exchange-info__amount">2% (0.902 BTC)</div>
                </li><!--
                --><li class="main-exchange-info__item">
                    <div class="main-exchange-info__title">Курс</div>
                    <div class="main-exchange-info__amount">33.959475</div>
                </li>
            </ul>
            <div>
                <label>
                    <div class="title3 title3--light">Ваш e-mail</div>
                    <input type="text" class="form__input form__input--main-exchange form__input--305px">
                </label>
                <button type="submit" class="button button--red float-right">
                    <span class="button__text">Обменять сейчас</span>
                    <span class="button__image"></span>
                </button>
                <img class="loader--big float-right" src="static/desktop/images/loader.gif">
            </div>
        </div>
    </div>
</form>

