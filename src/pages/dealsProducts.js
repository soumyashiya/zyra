/* BPC-157 & TB-500 */
import bpcFront from '../assets/images/alluvi/bpc-bpcfrontnew.jpg'
import bpcPen from '../assets/images/alluvi/bpc-bpcpen.jpg'
import bpcOpen from '../assets/images/alluvi/bpc-bpcopen.jpg'
import bpcUv from '../assets/images/alluvi/bpc-uvbpc.jpg'

/* Tirzepatide 40mg */
import tirzFront from '../assets/images/alluvi/tirzepetide-Artboard2.jpg'
import tirzCopy from '../assets/images/alluvi/tirzepetide-Artboard2copy.jpg'
import tirzOpen from '../assets/images/alluvi/tirzepetide-trizyopen.jpg'
import tirzUv from '../assets/images/alluvi/tirzepetide-trizyuv.jpg'

/* Retatrutide 40mg */
import retaFront from '../assets/images/alluvi/retafourty-retafrontnew.jpg'
import retaPen from '../assets/images/alluvi/retafourty-retpen.jpg'
import retaOpen from '../assets/images/alluvi/retafourty-retaopen.jpg'
import retaUv from '../assets/images/alluvi/retafourty-retauv.jpg'

/* Glow 70mg */
import glowFront from '../assets/images/alluvi/glow-glowfrontnew.jpg'
import glowPen from '../assets/images/alluvi/glow-glowpen.jpg'
import glowOpen from '../assets/images/alluvi/glow-glowopen.jpg'
import glowUv from '../assets/images/alluvi/glow-glowuv.jpg'

export const products = [
  {
    id: 'bpc-157-tb-500',
    title: 'BPC-157 & TB-500 40mg',
    subtitle: 'Recovery & Repair Blend',
    price: '$129.00',
    image: bpcFront,
    gallery: [bpcFront, bpcPen, bpcOpen, bpcUv],
    description:
      'A precision-blended research peptide combining BPC-157 and TB-500 in a single vial. Used in studies on tissue repair, vascularization, and inflammatory pathways.',
    highlights: [
      '40mg total active peptide content per vial',
      'Lyophilized for stability — reconstitute with bacteriostatic water',
      'Independently verified ≥99% purity',
      'CoA and HPLC report available on request',
    ],
    specs: {
      'Total content': '40mg',
      Purity: '≥99%',
      Form: 'Lyophilized powder',
      Storage: '2–8°C, dry, dark',
    },
  },
  {
    id: 'tirzepatide',
    title: 'Tirzepatide · 5mg / 20mg / 40mg',
    subtitle: 'GLP-1 / GIP Dual Agonist',
    price: '$179.00',
    image: tirzFront,
    gallery: [tirzFront, tirzCopy, tirzOpen, tirzUv],
    description:
      'Research-grade Tirzepatide supplied in three vial sizes for flexible study design across metabolic and weight-related research protocols.',
    highlights: [
      'Available in 5mg, 20mg, and 40mg vial sizes',
      'Sealed cold-chain delivery within 24 hours',
      'Batch-tested for endotoxin levels',
      'Documentation included with every order',
    ],
    specs: {
      'Vial sizes': '5mg / 20mg / 40mg',
      Purity: '≥99%',
      Form: 'Lyophilized powder',
      Storage: '−20°C long term · 2–8°C short term',
    },
  },
  {
    id: 'retatrutide',
    title: 'Retatrutide · 20mg / 40mg',
    subtitle: 'Triple Agonist Research Peptide',
    price: '$219.00',
    image: retaFront,
    gallery: [retaFront, retaPen, retaOpen, retaUv],
    description:
      'Retatrutide for research into GLP-1, GIP, and glucagon-receptor pathways. Each vial is sealed, documented, and ships in protective packaging.',
    highlights: [
      'Available in 20mg and 40mg vials',
      '≥99% purity verified by HPLC',
      'Cold-pack shipping within 24 hours of order',
      'Direct WhatsApp support for protocol questions',
    ],
    specs: {
      'Vial sizes': '20mg / 40mg',
      Purity: '≥99%',
      Form: 'Lyophilized powder',
      Storage: '−20°C long term',
    },
  },
  {
    id: 'glow',
    title: 'Glow · 5mg / 70mg',
    subtitle: 'Skin & Pigment Research Blend',
    price: '$89.00',
    image: glowFront,
    gallery: [glowFront, glowPen, glowOpen, glowUv],
    description:
      'Glow is a research-grade peptide blend used in skin, pigment, and dermal hydration studies. Supplied in matched vial sizes for consistent dosing.',
    highlights: [
      'Available in 5mg and 70mg vials',
      'High purity, batch verified',
      'Stable lyophilized form',
      'Tamper-evident sealed packaging',
    ],
    specs: {
      'Vial sizes': '5mg / 70mg',
      Purity: '≥99%',
      Form: 'Lyophilized powder',
      Storage: '2–8°C',
    },
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)
