import Account from './account.js'
import Person from './person.js'

class Group extends Account {
	members: Person[]

	constructor(id: string, name: string, personObj: string, members: object) {
		super(id, name, personObj)
		this.members = members.map(personObj => (
			new Person(personObj.id, personObj.name, personObj.pictureUrl)
		))
	}
}
