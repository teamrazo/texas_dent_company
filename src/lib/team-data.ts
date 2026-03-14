export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  image: string;
  phone: string;
  email: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  ghlFormId?: string; // HighLevel form ID placeholder
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Cody Wilson',
    role: 'Owner',
    slug: 'cody-wilson',
    image: '/images/team/cody-wilson.jpg',
    phone: '469-966-7937',
    email: 'cwilson@texasdentcompany.com',
    shortBio: 'Texas native and proud father of Easton and Remi. Co-founded Texas Dent Company in 2017.',
    fullBio: `Cody Wilson is a Texas native and proud father of two beautiful children, Easton and Remi. In 2017, Cody co-founded Texas Dent Company with a passion for providing high-quality paintless dent repair (PDR) services.

With years of experience in the automotive repair industry, Cody has built a strong foundation for the company centered on quality craftsmanship, customer education, and integrity. His hands-on approach and dedication to excellence have helped Texas Dent Company grow into a trusted name for hail damage repair across Texas.

When he's not overseeing operations, Cody enjoys spending time with his family and staying active in the local community.`,
    expertise: ['Business Operations', 'Customer Relations', 'Quality Assurance', 'Team Leadership'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Kailey Wilson',
    role: 'Owner',
    slug: 'kailey-wilson',
    image: '/images/team/kailey-wilson.jpg',
    phone: '469-883-4084',
    email: 'kailey@texasdentcompany.com',
    shortBio: 'Mother of two and Texas native. Passionate about storm restoration and helping families recover.',
    fullBio: `Kailey Wilson is a dedicated mother of two and a Texas native through and through. As co-owner of Texas Dent Company, she brings a compassionate approach to storm restoration, understanding firsthand the stress that hail damage can cause for families.

Kailey's passion lies in helping customers navigate the often-confusing insurance claims process while ensuring their vehicles receive top-quality repairs. Her attention to detail and commitment to customer satisfaction have been instrumental in building the company's reputation.

She believes in treating every customer like family and takes pride in the relationships built through honest, transparent service.`,
    expertise: ['Customer Experience', 'Insurance Coordination', 'Business Development', 'Community Relations'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Fritz Torres',
    role: 'Auto Hail Claim Specialist',
    slug: 'fritz-torres-auto-hail-claim-specialist',
    image: '/images/team/fritz-torres.jpg',
    phone: '469-888-8635',
    email: 'ftorres@texasdentcompany.com',
    shortBio: 'God-fearing Christian with 20+ years in customer service and 10+ years in the PDR industry.',
    fullBio: `Fritz Torres is a God-fearing Christian who brings over 20 years of customer service experience and more than 10 years of expertise in the PDR industry to Texas Dent Company.

His deep understanding of both the technical and customer-facing aspects of hail damage repair makes him an invaluable member of the team. Fritz is known for his patience, thoroughness, and ability to explain complex insurance processes in simple terms.

He takes pride in helping customers through every step of their claim journey, from initial inspection to final delivery of their repaired vehicle.`,
    expertise: ['Insurance Claims', 'Customer Education', 'Hail Damage Assessment', 'PDR Expertise'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Kelly Flanery',
    role: 'Shop Coordinator',
    slug: 'kelly-flanery-shop-coordinator',
    image: '/images/team/kelly-flanery.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Former baseball player turned coordinator. Ensures smooth shop operations.',
    fullBio: `Kelly Flanery is a former baseball player who has brought his competitive drive and teamwork skills to Texas Dent Company. As Shop Coordinator, he ensures that daily operations run smoothly and efficiently.

Kelly's athletic background has instilled in him a strong work ethic and the ability to perform under pressure. He excels at coordinating between technicians, managing workflow, and ensuring that every vehicle receives the attention it deserves.

His positive attitude and leadership skills help create a productive and supportive work environment for the entire team.`,
    expertise: ['Shop Operations', 'Workflow Management', 'Team Coordination', 'Customer Communication'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Tim Toshbekov',
    role: 'Shop Coordinator and R&I Specialist',
    slug: 'tim-toshbekov',
    image: '/images/team/tim-toshbekov.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Four+ years in automotive repair. Expert in remove and install procedures.',
    fullBio: `Tim Toshbekov brings over four years of automotive repair experience to his role as Shop Coordinator and R&I Specialist at Texas Dent Company. His expertise in remove and install procedures ensures that vehicles are properly prepared for PDR repairs.

Tim's technical knowledge and attention to detail are essential to the repair process. He understands that proper R&I work is crucial for achieving the best possible results in paintless dent repair.

His dedication to quality and continuous learning makes him an important part of the Texas Dent Company team.`,
    expertise: ['R&I Procedures', 'Automotive Repair', 'Quality Control', 'Technical Operations'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Nelson Hsaio',
    role: 'Shop Coordinator & Claims Specialist',
    slug: 'nelson-hsaio',
    image: '/images/team/nelson-hsaio.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Six+ years in customer service. Dedicated to excellent client experiences.',
    fullBio: `Nelson Hsaio brings over six years of customer service experience to his dual role as Shop Coordinator and Claims Specialist at Texas Dent Company. His dedication to providing excellent client experiences is evident in everything he does.

Nelson excels at both the operational and customer-facing aspects of his role. He coordinates shop activities while also helping customers understand their claims and the repair process.

His ability to multitask and maintain high standards of service makes him an invaluable member of the team.`,
    expertise: ['Shop Coordination', 'Claims Processing', 'Customer Service', 'Operations Management'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Laurie Denton',
    role: 'Administrative Coordinator',
    slug: 'laurie-denton-administrative-coordinator',
    image: '/images/team/laurie-denton.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Sets high standards through customer service expertise and attention to detail.',
    fullBio: `Laurie Denton serves as Administrative Coordinator at Texas Dent Company, where she sets high standards through her customer service expertise and meticulous attention to detail.

Laurie is often the first point of contact for customers, and she takes pride in creating a welcoming and professional experience from the very first interaction. Her organizational skills keep the office running efficiently while ensuring nothing falls through the cracks.

Her commitment to excellence and genuine care for customers embodies the values that Texas Dent Company was built on.`,
    expertise: ['Administrative Support', 'Customer Service', 'Scheduling', 'Office Management'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Willian Soares',
    role: 'Auto Hail Claim Specialist',
    slug: 'willian-soares-auto-hail-claim-specialist',
    image: '/images/team/willian-soares.jpg',
    phone: '469-888-8674',
    email: 'wsoares@texasdentcompany.com',
    shortBio: 'Technician with passion for learning from industry experts. Fluent in English, Spanish, and Portuguese.',
    fullBio: `Willian Soares is an Auto Hail Claim Specialist with a passion for continuous learning and growth in the PDR industry. His multilingual abilities—fluent in English, Spanish, and Portuguese—allow him to serve a diverse customer base effectively.

Willian's dedication to mastering his craft has led him to learn from some of the best experts in the industry. He combines technical knowledge with excellent communication skills to guide customers through the claims process.

His enthusiasm for helping others and commitment to quality make him a valued member of the Texas Dent Company team.`,
    expertise: ['Insurance Claims', 'Multilingual Support', 'Customer Education', 'PDR Techniques'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
  {
    name: 'Nicole Muro',
    role: 'Administrative Assistant',
    slug: 'nicole-muro-administrative-assistant',
    image: '/images/team/nicole-muro.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Specializes in insurance-claim processes and customer support.',
    fullBio: `Nicole Muro serves as Administrative Assistant at Texas Dent Company, specializing in insurance claim processes and customer support. Her knowledge of the claims process helps customers navigate what can often be a confusing experience.

Nicole is committed to providing clear, helpful information to every customer. She understands that dealing with hail damage can be stressful, and she works hard to make the experience as smooth as possible.

Her friendly demeanor and professional approach make her an essential part of the customer service team.`,
    expertise: ['Insurance Claims', 'Customer Support', 'Administrative Tasks', 'Documentation'],
    ghlFormId: 'PLACEHOLDER_FORM_ID',
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find(member => member.slug === slug);
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map(member => member.slug);
}
