export type CategoryId = 'bollywood' | 'cartoon' | 'viral-songs' | 'sports'

export interface Category {
  id: CategoryId
  label: string
  emoji: string
  blurb: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'bollywood',
    label: 'Bollywood',
    emoji: '🎬',
    blurb: 'Filmy dialogues, iconic actors and dramatic scenes',
  },
  {
    id: 'cartoon',
    label: 'Cartoon',
    emoji: '🧸',
    blurb: 'Childhood cartoons and animated TV shows',
  },
  {
    id: 'viral-songs',
    label: 'Viral Songs',
    emoji: '🎵',
    blurb: 'Songs stuck in your head and music trends',
  },
  {
    id: 'sports',
    label: 'Sports',
    emoji: '🏏',
    blurb: 'Cricket, football and big tournament fandom',
  },
]
