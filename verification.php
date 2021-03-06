<div class="background" style="height: 550px;"></div>
<div class="container-1230px">
    <div class="container-820px">
        <div class="verification" style="min-height: 970px;">
            <h1>Verification</h1>
            <p class="text-greenfield">Dear customers! Please be aware that all our contacts are listed below.
                If someone contacts you from other account and says he is Cryptex24 director or
                manager please know that he is trying to cheat you!Also please remember we never exchange in messengers
                or social networks!</p>
            <div class="error">
                <p>Извините, на данный момент заявки не выполняются. Зайдите позже.</p>
            </div>
            <div class="whitefield">
                <form class="flexbox">
                    <div class="flexbox__item">
                        <div class="title4">Customer identity (photo id)</div>
                        <p class="text-whitefield">
                            (one of the following: Passport, Drivers License, Military ID)
                        </p>
                        <p class="text-whitefield">Formats Accepted: JPG, PNG, PDF</p>
                    </div>
                    <div class="button-spinner flexbox__item">
                        <img class="spinner" src="static/desktop/images/loader.gif">
                        <div class="upload_controls">
                            <input type="file" id="uploadphoto" class="form__input--hidden">
                            <label for="uploadphoto" class="button button--red button--long">
                                <span class="button__text">Upload</span>
                                <span class="button__image"></span>
                            </label>
                        </div>
                        <div class="verification__status">
                            <span>Uploaded</span>
                        </div>
                    </div>
                </form>
            </div>
            <!-- two buttons example -->
            <div class="whitefield">
                <form class="flexbox">
                    <div class="flexbox__item">
                        <div class="title4">Security code + face</div>
                        <p class="text-whitefield">Formats Accepted: JPG, PNG, PDF</p>
                    </div>
                    <div class="button-spinner flexbox__item">
                        <img class="spinner" src="static/desktop/images/loader.gif">
                        <div class="upload_controls">
                            <input type="file" id="uploadcode" class="form__input--hidden">
                            <label for="uploadcode" class="button button--red button--long">
                                <span class="button__text">Upload</span>
                                <span class="button__image"></span>
                            </label>
                            <button class="button button--red button--long" type="button" id="create_photo">Create online</button>
                        </div>
                        <div class="verification__status">
                            <span>Uploaded</span>
                        </div>
                    </div>
                </form>
                <div class="title4 title4--padded">What is security code?</div>
                <p class="text-whitefield">Please take white list of paper and write: "Topex.me account verification code XXXX-XXXX".
                </p>
            </div>
            <div class="whitefield">
                <h2>How to make a digital copy? (H2)</h2>
                <p class="text-whitefield">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse.
                </p>
                <ul class="squarelist">
                    <li class="squarelist__item">
                        <p class="text-whitefield">Scaner - please scan doc and upload it</p>
                    </li>
                    <li class="squarelist__item">
                        <p class="text-whitefield">Make foto with your smartphone or photocamera</p>
                    </li>
                    <li class="squarelist__item">
                        <p class="text-whitefield">If you have web cam on you PC use online service like: http:webcamtoy.com, http:www.pixect.com,
http:/webcamio.com. If you have web cam on you PC use online service like</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="modal_wrap">
    <div class="modal">
        <div class="modal__snapshots" id="my_camera"></div>
        <div class="modal__snapshots" id="my_result">
            <img src="">
        </div>
        <div class="modal__buttons flexbox">
            <div class="flexbox__item">
                <button class="button button--red modal__button" id="take_snapshot" type="button">Take Snapshot</button>
            </div>
            <div class="button-spinner flexbox__item">
                <img class="spinner" src="static/desktop/images/loader.gif">
                <div class="upload_controls">
                    <button class="button button--red modal__button button--inactive" id="send_snapshot" type="button">Send</button>
                </div>
            </div>
        </div>
        <div class="modal__close"></div>
    </div>
</div>
