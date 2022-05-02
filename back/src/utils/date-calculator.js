export function todayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);
  const whenDate = `${year}-${month}-${date}`;

  return whenDate;
}

export function getDateStr(myDate) {
  let year = myDate.getFullYear();
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();

  month = month < 10 ? "0" + String(month) : month;
  day = day < 10 ? "0" + String(day) : day;

  return year + "-" + month + "-" + day;
}

export function lastWeek() {
  let d = new Date();
  let dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - 7);

  return getDateStr(d);
}
