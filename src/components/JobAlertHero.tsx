import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Mail, Search, Zap, Bell, Target, Twitter, Github, MapPin } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.png";

const JobAlertHero = () => {
  const [email, setEmail] = useState("");
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || "https://n8n-m2i5.onrender.com/webhook-test/1ffe06e3-e8da-4b57-b8fb-6ca31d5ff54f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, keywords, location }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe.");
      }

      alert("Subscription successful! You'll receive job alerts based on your preferences.");
      setEmail("");
      setKeywords("");
      setLocation("");
    } catch (error) {
      console.error("Subscription failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const popularKeywords = [
    "Software Engineer", "Frontend Developer", "Backend Developer", 
    "Full Stack Developer", "Data Scientist", "Product Manager", 
    "UX Designer", "DevOps Engineer", "React Developer", "Python Developer",
    "Data Analyst", "Software Development Engineer", "AI Engineer"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-800 via-pink-700 to-indigo-800">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Developer background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-gray-800/30 to-indigo-900/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-blue-500/20 rounded-2xl backdrop-blur-sm">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Never miss a job opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            AI-powered job alerts that understand your skills and career goals. 
            Get personalized opportunities delivered directly to your inbox.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gray-900/70 backdrop-blur-md border-gray-700 hover:bg-gray-900/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Matching</h3>
              <p className="text-gray-300 text-sm">Smart algorithms analyze job descriptions and match them to your skills</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/70 backdrop-blur-md border-gray-700 hover:bg-gray-900/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Alerts</h3>
              <p className="text-gray-300 text-sm">Get notified the moment relevant opportunities are posted</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/70 backdrop-blur-md border-gray-700 hover:bg-gray-900/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personalized</h3>
              <p className="text-gray-300 text-sm">Tailored job recommendations based on your specific preferences</p>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/80 backdrop-blur-lg border-gray-700 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Start Getting Job Alerts</h2>
                <p className="text-gray-300">Subscribe now and never miss your dream job opportunity</p>
              </div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200 font-medium flex items-center gap-2">
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
                    className="h-12 text-lg bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords" className="text-gray-200 font-medium flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Job Keywords
                  </Label>
                  <Textarea
                    id="keywords"
                    placeholder="e.g., Software Engineer, React, Python, Remote, Full-time..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                    className="h-24 text-lg bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                  />
                  <p className="text-sm text-gray-400">
                    Add job titles, technologies, or any keywords that describe your ideal job
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-200 font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Remote, New York, San Francisco, Global..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="h-12 text-lg bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>

                {/* Popular keywords suggestions */}
                <div className="space-y-3">
                  <Label className="text-gray-200 font-medium">Popular Keywords:</Label>
                  <div className="flex flex-wrap gap-2">
                    {popularKeywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="cursor-pointer bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors border-gray-600"
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
                  className="w-full h-14 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                >
                  Subscribe to Job Alerts
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Free forever • No spam • <a href="/unsubscribe" className="text-blue-400 hover:text-blue-300 underline">Unsubscribe anytime</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-sm mb-4">Trusted by professionals worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="text-gray-300 font-semibold">Naukri Integration</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-gray-300 font-semibold">AI-Powered</div>
          </div>
        </div>

        {/* Reach Out Section */}
        <div className="text-center mt-16">
          <Card className="bg-gray-900/70 backdrop-blur-lg border-gray-700 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Reach Out</h3>
              <p className="text-gray-300 text-sm mb-6">Connect with me on social platforms</p>
              <div className="flex justify-center items-center space-x-6">
                <a 
                  href="https://x.com/rajarshya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a 
                  href="https://github.com/Raj-6660" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-600/20 hover:bg-gray-600/30 rounded-full transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-gray-200" />
                </a>
                <a 
                  href="mailto:rajarshyasingh@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors group"
                >
                  <Mail className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobAlertHero;
