import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOeder,userOrder,verifyOrder,listOrders,updateStatus } from "../controllers/orderController.js"

const orderRouter = express.Router();
orderRouter.post("/place",authMiddleware,placeOeder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrder)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;