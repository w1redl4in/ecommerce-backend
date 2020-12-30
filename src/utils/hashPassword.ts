import crypto from 'crypto';

export function hashPassword(
  email: string,
  password: string,
  secret: string
): string {
  return crypto
    .createHash('sha256')
    .update(`${email + password + secret}`)
    .digest('hex');
}
