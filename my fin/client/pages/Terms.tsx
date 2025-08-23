import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  ArrowLeft, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  FileText,
  Gavel,
  Users,
  CreditCard,
  Lock
} from "lucide-react";

export default function Terms() {
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
              <Badge variant="outline" className="hidden md:block">Terms of Service</Badge>
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
                <Scale className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of Nani Fintech Plus services. Please read them carefully as they contain important information about your rights and obligations.
            </p>
            <div className="mt-6 flex justify-center">
              <Badge className="bg-blue-500/20 text-blue-400 px-4 py-2">
                Effective Date: January 1, 2025
              </Badge>
            </div>
          </div>

          {/* Key Points Summary */}
          <Card className="glass mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-green-400" />
                Terms Summary
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Shariah Compliant</h3>
                  <p className="text-sm text-muted-foreground">All services follow Islamic finance principles</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">FCA Regulated</h3>
                  <p className="text-sm text-muted-foreground">Authorized and regulated financial services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Account Security</h3>
                  <p className="text-sm text-muted-foreground">Your responsibility to keep credentials secure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <Gavel className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="font-semibold mb-2">UK Law Governed</h3>
                  <p className="text-sm text-muted-foreground">Disputes resolved under English law</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Terms */}
          <div className="space-y-8">
            {/* Agreement to Terms */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">1. Agreement to Terms</h2>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    By accessing or using Nani Fintech Plus ("Service", "Platform"), you agree to be bound by these Terms of Service ("Terms"). 
                    If you disagree with any part of these terms, you may not access the Service.
                  </p>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1 text-yellow-400">Important Notice</h3>
                        <p className="text-sm text-muted-foreground">
                          These terms may be updated from time to time. Continued use of the Service constitutes acceptance of any changes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-brand-primary">By using our Service, you confirm that:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>You are at least 18 years old or the age of legal majority in your jurisdiction</li>
                      <li>You have the legal capacity to enter into binding contracts</li>
                      <li>You will comply with all applicable laws and regulations</li>
                      <li>You understand the risks associated with financial services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">2. Description of Services</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Core Services</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Digital wallet and payment services</li>
                        <li>Money transfers and remittances</li>
                        <li>Ayuto (rotating savings) group management</li>
                        <li>Zakat calculation and distribution</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Halal investment opportunities</li>
                        <li>Multi-currency support (GBP, USD, SOS)</li>
                        <li>eSIM and gift card purchases</li>
                        <li>Financial education and guidance</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Islamic Finance Compliance</h3>
                    <p className="text-muted-foreground mb-3">
                      All our services are designed to comply with Islamic finance principles (Shariah). This includes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Prohibition of interest (riba) in all transactions</li>
                      <li>Avoidance of excessive uncertainty (gharar)</li>
                      <li>No investment in prohibited industries (haram sectors)</li>
                      <li>Asset-backed financing structures</li>
                      <li>Profit and loss sharing arrangements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Service Availability</h3>
                    <p className="text-muted-foreground">
                      While we strive for 99.9% uptime, services may be temporarily unavailable due to maintenance, 
                      technical issues, or circumstances beyond our control. We will provide reasonable notice of 
                      planned maintenance when possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Registration */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">3. Account Registration & KYC</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Registration Requirements</h3>
                    <p className="text-muted-foreground mb-3">
                      To use our services, you must complete our registration process and provide:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Valid government-issued photo identification</li>
                      <li>Proof of address (utility bill, bank statement, etc.)</li>
                      <li>Employment and income verification</li>
                      <li>Source of funds documentation</li>
                      <li>Additional documents as required by regulation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Know Your Customer (KYC)</h3>
                    <p className="text-muted-foreground mb-3">
                      We are required by law to verify your identity and comply with anti-money laundering (AML) regulations. This process includes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Identity verification using advanced biometric technology</li>
                      <li>Address verification and validation</li>
                      <li>Enhanced due diligence for high-risk customers</li>
                      <li>Ongoing monitoring of account activity</li>
                      <li>Regular review and update of customer information</li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-400">Account Security</h3>
                    <p className="text-sm text-muted-foreground">
                      You are responsible for maintaining the confidentiality of your account credentials. 
                      Immediately notify us of any unauthorized access or suspicious activity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">4. User Responsibilities</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Prohibited Activities</h3>
                    <p className="text-muted-foreground mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Use the Service for any illegal, fraudulent, or unauthorized purposes</li>
                      <li>Attempt to gain unauthorized access to other accounts or systems</li>
                      <li>Transmit malware, viruses, or harmful code</li>
                      <li>Engage in money laundering or terrorist financing</li>
                      <li>Violate any applicable laws, regulations, or third-party rights</li>
                      <li>Use the Service for gambling or other haram activities</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Transaction Limits</h3>
                    <p className="text-muted-foreground mb-3">
                      To comply with regulations and ensure security, we impose limits on:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Daily transaction amounts</li>
                        <li>Monthly transfer limits</li>
                        <li>Number of transactions per period</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Account balance limits</li>
                        <li>Withdrawal frequencies</li>
                        <li>International transfer amounts</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Accurate Information</h3>
                    <p className="text-muted-foreground">
                      You must provide accurate, current, and complete information and promptly update 
                      any changes. Providing false information may result in account suspension or termination.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fees and Charges */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">5. Fees and Charges</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Fee Structure</h3>
                    <p className="text-muted-foreground mb-3">
                      Our fee structure is designed to be transparent and Shariah-compliant:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Transaction Fees</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Domestic transfers: Free up to £1,000/month</li>
                          <li>International transfers: 1-3% of amount</li>
                          <li>Currency conversion: Competitive exchange rates</li>
                          <li>Card payments: Merchant fees may apply</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Service Fees</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Account maintenance: Free for active accounts</li>
                          <li>Premium features: Subscription-based</li>
                          <li>Investment services: Performance-based fees</li>
                          <li>Ayuto facilitation: Small administrative fee</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-green-400">No Hidden Fees</h3>
                    <p className="text-sm text-muted-foreground">
                      All fees are clearly disclosed before you complete any transaction. We believe in transparent, 
                      ethical pricing that aligns with Islamic values.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Fee Changes</h3>
                    <p className="text-muted-foreground">
                      We may change our fees with 30 days' written notice. Continued use of the Service 
                      after such notice constitutes acceptance of the new fee structure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Disclosure */}
            <Card className="glass border-orange-500/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-3 text-orange-400" />
                  6. Risk Disclosure
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-orange-400">Important Risk Warning</h3>
                    <p className="text-sm text-muted-foreground">
                      Financial services carry inherent risks. You may lose money when using investment services. 
                      Past performance does not guarantee future results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Types of Risk</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Investment Risks</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Market volatility and price fluctuations</li>
                          <li>Currency exchange rate risks</li>
                          <li>Liquidity risks in certain investments</li>
                          <li>Credit risks from counterparties</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Operational Risks</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Technology failures or cyber attacks</li>
                          <li>Regulatory changes affecting services</li>
                          <li>Third-party service provider failures</li>
                          <li>Force majeure events</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Risk Mitigation</h3>
                    <p className="text-muted-foreground">
                      We implement comprehensive risk management procedures, but you should only invest what you can afford to lose 
                      and seek independent financial advice when needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">7. Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, Nani Fintech Plus shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of profits, 
                    data, or other intangible losses.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Exclusions</h3>
                    <p className="text-muted-foreground mb-2">Our liability does not extend to:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Losses resulting from your failure to follow security procedures</li>
                      <li>Unauthorized access due to compromised credentials</li>
                      <li>Third-party service failures beyond our control</li>
                      <li>Market losses in investment products</li>
                      <li>Acts of God, natural disasters, or force majeure events</li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-blue-400">Maximum Liability</h3>
                    <p className="text-sm text-muted-foreground">
                      Where liability cannot be excluded, our maximum liability is limited to the amount of fees 
                      you paid to us in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">8. Governing Law & Disputes</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Applicable Law</h3>
                    <p className="text-muted-foreground">
                      These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                      Any disputes shall be subject to the exclusive jurisdiction of the English courts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Dispute Resolution</h3>
                    <p className="text-muted-foreground mb-3">
                      We encourage resolving disputes through our customer service team first. If needed, disputes may be escalated to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Financial Ombudsman Service (for eligible complaints)</li>
                      <li>Alternative dispute resolution services</li>
                      <li>Mediation before litigation</li>
                      <li>Courts of England and Wales (as a last resort)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Islamic Finance Disputes</h3>
                    <p className="text-muted-foreground">
                      For matters relating to Islamic finance compliance, we may refer disputes to qualified 
                      Shariah scholars or Islamic finance arbitration services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">9. Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Legal Department</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: <a href="mailto:legal@nanifintech.com" className="text-brand-primary hover:underline">legal@nanifintech.com</a></p>
                      <p>Phone: +44 20 3014 3080</p>
                      <p>Address: Nani Fintech Plus Ltd<br />Legal Department<br />123 Fintech Square<br />London, EC1A 1BB, UK</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-brand-primary">Regulatory Information</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>FCA Registration: 123456</p>
                      <p>Company Number: 98765432</p>
                      <p>VAT Number: GB123456789</p>
                      <p>Shariah Board Certification: Available upon request</p>
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
                <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                <p className="text-muted-foreground mb-6">
                  Our legal team is available to clarify any aspects of these terms and conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-futuristic" asChild>
                    <a href="/contact">Contact Legal Team</a>
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
