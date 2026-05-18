"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  Monitor,
  Building2,
  GraduationCap,
  Workflow,
} from "lucide-react";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div>
            <a
              href="#home"
              className="text-lg font-semibold tracking-wide"
          >
              Tanaka Dongo
          </a>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

           <a href="#services" className="hover:text-white transition">
            Services
           </a>

            <a href="#projects" className="hover:text-white transition">
             Projects
            </a>

            <a href="#about" className="hover:text-white transition">
             About
            </a>

            <a href="#contact" className="hover:text-white transition">
             Contact
            </a>

          </nav>

          {/* MOBILE ICON */}
          <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
               <Menu size={22} />
           </button>

        </div>
                {/* MOBILE MENU */}
        <AnimatePresence>

          {mobileMenuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
            >

              <div className="flex flex-col px-6 py-8 space-y-6 text-lg">

                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  Services
                </a>

                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  Projects
                </a>

                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
  id="home"
  className="min-h-screen flex items-center pt-32 px-6"
>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
              Software Developer • Digital Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-3xl">

              Building Smart Digital Systems for
              Schools, Businesses & Organizations

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">

              I design and develop modern websites, management systems,
              booking platforms and automation tools that help organizations
              improve efficiency and streamline operations.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-white text-black hover:bg-gray-200 transition px-7 py-4 rounded-full font-medium flex items-center gap-2">

                View Projects
                <ArrowRight size={18} />

              </button>

              <button className="border border-white/10 hover:border-white/20 hover:bg-white/5 transition px-7 py-4 rounded-full font-medium">

                Contact Me

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-6 backdrop-blur-xl">

              {/* TOP BAR */}
              <div className="flex gap-2 mb-8">

                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />

              </div>

              {/* PROJECT PREVIEW */}
              <div className="space-y-5">

                <div className="border border-white/10 rounded-2xl p-5 hover:bg-white/[0.03] transition">

                  <div className="flex items-center gap-3 mb-3">

                    <GraduationCap size={20} className="text-gray-400" />

                    <h3 className="font-medium">
                      School Management System
                    </h3>

                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">

                    Student records, attendance, fees management,
                    admissions and reporting dashboard.

                  </p>

                </div>

                <div className="border border-white/10 rounded-2xl p-5 hover:bg-white/[0.03] transition">

                  <div className="flex items-center gap-3 mb-3">

                    <Building2 size={20} className="text-gray-400" />

                    <h3 className="font-medium">
                      Business Website Platform
                    </h3>

                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">

                    Modern responsive websites designed for businesses,
                    organizations and startups.

                  </p>

                </div>

                <div className="border border-white/10 rounded-2xl p-5 hover:bg-white/[0.03] transition">

                  <div className="flex items-center gap-3 mb-3">

                    <Workflow size={20} className="text-gray-400" />

                    <h3 className="font-medium">
                      Automation Dashboard
                    </h3>

                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">

                    Inventory management, workflow automation
                    and analytics systems.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section
   id="services"
  className="px-6 pb-32"
>

        <div className="max-w-7xl mx-auto">

          {/* SECTION TITLE */}
          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl leading-tight">

              Solutions built to help organizations operate better.

            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition">

              <Monitor size={28} className="mb-6 text-gray-300" />

              <h3 className="text-xl font-medium mb-4">
                Business Websites
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Modern, responsive and professional websites
                tailored for businesses and organizations.

              </p>

            </div>

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition">

              <GraduationCap size={28} className="mb-6 text-gray-300" />

              <h3 className="text-xl font-medium mb-4">
                School Systems
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Digital platforms for attendance,
                student management and academic administration.

              </p>

            </div>

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition">

              <Workflow size={28} className="mb-6 text-gray-300" />

              <h3 className="text-xl font-medium mb-4">
                Automation Tools
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Workflow automation and management dashboards
                that improve operational efficiency.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* PROJECTS SECTION */}
      <section
  id="projects"
  className="px-6 pb-32"
