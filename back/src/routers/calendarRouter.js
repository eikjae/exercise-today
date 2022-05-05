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
      .withMessage("Check the calorieArray length"),
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
    param("whenDate").isDate().withMessage("Enter whenDate in date format"),
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
  "/calendar/calories/:itemId",
  login_required,
  [
    param("itemId").isDate().withMessage("Enter whenDate in date format"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      await calendarService.deleteCalories({ itemId });

      res.status(200).end();
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
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate, itemArray } = req.body;

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

calendarRouter.post(
  "/calendar/items",
  login_required,
  async function (req, res, next) {
    try {
      const { currentUserId: userId } = req;
      const { whenDate, itemArray } = req.body;

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
