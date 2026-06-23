import { motion } from "framer-motion";
import { TbCode } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiCelery,
  SiRedis,
  SiRabbitmq,
  SiApacheairflow,
  SiApachehadoop,
  SiDocker,
  SiGit,
  SiLinux,
  SiGooglecloud,
  SiClaude,
  SiLangchain,
  SiOpenai,
  SiReact,
  SiVuedotjs,
  SiAngular,
} from "react-icons/si";

const ROWS = [
  [
    { name: "Python", Icon: SiPython },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "SQL", Icon: null },
    { name: "Django", Icon: SiDjango },
    { name: "DRF", Icon: null },
    { name: "Flask", Icon: SiFlask },
    { name: "FastAPI", Icon: SiFastapi },
  ],
  [
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MySQL", Icon: SiMysql },
    { name: "MS SQL", Icon: null },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "DynamoDB", Icon: null },
    { name: "Celery", Icon: SiCelery },
    { name: "Redis", Icon: SiRedis },
  ],
  [
    { name: "RabbitMQ", Icon: SiRabbitmq },
    { name: "Airflow", Icon: SiApacheairflow },
    { name: "Hadoop", Icon: SiApachehadoop },
    { name: "Docker", Icon: SiDocker },
    { name: "Git", Icon: SiGit },
    { name: "Linux", Icon: SiLinux },
  ],
  [
    { name: "AWS", Icon: null },
    { name: "GCP", Icon: SiGooglecloud },
    { name: "Claude Code", Icon: SiClaude },
    { name: "LangChain", Icon: SiLangchain },
    { name: "OpenAI", Icon: SiOpenai },
  ],
  [
    { name: "React", Icon: SiReact },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "Angular", Icon: SiAngular },
    { name: "Power BI", Icon: null },
  ],
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-[1180px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Technical stack
        </p>
        <h2 className="text-[32px] font-extrabold tracking-[-0.05em] sm:text-[44px] lg:text-[56px]">
          Tech Stack
        </h2>
      </motion.div>

      <div className="flex flex-col items-center gap-4 rounded-card border border-line bg-gradient-to-br from-white/[0.1] to-white/[0.03] p-7 shadow-card backdrop-blur-xl sm:p-10">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
            {row.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: (rowIndex * row.length + i) * 0.02 }}
                whileHover={{ scale: 1.08, y: -4 }}
                title={name}
                className="flex w-[88px] flex-col items-center gap-2 rounded-2xl border border-line bg-white/[0.04] px-2 py-4 transition-colors hover:border-accent/50"
              >
                {Icon ? (
                  <Icon className="text-2xl text-ink" />
                ) : (
                  <TbCode className="text-2xl text-muted" />
                )}
                <span className="text-center text-[11px] font-medium text-muted">{name}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
