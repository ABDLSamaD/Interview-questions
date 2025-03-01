"use client";

import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Database,
  Server,
  Cpu,
  ChevronRight,
  Search,
  BookOpen,
  Users,
} from "lucide-react";

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef(null);

  const sections = [
    { title: "MongoDB", icon: Database, color: "bg-green-500" },
    { title: "Express", icon: Server, color: "bg-gray-500" },
    { title: "React", icon: Code, color: "bg-blue-500" },
    { title: "Node.js", icon: Cpu, color: "bg-green-600" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        const sectionElements = sectionsRef.current.children;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const section = sectionElements[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Master the</span>{" "}
                  <span className="block text-gray-700 xl:inline">
                    MERN Stack
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Prepare for your next interview with our comprehensive
                  collection of MERN Stack interview questions. From MongoDB to
                  React, we've got you covered.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/complex"
                      className="w-full flex items-center justify-center px-8 py-3 border border-solid border-gray-400 text-base font-medium rounded-md text-black bg-gray-200/20 hover:bg-gray-500/20 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Complex Questions
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/mongodb"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-950 bg-indigo-500/20 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Developer working on code"
            loading="lazy"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to ace your interview
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides comprehensive resources to help you prepare
              for your MERN stack interview.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Search className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Comprehensive Question Bank
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Access a vast collection of interview questions covering all
                  aspects of the MERN stack.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BookOpen className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    In-depth Explanations
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Each question comes with detailed explanations and code
                  examples to enhance your understanding.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Community Discussions
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Engage with other developers, share your knowledge, and learn
                  from the community.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Progressive Learning Path
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Follow a structured learning path that takes you from basics
                  to advanced topics in the MERN stack.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Sticky Cards Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            What You'll Learn
          </h2>
          <div ref={sectionsRef} className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`bg-white overflow-hidden shadow-lg sm:rounded-lg transition-all duration-300 ${
                  index === activeSection ? "sticky top-4 z-10 scale-105" : ""
                }`}
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 rounded-md p-3 ${section.color}`}
                    >
                      <section.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Master {section.title} and its role in the MERN stack.
                      Learn about key concepts, best practices, and how to
                      integrate it with other technologies.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link
                      to={`/${section.title.toLowerCase()}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      Explore {section.title}
                      <ChevronRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="backdrop-blur-xs">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            <span className="block text-black">Ready to dive in?</span>
            <span className="block">Start your MERN stack journey today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-800">
            Ace your next interview with confidence. Our comprehensive question
            bank and learning resources will prepare you for success.
          </p>
          <Link
            to="/complex"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-600 bg-white/10 border-solid border-gray-500 hover:bg-indigo-50 sm:w-auto"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
