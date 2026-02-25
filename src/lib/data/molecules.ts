import type { MoleculeData } from '@/types';

/**
 * 3D molecular geometry data for ~19 molecules covering 15 different
 * point groups (Schoenflies notation). All coordinates are idealized
 * geometries in Angstroms, centered at (or very near) the origin.
 */
export const MOLECULES: MoleculeData[] = [
  // ─── C1 ──────────────────────────────────────────────────────────
  {
    id: 'chfclbr',
    name: 'Bromochlorofluoromethane',
    formula: 'CHFClBr',
    pointGroup: 'C1',
    atoms: [
      { element: 'C',  x:  0.00,  y:  0.00,  z:  0.00 },
      { element: 'H',  x:  0.63,  y:  0.63,  z:  0.63 },
      { element: 'F',  x: -0.63,  y: -0.63,  z:  0.63 },
      { element: 'Cl', x: -0.63,  y:  0.63,  z: -0.63 },
      { element: 'Br', x:  0.63,  y: -0.63,  z: -0.63 },
    ],
    bonds: [
      [0, 1], // C-H
      [0, 2], // C-F
      [0, 3], // C-Cl
      [0, 4], // C-Br
    ],
    linear: false,
  },

  // ─── Cs ──────────────────────────────────────────────────────────
  {
    id: 'hocl',
    name: 'Hypochlorous Acid',
    formula: 'HOCl',
    pointGroup: 'Cs',
    atoms: [
      { element: 'O',  x:  0.00,  y:  0.00, z: 0 },
      { element: 'H',  x: -0.69,  y:  0.73, z: 0 },
      { element: 'Cl', x:  1.69,  y:  0.00, z: 0 },
    ],
    bonds: [
      [0, 1], // O-H
      [0, 2], // O-Cl
    ],
    linear: false,
  },

  // ─── Ci ──────────────────────────────────────────────────────────
  // meso-1,2-dichloro-1,2-difluoroethane (anti conformation)
  // Has only an inversion center — no mirror planes, no rotation axes
  {
    id: 'meso-chclf-chclf',
    name: 'meso-1,2-Dichloro-1,2-difluoroethane',
    formula: 'CHClF-CHClF',
    pointGroup: 'Ci',
    atoms: [
      { element: 'C',  x: -0.77,  y:  0.00,  z:  0.00 },
      { element: 'C',  x:  0.77,  y:  0.00,  z:  0.00 },
      { element: 'H',  x: -1.17,  y:  1.03,  z:  0.00 },
      { element: 'H',  x:  1.17,  y: -1.03,  z:  0.00 },
      { element: 'F',  x: -1.17,  y: -0.51,  z:  0.89 },
      { element: 'F',  x:  1.17,  y:  0.51,  z: -0.89 },
      { element: 'Cl', x: -1.17,  y: -0.51,  z: -0.89 },
      { element: 'Cl', x:  1.17,  y:  0.51,  z:  0.89 },
    ],
    bonds: [
      [0, 1], // C-C
      [0, 2], // C-H
      [0, 4], // C-F
      [0, 6], // C-Cl
      [1, 3], // C-H
      [1, 5], // C-F
      [1, 7], // C-Cl
    ],
    linear: false,
  },

  // ─── C2 ──────────────────────────────────────────────────────────
  {
    id: 'h2o2',
    name: 'Hydrogen Peroxide',
    formula: 'H₂O₂',
    pointGroup: 'C2',
    atoms: [
      { element: 'O', x:  0.00, y:  0.73, z:  0.00 },
      { element: 'O', x:  0.00, y: -0.73, z:  0.00 },
      { element: 'H', x:  0.83, y:  0.95, z:  0.35 },
      { element: 'H', x: -0.83, y: -0.95, z: -0.35 },
    ],
    bonds: [
      [0, 1], // O-O
      [0, 2], // O-H
      [1, 3], // O-H
    ],
    linear: false,
  },

  // ─── C2v ─────────────────────────────────────────────────────────
  {
    id: 'water',
    name: 'Water',
    formula: 'H₂O',
    pointGroup: 'C2v',
    atoms: [
      { element: 'O', x:  0.000, y:  0.000, z:  0.117 },
      { element: 'H', x:  0.000, y:  0.757, z: -0.469 },
      { element: 'H', x:  0.000, y: -0.757, z: -0.469 },
    ],
    bonds: [
      [0, 1], // O-H
      [0, 2], // O-H
    ],
    linear: false,
  },

  {
    id: 'formaldehyde',
    name: 'Formaldehyde',
    formula: 'H₂CO',
    pointGroup: 'C2v',
    atoms: [
      { element: 'C', x:  0.000, y:  0.000, z:  0.000 },
      { element: 'O', x:  0.000, y:  0.000, z:  1.203 },
      { element: 'H', x:  0.000, y:  0.934, z: -0.587 },
      { element: 'H', x:  0.000, y: -0.934, z: -0.587 },
    ],
    bonds: [
      [0, 1], // C=O
      [0, 2], // C-H
      [0, 3], // C-H
    ],
    linear: false,
  },

  // ─── C2h ─────────────────────────────────────────────────────────
  {
    id: 'trans-c2h2cl2',
    name: 'trans-1,2-Dichloroethylene',
    formula: 'trans-C₂H₂Cl₂',
    pointGroup: 'C2h',
    atoms: [
      { element: 'C',  x: -0.67, y:  0.00, z: 0 },
      { element: 'C',  x:  0.67, y:  0.00, z: 0 },
      { element: 'H',  x: -1.26, y:  0.93, z: 0 },
      { element: 'Cl', x: -1.73, y: -0.93, z: 0 },
      { element: 'H',  x:  1.26, y: -0.93, z: 0 },
      { element: 'Cl', x:  1.73, y:  0.93, z: 0 },
    ],
    bonds: [
      [0, 1], // C=C
      [0, 2], // C-H
      [0, 3], // C-Cl
      [1, 4], // C-H
      [1, 5], // C-Cl
    ],
    linear: false,
  },

  // ─── C3v ─────────────────────────────────────────────────────────
  {
    id: 'ammonia',
    name: 'Ammonia',
    formula: 'NH₃',
    pointGroup: 'C3v',
    atoms: [
      { element: 'N', x:  0.000, y:  0.000, z:  0.381 },
      { element: 'H', x:  0.000, y:  0.942, z: -0.127 },
      { element: 'H', x:  0.816, y: -0.471, z: -0.127 },
      { element: 'H', x: -0.816, y: -0.471, z: -0.127 },
    ],
    bonds: [
      [0, 1], // N-H
      [0, 2], // N-H
      [0, 3], // N-H
    ],
    linear: false,
  },

  {
    id: 'chloroform',
    name: 'Chloroform',
    formula: 'CHCl₃',
    pointGroup: 'C3v',
    atoms: [
      { element: 'C',  x:  0.00,  y:  0.00,  z:  0.00 },
      { element: 'H',  x:  0.00,  y:  0.00,  z:  1.07 },
      { element: 'Cl', x:  0.00,  y:  1.68,  z: -0.36 },
      { element: 'Cl', x:  1.45,  y: -0.84,  z: -0.36 },
      { element: 'Cl', x: -1.45,  y: -0.84,  z: -0.36 },
    ],
    bonds: [
      [0, 1], // C-H
      [0, 2], // C-Cl
      [0, 3], // C-Cl
      [0, 4], // C-Cl
    ],
    linear: false,
  },

  // ─── C∞v ─────────────────────────────────────────────────────────
  {
    id: 'hcn',
    name: 'Hydrogen Cyanide',
    formula: 'HCN',
    pointGroup: 'C∞v',
    atoms: [
      { element: 'H', x: 0, y: 0, z: -1.63 },
      { element: 'C', x: 0, y: 0, z: -0.56 },
      { element: 'N', x: 0, y: 0, z:  0.60 },
    ],
    bonds: [
      [0, 1], // H-C
      [1, 2], // C≡N
    ],
    linear: true,
  },

  {
    id: 'n2o',
    name: 'Nitrous Oxide',
    formula: 'N₂O',
    pointGroup: 'C∞v',
    atoms: [
      { element: 'N', x: 0, y: 0, z: -1.19 },
      { element: 'N', x: 0, y: 0, z: -0.07 },
      { element: 'O', x: 0, y: 0, z:  1.13 },
    ],
    bonds: [
      [0, 1], // N-N
      [1, 2], // N-O
    ],
    linear: true,
  },

  // ─── D∞h ─────────────────────────────────────────────────────────
  {
    id: 'co2',
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    pointGroup: 'D∞h',
    atoms: [
      { element: 'C', x: 0, y: 0, z:  0.00 },
      { element: 'O', x: 0, y: 0, z:  1.16 },
      { element: 'O', x: 0, y: 0, z: -1.16 },
    ],
    bonds: [
      [0, 1], // C=O
      [0, 2], // C=O
    ],
    linear: true,
  },

  {
    id: 'acetylene',
    name: 'Acetylene',
    formula: 'C₂H₂',
    pointGroup: 'D∞h',
    atoms: [
      { element: 'C', x: 0, y: 0, z:  0.60 },
      { element: 'C', x: 0, y: 0, z: -0.60 },
      { element: 'H', x: 0, y: 0, z:  1.66 },
      { element: 'H', x: 0, y: 0, z: -1.66 },
    ],
    bonds: [
      [0, 1], // C≡C
      [0, 2], // C-H
      [1, 3], // C-H
    ],
    linear: true,
  },

  // ─── D2h ─────────────────────────────────────────────────────────
  {
    id: 'ethylene',
    name: 'Ethylene',
    formula: 'C₂H₄',
    pointGroup: 'D2h',
    atoms: [
      { element: 'C', x: -0.67, y:  0.00, z: 0 },
      { element: 'C', x:  0.67, y:  0.00, z: 0 },
      { element: 'H', x: -1.24, y:  0.93, z: 0 },
      { element: 'H', x: -1.24, y: -0.93, z: 0 },
      { element: 'H', x:  1.24, y:  0.93, z: 0 },
      { element: 'H', x:  1.24, y: -0.93, z: 0 },
    ],
    bonds: [
      [0, 1], // C=C
      [0, 2], // C-H
      [0, 3], // C-H
      [1, 4], // C-H
      [1, 5], // C-H
    ],
    linear: false,
  },

  // ─── D3h ─────────────────────────────────────────────────────────
  {
    id: 'bf3',
    name: 'Boron Trifluoride',
    formula: 'BF₃',
    pointGroup: 'D3h',
    atoms: [
      { element: 'B', x:  0.000, y:  0.000, z: 0 },
      { element: 'F', x:  0.000, y:  1.310, z: 0 },
      { element: 'F', x:  1.134, y: -0.655, z: 0 },
      { element: 'F', x: -1.134, y: -0.655, z: 0 },
    ],
    bonds: [
      [0, 1], // B-F
      [0, 2], // B-F
      [0, 3], // B-F
    ],
    linear: false,
  },

  // ─── D4h ─────────────────────────────────────────────────────────
  {
    id: 'xef4',
    name: 'Xenon Tetrafluoride',
    formula: 'XeF₄',
    pointGroup: 'D4h',
    atoms: [
      { element: 'Xe', x:  0.00, y:  0.00, z: 0 },
      { element: 'F',  x:  1.95, y:  0.00, z: 0 },
      { element: 'F',  x: -1.95, y:  0.00, z: 0 },
      { element: 'F',  x:  0.00, y:  1.95, z: 0 },
      { element: 'F',  x:  0.00, y: -1.95, z: 0 },
    ],
    bonds: [
      [0, 1], // Xe-F
      [0, 2], // Xe-F
      [0, 3], // Xe-F
      [0, 4], // Xe-F
    ],
    linear: false,
  },

  // ─── D6h ─────────────────────────────────────────────────────────
  {
    id: 'benzene',
    name: 'Benzene',
    formula: 'C₆H₆',
    pointGroup: 'D6h',
    atoms: [
      // Carbon ring (radius = 1.40 A)
      { element: 'C', x:  1.400, y:  0.000, z: 0 },
      { element: 'C', x:  0.700, y:  1.212, z: 0 },
      { element: 'C', x: -0.700, y:  1.212, z: 0 },
      { element: 'C', x: -1.400, y:  0.000, z: 0 },
      { element: 'C', x: -0.700, y: -1.212, z: 0 },
      { element: 'C', x:  0.700, y: -1.212, z: 0 },
      // Hydrogen ring (radius = 2.48 A)
      { element: 'H', x:  2.480, y:  0.000, z: 0 },
      { element: 'H', x:  1.240, y:  2.147, z: 0 },
      { element: 'H', x: -1.240, y:  2.147, z: 0 },
      { element: 'H', x: -2.480, y:  0.000, z: 0 },
      { element: 'H', x: -1.240, y: -2.147, z: 0 },
      { element: 'H', x:  1.240, y: -2.147, z: 0 },
    ],
    bonds: [
      // C-C ring
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
      // C-H bonds
      [0, 6],
      [1, 7],
      [2, 8],
      [3, 9],
      [4, 10],
      [5, 11],
    ],
    linear: false,
  },

  // ─── Td ──────────────────────────────────────────────────────────
  {
    id: 'methane',
    name: 'Methane',
    formula: 'CH₄',
    pointGroup: 'Td',
    atoms: [
      { element: 'C', x:  0.00,  y:  0.00,  z:  0.00 },
      { element: 'H', x:  0.63,  y:  0.63,  z:  0.63 },
      { element: 'H', x: -0.63,  y: -0.63,  z:  0.63 },
      { element: 'H', x: -0.63,  y:  0.63,  z: -0.63 },
      { element: 'H', x:  0.63,  y: -0.63,  z: -0.63 },
    ],
    bonds: [
      [0, 1], // C-H
      [0, 2], // C-H
      [0, 3], // C-H
      [0, 4], // C-H
    ],
    linear: false,
  },

  // ─── Oh ──────────────────────────────────────────────────────────
  {
    id: 'sf6',
    name: 'Sulfur Hexafluoride',
    formula: 'SF₆',
    pointGroup: 'Oh',
    atoms: [
      { element: 'S', x:  0.00, y:  0.00, z:  0.00 },
      { element: 'F', x:  1.56, y:  0.00, z:  0.00 },
      { element: 'F', x: -1.56, y:  0.00, z:  0.00 },
      { element: 'F', x:  0.00, y:  1.56, z:  0.00 },
      { element: 'F', x:  0.00, y: -1.56, z:  0.00 },
      { element: 'F', x:  0.00, y:  0.00, z:  1.56 },
      { element: 'F', x:  0.00, y:  0.00, z: -1.56 },
    ],
    bonds: [
      [0, 1], // S-F
      [0, 2], // S-F
      [0, 3], // S-F
      [0, 4], // S-F
      [0, 5], // S-F
      [0, 6], // S-F
    ],
    linear: false,
  },
];

/**
 * Look up a single molecule by its unique ID slug.
 */
export function getMolecule(id: string): MoleculeData | undefined {
  return MOLECULES.find((m) => m.id === id);
}

/**
 * Return every molecule that belongs to the given point group
 * (Schoenflies symbol, e.g. "C2v", "D6h", "Td").
 */
export function getMoleculesByPointGroup(pg: string): MoleculeData[] {
  return MOLECULES.filter((m) => m.pointGroup === pg);
}
