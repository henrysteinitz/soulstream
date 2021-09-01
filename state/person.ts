export default class Person {
	id: string;
	name: string;
	picture_url: string;


	constructor(id: string, name: string, picture_url: string) {
		this.id = id;
		this.name = name;
		this.picture_url = picture_url;
	}
}