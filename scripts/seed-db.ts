import { db } from '@/lib/db'
import { universities, programs } from '@/lib/db/schema'

const UNIVERSITIES = [
  {
    name: 'Tech University',
    location: 'San Francisco, USA',
    description: 'Leading university for technology and innovation',
    website: 'https://techuniversity.edu',
    contactEmail: 'admissions@techuniversity.edu',
  },
  {
    name: 'Business Institute',
    location: 'New York, USA',
    description: 'Premier business school for MBA programs',
    website: 'https://businessinstitute.edu',
    contactEmail: 'admissions@businessinstitute.edu',
  },
  {
    name: 'Innovation Hub',
    location: 'Seattle, USA',
    description: 'Center of excellence in engineering and data science',
    website: 'https://innovationhub.edu',
    contactEmail: 'admissions@innovationhub.edu',
  },
  {
    name: 'Tech Academy',
    location: 'Boston, USA',
    description: 'Specialized tech skills training and certifications',
    website: 'https://techacademy.edu',
    contactEmail: 'admissions@techacademy.edu',
  },
  {
    name: 'Medical University',
    location: 'Chicago, USA',
    description: 'Top healthcare and nursing programs',
    website: 'https://medicaluniversity.edu',
    contactEmail: 'admissions@medicaluniversity.edu',
  },
  {
    name: 'Design Institute',
    location: 'Los Angeles, USA',
    description: 'Creative design and architecture programs',
    website: 'https://designinstitute.edu',
    contactEmail: 'admissions@designinstitute.edu',
  },
]

const PROGRAMS = [
  {
    universityId: 1,
    name: 'Bachelor of Science in Computer Science',
    description: 'Comprehensive program covering software development, algorithms, and AI',
    duration: 48,
    tuition: 25000,
    requirements: JSON.stringify(['High School Diploma', 'SAT/ACT scores']),
    careerOutcomes: JSON.stringify(['Software Engineer', 'AI Specialist', 'Tech Lead']),
  },
  {
    universityId: 2,
    name: 'Master of Business Administration (MBA)',
    description: 'Advanced business management and entrepreneurship program',
    duration: 24,
    tuition: 40000,
    requirements: JSON.stringify(['Bachelor degree', 'GMAT/GRE scores', '3 years work experience']),
    careerOutcomes: JSON.stringify(['Business Manager', 'Entrepreneur', 'Consultant']),
  },
  {
    universityId: 3,
    name: 'Bachelor of Engineering - Data Science',
    description: 'Specialized program in data analytics and machine learning',
    duration: 48,
    tuition: 23000,
    requirements: JSON.stringify(['Math background', 'Programming basics']),
    careerOutcomes: JSON.stringify(['Data Scientist', 'Analytics Engineer', 'AI Developer']),
  },
  {
    universityId: 4,
    name: 'Diploma in Web Development',
    description: 'Hands-on program for modern web development technologies',
    duration: 12,
    tuition: 15000,
    requirements: JSON.stringify(['Basic computer skills']),
    careerOutcomes: JSON.stringify(['Web Developer', 'Front-end Specialist', 'Full Stack Engineer']),
  },
  {
    universityId: 5,
    name: 'Bachelor of Science in Nursing',
    description: 'Comprehensive nursing program with clinical experience',
    duration: 48,
    tuition: 18000,
    requirements: JSON.stringify(['High School Diploma', 'Biology and Chemistry']),
    careerOutcomes: JSON.stringify(['Registered Nurse', 'Clinical Specialist', 'Nurse Manager']),
  },
  {
    universityId: 6,
    name: 'Master of Architecture',
    description: 'Advanced architecture and design thinking program',
    duration: 24,
    tuition: 35000,
    requirements: JSON.stringify(['Bachelor in Architecture or related field', 'Portfolio']),
    careerOutcomes: JSON.stringify(['Architect', 'Urban Planner', 'Design Director']),
  },
]

async function seed() {
  console.log('Starting database seeding...')

  try {
    // Clear existing data
    console.log('Clearing existing data...')
    // Note: In a real app, you'd handle cascading deletes properly

    // Insert universities
    console.log('Inserting universities...')
    for (const uni of UNIVERSITIES) {
      await db.insert(universities).values(uni)
    }

    // Insert programs
    console.log('Inserting programs...')
    for (const prog of PROGRAMS) {
      await db.insert(programs).values(prog)
    }

    console.log('Database seeding completed successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seed()
