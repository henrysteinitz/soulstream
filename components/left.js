import { Component } from 'react'
import classnames from 'classnames'

import { AtlasConsumer } from '../lib/atlas/atlas.js'
import Crowd from './crowd.js'
import Logo from './logo.js'
import Lyrics, { LyricsEditor } from './lyrics.js'
import Navigation from './navigation.js'
import Queue from './queue.js'
import Screen from './screen.js'
import SignIn from './signin.js'

import { VerseMap } from '../state/lyrics.js'
import { testLyrics } from '../test/test.js' 

export const showingOptions = {
	chat: 'CHAT',
	lyrics: 'LYRICS',
	lyricsEditor: 'LYRICS_EDITOR',
	queue: 'QUEUE'
}
	
export default class Left extends Component {

	state = {
		showing: showingOptions.chat
	}

	showChat = () => this.setState({
		showing: showingOptions.chat	
	})
	showQueue = () => this.setState({ 
		showing: showingOptions.queue
	})
	showLyrics = () => this.setState({ 
		showing: showingOptions.lyrics
	})
	showLyricsEditor = () => this.setState({ 
		showing: showingOptions.lyricsEditor 
	})

	render() {
		const { 
			nowPlaying, 
			play, 
			pause, 
			isPlaying, 
			signedIn, 
			startSession, 
			currentTrackTime, 
			totalTrackTime, 
			skipTo, 
			screenOn,
			toggleScreen, 
			artist,
			account,
			setTyping,
			addVerse, 
			dragTrackId,
			queueTracks,
			addToQueue,
			stopTrackDragging,
			playQueueTrackByIndex } = this.props
		const { showing } = this.state
		const nowPlayingLyrics = nowPlaying && nowPlaying.verses
		console.log(nowPlayingLyrics)
		return  (
		<AtlasConsumer>
			{ 
				(atlas) => (
					<div className={classnames('left', 'real', { side: screenOn, bar: !screenOn })}>
						<Screen on={screenOn || atlas.isArtist()} 
							play={play} 
							pause={pause} 
							nowPlaying={nowPlaying} 
							artist={artist}
							atlas={atlas} />
						<Navigation pocketMode={!screenOn} 
							toggleScreen={toggleScreen} 
							play={play} 
							pause={pause} 
							isPlaying={isPlaying} 
							nowPlaying={nowPlaying}
							signedIn={signedIn}
							startSession={startSession}
							currentTrackTime={currentTrackTime}
							totalTrackTime={totalTrackTime} 
							skipTo={skipTo}
							account={account}
							showQueue={this.showQueue}
							showLyrics={this.showLyrics}
							showChat={this.showChat}
							showing={showing} />
						{
							(showing === showingOptions.lyricsEditor) && !dragTrackId &&
							<LyricsEditor
								currentTrackTime={currentTrackTime}
								totalTrackTime={totalTrackTime}
								nowPlaying={nowPlaying}
								setTyping={setTyping}
								showLyrics={this.showLyrics}
								addVerse={addVerse}
						 	/>
						}
						{
							(showing === showingOptions.lyrics) && !dragTrackId &&
							<Lyrics 
								lyrics={nowPlayingLyrics} 
								time={currentTrackTime} 
								showLyricsEditor={this.showLyricsEditor} />
						}
						{
							((showing === showingOptions.queue) || dragTrackId) &&
							<Queue
								tracks={queueTracks}
								addToQueue={addToQueue}
								dragTrackId={dragTrackId}
								stopTrackDragging={stopTrackDragging}
								playQueueTrackByIndex={playQueueTrackByIndex}
								ref={(input) => {this.queue = input}}
							 />
						}
						<Crowd
							show={(showing === showingOptions.chat) && !dragTrackId} 
							account={account} 
							song={nowPlaying} />
					</div>
				)
			}
		</AtlasConsumer>
		)
	}
}
