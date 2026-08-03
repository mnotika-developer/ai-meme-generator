import { useState } from 'react'
import MemeCard from './MemeCard.tsx'
import MemeModal from './MemeModal.tsx'
import type { Meme } from '../api/memes.ts'

interface MemeGalleryProps {
  memes: Meme[]
  title: string
  onRegenerate: () => void
}

function MemeGallery({ memes, title, onRegenerate }: MemeGalleryProps) {
  const [selected, setSelected] = useState<Meme | null>(null)

  const handleDownloadAll = () => {
    memes.forEach((meme, index) => {
      const link = document.createElement('a')
      link.href = meme.imageUrl
      link.download = `meme-${index + 1}.png`
      link.click()
    })
  }

  return (
    <section className="gallery">
      <div className="gallery__bar">
        <h3 className="gallery__title">{title}</h3>
        <div className="gallery__actions">
          <button
            type="button"
            className="gallery__button gallery__button--primary"
            onClick={onRegenerate}
          >
            Regenerate
          </button>
          <button
            type="button"
            className="gallery__button gallery__button--ghost"
            onClick={handleDownloadAll}
          >
            Download all
          </button>
        </div>
      </div>
      <div className="gallery__grid">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} onOpen={setSelected} />
        ))}
      </div>
      {selected && <MemeModal meme={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default MemeGallery
