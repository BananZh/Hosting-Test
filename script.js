let val = prompt("Введите значение: ");

alert(`Исходное значение: "${val}" (тип: ${typeof val})
Number:  ${Number(val)} (тип: ${typeof Number(val)})
String:  "${String(val)}" (тип: ${typeof String(val)})
Boolean: ${Boolean(val)} (тип: ${typeof Boolean(val)})`);