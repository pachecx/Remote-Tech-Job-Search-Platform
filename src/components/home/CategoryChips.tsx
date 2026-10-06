interface CategoryChipsProps {
  categories: Array<{ label: string; value: string }>;
  selectedCategory: string;
  onChange: (value: string) => void;
}

export function CategoryChips({ categories, selectedCategory, onChange }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onChange(category.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isSelected
                ? 'border-violet-200 bg-violet-50 text-violet-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
