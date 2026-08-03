import { CATEGORIES } from '../categories.ts'
import type { Category, CategoryId } from '../categories.ts'

interface CategoryCardProps {
  category: Category
  active: boolean
  disabled: boolean
  onSelect: (id: CategoryId) => void
}

function CategoryCard({ category, active, disabled, onSelect }: CategoryCardProps) {
  const handleClick = () => onSelect(category.id)

  return (
    <button
      type="button"
      className={`category-card${active ? ' category-card--active' : ''}`}
      disabled={disabled}
      aria-pressed={active}
      onClick={handleClick}
    >
      <span className="category-card__emoji" aria-hidden="true">
        {category.emoji}
      </span>
      <span className="category-card__label">{category.label}</span>
      <span className="category-card__blurb">{category.blurb}</span>
    </button>
  )
}

interface CategoryPickerProps {
  activeCategory: CategoryId | null
  loading: boolean
  generate: (id: CategoryId) => void
}

function CategoryPicker({ activeCategory, loading, generate }: CategoryPickerProps) {
  return (
    <section className="category-picker" aria-labelledby="category-picker-heading">
      <h2 className="category-picker__heading" id="category-picker-heading">
        Meme categories
      </h2>
      <div className="category-grid">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            active={activeCategory === category.id}
            disabled={loading}
            onSelect={generate}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryPicker
