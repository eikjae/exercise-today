import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { attendanceService } from "../services/attendanceService";
import moment from 'moment';

const attendanceRouter = Router();

attendanceRouter.post(
  "/attendance",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;

      const whenDate = moment().format('YYYY-MM-DD');
        console.log(whenDate)
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
  }
);

attendanceRouter.get(
  "/attendance/:whenDate",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate } = req.params;
      const attendance = await attendanceService.getAttendance({
        userId,
        whenDate,
      });

      res.status(200).send(attendance);
    } catch (error) {
      next(error);
    }
  }
);

attendanceRouter.delete(
  "/attendance",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      await attendanceService.deleteAttendance({ userId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

export { attendanceRouter };
