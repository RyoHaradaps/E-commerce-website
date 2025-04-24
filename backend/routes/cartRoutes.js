const express = require('express');
const Cart = require('../models/Cart');
const { verifyToken } = require('../middleware/authMiddleware'); // Middleware to verify JWT

const router = express.Router();

// Get user's cart
router.get('/', verifyToken, async (req, res) => {
  const userId = req.user.id; // Extract userId from the token
  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add item to cart
router.post('/add', verifyToken, async (req, res) => {
  const userId = req.user.id; // Extract userId from the token
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex((item) => item.productId === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.post('/remove', verifyToken, async (req, res) => {
  const userId = req.user.id; // Extract userId from the token
  const { productId } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    cart.items = cart.items.filter((item) => item.productId !== productId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear cart
router.post('/clear', verifyToken, async (req, res) => {
  const userId = req.user.id; // Extract userId from the token
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    cart.items = [];
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;