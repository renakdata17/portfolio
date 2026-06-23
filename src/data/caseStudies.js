export const caseStudies = [
  {
    id: "reporting-automation",
    index: "01",
    title: "B2B SaaS Reporting Automation",
    summary:
      "Designed a Django backend for scheduled reporting, async exports, role-aware API access, and stakeholder dashboards.",
    tags: ["Django", "DRF", "Celery", "PostgreSQL"],
    challenge:
      "A B2B SaaS client needed stakeholders to receive accurate, role-scoped reports on a schedule, without blocking the request/response cycle or exposing data outside each user's permissions.",
    approach: [
      "Modeled the reporting schema in PostgreSQL with migration-safe changes as requirements evolved",
      "Built REST endpoints in Django REST Framework with role-aware serializers and permission classes",
      "Moved report generation and export jobs onto Celery queues so large exports never blocked the API",
      "Connected the API to React/Vue front ends already in use by the client's product team",
    ],
    outcome:
      "Stakeholders got dashboards and scheduled exports backed by an API that stayed responsive under load, with access control enforced at the data layer rather than in the UI.",
  },
  {
    id: "data-pipeline",
    index: "02",
    title: "Multi-Source Data Pipeline",
    summary:
      "Built Python ETL workflows that normalized SQL and NoSQL data into clean analytics-ready datasets.",
    tags: ["Python", "Airflow", "Hadoop", "BI"],
    challenge:
      "Source data lived across PostgreSQL, MySQL, MS SQL, and MongoDB with inconsistent schemas, making it unreliable to feed directly into BI tools.",
    approach: [
      "Orchestrated retry-safe ETL jobs with Apache Airflow",
      "Wrote Python transformations to normalize SQL and NoSQL sources into a shared analytics schema",
      "Used Hadoop for the larger batch transformations where single-node processing wasn't enough",
      "Modeled the output tables specifically for consumption by Tableau, Looker, and Power BI",
    ],
    outcome:
      "Stakeholders could trust the numbers in their dashboards because the pipeline enforced one consistent schema, with failed jobs retrying instead of silently dropping data.",
  },
  {
    id: "ai-nlp-integration",
    index: "03",
    title: "AI/NLP Product Integration",
    summary:
      "Added AI-powered text analysis and conversational workflows without compromising production review or reliability.",
    tags: ["LangChain", "OpenAI", "Django", "NLP"],
    challenge:
      "The product needed AI-assisted text analysis and conversational features, but the team couldn't afford unreviewed model output reaching production data or users unchecked.",
    approach: [
      "Integrated LangChain and the OpenAI API into existing Django services rather than bolting on a separate AI microservice",
      "Designed prompt and API boundaries so failures degrade gracefully instead of breaking the request",
      "Added explicit manual-review checkpoints for any AI output that touched sensitive data or shipped to end users",
      "Wrote error handling that treats model output as untrusted input, the same way external API responses are treated",
    ],
    outcome:
      "The product shipped working NLP features on the timeline AI tooling makes possible, while production review stayed entirely human-led.",
  },
];
