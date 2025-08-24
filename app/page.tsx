"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Trophy,
  Shield,
  Target,
  Sparkles,
  Star,
  TrendingUp,
  Heart,
  Mic,
  MessageCircle,
  UserCheck,
  Eye,
  Palette,
  Brain,
  Music,
  Code,
  Compass,
  Lightbulb,
  Globe,
  BookOpen,
  DollarSign,
} from "lucide-react"

const slides = [
  {
    id: "title",
    title: "SkillSpark",
    subtitle: "Empowering Youth Through Digital Portfolios",
    content: (
      <div className="space-y-8">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkillSpark
            </h1>
            <p className="text-3xl font-semibold text-foreground">Where Every Child's Talent Shines</p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The safe social platform where children showcase their unique talents, connect with mentors, and grow
              their skills - from chess mastery to digital art, coding to music composition.
            </p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Badge
              variant="secondary"
              className="bg-secondary/20 text-secondary hover:bg-secondary/30 text-lg px-6 py-3"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Ages 5-22
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              Parent Approved
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3">
              <Trophy className="w-5 h-5 mr-2" />
              Skill-Focused
            </Badge>
          </div>
        </div>

        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-primary">Why Parents & Kids Love SkillSpark</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Celebrate Every Interest</h3>
                  <p className="text-sm text-foreground/80">
                    No predetermined activities. Whether your child loves origami, robotics, or poetry - every passion
                    is valued and supported.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg">Safe Community</h3>
                  <p className="text-sm text-foreground/80">
                    Connect with like-minded peers and verified mentors in a protected environment with full parental
                    oversight.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Track Real Growth</h3>
                  <p className="text-sm text-foreground/80">
                    Watch your child's skills develop with detailed progress tracking, achievement badges, and portfolio
                    building.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-primary">Real Stories from SkillSpark Families</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ananya's Art Journey</h4>
                      <p className="text-sm text-muted-foreground">Age 8, Mumbai</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80">
                    "Started with finger painting at 5, now creates digital masterpieces. Connected with teen artists
                    who share techniques. Her confidence has soared!" - Priya, Mother
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Arjun's Chess Mastery</h4>
                      <p className="text-sm text-muted-foreground">Age 12, Bangalore</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80">
                    "Discovered chess at 10, now leads a 50+ member club and mentors younger players. The platform
                    helped him find his calling!" - Rajesh, Father
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-primary/30">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Join 50,000+ Families Already Growing on SkillSpark</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Give your child the platform to showcase their unique talents, connect with mentors, and build skills
                that matter for their future.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">₹0</p>
                  <p className="text-sm text-muted-foreground">Forever Free</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Safe & Secure</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">24/7</p>
                  <p className="text-sm text-muted-foreground">Parent Control</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "big-idea",
    title: "The Big Idea",
    subtitle: "Revolutionizing Youth Development Beyond the Classroom",
    content: (
      <div className="space-y-8">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl leading-relaxed">
              <strong className="text-primary">SkillSpark</strong> transforms how young people showcase their talents
              beyond traditional academics. From chess mastery to art projects, coding to music composition - we
              celebrate
              <span className="text-secondary font-semibold"> every skill that makes each child unique</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-primary">What Makes Us Different</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    Focus on extracurricular talents & passion projects
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    Community-driven with sub-cultures like Reddit
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    Voice & video rooms for skill-based connections
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    Direct mentorship from industry professionals
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-primary">The Opportunity</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    ₹35,000 Cr extracurricular activities market
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    87% of parents seek skill development platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    No platform connects youth with industry mentors
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center border-2 border-secondary/20">
            <CardContent className="pt-6 space-y-3">
              <Palette className="w-12 h-12 text-secondary mx-auto" />
              <h4 className="font-semibold">Creative Arts</h4>
              <p className="text-sm text-muted-foreground">Drawing, painting, digital art, crafts</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-primary/20">
            <CardContent className="pt-6 space-y-3">
              <Brain className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold">Strategy Games</h4>
              <p className="text-sm text-muted-foreground">Chess, puzzles, board games</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-accent/20">
            <CardContent className="pt-6 space-y-3">
              <Code className="w-12 h-12 text-accent mx-auto" />
              <h4 className="font-semibold">Tech Projects</h4>
              <p className="text-sm text-muted-foreground">Coding, robotics, app development</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-secondary/20">
            <CardContent className="pt-6 space-y-3">
              <Music className="w-12 h-12 text-secondary mx-auto" />
              <h4 className="font-semibold">Performance</h4>
              <p className="text-sm text-muted-foreground">Music, dance, theater, public speaking</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: "target-audience",
    title: "Target Audience",
    subtitle: "Empowering Every Child to Explore Their Unique Potential",
    content: (
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 mb-6">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-primary">No Predetermined Activities - Pure Discovery</h3>
              <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
                SkillSpark doesn't limit children to specific activities. Whether they're 5 years old fascinated by
                origami, 10 years old learning violin, or 16 years old mastering photography - every passion is
                celebrated and nurtured regardless of age or experience level.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Explorers</CardTitle>
              <p className="text-sm text-muted-foreground">Ages 5-8</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-center text-foreground/80">
                Early discoverers following their natural curiosity and interests
              </p>
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Discovery Approach:</h5>
                <ul className="text-xs space-y-1 text-foreground/70">
                  <li>• Follow their natural interests - no limits</li>
                  <li>• Celebrate every attempt and exploration</li>
                  <li>• Parent-guided documentation of discoveries</li>
                  <li>• Age-appropriate safety with maximum freedom</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl text-secondary">Creators</CardTitle>
              <p className="text-sm text-muted-foreground">Ages 9-14</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-center text-foreground/80">
                Independent learners developing their unique talents and passions
              </p>
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Growth Approach:</h5>
                <ul className="text-xs space-y-1 text-foreground/70">
                  <li>• Self-directed exploration of interests</li>
                  <li>• Connect with peers sharing similar passions</li>
                  <li>• Access to beginner-friendly mentorship</li>
                  <li>• Build confidence through community support</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-xl text-accent">Innovators</CardTitle>
              <p className="text-sm text-muted-foreground">Ages 15-22</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-center text-foreground/80">
                Advanced practitioners ready to share knowledge and lead communities
              </p>
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Leadership Approach:</h5>
                <ul className="text-xs space-y-1 text-foreground/70">
                  <li>• Mentor younger community members</li>
                  <li>• Lead specialized interest groups</li>
                  <li>• Connect with industry professionals</li>
                  <li>• Build portfolios for college & career</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">Market Size & Opportunity</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-secondary">25 Cr</p>
                  <p className="text-sm text-muted-foreground">Youth in Target Age Range</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">₹35,000 Cr</p>
                  <p className="text-sm text-muted-foreground">Extracurricular Activities Market</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">92%</p>
                  <p className="text-sm text-muted-foreground">Parents Want Skill Tracking</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "hobby-exploration",
    title: "Unlimited Hobby Exploration",
    subtitle: "Every Interest Matters - No Age Limits, No Experience Required",
    content: (
      <div className="space-y-8">
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3 justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
              Breaking Traditional Boundaries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl leading-relaxed text-center">
              SkillSpark celebrates that <strong className="text-primary">passion has no age limit</strong>. A
              5-year-old chess prodigy, a 12-year-old pottery enthusiast, or an 18-year-old learning origami -
              <span className="text-secondary font-semibold"> every journey is valid and supported</span>.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary text-center">Endless Possibilities</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4 border-2 border-secondary/20">
                <Brain className="w-8 h-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Mind Sports</h4>
                <p className="text-xs text-muted-foreground">Chess, Go, Sudoku, Logic Puzzles</p>
              </Card>
              <Card className="text-center p-4 border-2 border-primary/20">
                <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Visual Arts</h4>
                <p className="text-xs text-muted-foreground">Drawing, Painting, Sculpture, Digital Art</p>
              </Card>
              <Card className="text-center p-4 border-2 border-accent/20">
                <Music className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Performing Arts</h4>
                <p className="text-xs text-muted-foreground">Music, Dance, Theater, Voice</p>
              </Card>
              <Card className="text-center p-4 border-2 border-secondary/20">
                <Code className="w-8 h-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Technology</h4>
                <p className="text-xs text-muted-foreground">Coding, Robotics, 3D Printing, AI</p>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary text-center">Real Examples</h3>
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-primary">
                <h4 className="font-semibold text-primary">Ananya, Age 7</h4>
                <p className="text-sm text-foreground/80">
                  Started with finger painting, now creates digital art on tablets. Connected with teen artists who
                  share techniques and inspiration.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-secondary">
                <h4 className="font-semibold text-secondary">Arjun, Age 14</h4>
                <p className="text-sm text-foreground/80">
                  Discovered chess at 12, now leads a chess club with 50+ members and mentors younger players in
                  strategy sessions.
                </p>
              </Card>
              <Card className="p-4 border-l-4 border-l-accent">
                <h4 className="font-semibold text-accent">Priya, Age 19</h4>
                <p className="text-sm text-foreground/80">
                  Started coding at 16, now builds apps and teaches programming to middle schoolers through live coding
                  sessions.
                </p>
              </Card>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-secondary/5 to-accent/5 border-2 border-secondary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-secondary">The SkillSpark Difference</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Compass className="w-12 h-12 text-primary mx-auto" />
                  <h4 className="font-semibold">No Prerequisites</h4>
                  <p className="text-sm text-muted-foreground">
                    Jump into any interest at any age. Beginner-friendly communities welcome everyone.
                  </p>
                </div>
                <div className="space-y-2">
                  <Heart className="w-12 h-12 text-secondary mx-auto" />
                  <h4 className="font-semibold">Passion-Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Follow genuine interests, not predetermined paths. Authentic growth through curiosity.
                  </p>
                </div>
                <div className="space-y-2">
                  <Users className="w-12 h-12 text-accent mx-auto" />
                  <h4 className="font-semibold">Cross-Age Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn from anyone, regardless of age. Skills and passion matter more than years.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "key-features",
    title: "Key Features",
    subtitle: "A Complete Ecosystem for Youth Development",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Users className="w-6 h-6" />
                Smart User Profiles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Age-Adaptive Interface:</strong> UI evolves with user maturity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Multi-Media Portfolios:</strong> Photos, videos, documents, projects
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Growth Timeline:</strong> Visual journey of skill development
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Collaboration Tools:</strong> Share with mentors, teachers, family
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-secondary">
                <Trophy className="w-6 h-6" />
                Gamified Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Skill Badges:</strong> 300+ achievements across all disciplines
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Progress Tracking:</strong> Visual milestones and goal setting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Peer Recognition:</strong> Safe community appreciation system
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Challenge System:</strong> Age-appropriate skill-building activities
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-accent">
                <Shield className="w-6 h-6" />
                Advanced Safety & Parental Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Parental Dashboard:</strong> Real-time progress tracking & full control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Privacy Controls:</strong> Granular sharing permissions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Content Moderation:</strong> AI + human review system
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>COPPA Compliant:</strong> Industry-leading child protection
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <MessageCircle className="w-6 h-6" />
                Community & Mentorship
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Sub-Communities:</strong> Interest-based groups like Reddit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Voice & Video Rooms:</strong> Discord-style skill-based connections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Industry Mentors:</strong> Direct connection to professionals
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Collaborative Projects:</strong> Team-based learning experiences
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">Platform Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold">Voice Rooms</h4>
                <p className="text-sm text-muted-foreground">
                  Chess players discuss strategies, artists share techniques, coders collaborate on projects
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <UserCheck className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold">Professional Mentors</h4>
                <p className="text-sm text-muted-foreground">
                  Verified industry professionals guide youth in their areas of expertise
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold">Parent Insights</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time progress tracking, skill development analytics, and achievement notifications
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "community-features",
    title: "Community & Connection",
    subtitle: "Building Tomorrow's Leaders Through Meaningful Connections",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <MessageCircle className="w-6 h-6" />
                Reddit-Style Sub-Communities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-foreground/80">
                Specialized communities for every interest, moderated by experienced members and professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">r/YoungChessMasters</h4>
                    <p className="text-xs text-muted-foreground">12.5K members • Strategy discussions, tournaments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                  <Palette className="w-6 h-6 text-secondary" />
                  <div>
                    <h4 className="font-semibold text-sm">r/DigitalArtKids</h4>
                    <p className="text-xs text-muted-foreground">8.2K members • Tutorials, feedback, showcases</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <Code className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold text-sm">r/TeenCoders</h4>
                    <p className="text-xs text-muted-foreground">15.7K members • Project collaboration, mentorship</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-secondary">
                <Mic className="w-6 h-6" />
                Discord-Style Voice & Video Rooms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-foreground/80">
                Real-time collaboration spaces where young people connect, learn, and grow together.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="font-semibold text-sm">Chess Strategy Session</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">7 participants • Analyzing grandmaster games</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="font-semibold text-sm">Art Critique Circle</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">12 participants • Sharing works in progress</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <h4 className="font-semibold text-sm">Code Review Hangout</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">5 participants • Debugging Python projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-accent justify-center">
              <UserCheck className="w-6 h-6" />
              Industry Professional Mentorship
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-foreground/80">
              Verified professionals from leading companies provide guidance, feedback, and career insights.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold">Tech Mentors</h4>
                <p className="text-sm text-muted-foreground">Software engineers from TCS, Infosys, Wipro</p>
                <Badge variant="outline" className="text-xs">
                  150+ Active
                </Badge>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold">Creative Mentors</h4>
                <p className="text-sm text-muted-foreground">Artists, designers, musicians from top studios</p>
                <Badge variant="outline" className="text-xs">
                  89+ Active
                </Badge>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold">Strategy Mentors</h4>
                <p className="text-sm text-muted-foreground">Chess masters, game designers, analysts</p>
                <Badge variant="outline" className="text-xs">
                  67+ Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-primary justify-center">
              <Eye className="w-6 h-6" />
              Parental Progress Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Real-Time Insights</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Weekly skill development reports</li>
                  <li>• Community interaction summaries</li>
                  <li>• Achievement milestone notifications</li>
                  <li>• Time spent in different activities</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Safety Controls</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Approve mentor connections</li>
                  <li>• Monitor voice room participation</li>
                  <li>• Review shared content before posting</li>
                  <li>• Set activity time limits and schedules</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "business-model",
    title: "Business Model",
    subtitle: "Sustainable Growth Through Value Creation",
    content: (
      <div className="space-y-6">
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Freemium Model</CardTitle>
            <p className="text-muted-foreground">Accessible to all, premium value for power users</p>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-secondary">
                <Heart className="w-6 h-6" />
                Free Tier
              </CardTitle>
              <p className="text-sm text-muted-foreground">Building the community foundation</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Core Features (Always Free)</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Basic portfolio creation</li>
                  <li>• 50 skill badges</li>
                  <li>• Essential parental controls</li>
                  <li>• Community participation</li>
                  <li>• Mobile app access</li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  <strong>Strategy:</strong> Build massive user base, create network effects, establish platform as
                  essential youth development tool
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Star className="w-6 h-6" />
                SkillSpark Pro
              </CardTitle>
              <p className="text-sm text-muted-foreground">₹799/month per family</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Premium Features</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Unlimited skill badges (200+)</li>
                  <li>• Advanced analytics & insights</li>
                  <li>• Professional portfolio templates</li>
                  <li>• Priority mentor matching</li>
                  <li>• Export to college applications</li>
                  <li>• Family collaboration tools</li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  <strong>Target:</strong> 15% conversion rate by Year 2
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-accent">
              <DollarSign className="w-6 h-6" />
              Revenue Projections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Year 1</p>
                <p className="text-xl font-bold text-primary">₹20 Cr</p>
                <p className="text-xs text-foreground/60">200K users, 8% conversion</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Year 2</p>
                <p className="text-xl font-bold text-secondary">₹105 Cr</p>
                <p className="text-xs text-foreground/60">700K users, 15% conversion</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Year 3</p>
                <p className="text-xl font-bold text-accent">₹265 Cr</p>
                <p className="text-xs text-foreground/60">1.5M users, 18% conversion</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Year 5</p>
                <p className="text-xl font-bold text-primary">₹745 Cr</p>
                <p className="text-xs text-foreground/60">3.2M users, 23% conversion</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-primary mb-2">Low Customer Acquisition Cost</h4>
              <p className="text-sm text-foreground/80">Viral growth through family sharing and school partnerships</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-secondary mb-2">High Lifetime Value</h4>
              <p className="text-sm text-foreground/80">Multi-year engagement from early childhood through college</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-accent mb-2">Network Effects</h4>
              <p className="text-sm text-foreground/80">Platform value increases with each new user and connection</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
]

export default function SkillSparkPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-10 flex justify-between items-center">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="pt-16 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">{slides[currentSlide].title}</h1>
            <p className="text-xl text-muted-foreground">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="min-h-[600px]">{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg px-4 py-2 border">
          <p className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
      </div>
    </div>
  )
}
