import { createHash, randomBytes } from 'crypto';
import prisma from '../../../lib/prisma.js';


export default async (req, res) => {
  const { email, finalHash, salt } = req.body;
  console.log(email)
  const account = await prisma.account.findUnique({
  	where: { email },
  	select: { 
  		passwordHash: true 
  	}
  });

  // Salt and hash the server's password hash. Double hash is used
  // so that we never store raw passwords. The second hash is salted.
  const hash = createHash('sha256');
  hash.update(salt + account.passwordHash);
  const serverFinalHash = hash.digest('hex')
  if (serverFinalHash !== finalHash) {
  	res.status(500)
  }

  const sessionToken = randomBytes(64).toString('hex')
  const accountUpdate = await prisma.account.update({
  	where: { email },
  	data: { sessionToken },
  	select: {
  		id: true,
  		sessionToken: true,
      following: true,
     }
  })
  console.log(accountUpdate)
  res.json(accountUpdate);
}

