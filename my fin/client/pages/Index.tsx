import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wallet,
  Shield,
  Zap,
  Globe,
  Calculator,
  Users,
  Smartphone,
  ChevronDown,
  Star,
  CheckCircle,
  ArrowRight,
  Send,
  Download,
  DollarSign,
  Gift,
  Wifi,
  Loader2,
  AlertCircle
} from "lucide-react";
import { WaitlistRequest, WaitlistResponse } from "@shared/api";

export default function Index() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const languages = {
    en: "English",
    so: "Somali",
    ar: "عربي"
  };

  const content = {
    en: {
      nav: {
        features: "Features",
        about: "About",
        waitlist: "Join Waitlist"
      },
      hero: {
        title: "Your Money.",
        subtitle: "Your Deen.",
        tagline: "Your Future.",
        description: "The first AI-powered halal wallet built for saving, investing, and giving with purpose — rooted in Islamic values, designed for modern Muslims.",
        primaryCta: "Join the Waitlist",
        secondaryCta: "Learn More",
        trustedBy: "Trusted by Muslims across London, Mogadishu, Mombasa & Minneapolis"
      },
      features: {
        title: "Smart Features for Modern Muslims",
        subtitle: "Designed with Islamic principles and cutting-edge technology to help you manage your finances with purpose.",
        items: [
          {
            icon: Users,
            title: "Ayuto Group Savings",
            description: "Join trusted savings circles with automated contributions and transparent payouts using smart contracts.",
            detail: "Active Groups: 1,200+"
          },
          {
            icon: Calculator,
            title: "AI Zakat Calculator",
            description: "ChatGPT-powered Zakat calculation with personalized guidance and automated reminders.",
            detail: "Next Due: Ramadan 1446"
          },
          {
            icon: Shield,
            title: "Halal Compliance",
            description: "AI-powered transaction screening ensures all your financial activities remain halal and ethical.",
            detail: "Halal Score: 99.8%"
          },
          {
            icon: DollarSign,
            title: "Multi-Currency Support",
            description: "Seamlessly manage GBP, USD, and SOS with real-time conversion rates and low fees.",
            detail: "Live Rates Available"
          },
          {
            icon: Smartphone,
            title: "eSIM & Gift Cards",
            description: "Purchase eSIM packages and gift cards directly from your wallet with exclusive Muslim discounts.",
            detail: "50+ Providers"
          },
          {
            icon: Wifi,
            title: "Starlink Subscription",
            description: "Coming soon: Pay for Starlink internet directly through your Nani wallet with group discounts.",
            detail: "Coming Q2 2025"
          }
        ]
      },
      waitlist: {
        title: "Be the first to access Nani Fintech Plus when it launches",
        subtitle: "Join our exclusive waitlist and get early access to the future of halal finance.",
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email Address",
          location: "Select your location",
          submit: "Join the Waitlist",
          locations: {
            "london": "London, UK",
            "mogadishu": "Mogadishu, Somalia",
            "mombasa": "Mombasa, Kenya",
            "minneapolis": "Minneapolis, USA",
            "dubai": "Dubai, UAE",
            "other": "Other"
          }
        },
        success: "Thank you for joining our waitlist! We'll be in touch soon.",
        security: "Secured with blockchain technology"
      },
      testimonials: {
        title: "What Our Community Says",
        subtitle: "Join thousands of young Muslims who are transforming their financial future.",
        items: [
          {
            name: "Aisha K.",
            location: "London, UK",
            text: "Nani Wallet has transformed how I manage my finances as a Muslim. The Ayuto savings feature helped me save for Hajj in just 8 months!",
            rating: 5
          },
          {
            name: "Mohamed A.",
            location: "Minneapolis, USA",
            text: "The AI financial advisor helped me identify and avoid riba in my investments. Now I can grow my wealth while staying true to my values.",
            rating: 5
          },
          {
            name: "Fatima H.",
            location: "Mombasa, Kenya",
            text: "The Zakat calculator and automatic reminders ensure I never miss my obligations. Plus, the group investing feature helped our masjid fund a community project!",
            rating: 5
          }
        ]
      },
      footer: {
        brand: "Nani Fintech Plus Ltd",
        tagline: "Backed by Islamic finance experts",
        certified: "Shariah Certified",
        copyright: "2025 Nani Fintech Plus Ltd. All rights reserved.",
        links: {
          contact: "Contact",
          privacy: "Privacy Policy",
          terms: "Terms of Service"
        }
      }
    },
    so: {
      nav: {
        features: "Sifooyinka",
        about: "Warbixin",
        waitlist: "Ku biir Liiska"
      },
      hero: {
        title: "Lacagtaada.",
        subtitle: "Diintaada.",
        tagline: "Mustaqbalkaaga.",
        description: "Jikada ugu horeysay ee AI-powered ah ee halal ah oo loogu talagalay kaydinta, maalgashiga, iyo bixinta ujeeddo leh — ku salaysan qiyamka Islaamka.",
        primaryCta: "Ku biir Liiska Sugitaanka",
        secondaryCta: "Wax badan ka baro",
        trustedBy: "Lagu kalsoonaaday Muslim-ka ku nool London, Mogadishu, Mombasa & Minneapolis"
      },
      features: {
        title: "Sifooyinka Casriga ah ee Muslim-ka Casriga ah",
        subtitle: "La qaabeeyay mabaadiida Islaamka iyo tignoolajiyada hore u socota si ay kuugu caawiso lacagtaada ujeeddo leh.",
        items: [
          {
            icon: Users,
            title: "Kaydinta Kooxaha Ayuto",
            description: "Ku biir goobaha kaydinta ee la isku halayn karo oo leh wax ku darsashada otomaatigga ah iyo lacag bixinta hufan.",
            detail: "Kooxaha Firfircoon: 1,200+"
          },
          {
            icon: Calculator,
            title: "Xisaabiyaha AI Zakat",
            description: "ChatGPT-powered Zakat xisaabinta oo leh hanuuninta shakhsiga ah iyo xusuusinta otomaatigga ah.",
            detail: "Kan xiga: Ramadan 1446"
          },
          {
            icon: Shield,
            title: "Waafaqsanaanta Halal",
            description: "AI-powered ka baadhista macaamulka si loo hubiyo in dhammaan hawlaha maaliyadda ay halal iyo anshaxa yihiin.",
            detail: "Heerka Halal: 99.8%"
          },
          {
            icon: DollarSign,
            title: "Taageerada Lacagta kala duwan",
            description: "Si fudud u maamul GBP, USD, iyo SOS oo leh qiimaha beddelka waqtiga dhabta ah iyo khidmado jaban.",
            detail: "Qiimaha Tooska ah ayaa La heli karaa"
          },
          {
            icon: Smartphone,
            title: "eSIM & Kaardka Hadiyada",
            description: "Ka iibso xidhmaha eSIM iyo kaardka hadiyada si toos ah jiikdaada oo leh jaranjaro gaar ah oo Muslim ah.",
            detail: "50+ Bixiyayaal"
          },
          {
            icon: Wifi,
            title: "Isciilaad Starlink",
            description: "Dhawaan: Ku bixso internetka Starlink si toos ah oo loo maro jiikadaada Nani oo leh jaranjaro koox ah.",
            detail: "Imanaya Q2 2025"
          }
        ]
      },
      waitlist: {
        title: "Noqo kan ugu horeya ee gala Nani Fintech Plus marka la bilaabo",
        subtitle: "Ku biir liiskeena gaar ah oo hel gal hore oo ah mustaqbalka maaliyadda halal.",
        form: {
          firstName: "Magaca Hore",
          lastName: "Magaca Dambe",
          email: "Emayl Ciwaanka",
          location: "Dooro goobta",
          submit: "Ku biir Liiska Sugitaanka",
          locations: {
            "london": "London, UK",
            "mogadishu": "Mogadishu, Somalia",
            "mombasa": "Mombasa, Kenya",
            "minneapolis": "Minneapolis, USA",
            "dubai": "Dubai, UAE",
            "other": "Kale"
          }
        },
        success: "Mahadsanid in aad ku biirtay liiskeena sugitaanka! Waan kula xiriiri doonaa dhawaan.",
        security: "Lagu ilaaliyay tignoolajiyada blockchain"
      },
      testimonials: {
        title: "Waxa ay Bulshadeenna Tidhaahdo",
        subtitle: "Ku biir kumanaan dhalinyaro Muslim ah oo beddelaya mustaqbalkooda maaliyadeed.",
        items: [
          {
            name: "Aisha K.",
            location: "London, UK",
            text: "Nani Wallet ayaa beddelay sidaan u maamulo lacagtayda oo ah Muslim. Sifooyinka kaydinta Ayuto ayaa iga caawiyay inaan kaydiyaa Hajj 8 bilood oo kaliya!",
            rating: 5
          },
          {
            name: "Mohamed A.",
            location: "Minneapolis, USA",
            text: "La taliyaha maaliyadda AI ayaa iga caawiyay inaan aqoonsado oo aan iska ilaaliyo riba maalgashiyadayda. Hadda waan kordhin karaa maalkaygana anigoo ku raagaya qiimayaasha.",
            rating: 5
          },
          {
            name: "Fatima H.",
            location: "Mombasa, Kenya",
            text: "Xisaabiyaha Zakat iyo xusuusinta otomaatigga ah ayaa hubinaya inaan waligay luminin waajibkayga. Weliba, sifooyinka maalgashiga kooxu wuxuu masjidkeenna ka caawiyay inuu maalgeliyo masharuuc bulsho!",
            rating: 5
          }
        ]
      },
      footer: {
        brand: "Nani Fintech Plus Ltd",
        tagline: "Taageeraya khubarada maaliyadda Islaamka",
        certified: "Shariah La Xaqiijiyay",
        copyright: "2025 Nani Fintech Plus Ltd. Dhammaan xuquuqda way ka mid yihiin.",
        links: {
          contact: "Xiriir",
          privacy: "Qaanuunka Sirta",
          terms: "Shuruudaha Adeegga"
        }
      }
    },
    ar: {
      nav: {
        features: "المميزات",
        about: "حول",
        waitlist: "انضم لقائمة الانتظار"
      },
      hero: {
        title: "أموالك.",
        subtitle: "دينك.",
        tagline: "مستقبلك.",
        description: "أول محفظة حلال مدعومة بالذكاء الاصطناعي مصممة للادخار والاستثمار والعطاء بهدف — متجذرة في القيم الإسلامية، مصممة للمسلمين العصريين.",
        primaryCta: "انضم لقائمة الانتظار",
        secondaryCta: "تعلم المزيد",
        trustedBy: "موثوق به من قبل المسلمين في لندن ومقديشو ومومباسا ومينيابوليس"
      },
      features: {
        title: "مميزات ذكية للمسلمين المعاصرين",
        subtitle: "مصممة وفقاً للمبادئ الإسلامية والتكنولوجيا المتطورة لمساعدتك في إدارة أموالك بهدف.",
        items: [
          {
            icon: Users,
            title: "ادخار مجموعات الآيوتو",
            description: "انضم إلى دوائر الادخار الموثوقة مع المساهمات التلقائية والمدفوعات الشفافة باستخدام العقود الذكية.",
            detail: "المجموعات النشطة: 1,200+"
          },
          {
            icon: Calculator,
            title: "حاسبة الزكاة بالذكاء الاصطناعي",
            description: "حساب الزكاة مدعوم بـ ChatGPT مع الإرشاد الشخصي والتذكيرات التلقائية.",
            detail: "التالي: رمضان 1446"
          },
          {
            icon: Shield,
            title: "الامتثال الحلال",
            description: "فحص المعاملات مدعوم بالذكاء الاصطناعي يضمن بقاء جميع أنشطتك المالية حلال وأخلاقية.",
            detail: "نقاط الحلال: 99.8%"
          },
          {
            icon: DollarSign,
            title: "دعم متعدد العملات",
            description: "إدارة سلسة للجنيه الإسترليني والدولار الأمريكي والشلن الصومالي مع أسعار التحويل الفورية والرسوم المنخفضة.",
            detail: "الأسع��ر المباشرة متاحة"
          },
          {
            icon: Smartphone,
            title: "eSIM وبطاقات الهدايا",
            description: "اشتر حزم eSIM وبطاقات الهدايا مباشرة من محفظتك مع خصومات حصرية للمسلمين.",
            detail: "50+ مزود"
          },
          {
            icon: Wifi,
            title: "اشتراك Starlink",
            description: "قريباً: ادفع لإنترنت Starlink مباشرة من خلال محفظة Nani مع خصومات جماعية.",
            detail: "قادم الربع الثاني 2025"
          }
        ]
      },
      waitlist: {
        title: "كن أول من يحصل على Nani Fintech Plus عند إطلاقه",
        subtitle: "انضم إلى قائمة الانتظار الحصرية واحصل على وصول مبكر لمستقبل التمويل الحلال.",
        form: {
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          email: "عنوان البريد الإلكتروني",
          location: "اختر موقعك",
          submit: "انضم لقائمة الانتظار",
          locations: {
            "london": "لندن، بريطانيا",
            "mogadishu": "مقديشو، الصومال",
            "mombasa": "مومباسا، كينيا",
            "minneapolis": "مينيابوليس، أمريكا",
            "dubai": "دبي، الإمارات",
            "other": "أخرى"
          }
        },
        success: "شكراً لانضمامك لقائمة الانتظار! سنتواصل معك قريباً.",
        security: "محمي بتقنية البلوك تشين"
      },
      testimonials: {
        title: "ما يقوله مجتمعنا",
        subtitle: "انضم إلى آلاف الشباب المسلمين الذين يحولون مستقبلهم المالي.",
        items: [
          {
            name: "عائشة ك.",
            location: "لندن، بريطانيا",
            text: "محفظة نانى غيرت طريقة إدارتي لأموالي كمسلمة. ميزة ادخار الآيوتو ساعدتني في الادخار للحج في 8 أشهر فقط!",
            rating: 5
          },
          {
            name: "محمد أ.",
            location: "مينيابوليس، أمريكا",
            text: "المستشار المالي بالذكاء الاصطناعي ساعدني في تحديد وتجنب الربا في اس��ثماراتي. الآن يمكنني تنمية ثروتي مع البقاء وفياً لقيمي.",
            rating: 5
          },
          {
            name: "فاطمة ح.",
            location: "مومباسا، كينيا",
            text: "حاسبة الزكاة والتذكيرات التلقائية تضمن عدم تفويت التزاماتي أبداً. بالإضافة إلى ذلك، ميزة الاستثمار الجماعي ساعدت مسجدنا في تمويل مشروع مجتمعي!",
            rating: 5
          }
        ]
      },
      footer: {
        brand: "نانى فينتك بلس المحدودة",
        tagline: "مدعوم من خبراء التمويل الإسلامي",
        certified: "معتمد شرعياً",
        copyright: "2025 نانى فينتك بلس المحدودة. جميع الحقوق محفوظة.",
        links: {
          contact: "اتصل بنا",
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة"
        }
      }
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content] || content.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const requestData: WaitlistRequest = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        location: formData.location
      };

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result: WaitlistResponse = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          location: ""
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error submitting waitlist form:', err);
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="islamic-pattern absolute inset-0 opacity-5" />
        
        {/* Animated data flow lines */}
        <div className="data-flow" style={{ height: '200px', top: '10%', left: '20%' }} />
        <div className="data-flow" style={{ height: '300px', top: '30%', left: '80%', animationDelay: '1s' }} />
        <div className="data-flow" style={{ height: '150px', top: '60%', left: '40%', animationDelay: '2s' }} />
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Animated Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffee645c3cb80434e80af2e06db4affa1%2F6460b365c917443daf2bdcedda36f4cf?format=webp&width=800"
                  alt="Nani Fintech Plus"
                  className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg group-hover:drop-shadow-pink-500/50"
                />
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <div className="hidden md:block">
                <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-3 py-1 text-xs font-semibold animate-pulse">
                  2025
                </Badge>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-lg">
                Features
              </a>
              <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-lg">
                Waitlist
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-lg">
                Contact
              </a>
            </div>

            {/* Language Toggle */}
            <div className="glass rounded-full p-1">
              <div className="flex space-x-1">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => setCurrentLanguage(code)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      currentLanguage === code
                        ? 'bg-brand-primary text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text">{currentContent.hero.title}</span><br />
                  <span className="gradient-text">{currentContent.hero.subtitle}</span><br />
                  <span className="gradient-text">{currentContent.hero.tagline}</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  {currentContent.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToWaitlist}
                  className="btn-futuristic text-white font-bold py-6 px-8 rounded-full text-lg pulse-glow"
                  size="lg"
                >
                  {currentContent.hero.primaryCta}
                </Button>
                <Button
                  variant="outline"
                  className="glass hover:bg-primary/10 py-6 px-8 rounded-full text-lg group"
                  size="lg"
                >
                  {currentContent.hero.secondaryCta}
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>

              <div className="glass p-4 rounded-lg inline-block">
                <p className="text-sm text-muted-foreground">
                  {currentContent.hero.trustedBy}
                </p>
              </div>
            </div>

            {/* Enhanced Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Phone Frame with Enhanced Design */}
                <div className="relative w-80 h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="absolute inset-1 rounded-[2.7rem] bg-gradient-to-br from-slate-700 to-slate-800" />

                  {/* Screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 flex items-center justify-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                        <div className="w-8 h-1 bg-gray-700 rounded-full" />
                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                      </div>
                    </div>

                    {/* App UI with Enhanced Animations */}
                    <div className="p-6 pt-14 h-full flex flex-col relative">
                      {/* Enhanced Status Bar */}
                      <div className="flex justify-between items-center mb-6 animate-fadeIn">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-white font-mono">12:45</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <div className="flex items-center space-x-1">
                          {/* Signal Bars */}
                          {[1, 2, 3, 4].map((bar) => (
                            <div key={bar} className={`w-1 bg-green-500 rounded-full animate-pulse`} style={{ height: `${bar * 3 + 8}px`, animationDelay: `${bar * 0.1}s` }} />
                          ))}
                          {/* Battery */}
                          <div className="w-6 h-3 border border-white rounded-sm relative ml-2">
                            <div className="w-4 h-1 bg-green-500 rounded-sm m-0.5" />
                            <div className="absolute -right-1 top-1 w-0.5 h-1 bg-white rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Greeting with Time-based Animation */}
                      <div className="mb-6 animate-slideIn">
                        <p className="text-sm text-gray-400 flex items-center">
                          <span className="animate-pulse mr-2">🌙</span>
                          Assalamu Alaikum
                        </p>
                        <h2 className="text-xl font-bold text-white">Ahmed Mohamed</h2>
                        <p className="text-xs text-gray-500">Welcome back to your halal journey</p>
                      </div>

                      {/* Enhanced Balance Card with Live Data Effect */}
                      <Card className="glass mb-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardContent className="p-4 relative z-10">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-xs text-gray-400">Total Balance</p>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <span className="text-xs text-green-400">Live</span>
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold gradient-text mb-2 animate-counterUp">£3,240.50</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-green-400 flex items-center">
                              <span className="mr-1">↗</span>
                              +£240 this month
                            </span>
                            <Badge className="bg-green-500/20 text-green-400 animate-pulse">Halal ✓</Badge>
                          </div>

                          {/* Currency Converter */}
                          <div className="mt-3 pt-3 border-t border-gray-700">
                            <div className="flex justify-between text-xs text-gray-400">
                              <span>USD: $4,062.45</span>
                              <span>SOS: 1,851,225</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Enhanced Quick Actions with Hover Effects */}
                      <div className="grid grid-cols-4 gap-3 mb-6">
                        {[
                          { icon: Send, label: "Send", color: "bg-blue-500/20 text-blue-400", accent: "border-blue-500/30" },
                          { icon: Download, label: "Receive", color: "bg-purple-500/20 text-purple-400", accent: "border-purple-500/30" },
                          { icon: Calculator, label: "Zakat", color: "bg-indigo-500/20 text-indigo-400", accent: "border-indigo-500/30" },
                          { icon: DollarSign, label: "Invest", color: "bg-pink-500/20 text-pink-400", accent: "border-pink-500/30" }
                        ].map((action, i) => (
                          <div key={i} className="flex flex-col items-center group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className={`w-12 h-12 rounded-xl ${action.color} ${action.accent} border flex items-center justify-center mb-1 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                              <action.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="text-xs group-hover:text-white transition-colors duration-300">{action.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Enhanced Ayuto Group with Real-time Updates */}
                      <Card className="glass relative overflow-hidden group hover:shadow-lg hover:shadow-brand-primary/20 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-white">Ayuto Group</h4>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400">Active</Badge>
                            </div>
                          </div>

                          {/* Member Avatars with Hover Effects */}
                          <div className="flex items-center space-x-2 mb-3">
                            {[
                              { initial: 'A', color: 'from-blue-500 to-blue-600' },
                              { initial: 'S', color: 'from-purple-500 to-purple-600' },
                              { initial: 'M', color: 'from-indigo-500 to-indigo-600' },
                              { initial: 'F', color: 'from-pink-500 to-pink-600' }
                            ].map((member, i) => (
                              <div
                                key={i}
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-xs font-bold text-white hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                              >
                                {member.initial}
                              </div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center text-xs text-gray-300 hover:scale-110 transition-transform duration-300 cursor-pointer">
                              +3
                            </div>
                          </div>

                          {/* Enhanced Progress Bar */}
                          <div className="relative">
                            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent h-full rounded-full relative animate-progress"
                                style={{ width: '75%' }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                              </div>
                            </div>
                            <div className="flex justify-between text-xs mt-2 text-gray-400">
                              <span>£1,500 / £2,000</span>
                              <span className="text-brand-primary font-semibold">75%</span>
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div className="mt-3 pt-3 border-t border-gray-700">
                            <div className="flex items-center text-xs text-gray-400">
                              <div className="w-1 h-1 bg-green-500 rounded-full mr-2 animate-pulse" />
                              <span>Fatima added £50 • 2 hours ago</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Bottom Navigation Indicator */}
                      <div className="flex-1 flex items-end justify-center pb-4">
                        <div className="w-32 h-1 bg-gray-600 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Physical Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l-sm" />
                  <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-r-sm" />
                  <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r-sm" />
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-primary/30 rounded-full blur-lg animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-brand-secondary/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-brand-accent/30 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Features for <span className="gradient-text">Modern Muslims</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentContent.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <Card key={index} className="glass hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  
                  <div className="glass rounded-lg p-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-brand-primary font-medium">{feature.detail}</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section with Enhanced Pink Glowing Hexagons */}
      <section id="waitlist" className="py-20 relative overflow-hidden group">
        {/* Enhanced Islamic Pattern Background with Pink Glow */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-30 transition-all duration-800 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full transition-all duration-800 group-hover:scale-110"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
              transition: 'filter 0.8s ease, transform 0.8s ease'
            }}
            viewBox="0 0 800 800"
          >
            <defs>
              <pattern id="enhanced-islamic-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <path
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1.5"
                  d="M75 0L135 37.5L135 112.5L75 150L15 112.5L15 37.5z"
                  className="transition-all duration-800 group-hover:stroke-pink-400 group-hover:stroke-[3]"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#enhanced-islamic-pattern)" />
          </svg>
        </div>

        {/* Large Individual Hexagons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-0 group-hover:opacity-70 transition-all duration-800"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 60}deg)`,
                transitionDelay: `${i * 0.1}s`,
                filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))'
              }}
            >
              <svg width="200" height="200" viewBox="0 0 100 100" className="animate-pulse">
                <polygon
                  points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="3"
                  className="transition-all duration-1000"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="glass relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink-500/20">
              {/* Dynamic Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Be the first to access <span className="gradient-text">Nani Fintech Plus</span> when it launches
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {currentContent.waitlist.subtitle}
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          placeholder="Your first name"
                          className="glass transition-all duration-300 focus:border-pink-400 focus:ring-pink-400/30"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          placeholder="Your last name"
                          className="glass transition-all duration-300 focus:border-pink-400 focus:ring-pink-400/30"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        className="glass transition-all duration-300 focus:border-pink-400 focus:ring-pink-400/30"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => setFormData({...formData, location: value})}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="glass transition-all duration-300 focus:border-pink-400 focus:ring-pink-400/30">
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(currentContent.waitlist.form.locations).map(([value, label]) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-futuristic w-full py-6 text-lg relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            {currentContent.waitlist.form.submit}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </span>
                      {/* Animated shine effect */}
                      {!isSubmitting && (
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="relative">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                      {/* Success glow effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-ping" />
                      </div>
                    </div>
                    <p className="text-lg text-green-400 font-medium">
                      {successMessage || currentContent.waitlist.success}
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setError(null);
                        setSuccessMessage("");
                      }}
                      variant="ghost"
                      className="mt-4 text-muted-foreground hover:text-white"
                    >
                      Join another person?
                    </Button>
                  </div>
                )}

                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10">
                    <Shield className="h-5 w-5 text-brand-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">{currentContent.waitlist.security}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentContent.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
              {/* Animated Footer Logo */}
              <div className="group mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffee645c3cb80434e80af2e06db4affa1%2F6460b365c917443daf2bdcedda36f4cf?format=webp&width=800"
                  alt="Nani Fintech Plus"
                  className="h-16 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-lg group-hover:drop-shadow-pink-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>

              <p className="text-muted-foreground text-center md:text-left mb-3">{currentContent.footer.tagline}</p>

              <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                <Shield className="h-4 w-4 text-brand-primary animate-pulse" />
                <span className="text-xs">{currentContent.footer.certified}</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-4 text-sm text-muted-foreground">
                <a href="/contact" className="hover:text-white transition-colors hover:drop-shadow-lg">{currentContent.footer.links.contact}</a>
                <a href="/privacy" className="hover:text-white transition-colors hover:drop-shadow-lg">{currentContent.footer.links.privacy}</a>
                <a href="/terms" className="hover:text-white transition-colors hover:drop-shadow-lg">{currentContent.footer.links.terms}</a>
                <a href="/admin" className="hover:text-brand-primary transition-colors hover:drop-shadow-lg">Admin</a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-2 rounded-full hover:bg-brand-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-2 rounded-full hover:bg-brand-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-2 rounded-full hover:bg-brand-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>{currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
