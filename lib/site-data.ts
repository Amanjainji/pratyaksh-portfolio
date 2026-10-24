export const profile = {
  name: 'Pratyaksh Aggarwal',
  role: 'Social Media Marketing Executive',
  email: 'pratyakshaggarwal015@gmail.com',
  phone: '9868247417',
  linkedin: 'https://www.linkedin.com/in/pratyaksh-aggarwal-907a542a6/',
  instagram: 'https://www.instagram.com/Pratyaksh.aggarwal.02/',
  location: 'Delhi, India',
  availability: 'Open to opportunities',
  resume: '/resume.pdf',
}

export const socialLinks = {
  instagram: profile.instagram.startsWith('[')
    ? '#'
    : `https://instagram.com/${profile.instagram.replace('@', '')}`,
  linkedin: profile.linkedin.startsWith('[') ? '#' : profile.linkedin,
  email: `mailto:${profile.email}`,
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#brands', label: 'Brands' },
  { href: '#meta-ads', label: 'Meta Ads' },
  { href: '#organic-leads', label: 'Organic Leads' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export type BrandPage = {
  title?: string
  handle: string
  insights: string
  grid: string
}

export type Brand = {
  name: string
  category: string
  pages: BrandPage[]
  caption: string
  tags: string[]
}

export const brands: Brand[] = [
  {
    name: 'Sernaya Kids',
    category: 'Kidswear brand',
    pages: [
      {
        handle: '@sernayakids',
        insights: '/images/sernaya/insights.png',
        grid: '/images/sernaya/grid.png',
      },
    ],
    caption:
      "Managed social media content and Meta Ads for Sernaya Kids, a kidswear brand. Worked on creative content, product promotions, audience engagement, and campaign monitoring to strengthen the brand's online presence.",
    tags: ['Content Pillars', 'Reels', 'AI Visuals'],
  },
  {
    name: 'LA Homes',
    category: 'Construction consultancy, Delhi',
    pages: [
      {
        handle: '@lakshayaggarwalhomes',
        insights: '/images/lahomes/insights.png',
        grid: '/images/lahomes/grid.png',
      },
    ],
    caption:
      'LA Homes, a construction and home development brand. Focused on creating engaging creatives around construction, home finishing, and project-related content to strengthen the brand’s digital presence.',
    tags: ['Educational Content', 'Personal Brand', 'Meta-ads'],
  },
  {
    name: 'China Ka Visa',
    category: 'China visa services',
    pages: [
      {
        handle: '@chinakavisa',
        insights: '/images/chinakavisa/insights.png',
        grid: '/images/chinakavisa/grid.png',
      },
    ],
    caption: 'China Visa, a visa assistance brand focused on China travel. Contributed to social media content, visa-related communication, and lead generation activities to connect with potential customers and build the brands online presence.',
    tags: ['Instagram', 'Content', 'Page Growth'],
  },
  {
    name: 'Genex Steel',
    category: 'Premium stainless steel cookware, Sadar Bazaar, Delhi',
    pages: [
      {
        handle: '@genexsteel',
        insights: '/images/genex/insights.png',
        grid: '/images/genex/grid.png',
      },
    ],
    caption:
      'Helped launch the Instagram presence for Genex Steel, a premium cookware and kitchenware store, from the first posts to steady follower growth.',
    tags: ['Product Content', 'Growth'],
  },
  {
    name: 'Ritu G Jain',
    category: '2 pages: Tarot and Numerology',
    pages: [
      {
        title: 'Tarot Page',
        handle: '@tarotwithrituu',
        insights: '/images/ritu-tarot/insights.png',
        grid: '/images/ritu-tarot/grid.png',
      },
      {
        title: 'Numerology Page',
        handle: '@starswithritu',
        insights: '/images/ritu-numerology/insights.png',
        grid: '/images/ritu-numerology/grid.png',
      },
    ],
    caption:
      'Managed social media content for Ritu G. Jain\'s Tarot page, focusing on tarot guidance, engaging creatives, and audience interaction. Worked on marketing for Ritu G. Jain, managing social media content for both Tarot and Numerology pages. Focused on creating engaging creatives, planning informative content, promoting consultations, and improving audience engagement to strengthen the brand\'s online presence.',
    tags: ['Multi-Page', 'Spiritual Niche', 'Consistency'],
  },
  {
    name: 'Woodtrot',
    category: 'Custom furniture, Delhi NCR',
    pages: [
      {
        handle: '@woodtrotofficial',
        insights: '/images/woodtrot/insights.png',
        grid: '/images/woodtrot/grid.jpeg',
      },
    ],
    caption:
      "Woodtrot, a customised furniture brand specialising in premium furniture solutions. Focused on creating engaging social media content, designing product creatives, and showcasing customised furniture and commercial workspace solutions to strengthen the brand’s online presence.",
    tags: ['Instagram', 'Customized Furniture'],
  },
]

export const metaAds = [1, 2].map((n) => ({
  src: `/images/meta-ads/ads-${n}.png`,
  // brand: '[Brand name]',
  // caption: '[Brand name]: [campaign objective and one result]',
}))

export const metaAdsProcess = [
  'Campaign setup and objective selection',
  'Audience targeting and ad set testing',
  'Ad creatives and copy variations',
  'Budget monitoring and performance review',
]

export const organicLeads = [1, 2].map((n) => ({
  src: `/images/leads/lead-${n}.png`,
  // brand: '[Brand name]',
  // caption: '[What kind of enquiry came in and from which post or reel]',
}))

export const experience = [
  {
    date: '[Start month year] to Present',
    role: 'Marketing Executive',
    company: 'Social Maadhyam, Delhi NCR',
    points: [
      'Content calendars, posts and reels',
      'Meta ads campaigns and ad creatives',
      'Instagram Insights tracking and reporting',
      'Generating organic leads through content',
    ],
  },
  {
    date: '[Month year] to [Month year]',
    role: 'YouTube Marketing Intern',
    company: 'SharkMondo Digital',
    points: [
      'Led a team of 9 members, overseeing task allocation and ensuring timely delivery of content across multiple projects',
      'YouTube channel management and optimization',
      'Video content planning and publishing',
      'Thumbnails and visual creatives for better click-through',
      'AI tools for video creation and editing',
      'YouTube content strategy and promotion',
    ],
  },
]

export const keyLearnings = [
  "Building content that fits each brand's niche and audience",
  'Using insights data to decide what to post next',
  'Planning and testing ad creatives and audiences',
  'Staying consistent across many pages at once',
  'Turning engagement into real enquiries',
  'Optimizing YouTube videos for discoverability and retention',
]
