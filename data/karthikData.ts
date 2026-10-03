import {
  PersonalInfo,
  SkillGroup,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  LanguageItem
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Karthik Murthy S',
  title: 'Electronics & Communication Engineer',
  tagline: 'Embedded Systems • VLSI Design • Semiconductor Fabrication • Systems Engineering',
  phone: '+91 8310226920',
  email: 'smurthykarthik@gmail.com',
  linkedin: 'linkedin.com/in/karthik-murthy-s',
  linkedinUrl: 'https://linkedin.com/in/karthik-murthy-s',
  github: 'github.com/smurthykarthik-png',
  githubUrl: 'https://github.com/smurthykarthik-png',
  location: 'Bengaluru, India',
  targetRole: 'Hands-on Hardware / Embedded / Systems Engineer',
  targetLocation: 'Germany (A1 Learning, Targeting B2) & Global',
  summary:
    'Electronics & Communication Engineering graduate with proven experience in embedded systems, VLSI design, electrical hardware, and semiconductor fabrication. Skilled in Linux, Python with a strong foundation in both hardware and software disciplines. Currently employed at Tata Consultancy Services (TCS), demonstrating professional reliability in a production-grade IT environment. Actively learning German (A1, targeting B2) and eager to contribute technical knowledge in a structured, hands-on engineering role in Germany.',
  highlights: [
    {
      label: 'Current Role',
      value: 'System Engineer',
      sublabel: 'Tata Consultancy Services (TCS)'
    },
    {
      label: 'Core Education',
      value: 'B.E. in ECE',
      sublabel: 'Nitte Meenakshi Institute of Tech'
    },
    {
      label: 'Specialization',
      value: 'Embedded & VLSI',
      sublabel: 'Hardware-to-Cloud Integration'
    },
    {
      label: 'German Target',
      value: 'A1 → B2',
      sublabel: 'Targeting German Engineering Roles'
    }
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    domain: 'Hardware & Electronics',
    icon: 'Cpu',
    color: 'emerald',
    summary: 'Semiconductor material characterization, thin-film deposition, high-voltage industrial testing, and RF tracking systems.',
    skills: [
      { name: 'VLSI Design', tag: 'Core' },
      { name: 'RF Sputtering', tag: 'Lab' },
      { name: 'UV Photodetector Fabrication', tag: 'Fabrication' },
      { name: '11KV Switchgear Assembly & Testing', tag: 'Industrial' },
      { name: 'Spacecraft Tracking Systems', tag: 'Aerospace' },
      { name: 'Circuit Design Fundamentals', tag: 'Foundational' }
    ]
  },
  {
    domain: 'Embedded Systems & IoT',
    icon: 'Radio',
    color: 'cyan',
    summary: 'Microcontroller programming, sensor telemetry, cloud telematics, and real-time sensor node deployment.',
    skills: [
      { name: 'ESP32 Microcontroller', tag: 'Hardware' },
      { name: 'DHT11 Sensor Integration', tag: 'Sensors' },
      { name: 'Arduino Cloud', tag: 'IoT Cloud' },
      { name: 'Real-Time Data Monitoring', tag: 'Telemetry' },
      { name: 'IoT System Architecture', tag: 'System Design' }
    ]
  },
  {
    domain: 'Programming Languages',
    icon: 'Code2',
    color: 'amber',
    summary: 'Low-level embedded logic, scripting, automation, and certified competence on standardized skill benchmarks.',
    skills: [
      { name: 'C', tag: 'Embedded' },
      { name: 'C++', verified: true, badge: 'LinkedIn Verified' },
      { name: 'Python', verified: true, badge: 'LinkedIn Verified' },
      { name: 'Linux Scripting', tag: 'Bash/Shell' }
    ]
  },
  {
    domain: 'VLSI & Semiconductor',
    icon: 'Layers',
    color: 'violet',
    summary: 'RTL synthesis flow, interconnect parasitic modeling, HDL digital design, and signal modulation analysis.',
    skills: [
      { name: 'VLSI Design Principles', tag: 'Silicon' },
      { name: 'VLSI Interconnects', tag: 'NPTEL' },
      { name: 'VSD-Design Flow', tag: 'RTL-to-GDSII' },
      { name: 'HDL Programming', tag: 'Digital Design' },
      { name: 'Signal Modulation Analysis (PM/FM/PPM)', tag: 'DSP/RF' }
    ]
  },
  {
    domain: 'DevOps & Automation',
    icon: 'Terminal',
    color: 'blue',
    summary: 'Continuous integration, containerized workflows, Git-driven versioning, and server environment administration.',
    skills: [
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub & GitHub Actions', tag: 'Automation' },
      { name: 'CI/CD Pipelines', tag: 'DevOps' },
      { name: 'Jenkins', tag: 'Pipelines' },
      { name: 'Docker', tag: 'Containers' },
      { name: 'Linux Administration', tag: 'Server Ops' }
    ]
  },
  {
    domain: 'IT Service Management',
    icon: 'ShieldCheck',
    color: 'rose',
    summary: 'Enterprise configuration data modeling, SLA governance, and ITIL-aligned incident lifecycle resolution.',
    skills: [
      { name: 'ServiceNow ITSM', tag: 'Enterprise' },
      { name: 'Incident & Change Management', tag: 'ITIL' },
      { name: 'SLA Management', tag: 'Production' },
      { name: 'ITIL Framework', tag: 'Governance' }
    ]
  },
  {
    domain: 'Tools & Software',
    icon: 'Wrench',
    color: 'teal',
    summary: 'Structured enterprise data validation, XML defect diagnostics, and data synthesis tools.',
    skills: [
      { name: 'Oxygen XML Editor', tag: 'Defect Diagnostic' },
      { name: 'MS Excel', tag: 'Analysis' },
      { name: 'MS PowerPoint', verified: true, badge: 'LinkedIn Verified' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'wo3-uv-photodetector',
    title: 'Tungsten-Trioxide Thin Film Optimization – UV Photodetector',
    period: 'May 2023 – Jun 2024',
    status: 'Completed / Research Project',
    category: 'Semiconductor & Hardware',
    technologies: ['RF Sputtering', 'Semiconductor Fabrication', 'Thin-Film Technology', 'Material Science', 'UV Photodetection'],
    summary:
      'Laboratory-grade research and fabrication optimization of WO3 (tungsten trioxide) thin film deposition via Radio Frequency (RF) magnetron sputtering to significantly elevate UV photodetection responsiveness.',
    problem:
      'UV photodetectors built from as-deposited WO3 films showed weak, inconsistent responsivity — there was no documented recipe for which sputtering parameters actually produced a reliable, high-performance film.',
    approach:
      'Systematically varied RF power, argon:oxygen chamber ratio, substrate temperature, and annealing cycles, then measured each recipe against optical bandgap and dark vs. illuminated I-V response to isolate the deposition window that maximized UV sensitivity.',
    result:
      'Produced a documented, repeatable RF-sputtering recipe with characterized bandgap and responsivity — a reliable baseline for future WO3 photodetector batches instead of ad-hoc, one-off depositions.',
    bullets: [
      'Optimized WO3 thin film deposition using RF sputtering to enhance UV photodetection sensitivity and spectral response.',
      'Investigated material properties, substrate temperatures, and film thickness parameters to maximize detector performance and quantum efficiency.',
      'Applied semiconductor fabrication techniques in a controlled laboratory environment, demonstrating precision and scientific rigor.'
    ],
    highlights: [
      'Controlled RF power, argon-oxygen chamber ratio, and annealing cycles.',
      'Analyzed optical transmission, bandgap absorption thresholds, and current-voltage (I-V) dark vs. illuminated characteristics.',
      'Documented repeatability metrics for nanoscale metal oxide semiconductor deposition.'
    ],
    specifications: {
      'Deposition Method': 'RF Magnetron Sputtering',
      'Material': 'Tungsten Trioxide (WO3)',
      'Application': 'High-Responsivity Ultraviolet Photodetector',
      'Target Wavelength': 'UV Spectrum (Near & Middle UV)',
      'Lab Rigor': 'Class-Controlled Vacuum Chamber & Substrate Annealing'
    }
  },
  {
    id: 'iot-temperature-humidity',
    title: 'IoT-Based Temperature & Humidity Monitoring System',
    period: 'Mar 2023 – Aug 2023',
    status: 'Completed / Deployed System',
    category: 'Embedded & IoT',
    technologies: ['ESP32', 'DHT11 Sensor', 'Arduino Cloud', 'Embedded C', 'Wi-Fi Telemetry', 'JSON Payloads'],
    summary:
      'End-to-end edge-to-cloud environmental monitoring station with real-time telemetric logging, automated alerting thresholds, and interactive cloud dashboards.',
    problem:
      'Monitoring environmental conditions in a space meant either being physically present to check readings or having no visibility at all — there was no way to catch an abnormal reading remotely, in time to act on it.',
    approach:
      'Built an ESP32 + DHT11 sensor node with non-blocking 1Hz sampling, then wired it to Arduino Cloud over MQTT/TLS with threshold-based rules that trigger alerts, rather than just logging raw values to a dashboard.',
    result:
      'Shipped a fully unattended edge-to-cloud pipeline — live dashboard plus automatic email/SMS alerts on threshold breach — that needed zero manual polling to catch an issue.',
    bullets: [
      'Designed and deployed a fully functional IoT monitoring system using ESP32 microcontroller and DHT11 environmental sensor.',
      'Configured Arduino Cloud for real-time remote data visualization, dashboarding, and threshold-based alerting.',
      'Demonstrated complete embedded system development cycle from hardware wiring to cloud integration.'
    ],
    highlights: [
      'Interfaced digital 1-wire capacitive humidity & thermistor temperature sensor with ESP32 GPIOs.',
      'Integrated non-blocking timer loops in Embedded C for consistent 1Hz telemetry sampling without watchdog resets.',
      'Enabled secure over-the-air MQTT telemetry synchronization to cloud graphs with SMS/Email limit notifications.'
    ],
    specifications: {
      'Microcontroller': 'ESP32-WROOM-32 (Dual-Core Xtensa LX6)',
      'Transducer': 'DHT11 Calibrated Digital Humidity & Temperature Sensor',
      'Communication': '2.4 GHz 802.11 b/g/n Wi-Fi with MQTT/TLS',
      'Cloud Architecture': 'Arduino Cloud Webhooks & Live Visualizer',
      'Power Profile': 'Low-power polling cycle with deep sleep support'
    }
  },
  {
    id: 'cicd-github-linux',
    title: 'CI/CD Pipeline – Automated GitHub to Linux Deployment',
    period: 'Mar 2026 – Present',
    status: 'Active / Continuous Deployment',
    category: 'DevOps & Automation',
    technologies: ['Linux', 'Git', 'GitHub Actions', 'Python', 'Shell Scripting', 'SSH Automation', 'Systemd'],
    summary:
      'Engineered an automated deployment pipeline linking Git revision triggers to autonomous testing, validation, and container/daemon deployment on live Linux servers.',
    problem:
      'Deployments to the Linux server were manual — SSH in, pull the latest code, restart the service by hand — which was slow, easy to get wrong, and gave no test gate before code reached production.',
    approach:
      'Built a GitHub Actions pipeline that runs the Python test suite and lint checks on every pull request, then on merge to main handles SSH-authenticated deployment with atomic file swaps and an automated service reload.',
    result:
      'Turned deployment into a push-to-deploy action — every merge ships automatically with tests gating it first, removing manual SSH steps and the risk of a broken deploy going unnoticed.',
    bullets: [
      'Architected and implemented an end-to-end CI/CD pipeline using GitHub Actions for automated build, test, and deployment.',
      'Managed version control workflows with Git and configured automated deployment to a Linux server environment.',
      'Improved deployment reliability and reduced manual intervention through scripted automation.'
    ],
    highlights: [
      'Configured YAML workflow matrices executing Python unit test suites and bash linting checks on every pull request.',
      'Secured zero-downtime remote synchronization using SSH key handshakes and atomic file swaps.',
      'Automated system service reloading and log verification via customized shell healthcheck hooks.'
    ],
    specifications: {
      'CI Engine': 'GitHub Actions Workflows',
      'Target Host': 'Linux Server (Ubuntu LTS / Debian Kernel)',
      'Automation Scripting': 'Python 3.x & Bash Shell',
      'Security Model': 'GitHub Encrypted Secrets & SSH Ed25519 Keys',
      'Outcome': 'Zero-touch push-to-deploy with instant build failure alerts'
    }
  },
  {
    id: 'servicenow-cmdb-lifecycle',
    title: 'ServiceNow CMDB & Incident Lifecycle Implementation',
    period: 'Mar 2026 – Present',
    status: 'Active / Enterprise Integration',
    category: 'ITSM & Enterprise',
    technologies: ['ServiceNow ITSM', 'ITIL', 'CMDB', 'CSDM', 'SLA Workflows', 'Business Rules'],
    summary:
      'Configured enterprise ITIL service architecture linking configuration items (CI) to production service chains with automated priority matrices and SLA breach mitigation.',
    problem:
      'Incidents and configuration items weren’t consistently linked in the CMDB, so priority routing and impact visibility were inconsistent — it was hard to tell which service an incident actually affected.',
    approach:
      'Modeled CI relationships using the CSDM framework to map business applications to technical infrastructure, defined SLA/priority tables (P1–P4) with escalation triggers, and validated change requests against the CMDB before they reached production.',
    result:
      'Delivered a CSDM-aligned CMDB with clear service-to-infrastructure mapping and automated SLA escalation, reducing the chance of an incident being misrouted or left untracked.',
    bullets: [
      'Configured a complete incident lifecycle management system with priority matrix, SLA definitions, and automated routing.',
      'Built CI relationship mapping to establish service-to-infrastructure dependency visibility.',
      'Implemented CSDM-aligned configuration data model for enterprise-grade configuration management.'
    ],
    highlights: [
      'Structured Common Service Data Model (CSDM) hierarchies mapping business applications to technical infrastructure.',
      'Drafted SLA contract tables (P1-P4) with escalation triggers and automated on-call engineer notifications.',
      'Streamlined change request validation workflows minimizing change collision risks in production clusters.'
    ],
    specifications: {
      'Platform': 'ServiceNow Utah / Washington DC Release',
      'Framework Alignment': 'ITIL v4 & Common Service Data Model (CSDM)',
      'Data Integrity': 'CMDB Health Dashboards & CI Deduplication Rules',
      'Governance': 'Multi-tier SLA breach warning milestones'
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    role: 'System Engineer – Application & Cloud Support',
    period: 'Aug 2024 – Present',
    location: 'Bengaluru, India',
    type: 'Full-time',
    department: 'Enterprise Production Support & Cloud Operations',
    summary:
      'Ensuring operational stability, SLA compliance, and rapid incident resolution across enterprise-scale production applications in a 24x7 critical computing landscape.',
    responsibilities: [
      'Oversee production application support and system monitoring, ensuring high availability and minimal downtime.',
      'Conduct structured root cause analysis (RCA) on incidents and drive timely resolution within defined SLA targets.',
      'Process service requests and coordinate change management activities in adherence to ITIL best practices.',
      'Utilize Oxygen XML Editor to diagnose, validate, and resolve XML-related defects in application workflows.',
      'Maintain accurate technical documentation and uphold compliance with client and organizational standards.',
      'Identify recurring failure patterns and contribute actionable recommendations for continuous service improvement.'
    ],
    technologiesUsed: [
      'ServiceNow ITSM',
      'Oxygen XML Editor',
      'Linux Server CLI',
      'XML/XSLT Diagnostics',
      'ITIL Governance',
      'SLA Tracking Tools'
    ],
    metrics: [
      { label: 'SLA Adherence', value: '>99.2%' },
      { label: 'Incident Triage', value: 'Production-Grade' },
      { label: 'Governance', value: 'ITIL Best Practices' }
    ]
  },
  {
    id: 'mei',
    company: 'Mysore Electrical Industry Limited',
    role: 'Electrical Engineering Intern',
    period: 'Jun 2023 – Jul 2023',
    location: 'Bengaluru, India',
    type: 'Internship',
    department: 'High-Voltage Switchgear & Power Distribution Testing',
    summary:
      'Gained immersive, on-floor industrial manufacturing experience with heavy electrical distribution hardware, 11KV switchgear assemblies, and stringent industrial safety standards.',
    responsibilities: [
      'Observed and participated in the manufacturing, assembly, and functional testing of 11KV switchgear and breaker panel boards.',
      'Gained practical understanding of high-voltage electrical system design, quality control, and industrial safety protocols.',
      'Developed awareness of production-floor operations and real-world engineering standards in an industrial setting.'
    ],
    technologiesUsed: [
      '11KV Switchgear Panels',
      'Vacuum Circuit Breakers (VCB)',
      'Relay Protection Schemes',
      'Insulation Resistance (Megger) Testing',
      'Industrial Safety Protocols'
    ],
    metrics: [
      { label: 'Voltage Class', value: '11 kV Heavy Systems' },
      { label: 'Focus', value: 'Assembly & QA Testing' },
      { label: 'Safety Protocol', value: 'Strict Industrial Compliance' }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'nmit',
    institution: 'Nitte Meenakshi Institute of Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Electronics & Communication Engineering',
    period: 'Dec 2020 – May 2024',
    location: 'Karnataka, India',
    badge: 'Undergraduate Degree',
    keyCoursework: [
      'VLSI Design & Embedded Systems',
      'Digital Signal Processing & Modulation',
      'Semiconductor Physics & Microelectronics',
      'Computer Communication Networks',
      'Control Systems & Microcontrollers (8051 / ARM)'
    ]
  },
  {
    id: 'ambika',
    institution: 'Ambika Padavi Poorva Vidyalaya',
    degree: 'Class XII – Pre-University',
    field: 'Science Stream (Physics, Chemistry, Mathematics, Electronics/Biology)',
    period: 'June 2018 – May 2020',
    location: 'Karnataka, India',
    grade: 'First Class',
    badge: 'Higher Secondary'
  },
  {
    id: 'airforce',
    institution: 'Air Force School Bengaluru',
    degree: 'Class X – Secondary Education',
    period: 'Apr 2017 – Mar 2018',
    location: 'Bengaluru, India',
    grade: 'First Class',
    badge: 'Secondary Education'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-python-linkedin',
    name: 'Python (Programming Language)',
    issuer: 'LinkedIn Skill Assessment',
    verified: true,
    status: 'Completed',
    category: 'Verified Assessment'
  },
  {
    id: 'cert-cpp-linkedin',
    name: 'C++',
    issuer: 'LinkedIn Skill Assessment',
    verified: true,
    status: 'Completed',
    category: 'Verified Assessment'
  },
  {
    id: 'cert-powerpoint-linkedin',
    name: 'Microsoft PowerPoint',
    issuer: 'LinkedIn Skill Assessment',
    verified: true,
    status: 'Completed',
    category: 'Verified Assessment'
  },
  {
    id: 'cert-python-coursera',
    name: 'Crash Course on Python',
    issuer: 'Coursera / Google',
    verified: false,
    status: 'Completed',
    category: 'Embedded & IoT'
  },
  {
    id: 'cert-vlsi-interconnects',
    name: 'VLSI Interconnects',
    issuer: 'NPTEL (IIT Roorkee / National Programme)',
    verified: false,
    status: 'Completed',
    category: 'VLSI & Semiconductor'
  },
  {
    id: 'cert-vsd-design-flow',
    name: 'VSD-Design Flow (RTL to GDSII Flow)',
    issuer: 'VSD (VLSI System Design)',
    verified: false,
    status: 'Completed',
    category: 'VLSI & Semiconductor'
  },
  {
    id: 'cert-vlsi-training',
    name: 'VLSI Training (5 Days Intensive)',
    issuer: 'Nitte Meenakshi Institute of Technology',
    verified: false,
    status: 'Completed',
    category: 'VLSI & Semiconductor'
  },
  {
    id: 'cert-intro-iot',
    name: 'Introduction to IoT',
    issuer: 'Academic Coursework & Industrial Certification',
    verified: false,
    status: 'Completed',
    category: 'Embedded & IoT'
  },
  {
    id: 'cert-communication-networks',
    name: 'Communication Networks',
    issuer: 'Department of Electronics & Communication',
    verified: false,
    status: 'Completed',
    category: 'Embedded & IoT'
  },
  {
    id: 'cert-soc-analyst',
    name: 'SOC Analyst Training',
    issuer: 'SIEM Expert',
    verified: false,
    status: 'Completed',
    category: 'Cloud & Enterprise'
  },
  {
    id: 'cert-servicenow-cis',
    name: 'ServiceNow Certified Implementation Specialist – Data Foundations (CMDB & CSDM)',
    issuer: 'ServiceNow',
    verified: false,
    status: 'In Progress',
    expectedOrYear: 'Expected 2026',
    category: 'Cloud & Enterprise'
  },
  {
    id: 'cert-aws-solutions-architect',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    verified: false,
    status: 'In Progress',
    expectedOrYear: 'Expected 2026',
    category: 'Cloud & Enterprise'
  }
];

export const languagesData: LanguageItem[] = [
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
    statusNote: 'Fluent in engineering documentation, client incident collaboration, and technical communication.',
    flag: '🇬🇧',
    levelTag: 'C1 / Professional'
  },
  {
    language: 'German (Deutsch)',
    proficiency: 'A1 Level (Actively Learning, Targeting B2)',
    statusNote: 'Diligent daily study focused on grammar, vocabulary, and technical engineering terminology for German industry integration.',
    flag: '🇩🇪',
    levelTag: 'A1 Active → Target B2',
    isPrimaryTarget: true
  },
  {
    language: 'Kannada',
    proficiency: 'Native Language',
    statusNote: 'Mother tongue with full native conversational and literary command.',
    flag: '🇮🇳',
    levelTag: 'Native'
  },
  {
    language: 'Hindi',
    proficiency: 'Conversational Proficiency',
    statusNote: 'Strong verbal fluency in pan-Indian inter-team operations and collaboration.',
    flag: '🇮🇳',
    levelTag: 'Conversational'
  }
];
