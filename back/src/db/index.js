import mongoose from "mongoose";
import { User } from "./models/User";
import { Music } from "./models/Music";
import { Exercise } from "./models/Exercise";
import { Food } from "./models/Food";
import { TargetExercise } from "./models/TargetExercise";
import { Like } from "./models/Like";
import { Diet } from "./models/Diet";
import { Workout } from "./models/Workout";
import { Attendance } from "./models/Attendance";
import { Friend } from "./models/Friend";
import { DietImage } from "./models/DietImage";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + error)
);

export {
  User,
  Exercise,
  TargetExercise,
  Food,
  Music,
  Like,
  Diet,
  Workout,
  Attendance,
  Friend,
  DietImage,
};
