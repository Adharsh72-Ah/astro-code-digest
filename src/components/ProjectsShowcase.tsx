import { useState } from 'react';
import { ExternalLink, Github, Zap, Shield, BarChart3 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  icon: any;
  gradient: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce API Platform",
    category: "Backend Architecture",
    description: "Scalable microservices platform handling millions of transactions",
    problem: "Legacy monolith causing performance bottlenecks and deployment issues",
    solution: "Designed microservices architecture with Docker/Kubernetes orchestration",
    impact: "Reduced response time by 60% and improved deployment frequency by 10x",
    technologies: ["Python", "Flask", "Docker", "Kubernetes", "PostgreSQL"],
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    metrics: [
      { label: "Response Time", value: "60% faster" },
      { label: "Deployments", value: "10x more frequent" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    category: "Full Stack",
    description: "Live data visualization platform for business intelligence",
    problem: "Business teams lacked real-time insights into key performance metrics",
    solution: "Built React dashboard with WebSocket connections to streaming data pipelines",
    impact: "Enabled data-driven decisions reducing operational costs by 25%",
    technologies: ["React", "Python", "MongoDB", "WebSocket", "Chart.js"],
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
    metrics: [
      { label: "Cost Reduction", value: "25%" },
      { label: "Real-time Updates", value: "<1s latency" },
      { label: "Daily Active Users", value: "500+" }
    ]
  },
  {
    id: 3,
    title: "API Security Framework",
    category: "Security & Validation",
    description: "Comprehensive validation and security layer for REST APIs",
    problem: "Multiple API endpoints vulnerable to malformed data and security threats",
    solution: "Implemented JSON Schema validation with rate limiting and authentication",
    impact: "Eliminated 100% of data-related bugs and improved API security score",
    technologies: ["Python", "JSON Schema", "Redis", "JWT", "OpenAPI"],
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
    metrics: [
      { label: "Security Score", value: "A+ Grade" },
      { label: "Data Bugs", value: "0 incidents" },
      { label: "API Requests", value: "1M+ validated" }
    ]
  }
];

export const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedView, setSelectedView] = useState<'overview' | 'details'>('overview');

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-section-title text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* View Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-card border border-border rounded-lg p-1 inline-flex">
              {(['overview', 'details'] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setSelectedView(view)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 capitalize ${
                    selectedView === view
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isHovered = hoveredProject === project.id;

              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                      <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-3">
                        {project.category}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted border border-border rounded-md text-xs font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-primary">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover Details */}
                    {isHovered && selectedView === 'details' && (
                      <div className="absolute inset-0 bg-card border border-primary/20 rounded-2xl p-6 animate-slide-up">
                        <div className="h-full flex flex-col">
                          <h4 className="font-bold text-foreground mb-4">{project.title}</h4>
                          
                          <div className="space-y-3 text-sm flex-1">
                            <div>
                              <span className="text-red-400 font-semibold">Problem:</span>
                              <p className="text-muted-foreground mt-1">{project.problem}</p>
                            </div>
                            
                            <div>
                              <span className="text-yellow-400 font-semibold">Solution:</span>
                              <p className="text-muted-foreground mt-1">{project.solution}</p>
                            </div>
                            
                            <div>
                              <span className="text-green-400 font-semibold">Impact:</span>
                              <p className="text-muted-foreground mt-1">{project.impact}</p>
                            </div>
                          </div>

                          {/* Metrics */}
                          {project.metrics && (
                            <div className="mt-4 pt-4 border-t border-border">
                              <div className="grid grid-cols-1 gap-2">
                                {project.metrics.map((metric, idx) => (
                                  <div key={idx} className="flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground">{metric.label}:</span>
                                    <span className="text-xs font-bold text-primary">{metric.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="btn-ghost">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};