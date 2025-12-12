import { Program, EnrollmentHub, Testimonial, NewsArticle, SiteSettings } from '@/types'

export const programs: Program[] = [
  {
    id: "abe",
    title: "Adult Basic Education",
    abbreviation: "ABE",
    description: "Build essential academic skills in reading, writing, and mathematics to prepare for further education and career advancement.",
    detailedDescription: "Adult Basic Education (ABE) provides foundational academic skills development for adults who need to strengthen their educational background. Our comprehensive program focuses on building essential skills in reading, writing, mathematics, and critical thinking to prepare students for success in further education, career training, or employment opportunities.",
    eligibility: "Adults 21+ years old who need foundational academic skills development",
    benefits: [
      "Strengthen fundamental academic skills",
      "Prepare for further education",
      "Improve job prospects",
      "Build confidence and problem-solving abilities",
      "Flexible scheduling to fit your life"
    ],
    features: [
      "Small class sizes for personalized attention",
      "Experienced, supportive instructors",
      "Flexible scheduling options",
      "Free tutoring and academic support",
      "Connection to career services"
    ],
    color: "blue",
    icon: "BookOpen"
  },
  {
    id: "cte",
    title: "Career and Technical Education",
    abbreviation: "CTE",
    description: "Gain job-specific skills and training in high-demand career fields to advance your professional opportunities.",
    detailedDescription: "Career and Technical Education (CTE) programs provide specialized training in high-demand career fields. Our industry-aligned curriculum combines hands-on learning with theoretical knowledge to prepare students for immediate entry into growing sectors of the economy.",
    eligibility: "Adults 21+ years old seeking career-specific training",
    benefits: [
      "Industry-recognized certifications",
      "Hands-on training with current technology",
      "Direct pathways to employment",
      "Partnership with local employers",
      "Career counseling and job placement assistance"
    ],
    features: [
      "State-of-the-art equipment and facilities",
      "Industry-experienced instructors",
      "Internship and apprenticeship opportunities",
      "Resume and interview preparation",
      "Employer networking events"
    ],
    color: "green",
    icon: "Wrench",
    enrollmentForm: {
      url: "https://forms.office.com/r/7LLBMEx28E?origin=lprLink",
      qrCodeAvailable: true,
      quickEnrollment: true
    }
  },
  {
    id: "hse",
    title: "High School Equivalency Preparation",
    abbreviation: "HSE",
    description: "Prepare for and earn your high school equivalency diploma through comprehensive test preparation and academic support.",
    detailedDescription: "High School Equivalency Preparation (HSE) helps adults earn their high school equivalency diploma through comprehensive preparation for the GED, TASC, or HiSET exams. Our program provides the academic foundation and test-taking strategies needed for success.",
    eligibility: "Adults 21+ years old who have not earned a U.S. high school diploma or equivalency",
    benefits: [
      "Earn your high school equivalency diploma",
      "Open doors to higher education",
      "Qualify for better employment opportunities",
      "Boost earning potential",
      "Gain confidence and academic skills"
    ],
    features: [
      "Comprehensive test preparation",
      "Practice exams and study materials",
      "Math, science, social studies, and language arts instruction",
      "Test registration assistance",
      "Post-graduation academic and career counseling"
    ],
    color: "purple",
    icon: "GraduationCap"
  },
  {
    id: "esol",
    title: "English for Speakers of Other Languages",
    abbreviation: "ESOL",
    description: "Develop English language skills for academic, professional, and everyday communication needs.",
    detailedDescription: "English for Speakers of Other Languages (ESOL) programs help non-native English speakers develop the language skills necessary for academic success, career advancement, and daily life in New York City. Our multilevel curriculum addresses all aspects of English language learning.",
    eligibility: "Adults 21+ years old who are non-native English speakers",
    benefits: [
      "Improve English speaking, listening, reading, and writing",
      "Enhance employment opportunities",
      "Better communicate in academic and professional settings",
      "Navigate daily life more confidently",
      "Prepare for citizenship and other exams"
    ],
    features: [
      "Multiple proficiency levels from beginner to advanced",
      "Culturally responsive teaching methods",
      "Integration with other academic programs",
      "Family literacy components",
      "Civic education and community engagement"
    ],
    color: "teal",
    icon: "Globe"
  }
]

