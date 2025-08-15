// backend/src/controllers/ContactController.ts
import { Request, Response } from 'express';
import { ContactService } from '../services/ContactService';
import { EmailService } from '../services/EmailService';
import { logger } from '../utils/logger';
import type { ContactFormData } from '../types/contact';

export class ContactController {
  private contactService: ContactService;
  private emailService: EmailService;

  constructor() {
    this.contactService = new ContactService();
    this.emailService = new EmailService();
  }

  /**
   * Submit contact form
   */
