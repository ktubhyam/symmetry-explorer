# Symmetry Explorer

Visualize molecular point groups, symmetry operations, and character tables. Understand how symmetry determines spectroscopic selection rules.

## Features

- **3D molecule viewer** with interactive symmetry element overlays (axes, planes, inversion center)
- **Step-through symmetry operations** — watch rotations, reflections, and inversions animate
- **Character table display** with irreducible representations highlighted
- **Selection rule calculator** — which modes are IR-active, Raman-active, or silent
- **Information Completeness Ratio R(G,N)** — see how much vibrational info is observable
- **Molecule library** — from low symmetry (C1) to high symmetry (Oh, Ih)
- **Point group identification** — input a molecule and determine its point group step by step

## Tech Stack

- **Framework:** Next.js 15 + TypeScript
- **3D:** Three.js + React Three Fiber
- **Styling:** Tailwind CSS 4
- **Data:** Pre-computed character tables for 32 crystallographic point groups

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Educational Value

This tool bridges the gap between abstract group theory and practical spectroscopy:
- See *why* CO2 has IR-active but Raman-inactive asymmetric stretch
- Understand *how* the mutual exclusion principle works for centrosymmetric molecules
- Explore *what happens* to selection rules as symmetry changes

## License

MIT