export const enrollmentHubs: EnrollmentHub[] = [
  {
    id: "bronx",
    borough: "Bronx",
    name: "Bronx Adult Learning Center",
    address: "1555 Jerome Avenue, Bronx, NY 10452",
    coordinates: {
      lat: 40.8448,
      lng: -73.9185
    },
    phone: "(718) 918-2600",
    email: "bronx@adultedu.nyc",
    hours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 3:00 PM"
    },
    programs: ["ABE", "CTE", "HSE", "ESOL"],
    languages: ["English", "Spanish", "Arabic"],
    accessibility: ["Wheelchair accessible", "ASL interpretation available"]
  },
  {
    id: "brooklyn",
    borough: "Brooklyn",
    name: "Brooklyn Adult Education Center",
    address: "1200 Bay Ridge Avenue, Brooklyn, NY 11219",
    coordinates: {
      lat: 40.6259,
      lng: -74.0053
    },
    phone: "(718) 236-2700",
    email: "brooklyn@adultedu.nyc",
    hours: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 4:00 PM"
    },
    programs: ["ABE", "CTE", "HSE", "ESOL"],
    languages: ["English", "Spanish", "Chinese", "Russian", "Arabic"],
    accessibility: ["Wheelchair accessible", "Elevator access"]
  },
  {
    id: "manhattan",
    borough: "Manhattan",
    name: "Mid-Manhattan Adult Learning Center",
    address: "540 West 49th Street, Manhattan, NY 10019",
    coordinates: {
      lat: 40.7654,
      lng: -73.9866
    },
    phone: "(212) 757-5600",
    email: "manhattan@adultedu.nyc",
    hours: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM"
    },
    programs: ["ABE", "CTE", "HSE", "ESOL"],
    languages: ["English", "Spanish", "French", "Chinese", "Korean"],
    accessibility: ["Wheelchair accessible", "Audio loop system"]
  },
  {
    id: "queens",
    borough: "Queens",
    name: "Queens Adult Education Hub",
    address: "39-15 Queens Boulevard, Queens, NY 11101",
    coordinates: {
      lat: 40.7435,
      lng: -73.9375
    },
    phone: "(718) 937-3900",
    email: "queens@adultedu.nyc",
    hours: {
      monday: "8:00 AM - 8:30 PM",
      tuesday: "8:00 AM - 8:30 PM",
      wednesday: "8:00 AM - 8:30 PM",
      thursday: "8:00 AM - 8:30 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 3:00 PM"
    },
    programs: ["ABE", "CTE", "HSE", "ESOL"],
    languages: ["English", "Spanish", "Bengali", "Hindi", "Chinese"],
    accessibility: ["Wheelchair accessible", "Multilingual signage"]
  },
  {
    id: "staten-island",
    borough: "Staten Island",
    name: "Staten Island Learning Center",
    address: "715 Ocean Terrace, Staten Island, NY 10301",
    coordinates: {
      lat: 40.6303,
      lng: -74.0770
    },
    phone: "(718) 390-8591",
    email: "statenisland@adultedu.nyc",
    hours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 5:00 PM"
    },
    programs: ["ABE", "CTE", "HSE", "ESOL"],
    languages: ["English", "Spanish", "Italian"],
    accessibility: ["Wheelchair accessible", "Parking available"]
  }
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Rodriguez",
    program: "ESOL",
    quote: "The ESOL program changed my life completely. I came to New York speaking very little English, and now I have a good job and can help my children with their homework. The teachers were so patient and understanding.",
    location: "Brooklyn",
    graduationYear: 2023,
    currentRole: "Administrative Assistant",
    featured: true
  },
  {
    id: "2",
    name: "James Chen",
    program: "CTE",
    quote: "The Career and Technical Education program gave me the skills I needed to start my own business. The hands-on training and business courses were exactly what I needed to succeed.",
    location: "Queens",
    graduationYear: 2023,
    currentRole: "Small Business Owner",
    featured: true
  },
  {
    id: "3",
    name: "Michael Thompson",
    program: "HSE",
    quote: "Getting my high school equivalency through this program opened so many doors for me. I'm now enrolled in college and working toward my degree. I never thought it would be possible.",
    location: "Bronx",
    graduationYear: 2022,
    currentRole: "College Student",
    featured: true
  },
  {
    id: "4",
    name: "Sarah Johnson",
    program: "ABE",
    quote: "The Adult Basic Education program helped me build the foundation I needed to pursue my dreams. The support from the instructors was incredible, and I gained confidence in myself.",
    location: "Manhattan",
    graduationYear: 2023,
    currentRole: "Healthcare Worker",
    featured: false
  }
]

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "NYC Adult Education Celebrates Record Graduation Numbers for 2024",
    excerpt: "Over 2,500 students graduated from our programs this year, marking the highest completion rate in our history.",
    content: "This year has been exceptional for NYC Adult Education, with over 2,500 students successfully completing their programs across all five boroughs. The graduation ceremony held at Brooklyn College celebrated achievements in ABE, CTE, HSE, and ESOL programs...",
    category: "achievements",
    author: "NYC Adult Education Team",
    publishDate: "2024-12-15",
    readTime: 3,
    featured: true,
    image: "/images/graduation-celebration.jpg",
    tags: ["graduation", "achievement", "records"]
  },
  {
    id: "2",
    title: "New Healthcare Training Program Launches in Manhattan",
    excerpt: "Expanded CTE offerings now include certified nursing assistant and medical administrative assistant programs.",
    content: "The Mid-Manhattan Adult Learning Center is proud to announce the launch of two new healthcare training programs. These 6-month intensive programs prepare students for high-demand careers in healthcare...",
    category: "programs",
    author: "Dr. Sarah Johnson",
    publishDate: "2024-12-10",
    readTime: 4,
    featured: true,
    image: "/images/healthcare-training.jpg",
    tags: ["CTE", "healthcare", "careers", "manhattan"]
  },
  {
    id: "3",
    title: "Spring 2025 Registration Now Open",
    excerpt: "Early registration begins December 1st for all programs starting in January 2025.",
    content: "Don't miss out on the opportunity to start your educational journey in the new year. Spring 2025 registration is now open for all programs at every enrollment center...",
    category: "enrollment",
    author: "Enrollment Services",
    publishDate: "2024-12-01",
    readTime: 2,
    featured: false,
    image: "/images/adult-learning.jpg",
    tags: ["registration", "spring 2025", "enrollment"]
  }
]

