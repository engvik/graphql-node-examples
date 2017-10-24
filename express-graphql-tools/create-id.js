import crypto from 'crypto';

export default function createId() {
  return crypto.randomBytes(10).toString('hex');
}
