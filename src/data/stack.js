export const stack = [
  {
    id: "backend",
    label: "Backend",
    tools: ["Python", "Django", "Django REST Framework", "Flask", "FastAPI", "REST API design"],
  },
  {
    id: "data",
    label: "Data",
    tools: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "DynamoDB", "Data modeling", "Warehousing"],
  },
  {
    id: "async",
    label: "Async",
    tools: ["Celery", "Redis", "RabbitMQ", "Scheduled jobs", "Webhook processing", "Background exports"],
  },
  {
    id: "pipelines",
    label: "Pipelines",
    tools: ["Apache Airflow", "Hadoop", "ETL workflows", "Transformations", "Analytics datasets"],
  },
  {
    id: "ai-engineering",
    label: "AI Engineering",
    tools: ["Claude Code", "LangChain", "OpenAI API", "NLP features", "Assisted debugging and review"],
  },
  {
    id: "remote-delivery",
    label: "Remote Delivery",
    tools: ["Git", "Docker", "CI/CD", "Linux", "AWS", "GCP", "Async updates", "Cross-timezone collaboration"],
  },
];

export const whatIDo = [
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    description: "Shipping production APIs and async systems",
    details:
      "Building Django/Python backends and REST APIs, with Celery-driven async workflows for webhooks, scheduled jobs, and background exports — then deploying and operating them across remote, cross-timezone teams.",
    tools: [
      ...stack.find((s) => s.id === "backend").tools,
      ...stack.find((s) => s.id === "async").tools,
      ...stack.find((s) => s.id === "remote-delivery").tools,
    ],
  },
  {
    id: "data-ai-engineer",
    title: "Data & AI Engineer",
    description: "Modeling data and integrating AI features responsibly",
    details:
      "Designing PostgreSQL schemas and ETL pipelines across SQL/NoSQL sources with Airflow, then integrating LangChain/OpenAI-powered features into production services with manual review where it matters.",
    tools: [
      ...stack.find((s) => s.id === "data").tools,
      ...stack.find((s) => s.id === "pipelines").tools,
      ...stack.find((s) => s.id === "ai-engineering").tools,
    ],
  },
];
