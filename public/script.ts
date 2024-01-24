type Track = Partial<{
  songName: string
  artist: string
  album: string
}>

const observer = new MutationObserver(() => {
  const songName = document.querySelector('.encore-text-headline-large')
  const artist = document.querySelector('a[data-testid="creator-link"]')
  const album = document.querySelector('span.encore-text-body-small a')

  const trackInfo: Track = {}
  if (songName) {
    trackInfo.songName = songName.textContent ?? undefined
  }
  if (artist) {
    trackInfo.artist = artist.textContent ?? undefined
  }

  if (album) {
    trackInfo.album = album.textContent ?? undefined
  }

  if (Object.keys(trackInfo).length === 3) {
    console.log(trackInfo)
    observer.disconnect()
  }
})

observer.observe(document.body, { childList: true, subtree: true })
