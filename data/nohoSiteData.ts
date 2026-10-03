export interface PhotoTile {
  id: string;
  image: string;
  alt: string;
  bgColor: string;
  span?: string;
  label?: string;
}

export const nohoHeroTiles: PhotoTile[] = [
  {
    id: 'tile-upside-down',
    image: '/src/assets/images/noho_upside_down_1790071171442.jpg',
    alt: 'Person upside down on noho chair with legs in air',
    bgColor: '#E6E0D5',
    label: 'Flexible Movement'
  },
  {
    id: 'tile-yellow-face',
    image: '/src/assets/images/noho_yellow_face_1790071192269.jpg',
    alt: 'Person holding bright yellow noho chair over face',
    bgColor: '#BA4A24', // terracotta
    label: 'Playful Design'
  },
  {
    id: 'tile-red-pleated',
    image: '/src/assets/images/noho_red_pleat_1790071212449.jpg',
    alt: 'Model in red pleated sculptural dress beside black noho chair',
    bgColor: '#E3DDD1',
    label: 'Sculptural Form'
  },
  {
    id: 'tile-walking-yellow',
    image: '/src/assets/images/noho_walk_yellow_1790071227894.jpg',
    alt: 'Person walking holding yellow noho chair',
    bgColor: '#968EC7', // lilac/lavender
    label: 'Lightweight Mobility'
  },
  {
    id: 'tile-moss-creature',
    image: '/src/assets/images/noho_moss_man_1790071241584.jpg',
    alt: 'Moss creature sitting on white noho chair',
    bgColor: '#F2C94C', // sunny yellow
    label: 'Natural Ingredients'
  },
  {
    id: 'tile-book-face',
    image: '/src/assets/images/noho_book_face_1790071257799.jpg',
    alt: 'Person leaning back in chair with book over face',
    bgColor: '#968EC7', // lavender
    label: 'Rest & Unwind'
  },
  {
    id: 'tile-stack-chairs',
    image: '/src/assets/images/noho_stack_chairs_1790071285391.jpg',
    alt: 'Four yellow noho chairs stacked neatly',
    bgColor: '#545E45', // olive green
    label: 'Stackable Architecture'
  }
];

export interface NohoProduct {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  features: string[];
  dimensions: string;
  weight: string;
  sustainabilityRating: string;
  colors: {
    name: string;
    hex: string;
    image: string;
  }[];
}

export const nohoProducts: NohoProduct[] = [
  {
    id: 'noho-move',
    name: 'noho move™',
    tagline: 'The chair that moves with your body',
    price: 375,
    description:
      'Engineered with an auxetic mesh cradle that flexes dynamically in all directions. Designed in New Zealand from upcycled ghost fishing nets and post-consumer carpets.',
    features: [
      'Patented forward-tilt & reclining flex mechanism',
      'Auxetic mesh seat naturally distributes pressure',
      'Made from 99% recycled Econyl® nylon',
      '10-year manufacturer structural warranty',
      'Zero assembly required — ready to use out of box'
    ],
    dimensions: 'H 850mm × W 535mm × D 530mm (Seat H 480mm)',
    weight: '4.5 kg (Ultralight ergonomic support)',
    sustainabilityRating: 'Made from 3.5 kg of recovered ocean plastics',
    colors: [
      {
        name: 'Sunset Terracotta',
        hex: '#BA4A24',
        image: '/src/assets/images/noho_yellow_face_1790071192269.jpg'
      },
      {
        name: 'Stealth Onyx',
        hex: '#1F1E1D',
        image: '/src/assets/images/noho_upside_down_1790071171442.jpg'
      },
      {
        name: 'Meadow Olive',
        hex: '#545E45',
        image: '/src/assets/images/noho_stack_chairs_1790071285391.jpg'
      },
      {
        name: 'Lavender Dusk',
        hex: '#968EC7',
        image: '/src/assets/images/noho_walk_yellow_1790071227894.jpg'
      },
      {
        name: 'Chalk White',
        hex: '#E8E5DD',
        image: '/src/assets/images/noho_book_face_1790071257799.jpg'
      }
    ]
  },
  {
    id: 'noho-lighty',
    name: 'noho lighty™',
    tagline: 'Stackable, resilient, versatile',
    price: 295,
    description:
      'Ultra-lightweight everyday dining and workspace chair designed for flexible environments. Stacks up to 6 high with effortless ease.',
    features: [
      'Ergonomically contoured comfort waterfall edge',
      'Stackable up to 6 chairs high for compact storage',
      'Castor bean bio-polymer & upcycled marine polymers',
      'Indoor & outdoor UV-protected weatherproofing',
      'Tested to commercial BIFMA durability standards'
    ],
    dimensions: 'H 820mm × W 510mm × D 500mm (Seat H 460mm)',
    weight: '3.8 kg (Stackable ease)',
    sustainabilityRating: '100% circular recyclable at end of lifecycle',
    colors: [
      {
        name: 'Canary Yellow',
        hex: '#F2C94C',
        image: '/src/assets/images/noho_stack_chairs_1790071285391.jpg'
      },
      {
        name: 'Olive Grove',
        hex: '#545E45',
        image: '/src/assets/images/noho_stack_chairs_1790071285391.jpg'
      },
      {
        name: 'Clay Terracotta',
        hex: '#BA4A24',
        image: '/src/assets/images/noho_yellow_face_1790071192269.jpg'
      },
      {
        name: 'Cloud White',
        hex: '#EDE9E1',
        image: '/src/assets/images/noho_book_face_1790071257799.jpg'
      }
    ]
  }
];

