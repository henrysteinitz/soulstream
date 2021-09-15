import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  // TODO: create isAêthenticated helper
  const { trackId } = req.body 
  const comments = await prisma.trackComment.findMany({ 
    where: { trackId }
  })
  res.json(comments)
}
