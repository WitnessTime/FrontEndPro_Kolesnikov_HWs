# 011.lesson_20

[Link](https://witnesstime.github.io/FrontEndPro_Kolesnikov_HWs/011.lesson_20/index.html)

Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
```
let ladder = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};
```
Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
```
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```
Змініть код методів `up`, `down` і `showStep` таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
```
ladder.up().up().down().showStep(); // 1
```
Такий підхід широко використовується в бібліотеках JavaScript.