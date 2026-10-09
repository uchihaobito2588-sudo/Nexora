import { ServiceItem, ProjectItem, TeamMember } from '../types';

export const COMPANY_CONTACTS = {
  whatsappNumber: '01557190156',
  whatsappFormatted: '+20 155 719 0156',
  whatsappUrl: 'https://wa.me/201557190156?text=Hello%20Nexora%20Team%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project.',
  instagramUrl: 'https://www.instagram.com/ahmed___muhamedd?exln=b3R3bTZob3J4NHpp',
  instagramHandle: '@ahmed___muhamedd',
  email: 'contact@nexoratech.io',
  officeLocations: ['Zurich, Switzerland', 'London, UK', 'Cairo, Egypt'],
};

export const CORE_METRICS = [
  { value: '99.995%', label: 'Infrastructure Uptime SLA', context: 'across active production systems' },
  { value: '< 28ms', label: 'Global Edge Latency', context: 'median 99th percentile response' },
  { value: '140+', label: 'Shipped Systems', context: 'delivered on budget and time' },
  { value: '$2.4B+', label: 'Annual Volume Handled', context: 'processed through Nexora engines' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cloud-infrastructure',
    number: '01',
    title: 'Cloud Infrastructure & Kubernetes Mesh',
    tagline: 'Multi-region architectures designed for immutable reliability and zero-downtime operations.',
    description: 'We architect and provision production cloud foundations across AWS, GCP, and bare metal with declarative Terraform IaC, automated canary rollouts, and self-healing cluster meshes.',
    deliverables: [
      'Multi-cluster Kubernetes mesh with Istio traffic routing',
      'Immutable Infrastructure as Code via Terraform & OpenTofu',
      'Automated zero-downtime blue/green CI/CD deployment pipelines',
      'Distributed telemetry, Prometheus metrics, and automated alerts',
    ],
    techStack: ['Kubernetes', 'Terraform', 'AWS / GCP', 'Docker', 'Prometheus', 'Istio'],
    metric: '99.995% Uptime SLA',
  },
  {
    id: 'distributed-software',
    number: '02',
    title: 'Distributed Backend & High-Throughput Engines',
    tagline: 'Low-latency event-driven microservices engineered to handle millions of transactions per second.',
    description: 'When standard frameworks buckle under load, we build custom high-concurrency backends with Go, Rust, and Node.js, utilizing streaming Kafka brokers, Redis clusters, and partitioned data layers.',
    deliverables: [
      'Event-driven microservice backends with gRPC & Protobuf',
      'High-throughput message streaming with Apache Kafka & NATS',
      'Sub-millisecond in-memory cache clustering and Redis mesh',
      'Polyglot persistence and database partitioning for horizontal scale',
    ],
    techStack: ['Go', 'Rust', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'gRPC'],
    metric: 'Sub-5ms Query Times',
  },
  {
    id: 'enterprise-web-apps',
    number: '03',
    title: 'Enterprise Web Applications & Systems',
    tagline: 'Precision React and TypeScript applications built for mission-critical operator workflows.',
    description: 'We construct ergonomic, accessible, and fast enterprise interfaces. Our frontend architecture emphasizes typed contracts, sub-second initial loads, offline resilience, and battle-tested component systems.',
    deliverables: [
      'Custom Design System and tokenized component architecture',
      'Real-time WebSocket streaming dashboards with zero jank',
      'State-of-the-art authentication with RBAC and SSO (SAML / OAuth)',
      'Rigorous end-to-end integration and Playwright test suites',
    ],
    techStack: ['TypeScript', 'React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'GraphQL'],
    metric: '100/100 Core Web Vitals',
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'Applied AI & Workflow Automation Engines',
    tagline: 'Pragmatic machine intelligence pipelines integrated into production operations.',
    description: 'We embed enterprise AI capabilities without the hype. From proprietary vector retrieval systems and RAG pipelines to autonomous task orchestration, we turn unstructured data into high-value automated workflows.',
    deliverables: [
      'Custom Retrieval-Augmented Generation (RAG) vector pipelines',
      'Agentic workflow automations with verifiable validation gates',
      'Document intelligence, semantic search, and clustering engines',
      'Cost-optimized inference routing with latency fallbacks',
    ],
    techStack: ['Python', 'LangChain', 'pgvector', 'FastAPI', 'Gemini API', 'Docker'],
    metric: '85% Workflow Speedup',
  },
  {
    id: 'cybersecurity',
    number: '05',
    title: 'Zero-Trust Architecture & Cyber Resilience',
    tagline: 'Defense-in-depth security engineering protecting mission-critical assets from day zero.',
    description: 'Security is not an afterthought at Nexora. We enforce cryptographic identity models, automated container image scanning, zero-trust network boundaries, and rigorous threat modeling.',
    deliverables: [
      'Zero-trust network architecture and mTLS service identity',
      'Automated vulnerability scanning, SAST/DAST CI/CD integration',
      'SOC 2 Type II and ISO 27001 readiness engineering',
      'Immutable audit logging and cryptographically verified pipelines',
    ],
    techStack: ['Vault', 'mTLS', 'WAF', 'OpenID Connect', 'OWASP', 'Cloudflare'],
    metric: 'Zero Breach Record',
  },
  {
    id: 'edge-mobile',
    number: '06',
    title: 'Cross-Platform Mobile & Edge Client Systems',
    tagline: 'Native performance mobile apps with local-first offline synchronization.',
    description: 'From field operator handhelds to consumer platforms, we engineer responsive iOS and Android applications that function seamlessly in intermittent network environments with deterministic state sync.',
    deliverables: [
      'Local-first SQLite / WatermelonDB offline synchronization',
      'Hardware integration via Bluetooth Low Energy (BLE) and NFC',
      '60 FPS smooth animations and gesture-driven UI ergonomics',
      'Automated App Store and Google Play continuous deployment',
    ],
    techStack: ['React Native', 'Swift', 'Kotlin', 'SQLite', 'WebSockets'],
    metric: 'Sub-60ms Tap Latency',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'nexora-pulse',
    title: 'Nexora Pulse Telemetry Engine',
    category: 'distributed',
    categoryLabel: 'Distributed Systems',
    clientIndustry: 'Global Logistics & Fleet',
    tagline: 'Streaming telemetry platform ingesting 2.4 million geospatial coordinates per second.',
    description: 'A global logistics conglomerate required a sub-50ms distributed event ingest pipeline to track real-time container health, temperature sensors, and GPS pings across 18 maritime corridors.',
    impactMetrics: {
      primary: '-64% Cloud Infrastructure Costs',
      secondary: '2.4M events/sec sustained throughput',
    },
    image: '/src/assets/images/project_enterprise_interface_1791586910238.jpg',
    architectureDetails: {
      problem: 'Legacy monolithic architecture suffered catastrophic bottlenecks during peak cargo dockings, resulting in lost sensor telemetry and delayed emergency alerts.',
      solution: 'Re-architected the pipeline into a Go-based ingestion gateway fronted by Kafka partitions, with automated time-series rollup compression and real-time WebSocket operator consoles.',
      stack: ['Go', 'Apache Kafka', 'TimescaleDB', 'React', 'Redis Mesh', 'Docker'],
      outcomes: [
        'Zero lost telemetry packets over 18 consecutive months',
        'Operator incident detection latency reduced from 14 minutes to 8 seconds',
        'Consolidated 42 server instances down to 14 orchestrated nodes',
      ],
    },
  },
  {
    id: 'aegis-cloud-mesh',
    title: 'Aegis Multi-Region Cloud Mesh',
    category: 'cloud',
    categoryLabel: 'Cloud Infrastructure',
    clientIndustry: 'FinTech & Banking Infrastructure',
    tagline: 'Zero-trust distributed Kubernetes platform spanning Frankfurt, London, and Tokyo.',
    description: 'Designed and deployed an immutable banking infrastructure tier with automated active-active failover, meeting stringent European banking resilience standards.',
    impactMetrics: {
      primary: '99.999% SLA Maintained',
      secondary: '< 18ms Cross-Region Sync',
    },
    image: '/src/assets/images/project_cloud_platform_1791586899002.jpg',
    architectureDetails: {
      problem: 'The client needed multi-region geographic redundancy without the risk of split-brain state or compliance violations with regional financial data residency laws.',
      solution: 'Implemented declarative OpenTofu infrastructure, Cilium eBPF network meshes, encrypted Raft consensus clusters, and real-time automated audit compliance checks.',
      stack: ['Kubernetes', 'OpenTofu', 'Cilium eBPF', 'AWS', 'HashiCorp Vault', 'Prometheus'],
      outcomes: [
        'Fully passed European Central Bank operational risk audit with zero findings',
        'Achieved sub-15 second disaster recovery failover under full simulated blackout tests',
        'Automated 100% of security patch deployments without client service degradation',
      ],
    },
  },
  {
    id: 'veloce-checkout',
    title: 'Veloce High-Velocity Transaction Core',
    category: 'web',
    categoryLabel: 'Enterprise Web',
    clientIndustry: 'Luxury E-Commerce & Retail',
    tagline: 'Sub-40ms checkout engine engineered for flash sale surges of 80,000 requests/minute.',
    description: 'Engineered an ultra-fast global checkout interface and inventory reservation system for a high-demand luxury release platform that previously crashed under peak drops.',
    impactMetrics: {
      primary: '+38% Completed Checkout Conversion',
      secondary: '0 Flash Drop Crashes',
    },
    image: '/src/assets/images/hero_nexora_tech_1791586886543.jpg',
    architectureDetails: {
      problem: 'Flash sale traffic spikes routinely resulted in database locking, phantom stock overselling, and frustrating cart timeouts for high-net-worth customers.',
      solution: 'Created an optimistic lock-free reservation engine with Redis Lua scripts, paired with a lightweight edge-rendered React checkout web client hosted on global CDN edges.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redis Clusters', 'PostgreSQL', 'Stripe API'],
      outcomes: [
        'Supported 82,000 concurrent checkout requests during the Holiday release window',
        'Eliminated inventory over-allocation errors to exactly 0%',
        'Average client page-load time cut from 3.2s to 290ms worldwide',
      ],
    },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Marcus Vance',
    role: 'Chief Technology Officer',
    expertise: 'Distributed Systems & Compilers · Ex-CERN, PhD Systems Architecture',
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Cloud Infrastructure',
    expertise: 'Kubernetes Platform Reliability · 12 years scaling tier-1 FinTech clouds',
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Director of Applied Intelligence',
    expertise: 'Machine Learning Pipelines & Mathematical Modeling',
  },
  {
    name: 'Sophia Lindqvist',
    role: 'Principal Software Architect',
    expertise: 'Low-latency Go & Rust Backends · Event Streaming Specialist',
  },
];

export const ENGINEERING_PILLARS = [
  {
    number: '01',
    title: 'First-Principles Architecture',
    description: 'We do not blindly string together third-party packages. We design system boundaries with exact math, predictable latency bounds, and clear ownership.',
  },
  {
    number: '02',
    title: 'Zero-Bloat Engineering',
    description: 'Every line of code and every infrastructure resource must justify its existence in performance, security, and maintainability.',
  },
  {
    number: '03',
    title: 'Verifiable Benchmarks',
    description: 'We measure real percentiles (p50, p95, p99) under simulated chaos conditions. If a claim cannot be verified in staging, it does not reach production.',
  },
  {
    number: '04',
    title: 'Security as Baseline',
    description: 'Zero trust is not a buzzword to us. Least-privilege IAM, automated image scanning, and end-to-end cryptographic integrity are built into every commit.',
  },
];
