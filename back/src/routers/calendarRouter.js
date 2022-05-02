import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { calendarService } from "../services/calendarService";

const calendarRouter = Router();

calendarRouter.post(
  "/calendar/calories",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
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
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
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
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
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

calendarRouter.put(
  "/calendar/calories",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate, calorieArray } = req.body;

      const updatedItem = await calendarService.setCalories({
        userId,
        whenDate,
        calorieArray,
      });

      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.delete(
  "/calendar/calories/:itemId",
  login_required,
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      console.log(itemId);
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
      const userId = req.currentUserId;
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
      const userId = req.currentUserId;
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
      const userId = req.currentUserId;
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
