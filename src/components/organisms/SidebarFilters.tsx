import React from 'react';
import { FilterGroup } from '../molecules/FilterGroup';

const CATEGORY_OPTIONS = [
  { label: 'Sofás',     count: 3 },
  { label: 'Comedores', count: 4 },
  { label: 'Mesas',     count: 3 },
  { label: 'Sillas',    count: 3 },
  { label: 'Sillones',  count: 3 },
  { label: 'Camas',     count: 4 },
];

interface SidebarFiltersProps {
  activeCategories: Set<string>;
  onToggleCategory: (cat: string) => void;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  activeCategories,
  onToggleCategory,
}) => {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-32 space-y-10">
        <FilterGroup
          title="Categorías"
          options={CATEGORY_OPTIONS.map((opt) => ({
            ...opt,
            checked: activeCategories.has(opt.label),
          }))}
          onToggle={onToggleCategory}
        />
      </div>
    </aside>
  );
};
