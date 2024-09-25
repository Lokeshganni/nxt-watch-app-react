const BOOKMARKS_KEY = 'bookmarkedVideos'

export const getBookmarks = () => {
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY)
  return bookmarks ? JSON.parse(bookmarks) : []
}

export const addBookmark = video => {
  let bookmarks = getBookmarks()
  if (!bookmarks.find(b => b.id === video.id)) {
    bookmarks = [...bookmarks, video]
    console.log('bookmark added')
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
  }
}

export const removeBookmark = jobId => {
  let bookmarks = getBookmarks()
  bookmarks = bookmarks.filter(b => b.id !== jobId)
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
}
