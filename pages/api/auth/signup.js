import crypto from 'crypto';
import prisma from '../../../lib/prisma.js';

export default async (req, res) => { 
  const { email, passwordHash } = req.body;
  const sessionToken = crypto.randomBytes(64).toString('hex');
  const account = await prisma.account.create({
  	data: { 
  		email: req.body.email, 
  		passwordHash: req.body.passwordHash,
  		sessionToken
  	}
  });
  res.send(account);
}
