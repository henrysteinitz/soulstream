export class Verse {
	lines: Array<string>
	timeInterval: Array<number>

	constructor(lines, timeInterval) {
		this.lines = lines
		this.timeInterval = timeInterval
	}

	start() {
		return this.timeInterval[0]
	}

	end() {
		return this.timeInterval[1]
	}

	contains(time) {
		return this.start() <= time && this.end() >= time
	}

	map(cb) {
		return this.lines.map(cb)
	}
}

// Get ready for linetime
export class VerseMap {
	verses: Array<Verse>

	constructor(orderedVerses, preprocessing=true) {
		console.log('versemap')
		console.log(orderedVerses)
		if (preprocessing && orderedVerses) {
			this.verses = orderedVerses.map(x => {
				return new Verse(x.body.split('\n'), [x.startTime, x.endTime])
			}) 
		} else {
			this.verses = orderedVerses
		}
	}

	insert(verse) {
		let lastVerse = true
		this.verses.forEach((v, i) => {
			if (verse.start() < v.start()) {
				this.verses.splice(i, 0, verse)
				lastVerse = false
				return
			}
		}) 
		if (lastVerse) {
			this.verses.push(verse)
		}
	}

	get(time) {
		//bs search not really nes.
		this.verses.forEach((verse) => {
			if (verse.contains(time)) {
				return verse.lines
			}
		})
	}

	getIndex(time) {
		//bs search not really nes.
		this.verses.forEach((verse, i) => {
			if (verse.contains(time)) {
				return i
			}
		})
	}

	map(cb) {
		return this.verses.map(cb)
	}
}