import Account from '../state/account.js'
import Album from '../state/album.js'
import Song from '../state/song.js'
import { Verse, VerseMap } from '../state/lyrics.js'

// Artists
export const blake = new Account(1, "James Blake", "test_data/artists/birb.jpeg");
export const bird = new Account(2, "Andrew Bird", "test_data/artists/birb.jpeg");
export const hen = new Account(3, "Photography", "test_data/artists/hen.jpeg");

// Albums
export const overgrown = new Album(1, "Overgrown", "test_data/album_art/overgrown.jpg", blake);
export const freeform = new Album(2, "Freeform Eight", "test_data/album_art/sign2.png", hen);

// Songs
export const retrograde = new Song(1, "Retrograde", blake, overgrown, "test_data/music/retrograde.m4a");
export const signature = new Song(2, "Signature", hen, freeform, "test_data/music/sig.m4a");

// Florence - Loyle Carter
// Into The Wide - Delta Spirit
// HIT EM WHERE IT HURTS - Paw Paw Rod
// Coco Blood - Celeste 



// // lyrics
// export const testLyrics  = new VerseMap([
// 	new Verse(["You're on your own",
// "In a world you've grown",
// "Few more years to go",
// "Don't let the hurdle fall",
// "So be the girl you loved",
// "Be the girl you loved"], [49, 91]),
// 	new Verse(["I'll wait",
// "So show me while you're strong",
// "Ignore everybody else",
// "We're alone now"], [91, 120]),

// ], false)
