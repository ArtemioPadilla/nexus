import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

// Helper function to handle async Express route handlers
const asyncHandler = (handler: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

// User registration and authentication
router.post('/register', asyncHandler(authController.register));
router.post('/login', asyncHandler(authController.login));
router.post('/logout', asyncHandler(authController.logout));

// Social media OAuth routes
router.get('/facebook', asyncHandler(authController.facebookAuth));
router.get('/facebook/callback', asyncHandler(authController.facebookCallback));

router.get('/twitter', asyncHandler(authController.twitterAuth));
router.get('/twitter/callback', asyncHandler(authController.twitterCallback));

router.get('/instagram', asyncHandler(authController.instagramAuth));
router.get('/instagram/callback', asyncHandler(authController.instagramCallback));

router.get('/linkedin', asyncHandler(authController.linkedinAuth));
router.get('/linkedin/callback', asyncHandler(authController.linkedinCallback));

// Get connected accounts for a user
router.get('/accounts', asyncHandler(authController.getConnectedAccounts));

export { router as authRoutes };