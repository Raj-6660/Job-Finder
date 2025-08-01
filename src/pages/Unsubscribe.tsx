import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.png";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_UNSUBSCRIBE_WEBHOOK_URL || "https://rajarshyasingh.app.n8n.cloud/webhook/6f227a9f-c242-4b0d-b4ef-e2f12d42e040", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to unsubscribe.");
      }

      alert("Successfully unsubscribed! You will no longer receive job alerts.");
      setEmail("");
    } catch (error) {
      console.error("Unsubscribe failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-800 via-gray-800 to-indigo-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Developer background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-gray-800/70 to-indigo-900/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unsubscribe from Job Alerts
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We're sorry to see you go. Enter your email address to unsubscribe from our job alert service.
          </p>
        </div>

        {/* Unsubscribe Form */}
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900/80 backdrop-blur-lg border-gray-700 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-3">Unsubscribe</h2>
                <p className="text-gray-300">Enter your email to stop receiving job alerts</p>
              </div>

              <form onSubmit={handleUnsubscribe} className="space-y-6">
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  Unsubscribe
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  This action will remove your email from all job alert notifications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Unsubscribe;