export const siteSettings: SiteSettings = {
  siteName: "NYC Adult Education",
  siteDescription: "Transform Your Future Through Adult Education",
  contactPhone: "(646) 481-8227",
  contactEmail: "info@adultedu.nyc",
  address: "90-01 Sutphin Blvd, Jamaica, NY 11420",
  statistics: {
    schoolsInNetwork: 8,
    studentsEmpowered: 10000,
    graduationRate: "95%",
    careerAdvancers: "80%",
    sitesAcrossNYC: 185
  },
  mission: "The New York City Department of Education Adult Education's mission is to empower adults in their roles as parents, family members, workers, and community members. We promote life-long learning and the development of problem-solving skills through continuous services.",
  vision: "District 79 students are empowered and equipped with the knowledge and skills to navigate life and achieve their college, career, and personal goals. They leverage opportunities, manage challenges, and advocate for themselves and others.",
  socialMedia: {
    instagram: "https://www.instagram.com/adultednyc/",
    facebook: "https://www.facebook.com/adultednyc/",
    twitter: "https://twitter.com/adultednyc"
  },
  languages: [
    "English", "Spanish", "Arabic", "Bengali", "Chinese (Simplified)",
    "Chinese (Traditional)", "French", "Haitian Creole", "Italian",
    "Korean", "Portuguese", "Russian", "Swahili", "Urdu", "Zulu"
  ]
}
