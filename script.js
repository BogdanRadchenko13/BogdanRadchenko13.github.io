const Yes = document.querySelector("#Reply-Yes");
const No = document.querySelector("#Reply-No");

const questionText = document.querySelector("#questionSending");
const questionInput = document.querySelector("#questionInput");
const result = document.querySelector("#result");
const btn = document.querySelector("#launch");

let gameLaunch = null;

btn.onclick = function () {
    let YesCounter = 0;
    let NoCounter = 0;
    result.textContent = "";

    Yes.value = 0;
    No.value = 0;

    // Обновление текста вопроса
    const question = questionInput.value.trim();
    questionText.textContent = question ? "Вопрос: " + question : "Вопрос: ???";

    if (gameLaunch) clearInterval(gameLaunch);

    gameLaunch = setInterval(function () {
        YesCounter += Math.random() * 10;
        NoCounter += Math.random() * 10;

        Yes.value = Math.min(YesCounter, 100);
        No.value = Math.min(NoCounter, 100);

        if (YesCounter >= 100 || NoCounter >= 100) {
            clearInterval(gameLaunch);
            if (YesCounter >= 100 && NoCounter >= 100) {
                result.textContent = Math.random() > 0.5 ? "Да" : "Нет";
            } else if (YesCounter >= 100) {
                result.textContent = "Да";
            } else {
                result.textContent = "Нет";
            }
        }
    }, 100);
};
