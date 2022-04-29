import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { dietService } from "../services/dietService";

const dietRouter = Router();
dietRouter.use(login_required);

dietRouter.post("/diet", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { whenDate, type, category, volume } = req.body;

    const newItem = await dietService.addItem({
      userId,
      whenDate,
      type,
      category,
      volume,
    });

    res.status(201).send(newItem);
  } catch (error) {
    next(error);
  }
});

dietRouter.get("/diet/item/:itemId", async function (req, res, next) {
  try {
    const { itemId } = req.params;
    const foundItem = await dietService.getItem({ itemId });

    res.status(200).send(foundItem);
  } catch (error) {
    next(error);
  }
});

dietRouter.get("/diet/items", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { whenDate, type } = req.body;
    const foundList = await dietService.getItemList({
      userId,
      whenDate,
      type,
    });

    res.status(200).send(foundList);
  } catch (error) {
    next(error);
  }
});

dietRouter.put("/diet/item/:itemId", async function (req, res, next) {
  try {
    const { itemId } = req.params;
    const whenDate = req.body.whenDate ?? null;
    const type = req.body.type ?? null;
    const category = req.body.category ?? null;
    const volume = req.body.volume ?? null;

    const toUpdate = { whenDate, type, category, volume };

    const updatedItem = await dietService.setItem({
      itemId,
      toUpdate,
    });

    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
});

dietRouter.delete("/diet/item/:itemId", async function (req, res, next) {
  try {
    const { itemId } = req.params;
    await dietService.deleteItem({ itemId });

    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

dietRouter.delete("/diet/items", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    await dietService.deleteItemList({ userId });

    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

export { dietRouter };
