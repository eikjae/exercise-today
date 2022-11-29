import moment from "moment";

// 오늘 날짜 구하기
export function todayDate() {
  return moment().format("YYYY-MM-DD");
}

// 일주일 전 구하기
export function lastWeek() {
  return moment().subtract(7, "days").format("YYYY-MM-DD");
}

// 1개월 전 구하기
export function lastMonth() {
  return moment().subtract(1, "month").format("YYYY-MM-DD");
}

// 3개월 전 구하기
export function lastThreeMonth() {
  return moment().subtract(3, "month").format("YYYY-MM-DD");
}

// 6개월 전 구하기
export function lastSixMonth() {
  return moment().subtract(6, "month").format("YYYY-MM-DD");
}

// 1년 전 구하기
export function lastYear() {
  return moment().subtract(1, "year").format("YYYY-MM-DD");
}
