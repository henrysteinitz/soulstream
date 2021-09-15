import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  const { authorId, trackId, sessionToken, message } = req.body;
  const comment = await prisma.trackComment.create({
    data: { 
      message,
      duration: 5,
      track: {
        connect: { id: trackId }
      },
      account: {
        connect: { id: authorId }
      }
    },
  })
  res.json(comment)
}