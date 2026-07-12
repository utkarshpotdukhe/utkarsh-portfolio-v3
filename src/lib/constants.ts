import type { Project, Job, Education, Skill, Stat } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'amazon-ops-dashboard',
    title: 'Amazon Ops Automation Monitor',
    stack: ['n8n', 'OpenAI', 'Decodo API', 'Google Sheets', 'Google Drive', 'NocoDB API'],
    impact: '25,000+',
    impactLabel: 'Products monitored & processed',
    description:
      'Managing Amazon operations manually across inventory, product data, reviews, and Shopify sync leads to errors and inefficiencies. This system provides a fully automated, end-to-end pipeline that parses reports, scrapes product data, compares listings, and flags critical issues, all in one unified dashboard.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Inventory Parsing Engine',
        description: 'Automates Amazon report ingestion, extracts SKU, ASIN, price, and stock, and syncs structured data to Google Sheets.',
      },
      {
        title: 'ASIN Intelligence Scraper',
        description: 'Fetches real-time product data (price, rating, buybox, variations) using Decodo API and transforms it into actionable insights.',
      },
      {
        title: 'Amazon–Shopify Sync Validator',
        description: 'Compares Amazon and Shopify listings using SKU-based mapping and similarity logic to detect mismatches and inconsistencies.',
      },
      {
        title: 'Smart Alert & Flagging System',
        description: 'Automatically flags critical issues like low-rated products (< 3.2), missing buybox, incomplete listings, and stock mismatches.',
      },
    ],
    capabilities: [
      'AI-driven product data extraction',
      'Automated multi-source data synchronization',
      'Intelligent comparison & validation engine',
      'Real-time issue detection and reporting',
      'Scalable batch processing (pagination + loops)',
    ],
    highlights: [
      'Webhook-based automation pipelines',
      'Google Drive + Sheets integration',
      'Decodo API scraping engine',
      'Shopify data fetch via NocoDB API',
      'Conditional logic for review & buybox alerts',
      'Error handling + retry workflows',
    ],
    businessImpact: [
      '90% reduction in manual work',
      'Faster issue detection (real-time alerts)',
      'Improved listing accuracy & consistency',
      'Better conversion via optimized product data',
    ],
    images: [
      '/projects/ecommerce-ops/1. parse Amazon Inventory Report.png',
      '/projects/ecommerce-ops/2. Amazon ASIN Scarper With Decodo.png',
      '/projects/ecommerce-ops/3. Amazon - Shopify Product Data Compare.png',
      '/projects/ecommerce-ops/4. Product Review Flagging.png'
    ],
  },

  {
    id: 'amazon-listing-optimizer',
    title: 'Amazon Listing Optimization Engine',
    stack: ['n8n', 'OpenAI', 'Google Docs API', 'Shopify API', 'Google Sheets', 'Helium10'],
    impact: '15,000+',
    impactLabel: 'Listings optimized with AI',
    description:
      'Amazon listings often underperform due to poor keyword usage, weak content structure, and lack of compliance. This system automates the entire optimization lifecycle, from keyword analysis and guideline validation to AI-generated optimized listings and quality scoring.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Keyword Intelligence Engine',
        description: 'Processes Helium10 keyword files, prioritizes keywords, and groups them for optimal placement in titles, bullets, and search terms.',
      },
      {
        title: 'Guideline Compliance System',
        description: 'Fetches optimization rules from Google Docs to ensure listings follow strict content and persona guidelines.',
      },
      {
        title: 'AI Listing Generator',
        description: 'Generates SEO-optimized titles, high-converting bullets, rich descriptions, and backend terms based on source data.',
      },
      {
        title: 'Listing Audit & Scoring',
        description: 'Analyzes existing listings and provides quality scores for titles, bullets, and keyword utilization percentages.',
      },
      {
        title: 'Variant Data Structuring',
        description: 'Handles multi-variant SKU mapping and ensures Shopify metafield integration for consistent variant-level data.',
      },
    ],
    capabilities: [
      'AI-powered keyword optimization strategy',
      'Automated listing audit & improvement suggestions',
      'Multi-variant product handling',
      'SEO + conversion-focused content generation',
      'Compliance validation (rules + guidelines)',
    ],
    highlights: [
      'XLSX keyword ingestion (Helium10)',
      'Priority-based keyword clustering logic',
      'Google Docs API for dynamic guidelines',
      'Shopify GraphQL + metafield extraction',
      'Structured JSON AI output schema',
      'Real-time dashboard link generation',
    ],
    businessImpact: [
      '📈 Higher ranking with optimized keywords',
      '💰 Increased conversions with better content',
      '⚡ 80–90% faster listing optimization',
      '📊 Data-driven decision making via scores',
    ],
    images: [
      '/projects/amazon-listing-optimizer/part 1.png',
      '/projects/amazon-listing-optimizer/part 2.png',
    ],
  },


  {
    id: 'gsc-analytics-dashboard',
    title: 'Month-wise GSC Analytics Dashboard',
    stack: ['n8n', 'Google Search Console API', 'Google Sheets', 'JavaScript'],
    impact: '50,000+',
    impactLabel: 'URLs tracked & analyzed monthly',
    description:
      'Tracking Google Search Console data manually across months is time-consuming and lacks structured insights. This system automates monthly SEO performance tracking, extracting clicks, impressions, and top queries for each URL and organizing them into a clean dashboard format.',
    iconType: 'backend',
    modules: [
      {
        title: 'URL Data Pipeline',
        description: 'Fetches URLs dynamically from Google Sheets and prepares them for multi-threaded batch processing.',
      },
      {
        title: 'Month-wise Data Engine',
        description: 'Automatically processes data for selected date ranges and maps results into structured, month-over-month columns.',
      },
      {
        title: 'GSC API Analytics Fetcher',
        description: 'Integrates with Search Console API to pull total clicks, impressions, and top-performing queries for every individual URL.',
      },
      {
        title: 'Data Transformation Engine',
        description: "Formats raw API data into intuitive labels like 'June-c' (clicks), 'June-i' (impressions), and 'June-q' (query).",
      },
      {
        title: 'Automated Reporting Dashboard',
        description: 'Dynamically updates Google Sheets with verified SEO metrics, maintaining a real-time performance tracking dashboard.',
      },
    ],
    capabilities: [
      'Automated SEO performance tracking',
      'Month-over-month comparison ready data',
      'URL-level analytics breakdown',
      'Dynamic column mapping system',
      'Scalable batch processing (n8n loops)',
    ],
    highlights: [
      'Google Search Console API integration',
      'Dual API calls (totals + top queries)',
      'Smart URL normalization logic',
      'Loop-based batch processing (n8n)',
      'Dynamic field mapping (clicks/impressions/query)',
      'Auto sheet update with row matching',
    ],
    businessImpact: [
      '📊 Clear monthly SEO performance visibility',
      '⏱ Saves 10+ hours per month of manual reporting',
      '📈 Identifies top-performing pages and keywords',
      '🔍 Enables rapid, data-driven SEO strategy shifts',
    ],
    images: [
      '/projects/gsc-analytics-dashboard/Screenshot (3752).png',
    ],
  },


  {
    id: 'lead-gen-system',
    title: 'AI Lead Generation & Qualification System',
    stack: ['n8n', 'OpenAI', 'Zoho CRM', 'Google Sheets', 'Apollo', 'Email Automation'],
    impact: '2,500+',
    impactLabel: 'Leads processed & qualified automatically',
    description:
      'Manual lead handling leads to wasted time, poor qualification, and delayed responses. This system automates the entire lead lifecycle, from capturing leads to AI-based qualification, product matching, and salesperson assignment, all in real time.',
    iconType: 'backend',
    modules: [
      {
        title: 'Lead Capture & Intake',
        description: 'Captures leads from Google Sheets, forms, and external sources with real-time trigger automation.',
      },
      {
        title: 'AI Qualification Engine',
        description: 'Analyzes lead intent, requirements, and business relevance to prioritize high-value prospects.',
      },
      {
        title: 'Product Matching Engine',
        description: 'Intelligently matches leads with the right products or categories using internal database logic.',
      },
      {
        title: 'Smart Sales Assignment',
        description: 'Automatically assigns leads to the best-fit salesperson based on product expertise and availability.',
      },
      {
        title: 'CRM & Sheet Sync',
        description: 'Maintains lead tracking by updating Zoho CRM and Google Sheets with structured, enriched data.',
      },
      {
        title: 'Automated Notifications',
        description: 'Triggers internal team alerts, lead assignment emails, and immediate follow-up sequences.',
      },
    ],
    capabilities: [
      'AI-based intent detection (highest priority)',
      'Real-time lead qualification & routing',
      'Product + category intelligent mapping',
      'Sales team automation (assignment + links)',
      'Lead enrichment & validation pipeline',
    ],
    highlights: [
      'Google Sheets trigger-based automation',
      'AI agent with structured JSON output',
      'Intent-first qualification logic',
      'Conditional workflow routing (relevant vs irrelevant)',
      'Zoho CRM API integration',
      'Email automation (HTML templates)',
      'Data enrichment workflows',
    ],
    businessImpact: [
      '🚀 90% faster lead response time',
      '🎯 High-quality lead filtering (no junk)',
      '📈 Improved conversion rate via rapid routing',
      '⚡ Zero manual qualification effort',
      '🤖 Fully automated end-to-end sales pipeline',
    ],
    images: [
      '/projects/lead-gen-system/Screenshot (3753).png',
    ],
  },

  {
    id: 'amazon-ads-monitor',
    title: 'Amazon Ads Monitor with PDF Generator',
    stack: ['n8n', 'Amazon Ads API', 'PDF Generator', 'Webhooks', 'Google Sheets'],
    impact: '80%',
    impactLabel: 'Manual ad monitoring eliminated',
    description:
      'Automated monitoring system for Amazon Advertising campaigns. This tool fetches real-time performance data, analyzes key metrics like ROAS and ACOS, and generates professional PDF reports, giving complete visibility with zero manual effort.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Ad Performance Engine',
        description: 'Fetches real-time campaign, ad group, and keyword data via Amazon Advertising API for deep analytical insights.',
      },
      {
        title: 'Automated PDF Generator',
        description: 'Transforms raw ad data into professional, branded PDF reports for instant stakeholder updates and performance reviews.',
      },
      {
        title: 'Smart Budget Alerts',
        description: 'Monitors spend and performance thresholds, triggering immediate notifications for budget spikes or low-performing ads.',
      },
    ],
    capabilities: [
      'Real-time Amazon Advertising API sync',
      'Automated PDF report generation & distribution',
      'Campaign-level ROAS & ACOS tracking',
      'Intelligent keyword performance analysis',
      'Multi-account ad data orchestration',
    ],
    highlights: [
      'Amazon Ads API / SP-API integration',
      'Custom PDF reporting engine (Automated)',
      'Threshold-based webhook alert system',
      'n8n-driven multi-step data transformation',
      'Rate-limit handling for high-volume ad accounts',
    ],
    businessImpact: [
      '⚡ 80% reduction in manual ad monitoring',
      '📊 Real-time performance visibility (Live)',
      '📈 Improved ROAS via rapid data-driven shifts',
      '💼 Professional automated reporting for clients',
    ],
  },
  {
    id: 'voice-booking',
    title: 'Voice-Based Appointment Booking',
    stack: ['n8n', 'ElevenLabs', 'Cal.com', 'Supabase', 'Vapi', 'React.js Dashboard'],
    impact: '< 60s',
    impactLabel: 'booking confirmed',
    description:
      'A multi-tool voice booking agent integrated with Vapi for real-time voice synthesis and Supabase for session tracking. Features a custom React.js monitoring dashboard and full Cal.com calendar synchronization for a zero-human-touch operation.',
    iconType: 'voice',
    modules: [
      {
        title: 'Vapi Voice Intelligence',
        description: 'Handles high-fidelity voice processing and intent detection for seamless, natural conversations.',
      },
      {
        title: 'ElevenLabs TTS Engine',
        description: 'Provides low-latency, human-like voice synthesis tailored to specific brand personas.',
      },
      {
        title: 'Supabase Data Store',
        description: 'Persistent storage for call logs, session metadata, and user synchronization.',
      },
      {
        title: 'React.js Analytics Dashboard',
        description: 'A dedicated frontend for monitoring active sessions, call history, and conversion metrics.',
      },
      {
        title: 'Cal.com Scheduling Sync',
        description: 'Bi-directional calendar integration to ensure zero booking conflicts and instant confirmation.',
      },
    ],
    capabilities: [
      'Real-time AI voice interaction',
      'Automated session logging & tracking',
      'Dynamic availability verification',
      'Live call monitoring & dashboard',
      'Multi-channel notification system',
    ],
    highlights: [
      'Vapi & ElevenLabs integration',
      'Supabase edge functions & DB',
      'React.js real-time visualizer',
      'n8n decision-making logic',
      'Webhook-based event triggers',
      'Cal.com API for scheduling',
    ],
    businessImpact: [
      '🚀 Zero-latency response time',
      '🎯 100% automated appointment handling',
      '📈 Improved customer experience',
      '⚡ 24/7 availability without human agents',
    ],
  },
  {
    id: 'linkedin-content-engine',
    title: 'AI LinkedIn Content Engine',
    stack: ['n8n', 'Google Gemini AI', 'Google Sheets', 'Google Drive', 'Webhook', 'LinkedIn API'],
    impact: '10x',
    impactLabel: 'Faster content creation',
    description: 'Creating high-quality LinkedIn content consistently is time-consuming and requires strategy, formatting, and engagement optimization. This system automates the entire LinkedIn content pipeline, from idea generation to post creation, image generation, and publishing-ready drafts.',
    iconType: 'linkedin',
    modules: [
      {
        title: '📥 Content Input & Trigger System',
        description: 'Accepts topic ideas via webhook or Google Sheets and automatically triggers the content generation workflow.',
      },
      {
        title: '🧠 AI Content Strategy Engine',
        description: 'Generates 3 high-engagement post ideas from different angles (story, contrarian, tools) with optimized hooks and structured storytelling.',
      },
      {
        title: '✍️ LinkedIn Post Generator',
        description: 'Creates scroll-stopping hooks (<140 chars) with clean formatting, emojis, and CTAs, ensuring strict LinkedIn formatting rules.',
      },
      {
        title: '📊 Content Database System',
        description: 'Stores posts in Google Sheets, tracking title, content, and status (Draft / Completed / Published).',
      },
      {
        title: '🎨 AI Image Generation Engine',
        description: 'Converts posts into visual concepts, generates professional images, and uploads them to Google Drive with automated database linking.',
      },
      {
        title: '🚀 Publishing & Workflow Automation',
        description: 'Enables one-click publishing to LinkedIn while maintaining a full content lifecycle tracking with live links.',
      },
    ],
    capabilities: [
      'AI-driven content ideation + writing',
      'Multi-post generation (3 ideas per topic)',
      'Engagement-optimized formatting logic',
      'Image + content sync automation',
      'End-to-end content pipeline (idea → post → asset → publish)',
    ],
    highlights: [
      'Webhook-based trigger system',
      'Gemini AI (content + image generation)',
      'Structured content formatting engine',
      'Google Sheets as CMS',
      'Google Drive for media storage',
      'Multi-step workflow orchestration (n8n)',
      'Status tracking (Processing → Completed → Published)',
    ],
    businessImpact: [
      '⚡ 10x faster content creation',
      '📈 Higher engagement with optimized posts',
      '🔄 Consistent posting system',
      '🎯 Scalable personal branding automation',
      '🤖 Fully automated content machine',
    ],
    images: [
      '/projects/linkedin-content/AI-LinkedIn-Content-Engine.png',
    ],
    liveUrl: 'https://docs.google.com/spreadsheets/d/1r4T_iG8p2Ncy8iZIg7TvxBzkdpBEVqXwROcOfthBuIw/edit?gid=484582664#gid=484582664',
    showSheetUI: true,
  },
  {
    id: 'ai-restaurant-menu',
    title: 'AI Restaurant Menu Recommendation System',
    stack: ['n8n', 'OpenAI', 'DeepSeek', 'Webhook', 'API', 'AI Agents', 'JSON Parser'],
    impact: 'Instant',
    impactLabel: 'Customer queries handled with AI',
    description: 'Customers often struggle to choose what to eat, especially when menus are large and preferences vary. This system provides a smart AI assistant for restaurants that understands user mood, taste, and dietary preferences, and instantly recommends the best menu items.',
    iconType: 'restaurant',
    modules: [
      {
        title: '📥 Smart Chat Input System',
        description: 'Webhook-based chat interface that accepts user queries like "I\'m hungry", "something spicy", or "veg dinner".',
      },
      {
        title: '🧠 AI Food Recommendation Engine',
        description: 'Analyzes mood, taste, and dietary preferences to generate personalized food suggestions instantly.',
      },
      {
        title: '🍽️ Menu Intelligence Database',
        description: 'Structured product catalog with predefined IDs for accurate recommendations across the full menu.',
      },
      {
        title: '🎯 Context-Aware Recommendation Logic',
        description: 'Maps user intent to the best dishes, suggesting 2–5 items per query and handling vague requests intelligently.',
      },
      {
        title: '🧾 Structured Response System',
        description: 'Returns clean JSON responses with personalized messages and product IDs for easy frontend integration.',
      },
      {
        title: '🧠 Memory & Conversation Context',
        description: 'Maintains session-based chat memory to improve recommendations over time and enable conversational experiences.',
      },
    ],
    capabilities: [
      'Real-time AI chat-based food recommendations',
      'Mood + taste + dietary understanding',
      'Structured API-ready responses (JSON)',
      'Multi-category intelligent menu mapping',
      'Context-aware conversation memory',
    ],
    highlights: [
      'Webhook-based API system',
      'AI agent with strict response schema',
      'Dual LLM support (OpenAI + DeepSeek fallback)',
      'Structured output parser (JSON enforcement)',
      'Session-based memory buffer',
      'Restaurant-specific prompt engineering',
    ],
    businessImpact: [
      '🍽️ Improved customer experience',
      '⚡ Instant food recommendations',
      '📈 Increased order conversion',
      '🤖 Automated restaurant assistant',
      '📊 Scalable digital menu system',
    ],
    images: [
      '/projects/restaurant-menu/1.png',
      '/projects/restaurant-menu/2.png',
    ],
    liveUrl: 'https://navyug-menu.progresswithai.com/',
  },
  {
    id: 'ai-copywriting-team',
    title: 'AI Copywriting Team (Multi-Agent System)',
    stack: ['n8n', 'OpenAI', 'LangChain Agents', 'Google Docs API', 'AI Workflows'],
    impact: '10x',
    impactLabel: 'Copies generated across formats',
    description: 'Creating high-quality marketing copy usually needs several specialists like ad writers, email experts, and scriptwriters, which is costly and time-consuming. This system builds a fully automated AI copywriting team, where multiple specialized agents collaborate to generate high-converting marketing content instantly.',
    iconType: 'copywriting',
    modules: [
      {
        title: '📥 Smart Request Intake System',
        description: 'Chat-based input that automatically detects intent for ads, emails, scripts, and more.',
      },
      {
        title: '🧠 AI Orchestrator (Main Brain)',
        description: 'Acts as a project manager, routing tasks to correct AI specialists and validating output quality.',
      },
      {
        title: '👥 Specialized AI Copywriting Agents',
        description: 'Team of agents including Ad Copy, Ad Script, VSL Script, Sales Letter, and Cold Email specialists.',
      },
      {
        title: '✅ Compliance & Quality Control',
        description: 'Reviews generated content to ensure proper structure and marketing compliance.',
      },
      {
        title: '🧾 Output Management System',
        description: 'Automatically saves final copy to Google Docs and maintains a centralized content repository.',
      },
      {
        title: '🧠 Memory & Context Engine',
        description: 'Persistent memory that remembers user preferences and brand tone for consistent copy.',
      },
    ],
    capabilities: [
      'Multi-agent AI collaboration system',
      'Intelligent task routing (intent-based)',
      'End-to-end copy generation pipeline',
      'Quality validation + refinement loop',
      'Multi-format content generation',
      'Persistent memory for brand consistency',
    ],
    highlights: [
      'LangChain-based multi-agent orchestration',
      'Tool-based agent routing system',
      'OpenAI GPT-4.1 mini intent classification',
      'Workflow-based agent execution (n8n)',
      'Google Docs API for content storage',
      'Compliance validation workflows',
    ],
    businessImpact: [
      '⚡ 10x faster content production',
      '💰 Reduced dependency on human copywriters',
      '📈 High-converting marketing content',
      '🔄 Scalable content system',
      '🤖 Fully automated AI marketing team',
    ],
    images: [
      '/projects/copywriting-team/1.png',
    ],
    liveUrl: '#',
  },
];

