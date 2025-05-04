import express from 'express';
import * as socialController from '../controllers/social.controller';

const router = express.Router();

// Helper function to handle async Express route handlers
const asyncHandler = (handler: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

// Feed management
router.get('/feed', asyncHandler(socialController.aggregatedFeed));
router.get('/feed/:platform', asyncHandler(socialController.platformFeed));

// Content posting
router.post('/post', asyncHandler(socialController.createPost));
router.post('/post/schedule', asyncHandler(socialController.schedulePost));
router.get('/post/scheduled', asyncHandler(socialController.getScheduledPosts));
router.delete('/post/scheduled/:id', asyncHandler(socialController.cancelScheduledPost));

// Analytics
router.get('/analytics/overview', asyncHandler(socialController.getAnalyticsOverview));
router.get('/analytics/:platform', asyncHandler(socialController.getPlatformAnalytics));
router.get('/analytics/post/:postId', asyncHandler(socialController.getPostAnalytics));

// Platform-specific actions
router.post('/facebook/comment', asyncHandler(socialController.facebookComment));
router.post('/twitter/retweet', asyncHandler(socialController.twitterRetweet));
router.post('/instagram/like', asyncHandler(socialController.instagramLike));
router.post('/linkedin/share', asyncHandler(socialController.linkedinShare));

export { router as socialRoutes };