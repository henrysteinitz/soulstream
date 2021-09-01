export default class Account {
	id: string;
	name: string;
	pictureUrl: string;


	constructor(id: string, name: string, pictureUrl: string) {
		this.id = id;
		this.name = name;
		this.pictureUrl = pictureUrl;
	}
}