>

        <div className="max-w-7xl mx-auto">

          {/* SECTION TITLE */}
          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">

              Real systems and platforms built for education,
              organizations and digital operations.

            </h2>

          </div>

          {/* PROJECT GRID */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* PROJECT 1 */}
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">

              <img
                src="/attendance-system.png"
                alt="Attendance System"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-semibold">
                    Uncommon Attendance Management System
                  </h3>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full text-gray-400">
                    Web App
                  </span>

                </div>

                <p className="text-gray-400 leading-relaxed mb-6">

                  Attendance tracking platform designed for institutional
                  operations and administrative management.

                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Next.js
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Tailwind CSS
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Dashboard UI
                  </span>

                </div>

                <a
                  href="https://uncommon-attendance-systemm.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-300 transition"
                >
                  View Live Project
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

            {/* PROJECT 2 */}
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">

              <img
                src="/zengeza.png"
                alt="School Website"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-semibold">
                    Zengeza 1 High School Website
                  </h3>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full text-gray-400">
                    Education
                  </span>

                </div>

                <p className="text-gray-400 leading-relaxed mb-6">

                  Professional school website focused on admissions,
                  communication and institutional branding.

                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Responsive Design
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    School Platform
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    UI/UX
                  </span>

                </div>

                <a
                  href="https://zengeza1high.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-300 transition"
                >
                  View Live Project
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

            {/* PROJECT 3 */}
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">

              <img
                src="/dreambridge.png"
                alt="DreamBridge"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-semibold">
                    DreamBridge Platform
                  </h3>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full text-gray-400">
                    Opportunity Platform
                  </span>

                </div>

                <p className="text-gray-400 leading-relaxed mb-6">

                  Student opportunity discovery platform connecting users
                  with scholarships, internships and educational programs.

                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Platform UI
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Dashboard
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Student Tech
                  </span>

                </div>

                <a
                  href="https://dreambridge.lovable.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-300 transition"
                >
                  View Live Project
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

            {/* PROJECT 4 */}
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">

              <img
                src="/mentorship.png"
                alt="Mentorship Platform"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-2xl font-semibold">
                    Uncommon Mentorship Platform
                  </h3>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full text-gray-400">
                    Mentorship System
                  </span>

                </div>

                <p className="text-gray-400 leading-relaxed mb-6">

                  Intelligent mentorship matching platform designed to connect
                  learners with mentors and structured growth opportunities.

                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Matching System
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    Web Platform
                  </span>

                  <span className="border border-white/10 px-3 py-2 rounded-full text-sm text-gray-300">
                    UX Design
                  </span>

                </div>

                <a
                  href="https://uncommonmentorship.org/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-300 transition"
                >
                  View Live Project
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ABOUT SECTION */}
      <section
  id="about"
  className="px-6 pb-32"
>

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="relative">

             {/* IMAGE */}
             <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">

               <img
                  src="/profile.png"
                  alt="Tanaka Dongo"
                  className="w-full h-full object-cover"
               />

         </div>

</div>

            {/* RIGHT SIDE */}
            <div>

  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
    About
  </p>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8">

    Building digital systems that solve
    real operational problems.

  </h2>

  <div className="space-y-8 text-gray-400 text-base sm:text-lg leading-relaxed">
    </div>

              <p>

                I am a software developer focused on building practical
                digital platforms for schools, organizations, startups
                and businesses.

              </p>

              <p>

                My work centers around creating systems that improve
                efficiency, simplify workflows and help organizations
                operate more effectively through technology.

              </p>

              <p>

                I have worked on educational platforms, management
                systems, opportunity discovery tools, mentorship
                platforms and organizational websites.

              </p>

              <p>

                I approach development with a strong emphasis on
                clean design, usability, structure and scalability —
                ensuring that the systems I build are both functional
                and intuitive to use.

              </p>

            </div>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-24">

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

              <h3 className="text-5xl font-semibold mb-4">
                5+
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Digital platforms and systems built
                across education, mentorship and organizational operations.

              </p>

            </div>

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

              <h3 className="text-5xl font-semibold mb-4">
                3+
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Areas of focus including educational technology,
                automation systems and digital platforms.

              </p>

            </div>

            {/* CARD */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

              <h3 className="text-5xl font-semibold mb-4">
                Modern
              </h3>

              <p className="text-gray-400 leading-relaxed">

                Development approach focused on responsive design,
                usability and scalable system architecture.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* CONTACT SECTION */}
      <section
  id="contact"
  className="px-6 pb-20"
>

        <div className="max-w-7xl mx-auto">

          {/* CONTACT CARD */}
          <div className="border border-white/10 rounded-[40px] p-10 md:p-16 bg-white/[0.02]">

            <div className="grid lg:grid-cols-2 gap-16">

              {/* LEFT SIDE */}
              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                  Contact
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">

                  Let’s build something meaningful together.

                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">

                  I am currently available for freelance projects,
                  collaborations and digital system development for
                  schools, businesses and organizations.

                </p>

              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-8">

                {/* EMAIL */}
                <div className="border-b border-white/10 pb-6">

                  <p className="text-sm text-gray-500 mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:tanakadongo21@email.com"
                    className="text-xl hover:text-gray-300 transition"
                  >
                    tanakadongo21@email.com
                  </a>

                </div>

                {/* WHATSAPP */}
                <div className="border-b border-white/10 pb-6">

                  <p className="text-sm text-gray-500 mb-2">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/263774341548"
                    target="_blank"
                    className="text-xl hover:text-gray-300 transition"
                  >
                    Chat on WhatsApp
                  </a>

                </div>

                {/* GITHUB */}
                <div className="border-b border-white/10 pb-6">

                  <p className="text-sm text-gray-500 mb-2">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/TanakaElSavage"
                    target="_blank"
                    className="text-xl hover:text-gray-300 transition"
                  >
                    github.com/TanakaElSavage
                  </a>

                </div>

                {/* LINKEDIN */}
                <div>

                  <p className="text-sm text-gray-500 mb-2">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/tanaka-dongo-965512299/"
                    target="_blank"
                    className="text-xl hover:text-gray-300 transition"
                  >
                    linkedin.com/in/tanaka-dongo-965512299/
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* FOOTER */}
          <footer className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

            <p>
              © 2026 Tanaka Dongo. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a href="#" className="hover:text-gray-300 transition">
                Projects
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                About
              </a>

              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>

            </div>

          </footer>

        </div>

      </section>

    </main>
  );
}