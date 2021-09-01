import { createHash } from crypto;
import prisma from '../lib/prisma.js';


export default (req, res) => {
  const { email, finalHash, salt } = req.params;
  const { passwordHash } = prisma.account.findOne({
  	where: { email },
  	include: { passwordHash }
  });
  const serverFinalHash = bcrypt.hashSync(passwordHash, salt);

  if (serverFinalHash !== finalHash) {
  	// don't authenticate
  }

  const sessionToken = "asdasdsad"// crypto.randomBytes(64).toString('hex');
  const { passwordHash } = prisma.account.update({
  	where: { email },
  	data: { sessionToken }
  });
  res.status(200).json({ sessionToken });
}

