import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
	const { artistId, accountId } = req.body
	const unfollow = await prisma.artistFollow.delete({
		where: {
			accountId_artistId: { accountId, artistId }
		}
	})

	return res.json(unfollow)
}
