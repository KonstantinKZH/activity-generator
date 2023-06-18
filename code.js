const body = document.querySelector(".js-page");
const headerNode = document.querySelector(".js-activity-generator__header");
const occupationNode = document.querySelector(".js-activity-generator__occupation");
const btnGoNode = document.querySelector(".js-activity-generator__btn");

const ELEMENTARY_CODE_EMOJI_HEADER = String.fromCodePoint(129300);
const ELEMENTARY_TEXT_HEADER = "Стало скучно?";
const ELEMENTARY_TEXT_OCUPATION = "Найти, чем заняться";

const URL_BORED_API = "http://www.boredapi.com/api/activity/";
const MODIFIER_CHANGE_BACKGROUND = "page_background";
const NEW_TEXT_HEADER = "Ура, теперь не скучно";
const NEW_CODE_EMOJI_HEADER = String.fromCodePoint(128293);

URL_BORED_API

headerNode.innerText = `${ELEMENTARY_CODE_EMOJI_HEADER} ${ELEMENTARY_TEXT_HEADER}`;
occupationNode.innerText = ELEMENTARY_TEXT_OCUPATION;



btnGoNode.addEventListener('click', function(){
    fetch(URL_BORED_API)
        .then(data => data.json())
        .then((res) => {
            changeTitleAndTextActivity();
            getResponseFromServer(res);
    });
});

const changeTitleAndTextActivity = () => {
    body.classList.add(MODIFIER_CHANGE_BACKGROUND);
    headerNode.innerText = `${NEW_TEXT_HEADER} ${NEW_CODE_EMOJI_HEADER}`;
};

const getResponseFromServer = (res) => {
    occupationNode.innerText = res.activity;
};