import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { calendarService } from "../services/calendarService";

const calendarRouter = Router();
calendarRouter.use(login_required);

calendarRouter.post(
  "/calendar",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate, calorieArray } = req.body;

      const newItem = await calendarService.addItem({
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
  "/calendar/calories/date",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate } = req.body;
      const foundList = await calendarService.getCalories({
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
  "/calendar/items/date",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate } = req.body;
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

calendarRouter.put(
  "/calendar",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate, calorieArray } = req.body;

      const updatedItem = await calendarService.setItem({
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
  "/calendar/:itemId",
  login_required,
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      await calendarService.deleteItem({ itemId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

calendarRouter.delete(
  "/calendar/items",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      await calendarService.deleteItemList({ userId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

export { calendarRouter };
