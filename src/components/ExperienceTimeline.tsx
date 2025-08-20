import { useState } from 'react';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    role: "Software Engineer",
    duration: "2019 - 2022",
    period: "3 years",
    description: "Started my journey building scalable web applications and APIs",
    achievements: [
      "Developed RESTful APIs serving 100K+ daily requests",
      "Reduced system latency by 40% through optimization",
      "Led migration to microservices architecture"
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    company: "InnovateLabs",
    role: "Senior Software Engineer",
    duration: "2022 - Present",
    period: "2 years",
    description: "Leading complex projects and mentoring junior developers",
    achievements: [
      "Architected cloud-native solutions using Kubernetes",
      "Built real-time data processing pipelines",
      "Improved deployment efficiency by 60%"
    ],
    technologies: ["Python", "Kubernetes", "React", "MongoDB", "JSON Schema"]
  }
];

export const ExperienceTimeline = () => {
  const [selectedExp, setSelectedExp] = useState<number>(2);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-section-title text-center mb-16">
          My <span className="text-gradient">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 transition-all duration-500 cursor-pointer ${
                  selectedExp === exp.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                onClick={() => setSelectedExp(exp.id)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  selectedExp === exp.id 
                    ? 'bg-primary border-primary shadow-[var(--shadow-glow)]' 
                    : 'bg-background border-primary/50'
                }`} />

                {/* Content Card */}
                <div className="ml-16">
                  <div className={`card-floating ${selectedExp === exp.id ? 'card-glow' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary" />
                          {exp.company}
                        </h3>
                        <p className="text-primary font-semibold">{exp.role}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration} • {exp.period}
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        selectedExp === exp.id ? 'rotate-90' : ''
                      }`} />
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {selectedExp === exp.id && (
                      <div className="animate-slide-up">
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};