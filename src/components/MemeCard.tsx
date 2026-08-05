import type { Meme } from '../types'

interface MemeCardProps {
  meme: Meme
  onOpen: (meme: Meme) => void
}

function MemeCard({ meme, onOpen }: MemeCardProps) {
  return (
    <button
      type="button"
      className="gallery-card"
      aria-label={`Open meme: ${meme.caption}`}
      onClick={() => onOpen(meme)}
    >
      <img
        className="gallery-card__image"
        src={meme.imageUrl}
        alt={meme.caption}
        loading="lazy"
      />
      <span className="gallery-card__caption">{meme.caption}</span>
    </button>
  )
}

export default MemeCard
