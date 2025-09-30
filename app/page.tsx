"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Input } from "@/components/retroui/Input";
import { Textarea } from "@/components/retroui/Textarea";
import { Label } from "@/components/retroui/Label";
import { Select } from "@/components/retroui/Select";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  ChevronLeft,
  ChevronRight,
  Coffee,
  BookOpen,
  Dumbbell,
  Bell,
  Vote,
  Gamepad2,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Michael Scott",
      role: "Regional Manager @ Dunder Mifflin",
      image: "👨‍💼",
      quote:
        "We sold lots of papers, thanks to Olivia. She even outperformed our Dwight Schrute.",
    },
    {
      name: "John Doe",
      role: "Founder of Small Company",
      image: "👨‍💻",
      quote:
        "We had great experience working with Olivia. She and her team outperformed all our expectations.",
    },
    {
      name: "Floyd Miles",
      role: "CEO at Big Company",
      image: "👔",
      quote:
        "Our revenue increased 3x in the first year after working with Olivia. She is a true professional.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Newsletter Ticker */}
      <div className="bg-primary border-b-2 border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {[...Array(6)].map((_, i) => (
            <button
              key={i}
              className="mx-4 font-medium hover:underline cursor-pointer"
            >
              💌 Subscribe to my newsletter
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b-2 border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-head text-xl font-bold">AmangLy</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="hover:underline font-medium">
                My work
              </a>
              <a href="#services" className="hover:underline font-medium">
                Services
              </a>
              <a href="#about" className="hover:underline font-medium">
                About
              </a>
              <a href="#contact" className="hover:underline font-medium">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm">Hire Me</Button>
              <Button size="icon" variant="outline">
                <Coffee className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground">Hi, my name is AmangLy</p>
            <h1 className="font-head text-5xl md:text-7xl font-bold leading-tight">
              Human Side of{" "}
              <span className="block">
                <span className="bg-primary px-4 py-2 inline-block transform -rotate-1 shadow-lg border-2 border-border">
                  Zero and One
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              I'm a full-stack developer with a passion for building innovative solutions
              that bridge the gap between technology and real-world problems. From AI-powered
              applications to web platforms, I turn complex challenges into elegant code.
            </p>
            <Button size="lg" className="gap-2">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-accent rounded-lg border-2 border-border shadow-xl flex items-center justify-center text-9xl">
              palepale
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/20 py-16 md:py-24 border-y-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-sm font-medium text-muted-foreground mb-2">
              Passion led us here
            </h5>
            <h2 className="font-head text-4xl md:text-5xl font-bold">
              What can I do for you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2">
              <Card.Content className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary rounded-lg border-2 border-border shadow-md flex items-center justify-center">
                  <Code2 className="w-8 h-8" />
                </div>
                <Card.Title>Web Development</Card.Title>
                <p className="text-muted-foreground">
                  From concept to code, I build responsive, high-performance
                  websites using modern technologies like React, Next.js, and
                  Tailwind CSS.
                </p>
              </Card.Content>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2">
              <Card.Content className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent rounded-lg border-2 border-border shadow-md flex items-center justify-center">
                  <Smartphone className="w-8 h-8" />
                </div>
                <Card.Title>Mobile Development</Card.Title>
                <p className="text-muted-foreground">
                  Create native and cross-platform mobile applications with
                  seamless user experiences using React Native and Flutter
                  frameworks.
                </p>
              </Card.Content>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2">
              <Card.Content className="p-8 space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-lg border-2 border-border shadow-md flex items-center justify-center">
                  <Palette className="w-8 h-8 text-secondary-foreground" />
                </div>
                <Card.Title>UI/UX Design</Card.Title>
                <p className="text-muted-foreground">
                  Design intuitive and engaging user interfaces with focus on
                  user experience, accessibility, and modern design principles.
                </p>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-lg border-2 border-border shadow-xl flex items-center justify-center text-9xl sticky top-24">
                👩‍🎨
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-head text-4xl md:text-5xl font-bold mb-4">
                  About Me
                </h2>
                <h6 className="text-xl font-semibold mb-2">
                  I'm a developer who believes in the human side of technology.
                </h6>
                <h6 className="text-muted-foreground">
                  Building innovative solutions that make a real impact. From AI applications
                  to web platforms, I focus on creating technology that serves people and
                  solves meaningful problems.
                </h6>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded border-2 border-border shadow-md flex items-center justify-center font-bold">
                      2025
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Developed LSA Course platform, an innovative learning management system
                    designed to make education more accessible and engaging for students.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded border-2 border-border shadow-md flex items-center justify-center font-bold">
                      2024
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Built multiple impactful projects including Workout AI for personalized
                    fitness planning, EWS Earthquake early warning system, and Surveyor Pilkada
                    for election monitoring. Each project focused on solving real-world challenges.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded border-2 border-border shadow-md flex items-center justify-center font-bold text-secondary-foreground">
                      2023
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Created Gomoku Game with advanced AI algorithms and Parion platform.
                    Expanded my expertise in game development and full-stack web applications
                    while exploring new technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/20 py-16 md:py-24 border-y-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-head text-4xl md:text-5xl font-bold inline-flex items-center gap-4">
              <span className="text-4xl">✨</span>
              Featured Projects
              <span className="text-4xl">✨</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-primary to-accent border-b-2 border-border flex items-center justify-center">
                <BookOpen className="w-24 h-24" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>Education</Badge>
                  <Badge variant="outline">2025</Badge>
                </div>
                <Card.Title className="text-xl">
                  LSA Course
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  An innovative learning management system designed to make education
                  more accessible and engaging. Features include interactive lessons,
                  progress tracking, and personalized learning paths.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-accent to-secondary border-b-2 border-border flex items-center justify-center">
                <Dumbbell className="w-24 h-24 text-secondary-foreground" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>AI/ML</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <Card.Title className="text-xl">
                  Workout AI
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  AI-powered fitness planning platform that creates personalized workout
                  routines based on user goals, fitness level, and available equipment.
                  Leveraging machine learning for optimal results.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-secondary to-primary border-b-2 border-border flex items-center justify-center">
                <Bell className="w-24 h-24 text-primary" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>Public Safety</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <Card.Title className="text-xl">
                  EWS Earthquake
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  Early Warning System for earthquake detection and alert distribution.
                  Real-time monitoring and notification system designed to save lives
                  by providing crucial seconds of warning.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-primary/80 to-accent/80 border-b-2 border-border flex items-center justify-center">
                <Vote className="w-24 h-24" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>Civic Tech</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <Card.Title className="text-xl">
                  Surveyor Pilkada
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  Election monitoring and surveying platform for Indonesian regional
                  elections. Provides real-time data collection, analysis, and
                  visualization for transparent democratic processes.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-accent/80 to-secondary/80 border-b-2 border-border flex items-center justify-center">
                <Gamepad2 className="w-24 h-24 text-secondary-foreground" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>Game Dev</Badge>
                  <Badge variant="outline">2023</Badge>
                </div>
                <Card.Title className="text-xl">
                  Gomoku Game
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  Strategic board game implementation featuring advanced AI algorithms,
                  including minimax with alpha-beta pruning. Play against intelligent
                  computer opponent with multiple difficulty levels.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-secondary/80 to-primary/80 border-b-2 border-border flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-primary" strokeWidth={1.5} />
              </div>
              <Card.Content className="p-6 space-y-4">
                <div className="flex gap-2">
                  <Badge>Web Platform</Badge>
                  <Badge variant="outline">2023</Badge>
                </div>
                <Card.Title className="text-xl">
                  Parion
                </Card.Title>
                <p className="text-muted-foreground text-sm">
                  Full-stack web application built with modern technologies.
                  Focused on delivering exceptional user experience and robust
                  functionality for business operations.
                </p>
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-sm font-medium text-muted-foreground mb-2">
              I take pride in my work
            </h5>
            <h2 className="font-head text-4xl md:text-5xl font-bold">
              What my clients say about me
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <Card.Content className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full border-2 border-border flex items-center justify-center text-3xl">
                      {testimonials[currentTestimonial].image}
                    </div>
                    <div>
                      <h4 className="font-head text-xl font-bold">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full border-2 border-border transition-all ${
                            index === currentTestimonial
                              ? "bg-primary w-8"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          setCurrentTestimonial(
                            (currentTestimonial - 1 + testimonials.length) %
                              testimonials.length
                          )
                        }
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          setCurrentTestimonial(
                            (currentTestimonial + 1) % testimonials.length
                          )
                        }
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/20 py-16 md:py-24 border-t-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-head text-4xl md:text-5xl font-bold mb-6">
                  Tell me about your project
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Any project starts with goal setting. If you have a vision, I
                    can design it.
                  </p>
                  <p>
                    After the inquiry, I will reply within 2-3 working days, with
                    an approximate quote for the project or with questions for
                    more details. After that, we can have an intro call to
                    discuss your project and see if it's a match.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Email me at:</p>
                  <a
                    href="mailto:amaralkaff@gmail.com"
                    className="text-primary hover:underline font-medium text-lg"
                  >
                    amaralkaff@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-medium mb-3">Follow me at:</p>
                  <div className="flex gap-3">
                    <a href="https://github.com/amaralkaff" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/amaralkaff/" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="mailto:amaralkaff@gmail.com">
                      <Button size="icon" variant="outline">
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <Card.Content className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Your name</Label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Your email</Label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project type</Label>
                    <Select>
                      <Select.Trigger>
                        <Select.Value placeholder="Select type" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="web">Web Design</Select.Item>
                        <Select.Item value="mobile">Mobile App</Select.Item>
                        <Select.Item value="branding">Branding</Select.Item>
                      </Select.Content>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget</Label>
                    <Select>
                      <Select.Trigger>
                        <Select.Value placeholder="Select budget" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="small">$5k - $10k</Select.Item>
                        <Select.Item value="medium">$10k - $25k</Select.Item>
                        <Select.Item value="large">$25k+</Select.Item>
                      </Select.Content>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Your website (if exists)</Label>
                  <Input placeholder="https://example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Project details</Label>
                  <Textarea
                    placeholder="Project details, context or how can I help you"
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full">
                  Submit Form
                </Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="font-head text-2xl font-bold">AmangLy</div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Human side of zero and one
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AmangLy. Built with Retro UI & Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}