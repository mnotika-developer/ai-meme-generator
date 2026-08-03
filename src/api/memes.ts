import type { CategoryId } from '../categories.ts'

export interface Meme {
  id: string
  imageUrl: string
  caption: string
}

export async function generateMemes(category: CategoryId): Promise<Meme[]> {
  const res = await fetch('/api/memes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category }),
  })

  if (!res.ok) {
    throw new Error("Couldn't generate memes. Please try again.")
  }

  return (await res.json()).memes as Meme[]
}
