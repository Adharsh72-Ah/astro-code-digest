import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  MessageCircle, 
  Send,
  MapPin,
  Calendar
} from 'lucide-react';

export const ContactSection = () => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(true);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/alexchen",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/alexchen",
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/alexchen",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:alex.chen@email.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title mb-8">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to discuss your next project, explore collaboration opportunities, 
              or just chat about technology? I'd love to hear from you.
            </p>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Quick Contact */}
              <div className="card-glow p-8 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Quick Chat</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Have a quick question or want to discuss a potential collaboration? 
                  Let's schedule a brief call to explore possibilities.
                </p>
                <button className="btn-hero w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </button>
              </div>

              {/* Project Inquiry */}
              <div className="card-glow p-8 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Send className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Project Inquiry</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Looking for a software engineer for your team or project? 
                  Send me details about your requirements and timeline.
                </p>
                <button className="btn-ghost w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="card-floating inline-block px-8 py-4">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      {isFloatingVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-float"
            onClick={() => {
              window.location.href = 'mailto:alex.chen@email.com';
            }}
            aria-label="Quick contact"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          
          {/* Close button */}
          <button
            className="absolute -top-2 -right-2 w-6 h-6 bg-background border border-border rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsFloatingVisible(false)}
            aria-label="Hide floating button"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};