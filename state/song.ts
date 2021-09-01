import Account from './account.js';
import Album from './album.js';

export default class Song {
	id: number;
	title: string;
	artist: Account;
	album: Album;
	audioSrc: string;


	constructor(id: number, title: string, artist: Account, album: Album, audioSrc: string) {
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.audioSrc = audioSrc;
	}
}