export const JOBS: Job[] = [
  {
    id: 'ecommerce-collections',
    company: 'E-Commerce Collections',
    location: 'USA (Remote)',
    role: 'AI Automation Developer',
    type: 'Full-Time',
    period: 'April 2026 – Present',
    current: true,
    bullets: [
      'Architected multi-agent automation systems integrating LLMs, APIs, databases, and business applications.',
      'Built an enterprise AI product-listing platform that auto-generates SEO titles, descriptions, bullets, metadata, and marketplace-ready images through an n8n + LLM + AI-image workflow.',
      'Designed Retrieval-Augmented Generation (RAG) solutions using vector databases and structured knowledge repositories.',
      'Built lead-intelligence platforms combining prospect research, enrichment, qualification, and CRM sync.',
      'Developed an AI system for Google Search Console that tracks rankings, clicks, impressions, CTR, and indexing, and sends automated SEO insights and alerts.',
      'Created competitor-intelligence automation for continuous market monitoring and strategic reporting.',
    ],
  },
  {
    id: 'progress-ai',
    company: 'Progress with AI',
    location: 'Pune, India',
    role: 'AI Automation & Web Developer',
    type: 'Full-Time',
    period: 'July 2024 – April 2026',
    current: false,
    bullets: [
      'Replaced manual processes with self-running automated voice systems that need no manual setup.',
      'Built and deployed AI agents that cut manual workload by 40% and sped up response times.',
      'Integrated AI agents with internal systems via n8n and API workflows for smart decision-making.',
      'Built real-time monitoring dashboards and internal tools in Next.js and React.js.',
      'Optimised scalable React.js apps ~30% using Redux, GraphQL, and component-level tuning.',
      'Led code reviews, maintained shared UI libraries, and contributed to CI/CD pipelines.',
    ],
  },
  {
    id: '10xgrow',
    company: '10xgrow.ai',
    location: 'USA (Remote)',
    role: 'AI Agent Automation',
    type: 'Part-Time',
    period: 'Nov 2025 – Dec 2025',
    current: false,
    bullets: [
      'Built production-grade AI voice agents with n8n and a Python backend, handling real-time speech processing, conversational AI, and workflow orchestration.',
      'Integrated APIs and CRM sync for intelligent, end-to-end business automation.',
    ],
  },
  {
    id: 'lovenspire',
    company: 'Lovenspire',
    location: 'USA (Remote)',
    role: 'AI Automation Engineer',
    type: 'Part-Time',
    period: 'Nov 2025 – April 2026',
    current: false,
    bullets: [
      'Managed and automated 5,000+ Amazon product listings, turning manual report checks into automated workflows.',
      'Optimised listings within Amazon seller policies to protect account health and performance.',
    ],
  },
];

