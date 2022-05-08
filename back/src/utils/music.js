import assert from "assert";

const TempoMax = 126.0;
const TempoMin = 110.0;
const DnceMax = 1.0;
const DnceMin = 0.62;
const YearMax = 2020;
const YearMin = 2014;
const EnergyMax = 1.0;
const EnergyMin = 0.7;
const CaloriesPerLbMax = 3.7;
const CaloriesPerLbMin = 0.4;

const TempoFactor = 0.3;
const DnceFactor = 0.3;
const YearFactor = 0.1;
const EnergyFactor = 0.3;

function filterAuth(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  return true;
}

function orderbyAuth(orderby) {
  const orders = ["title", "-title", "year", "-year", "random"];
  if (!orders.includes(orderby)) {
    return false;
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

export function calculateProperFactor(caloriesPerLb) {
  const properFactor = {
    Tempo: 0,
    Dnce: 0,
    Energy: 0,
  };
  const CaloriesPerLbGap = CaloriesPerLbMax - CaloriesPerLbMin;
  const TempoMulFactor = (TempoMax - TempoMin) / CaloriesPerLbGap;
  const EnergyMulFactor = (EnergyMax - EnergyMin) / CaloriesPerLbGap;
  const DnceMulFactor = (DnceMax - DnceMin) / CaloriesPerLbGap;

  const CaloriesGap = caloriesPerLb - CaloriesPerLbMin;
  properFactor.Tempo = CaloriesGap * TempoMulFactor + TempoMin;
  properFactor.Dnce = CaloriesGap * DnceMulFactor + DnceMin;
  properFactor.Energy = CaloriesGap * EnergyMulFactor + EnergyMin;

  return properFactor;
}
function caculateMusicScore(properFactor, music) {
  const { tempo, year, energy, danceability } = music;
  const tempoScore =
    (100 -
      Math.abs(properFactor.Tempo - tempo) * (100 / (TempoMax - TempoMin))) *
    TempoFactor;
  const yearScore =
    (100 - (YearMax - year) * (100 / (YearMax - YearMin))) * YearFactor;
  const energyScore =
    (100 -
      Math.abs(properFactor.Energy - energy) *
        (100 / (EnergyMax - EnergyMin))) *
    EnergyFactor;
  const DnceScore =
    (100 -
      Math.abs(properFactor.Dnce - danceability) *
        (100 / (DnceMax - DnceMin))) *
    DnceFactor;
  return tempoScore + yearScore + energyScore + DnceScore;
}
export function getScoredMusics(musics, properFactor) {
  const Musics = deepCopy(musics);
  const scoredMusics = Musics.map((music) => {
    music.score = caculateMusicScore(properFactor, music);
    return music;
  });
  return scoredMusics;
}

function scoreMerge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0].score > right[0].score) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

export function scoreMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  return scoreMerge(scoreMergeSort(left), scoreMergeSort(right));
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

function deepCopy(arr) {
  let result = [...arr].map((child) => ({ ...child }));
  return result;
}

export function getRequiredComponentMusics(arr) {
  const result = arr.map((music) => {
    const { musicId, title, artists, artist_ids, year, image_link } = music;
    return {
      musicId,
      title,
      artists,
      artist_ids,
      year,
      image_link,
    };
  });
  return result;
}
