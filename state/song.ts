import Account from './account.js';
import Album from './album.js';

export default class Song {
	id: number;
	title: string;
	artists: Account[];
	album: Album;
	audioSrc: string;


	constructor(songObject: Object) {
		this.id = songObject.id;
		this.title = songObject.title;
		this.artists = songObject.artist;
		this.album = songObject.album;
		this.audioSrc = songObject.audioSrc;
	}
}