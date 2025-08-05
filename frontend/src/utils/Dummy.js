 const data = [
    //Events
    [ 
    {
        type: 'event',
        id: 1,
        category: 'tech',
        name: 'AI Innovation Summit',
        image: 'https://i.pinimg.com/474x/ae/75/4d/ae754d4b76d2f3108efef5f9b7ba7069.jpg',
        location: 'Tech Park, Bengaluru',
        startDate: '5 April',
        endDate: '7 April',
        time: '9:30 am',
        fee: '500',
        deadline: '3 April',
        tags: ['ai', 'machine learning'],
        eligibility: 'IT professionals, students',
        hoster: {
          name: 'Tech Giants Inc',
          type: 'organization',
          image: 'url2'
        },
        contact: [
          {
            name: 'Aarav Sharma',
            image: 'url3',
            profession: 'Tech Lead',
            email: 'aarav@techgiants.com',
            phone: '9876543210'
          }
        ],
        guest: {
          name: 'Nandan Nilekani',
          image: 'url4',
          profession: 'Tech Entrepreneur',
          link1: 'nandan.com',
          link2: 'linkedin/nandan'
        },
        activity: ['hackathon', 'panel discussion', 'demo day'],
        details: 'Annual AI technology conference'
      },

      {
        type: 'event',
        id: 2,
        category: 'cultural',
        name: 'National Dance Fest',
        image: 'https://i.pinimg.com/736x/7d/0e/fc/7d0efcea68935b7dc46997c60192a10d.jpg',
        location: 'India Gate, New Delhi',
        startDate: '10 April',
        endDate: '12 April',
        time: '4:00 pm',
        fee: '0',
        deadline: '8 April',
        tags: ['dance', 'tradition'],
        eligibility: 'All',
        hoster: {
          name: 'Cultural Ministry',
          type: 'organization',
          image: 'url6'
        },
        contact: [
          {
            name: 'Priya Singh',
            image: 'url7',
            profession: 'Event Manager',
            email: 'priya@culture.in',
            phone: '8765432109'
          }
        ],
        guest: {
          name: 'Birju Maharaj',
          image: 'url8',
          profession: 'Kathak Maestro',
          link1: 'birjumaharaj.com',
          link2: 'wiki/birju'
        },
        activity: ['dance workshops', 'cultural shows'],
        details: 'Celebration of Indian dance forms'
      },

      {
        type: 'event',
        id: 3,
        category: 'health',
        name: 'Yoga & Wellness Expo',
        image: 'https://i.pinimg.com/736x/9f/60/55/9f6055127ffc4b8716070b96dab10b47.jpg',
        location: 'Marine Drive, Mumbai',
        startDate: '8 April',
        endDate: '10 April',
        time: '6:00 am',
        fee: '0',
        deadline: '6 April',
        tags: ['yoga', 'nutrition'],
        eligibility: 'All',
        hoster: {
          name: 'AIIMS Mumbai',
          type: 'organization',
          image: 'url10'
        },
        contact: [{
          name: 'Dr. Ananya Reddy',
          image: 'url11',
          profession: 'Physician',
          email: 'ananya@aiims.in',
          phone: '9123456780'
        }],
        guest: {
          name: 'Baba Ramdev',
          image: 'url12',
          profession: 'Yoga Guru',
          link1: 'patanjali.com',
          link2: 'youtube/ramdev'
        },
        activity: ['morning yoga', 'health checkups', 'meditation'],
        details: 'Holistic health awareness program'
      },
    
      // 4. Science Event
      {
        type: 'event',
        id: 4,
        category: 'science',
        name: 'Space Exploration Symposium',
        image: 'https://i.pinimg.com/736x/fa/8f/3c/fa8f3ca593efdf796ca1d669d4382e82.jpg',
        location: 'VSSC, Thiruvananthapuram',
        startDate: '12 April',
        endDate: '14 April',
        time: '10:00 am',
        fee: '200',
        deadline: '10 April',
        tags: ['space', 'astrophysics'],
        eligibility: 'Science students',
        hoster: {
          name: 'ISRO',
          type: 'organization',
          image: 'url14'
        },
        contact: [{
          name: 'Dr. K. Sivan',
          image: 'url15',
          profession: 'Scientist',
          email: 'sivan@isro.gov',
          phone: '8989898989'
        }],
        guest: {
          name: 'Rakesh Sharma',
          image: 'url16',
          profession: 'Astronaut',
          link1: 'isro.gov',
          link2: 'wiki/rakesh'
        },
        activity: ['rocket demo', 'planetarium show', 'Q&A'],
        details: 'Celebrating India\'s space achievements'
      },
    
      // 5. Education Event
      {
        type: 'event',
        id: 5,
        category: 'education',
        name: 'Digital Learning Conference',
        image: 'https://i.pinimg.com/736x/97/0d/89/970d89828b1a0ac20ef41693821e9d76.jpg',
        location: 'IIT Delhi',
        startDate: '15 April',
        endDate: '17 April',
        time: '9:00 am',
        fee: '300',
        deadline: '13 April',
        tags: ['edtech', 'online'],
        eligibility: 'Educators, students',
        hoster: {
          name: 'NCERT',
          type: 'organization',
          image: 'url18'
        },
        contact: [{
          name: 'Prof. Meena Kapoor',
          image: 'url19',
          profession: 'Academic Head',
          email: 'meena@ncert.nic.in',
          phone: '7878787878'
        }],
        guest: {
          name: 'Byju Raveendran',
          image: 'url20',
          profession: 'EdTech Founder',
          link1: 'byjus.com',
          link2: 'linkedin/byju'
        },
        activity: ['workshops', 'product demos', 'seminars'],
        details: 'Future of digital education in India'
      },
    
      // 6. Business Event
      {
        type: 'event',
        id: 6,
        category: 'business',
        name: 'Startup Mahakumbh',
        image: 'https://i.pinimg.com/474x/9b/49/ef/9b49ef45f0ff40e860bccfdc3afdb1c2.jpg',
        location: 'Pragati Maidan, Delhi',
        startDate: '18 April',
        endDate: '20 April',
        time: '11:00 am',
        fee: '1500',
        deadline: '15 April',
        tags: ['startups', 'funding'],
        eligibility: 'Entrepreneurs',
        hoster: {
          name: 'NASSCOM',
          type: 'organization',
          image: 'url22'
        },
        contact: [{
          name: 'Rajat Sharma',
          image: 'url23',
          profession: 'Investor',
          email: 'rajat@nasscom.in',
          phone: '6789067890'
        }],
        guest: {
          name: 'Kunal Shah',
          image: 'url24',
          profession: 'Fintech Founder',
          link1: 'cred.com',
          link2: 'twitter/kunal'
        },
        activity: ['pitching', 'networking', 'masterclasses'],
        details: 'India\'s largest startup gathering'
      },
    
      // 7. Cultural Event
      {
        type: 'event',
        id: 7,
        category: 'cultural',
        name: 'Sufi Music Festival',
        image: 'https://i.pinimg.com/736x/5b/fe/e8/5bfee861388c5996d3b6e83791aa63a2.jpg',
        location: 'Nizamuddin Dargah, Delhi',
        startDate: '21 April',
        endDate: '23 April',
        time: '7:00 pm',
        fee: '0',
        deadline: '19 April',
        tags: ['music', 'spiritual'],
        eligibility: 'All',
        hoster: {
          name: 'Ministry of Culture',
          type: 'organization',
          image: 'url26'
        },
        contact: [{
          name: 'Zainab Khan',
          image: 'url27',
          profession: 'Event Coordinator',
          email: 'zainab@culture.gov.in',
          phone: '9876543211'
        }],
        guest: {
          name: 'Rahat Fateh Ali Khan',
          image: 'url28',
          profession: 'Sufi Singer',
          link1: 'rahat.com',
          link2: 'youtube/rahat'
        },
        activity: ['qawwali nights', 'poetry sessions'],
        details: 'Celebration of Sufi traditions'
      },
    
      // 8. Health Event
      {
        type: 'event',
        id: 8,
        category: 'health',
        name: 'Mental Health Awareness Camp',
        image: 'https://i.pinimg.com/474x/b1/e1/8d/b1e18d11762933e43f67aba3f432dd13.jpg',
        location: 'Cubbon Park, Bengaluru',
        startDate: '24 April',
        endDate: '26 April',
        time: '3:00 pm',
        fee: '0',
        deadline: '22 April',
        tags: ['mental health', 'counseling'],
        eligibility: 'All',
        hoster: {
          name: 'NIMHANS',
          type: 'organization',
          image: 'url30'
        },
        contact: [{
          name: 'Dr. Anjali Rao',
          image: 'url31',
          profession: 'Psychiatrist',
          email: 'anjali@nimhans.ac.in',
          phone: '8877665544'
        }],
        guest: {
          name: 'Deepika Padukone',
          image: 'url32',
          profession: 'Mental Health Advocate',
          link1: 'livelovefoundation.org',
          link2: 'instagram/deepika'
        },
        activity: ['therapy sessions', 'workshops', 'meditation'],
        details: 'Breaking mental health stigma'
      },
    
      // 9. Tech Event
      {
        type: 'event',
        id: 9,
        category: 'tech',
        name: 'Blockchain Hackathon',
        image: 'https://i.pinimg.com/736x/a7/d6/d4/a7d6d41259fe4a1c5b64424319f8ed2a.jpg',
        location: 'HITEC City, Hyderabad',
        startDate: '27 April',
        endDate: '29 April',
        time: '10:00 am',
        fee: '700',
        deadline: '25 April',
        tags: ['blockchain', 'web3'],
        eligibility: 'Developers',
        hoster: {
          name: 'T-Hub',
          type: 'organization',
          image: 'url34'
        },
        contact: [{
          name: 'Arjun Mehta',
          image: 'url35',
          profession: 'Tech Lead',
          email: 'arjun@thub.co.in',
          phone: '7788994455'
        }],
        guest: {
          name: 'Vitalik Buterin',
          image: 'url36',
          profession: 'Ethereum Founder',
          link1: 'ethereum.org',
          link2: 'twitter/vitalik'
        },
        activity: ['coding marathon', 'keynotes', 'networking'],
        details: 'Building decentralized solutions'
      },
    
      // 10. Science Event
      {
        type: 'event',
        id: 10,
        category: 'science',
        name: 'National Robotics Challenge',
        image: 'https://i.pinimg.com/736x/cb/2f/4f/cb2f4f147224c9ac61ac4b7ebbef39af.jpg',
        location: 'IIT Bombay',
        startDate: '30 April',
        endDate: '2 May',
        time: '9:30 am',
        fee: '400',
        deadline: '28 April',
        tags: ['robotics', 'automation'],
        eligibility: 'Engineering students',
        hoster: {
          name: 'DRDO',
          type: 'organization',
          image: 'url38'
        },
        contact: [{
          name: 'Dr. Ravi Verma',
          image: 'url39',
          profession: 'Robotics Expert',
          email: 'ravi@drdo.in',
          phone: '9898989898'
        }],
        guest: {
          name: 'Milind Dham',
          image: 'url40',
          profession: 'Tech Entrepreneur',
          link1: 'ideaforge.in',
          link2: 'linkedin/milind'
        },
        activity: ['competitions', 'demos', 'workshops'],
        details: 'Advancing robotics innovation'
      },

      {
        type: 'event',
        id: 11,
        category: 'business',
        name: 'Financial Literacy Workshop',
        image: 'https://i.pinimg.com/474x/24/ef/68/24ef687bda0e5622cda9cdc3b8ce263f.jpg',
        location: 'T-Nagar, Chennai',
        startDate: '3 May',
        endDate: '5 May',
        time: '10:30 am',
        fee: '0',
        deadline: '1 May',
        tags: ['finance', 'investment'],
        eligibility: 'All adults',
        hoster: {
          name: 'SEBI',
          type: 'organization',
          image: 'url42'
        },
        contact: [{
          name: 'Rajeshwari Iyer',
          image: 'url43',
          profession: 'Financial Advisor',
          email: 'rajeshwari@sebi.in',
          phone: '9000012345'
        }],
        guest: {
          name: 'Naina Lal Kidwai',
          image: 'url44',
          profession: 'Banking Leader',
          link1: 'nainakidwai.com',
          link2: 'linkedin/naina'
        },
        activity: ['seminars', 'Q&A sessions', 'planning tools'],
        details: 'Empowering financial decision-making'
      },
    
      // 12. Education Event - Teacher Training
      {
        type: 'event',
        id: 12,
        category: 'education',
        name: 'Digital Teaching Workshop',
        image: 'https://i.pinimg.com/474x/d6/a0/75/d6a07547438fd6f5380d01310efffdc6.jpg',
        location: 'BHEL Campus, Bhopal',
        startDate: '6 May',
        endDate: '8 May',
        time: '9:00 am',
        fee: '200',
        deadline: '4 May',
        tags: ['pedagogy', 'elearning'],
        eligibility: 'Educators',
        hoster: {
          name: 'DIET Bhopal',
          type: 'organization',
          image: 'url46'
        },
        contact: [{
          name: 'Prof. Sanjay Verma',
          image: 'url47',
          profession: 'Training Head',
          email: 'sanjay@dietbpl.in',
          phone: '7987654321'
        }],
        guest: {
          name: 'Kiran Bir Sethi',
          image: 'url48',
          profession: 'Education Reformer',
          link1: 'designforchange.com',
          link2: 'twitter/kiranbir'
        },
        activity: ['tool demos', 'lesson planning', 'peer reviews'],
        details: 'Enhancing digital teaching skills'
      },
    
      // 13. Health Event - Ayurveda
      {
        type: 'event',
        id: 13,
        category: 'health',
        name: 'Ayurveda Mahotsav',
        image: 'https://i.pinimg.com/474x/24/67/c2/2467c21cab31dfe85ece1963b6bb39fa.jpg',
        location: 'Kovalam Beach, Kerala',
        startDate: '9 May',
        endDate: '11 May',
        time: '7:30 am',
        fee: '0',
        deadline: '7 May',
        tags: ['ayurveda', 'wellness'],
        eligibility: 'All',
        hoster: {
          name: 'AYUSH Ministry',
          type: 'organization',
          image: 'url50'
        },
        contact: [{
          name: 'Dr. Vaidya Sharma',
          image: 'url51',
          profession: 'Ayurvedacharya',
          email: 'sharma@ayush.gov',
          phone: '8123456790'
        }],
        guest: {
          name: 'Dr. Pratap Chauhan',
          image: 'url52',
          profession: 'Jiva Ayurveda Founder',
          link1: 'jiva.com',
          link2: 'youtube/jiva'
        },
        activity: ['panchakarma demo', 'herbal walks', 'consultations'],
        details: 'Traditional healing systems showcase'
      },
    
      // 14. Tech Event - Cybersecurity
      {
        type: 'event',
        id: 14,
        category: 'tech',
        name: 'Cyber Suraksha Summit',
        image: 'https://i.pinimg.com/474x/5c/59/16/5c5916389ddb03540294e152b3724e09.jpg',
        location: 'Hinjewadi IT Park, Pune',
        startDate: '12 May',
        endDate: '14 May',
        time: '10:00 am',
        fee: '1500',
        deadline: '10 May',
        tags: ['cybersecurity', 'hacking'],
        eligibility: 'IT professionals',
        hoster: {
          name: 'CERT-In',
          type: 'organization',
          image: 'url54'
        },
        contact: [{
          name: 'Ankit Patel',
          image: 'url55',
          profession: 'Security Analyst',
          email: 'ankit@cert-in.org',
          phone: '9888877777'
        }],
        guest: {
          name: 'Trishneet Arora',
          image: 'url56',
          profession: 'Ethical Hacker',
          link1: 'tacsecurity.com',
          link2: 'twitter/trishneet'
        },
        activity: ['CTF competition', 'dark web demo', 'workshops'],
        details: 'Combating cyber threats in digital India'
      },
    
      // 15. Cultural Event - Textiles
      {
        type: 'event',
        id: 15,
        category: 'cultural',
        name: 'Varanasi Weaving Expo',
        image: 'https://i.pinimg.com/474x/4d/06/e3/4d06e3594c6dc6e4fb2252539759f234.jpg',
        location: 'Assi Ghat, Varanasi',
        startDate: '15 May',
        endDate: '17 May',
        time: '11:00 am',
        fee: '100',
        deadline: '13 May',
        tags: ['handloom', 'crafts'],
        eligibility: 'All',
        hoster: {
          name: 'Handloom Board',
          type: 'organization',
          image: 'url58'
        },
        contact: [{
          name: 'Rukmini Devi',
          image: 'url59',
          profession: 'Textile Conservator',
          email: 'rukmini@handloom.in',
          phone: '7234567890'
        }],
        guest: {
          name: 'Sabyasachi Mukherjee',
          image: 'url60',
          profession: 'Fashion Designer',
          link1: 'sabyasachi.com',
          link2: 'instagram/sabyasachi'
        },
        activity: ['weaving demo', 'fashion show', 'exhibition'],
        details: 'Celebrating Banarasi silk heritage'
      },
    
      // 16. Science Event - Climate
      {
        type: 'event',
        id: 16,
        category: 'science',
        name: 'NE Climate Conclave',
        image: 'https://i.pinimg.com/474x/71/d0/64/71d0644de1f90d78770c2e54a701435b.jpg',
        location: 'IIT Guwahati',
        startDate: '18 May',
        endDate: '20 May',
        time: '9:30 am',
        fee: '0',
        deadline: '16 May',
        tags: ['climate', 'biodiversity'],
        eligibility: 'Researchers',
        hoster: {
          name: 'ICAR',
          type: 'organization',
          image: 'url62'
        },
        contact: [{
          name: 'Dr. Anil Borah',
          image: 'url63',
          profession: 'Climate Scientist',
          email: 'aborah@icar.in',
          phone: '9080706050'
        }],
        guest: {
          name: 'Dr. Raghunath Mashelkar',
          image: 'url64',
          profession: 'Environmentalist',
          link1: 'mashelkar.com',
          link2: 'linkedin/rmashelkar'
        },
        activity: ['field trips', 'paper presentations', 'documentaries'],
        details: 'Addressing Northeast ecological challenges'
      },
    
      // 17. Education Event - Career Fair
      {
        type: 'event',
        id: 17,
        category: 'education',
        name: 'Kolkata Career Mela',
        image: 'https://i.pinimg.com/474x/47/9c/fc/479cfc5e53bb21d1ec0a369127c3e8ae.jpg',
        location: 'Science City, Kolkata',
        startDate: '21 May',
        endDate: '23 May',
        time: '10:00 am',
        fee: '0',
        deadline: '19 May',
        tags: ['jobs', 'career'],
        eligibility: 'Graduates',
        hoster: {
          name: 'NSDC',
          type: 'organization',
          image: 'url66'
        },
        contact: [{
          name: 'Sohini Banerjee',
          image: 'url67',
          profession: 'Career Counselor',
          email: 'sohini@nsdc.co.in',
          phone: '9876543212'
        }],
        guest: {
          name: 'Ronnie Screwvala',
          image: 'url68',
          profession: 'Entrepreneur',
          link1: 'upgrad.com',
          link2: 'twitter/ronnies'
        },
        activity: ['interviews', 'aptitude tests', 'mock GD'],
        details: 'Connecting talent with opportunities'
      },
    
      // 18. Business Event - EXIM
      {
        type: 'event',
        id: 18,
        category: 'business',
        name: 'Surat EXIM Workshop',
        image: 'https://i.pinimg.com/474x/84/54/92/8454929e4c964f9ebd4f32a60581793f.jpg',
        location: 'Diamond Bourse, Surat',
        startDate: '24 May',
        endDate: '26 May',
        time: '2:00 pm',
        fee: '2000',
        deadline: '22 May',
        tags: ['export', 'import'],
        eligibility: 'Business owners',
        hoster: {
          name: 'FIEO',
          type: 'organization',
          image: 'url70'
        },
        contact: [{
          name: 'Jignesh Shah',
          image: 'url71',
          profession: 'Trade Analyst',
          email: 'jignesh@fieo.org',
          phone: '8989898988'
        }],
        guest: {
          name: 'Nitin Gadkari',
          image: 'url72',
          profession: 'Union Minister',
          link1: 'indiainbusiness.gov',
          link2: 'linkedin/nitingadkari'
        },
        activity: ['case studies', 'policy analysis', 'B2B meets'],
        details: "Boosting India's export potential"
      },
    
      // 19. Health Event - Organ Donation
      {
        type: 'event',
        id: 19,
        category: 'health',
        name: 'Pledge Life Drive',
        image: 'https://i.pinimg.com/474x/84/54/92/8454929e4c964f9ebd4f32a60581793f.jpg',
        location: 'Sector 17 Plaza, Chandigarh',
        startDate: '27 May',
        endDate: '29 May',
        time: '10:00 am',
        fee: '0',
        deadline: '25 May',
        tags: ['organ donation', 'awareness'],
        eligibility: '18+ Indian citizens',
        hoster: {
          name: 'PGI Chandigarh',
          type: 'organization',
          image: 'url74'
        },
        contact: [{
          name: 'Dr. Harpreet Singh',
          image: 'url75',
          profession: 'Transplant Surgeon',
          email: 'harpreet@pgi.in',
          phone: '7080808080'
        }],
        guest: {
          name: 'Dr. Sunil Shroff',
          image: 'url76',
          profession: 'MOHAN Foundation',
          link1: 'mohanfoundation.org',
          link2: 'twitter/mohanfoundation'
        },
        activity: ['pledge camp', 'success stories', 'medical checkups'],
        details: 'Promoting organ donation awareness'
      },
    
      // 20. Tech Event - IoT
      {
        type: 'event',
        id: 20,
        category: 'tech',
        name: 'Smart India Hackathon',
        image: 'https://i.pinimg.com/474x/5b/dc/10/5bdc1011d9eb8d138d3a04df8dcae3e3.jpg',
        location: 'IIsc Bengaluru',
        startDate: '30 May',
        endDate: '1 June',
        time: '8:00 am',
        fee: '500',
        deadline: '28 May',
        tags: ['iot', 'smart cities'],
        eligibility: 'Engineering students',
        hoster: {
          name: 'MEITY',
          type: 'organization',
          image: 'url78'
        },
        contact: [{
          name: 'Aruna Sundarajan',
          image: 'url79',
          profession: 'IT Secretary',
          email: 'aruna@meity.gov.in',
          phone: '8007006005'
        }],
        guest: {
          name: 'Nandan Nilekani',
          image: 'url80',
          profession: 'Tech Visionary',
          link1: 'ekstep.org',
          link2: 'linkedin/nandan'
        },
        activity: ['prototyping', 'mentor sessions', 'product showcase'],
        details: 'Building IoT solutions for urban India'
      }
    ],
    //Challenges
    [
        {
            type: 'challenges',
            id: 21,
            category: 'hackathon',
            name: 'AI Innovation Challenge',
            image: 'https://i.pinimg.com/474x/bc/4e/33/bc4e3344f783a755b55282336ecb943e.jpg',
            location: 'Tech Park, Hyderabad',
            startDate: '15 April',
            endDate: '17 April',
            time: '9:00 am',
            fee: '500',
            deadline: '12 April',
            tags: ['machine learning', 'nlp'],
            eligibility: 'developers, students',
            hoster: {
              name: 'IIIT Hyderabad',
              type: 'organization',
              image: 'https://picsum.photos/seed/iiith/400/300'
            },
            contact: [
              {
                name: 'Dr. Anil Kumar',
                image: 'https://picsum.photos/seed/contact1/200/200',
                profession: 'Professor',
                email: 'anil@iiit.ac.in',
                phone: '9123456789'
              },
              {
                name: 'Priya Sharma',
                image: 'https://picsum.photos/seed/contact2/200/200',
                profession: 'Student Coordinator',
                email: 'priya@iiit.ac.in',
                phone: '8877665544'
              }
            ],
            prize: {
              totalPrize: '150000',
              rank1: '75000',
              rank2: '50000',
              rank3: '25000'
            },
            duration: '36 hours',
            teamSize: '3-5',
            details: 'Build innovative AI solutions for real-world problems'
          },

          {
            type: 'challenges',
            id: 22,
            category: 'tech',
            name: 'Blockchain Buildathon',
            image: 'https://i.pinimg.com/474x/e7/34/6d/e7346dcd6492cdb5e888c6f7a28e59ef.jpg',
            location: 'Whitefield, Bengaluru',
            startDate: '22 April',
            endDate: '24 April',
            time: '10:00 am',
            fee: '1000',
            deadline: '19 April',
            tags: ['web3', 'smart contracts'],
            eligibility: 'developers, startups',
            hoster: {
              name: 'NASSCOM',
              type: 'organization',
              image: 'https://picsum.photos/seed/nasscom/400/300'
            },
            contact: [
              {
                name: 'Rahul Verma',
                image: 'https://picsum.photos/seed/contact3/200/200',
                profession: 'Tech Lead',
                email: 'rahul@nasscom.in',
                phone: '9988776655'
              }
            ],
            prize: {
              totalPrize: '300000',
              rank1: '150000',
              rank2: '100000',
              rank3: '50000'
            },
            duration: '48 hours',
            teamSize: '2-4',
            details: 'Develop decentralized applications for finance sector'
          },
          // Remaining 18 entries
          {
            type: 'challenges',
            id: 23,
            category: 'health',
            name: 'MedTech Hack',
            image: 'https://i.pinimg.com/474x/1b/17/5d/1b175d57090dd8c1ab290e0cd12fb2af.jpg',
            location: 'AIIMS Delhi',
            startDate: '5 May',
            endDate: '7 May',
            time: '8:00 am',
            fee: '0',
            deadline: '2 May',
            tags: ['healthtech', 'biotech'],
            eligibility: 'medical students, engineers',
            hoster: {
              name: 'Ministry of Health',
              type: 'government',
              image: 'https://picsum.photos/seed/moh/400/300'
            },
            contact: [
              {
                name: 'Dr. Nandini Rao',
                image: 'https://picsum.photos/seed/contact4/200/200',
                profession: 'Chief Coordinator',
                email: 'nrao@health.gov.in',
                phone: '9876543210'
              }
            ],
            prize: {
              totalPrize: '500000',
              rank1: '250000',
              rank2: '150000',
              rank3: '100000'
            },
            duration: '72 hours',
            teamSize: '4-6',
            details: 'Develop solutions for healthcare accessibility'
          },

          {
            type: 'challenges',
            id: 24,
            category: 'education',
            name: 'EdTech Innovation Challenge',
            image: 'https://i.pinimg.com/474x/e2/fc/b8/e2fcb8abc5ca76ea9bdb71f6c3dc1e4e.jpg',
            location: 'IIT Bombay',
            startDate: '12 May',
            endDate: '14 May',
            time: '9:30 am',
            fee: '300',
            deadline: '9 May',
            tags: ['elearning', 'gamification'],
            eligibility: 'educators, developers',
            hoster: {
              name: "BYJU'S",
              type: 'company',
              image: 'https://picsum.photos/seed/byjus/400/300'
            },
            contact: [
              {
                name: 'Arjun Mehta',
                image: 'https://picsum.photos/seed/contact5/200/200',
                profession: 'Product Manager',
                email: 'arjun@byjus.com',
                phone: '7788994455'
              }
            ],
            prize: {
              totalPrize: '200000',
              rank1: '100000',
              rank2: '60000',
              rank3: '40000'
            },
            duration: '24 hours',
            teamSize: '2-3',
            details: 'Create innovative educational technology solutions'
          },

          {
            type: 'challenges',
            id: 25,
            category: 'cultural',
            name: 'Digital Art Marathon',
            image: 'https://i.pinimg.com/736x/18/1a/44/181a44121cc6a60166abf0eb98a82ae8.jpg',
            location: 'Jaipur Art College',
            startDate: '18 April',
            endDate: '20 April',
            time: '10:00 am',
            fee: '200',
            deadline: '15 April',
            tags: ['digital art', 'culture'],
            eligibility: 'art students, designers',
            hoster: {
              name: 'National Institute of Design',
              type: 'organization',
              image: 'https://picsum.photos/seed/nid/400/300'
            },
            contact: [
              {
                name: 'Riya Mehta',
                image: 'https://picsum.photos/seed/contact6/200/200',
                profession: 'Art Director',
                email: "riya@nid.edu",
                phone: "9823456712"
              }
            ],
            prize: {
              totalPrize: '75000',
              rank1: '40000',
              rank2: '25000',
              rank3: '10000'
            },
            duration: '48 hours',
            teamSize: '1-2',
            details: 'Create digital art pieces celebrating Indian heritage'
          },
        
          // 6. Science Challenge
          {
            type: 'challenges',
            id: 26,
            category: 'science',
            name: 'Renewable Energy Hack',
            image: 'https://i.pinimg.com/474x/c3/5f/51/c35f51fa513ce60ba1b1ee3ee09a054d.jpg',
            location: 'IIT Madras',
            startDate: '25 April',
            endDate: '27 April',
            time: '8:30 am',
            fee: '0',
            deadline: '22 April',
            tags: ['solar', 'sustainability'],
            eligibility: 'engineering students',
            hoster: {
              name: 'Ministry of New Energy',
              type: 'government',
              image: 'https://picsum.photos/seed/mne/400/300'
            },
            contact: [
              {
                name: 'Dr. Vikram Singh',
                image: 'https://picsum.photos/seed/contact7/200/200',
                profession: 'Energy Scientist',
                email: "vikram@mne.gov.in",
                phone: "9444455555"
              }
            ],
            prize: {
              totalPrize: '500000',
              rank1: '300000',
              rank2: '150000',
              rank3: '50000'
            },
            duration: '72 hours',
            teamSize: '3-4',
            details: 'Develop innovative renewable energy solutions'
          },
        
          // 7. Business Challenge
          {
            type: 'challenges',
            id: 27,
            category: 'business',
            name: 'FinTech Innovation Challenge',
            image: 'https://i.pinimg.com/474x/42/2a/a0/422aa0225163c863e6c174d715f7ea6f.jpg',
            location: 'BSE Building, Mumbai',
            startDate: '2 May',
            endDate: '4 May',
            time: '9:00 am',
            fee: '1500',
            deadline: '28 April',
            tags: ['banking', 'finance'],
            eligibility: 'MBA students, startups',
            hoster: {
              name: 'RBI Innovation Hub',
              type: 'organization',
              image: 'https://picsum.photos/seed/rbi/400/300'
            },
            contact: [
              {
                name: 'Naina Patel',
                image: 'https://picsum.photos/seed/contact8/200/200',
                profession: 'Financial Analyst',
                email: "naina@rbi.in",
                phone: "7890123456"
              }
            ],
            prize: {
              totalPrize: '1000000',
              rank1: '500000',
              rank2: '300000',
              rank3: '200000'
            },
            duration: '48 hours',
            teamSize: '2-5',
            details: 'Create next-generation financial technology solutions'
          },
        
          // 8. Health Challenge
          {
            type: 'challenges',
            id: 28,
            category: 'health',
            name: 'Mental Health Tech Sprint',
            image: 'https://i.pinimg.com/474x/fa/35/a7/fa35a7ac484866340f0643178df06bd7.jpg',
            location: 'NIMHANS Bengaluru',
            startDate: '9 May',
            endDate: '11 May',
            time: '10:00 am',
            fee: '0',
            deadline: '6 May',
            tags: ['mental health', 'wellness'],
            eligibility: 'psychologists, developers',
            hoster: {
              name: 'NIMHANS',
              type: 'organization',
              image: 'https://picsum.photos/seed/nimhans/400/300'
            },
            contact: [
              {
                name: 'Dr. Arjun Reddy',
                image: 'https://picsum.photos/seed/contact9/200/200',
                profession: 'Psychiatrist',
                email: "arjun@nimhans.in",
                phone: "8055667744"
              }
            ],
            prize: {
              totalPrize: '300000',
              rank1: '150000',
              rank2: '100000',
              rank3: '50000'
            },
            duration: '24 hours',
            teamSize: '2-3',
            details: 'Build technology solutions for mental health awareness'
          },
        
          // 9. Education Challenge
          {
            type: 'challenges',
            id: 29,
            category: 'education',
            name: 'Rural EdTech Challenge',
            image: 'https://i.pinimg.com/474x/4b/6d/f0/4b6df00579d31225ff5f96031002707c.jpg',
            location: 'IIM Ahmedabad',
            startDate: '16 May',
            endDate: '18 May',
            time: '8:00 am',
            fee: '500',
            deadline: '13 May',
            tags: ['rural', 'education'],
            eligibility: 'social entrepreneurs',
            hoster: {
              name: 'AICTE',
              type: 'organization',
              image: 'https://picsum.photos/seed/aicte/400/300'
            },
            contact: [
              {
                name: 'Rajeshwari Iyer',
                image: 'https://picsum.photos/seed/contact10/200/200',
                profession: 'Education Officer',
                email: "rajeshwari@aicte.in",
                phone: "9876543211"
              }
            ],
            prize: {
              totalPrize: '250000',
              rank1: '120000',
              rank2: '80000',
              rank3: '50000'
            },
            duration: '36 hours',
            teamSize: '2-4',
            details: 'Develop solutions for rural education improvement'
          },
        
          // 10-20. Additional Challenges
          {
            type: 'challenges',
            id: 30,
            category: 'tech',
            name: 'Cyber Security Showdown',
            image: 'https://i.pinimg.com/474x/3d/d4/da/3dd4da465f06c011b0b90bcd120536cd.jpg',
            location: 'DRDO Delhi',
            startDate: '23 May',
            endDate: '25 May',
            time: '10:00 am',
            fee: '2000',
            deadline: '20 May',
            tags: ['security', 'hacking'],
            eligibility: 'ethical hackers',
            hoster: {
              name: 'CERT-In',
              type: 'government',
              image: 'https://picsum.photos/seed/cert/400/300'
            },
            contact: [
              {
                name: 'Ankit Shah',
                image: 'https://picsum.photos/seed/contact11/200/200',
                profession: 'Security Expert',
                email: "ankit@cert.in",
                phone: "8899776655"
              }
            ],
            prize: {
              totalPrize: '750000',
              rank1: '400000',
              rank2: '250000',
              rank3: '100000'
            },
            duration: '24 hours',
            teamSize: '1-2',
            details: 'Find and fix critical security vulnerabilities'
          },

          {
            type: 'challenges',
            id: 31,
            category: 'tech',
            name: 'Smart Farming Challenge',
            image: 'https://i.pinimg.com/474x/0b/b9/99/0bb99963cc9f5094d14c819d36c7c09c.jpg',
            location: 'Punjab Agricultural University, Ludhiana',
            startDate: '30 May',
            endDate: '1 June',
            time: '7:30 am',
            fee: '0',
            deadline: '27 May',
            tags: ['agriculture', 'iot'],
            eligibility: 'agriculture students, engineers',
            hoster: {
              name: 'ICAR',
              type: 'government',
              image: 'https://picsum.photos/seed/icar11/400/300'
            },
            contact: [
              {
                name: 'Harpreet Singh',
                image: 'https://picsum.photos/seed/contact11/200/200',
                profession: 'Agri Scientist',
                email: "harpreet@icar.in",
                phone: "9876543212"
              }
            ],
            prize: {
              totalPrize: '400000',
              rank1: '200000',
              rank2: '150000',
              rank3: '50000'
            },
            duration: '48 hours',
            teamSize: '3-5',
            details: 'Develop IoT solutions for precision farming'
          },
        
          // 12. Tourism Innovation Challenge
          {
            type: 'challenges',
            id: 32,
            category: 'cultural',
            name: 'Incredible India Hack',
            image: 'https://i.pinimg.com/474x/7a/dd/c4/7addc46af04e63e7a92a1e8cc3a224cb.jpg',
            location: 'Jaipur Fort, Rajasthan',
            startDate: '6 June',
            endDate: '8 June',
            time: '10:00 am',
            fee: '500',
            deadline: '3 June',
            tags: ['tourism', 'ar/vr'],
            eligibility: 'designers, developers',
            hoster: {
              name: 'Ministry of Tourism',
              type: 'government',
              image: 'https://picsum.photos/seed/mot12/400/300'
            },
            contact: [
              {
                name: 'Priyanka Sharma',
                image: 'https://picsum.photos/seed/contact12/200/200',
                profession: 'Tourism Officer',
                email: "priyanka@tourism.gov.in",
                phone: "7788996655"
              }
            ],
            prize: {
              totalPrize: '600000',
              rank1: '300000',
              rank2: '200000',
              rank3: '100000'
            },
            duration: '72 hours',
            teamSize: '2-4',
            details: 'Create immersive tourism experiences using AR/VR'
          },
        
          // 13. Healthcare Access Challenge
          {
            type: 'challenges',
            id: 33,
            category: 'health',
            name: 'Rural Health Tech Sprint',
            image: 'https://i.pinimg.com/474x/75/13/ce/7513ce998d7c95a065e038e2b7f3fe55.jpg',
            location: 'AIIMS Jodhpur',
            startDate: '13 June',
            endDate: '15 June',
            time: '9:00 am',
            fee: '0',
            deadline: '10 June',
            tags: ['telemedicine', 'rural'],
            eligibility: 'medical professionals, developers',
            hoster: {
              name: 'National Health Mission',
              type: 'government',
              image: 'https://picsum.photos/seed/nhm13/400/300'
            },
            contact: [
              {
                name: 'Dr. Neha Gupta',
                image: 'https://picsum.photos/seed/contact13/200/200',
                profession: 'Medical Officer',
                email: "neha@nhm.in",
                phone: "8899776655"
              }
            ],
            prize: {
              totalPrize: '500000',
              rank1: '250000',
              rank2: '150000',
              rank3: '100000'
            },
            duration: '36 hours',
            teamSize: '3-4',
            details: 'Develop solutions for rural healthcare delivery'
          },
        
          // 14. AI Robotics Challenge
          {
            type: 'challenges',
            id: 34,
            category: 'science',
            name: 'Autonomous Systems Challenge',
            image: 'https://i.pinimg.com/474x/86/a8/83/86a8830b333868867434d47350341a34.jpg',
            location: 'IIT Kanpur',
            startDate: '20 June',
            endDate: '22 June',
            time: '8:00 am',
            fee: '1500',
            deadline: '17 June',
            tags: ['robotics', 'automation'],
            eligibility: 'engineering students',
            hoster: {
              name: 'DRDO',
              type: 'government',
              image: 'https://picsum.photos/seed/drdo14/400/300'
            },
            contact: [
              {
                name: 'Dr. Rajeev Kumar',
                image: 'https://picsum.photos/seed/contact14/200/200',
                profession: 'Robotics Expert',
                email: "rajeev@drdo.in",
                phone: "9988774455"
              }
            ],
            prize: {
              totalPrize: '1000000',
              rank1: '500000',
              rank2: '300000',
              rank3: '200000'
            },
            duration: '48 hours',
            teamSize: '3-4',
            details: 'Build autonomous systems for industrial applications'
          },
        
          // 15. Financial Inclusion Hack
          {
            type: 'challenges',
            id: 35,
            category: 'business',
            name: 'Jan Dhan Tech Challenge',
            image: 'https://i.pinimg.com/474x/f0/38/3a/f0383a37193dfc4ba83375708d1cd901.jpg',
            location: 'RBI Mumbai',
            startDate: '27 June',
            endDate: '29 June',
            time: '10:30 am',
            fee: '0',
            deadline: '24 June',
            tags: ['banking', 'inclusion'],
            eligibility: 'fintech startups',
            hoster: {
              name: 'NPCI',
              type: 'organization',
              image: 'https://picsum.photos/seed/npci15/400/300'
            },
            contact: [
              {
                name: 'Arjun Mehta',
                image: 'https://picsum.photos/seed/contact15/200/200',
                profession: 'Banking Head',
                email: "arjun@npci.org.in",
                phone: "7878787878"
              }
            ],
            prize: {
              totalPrize: '750000',
              rank1: '400000',
              rank2: '250000',
              rank3: '100000'
            },
            duration: '24 hours',
            teamSize: '2-3',
            details: 'Create solutions for financial inclusion in rural India'
          },
        
          // 16. Waste Management Hack
          {
            type: 'challenges',
            id: 36,
            category: 'science',
            name: 'Clean City Innovation Challenge',
            image: 'https://i.pinimg.com/474x/65/fe/21/65fe21fb1cac355ccef94537aace3f12.jpg',
            location: 'Kolkata Municipal Corporation',
            startDate: '4 July',
            endDate: '6 July',
            time: '9:00 am',
            fee: '500',
            deadline: '1 July',
            tags: ['recycling', 'sustainability'],
            eligibility: 'civil engineers, environmentalists',
            hoster: {
              name: 'Swachh Bharat Mission',
              type: 'government',
              image: 'https://picsum.photos/seed/sbm16/400/300'
            },
            contact: [
              {
                name: 'Soumitra Das',
                image: 'https://picsum.photos/seed/contact16/200/200',
                profession: 'Urban Planner',
                email: "soumitra@sbm.gov.in",
                phone: "9876543213"
              }
            ],
            prize: {
              totalPrize: '300000',
              rank1: '150000',
              rank2: '100000',
              rank3: '50000'
            },
            duration: '36 hours',
            teamSize: '2-4',
            details: 'Develop smart waste management solutions for cities'
          },
        
          // 17. Smart City Challenge
          {
            type: 'challenges',
            id: 37,
            category: 'tech',
            name: 'Smart Urban Solutions Hack',
            image: 'https://i.pinimg.com/474x/f4/c0/27/f4c0271289275fe3cfdef89eb16d9f5e.jpg',
            location: 'Surat Smart City Office',
            startDate: '11 July',
            endDate: '13 July',
            time: '8:30 am',
            fee: '1000',
            deadline: '8 July',
            tags: ['urban tech', 'iot'],
            eligibility: 'civil engineers, developers',
            hoster: {
              name: 'Smart Cities Mission',
              type: 'government',
              image: 'https://picsum.photos/seed/scm17/400/300'
            },
            contact: [
              {
                name: 'Rajesh Patel',
                image: 'https://picsum.photos/seed/contact17/200/200',
                profession: 'City Planner',
                email: "rajesh@smartcities.in",
                phone: "9898989898"
              }
            ],
            prize: {
              totalPrize: '800000',
              rank1: '400000',
              rank2: '300000',
              rank3: '100000'
            },
            duration: '72 hours',
            teamSize: '3-5',
            details: 'Build IoT solutions for smart city infrastructure'
          },
        
          // 18. Disaster Tech Challenge
          {
            type: 'challenges',
            id: 38,
            category: 'science',
            name: 'Disaster Management Hackathon',
            image: 'https://i.pinimg.com/474x/c7/20/7a/c7207ae35c212705c4d6b84e02fd4941.jpg',
            location: 'NDMA Delhi',
            startDate: '18 July',
            endDate: '20 July',
            time: '10:00 am',
            fee: '0',
            deadline: '15 July',
            tags: ['disaster', 'relief'],
            eligibility: 'engineers, NGOs',
            hoster: {
              name: 'National Disaster Management Authority',
              type: 'government',
              image: 'https://picsum.photos/seed/ndma18/400/300'
            },
            contact: [
              {
                name: 'Anjali Rao',
                image: 'https://picsum.photos/seed/contact18/200/200',
                profession: 'Disaster Expert',
                email: "anjali@ndma.gov.in",
                phone: "7788990011"
              }
            ],
            prize: {
              totalPrize: '500000',
              rank1: '250000',
              rank2: '150000',
              rank3: '100000'
            },
            duration: '48 hours',
            teamSize: '2-4',
            details: 'Develop early warning systems for natural disasters'
          },
        
          // 19. Digital Heritage Challenge
          {
            type: 'challenges',
            id: 39,
            category: 'cultural',
            name: 'Digital Preservation Hack',
            image: 'https://i.pinimg.com/474x/a1/c9/c8/a1c9c883a787c889580fa351aabb5f04.jpg',
            location: 'ASI Varanasi',
            startDate: '25 July',
            endDate: '27 July',
            time: '9:00 am',
            fee: '200',
            deadline: '22 July',
            tags: ['heritage', '3d modeling'],
            eligibility: 'historians, developers',
            hoster: {
              name: 'Archaeological Survey of India',
              type: 'government',
              image: 'https://picsum.photos/seed/asi19/400/300'
            },
            contact: [
              {
                name: 'Dr. Vikram Singh',
                image: 'https://picsum.photos/seed/contact19/200/200',
                profession: 'Archaeologist',
                email: "vikram@asi.nic.in",
                phone: "9876543214"
              }
            ],
            prize: {
              totalPrize: '250000',
              rank1: '120000',
              rank2: '80000',
              rank3: '50000'
            },
            duration: '36 hours',
            teamSize: '2-3',
            details: 'Create digital preservation tools for historical sites'
          },
        
          // 20. Education Accessibility Challenge
          {
            type: 'challenges',
            id: 40,
            category: 'education',
            name: 'EdAccess Hackathon',
            image: 'https://i.pinimg.com/474x/ff/c1/32/ffc132c7fc28dd60adef416eb390d2b4.jpg',
            location: 'NIT Warangal',
            startDate: '1 August',
            endDate: '3 August',
            time: '8:00 am',
            fee: '0',
            deadline: '29 July',
            tags: ['accessibility', 'education'],
            eligibility: 'educators, developers',
            hoster: {
              name: 'Sarva Shiksha Abhiyan',
              type: 'government',
              image: 'https://picsum.photos/seed/ssa20/400/300'
            },
            contact: [
              {
                name: 'Kavita Reddy',
                image: 'https://picsum.photos/seed/contact20/200/200',
                profession: 'Education Officer',
                email: "kavita@ssa.gov.in",
                phone: "8989898989"
              }
            ],
            prize: {
              totalPrize: '400000',
              rank1: '200000',
              rank2: '150000',
              rank3: '50000'
            },
            duration: '48 hours',
            teamSize: '2-4',
            details: 'Develop solutions for accessible education in remote areas'
          }
    ]
]

export default data;