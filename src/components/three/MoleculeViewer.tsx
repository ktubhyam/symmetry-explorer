'use client';

import { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { Group } from 'three';

import type { MoleculeData, CharacterTableData } from '@/types';
import { useExplorerStore } from '@/lib/store';
import { useSymmetryAnimation } from '@/hooks/useSymmetryAnimation';
import { Atom3D } from './Atom3D';
import { Bond3D } from './Bond3D';
import { SymmetryAxis } from './SymmetryAxis';
import { SymmetryPlane } from './SymmetryPlane';
import { InversionCenter } from './InversionCenter';

interface MoleculeSceneProps {
  molecule: MoleculeData;
  table: CharacterTableData;
}

function MoleculeScene({ molecule, table }: MoleculeSceneProps) {
  const groupRef = useRef<Group>(null);
  const visibleElements = useExplorerStore((s) => s.visibleElements);

  useSymmetryAnimation(groupRef, table.symmetryElements);

  const atomPositions = useMemo(
    () =>
      molecule.atoms.map(
        (a) => [a.x, a.y, a.z] as [number, number, number]
      ),
    [molecule]
  );

  // Check which symmetry elements to show
  const showAll = visibleElements.has('__all__');
  const isVisible = (label: string) => showAll || visibleElements.has(label);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#C9A04A" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#00D8FF" />

      {/* Molecule group (animated by symmetry operations) */}
      <group ref={groupRef}>
        {/* Bonds */}
        {molecule.bonds.map(([a, b], i) => (
          <Bond3D
            key={`bond-${i}`}
            start={atomPositions[a]}
            end={atomPositions[b]}
          />
        ))}

        {/* Atoms */}
        {molecule.atoms.map((atom, i) => (
          <Atom3D
            key={`atom-${i}`}
            element={atom.element}
            position={atomPositions[i]}
          />
        ))}
      </group>

      {/* Symmetry element overlays (not animated with molecule) */}
      {table.symmetryElements.map((el) => {
        if (!isVisible(el.label)) return null;

        switch (el.type) {
          case 'axis':
            return (
              <SymmetryAxis
                key={el.label}
                direction={el.direction ?? [0, 1, 0]}
                label={el.label}
                order={el.order}
              />
            );
          case 'plane':
            return (
              <SymmetryPlane
                key={el.label}
                normal={el.normal ?? [0, 0, 1]}
                label={el.label}
              />
            );
          case 'center':
            return <InversionCenter key={el.label} />;
          case 'improper':
            return (
              <SymmetryAxis
                key={el.label}
                direction={el.direction ?? [0, 1, 0]}
                label={el.label}
                order={el.order}
                color="#A78BFA"
              />
            );
          default:
            return null;
        }
      })}

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

interface MoleculeViewerProps {
  molecule: MoleculeData;
  table: CharacterTableData;
}

export default function MoleculeViewer({ molecule, table }: MoleculeViewerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      style={{ background: '#000000' }}
    >
      <MoleculeScene molecule={molecule} table={table} />
    </Canvas>
  );
}
