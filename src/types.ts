// Shared types for the app. Keeping them in one place means the contract

// between the UI, the hook and the API layer is written down exactly once.

 

export type CategoryId = 'bollywood' | 'cartoon' | 'viral-songs' | 'sports'

 

export type Category = {

  id: CategoryId

  label: string

  emoji: string

  blurb: string

}

 

// The exact shape the backend returns for each meme (Week 1 "API contract").

export type Meme = {

  id: string

  imageUrl: string

  caption: string

}