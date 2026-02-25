'use client';

import type { CharacterTableData } from '@/types';
import { getModeBreakdown, getTotalModes } from '@/lib/chemistry/vibrations';
import { useExplorerStore } from '@/lib/store';

interface ModeBreakdownProps {
  table: CharacterTableData;
  nAtoms: number;
  linear: boolean;
}

const ACTIVITY_COLORS: Record<string, string> = {
  ir: 'text-ir',
  raman: 'text-raman',
  both: 'text-both',
  silent: 'text-silent',
};

const ACTIVITY_LABELS: Record<string, string> = {
  ir: 'IR',
  raman: 'Raman',
  both: 'IR + Raman',
  silent: 'Silent',
};

export function ModeBreakdown({ table, nAtoms, linear }: ModeBreakdownProps) {
  const highlightedIrrep = useExplorerStore((s) => s.highlightedIrrep);
  const setHighlightedIrrep = useExplorerStore((s) => s.setHighlightedIrrep);

  const modes = getModeBreakdown(table, nAtoms, linear);
  const totalModes = getTotalModes(nAtoms, linear);

  // Filter to only vibrational modes (exclude pure translations/rotations)
  const vibModes = modes.filter(
    (m) => !m.isTranslation || m.activity !== 'ir'
  );

  return (
    <div className="term-panel" role="region" aria-label="Vibrational mode breakdown">
      <div className="term-header">
        <span className="flex-1">mode breakdown</span>
        <span className="text-[9px] text-[#555]">{totalModes} modes</span>
      </div>
      <div className="p-3 space-y-1 relative z-10">
        <div className="text-[10px] text-[#555] mb-2">
          3({nAtoms}) - {linear ? '5' : '6'} = {totalModes} vibrational modes
        </div>

        {table.irreps.map((irrep) => {
          const mode = modes.find((m) => m.irrep.label === irrep.label);
          if (!mode) return null;

          const isHighlighted = highlightedIrrep === irrep.label;
          const colorClass = ACTIVITY_COLORS[mode.activity];
          const activityLabel = ACTIVITY_LABELS[mode.activity];

          // Mark translation/rotation irreps
          const labels: string[] = [];
          if (mode.isTranslation) labels.push('T');
          if (mode.isRotation) labels.push('R');

          return (
            <div
              key={irrep.label}
              className={`flex items-center gap-2 px-2 py-1 text-xs font-mono transition-colors cursor-pointer ${
                isHighlighted ? 'bg-accent/10' : 'hover:bg-surface-2'
              }`}
              onMouseEnter={() => setHighlightedIrrep(irrep.label)}
              onMouseLeave={() => setHighlightedIrrep(null)}
            >
              <span className="text-foreground w-12">{irrep.label}</span>
              <span className={`${colorClass} flex-1`}>{activityLabel}</span>
              {labels.length > 0 && (
                <span className="text-[10px] text-[#555]">
                  [{labels.join(',')}]
                </span>
              )}
              {irrep.degeneracy > 1 && (
                <span className="text-[10px] text-cyan">
                  x{irrep.degeneracy}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
