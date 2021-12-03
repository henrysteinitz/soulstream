import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
	const { artistId, accountId } = req.body
	const follow = await prisma.artistFollow.create({
		data: {
			artistId,
			accountId
		}
	})

	return res.json(follow)
}
