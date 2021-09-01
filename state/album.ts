import Account from './account.js'

export default class Album {
	id: number;
	title: string;
	artUrl: string;
	artist: Account;	

	constructor(id: number, title: string, artUrl: string, artist: Account) {
		this.id = id;
		this.title = title
		this.artUrl = artUrl
		this.artist = artist
	}

}