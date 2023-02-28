# 004.lesson_09

[Link](https://witnesstime.github.io/FrontEndPro_Kolesnikov_HWs/004.lesson_09/index.html)

Переписати код нижче з використанням конструкції switch…case

```
let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}
```