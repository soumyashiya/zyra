/* Shared data for the Consumer page.
   GUIDES — section 03 cards (static, not routed).
   PRESS  — section 05 rows; each links to a press detail page.
   body blocks: { type: 'label' | 'p', text } */
import guide1Img from '../assets/images/consumers/shop5.jpg'
import guide2Img from '../assets/images/consumers/shop3.jpg'
import guide3Img from '../assets/images/consumers/shop-family.jpeg'
import guide4Img from '../assets/images/consumers/shop4.jpeg'
import guide5Img from '../assets/images/consumers/shop-digital.jpeg'
import guide6Img from '../assets/images/consumers/shop6.jpeg'

export const GUIDES = [
  {
    tag: '01 — Play',
    count: 'Twelve picks',
    title: ['Smart Shopping for ', 'Busy', ' Families'],
    desc: 'A practical guide to help families plan purchases, choose durable kid gear, and streamline home needs. Learn budgeting methods, time-saving routines, and savvy store strategies to make every dollar go further.',
    cta: 'See the picks',
    media: { img: guide1Img, label: 'Games & toys' },
  },
  {
    tag: '02 — Shopping',
    count: 'Ten tips',
    title: ['Smart Picks for ', 'Play', ': Games, Toys & Videos'],
    desc: "This guide helps parents choose quality digital games, toys, and videos that nurture learning and play. Learn how to vet kids games online, shop wisely at a children's toys store, and curate educational videos for kids while keeping screen time healthy.",
    cta: 'Shop smarter',
    media: { img: guide2Img, label: 'Family shopping' },
  },
  {
    tag: '03 — Growth',
    count: 'Eight stages',
    title: ['Milestones & ', 'Child', ' Development'],
    desc: 'Clear, reassuring guidance on milestones, behaviour, and the small everyday wins that shape how children grow.',
    cta: 'Track the stages',
    media: { img: guide3Img, label: 'Growing up' },
  },
  {
    tag: '04 — Home',
    count: 'Nine systems',
    title: ['Household ', 'Management', ' Made Simple'],
    desc: 'Practical systems for chores, meal planning, and routines that keep a busy family home running calmly.',
    cta: 'Get organised',
    media: { img: guide4Img, label: 'Home, organised' },
  },
  {
    tag: '05 — Together',
    count: 'Ten ideas',
    title: ['Activities That ', 'Bond', ' the Family'],
    desc: 'Simple, screen-light activities and weekend ideas that bring every age in the family closer together.',
    cta: 'Find activities',
    media: { img: guide5Img, label: 'Family time' },
  },
  {
    tag: '06 — Wellbeing',
    count: 'Seven habits',
    title: ['Healthy ', 'Routines', ' for Every Age'],
    desc: 'Sleep, meals, and movement habits for every age — small routines that build a healthier, happier household.',
    cta: 'Build routines',
    media: { img: guide6Img, label: 'Daily routine' },
  },
]

