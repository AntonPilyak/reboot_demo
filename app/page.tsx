"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, RotateCw, Leaf, TrendingUp, Zap, Search, Puzzle, Lightbulb, BarChart as Chart } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

export default function Home() {
    const [email, setEmail] = useState("")
    const [userType, setUserType] = useState("Investor")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!captchaToken) {
            alert("Please confirm you're not a robot")
            return
        }

        setStatus("loading")

        try {
            await fetch("https://script.google.com/macros/s/AKfycbwwoTP1-FFDcHFu4-qiJqRMM6JMj9p74M62OhlEOb2bgYnNO4YPhk9yH39UpLKZxnU5/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    type: userType,
                }),
            })

            setStatus("success")
            setEmail("")

            // Сброс через 3 секунды
            setTimeout(() => setStatus("idle"), 3000)
        } catch {
            setStatus("error")
            setTimeout(() => setStatus("idle"), 3000)
        }
    }
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                                <RotateCw className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <span className="text-lg font-semibold">ReBoot Market</span>
                        </div>
                        <Button
                            className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="demo" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-4xl mx-auto">
                <div className="text-center space-y-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                        The AI-Powered Marketplace for Pre-Owned Tech
                    </h1>
                    <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
                        Connecting Europe&apos;s fragmented refurbished hardware market. Starting in Italy.
                    </p>

                    {/* Search Demo */}
                    <div className="mt-12 space-y-3 max-w-2xl mx-auto">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Input
                                    placeholder="Try demo: Search for 'ThinkPad T480' or 'RTX 3080'..."
                                    className="rounded-md border-border bg-card text-foreground placeholder:text-foreground/50 opacity-75 cursor-not-allowed"
                                    disabled
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded font-medium">
                Demo Coming Soon
            </span>
                            </div>
                            <a href="#contact">
                                <Button className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                                    Get in Touch
                                </Button>
                            </a>
                        </div>
                        <p className="text-sm text-foreground/60">See how our AI-powered semantic search works</p>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section id="vision" className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Problem */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">The Problem</h2>
                        <div className="space-y-4 text-foreground/70">
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>Fragmented market: thousands of small refurbished tech sellers with poor discoverability</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>No unified platform for B2B and B2C buyers</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>Difficult to find and compare pre-owned hardware</p>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Our Solution</h2>
                        <div className="space-y-4 text-foreground/70">
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>AI-powered semantic search and smart recommendations</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>Single marketplace aggregating trusted European sellers</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" />
                                <p>Win-win model: we empower partners, not compete with them</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reddit Social Proof */}
                <div className="mt-12 flex flex-col items-center">
                    <p className="text-base text-muted-foreground mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                        Real feedback from r/ItalyInformatica
                    </p>
                    <a
                        href="/reddit-feedback.png"
                        target="_blank"
                        className="rounded-xl border border-border shadow-lg overflow-hidden w-full cursor-zoom-in transition-transform duration-300 hover:scale-125"
                    >
                        <img
                            src="/reddit-feedback.png"
                            alt="Reddit discussion about buying used hardware in Italy"
                            className="w-full h-auto"
                        />
                    </a>
                    <p className="text-sm text-muted-foreground mt-4 italic text-center">
                        Click to enlarge • "On Subito, you find stuff at the price of new..."
                    </p>
                </div>
            </section>

            {/* Why Now Section */}
            <section id="why-now" className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Why Now</h2>
                    <p className="text-foreground/60 mt-2">Three reasons the time is right</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                            <Leaf className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold mb-2">Sustainability</h3>
                        <p className="text-sm text-foreground/70">
                            EU regulations and growing consumer demand for circular economy
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                            <TrendingUp className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold mb-2">Market Gap</h3>
                        <p className="text-sm text-foreground/70">
                            €40B+ European refurbished electronics market with no dominant player
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold mb-2">AI Timing</h3>
                        <p className="text-sm text-foreground/70">Modern AI enables smart search and matching at scale</p>
                    </div>
                </div>
            </section>

            {/* AI Tech Advisor Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Illustration */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-sm aspect-square rounded-lg border border-border bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center">
                            {/* Minimal robot illustration */}
                            <svg
                                className="w-32 h-32 text-accent"
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Head */}
                                <rect x="50" y="30" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="2" />
                                {/* Left eye */}
                                <circle cx="80" cy="65" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                {/* Right eye */}
                                <circle cx="120" cy="65" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                {/* Mouth */}
                                <path
                                    d="M 80 95 Q 100 105 120 95"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                {/* Body */}
                                <rect x="60" y="140" width="80" height="50" rx="4" stroke="currentColor" strokeWidth="2" />
                                {/* Arms */}
                                <rect x="30" y="155" width="30" height="12" rx="6" stroke="currentColor" strokeWidth="2" />
                                <rect x="140" y="155" width="30" height="12" rx="6" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    {/* Right side - Content and Cards */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-3">Your AI Tech Advisor</h2>
                            <p className="text-lg text-foreground/70">
                                Computer hardware is complex. Our AI assistant makes it simple.
                            </p>
                        </div>

                        {/* 2x2 Grid of Feature Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1 - Smart Search */}
                            <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-3">
                                    <Search className="w-4 h-4 text-accent" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">Smart Search</h3>
                                <p className="text-xs text-foreground/70">
                                    Find exactly what you need. Describe it in plain words — our AI understands.
                                </p>
                            </div>

                            {/* Card 2 - Compatibility Check */}
                            <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-3">
                                    <Puzzle className="w-4 h-4 text-accent" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">Compatibility Check</h3>
                                <p className="text-xs text-foreground/70">
                                    Building a PC? AI verifies all components work together before you buy.
                                </p>
                            </div>

                            {/* Card 3 - Expert Guidance */}
                            <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-3">
                                    <Lightbulb className="w-4 h-4 text-accent" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">Expert Guidance</h3>
                                <p className="text-xs text-foreground/70">
                                    Not sure which GPU fits your needs? Ask our AI — it knows every spec.
                                </p>
                            </div>

                            {/* Card 4 - Price Intelligence */}
                            <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-3">
                                    <Chart className="w-4 h-4 text-accent" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">Price Intelligence</h3>
                                <p className="text-xs text-foreground/70">
                                    Get fair price estimates based on market data and component condition.
                                </p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm text-foreground/60 italic">
                            Like having a tech expert in your pocket — available 24/7
                        </p>
                    </div>
                </div>
            </section>

            {/* Traction Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
                <div className="rounded-lg border border-border bg-card/30 p-8 text-center space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-sm font-medium text-accent">Pre-Seed · SAFE</span>
                    </div>
                    <h3 className="text-lg font-semibold">
                        We&apos;re raising our pre-seed round to launch in Italy and expand across Europe
                    </h3>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 max-w-2xl mx-auto">
                <div className="text-center space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Interested in ReBoot Market?</h2>
                        <p className="text-foreground/60">
                            Whether you&apos;re an investor, potential partner, or just curious — let&apos;s talk
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="rounded-md border-border bg-card text-foreground placeholder:text-foreground/50"
                            />
                            <select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm"
                            >
                                <option>Investor</option>
                                <option>Hardware Seller/Partner</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <ReCAPTCHA
                                sitekey="6LeIMRosAAAAALzkTlTCPy5AYPYeCWoKiiX2V1rM"
                                onChange={(token) => setCaptchaToken(token)}
                                onExpired={() => setCaptchaToken(null)}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                            disabled={status === "loading"}
                        >
                            {status === "loading" && "Sending..."}
                            {status === "success" && "Message sent!"}
                            {status === "error" && "Error, try again"}
                            {status === "idle" && "Get in Touch"}
                        </Button>
                        <p className="text-xs text-foreground/50">We&apos;ll reach out within 24 hours</p>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                                <RotateCw className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <span className="font-semibold">ReBoot Market</span>
                        </div>
                        <div className="text-sm text-foreground/60">Made with ♻️ for a sustainable future</div>
                    </div>
                    <div className="pt-8 border-t border-border text-center text-sm text-foreground/50">
                        © 2025 ReBoot Market. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}
