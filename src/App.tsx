import Header from './components/Header.tsx'
import EmptyState from './components/EmptyState.tsx'
import CategoryPicker from './components/CategoryPicker.tsx'
import Spinner from './components/Spinner.tsx'
import MemeGallery from './components/MemeGallery.tsx'
import { CATEGORIES } from './categories.ts'
import { useMemeGenerator } from './hooks/useMemeGenerator.ts'

function App() {
  const { memes, activeCategory, loading, error, generate } = useMemeGenerator()

  const hasMemes = memes.length > 0
  const activeLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label ?? null
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <section className="pitch">
          <h2 className="pitch__title">Instant memes, zero effort</h2>
          <p className="pitch__text">
            Choose a vibe and get five ready-to-share memes in seconds.
          </p>
        </section>
        <CategoryPicker
          activeCategory={activeCategory}
          loading={loading}
          generate={generate}
        />
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        {loading && (
          <Spinner label={`Cooking up ${activeLabel ?? ''} memes…`} />
        )}
        {!loading && hasMemes && (
          <MemeGallery
            memes={memes}
            title={activeLabel ?? 'Your memes'}
            onRegenerate={() => activeCategory && generate(activeCategory)}
          />
        )}
        {!loading && !hasMemes && !error && <EmptyState />}
      </main>
      <footer className="app-footer">
        Built for the AI Bootcamp · Captions by AI via OpenRouter · Images by
        memegen.link
      </footer>
    </div>
  )
}

export default App
