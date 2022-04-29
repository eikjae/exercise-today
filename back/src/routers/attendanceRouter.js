import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { attendanceService } from "../services/attendanceService";

const attendanceRouter = Router();
attendanceRouter.use(login_required);

attendanceRouter.post("/attendance", async function (req, res, next) {
  try {
    const userId = req.currentUserId;

    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const date = ("0" + today.getDate()).slice(-2);
    const whenDate = `${year}-${month}-${date}`;

    const { weight } = req.body;

    const newAttendance = await attendanceService.addAttendance({
      userId,
      whenDate,
      weight,
    });

    res.status(201).send(newAttendance);
  } catch (error) {
    next(error);
  }
});

attendanceRouter.get("/attendance", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { whenDate } = req.body;
    const attendance = await attendanceService.getAttendance({
      userId,
      whenDate,
    });

    res.status(200).send(attendance);
  } catch (error) {
    next(error);
  }
});

attendanceRouter.delete("/attendance", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    await attendanceService.deleteAttendance({ userId });

    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

export { attendanceRouter };
