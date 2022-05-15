const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You can only update your account');
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You can only delete your account');
  }
});

//GET A USER
router.get('/', async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;

    !user && res.status(404).json('User not found');

    res.status(200).json(other);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//FOLLOW
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!currentUser.following.includes(req.params.id)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json('User has been followed');
      } else {
        res.status(403).json('You already followed this user');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You cannot follow yourself');
  }
});

//UNFOLLOW
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (currentUser.following.includes(req.params.id)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json('User has been unfollowed');
      } else {
        res.status(403).json('You are not following this user');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You cannot unfollow yourself');
  }
});

module.exports = router;
