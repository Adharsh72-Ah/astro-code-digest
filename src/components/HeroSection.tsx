import { ArrowRight, Code2, Sparkles, Download, ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero relative overflow-hidden flex items-center">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                animationName: 'particle',
                animationDuration: `${8 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 8}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            />
          ))}
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-16 left-8 opacity-40">
          <div className="card-glass p-4 font-mono text-xs text-primary animate-float">
            <div className="text-primary/80">// Backend Specialist</div>
            <div className="text-foreground">const engineer = &#123;</div>
            <div className="text-foreground ml-4">stack: ['Python', 'Flask'],</div>
            <div className="text-foreground ml-4">experience: '5+ years'</div>
            <div className="text-foreground">&#125;</div>
          </div>
        </div>
        
        <div className="absolute top-32 right-12 opacity-40" style={{ animationDelay: '2s' }}>
          <div className="card-glass p-4 font-mono text-xs text-primary animate-float">
            <div className="text-primary/80"># Scalable Solutions</div>
            <div className="text-foreground">FROM python:3.9-slim</div>
            <div className="text-foreground">RUN pip install flask</div>
            <div className="text-foreground">EXPOSE 5000</div>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-16 opacity-40" style={{ animationDelay: '4s' }}>
          <div className="card-glass p-4 font-mono text-xs text-primary animate-float">
            <div className="text-primary/80">// API Development</div>
            <div className="text-foreground">@app.route('/api/v1')</div>
            <div className="text-foreground">def optimize():</div>
            <div className="text-foreground ml-4">return success</div>
          </div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-40 right-20 w-40 h-40 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
          <div className="absolute inset-8 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Premium Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <div className="w-12 h-12 card-glass rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <span className="text-code text-primary uppercase tracking-[0.3em] text-sm font-semibold">
              Software Engineer | Backend & API Specialist
            </span>
          </div>
          
          <h1 className="text-hero mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Alex <span className="text-gradient">Chen</span>
          </h1>
          
          <p className="text-tagline text-foreground/90 mb-12 max-w-3xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="font-semibold">Turning complex ideas into scalable solutions.</span><br />
            Backend architect with 5+ years crafting high-performance APIs, optimizing databases, and building robust systems that power modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button className="btn-hero group relative overflow-hidden">
              <span className="relative z-10">Explore My Work</span>
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button className="btn-ghost group">
              <Download className="w-5 h-5 mr-3" />
              <span>Download Resume</span>
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              { value: '5+', label: 'Years Experience', icon: '🎯' },
              { value: '25+', label: 'Projects Delivered', icon: '🚀' },
              { value: '2', label: 'Companies Grown', icon: '📈' },
              { value: '99%', label: 'Uptime Achieved', icon: '⚡' }
            ].map((stat, index) => (
              <div key={index} className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
    </section>
  );
};