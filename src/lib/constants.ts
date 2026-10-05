import type { Project, Job, Education, SkillGroup, Stat } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-knowledge-copilot',
    title: 'Enterprise Knowledge Copilot',
    stack: ['Python', 'FastAPI', 'LangChain', 'Vector DB', 'BM25', 'Redis', 'JWT', 'RAGAS', 'OpenTelemetry'],
    impact: 'Role aware',
    impactLabel: 'RAG with RBAC filtered retrieval',
    description:
      'A role aware RAG copilot over company policy, handbook, technical and compliance documents. Hybrid retrieval (BM25 plus vector search) with a reranker on top, RBAC filtering from JWT claims before any context reaches the LLM, and a semantic cache keyed by user role so restricted content never enters the prompt.',
    iconType: 'rag',
    modules: [
      {
        title: 'Hybrid Retrieval Layer',
        description: 'BM25 and vector search run side by side, then a reranker orders the merged candidates before they reach the model.',
      },
      {
        title: 'Role Tagged Chunking',
        description: 'Every chunk carries role metadata (employee, manager, admin) so access rules live with the data, not in the prompt.',
      },
      {
        title: 'RBAC Filter from JWT',
        description: 'Claims in the JWT filter retrieval before context assembly, so restricted content never enters the prompt.',
      },
      {
        title: 'Role Keyed Semantic Cache',
        description: 'Repeat queries hit a semantic cache keyed by role, cutting cost without serving a manager answer to an employee.',
      },
      {
        title: 'Cited Answers',
        description: 'Every answer cites the source chunks it was built from, so readers can check the claim against the document.',
      },
      {
        title: 'Evaluation and Tracing',
        description: 'RAGAS evals on a hand written golden Q&A set, with Jaeger traces and Prometheus tracking p95 latency and cost per answer.',
      },
    ],
    capabilities: [
      'Grounded answers over policy, handbook and compliance docs',
      'Access control enforced at retrieval time',
      'Hybrid lexical plus semantic search with reranking',
      'Cost control through role aware semantic caching',
      'Source citations on every response',
    ],
    highlights: [
      'BM25 plus vector search with a reranker on top',
      'Role metadata on every chunk',
      'JWT claim based RBAC filtering before context assembly',
      'Semantic cache partitioned by user role',
      'Recall@5, MRR, faithfulness and unauthorized retrieval rate measured with RAGAS',
      'p95 latency and cost per answer tracked with Jaeger and Prometheus',
    ],
    businessImpact: [
      'Teams get grounded answers from company data instead of guessing',
      'Restricted content stays restricted, verified by eval, not by hope',
      'Repeat questions cost less without weakening access rules',
      'Latency and cost are visible per answer, not estimated',
    ],
  },
  {
    id: 'agentic-customer-ops',
    title: 'Agentic Customer Operations Platform',
    stack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    impact: 'Human gated',
    impactLabel: 'Agent actions behind policy gates',
    description:
      'A stateful support agent built as a LangGraph state machine with tools for order lookup, policy lookup, ticket creation, refund drafting and human escalation. The LLM only proposes actions. Deterministic policy gates in code decide what runs, and refunds, cancellations and account changes wait for human approval.',
    iconType: 'agent',
    modules: [
      {
        title: 'LangGraph State Machine',
        description: 'The support flow is an explicit graph of states and tools, so every path the agent can take is known in advance.',
      },
      {
        title: 'Propose, Then Gate',
        description: 'The model proposes an action. Policy gates in code (refund window, amount limits) decide whether it actually runs.',
      },
      {
        title: 'Human Approval Queue',
        description: 'Refunds, cancellations and account changes pause for a person to approve before anything is committed.',
      },
      {
        title: 'Idempotent Actions',
        description: 'Ticket and refund actions are idempotent, so a retried request never creates a duplicate.',
      },
      {
        title: 'Durable Checkpoints',
        description: 'Workflow state is checkpointed in PostgreSQL, so an interrupted conversation resumes safely instead of restarting.',
      },
      {
        title: 'Safety Evals',
        description: 'Normal and adversarial requests measure tool selection accuracy, unauthorized action rate and escalation precision.',
      },
    ],
    capabilities: [
      'Order, policy and ticket tooling behind one agent',
      'Deterministic policy enforcement outside the model',
      'Human in the loop for money and account changes',
      'Safe retries and resumable sessions',
      'Tool level tracing for every decision',
    ],
    highlights: [
      'LangGraph state machine with explicit tool nodes',
      'Policy gates in code, not in the prompt',
      'Idempotency keys on ticket and refund actions',
      'Durable checkpoints in PostgreSQL',
      'Adversarial eval set alongside the normal one',
      'Task completion and cost per resolved case tracked',
    ],
    businessImpact: [
      'Support actions are safe to automate because the risky ones wait for approval',
      'No duplicate tickets or refunds on retries',
      'Interrupted workflows resume instead of starting over',
      'Escalation quality and cost per case are measured, not assumed',
    ],
  },
  {
    id: 'llm-gateway',
    title: 'LLM Gateway with Intelligent Model Routing',
    stack: ['Python', 'FastAPI', 'LiteLLM', 'Redis', 'Langfuse', 'Docker'],
    impact: '3 tier',
    impactLabel: 'Routing by complexity, SLO and budget',
    description:
      'A multi provider LLM gateway behind one endpoint. Each request is routed to a small, medium or premium model by task complexity, latency SLO and tenant budget, with auth, per tenant rate limits, caching, retries with backoff and automatic fallback to a second provider.',
    iconType: 'gateway',
    modules: [
      {
        title: 'Routing Engine',
        description: 'Scores each request on task complexity, latency SLO and remaining tenant budget, then picks the model tier.',
      },
      {
        title: 'Tenant Controls',
        description: 'Auth, per tenant rate limits and budget checks sit in front of every call.',
      },
      {
        title: 'Resilience Layer',
        description: 'Response caching in Redis, timeouts with retry and backoff, and automatic fallback to a second provider.',
      },
      {
        title: 'Cost and Latency Logging',
        description: 'Model, tokens, latency and cost are logged for every request through Langfuse.',
      },
      {
        title: 'Cost Dashboard',
        description: 'Spend per tenant and per model tier, with p50 and p95 latency against the SLO.',
      },
      {
        title: 'Routed vs Premium Benchmark',
        description: 'Routed traffic is compared against an all premium baseline on a fixed benchmark with a quality bar set before the test.',
      },
    ],
    capabilities: [
      'One endpoint across multiple LLM providers',
      'Tiered model selection per request',
      'Per tenant budgets, limits and auth',
      'Caching, retries and provider fallback',
      'Full cost and latency observability',
    ],
    highlights: [
      'LiteLLM behind a FastAPI gateway',
      'Small, medium and premium model tiers',
      'Redis response cache',
      'Retry with backoff and secondary provider fallback',
      'Langfuse logging per request',
      'p50 and p95 latency SLOs per tier',
    ],
    businessImpact: [
      'Cheaper requests go to cheaper models without a quality drop',
      'Every cost saving is measured against task success, not just price',
      'Tenants cannot exceed their budget or rate limit',
      'Provider outages fall back automatically',
    ],
  },
  {
    id: 'agentic-rag-research',
    title: 'Agentic RAG Research System',
    stack: ['Python', 'LangGraph', 'BM25', 'Vector DB', 'Reranker', 'RAGAS'],
    impact: 'Multi hop',
    impactLabel: 'Planner led retrieval that abstains',
    description:
      'A multi hop research copilot. A query planner breaks complex questions into subqueries, retrieves and reranks evidence for each hop, and checks it before moving on. A faithfulness check runs before every answer so the system abstains instead of guessing when the evidence does not support a claim.',
    iconType: 'research',
    modules: [
      {
        title: 'Query Planner',
        description: 'Breaks a complex question into ordered subqueries and decides when another hop is needed.',
      },
      {
        title: 'Per Hop Retrieval',
        description: 'Each hop runs BM25 and vector retrieval, then reranks the evidence before it is accepted.',
      },
      {
        title: 'Evidence Check',
        description: 'Retrieved evidence is checked before the planner moves on, so weak hops do not poison later ones.',
      },
      {
        title: 'Faithfulness Gate',
        description: 'A faithfulness check runs before every answer. If the evidence does not support the claim, the system abstains.',
      },
      {
        title: 'Gold Labelled Eval Set',
        description: 'A labelled eval set with gold sources was written before any code, so progress was measured from day one.',
      },
      {
        title: 'Step Level Tracing',
        description: 'Traces for each plan, hop and rerank step, alongside p95 latency and cost per query.',
      },
    ],
    capabilities: [
      'Multi step reasoning over large document sets',
      'Abstention instead of hallucination',
      'Hybrid retrieval with reranking at every hop',
      'Citation support on final answers',
      'Eval driven development',
    ],
    highlights: [
      'LangGraph planner and executor loop',
      'BM25 plus vector retrieval with a reranker',
      'Faithfulness check before every answer',
      'Hit@K, Recall@K, MRR and nDCG measured',
      'Faithfulness and citation support scored with RAGAS',
      'p95 latency and cost per query tracked',
    ],
    businessImpact: [
      'Complex questions get researched, not guessed',
      'Unsupported claims are refused rather than invented',
      'Retrieval quality is measured per hop',
      'Latency and cost per query are visible',
    ],
  },
  {
    id: 'amazon-ops-dashboard',
    title: 'Amazon Ops Automation Monitor',
    stack: ['n8n', 'OpenAI', 'Decodo API', 'Google Sheets', 'Google Drive', 'NocoDB API'],
    impact: '25,000+',
    impactLabel: 'Products monitored and processed',
    description:
      'Managing Amazon operations manually across inventory, product data, reviews and Shopify sync leads to errors and wasted hours. This system is a fully automated, end to end pipeline that parses reports, scrapes product data, compares listings and flags critical issues in one unified dashboard.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Inventory Parsing Engine',
        description: 'Automates Amazon report ingestion, extracts SKU, ASIN, price and stock, and syncs structured data to Google Sheets.',
      },
      {
        title: 'ASIN Intelligence Scraper',
        description: 'Fetches real time product data (price, rating, buybox, variations) using the Decodo API and turns it into actionable insights.',
      },
      {
        title: 'Amazon to Shopify Sync Validator',
        description: 'Compares Amazon and Shopify listings using SKU based mapping and similarity logic to detect mismatches.',
      },
      {
        title: 'Smart Alert and Flagging System',
        description: 'Flags low rated products (under 3.2), missing buybox, incomplete listings and stock mismatches automatically.',
      },
    ],
    capabilities: [
      'AI driven product data extraction',
      'Automated multi source data synchronization',
      'Comparison and validation engine',
      'Real time issue detection and reporting',
      'Scalable batch processing (pagination and loops)',
    ],
    highlights: [
      'Webhook based automation pipelines',
      'Google Drive and Sheets integration',
      'Decodo API scraping engine',
      'Shopify data fetch via NocoDB API',
      'Conditional logic for review and buybox alerts',
      'Error handling and retry workflows',
    ],
    businessImpact: [
      '90% reduction in manual work',
      'Faster issue detection with real time alerts',
      'Improved listing accuracy and consistency',
      'Better conversion through optimized product data',
    ],
    images: [
      '/projects/ecommerce-ops/1. parse Amazon Inventory Report.png',
      '/projects/ecommerce-ops/2. Amazon ASIN Scarper With Decodo.png',
      '/projects/ecommerce-ops/3. Amazon - Shopify Product Data Compare.png',
      '/projects/ecommerce-ops/4. Product Review Flagging.png',
    ],
  },
  {
    id: 'amazon-listing-optimizer',
    title: 'Amazon Listing Optimization Engine',
    stack: ['n8n', 'OpenAI', 'Google Docs API', 'Shopify API', 'Google Sheets', 'Helium10'],
    impact: '15,000+',
    impactLabel: 'Listings optimized with AI',
    description:
      'Amazon listings often underperform because of weak keyword usage, poor content structure and compliance gaps. This system automates the whole optimization lifecycle, from Helium 10 keyword analysis and guideline validation to AI generated listings and quality scoring.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Keyword Intelligence Engine',
        description: 'Processes Helium 10 keyword files, prioritizes keywords and groups them for placement in titles, bullets and search terms.',
      },
      {
        title: 'Guideline Compliance System',
        description: 'Fetches optimization rules from Google Docs so listings follow brand rules and Amazon listing requirements.',
      },
      {
        title: 'AI Listing Generator',
        description: 'Generates SEO optimized titles, high converting bullets, rich descriptions and backend search terms from source data.',
      },
      {
        title: 'Listing Audit and Scoring',
        description: 'Analyzes existing listings and scores titles, bullets and keyword utilization.',
      },
      {
        title: 'Variant Data Structuring',
        description: 'Handles multi variant SKU mapping and Shopify metafield integration for consistent variant level data.',
      },
    ],
    capabilities: [
      'AI powered keyword optimization strategy',
      'Automated listing audit and improvement suggestions',
      'Multi variant product handling',
      'SEO and conversion focused content generation',
      'Compliance validation against rules and guidelines',
    ],
    highlights: [
      'XLSX keyword ingestion (Helium 10)',
      'Priority based keyword clustering logic',
      'Google Docs API for dynamic guidelines',
      'Shopify GraphQL and metafield extraction',
      'Structured JSON AI output schema',
      'Real time dashboard link generation',
    ],
    businessImpact: [
      'Higher ranking with optimized keywords',
      'Increased conversions with better content',
      '80 to 90% faster listing optimization',
      'Data driven decisions through quality scores',
    ],
    images: [
      '/projects/amazon-listing-optimizer/part 1.png',
      '/projects/amazon-listing-optimizer/part 2.png',
    ],
  },
  {
    id: 'gsc-analytics-dashboard',
    title: 'Google Search Console Analytics Automation',
    stack: ['n8n', 'Google Search Console API', 'Google Sheets', 'JavaScript'],
    impact: '50,000+',
    impactLabel: 'URLs tracked and analyzed monthly',
    description:
      'Tracking Search Console data by hand across months is slow and gives no structure. This system tracks keyword rankings, position changes, clicks, impressions, CTR and indexing status per URL, organizes them month by month, and sends automated SEO insights and alerts.',
    iconType: 'backend',
    modules: [
      {
        title: 'URL Data Pipeline',
        description: 'Fetches URLs dynamically from Google Sheets and prepares them for batch processing.',
      },
      {
        title: 'Month Wise Data Engine',
        description: 'Processes data for selected date ranges and maps results into structured month over month columns.',
      },
      {
        title: 'GSC API Analytics Fetcher',
        description: 'Pulls total clicks, impressions, CTR, position and top queries for every individual URL.',
      },
      {
        title: 'Data Transformation Engine',
        description: "Formats raw API data into readable labels like 'June-c' (clicks), 'June-i' (impressions) and 'June-q' (query).",
      },
      {
        title: 'Insights and Alerts',
        description: 'Updates the Sheets dashboard and sends automated SEO insights and alerts on ranking and indexing changes.',
      },
    ],
    capabilities: [
      'Automated SEO performance tracking',
      'Month over month comparison ready data',
      'URL level analytics breakdown',
      'Dynamic column mapping system',
      'Scalable batch processing (n8n loops)',
    ],
    highlights: [
      'Google Search Console API integration',
      'Dual API calls (totals plus top queries)',
      'Smart URL normalization logic',
      'Loop based batch processing (n8n)',
      'Dynamic field mapping (clicks, impressions, query)',
      'Auto sheet update with row matching',
    ],
    businessImpact: [
      'Clear monthly SEO performance visibility',
      'Saves 10+ hours per month of manual reporting',
      'Identifies top performing pages and keywords',
      'Enables rapid, data driven SEO strategy shifts',
    ],
    images: [
      '/projects/gsc-analytics-dashboard/Screenshot (3752).png',
    ],
  },
  {
    id: 'lead-gen-system',
    title: 'AI Lead Qualification and Routing System',
    stack: ['n8n', 'OpenAI', 'Zoho CRM', 'Google Sheets', 'Apollo', 'Email Automation'],
    impact: '90%',
    impactLabel: 'Faster lead response, zero manual qualification',
    description:
      'Manual lead handling wastes time, qualifies poorly and responds late. This system automates the full lead lifecycle from capture to AI qualification, product matching and salesperson assignment in real time, then syncs enriched data to Zoho CRM and Google Sheets.',
    iconType: 'backend',
    modules: [
      {
        title: 'Lead Capture and Intake',
        description: 'Captures leads from Google Sheets, forms and external sources with real time trigger automation.',
      },
      {
        title: 'AI Qualification Engine',
        description: 'Structured JSON output that detects intent, prioritizes high value prospects and routes relevant and irrelevant leads through separate paths.',
      },
      {
        title: 'Product Matching Engine',
        description: 'Matches leads with the right products or categories using internal database logic.',
      },
      {
        title: 'Smart Sales Assignment',
        description: 'Assigns each lead to the best fit salesperson by product expertise and availability.',
      },
      {
        title: 'CRM and Sheet Sync',
        description: 'Updates Zoho CRM and Google Sheets with structured, enriched lead data.',
      },
      {
        title: 'Automated Notifications',
        description: 'Internal team alerts, HTML email notifications and immediate follow up sequences.',
      },
    ],
    capabilities: [
      'AI based intent detection',
      'Real time lead qualification and routing',
      'Product and category mapping',
      'Sales team automation (assignment plus links)',
      'Lead enrichment and validation pipeline',
    ],
    highlights: [
      'Google Sheets trigger based automation',
      'AI agent with structured JSON output',
      'Intent first qualification logic',
      'Conditional routing (relevant vs irrelevant)',
      'Zoho CRM API integration',
      'Email automation (HTML templates)',
      'Apollo enrichment workflows',
    ],
    businessImpact: [
      'Lead response time cut by about 90%',
      'High quality lead filtering, no junk reaches sales',
      'Improved conversion rate through rapid routing',
      'Zero manual qualification effort',
    ],
    images: [
      '/projects/lead-gen-system/Screenshot (3753).png',
    ],
  },
  {
    id: 'amazon-ads-monitor',
    title: 'Amazon Ads Monitor with PDF Reports',
    stack: ['n8n', 'Amazon Ads API', 'PDF Generator', 'Webhooks', 'Google Sheets'],
    impact: '80%',
    impactLabel: 'Manual ad monitoring eliminated',
    description:
      'Automated monitoring for Amazon Advertising campaigns. Fetches real time performance data, analyzes ROAS and ACOS, and generates professional PDF reports, giving complete visibility with zero manual effort.',
    iconType: 'ecom',
    modules: [
      {
        title: 'Ad Performance Engine',
        description: 'Fetches real time campaign, ad group and keyword data via the Amazon Advertising API.',
      },
      {
        title: 'Automated PDF Generator',
        description: 'Turns raw ad data into branded PDF reports for stakeholder updates and performance reviews.',
      },
      {
        title: 'Smart Budget Alerts',
        description: 'Monitors spend and performance thresholds and triggers notifications for budget spikes or weak ads.',
      },
    ],
    capabilities: [
      'Real time Amazon Advertising API sync',
      'Automated PDF report generation and distribution',
      'Campaign level ROAS and ACOS tracking',
      'Keyword performance analysis',
      'Multi account ad data orchestration',
    ],
    highlights: [
      'Amazon Ads API / SP-API integration',
      'Custom automated PDF reporting engine',
      'Threshold based webhook alert system',
      'n8n driven multi step data transformation',
      'Rate limit handling for high volume ad accounts',
    ],
    businessImpact: [
      '80% reduction in manual ad monitoring',
      'Real time performance visibility',
      'Improved ROAS via rapid data driven shifts',
      'Professional automated reporting for clients',
    ],
  },
  {
    id: 'voice-booking',
    title: 'Voice Based Appointment Booking',
    stack: ['n8n', 'ElevenLabs', 'Cal.com', 'Supabase', 'Vapi', 'React.js Dashboard'],
    impact: '< 60s',
    impactLabel: 'Booking confirmed over the phone',
    description:
      'A voice scheduling agent that lets callers book appointments over the phone with no human support. It checks live availability, confirms bookings automatically, logs sessions in Supabase and syncs with Cal.com, with a React dashboard for monitoring.',
    iconType: 'voice',
    modules: [
      {
        title: 'Vapi Voice Intelligence',
        description: 'Handles voice processing and intent detection for natural conversations.',
      },
      {
        title: 'ElevenLabs TTS Engine',
        description: 'Low latency, human like voice synthesis tuned to the brand persona.',
      },
      {
        title: 'Supabase Data Store',
        description: 'Persistent storage for call logs, session metadata and user synchronization.',
      },
      {
        title: 'React.js Analytics Dashboard',
        description: 'A frontend for monitoring active sessions, call history and conversion metrics.',
      },
      {
        title: 'Cal.com Scheduling Sync',
        description: 'Bi directional calendar integration for zero booking conflicts and instant confirmation.',
      },
    ],
    capabilities: [
      'Real time AI voice interaction',
      'Automated session logging and tracking',
      'Live availability verification',
      'Call monitoring dashboard',
      'Multi channel notifications',
    ],
    highlights: [
      'Vapi and ElevenLabs integration',
      'Supabase edge functions and DB',
      'React.js real time visualizer',
      'n8n decision making logic',
      'Webhook based event triggers',
      'Cal.com API for scheduling',
    ],
    businessImpact: [
      'Appointments booked with no human on the line',
      '24/7 availability without staffing',
      'Instant confirmation for the caller',
      'Every call logged and reviewable',
    ],
  },
  {
    id: 'linkedin-content-engine',
    title: 'AI LinkedIn Content Engine',
    stack: ['n8n', 'Google Gemini AI', 'Google Sheets', 'Google Drive', 'Webhook', 'LinkedIn API'],
    impact: '10x',
    impactLabel: 'Faster content creation',
    description:
      'Consistent LinkedIn content takes strategy, formatting and time. This system automates the whole pipeline, from idea generation to post writing, image generation and publishing ready drafts, with Google Sheets as the content database.',
    iconType: 'linkedin',
    modules: [
      {
        title: 'Content Input and Trigger System',
        description: 'Accepts topic ideas via webhook or Google Sheets and triggers the generation workflow.',
      },
      {
        title: 'AI Content Strategy Engine',
        description: 'Generates three post ideas from different angles (story, contrarian, tools) with structured hooks.',
      },
      {
        title: 'LinkedIn Post Generator',
        description: 'Writes short hooks (under 140 characters) with clean formatting and CTAs that follow LinkedIn rules.',
      },
      {
        title: 'Content Database System',
        description: 'Stores posts in Google Sheets, tracking title, content and status (Draft, Completed, Published).',
      },
      {
        title: 'AI Image Generation Engine',
        description: 'Turns posts into visual concepts, generates images and uploads them to Google Drive with database links.',
      },
      {
        title: 'Publishing and Workflow Automation',
        description: 'One click publishing to LinkedIn with full lifecycle tracking and live links.',
      },
    ],
    capabilities: [
      'AI driven content ideation and writing',
      'Multi post generation (three ideas per topic)',
      'Engagement focused formatting logic',
      'Image and content sync automation',
      'End to end pipeline from idea to published post',
    ],
    highlights: [
      'Webhook based trigger system',
      'Gemini AI for content and image generation',
      'Structured content formatting engine',
      'Google Sheets as CMS',
      'Google Drive for media storage',
      'Multi step workflow orchestration (n8n)',
      'Status tracking from Processing to Published',
    ],
    businessImpact: [
      '10x faster content creation',
      'Higher engagement with structured posts',
      'A consistent posting system',
      'Personal branding that scales without manual effort',
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
    description:
      'Customers struggle to choose when menus are large and preferences vary. This AI assistant understands mood, taste and dietary preferences and instantly recommends the best menu items, returning clean JSON for the frontend.',
    iconType: 'restaurant',
    modules: [
      {
        title: 'Smart Chat Input System',
        description: 'Webhook based chat interface that accepts queries like "I am hungry", "something spicy" or "veg dinner".',
      },
      {
        title: 'AI Food Recommendation Engine',
        description: 'Analyzes mood, taste and dietary preferences to generate personalized suggestions.',
      },
      {
        title: 'Menu Intelligence Database',
        description: 'Structured catalog with predefined IDs for accurate recommendations across the full menu.',
      },
      {
        title: 'Context Aware Recommendation Logic',
        description: 'Maps intent to the best dishes, suggesting two to five items per query and handling vague requests.',
      },
      {
        title: 'Structured Response System',
        description: 'Returns clean JSON with personalized messages and product IDs for easy frontend integration.',
      },
      {
        title: 'Memory and Conversation Context',
        description: 'Session based chat memory for better recommendations and conversational flow.',
      },
    ],
    capabilities: [
      'Real time AI chat based food recommendations',
      'Mood, taste and dietary understanding',
      'Structured API ready responses (JSON)',
      'Multi category menu mapping',
      'Context aware conversation memory',
    ],
    highlights: [
      'Webhook based API system',
      'AI agent with strict response schema',
      'Dual LLM support (OpenAI with DeepSeek fallback)',
      'Structured output parser (JSON enforcement)',
      'Session based memory buffer',
      'Restaurant specific prompt engineering',
    ],
    businessImpact: [
      'Improved customer experience',
      'Instant food recommendations',
      'Increased order conversion',
      'A digital menu system that scales',
    ],
    images: [
      '/projects/restaurant-menu/1.png',
      '/projects/restaurant-menu/2.png',
    ],
    liveUrl: 'https://navyug-menu.progresswithai.com/',
  },
  {
    id: 'ai-copywriting-team',
    title: 'AI Copywriting Team (Multi Agent System)',
    stack: ['n8n', 'OpenAI', 'LangChain Agents', 'Google Docs API', 'AI Workflows'],
    impact: '10x',
    impactLabel: 'Copy generated across formats',
    description:
      'Good marketing copy usually needs several specialists, which is slow and costly. This system is a fully automated AI copywriting team where specialized agents collaborate under an orchestrator to produce high converting content instantly.',
    iconType: 'copywriting',
    modules: [
      {
        title: 'Smart Request Intake System',
        description: 'Chat based input that detects intent for ads, emails, scripts and more.',
      },
      {
        title: 'AI Orchestrator',
        description: 'Acts as a project manager, routing tasks to the right specialist and validating output quality.',
      },
      {
        title: 'Specialized Copywriting Agents',
        description: 'Ad Copy, Ad Script, VSL Script, Sales Letter and Cold Email specialists.',
      },
      {
        title: 'Compliance and Quality Control',
        description: 'Reviews generated content for structure and marketing compliance.',
      },
      {
        title: 'Output Management System',
        description: 'Saves final copy to Google Docs and maintains a central content repository.',
      },
      {
        title: 'Memory and Context Engine',
        description: 'Persistent memory for user preferences and brand tone.',
      },
    ],
    capabilities: [
      'Multi agent collaboration system',
      'Intent based task routing',
      'End to end copy generation pipeline',
      'Quality validation and refinement loop',
      'Multi format content generation',
      'Persistent memory for brand consistency',
    ],
    highlights: [
      'LangChain based multi agent orchestration',
      'Tool based agent routing system',
      'GPT-4.1 mini intent classification',
      'Workflow based agent execution (n8n)',
      'Google Docs API for content storage',
      'Compliance validation workflows',
    ],
    businessImpact: [
      '10x faster content production',
      'Less dependency on human copywriters',
      'High converting marketing content',
      'A content system that scales',
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
    company: 'Ecommerce Collections',
    location: 'USA (Remote)',
    role: 'AI Automation Developer',
    type: 'Full-Time',
    period: 'April 2026 to Present',
    current: true,
    bullets: [
      'Designed Retrieval Augmented Generation (RAG) solutions on vector databases and structured knowledge bases so teams get grounded answers from company data.',
      'Built a lead intelligence platform that researches prospects, enriches and qualifies them, and syncs the results to the CRM.',
      'Developed competitor intelligence automation for continuous market monitoring and strategic business reporting.',
      'Architected multi agent automation systems connecting LLMs, APIs, databases and business applications.',
      'Built an AI product listing platform in n8n that generates SEO optimized titles, descriptions, bullet points, metadata, keywords and marketplace ready images using LLMs and AI image generation models.',
      'Developed a Google Search Console automation that tracks keyword rankings, position changes, clicks, impressions, CTR and indexing status, and sends automated SEO insights and alerts.',
    ],
  },
  {
    id: 'progress-ai',
    company: 'Progress with AI',
    location: 'Pune, India',
    role: 'AI Automation and Web Developer',
    type: 'Full-Time',
    period: 'July 2024 to April 2026',
    current: false,
    bullets: [
      'Built and deployed AI agents for repetitive business tasks, reducing manual workload by 40%.',
      'Delivered full stack automation projects, including self running voice systems that replaced manual work.',
      'Integrated AI agents with internal systems through n8n and API workflows for automated decision making.',
      'Developed internal web tools and real time monitoring dashboards with Next.js and React.js.',
      'Improved React.js application performance by about 30% using Redux and GraphQL.',
      'Led code reviews, maintained shared UI libraries and contributed to CI/CD testing pipelines.',
    ],
  },
  {
    id: 'lovenspire',
    company: 'Lovenspire',
    location: 'USA (Remote)',
    role: 'AI Automation Engineer',
    type: 'Part-Time',
    period: 'November 2025 to April 2026',
    current: false,
    bullets: [
      'Automated inventory documentation by pulling product and stock data from Amazon backend APIs, scraping storefront data and syncing Shopify store data into one up to date inventory report.',
      'Built an AI SEO optimization workflow that combines Helium 10 keyword research with LLMs to write titles, bullet points, descriptions and backend search terms that follow brand rules and Amazon listing requirements.',
      'Automated AI image generation for product listings, producing images that match brand guidelines and marketplace requirements.',
      'Improved organic search ranking through keyword rank tracking and ongoing SEO optimization, while keeping every listing within Amazon seller policies to protect account health.',
    ],
  },
  {
    id: '10xgrow',
    company: '10xgrow.ai',
    location: 'USA (Remote)',
    role: 'AI Agent Developer',
    type: 'Part-Time',
    period: 'November 2025 to December 2025',
    current: false,
    bullets: [
      'Developed production AI voice agents with n8n and a Python backend, covering real time speech processing, conversational AI, workflow orchestration, API integrations and CRM sync.',
    ],
  },
];

export const EDUCATION: Education = {
  degree: 'B.Tech',
  field: 'Electrical Engineering',
  institution: 'Government College of Engineering, Amravati',
  year: '2024',
  cgpa: '7.42',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'AI and LLM',
    items: [
      'LLM Applications',
      'RAG',
      'Agentic RAG',
      'AI Agents',
      'Multi Agent Systems',
      'LangChain',
      'LangGraph',
      'OpenAI API',
      'Prompt Engineering',
      'Model Routing',
      'LLM Evaluation',
      'RAGAS',
    ],
  },
  {
    title: 'Retrieval',
    items: ['Hybrid Search', 'BM25', 'Vector Databases', 'Embeddings', 'Reranking', 'Semantic Caching'],
  },
  {
    title: 'Automation',
    items: ['n8n', 'Zapier', 'Workflow Automation', 'Voice AI Agents', 'ElevenLabs', 'Zoho CRM', 'Apollo'],
  },
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks',
    items: ['FastAPI', 'Node.js', 'React.js', 'Next.js', 'Redux', 'GraphQL'],
  },
  {
    title: 'Infrastructure',
    items: [
      'Docker',
      'REST APIs',
      'Webhooks',
      'JWT',
      'RBAC',
      'Redis',
      'PostgreSQL',
      'OpenTelemetry',
      'Jaeger',
      'Prometheus',
      'Langfuse',
      'Git / GitHub',
      'CI/CD',
    ],
  },
];

export const STATS: Stat[] = [
  { value: '70', numericValue: 70, suffix: '+', label: 'Automation Projects' },
  { value: '2', numericValue: 2, suffix: '+', label: 'Years Experience' },
  { value: '40', numericValue: 40, suffix: '%', label: 'Workload Reduction' },
  { value: '90', numericValue: 90, suffix: '%', label: 'Faster Lead Response' },
];

export const ROLES = [
  'AI Engineer',
  'LLM Applications Developer',
  'AI Automation Engineer',
];

export const CONTACT = {
  email: 'utkarsh16potdukhe@gmail.com',
  phone: '+91 9823668825',
  location: 'Pune, Maharashtra, India',
  portfolio: 'utkarshpotdukhe.github.io/utkarsh-portfolio-v3',
  linkedin: 'https://linkedin.com/in/utkarsh-potdukhe',
  github: 'https://github.com/utkarsh-potdukhe',
  resume: '/Utkarsh_Potdukhe_Resume.pdf',
};
