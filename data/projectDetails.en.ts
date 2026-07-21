export type ProjectDetail = {
  overview: string;
  metrics: { value: string; label: string }[];
  methodology: string[];
  findings: string[];
  recommendations: string[];
  technologies: string[];
};

export const projectDetails: ProjectDetail[] = [
  // 0. LLM Integration & Prompt Engineering
  {
    overview:
      "Developed an advanced AI-powered business process automation system leveraging Large Language Models (LLMs) through sophisticated prompt engineering techniques, centered on intelligent workflows capable of processing complex business documents and generating actionable insights with reduced manual effort.",
    metrics: [
      { value: "40%", label: "Reduction in manual analysis time" },
      { value: "94%", label: "Model accuracy rate" },
      { value: "500+", label: "Documents processed per hour" },
      { value: "$75K/yr", label: "Cost savings" },
    ],
    methodology: [
      "Evaluated models across GPT-4, Claude, and Llama, and built a prompt engineering framework with context management",
      "Developed advanced prompt templates using chain-of-thought reasoning and few-shot learning for domain-specific applications",
      "Implemented dynamic context injection based on document classification, with an automated testing and optimization pipeline",
      "Integrated the workflow with existing business systems for real-time document processing, with human-in-the-loop validation and a monitoring dashboard",
    ],
    findings: [],
    recommendations: [],
    technologies: ["GPT-4", "Claude", "Llama", "Python", "OpenAI API", "LangChain", "Pandas"],
  },
  // 1. CloudSense: Environmental Monitoring Cloud Architecture
  {
    overview:
      "CloudSense addresses the need for affordable environmental monitoring by using cloud computing to break down the cost and accessibility barriers of traditional monitoring stations, which typically cost €15,000–€50,000.",
    metrics: [
      { value: "95%", label: "Cost reduction vs. traditional monitoring" },
      { value: "90%", label: "Less management workload via cloud abstraction" },
      { value: "1000+", label: "Sensors supported (scaled from 1)" },
    ],
    methodology: [
      "Data generation layer: Python scripts simulate sensor values for temperature, humidity, and air quality with natural fluctuations",
      "Storage layer: Google Cloud Storage manages readings as JSON files in a lightweight data-lake architecture",
      "Presentation layer: a Flask dashboard on App Engine provides a clean, responsive interface for data visualization",
      "Demonstrated three cloud service models: IaaS via Compute Engine VMs, PaaS through App Engine migration, and SaaS using Cloud Console APIs",
    ],
    findings: [
      "Built a working proof-of-concept entirely within free-tier budget constraints",
      "Achieved scalability from 1 to 1000+ sensors with pay-as-you-go economics",
      "Created an accessible interface requiring only a browser to operate",
    ],
    recommendations: [
      "Aligns with UN SDG Goal 13 (Climate Action) as a replicable model for affordable environmental monitoring in resource-constrained settings",
    ],
    technologies: ["Google Cloud Platform", "Python", "Flask", "Cloud Storage", "App Engine", "Compute Engine"],
  },
  // 2. Cybersecurity Analytics with Splunk
  {
    overview:
      "Comprehensive security monitoring to detect and respond to advanced persistent threats in real time, for an enterprise needing a scalable SIEM solution to handle millions of security events daily while reducing false positives.",
    metrics: [
      { value: "60%", label: "Faster threat detection & response" },
      { value: "45%", label: "Risk reduction" },
      { value: "10M+", label: "Events processed per day" },
      { value: "99.8%", label: "Monitoring uptime" },
    ],
    methodology: [
      "Assessment phase: comprehensive security infrastructure audit, critical asset identification, and Splunk architecture design",
      "Implementation phase: deployed the Splunk Enterprise Security platform, configured data inputs from multiple security tools, and built custom correlation rules and alerts",
    ],
    findings: [
      "Detected 95% of simulated advanced persistent threats",
      "Reduced false-positive alerts by 70%",
      "Cut security operational costs by 35% while enhancing SOX and PCI-DSS compliance posture",
    ],
    recommendations: [
      "Deploy advanced threat hunting capabilities",
      "Implement zero-trust security architecture",
      "Integrate AI/ML for predictive threat analysis",
      "Establish a dedicated security operations center (SOC)",
    ],
    technologies: ["Splunk Enterprise Security", "SIEM", "Custom correlation rules", "Threat intelligence feeds"],
  },
  // 3. Power BI Sales Dashboard Analytics
  {
    overview:
      "Designed and developed a comprehensive Power BI sales analytics dashboard for a multinational retail company, covering multi-source data integration, DAX calculations, and interactive visualizations of sales performance, customer behavior, and market trends across regions and product categories.",
    metrics: [
      { value: "28%", label: "YoY increase in total sales revenue" },
      { value: "80%", label: "Less manual reporting time" },
      { value: "95%", label: "Adoption rate across sales teams" },
      { value: "3 mo", label: "Time to ROI payback" },
    ],
    methodology: [
      "Built a star-schema data model connecting five sources: SQL Server, Excel files, SharePoint, Web APIs, and Azure Data Lake",
      "Implemented optimized relationships, calculated columns and measures, time-intelligence functions, and row-level security",
    ],
    findings: [
      "North America led with 40% of total revenue",
      "Europe grew 22% in premium categories",
      "Asia-Pacific had the highest customer acquisition rate at 35% new customers",
      "Latin America showed 45% YoY growth potential",
    ],
    recommendations: [],
    technologies: ["Power BI Desktop", "DAX", "SQL", "Power Query", "M language", "Power BI Service"],
  },
  // 4. Customer Database SQL Analysis
  {
    overview:
      "Comprehensive SQL-based analysis of a retail company's customer database containing 2.5 million records spanning 3 years of transaction history, aimed at understanding behavioral patterns, calculating lifetime value, identifying churn risks, and segmenting customers for marketing strategies.",
    metrics: [
      { value: "2.5M", label: "Customer records analyzed" },
      { value: "45%", label: "Revenue from top 8% VIP customers" },
      { value: "23%", label: "Customers at high churn risk" },
      { value: "40%", label: "Retention lift after 3rd purchase" },
    ],
    methodology: [
      "Used window functions (ROW_NUMBER, RANK, LAG/LEAD), CTEs, and complex subqueries",
      "Applied aggregations with GROUP BY/HAVING, date functions, and multi-table joins",
      "Optimized performance through indexing and query tuning",
    ],
    findings: [
      "VIP customers (8%) generate 45% of revenue; regular customers (35%) generate 40%",
      "Average customer lifespan is 18 months, with 23% of customers at high churn risk",
      "The Champions segment (12% of customers) averages €450 per order",
      "Q4 generates 35% of annual revenue, with electronics spiking 400% on Black Friday",
    ],
    recommendations: [
      "Implement tiered loyalty programs",
      "Develop win-back campaigns targeting high-risk customers",
      "Optimize inventory 2 months ahead of seasonal trends",
      "Enhance mobile platforms and build predictive ML models on the SQL findings",
    ],
    technologies: ["PostgreSQL", "SQL window functions", "Cohort analysis", "RFM segmentation"],
  },
  // 5. Digital Marketing Campaign Analytics
  {
    overview:
      "Comprehensive analysis of a 6-month multi-channel digital marketing campaign for an e-commerce client across Google Ads, Facebook, Instagram, and email, aimed at optimizing budget allocation and improving conversion rates.",
    metrics: [
      { value: "45%", label: "Improvement in campaign ROI" },
      { value: "4.2x", label: "Email marketing ROI" },
      { value: "65%", label: "Conversions needing 3+ touchpoints" },
      { value: "72%", label: "Sessions from mobile" },
    ],
    methodology: [
      "Established unified tracking with UTM parameters and cross-device tracking",
      "Analyzed 500K+ user sessions across channels with cohort analysis and attribution patterns",
      "Built automated Tableau dashboards, segmentation models, and an A/B testing framework",
    ],
    findings: [
      "Google Ads converted at 3.2%; Facebook grew reach by 85%; Instagram drove 8.5% engagement among younger demographics",
      "Mobile made up 72% of sessions but only 45% of conversions",
      "Peak engagement was Tuesday–Thursday, 2–4 PM",
      "Returning customers had 3.5x higher average order value",
    ],
    recommendations: [
      "Reallocate Google Ads budget toward email marketing",
      "Implement retargeting for multi-touchpoint conversions",
      "Optimize the mobile experience",
      "Use time-based bidding during peak hours",
      "Develop customer loyalty programs",
    ],
    technologies: ["Google Analytics", "SQL", "Tableau"],
  },
  // 6. SAP Finance Module Optimization
  {
    overview:
      "Comprehensive analysis and optimization of SAP Financial (FI) and Controlling (CO) modules for a multinational manufacturing company over an 8-week engagement, focused on streamlining financial processes, improving data accuracy, and ensuring compliance with international accounting standards.",
    metrics: [
      { value: "40%", label: "Reduction in month-end closing time" },
      { value: "60%", label: "Faster invoice processing" },
      { value: "€2.5M", label: "Annual cost savings" },
      { value: "50%", label: "Fewer manual data entry errors" },
    ],
    methodology: [
      "Phase 1: reviewed existing FI/CO processes, identified pain points, and ran stakeholder interviews to set a performance baseline",
      "Phase 2: redesigned processes, specified custom development, and planned change management",
      "Phase 3: implemented configuration and custom development, ran UAT, trained users, and supported go-live stabilization",
    ],
    findings: [],
    recommendations: [],
    technologies: ["SAP FI Configuration", "SAP CO Setup", "ABAP", "RFC/IDoc/web services", "SAP Query", "Crystal Reports"],
  },
  // 7. CRM Implementation Analysis
  {
    overview:
      "A 12-week Salesforce CRM implementation (Q4 2023–Q1 2024) to centralize customer management and improve sales efficiency for an organization managing 45K customer records across a 125-person sales team with a €50M annual pipeline.",
    metrics: [
      { value: "€4.2M", label: "First-year ROI" },
      { value: "35%", label: "Improvement in sales efficiency" },
      { value: "340%", label: "Overall ROI" },
      { value: "95%", label: "Data accuracy (from 72%)" },
    ],
    methodology: [
      "Phase 1 – Foundation (4 wks): Salesforce org setup, configuration, and data migration from legacy systems",
      "Phase 2 – Enhancement (6 wks): advanced automation, workflows, and pilot testing",
      "Phase 3 – Rollout (2 wks): company-wide user training and full deployment",
      "Change management included executive workshops, manager training, end-user sessions, and a super-user champion program",
    ],
    findings: [
      "Customer data was fragmented across 5 different systems",
      "Manual lead qualification took 2–3 days with no centralized pipeline visibility",
      "Manual reporting consumed 8 hours weekly, and data accuracy was only 72%",
    ],
    recommendations: [
      "Adopt a standardized sales methodology",
      "Automate lead scoring",
      "Deploy real-time dashboards",
      "Build continuous feedback loops for ongoing improvement",
    ],
    technologies: ["Salesforce CRM", "SAP ERP integration", "HubSpot", "Microsoft Exchange"],
  },
  // 8. IT Service Desk Optimization
  {
    overview:
      "An 8-week engagement (Q3 2024) to reduce resolution time and improve customer satisfaction across incident, problem, and change management using ITIL frameworks.",
    metrics: [
      { value: "30%", label: "Reduction in resolution time" },
      { value: "€850K", label: "Cost savings" },
      { value: "78%", label: "First call resolution (from 65%)" },
      { value: "4.6/5", label: "Customer satisfaction" },
    ],
    methodology: [
      "Incident management: fixed bottlenecks in ticket logging/categorization and added automated ticket routing",
      "Problem management: shifted from reactive to proactive, with enhanced root-cause analysis",
      "Change management: streamlined approvals and introduced post-implementation reviews",
    ],
    findings: [
      "Average resolution time was 6 hours with a backlog of 350+ tickets",
      "First call resolution was only 65%",
      "Inefficiencies cost an estimated €1.2M annually",
    ],
    recommendations: ["Build a comprehensive knowledge base", "Introduce proactive problem management"],
    technologies: [],
  },
  // 9. Sales Performance Analytics
  {
    overview:
      "An engagement to optimize sales performance and improve forecasting accuracy, addressing a sales team's difficulty forecasting sales accurately, which was causing inventory management issues and missed revenue targets.",
    metrics: [
      { value: "35%", label: "Improvement in forecasting accuracy" },
      { value: "€2.4M", label: "Revenue increase" },
      { value: "+24%", label: "Revenue growth" },
      { value: "108%", label: "Target achievement" },
    ],
    methodology: [
      "Collected and cleaned 18 months of sales data",
      "Developed predictive models using SQL and Tableau to identify key sales drivers",
      "Implemented real-time reporting and inventory optimization infrastructure",
    ],
    findings: ["Identified clear seasonal sales patterns", "Discovered the key factors influencing sales performance"],
    recommendations: [],
    technologies: ["SQL", "Tableau", "Predictive Analytics", "KPI Dashboards"],
  },
  // 10. Tech Market Research Analysis
  {
    overview:
      "Comprehensive competitive analysis of the cloud computing market with trend identification, market sizing, and strategic recommendations, completed in a 3-week timeframe (March–April 2024) for a startup planning market entry.",
    metrics: [
      { value: "$120B", label: "IaaS market size (22% growth)" },
      { value: "$195B", label: "SaaS market size (15% growth)" },
      { value: "35%", label: "Edge computing CAGR" },
      { value: "65%", label: "Market share held by top 3 players" },
    ],
    methodology: [
      "Primary research through industry surveys and expert interviews, plus secondary industry reports",
      "Applied Porter's Five Forces, SWOT analysis, TAM/SAM/SOM market sizing, and regression analysis for trend forecasting",
    ],
    findings: [
      "Edge computing is the fastest-growing segment at 35% CAGR",
      "SMEs show a 40% adoption gap in cloud services",
      "Industry-specific solutions carry 60% higher profit margins",
    ],
    recommendations: [
      "Focus on edge computing and SME segments for optimal ROI",
      "Develop industry-specific solutions for healthcare and finance",
    ],
    technologies: ["Tableau", "Python", "Statistical Analysis"],
  },
  // 11. E-commerce Process Improvement Study
  {
    overview:
      "A checkout optimization initiative for an e-commerce platform facing a 68% cart abandonment rate and frequent customer complaints about checkout complexity.",
    metrics: [
      { value: "68%→43%", label: "Cart abandonment rate" },
      { value: "7.2→2.5 min", label: "Average checkout time" },
      { value: "€1.8M", label: "Additional annual revenue" },
      { value: "4.1/5", label: "Projected customer satisfaction" },
    ],
    methodology: [
      "Mapped the process using BPMN and Visio",
      "Ran a gap analysis to isolate root causes: forced account creation, duplicate information entry, and limited payment methods",
      "Proposed a 3-phase rollout: guest checkout & fewer mandatory fields, then single-page/mobile-optimized design, then A/B testing with personalization",
    ],
    findings: [
      "The checkout had 7 steps averaging 7.2 minutes, including 45s for cart review and 120s for account creation alone",
      "Mobile conversion was just 1.8%, with an overall success rate of only 32%",
    ],
    recommendations: [
      "Enable guest checkout and remove mandatory fields",
      "Move to a single-page, mobile-optimized design",
      "Run A/B testing with personalization",
      "Reduce checkout from 7 steps to 4",
    ],
    technologies: ["BPMN", "Visio"],
  },
];
