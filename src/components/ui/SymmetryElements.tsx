'use client';

import type { CharacterTableData } from '@/types';
import { useExplorerStore } from '@/lib/store';

interface SymmetryElementsProps {
  table: CharacterTableData;
}

const TYPE_COLORS: Record<string, string> = {
  axis: 'text-cyan',
  plane: 'text-accent',
  center: 'text-center',
  improper: 'text-[#A78BFA]',
};

export function SymmetryElements({ table }: SymmetryElementsProps) {
  const visibleElements = useExplorerStore((s) => s.visibleElements);
  const toggleElement = useExplorerStore((s) => s.toggleElement);
  const showAllElements = useExplorerStore((s) => s.showAllElements);
  const hideAllElements = useExplorerStore((s) => s.hideAllElements);
  const playOperation = useExplorerStore((s) => s.playOperation);
  const isAnimating = useExplorerStore((s) => s.isAnimating);

  const showAll = visibleElements.has('__all__');
  const isVisible = (label: string) => showAll || visibleElements.has(label);

  return (
    <div className="term-panel">
      <div className="term-header">
        <span className="flex-1">symmetry elements</span>
        <button
          onClick={showAllElements}
          className="text-[9px] text-accent hover:text-accent-glow transition-colors"
        >
          all
        </button>
        <span className="text-border-bright">|</span>
        <button
          onClick={hideAllElements}
          className="text-[9px] text-[#666] hover:text-foreground transition-colors"
        >
          none
        </button>
      </div>
      <div className="p-3 space-y-1 relative z-10">
        {table.symmetryElements.length === 0 ? (
          <p className="text-[11px] text-[#555]">No symmetry elements (C₁)</p>
        ) : (
          table.symmetryElements.map((el) => (
            <div
              key={el.label}
              className="flex items-center gap-2 group"
            >
              <button
                onClick={() => toggleElement(el.label)}
                className={`w-3 h-3 border flex-shrink-0 transition-colors ${
                  isVisible(el.label)
                    ? 'border-accent bg-accent/30'
                    : 'border-border-bright bg-transparent'
                }`}
              />
              <span
                className={`text-xs font-mono flex-1 ${
                  TYPE_COLORS[el.type] ?? 'text-foreground'
                }`}
              >
                {el.label}
              </span>
              <button
                onClick={() => playOperation(el.label)}
                disabled={isAnimating}
                className="text-[10px] text-[#555] hover:text-cyan opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
              >
                ▶
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
