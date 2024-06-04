const express = require("express");

quotes = [
    "Сила – не в бабках. Ведь бабки – уже старые.",
    "Из проведённых 64-х боёв у меня 64 победы. Все бои были с тенью.",
    "Взял нож - режь, взял дошик - ешь.",
    "Я живу, как карта ляжет. Ты живёшь, как мамка скажет.",
    "Никогда не сдавайтесь, идите к своей цели! А если будет сложно – сдавайтесь.",
    "Если заблудился в лесу, иди домой.",
    "Запомни: всего одна ошибка – и ты ошибся.",
    "Я вообще делаю что хочу. Хочу импланты — звоню врачу.",
    "В жизни всегда есть две дороги: одна — первая, а другая — вторая.",
    "Мы должны оставаться мыми, а они – оними.",
    "Делай, как надо. Как не надо, не делай.",
    "Сниму квартиру. Порядок на районе гарантирую.",
    "Работа — это не волк. Работа — ворк. А волк — это ходить.",
    "Не будьте эгоистами, в первую очередь думайте о себе!",
    "Марианскую впадину знаешь? Это я упал.",
    "Как говорил мой дед, «Я твой дед».",
    "Без подошвы тапочки — это просто тряпочки.",
    "Слово - не воробей. Вообще ничто не воробей, кроме самого воробья.",
    "Жи-ши пиши от души.",
];

 
const app = express();
app.set("view engine", "hbs");

app.use("/static", express.static("static"));
 
app.use("/", function(_, response){
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    response.render("index.hbs", {"quote": quote});
});

app.listen(3000);
