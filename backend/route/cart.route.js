import express from "express";
import { saveCart, getCart } from "../controller/cart.controller.js"

const router = express.Router();

// Route to save the cart
router.post("/savecart", saveCart);

// Route to get the cart
router.get("/getcart/:userId", getCart);


export default router;
