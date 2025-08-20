import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeSnippets = [
    "const passion = 'innovation';",
    "function buildTheFuture() {",
    "  return solutions;",
    "}",
    "git commit -m 'magic'",
    "docker build -t dreams .",
    "kubectl apply -f vision.yaml",
  ];

  return (
    <section className="min-h-screen relative bg-hero flex items-center justify-center overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-10">
        {mounted && codeSnippets.map((code, index) => (
          <div
            key={index}
            className="absolute text-code text-primary animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-hero mb-6">
            Alex <span className="text-gradient">Chen</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            &lt;SoftwareEngineer /&gt;
          </div>
          
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Crafting scalable solutions with{' '}
            <span className="text-primary font-semibold">innovation</span> and{' '}
            <span className="text-primary font-semibold">reliability</span> at the core
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-hero">
              View My Work
            </button>
            <button className="btn-ghost">
              Download Resume
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
};