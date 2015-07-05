<div class="bookmark">
    <div class="logo">
        <div class="square-bunch"></div>
        <div class="logo__text">
            <span class="logo__text--black">Cryptex<span class="logo__text--gray">24</span></span>

        </div>
        <div class="square-line-short"></div>
    </div>
    <div class="bookmark__nav">
        <div href="#" class="bookmark__navlinks bookmark__navlinks--active" data-nav="reserve">Reserve</div>
        <div href="#" class="bookmark__navlinks bookmark__navlinks--midl" data-nav="best">Best deals</div>
        <div href="#" class="bookmark__navlinks" data-nav="exchange">Exchange</div>
    </div>
    <div class="bookmark__tab">

        <div class="bookmark__item bookmark__item--reserve bookmark__item--active">
            <ul>
                <li class="bookmark__row bookmark__row--header">
                    <div class="bookmark__col align-left"><span>Name</span></div>
                    <div class="bookmark__col align-right"><span>Reserve</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Webmoney</span></div>
                    <div class="bookmark__col align-right"><span>14000 usd</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Perfectmoney</span></div>
                    <div class="bookmark__col align-right"><span>45000 usd</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Bitcoin</span></div>
                    <div class="bookmark__col align-right"><span>500 usd</span></div>
                </li>
            </ul>
        </div>

        <div class="bookmark__item bookmark__item--best">
            <ul>
                <li class="bookmark__row bookmark__row--header">
                    <div class="bookmark__col align-left"><span>From</span></div>
                    <div class="bookmark__col align-left"><span>To</span></div>
                    <div class="bookmark__col align-right"><span>Percent</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Webmoney</span></div>
                    <div class="bookmark__col align-left"><span>Perfectmoney</span></div>
                    <div class="bookmark__col align-right"><span>5%</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Perfectmoney</span></div>
                    <div class="bookmark__col align-left"><span>Qiwi</span></div>
                    <div class="bookmark__col align-right"><span>3%</span></div>
                </li>
                <li class="bookmark__row bookmark__row--body">
                    <div class="bookmark__col align-left"><span>Bitcoin</span></div>
                    <div class="bookmark__col align-left"><span>Sberbank</span></div>
                    <div class="bookmark__col align-right"><span>2%</span></div>
                </li>
            </ul>
        </div>
        <?php
            $paysys = [
                "qiwi" => "Qiwi",
                "wm" => "Webmoney",
                "pm" => "Perfectmoney",
                "wu" => "Western Union",
                "sb" => "Sberbank",
                "vtb24" => "VTB 24",
                "paypal" => "Paypal",
            ];
            $exchange = [
                "wm" => ["qiwi", "pm", "paypal", "wu"],
                "pm" => ["wm", "paypal"],
                "qiwi" => ["wu", "wm", "pm", "sb", "vtb24", "paypal"],
                "sb" => ["qiwi", "wm", "wu", "pm", "paypal"]
            ];
            $table = [];
            $i = 0;

            foreach ($exchange as $from => $to_arr) {
                if ($i == count($table))
                    array_push($table, [null, []]);
                $table[$i][0] = $from;
                foreach ($to_arr as $j => $to) {
                    if ($j == count($table))
                        array_push($table, [null, []]);
                    $table[$j][1][$from] = $to;
                }
                $i++;
            }
        ?>

        <div class="bookmark__item bookmark__item--exchange">
            <ul>
                <li class="bookmark__row bookmark__row--header">
                    <div class="bookmark__col align-left"><span>From</span></div>
                    <div class="bookmark__col align-right"><span>To</span></div>
                </li>
                <?php
                $from_first = $table[0][0];
                foreach ($table as $index => $row) { ?>
                    <li class="bookmark__row bookmark__row--body <?php echo !$row[0] && !$row[1][$from_first] ? 'bookmark__row--hidden' : '' ?>">
                        <div class="bookmark__col align-left">
                            <span class="exchange-from <?php echo $index == 0 ? 'exchange-from--active' : '' ?>"
                                data-from="<?php echo $row[0] ?>">
                                <?php echo $paysys[$row[0]] ?>
                            </span>
                        </div>
                        <div class="bookmark__col align-right" data-cur>
                            <?php foreach ($row[1] as $from => $to) { ?>
                                <a href="<?php echo '#' . $from . '-' . $to ?>"
                                    class="underlined exchange-to <?php echo $from == $from_first ? 'exchange-to--active' : '' ?>"
                                    data-from="<?php echo $from ?>">
                                    <?php echo $paysys[$to] ?>
                                </a>
                            <?php } ?>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
    <form class="terms__bookmark">
        <div class="title4 title4--red terms__title">Get free bitcoin!</div>
        <div class="terms__text">
            <p>Registered users can receive free daily Bitcoin of 0.10 – 0.50 USD (not more than once in 24 hours).For last 24 hours we paind 432 bonuses. Perfect Money </p>
        </div>
        <div class="error error--bookmark">
            <p>Извините, на данный момент заявки не выполняются. Зайдите позже.</p>
        </div>
        <input class="form__input form__input--whitefield form__input--terms" placeholder="Type your bitcoin address"></input>
        <button class="button button--turquoise" type="submit">Get it!</button>
    </form>
</div>