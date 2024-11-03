let n = prompt("Enter day of week (1-7): ");
if (isNaN(n) || n < 1 || n > 7) {
  alert("Введіть день тижня правильно!");
} else {
  let lang = prompt("Enter language (en, ua, ru): ");
  let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
  let ua = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
    "неділя",
  ];
  let ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  switch (lang) {
    case "en":
      alert(en[n - 1]);
      break;
    case "ru":
      alert(ru[n - 1]);
      break;
    case "ua":
      alert(ua[n - 1]);
      break;
    default:
      alert("Введіть мову правильно!");
  }
}
