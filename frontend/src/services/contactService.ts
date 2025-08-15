// frontend/src/services/contactService.ts
import { apiService } from './apiService';

// Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface ContactStats {
  totalSubmissions: number;
  responseRate: number;
  averageResponseTime: string;
  recentSubmissions: Array<{
    id: string;
    name: string;
    company: string;
    submittedAt: string;
    responded: boolean;
  }>;
}

class ContactService {
  /**
   * Submit contact form
   */
  async submitContact(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await apiService.post<ContactResponse>('/contact', data);
      return response;
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      throw error;
    }
  }

  /**
   * Get contact statistics (admin only)
   */
  async getContactStats(): Promise<ContactStats> {
    try {
      const response = await apiService.get<ContactStats>('/contact/stats');
      return response;
    } catch (error) {
      console.error('Failed to fetch contact stats:', error);
      throw error;
    }
  }

  /**
   * Validate email format
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate form data
   */
  validateContactForm(data: ContactFormData): Record<string, string> {
    const errors: Record<string, string> = {};

    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (data.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters';
    }

    // Email validation
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!this.validateEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Company validation
    if (!data.company.trim()) {
      errors.company = 'Company is required';
    } else if (data.company.trim().length < 2) {
      errors.company = 'Company must be at least 2 characters';
    } else if (data.company.trim().length > 100) {
      errors.company = 'Company must be less than 100 characters';
    }

    // Message validation
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (data.message.trim().length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }

    return errors;
  }

  /**
   * Sanitize form data
   */
  sanitizeContactForm(data: ContactFormData): ContactFormData
