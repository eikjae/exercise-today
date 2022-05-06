import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { dietImageService } from "../services/dietImageService";
import { param } from "express-validator";
import { validatorErrorChecker } from "../middlewares/validator";

const dietImageRouter = Router();
const { dietImageUpload } = require("../utils/s3");

dietImageRouter.post(
  "/dietimage",
  login_required,
  dietImageUpload.single("dietImg"),
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate, type } = req.body;
      const imgurl = req.file.location;

      const newItem = await dietImageService.addItem({
        userId,
        whenDate,
        type,
        imgurl,
      });

      res.status(201).send(newItem);
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.put(
  "/dietimage/item/:itemId",
  login_required,
  dietImageUpload.single("dietImg"),
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      const imgurl = req.file.location;

      const toUpdate = { imgurl };

      const updatedItem = await dietImageService.setItem({
        itemId,
        toUpdate,
      });

      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.delete(
  "/dietimage/item/:itemId",
  login_required,
  [
    param("itemId").isUUID(4).withMessage("Not valid uuid format"),
    validatorErrorChecker,
  ],
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      await dietImageService.deleteItem({ itemId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.delete(
  "/dietimage/items",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      await dietImageService.deleteItemList({ userId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

export { dietImageRouter };
