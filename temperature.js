let temp = [15, 13, 4, 0, -5, 10, -2];
let pos = 0;
let neg = 0;
let zero = 0;
let avr = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > 0) {
    pos++;
  } else if (temp[i] < 0) {
    neg++;
  } else {
    zero++;
  }

  avr += temp[i];
}
avr /= temp.length;
alert(pos);
alert(neg);
alert(zero);

alert(avr);
