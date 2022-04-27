import assert from "assert";

function filterAuth(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  return true;
}

export function music_filtered_validation(body) {
  const { orderby, filter, limit } = body;
  assert(
    typeof orderby === "string" && orderbyAuth(orderby),
    "oderby is not valid"
  );
  assert(typeof filter === "object", "filter is not valid");
  assert(
    typeof limit === "number" && Math.ceil(limit) >= 1,
    "limit is not valid"
  );
  const { Tempo, Danceability, Year, Energy } = filter;
  assert(
    typeof Tempo === "object" && Tempo.length === 2 && filterAuth(Tempo),
    "Tempo is not valid"
  );
  assert(
    typeof Danceability === "object" &&
      Danceability.length === 2 &&
      filterAuth(Danceability),
    "Danceability is not valid"
  );
  assert(
    typeof Year === "object" && Year.length === 2 && filterAuth(Year),
    "Year is not valid"
  );
  assert(
    typeof Energy === "object" && Energy.length === 2 && filterAuth(Energy),
    "Energy is not valid"
  );
  const [minTempo, maxTempo] = filter.Tempo;
  const [minDanceability, maxDanceability] = filter.Danceability;
  const [minYear, maxYear] = filter.Year;
  const [minEnergy, maxEnergy] = filter.Energy;

  const TempoMax = 126.0;
  const DnceMax = 1.0;
  const YearMax = 2020;
  const EnergyMax = 1.0;
  const TempoMin = 110.0;
  const DnceMin = 0.62;
  const YearMin = 2014;
  const EnergyMin = 0.7;
  assert(minTempo >= TempoMin, `minTempo should be upper than ${TempoMin}`);
  assert(maxTempo <= TempoMax, `maxTempo should be downer than ${TempoMax}`);
  assert(
    minDanceability >= DnceMin,
    `minDanceability should be upper than ${DnceMin}`
  );
  assert(
    maxDanceability <= DnceMax,
    `maxDanceability should be downer than ${DnceMax}`
  );
  assert(minYear >= YearMin, `minYear should be upper than ${YearMin}`);
  assert(maxYear <= YearMax, `maxYear should be downer than ${YearMax}`);

  assert(minEnergy >= EnergyMin, `minEnergy should be upper than ${EnergyMin}`);
  assert(
    maxEnergy <= EnergyMax,
    `maxEnergy should be downer than ${EnergyMax}`
  );
  for (const [key, value] of Object.entries(filter)) {
    assert(
      value[0] <= value[1],
      `${key}'s minValue should position on left index in array`
    );
  }
}

function titleMerge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0].title.toLowerCase() < right[0].title.toLowerCase()) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

export function titleMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  return titleMerge(titleMergeSort(left), titleMergeSort(right));
}

function yearMerge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0].year < right[0].year) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
export function yearMergeSort(arr) {
  if (arr.length <= 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return yearMerge(yearMergeSort(left), yearMergeSort(right));
}
export function randomize(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export function deepCopy(arr) {
  let result = [...arr].map((child) => ({ ...child }));
  return result;
}

export function nAuth(n) {
  if (n <= 0) {
    return false;
  }
  return true;
}

export function returnNarr(n, arr) {
  if (len(arr) < n) {
    return arr;
  } else {
    return arr.slice(0, n);
  }
}
function orderbyAuth(orderby) {
  const orders = ["title", "-title", "year", "-year", "random"];
  if (!orders.includes(orderby)) {
    return false;
  }
  return true;
}

export function getRequiredComponentMusics(arr) {
  const result = arr.map((music) => {
    const { id, title, artists, artist_ids, year, image_link } = music;
    return {
      id,
      title,
      artists,
      artist_ids,
      year,
      image_link,
    };
  });
  return result;
}
