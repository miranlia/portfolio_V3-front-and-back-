// backend/src/routes/contactRoutes.ts
import { Router } from 'express';
import { body } from 'express-validator';
import { ContactController } from '../controllers/ContactController';
import { validateRequest } from '../middleware/validateRequest';
import { asyncHandler } from '../middleware/asyncHandler';

const router = Router();
const contactController = new ContactController();

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('company')
    .trim()
    .notEmpty()
    .withMessage('Company is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Company must be between 2 and 100 characters'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
];

/**
 * POST /api/contact
 * Submit contact form
 */
router.post(
  '/',
  contactValidation,
  validateRequest,
  asyncHandler(contactController.submitContact)
);

/**
 * GET /api/contact/stats
 * Get contact form submission stats (for admin)
 */
router.get(
  '/stats',
  asyncHandler(contactController.getContactStats)
);

export default router;
