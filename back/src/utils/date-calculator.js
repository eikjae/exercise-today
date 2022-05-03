const d = new Date();
const year = d.getFullYear(); // 년
const month = d.getMonth(); // 월
const day = d.getDate(); // 일

function rewrite(whenDate) {
  const year = whenDate.getFullYear();
  const month = whenDate.getMonth() + 1;
  const date = whenDate.getDate();

  return `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
}

// 오늘 날짜 구하기
export function todayDate() {
  let whenDate = new Date(year, month, day);
  return rewrite(whenDate);
}

// 일주일 전 구하기
export function lastWeek() {
  let whenDate = new Date(year, month, day - 7);
  return rewrite(whenDate);
}

// 1개월 전 구하기
export function lastMonth() {
  let whenDate = new Date(year, month - 1, day);
  return rewrite(whenDate);
}

// 3개월 전 구하기
export function lastThreeMonth() {
  let whenDate = new Date(year, month - 3, day);
  return rewrite(whenDate);
}

// 6개월 전 구하기
export function lastSixMonth() {
  let whenDate = new Date(year, month - 6, day);
  return rewrite(whenDate);
}

// 1년 전 구하기
export function lastYear() {
  let whenDate = new Date(year - 1, month, day);
  return rewrite(whenDate);
}