export const EDUCATION: Education = {
  degree: 'B.Tech',
  field: 'Electrical Engineering',
  institution: 'Government College of Engineering, Amaravati',
  year: '2024',
  cgpa: '7.42',
};

export const TECHNICAL_SKILLS: Skill[] = [
  { label: 'n8n', category: 'automation' },
  { label: 'Zapier', category: 'automation' },
  { label: 'Workflow Automation', category: 'automation' },
  { label: 'API Integrations', category: 'automation' },
  { label: 'REST APIs & Webhooks', category: 'automation' },
  { label: 'React.js', category: 'frontend' },
  { label: 'Next.js', category: 'frontend' },
  { label: 'TypeScript', category: 'frontend' },
  { label: 'JavaScript', category: 'frontend' },
  { label: 'HTML5 / CSS3', category: 'frontend' },
  { label: 'Node.js', category: 'backend' },
  { label: 'Git / GitHub', category: 'backend' },
  { label: 'Backend Automation', category: 'backend' },
];

export const PROFESSIONAL_SKILLS: Skill[] = [
  { label: 'Project Coordination', category: 'professional' },
  { label: 'Technical Leadership', category: 'professional' },
  { label: 'Team Collaboration', category: 'professional' },
  { label: 'Problem Solving', category: 'professional' },
];

export const STATS: Stat[] = [
  { value: '70', numericValue: 70, suffix: '+', label: 'Automation Projects' },
  { value: '3', numericValue: 3, suffix: '+', label: 'Years Experience' },
  { value: '40', numericValue: 40, suffix: '%', label: 'Workload Reduction' },
  { value: '5', numericValue: 5, suffix: 'K+', label: 'Listings Automated' },
];

export const ROLES = [
  'AI Automation Engineer',
  'Workflow Automation Specialist',
  'n8n & API Integration Developer',
];

export const CONTACT = {
  email: 'utkarsh16potdukhe@gmail.com',
  phone: '+91 9823668825',
  location: 'Pune, Maharashtra, India',
  portfolio: 'utkarsh-potdukhe.netlify.app',
  linkedin: 'https://linkedin.com/in/utkarsh-potdukhe',
  github: 'https://github.com/utkarsh-potdukhe',
  resume: '/Utkarsh_Potdukhe_AI_Engineer.pdf',
};
