import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Server, 
  Shield,
  Cpu,
  Globe
} from 'lucide-react';

interface Technology {
  name: string;
  category: string;
  level: number;
  icon: any;
  description: string;
  experience: string;
}

const technologies: Technology[] = [
  {
    name: "Python",
    category: "Backend",
    level: 95,
    icon: Code2,
    description: "Primary language for building scalable applications",
    experience: "5 years"
  },
  {
    name: "Flask",
    category: "Framework",
    level: 90,
    icon: Server,
    description: "RESTful APIs and microservices development",
    experience: "4 years"
  },
  {
    name: "React",
    category: "Frontend",
    level: 75,
    icon: Globe,
    description: "Modern UI development and component architecture",
    experience: "2 years"
  },
  {
    name: "Docker",
    category: "DevOps",
    level: 85,
    icon: Cloud,
    description: "Containerization and deployment orchestration",
    experience: "3 years"
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    level: 80,
    icon: Cpu,
    description: "Container orchestration and scaling",
    experience: "2 years"
  },
  {
    name: "SQL/NoSQL",
    category: "Database",
    level: 90,
    icon: Database,
    description: "PostgreSQL, MongoDB, and data modeling",
    experience: "5 years"
  },
  {
    name: "Git",
    category: "Tools",
    level: 95,
    icon: GitBranch,
    description: "Version control and collaborative development",
    experience: "5 years"
  },
  {
    name: "JSON Schema",
    category: "Validation",
    level: 85,
    icon: Shield,
    description: "API validation and data integrity",
    experience: "3 years"
  }
];

export const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categoryColors = {
    "Backend": "from-blue-500 to-cyan-500",
    "Frontend": "from-green-500 to-emerald-500", 
    "Framework": "from-purple-500 to-violet-500",
    "DevOps": "from-orange-500 to-red-500",
    "Database": "from-yellow-500 to-amber-500",
    "Tools": "from-gray-500 to-slate-500",
    "Validation": "from-pink-500 to-rose-500"
  };

  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="container mx-auto">
        <h2 className="text-section-title text-center mb-16">
          Tech <span className="text-gradient">Arsenal</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              const isHovered = hoveredTech === tech.name;

              return (
                <div
                  key={tech.name}
                  className={`group relative p-6 rounded-xl border border-border transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isHovered ? 'bg-card border-primary/40' : 'bg-card/50 hover:bg-card'
                  }`}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    categoryColors[tech.category as keyof typeof categoryColors]
                  } opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <IconComponent className={`w-8 h-8 transition-all duration-300 ${
                      isHovered ? 'text-primary scale-110' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Tech Name */}
                  <h3 className="font-bold text-foreground mb-2 font-mono">{tech.name}</h3>

                  {/* Category */}
                  <p className="text-xs text-primary uppercase tracking-wider mb-3 font-semibold">
                    {tech.category}
                  </p>

                  {/* Skill Level Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Proficiency</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isHovered ? `${tech.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <p className="text-xs text-muted-foreground mb-2">{tech.experience} experience</p>

                  {/* Hover Description */}
                  {isHovered && (
                    <div className="absolute inset-x-0 bottom-full mb-2 p-3 bg-card border border-primary/20 rounded-lg shadow-lg animate-slide-up z-10">
                      <p className="text-sm text-foreground">{tech.description}</p>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};