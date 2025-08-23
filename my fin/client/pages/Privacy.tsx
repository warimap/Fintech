import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, UserCheck, Globe, ArrowLeft } from "lucide-react";

export default function Privacy() {
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
              <Badge variant="outline" className="hidden md:block">Privacy Policy</Badge>
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
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is fundamental to our mission. Learn how we protect and handle your information at Nani Fintech Plus.
            </p>
            <div className="mt-6 flex justify-center">
              <Badge className="bg-green-500/20 text-green-400 px-4 py-2">
                Last Updated: January 2025
              </Badge>
            </div>
          </div>

          {/* Quick Overview */}
          <Card className="glass mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-brand-primary" />
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
                  <p className="text-sm text-muted-foreground">All your financial data is encrypted and secured</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">You Own Your Data</h3>
                  <p className="text-sm text-muted-foreground">Full control over your information and privacy settings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Compliance</h3>
                  <p className="text-sm text-muted-foreground">GDPR, CCPA, and Islamic finance principles compliant</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Name, email address, phone number, and date of birth</li>
                      <li>Government-issued identification for KYC compliance</li>
                      <li>Address and location information</li>
                      <li>Employment and income information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Financial Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Bank account details and transaction history</li>
                      <li>Credit and debit card information (securely tokenized)</li>
                      <li>Investment preferences and risk tolerance</li>
                      <li>Zakat calculations and charitable giving records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Device information, IP address, and browser type</li>
                      <li>App usage patterns and feature preferences</li>
                      <li>Location data (with your explicit consent)</li>
                      <li>Security logs and authentication data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Core Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Process payments and transfers</li>
                      <li>Verify your identity (KYC/AML)</li>
                      <li>Calculate Zakat obligations</li>
                      <li>Manage Ayuto savings groups</li>
                      <li>Provide halal investment options</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Security & Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Prevent fraud and money laundering</li>
                      <li>Comply with financial regulations</li>
                      <li>Monitor for suspicious activities</li>
                      <li>Ensure Shariah compliance</li>
                      <li>Maintain transaction records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Communication</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Send transaction notifications</li>
                      <li>Provide customer support</li>
                      <li>Share important updates</li>
                      <li>Educational content about Islamic finance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Improvement</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Analyze app usage to improve features</li>
                      <li>Develop new halal financial products</li>
                      <li>Personalize your experience</li>
                      <li>Conduct research and analytics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">3. Information Sharing</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-400">We Never Sell Your Data</h3>
                    <p className="text-muted-foreground">
                      Nani Fintech Plus will never sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">When We May Share Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Service Providers:</strong> Trusted partners who help us operate our services (payment processors, cloud providers)</li>
                      <li><strong>Legal Requirements:</strong> When required by law, court orders, or regulatory authorities</li>
                      <li><strong>Safety & Security:</strong> To protect against fraud, security threats, or legal claims</li>
                      <li><strong>Business Transfers:</strong> In the event of a merger or acquisition (with notice to you)</li>
                      <li><strong>With Your Consent:</strong> Any other sharing will require your explicit permission</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">4. Data Security</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Technical Safeguards</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>AES-256 encryption for data at rest</li>
                      <li>TLS 1.3 for data in transit</li>
                      <li>Multi-factor authentication</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>PCI DSS Level 1 compliance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Organizational Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access controls and employee background checks</li>
                      <li>Data minimization and retention policies</li>
                      <li>Incident response and breach notification procedures</li>
                      <li>Regular security training for all staff</li>
                      <li>Independent security certifications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">5. Your Privacy Rights</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Access & Portability</h3>
                      <p className="text-muted-foreground">Request a copy of your personal data in a portable format</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correction</h3>
                      <p className="text-muted-foreground">Update or correct any inaccurate personal information</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Deletion</h3>
                      <p className="text-muted-foreground">Request deletion of your personal data (subject to legal requirements)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Restriction</h3>
                      <p className="text-muted-foreground">Limit how we process your personal information</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-primary font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Objection</h3>
                      <p className="text-muted-foreground">Object to processing based on legitimate interests</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-brand-primary/10 rounded-lg">
                  <p className="text-sm">
                    <strong>To exercise your rights:</strong> Contact us at{" "}
                    <a href="mailto:privacy@nanifintech.com" className="text-brand-primary hover:underline">
                      privacy@nanifintech.com
                    </a>{" "}
                    or through the app settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">6. Contact Us</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Privacy Questions</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: <a href="mailto:privacy@nanifintech.com" className="text-brand-primary hover:underline">privacy@nanifintech.com</a></p>
                      <p>Phone: +44 20 3014 3080</p>
                      <p>Response Time: Within 30 days</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Data Protection Officer</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: <a href="mailto:dpo@nanifintech.com" className="text-brand-primary hover:underline">dpo@nanifintech.com</a></p>
                      <p>Postal Address:</p>
                      <p>Nani Fintech Plus Ltd<br />Privacy Department<br />123 Fintech Square<br />London, EC1A 1BB, UK</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="text-muted-foreground mb-6">
                  Our privacy team is here to help. Reach out anytime with questions about how we handle your information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-futuristic" asChild>
                    <a href="/contact">Contact Privacy Team</a>
                  </Button>
                  <Button variant="outline" className="glass" asChild>
                    <a href="/">Return to Home</a>
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