export const PRESS = [
  {
    slug: 'smart-picks-for-play',
    year: '2026',
    pub: 'The Family Review',
    headlineParts: ['Smart Picks for ', 'Play', ': Games, Toys, and Videos'],
    cat: 'Guide',
    body: [
      {
        type: 'p',
        text: "This guide helps parents choose quality digital games, toys, and videos that nurture learning and play. Learn how to vet kids games online, shop wisely at a children's toys store, and curate educational videos for kids while keeping screen time healthy.",
      },
      { type: 'label', text: 'Vetting games and apps' },
      {
        type: 'p',
        text: 'Before a game reaches your child, play it yourself for ten minutes. Check the age rating, look for ads or in-app purchases, and favour titles that reward curiosity over speed. The best digital games feel like play, not pressure.',
      },
      { type: 'label', text: 'Shopping for toys wisely' },
      {
        type: 'p',
        text: "At a children's toys store, open-ended toys — blocks, art supplies, simple figures — outlast the trend-driven ones. They grow with the child and invite imagination rather than a single, fixed way to play.",
      },
      { type: 'label', text: 'Curating videos and screen time' },
      {
        type: 'p',
        text: 'Build a small, trusted library of educational videos instead of relying on autoplay. Pair screen time with conversation, keep it predictable, and end on a calm note so it supports learning rather than replacing it.',
      },
    ],
  },
  {
    slug: 'smart-shopping-for-busy-families',
    year: '2025',
    pub: 'Cereal Magazine',
    headlineParts: ['Smart Shopping for ', 'Busy', ' Families'],
    cat: 'Guide',
    body: [
      {
        type: 'p',
        text: 'A practical guide to help families plan purchases, choose durable kid gear, and streamline home needs. Learn budgeting methods, time-saving routines, and savvy store strategies to make every dollar go further.',
      },
      { type: 'label', text: 'Plan before you buy' },
      {
        type: 'p',
        text: 'The busiest families spend the least time shopping — not because they buy less, but because they decide less in the moment. A short weekly list, built around what the household actually runs out of, removes most impulse spending before it starts.',
      },
      { type: 'label', text: 'Choose gear that lasts' },
      {
        type: 'p',
        text: 'Children outgrow things quickly, so durability matters more than novelty. Look for kid gear that can be cleaned easily, handed down, or resold — a slightly higher price often works out cheaper across two or three years.',
      },
      { type: 'label', text: 'Savvy store strategies' },
      {
        type: 'p',
        text: 'Compare unit prices, shop your pantry first, and batch errands into one trip. Time-saving routines like a standing grocery order free up hours each month and make every dollar go further.',
      },
    ],
  },
  {
    slug: 'economics-of-slow-inventory',
    year: '2025',
    pub: 'Monocle Radio',
    headlineParts: ['A one-hour conversation on the ', 'economics of slow inventory', '.'],
    cat: 'Audio',
    body: [
      { type: 'label', text: 'The conversation' },
      {
        type: 'p',
        text: 'In this hour-long segment, our editor joined Monocle Radio to discuss what it means to hold inventory slowly — sourcing in small runs, testing for months, and publishing only what survives.',
      },
      { type: 'label', text: 'The takeaway' },
      {
        type: 'p',
        text: 'Slow inventory is not nostalgia; it is a different set of economics. The conversation explores how patience, when it is built into the model, becomes a quiet competitive advantage.',
      },
    ],
  },
  {
    slug: 'the-shopping-list-as-essay',
    year: '2024',
    pub: 'Apartamento',
    headlineParts: ['"The shopping list as ', 'essay', '."'],
    cat: 'Essay',
    body: [
      { type: 'label', text: 'The essay' },
      {
        type: 'p',
        text: 'Apartamento framed our work as something between a catalogue and an essay — a shopping list that argues, in full sentences, for why each thing earns its place in a home.',
      },
      { type: 'label', text: 'On writing about objects' },
      {
        type: 'p',
        text: 'The piece makes the case that describing an object honestly — how it is made, how it ages, how it feels in daily use — is itself a form of essay, and a more useful one than a star rating.',
      },
    ],
  },
  {
    slug: 'wood-pencil-editorial-design',
    year: '2024',
    pub: 'D&AD',
    headlineParts: ['Wood Pencil — ', 'editorial design', ', independent publication.'],
    cat: 'Award',
    body: [
      { type: 'label', text: 'The award' },
      {
        type: 'p',
        text: 'The D&AD Wood Pencil recognised the editorial design of our independent publication — the typography, the pacing, and the restraint that lets the writing carry each page.',
      },
      { type: 'label', text: 'Design as a quiet craft' },
      {
        type: 'p',
        text: 'For us, good editorial design disappears. This recognition affirms a belief we hold closely: that the best layout is the one a reader never has to notice.',
      },
    ],
  },
  {
    slug: 'a-long-profile-on-the-house-letter',
    year: '2023',
    pub: 'Kinfolk',
    headlineParts: ['A long profile on the ', 'house letter', ' and its 24,000 readers.'],
    cat: 'Profile',
    body: [
      { type: 'label', text: 'The profile' },
      {
        type: 'p',
        text: 'Kinfolk traced the story of our monthly house letter — how a short dispatch grew, slowly and entirely by word of mouth, to a readership of 24,000.',
      },
      { type: 'label', text: 'A letter, not a feed' },
      {
        type: 'p',
        text: 'The profile dwells on the difference between a letter and a feed: one arrives, is read, and ends; the other never does. The house letter, by design, belongs firmly to the first kind.',
      },
    ],
  },
  {
    slug: 'studio-of-the-week',
    year: '2023',
    pub: "It's Nice That",
    headlineParts: ['Studio of the Week — on building a brand ', 'without affiliate links', '.'],
    cat: 'Feature',
    body: [
      { type: 'label', text: 'The feature' },
      {
        type: 'p',
        text: "It's Nice That named us Studio of the Week and asked the question we are asked most often: how do you build a brand without affiliate links or paid placements?",
      },
      { type: 'label', text: 'The answer' },
      {
        type: 'p',
        text: 'The answer, we told them, is trust. When income comes from readers rather than advertisers, every recommendation can be honest — and honesty, over time, is the only brand worth building.',
      },
    ],
  },
]
