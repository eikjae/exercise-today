import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CalendarWeightWarning() {
  const message = "❌몸무게를 입력해주세요!";
  return toast.error(message);
}

export function CalendarSuccess() {
  const message = "⭕등록이 완료되었습니다!";
  return toast.success(message);
}

export function CalendarMealWarning() {
  const message = "❌음식 또는 개수를 채워주세요!";
  return toast.error(message);
}

export function CalendarExerciseWarning() {
  const message = "❌운동 또는 시간을 채워주세요!";
  return toast.error(message);
}

export function CalendarDeleteList(text) {
  const message = `📌${text}(이)가 리스트에서 제외되었습니다!`;
  return toast.success(message);
}

export function MusicSearcgWarning() {
  const message = `❌1곡 이상으로 입력해주세요 !`;
  return toast.error(message);
}
