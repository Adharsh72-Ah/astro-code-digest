import { Heart, Target, Rocket, Coffee } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "I believe great software is crafted with attention to detail and genuine care for the user experience."
  },
  {
    icon: Target,
    title: "Problem-First Mindset",
    description: "Every line of code should solve a real problem. I focus on understanding the 'why' before the 'how'."
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Technology evolves rapidly, and I thrive on learning new tools and methodologies to stay ahead."
  },
  {
    icon: Coffee,
    title: "Collaboration & Mentoring",
    description: "Best solutions emerge from diverse perspectives. I enjoy mentoring junior developers and learning from peers."
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-title text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Turning Complex Problems into Elegant Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 5 years of hands-on experience in software engineering, I've had the privilege 
                  of working on systems that serve thousands of users daily. My journey started with 
                  curiosity about how things work under the hood, and has evolved into a passion for 
                  building reliable, scalable solutions.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in backend architecture and API design, but I believe the best 
                  engineers are T-shaped – deep in their expertise yet broad enough to collaborate 
                  across the stack. Whether it's optimizing database queries, designing microservices, 
                  or mentoring teammates, I approach every challenge with curiosity and systematic thinking.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge through technical writing. I believe 
                  the future belongs to those who can bridge the gap between human needs and 
                  technological possibilities.
                </p>
              </div>
            </div>

            {/* Stats & Highlights */}
            <div className="space-y-6">
              <div className="card-floating">
                <h4 className="font-bold text-foreground mb-4">Quick Highlights</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-primary font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projects Delivered</span>
                    <span className="text-primary font-semibold">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Code Commits</span>
                    <span className="text-primary font-semibold">5,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team Members Mentored</span>
                    <span className="text-primary font-semibold">8</span>
                  </div>
                </div>
              </div>

              <div className="card-floating">
                <h4 className="font-bold text-foreground mb-4">Current Focus</h4>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    📚 Learning: Advanced Kubernetes patterns
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🔨 Building: Personal productivity tools
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ✍️ Writing: Technical blog on architecture patterns
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🎯 Goal: Contributing to major open-source projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">
              What Drives Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="card-floating group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};