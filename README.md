# NYC Adult Education - Next.js Website

A comprehensive website for the NYC Department of Education Adult Education programs, built with Next.js 15 and modern web technologies.

## 🎯 Overview

This website serves as the digital hub for NYC Adult Education, providing information about programs, enrollment, resources, and community support for adult learners across New York City.

## 🚀 Features

### Core Programs
- **Adult Basic Education (ABE)** - Foundational skills for adult learners
- **Career and Technical Education (CTE)** - Job-specific training and certifications
- **High School Equivalency (HSE)** - GED preparation and testing
- **English for Speakers of Other Languages (ESOL)** - English language learning

### Community Features
- **Literacy Zones** - Community-based learning centers across NYC
- **Resources** - Study materials, tools, and support services
- **Testimonials** - Student success stories and video testimonials
- **Gallery** - Visual showcase of programs and student achievements

### Key Sections
- **Homepage** - Overview of programs and services
- **Program Details** - Comprehensive information about each program
- **Enrollment** - School finder and enrollment information
- **About** - Mission, vision, and program overview
- **Contact** - Get in touch with the team
- **News** - Latest updates and announcements

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── enrollment/        # Enrollment page
│   ├── literacy-zones/    # Literacy zones page
│   ├── news/              # News page
│   ├── programs/          # Program detail pages
│   ├── resources/         # Resources page
│   ├── testimonials/      # Testimonials page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/            # Header, footer, navigation
│   ├── pages/             # Page-specific components
│   ├── program-detail/    # Program detail components
│   ├── sections/          # Reusable section components
│   └── ui/                # UI components (shadcn/ui)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and data
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nyc-adult-education-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: NYC-themed blue and green palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable shadcn/ui components
- **Icons**: Lucide React icons throughout
- **Layout**: Responsive design for all devices

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind Configuration

The project uses Tailwind CSS with custom NYC-themed colors defined in `tailwind.config.js`.

## 📊 Content Management

Content is managed through:
- **Static Data**: Program information in `src/lib/static-data.ts`
- **Type Definitions**: TypeScript interfaces in `src/types/index.ts`
- **Component Props**: Type-safe component interfaces

## 🚀 Deployment

The website is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions about the website or NYC Adult Education programs:

- **Phone**: (646) 481-8227
- **Email**: info@adultedu.nyc
- **Address**: 90-01 Sutphin Blvd, Jamaica, NY 11420

## 📄 License

This project is part of the NYC Department of Education Adult Education initiative.

## 🙏 Acknowledgments

- NYC Department of Education
- Adult Education Team
- All students and educators who make this program possible

---

**Transform Your Future Through Adult Education** 🎓
