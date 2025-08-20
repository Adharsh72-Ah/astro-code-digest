import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  MessageCircle, 
  Send,
  MapPin,
  Calendar,
  Phone,
  ExternalLink
} from 'lucide-react';
import professionalPhoto from '@/assets/professional-photo.jpg';

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
      <section className="py-24 px-6 relative overflow-hidden bg-section">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <h2 className="text-section-title mb-6">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into scalable solutions? Whether you're looking for 
                technical expertise, collaboration, or just want to discuss cutting-edge tech — I'm here to help.
              </p>
            </div>

            {/* Professional Photo & Contact Hub */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Professional Photo Section */}
              <div className="lg:col-span-1 flex flex-col items-center">
                <div className="relative group mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative card-glass p-2 rounded-3xl">
                    <img 
                      src={professionalPhoto} 
                      alt="Alex Chen - Software Engineer" 
                      className="w-48 h-48 object-cover rounded-2xl"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">Alex Chen</h3>
                <p className="text-primary font-medium mb-4">Software Engineer & API Specialist</p>
                
                <div className="card-glass px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-foreground/80">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {/* Quick Chat */}
                <div className="card-floating group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 card-glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Quick Chat</h3>
                  </div>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Have a project in mind or want to discuss potential collaboration? 
                    Let's schedule a focused conversation to explore how we can work together.
                  </p>
                  <button className="btn-hero w-full group">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>Schedule a Call</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>

                {/* Project Inquiry */}
                <div className="card-floating group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 card-glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Project Inquiry</h3>
                  </div>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Looking for backend expertise for your team or product? 
                    Send me your requirements, timeline, and let's discuss how I can contribute.
                  </p>
                  <button className="btn-ghost w-full group">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>Send Email</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links & Contact Methods */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Social Networks */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-8 text-center">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-glow p-6 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <IconComponent className={`w-8 h-8 mb-3 transition-colors duration-300 ${social.color}`} />
                        <span className="text-sm font-medium text-foreground/80">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-8 text-center">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="card-glow p-6 flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">Email</div>
                      <div className="text-foreground font-medium">alex.chen@email.com</div>
                    </div>
                  </div>
                  
                  <div className="card-glow p-6 flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">Phone</div>
                      <div className="text-foreground font-medium">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="card-glow p-6 flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">Location</div>
                      <div className="text-foreground font-medium">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Floating "Work with Me" Button */}
      {isFloatingVisible && (
        <div className="fixed bottom-8 right-8 z-50 group">
          <button
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-500 animate-float card-glass border border-primary/30"
            onClick={() => {
              window.location.href = 'mailto:alex.chen@email.com';
            }}
            aria-label="Work with me"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">Work with Me</span>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </button>
          
          {/* Enhanced close button */}
          <button
            className="absolute -top-3 -right-3 w-8 h-8 card-glass border border-border/50 rounded-full text-sm text-foreground/60 hover:text-foreground hover:border-primary/50 transition-all duration-300"
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