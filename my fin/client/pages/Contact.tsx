import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowLeft,
  Send,
  CheckCircle,
  Globe,
  Headphones,
  FileText,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      details: "Available 24/7",
      action: "Start Chat",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our specialists",
      details: "+44 20 3014 3080",
      action: "Call Now",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@nanifintech.com",
      action: "Send Email",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: FileText,
      title: "Help Center",
      description: "Browse our knowledge base",
      details: "100+ Articles",
      action: "Browse FAQ",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    }
  ];

  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      flag: "🇬🇧",
      address: "123 Fintech Square, Canary Wharf, London EC1A 1BB",
      timezone: "GMT",
      hours: "9:00 AM - 6:00 PM"
    },
    {
      city: "Mogadishu", 
      country: "Somalia",
      flag: "🇸🇴",
      address: "456 Hamar Jajab District, Mogadishu, Somalia",
      timezone: "EAT",
      hours: "8:00 AM - 5:00 PM"
    },
    {
      city: "Mombasa",
      country: "Kenya", 
      flag: "🇰🇪",
      address: "789 Nyali Bridge Road, Mombasa, Kenya",
      timezone: "EAT",
      hours: "8:00 AM - 5:00 PM"
    },
    {
      city: "Minneapolis",
      country: "United States",
      flag: "🇺🇸", 
      address: "321 Cedar Avenue, Minneapolis, MN 55454",
      timezone: "CST",
      hours: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="islamic-pattern absolute inset-0 opacity-5" />
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="group">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffee645c3cb80434e80af2e06db4affa1%2F6460b365c917443daf2bdcedda36f4cf?format=webp&width=800"
                  alt="Nani Fintech Plus"
                  className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-pink-500/50"
                />
              </a>
              <Badge variant="outline" className="hidden md:block">Contact Us</Badge>
            </div>

            {/* Back to Home */}
            <Button variant="ghost" className="glass" asChild>
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you on your halal finance journey. Our support team is available 24/7 to assist you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="text-sm font-medium mb-4">{method.details}</p>
                  <Button size="sm" className="btn-futuristic">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Send className="h-6 w-6 mr-3 text-brand-primary" />
                  Send us a Message
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                          className="glass"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="glass"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="What can we help you with?"
                        className="glass"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="glass">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing & Payments</SelectItem>
                          <SelectItem value="security">Security & Privacy</SelectItem>
                          <SelectItem value="islamic">Islamic Finance Questions</SelectItem>
                          <SelectItem value="partnerships">Partnerships</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please describe how we can help you..."
                        className="glass min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-futuristic w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", category: "", message: "" });
                      }}
                      variant="outline"
                      className="glass"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Support Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-brand-primary" />
                    Support Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Live Chat</span>
                      <span className="text-green-400 font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Phone Support</span>
                      <span>Mon-Fri 9AM-6PM GMT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Email Support</span>
                      <span>Within 24 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="glass border-red-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
                    Emergency Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent security or fraud concerns:
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">📞 +44 20 3014 3080 (24/7)</p>
                    <p className="font-medium">✉️ emergency@nanifintech.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-brand-primary" />
                    Languages Supported
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <span>🇬🇧</span>
                      <span>English</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🇸🇴</span>
                      <span>Somali</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🇸🇦</span>
                      <span>Arabic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🇰🇪</span>
                      <span>Swahili</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="gradient-text">Global Offices</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <Card key={index} className="glass hover:bg-white/5 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{office.flag}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{office.city}</h3>
                        <p className="text-muted-foreground text-sm">{office.country}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-brand-primary mt-0.5" />
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-brand-primary" />
                        <p className="text-muted-foreground">{office.hours} {office.timezone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-16">
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
                <p className="text-muted-foreground mb-6">
                  Check out our comprehensive FAQ section for instant answers to common questions about Islamic finance, security, and app features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-futuristic">
                    <FileText className="mr-2 h-4 w-4" />
                    Browse FAQ
                  </Button>
                  <Button variant="outline" className="glass">
                    <Headphones className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
