import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { calendarService } from "../services/calendarService";
import { body, param } from "express-validator";
import { validatorErrorChecker } from "../middlewares/validator";

const calendarRouter = Router();

calendarRouter.post(
  "/calendar/calories",
  login_required,
  [
    body("whenDate").isDate().withMessage("Enter whenDate in date format"),
    body("calorieArray")
      .isArray({ min: 4, max: 4 })
      .withMessage("calorieArray should be an array of length 4"),
    body("calorieArray.*")
      .isNumeric()
      .withMessage("Calories should be numbers"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate, calorieArray } = req.body;

      const newItem = await calendarService.addCalories({
        userId,
        whenDate,
        calorieArray,
      });

      res.status(201).send(newItem);
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.get(
  "/calendar/calories/:whenDate",
  login_required,
  [
    param("whenDate").isDate().withMessage("Enter whenDate in date format"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate } = req.params;
      const foundList = await calendarService.getCaloriesByDate({
        userId,
        whenDate,
      });

      res.status(200).send(foundList);
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.get(
  "/calendar/calorieslist/:whenMonth",
  login_required,
  [
    param("whenMonth")
      .isDate({ format: "YYYY-MM" })
      .withMessage("Enter whenMonth in date format"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenMonth } = req.params;
      const foundList = await calendarService.getCaloriesByMonth({
        userId,
        whenMonth,
      });

      res.status(200).send(foundList);
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.delete(
  "/calendar/calories",
  login_required,
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      await calendarService.deleteCaloriesList({ userId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.post(
  "/calendar/items",
  login_required,
  [
    body("whenDate").isDate().withMessage("Enter whenDate in date format"),
    body("itemArray.diet")
      .exists()
      .isArray()
      .withMessage("Diet should be Array"),
    body("itemArray.workout")
      .exists()
      .isArray()
      .withMessage("Workout should be Array"),
    body("itemArray.weight")
      .exists()
      .isNumeric()
      .withMessage("Weight should be numbers"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate, itemArray } = req.body;
      console.log("아이템어레이", typeof itemArray);
      const newItem = await calendarService.addItemList({
        userId,
        whenDate,
        itemArray,
      });

      res.status(201).send(newItem);
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.get(
  "/calendar/items/:whenDate",
  login_required,
  [
    param("whenDate").isDate().withMessage("Enter whenDate in date format"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate } = req.params;
      const foundList = await calendarService.getItemList({
        userId,
        whenDate,
      });

      res.status(200).send(foundList);
    } catch (error) {
      next(error);
    }
  }
);

export { calendarRouter };
