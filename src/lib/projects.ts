export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  role: string;
  year: string;
  status: "production" | "archived" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "kosera",
    title: "KOSERA",
    summary: "Online learning platform ETL pipeline processing 2M+ daily events.",
    description:
      "Designed and implemented the end-to-end ETL pipeline for an online learning platform, ingesting user activity events from Kafka, transforming them through Apache Spark jobs, and loading curated datasets into BigQuery for analytics. Built data quality checks, automated schema evolution handling, and real-time monitoring dashboards.",
    tech: ["Apache Kafka", "Apache Spark", "BigQuery", "Airflow", "Python", "Docker"],
    metrics: [
      { label: "Events/day", value: "2.4M" },
      { label: "Pipeline latency", value: "<5 min" },
      { label: "Data quality", value: "99.7%" },
    ],
    role: "Data Engineer",
    year: "2024",
    status: "production",
  },
  {
    slug: "dataforge",
    title: "DataForge",
    summary: "Real-time data processing engine with sub-second latency.",
    description:
      "Built a horizontally scalable stream processing engine using Apache Flink, handling CDC events from PostgreSQL and MySQL sources. Implemented exactly-once semantics, windowed aggregations, and late-event handling. The system powers real-time dashboards and alerting for operational metrics across 12 microservices.",
    tech: ["Apache Flink", "PostgreSQL", "Redis", "Kubernetes", "Go", "gRPC"],
    metrics: [
      { label: "Throughput", value: "50K msg/s" },
      { label: "P99 latency", value: "180ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    role: "Backend Engineer",
    year: "2024",
    status: "production",
  },
  {
    slug: "api-gateway",
    title: "APIGateway",
    summary: "High-throughput API gateway handling 10K+ req/s.",
    description:
      "Architected a custom API gateway in Go to replace an aging NGINX-based setup. Features include JWT-based auth, rate limiting with sliding window counters in Redis, request/response transformation, circuit breaker patterns, and distributed tracing with OpenTelemetry. Reduced p99 latency by 40% compared to the previous solution.",
    tech: ["Go", "Redis", "OpenTelemetry", "Docker", "Envoy", "Prometheus"],
    metrics: [
      { label: "Requests/s", value: "12K" },
      { label: "P99 latency", value: "23ms" },
      { label: "Error rate", value: "0.01%" },
    ],
    role: "Backend Engineer",
    year: "2023",
    status: "production",
  },
  {
    slug: "logstream",
    title: "LogStream",
    summary: "Distributed log aggregation system for 50+ services.",
    description:
      "Designed a centralized logging infrastructure aggregating logs from 50+ containerized microservices. Built custom Fluentd plugins for parsing application-specific log formats, implemented log-based alerting with Elasticsearch queries, and created Grafana dashboards for real-time log analytics. Reduced mean-time-to-detection (MTTD) by 60%.",
    tech: ["Elasticsearch", "Fluentd", "Grafana", "Kubernetes", "Python", "Terraform"],
    metrics: [
      { label: "Log volume", value: "2TB/day" },
      { label: "Services", value: "54" },
      { label: "MTTD reduction", value: "60%" },
    ],
    role: "Infrastructure Engineer",
    year: "2023",
    status: "production",
  },
  {
    slug: "schemasync",
    title: "SchemaSync",
    summary: "Zero-downtime database migration orchestrator.",
    description:
      "Created a CLI tool and CI/CD integration for orchestrating zero-downtime database schema migrations across PostgreSQL clusters. Supports ghost table migrations, online DDL for large tables, automatic rollback on failure, and migration dependency resolution. Integrated with GitHub Actions for automated migration review workflows.",
    tech: ["Python", "PostgreSQL", "GitHub Actions", "SQLAlchemy", "Click", "Docker"],
    metrics: [
      { label: "Migrations run", value: "1,200+" },
      { label: "Rollback rate", value: "0.3%" },
      { label: "Downtime", value: "0s" },
    ],
    role: "Backend Engineer",
    year: "2023",
    status: "archived",
  },
  {
    slug: "pipeline-ops",
    title: "PipelineOps",
    summary: "ML pipeline monitoring and observability platform.",
    description:
      "Built an internal observability platform for monitoring ML training and inference pipelines. Features include pipeline DAG visualization, resource utilization tracking, model performance drift detection, and automated alerting. The platform provides a unified view across Kubeflow, Airflow, and custom pipeline runners.",
    tech: ["Next.js", "FastAPI", "ClickHouse", "Kubernetes", "Python", "D3.js"],
    metrics: [
      { label: "Pipelines tracked", value: "340+" },
      { label: "Alert accuracy", value: "94%" },
      { label: "Eng adoption", value: "100%" },
    ],
    role: "Full-stack Engineer",
    year: "2024",
    status: "in-progress",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
