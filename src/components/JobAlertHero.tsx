import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Mail, Search, Zap, Bell, Target } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.png";

const JobAlertHero = () => {
  const [email, setEmail] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to n8n backend later
    console.log("Subscription data:", { email, keywords });
    // For now, just show a success message
    alert("Subscription successful! You'll receive job alerts based on your preferences.");
    setEmail("");
    setKeywords("");
  };

  const popularKeywords = [
    "Software Engineer", "Frontend Developer", "Backend Developer", 
    "Full Stack Developer", "Data Scientist", "Product Manager", 
    "UX Designer", "DevOps Engineer", "React Developer", "Python Developer"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Developer background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/20 rounded-2xl backdrop-blur-sm">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Never miss a job opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI-powered job alerts that understand your skills and career goals. 
            Get personalized opportunities delivered directly to your inbox.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-white/80 backdrop-blur-md border-gray-200 hover:bg-white/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Matching</h3>
              <p className="text-gray-600 text-sm">Smart algorithms analyze job descriptions and match them to your skills</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border-gray-200 hover:bg-white/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Alerts</h3>
              <p className="text-gray-600 text-sm">Get notified the moment relevant opportunities are posted</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border-gray-200 hover:bg-white/90 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized</h3>
              <p className="text-gray-600 text-sm">Tailored job recommendations based on your specific preferences</p>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-lg border-0 shadow-elegant">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Getting Job Alerts</h2>
                <p className="text-gray-600">Subscribe now and never miss your dream job opportunity</p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords" className="text-gray-700 font-medium flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Job Keywords & Skills
                  </Label>
                  <Textarea
                    id="keywords"
                    placeholder="e.g., Software Engineer, React, Python, Remote, Full-time..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                    className="h-24 text-lg border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                  <p className="text-sm text-gray-500">
                    Add job titles, skills, technologies, or any keywords that describe your ideal job
                  </p>
                </div>

                {/* Popular keywords suggestions */}
                <div className="space-y-3">
                  <Label className="text-gray-700 font-medium">Popular Keywords:</Label>
                  <div className="flex flex-wrap gap-2">
                    {popularKeywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                        onClick={() => {
                          const currentKeywords = keywords.split(',').map(k => k.trim()).filter(k => k);
                          if (!currentKeywords.includes(keyword)) {
                            setKeywords(currentKeywords.length > 0 ? `${keywords}, ${keyword}` : keyword);
                          }
                        }}
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
                >
                  Subscribe to Job Alerts
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Free forever • No spam • Unsubscribe anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm mb-4">Trusted by professionals worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="text-gray-700 font-semibold">LinkedIn Integration</div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="text-gray-700 font-semibold">Indeed Integration</div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="text-gray-700 font-semibold">AI-Powered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAlertHero;