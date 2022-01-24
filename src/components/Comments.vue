<template>
    <div class="c__box">
        <div class="c__box-title">Отзывы покупателей <span>(105)</span></div>
        <div class="user__comment">
            <div class="user">
                <div class="user__name">Турсунов Асрор</div>
                <div class="stars">
                    <star-rating :rating="3" />
                </div>
            </div>
            <p>Качество ткани хорошее, но если вы предпочитаете оверсайз, выбирайте размер меньше вашего, например, слишком свободные рукава.</p>
            <div class="date__sale">
                <div class="date">30.04.2021</div>
            </div>
        </div>
        <div class="user__comment">
            <div class="user">
                <div class="user__name">Ахмад Собиров</div>
                <div class="stars">
                    <star-rating :rating="5" />
                </div>
            </div>
            <p>Ткань по своей фактуре - это не ткань, которая создает очень мелкие морщинки, занимает все ваше тело, качество проявляется в любом виде.</p>
            <div class="date__sale">
                <div class="date">21.04.2021</div>
            </div>
        </div>
        <div class="user__comment">
            <div class="user">
                <div class="user__name">Улугбек Мустаков</div>
                <div class="stars">
                    <star-rating :rating="4" />
                </div>
            </div>
            <p>Полноразмерное качество красивое</p>
            <div class="date__sale">
                <div class="date">26.04.2021</div>
            </div>
        </div>
        <button type="submit" class="comment__btn">Показать больше комментариев</button>
    </div>
</template>
