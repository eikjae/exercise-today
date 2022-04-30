import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { workoutService } from "../services/workoutService";

const workoutRouter = Router();

workoutRouter.post("/workout", login_required, async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { whenDate, category, name, time } = req.body;

    const newItem = await workoutService.addItem({
      userId,
      whenDate,
      category,
      name,
      time,
    });

    res.status(201).send(newItem);
  } catch (error) {
    next(error);
  }
});

workoutRouter.get(
  "/workout/item/:itemId",
  login_required,
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      const foundItem = await workoutService.getItem({ itemId });

      res.status(200).send(foundItem);
    } catch (error) {
      next(error);
    }
  }
);

workoutRouter.get(
  "/workout/items/date",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate } = req.body;
      const foundList = await workoutService.getItemList({
        userId,
        whenDate,
      });

      res.status(200).send(foundList);
    } catch (error) {
      next(error);
    }
  }
);

workoutRouter.put(
  "/workout/item/:itemId",
  login_required,
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      const category = req.body.category ?? null;
      const name = req.body.name ?? null;
      const time = req.body.time ?? null;

      const toUpdate = { whenDate, category, name, time };

      const updatedItem = await workoutService.setItem({
        itemId,
        toUpdate,
      });

      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
);

workoutRouter.delete(
  "/workout/item/:itemId",
  login_required,
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      await workoutService.deleteItem({ itemId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

workoutRouter.delete(
  "/workout/items",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      await workoutService.deleteItemList({ userId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

export { workoutRouter };
