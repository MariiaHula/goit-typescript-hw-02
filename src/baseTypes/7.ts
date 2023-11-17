/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
  
}

const isWeekend = (day: DayOfWeek):boolean => {
 return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

let result = isWeekend(DayOfWeek.Friday);// false
console.log(result)


export {};