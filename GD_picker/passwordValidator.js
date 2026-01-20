/**
 * Password Validator
 * Validates passwords based on various security criteria
 */

class PasswordValidator {
  constructor(options = {}) {
    this.minLength = options.minLength || 8;
    this.maxLength = options.maxLength || 128;
    this.requireUppercase = options.requireUppercase !== false;
    this.requireLowercase = options.requireLowercase !== false;
    this.requireNumbers = options.requireNumbers !== false;
    this.requireSpecialChars = options.requireSpecialChars !== false;
    this.specialChars = options.specialChars || '!@#$%^&*()_+-=[]{}|;:,.<>?';
  }

  /**
   * Validate password and return detailed feedback
   * @param {string} password - Password to validate
   * @returns {Object} - { isValid: boolean, errors: array, strength: string, score: number }
   */
  validate(password) {
    const errors = [];
    let score = 0;

    if (!password) {
      return {
        isValid: false,
        errors: ['Password is required'],
        strength: 'None',
        score: 0
      };
    }

    // Check length
    if (password.length < this.minLength) {
      errors.push(`Password must be at least ${this.minLength} characters long`);
    } else {
      score += 20;
    }

    if (password.length > this.maxLength) {
      errors.push(`Password must not exceed ${this.maxLength} characters`);
    }

    // Check uppercase
    if (this.requireUppercase && !/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    } else if (/[A-Z]/.test(password)) {
      score += 20;
    }

    // Check lowercase
    if (this.requireLowercase && !/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    } else if (/[a-z]/.test(password)) {
      score += 20;
    }

    // Check numbers
    if (this.requireNumbers && !/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    } else if (/[0-9]/.test(password)) {
      score += 20;
    }

    // Check special characters
    const specialCharRegex = new RegExp(`[${this.specialChars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}]`);
    if (this.requireSpecialChars && !specialCharRegex.test(password)) {
      errors.push(`Password must contain at least one special character: ${this.specialChars}`);
    } else if (specialCharRegex.test(password)) {
      score += 20;
    }

    // Determine strength
    let strength = 'Weak';
    if (score >= 80) strength = 'Very Strong';
    else if (score >= 60) strength = 'Strong';
    else if (score >= 40) strength = 'Moderate';
    else if (score >= 20) strength = 'Fair';

    return {
      isValid: errors.length === 0,
      errors: errors,
      strength: strength,
      score: score
    };
  }

  /**
   * Check if password contains common patterns (optional security check)
   * @param {string} password - Password to check
   * @returns {Object} - { hasCommonPatterns: boolean, patterns: array }
   */
  checkCommonPatterns(password) {
    const commonPatterns = [
      /password/i,
      /123456/,
      /qwerty/i,
      /admin/i,
      /letmein/i,
      /welcome/i,
      /monkey/i,
      /dragon/i
    ];

    const foundPatterns = commonPatterns
      .filter(pattern => pattern.test(password))
      .map(pattern => pattern.source);

    return {
      hasCommonPatterns: foundPatterns.length > 0,
      patterns: foundPatterns
    };
  }

  /**
   * Generate a strong random password
   * @param {number} length - Length of password (default: 16)
   * @returns {string} - Generated password
   */
  generateStrongPassword(length = 16) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = this.specialChars;

    const allChars = lowercase + uppercase + numbers + special;
    let password = '';

    // Ensure at least one character from each category
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Fill the rest randomly
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }
}

// Export for use in modules or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PasswordValidator;
}