export const nohoSustainabilityCards = [
  {
    title: 'Ghost Fishing Nets',
    material: 'Econyl® Regenerated Nylon',
    icon: '🐟',
    color: '#3B82F6',
    description:
      'We recover discarded nylon nets from Pacific oceans and harbours, transforming hazardous marine debris into ultra-strong chair shells.'
  },
  {
    title: 'Post-Consumer Carpets',
    material: 'Upcycled Commercial Fibers',
    icon: '🧶',
    color: '#BA4A24',
    description:
      'Millions of pounds of carpet end up in landfills yearly. We divert these polymers into our structural bases and dynamic flex hinges.'
  },
  {
    title: 'Castor Bean Oil',
    material: 'Plant-Based Bio-Polymer',
    icon: '🌰',
    color: '#545E45',
    description:
      'Renewable castor beans grown without deforestation provide bio-resins that replace fossil petroleum with zero sacrifice in durability.'
  }
];

export const nohoReviews = [
  {
    id: 'rev-1',
    author: 'Sophie Lindqvist',
    role: 'Interior Architect, Stockholm',
    quote:
      'The noho move is the first chair in 15 years that lets me lean in to sketch and recline back to think without adjusting a single lever. Brilliant craftsmanship.',
    rating: 5,
    location: 'Stockholm, Sweden'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    role: 'Design Director, Melbourne',
    quote:
      'It looks like a sculpture at the dining table, yet works better than any heavy mesh office task chair. The texture and color are timeless.',
    rating: 5,
    location: 'Melbourne, Australia'
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    role: 'Sustainable Materials Researcher',
    quote:
      'True circular economy execution. Knowing the chair I sit on every morning took 3.5kg of ghost net out of the sea is immensely rewarding.',
    rating: 5,
    location: 'Berlin, Germany'
  }
];

export const nohoFaqs = [
  {
    question: 'How does the noho move™ flex mechanism work?',
    answer:
      'The seat and backrest are engineered as a continuous, auxetic dynamic shell. When you lean forward to write or eat, the seat pivots forward to support your pelvic angle. When you recline back, the spine cradle gently opens up your chest and relieves lumbar compression.'
  },
  {
    question: 'Where is noho furniture designed and manufactured?',
    answer:
      'Every noho chair is designed and precision manufactured in Aotearoa New Zealand, utilizing 100% renewable geothermal and hydroelectric energy on the production line.'
  },
  {
    question: 'What is the return policy and warranty?',
    answer:
      'We offer an unconditional 100-day in-home trial with free returns and a full refund. All structural components are backed by our comprehensive 10-year manufacturer warranty.'
  },
  {
    question: 'How do I clean and maintain noho chairs?',
    answer:
      'Simply wipe down with warm water and mild soap. The upcycled polymer shell is stain-resistant, UV-stabilized, and non-porous, making it impervious to spills, coffee, or wine.'
  }
];
