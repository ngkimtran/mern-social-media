const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

//CREATE
router.post('/create', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() === req.body.userId || req.body.isAdmin) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('Post updated successfully');
    } else {
      return res.status(403).json('You can only update your posts');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() === req.body.userId || req.body.isAdmin) {
      await post.deleteOne();
      res.status(204);
    } else {
      return res.status(403).json('You can only delete your posts');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//LIKE / UNLIKE
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json('Post not found');

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json('Post liked');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('Post unliked');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET A POST
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('userId', {
      _id: 1,
      username: 1,
      email: 1,
    });
    !post && res.status(404).json('Post not found');

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET TIMELINE POSTS
router.get('/timeline/:userId', async (req, res) => {
  let posts = [];
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id }).populate(
      'userId',
      {
        _id: 1,
        username: 1,
        email: 1,
      }
    );
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) =>
        Post.find({ userId: friendId }).populate('userId', {
          _id: 1,
          username: 1,
          email: 1,
        })
      )
    );
    posts = userPosts.concat(...friendPosts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//GET USER POSTS
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id }).populate('userId', {
      _id: 1,
      username: 1,
      email: 1,
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
