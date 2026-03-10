"use client";

import Image from "next/image";
import { useRef } from "react";

export default function CV() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      if (typeof window !== 'undefined' && cvRef.current) {
        // For download, try html2pdf.js again with simpler options
        const html2pdf = (await import('html2pdf.js')).default;
        await html2pdf().from(cvRef.current).save('Bianca_Arghiri_CV.pdf');
      }
    } catch (error) {
      console.error('Error with download:', error);
      // Fallback to print dialog
      window.print();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons - Hidden in print */}
          <div className="no-print mb-8 flex justify-center gap-4">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-[#3DDC97] text-[#022B1C] font-semibold rounded-lg hover:bg-[#2ecc85] transition-colors"
            >
              Print CV
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-[#022B1C] text-white font-semibold rounded-lg hover:bg-[#0E4A3A] transition-colors"
            >
              Save as PDF
            </button>
            <a
              href="/"
              className="px-6 py-3 border-2 border-[#022B1C] text-[#022B1C] font-semibold rounded-lg hover:bg-[#022B1C] hover:text-white transition-colors"
            >
              Back to Portfolio
            </a>
          </div>

          {/* CV Content */}
          <div ref={cvRef} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              {/* Header */}
              <header className="mb-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#3DDC97] relative">
                    <Image
                      src="/BIANCA.jpg"
                      alt="Bianca Arghiri"
                      fill
                      className="object-cover object-[top_35%] absolute inset-0"
                      sizes="128px"
                    />
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-[#022B1C] mb-2">Bianca Arghiri</h1>
                <h2 className="text-xl text-[#3DDC97] font-semibold mb-4">AI Founder & Business Strategist</h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#022B1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Chișinău, Moldova</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#022B1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>arghiribianca@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#022B1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+373 68951000</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#022B1C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>linkedin.com/in/bianca-arghiri-84b020308</span>
                  </div>
                </div>
              </header>

              {/* Professional Summary */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Professional Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A 17-year-old business student, AI enthusiast, and innovative builder with a passion for 
                  developing intelligent systems that enhance human capabilities. Experienced in business strategy, 
                  project management, and emerging technologies. Seeking opportunities to leverage AI and automation 
                  to solve complex problems and create meaningful impact.
                </p>
              </section>

              {/* Education */}
              <section id="education" className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Center of Excellence in Economics and Finance</h4>
                        <p className="text-gray-600">Business Planning & Administration</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">2024 - Present</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Focused on business planning, administration, and economic systems with specialization in 
                      entrepreneurship and finance.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">High School Diploma</h4>
                        <p className="text-gray-600">General Education</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">2019 - 2024</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section id="experience" className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Founder & CEO</h4>
                        <p className="text-gray-600">Exelion AI</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">2025 - Present</span>
                    </div>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Leading development of AI-powered solutions for business automation</li>
                      <li>Designing intelligent systems to enhance decision-making processes</li>
                      <li>Managing cross-functional teams and project timelines</li>
                      <li>Developing go-to-market strategies for AI products</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">Participant</h4>
                        <p className="text-gray-600">Technovation Girls</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">2026 - Present</span>
                    </div>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Developed mobile app solutions addressing community challenges</li>
                      <li>Collaborated with international teams on technology projects</li>
                      <li>Presented innovative solutions to industry judges</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AI & Machine Learning Concepts</li>
                      <li>• Business Strategy & Planning</li>
                      <li>• Project Management</li>
                      <li>• Data Analysis</li>
                      <li>• Web Development Basics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Leadership & Team Management</li>
                      <li>• Problem-Solving</li>
                      <li>• Critical Thinking</li>
                      <li>• Communication</li>
                      <li>• Innovation & Creativity</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Languages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Romanian</span>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">English</span>
                    <span className="text-sm text-gray-500">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Russian</span>
                    <span className="text-sm text-gray-500">Beginner</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">French</span>
                    <span className="text-sm text-gray-500">Basic</span>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Notable Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Exelion AI Platform</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Developing an AI-powered platform for business automation and decision support.
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Technologies:</strong> AI/ML, Business Intelligence, Web Technologies
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technovation Challenge Solution</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Mobile application addressing community engagement and education challenges.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-bold text-[#022B1C] mb-4 border-b-2 border-[#3DDC97] pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Email:</strong> arghiribianca@gmail.com
                  </div>
                  <div>
                    <strong>LinkedIn:</strong> linkedin.com/in/bianca-arghiri-84b020308
                  </div>
                  <div>
                    <strong>GitHub:</strong> github.com/arghiribianca-gif
                  </div>
                  <div>
                    <strong>Instagram:</strong> @arghiri.bianca
                  </div>
                  <div>
                    <strong>Location:</strong> Chișinău, Moldova
                  </div>
                  <div>
                    <strong>Available:</strong> Remote & Hybrid opportunities
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white;
            padding: 0;
            margin: 0;
          }
          
          .no-print {
            display: none !important;
          }
          
          .min-h-screen {
            min-height: auto;
          }
          
          .bg-gray-50 {
            background: white;
          }
          
          .shadow-lg {
            box-shadow: none;
          }
          
          .rounded-lg {
            border-radius: 0;
          }
          
          .overflow-hidden {
            overflow: visible;
          }
          
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          /* Keep visual appearance exactly the same as screen */
          h1 {
            font-size: 28pt !important;
            color: #022B1C !important;
            font-family: 'Space Grotesk', sans-serif !important;
            font-weight: 700 !important;
          }
          
          h2 {
            font-size: 18pt !important;
            color: #3DDC97 !important;
            font-family: 'Space Grotesk', sans-serif !important;
            font-weight: 600 !important;
          }
          
          h3 {
            font-size: 16pt !important;
            color: #022B1C !important;
            font-family: 'Space Grotesk', sans-serif !important;
            font-weight: 700 !important;
            border-bottom: 2pt solid #3DDC97 !important;
            padding-bottom: 8pt !important;
            margin-bottom: 16pt !important;
          }
          
          h4 {
            font-size: 12pt !important;
            color: #111414 !important;
            font-weight: 600 !important;
          }
          
          p {
            font-size: 10pt !important;
            color: #374151 !important;
            line-height: 1.5 !important;
          }
          
          li {
            font-size: 10pt !important;
            color: #374151 !important;
            line-height: 1.5 !important;
          }
          
          span {
            font-size: 10pt !important;
          }
          
          .text-4xl {
            font-size: 28pt !important;
          }
          
          .text-xl {
            font-size: 16pt !important;
          }
          
          .text-sm {
            font-size: 10pt !important;
          }
          
          .text-xs {
            font-size: 9pt !important;
          }
          
          .text-gray-700 {
            color: #111414 !important;
          }
          
          .text-gray-600 {
            color: #374151 !important;
          }
          
          .text-gray-500 {
            color: #6B7280 !important;
          }
          
          .text-[#022B1C] {
            color: #022B1C !important;
          }
          
          .text-[#3DDC97] {
            color: #3DDC97 !important;
          }
          
          .border-b-2 {
            border-bottom-width: 2pt !important;
            border-color: #3DDC97 !important;
          }
          
          .border-4 {
            border-width: 3pt !important;
            border-color: #3DDC97 !important;
          }
          
          .bg-white {
            background: white !important;
          }
          
          .list-disc {
            list-style-type: disc;
          }
          
          .list-inside {
            list-style-position: inside;
          }
          
          /* Preserve exact spacing */
          .mb-8 {
            margin-bottom: 16pt !important;
          }
          
          .mb-6 {
            margin-bottom: 12pt !important;
          }
          
          .mb-4 {
            margin-bottom: 8pt !important;
          }
          
          .mb-2 {
            margin-bottom: 4pt !important;
          }
          
          .p-8 {
            padding: 16pt !important;
          }
          
          .gap-4 {
            gap: 8pt !important;
          }
          
          .gap-6 {
            gap: 12pt !important;
          }
          
          .w-32 {
            width: 96pt !important;
          }
          
          .h-32 {
            height: 96pt !important;
          }
          
          /* Move everything higher in print preview */
          header .mb-8 {
            margin-bottom: 12pt !important;
          }
          
          header .mb-4 {
            margin-bottom: 6pt !important;
          }
          
          h1 {
            margin-bottom: 4pt !important;
          }
          
          h2 {
            margin-bottom: 6pt !important;
          }
          
          /* Reduce spacing between contact info and sections */
          .text-gray-600 {
            margin-bottom: 2pt !important;
          }
          
          .mb-8 {
            margin-bottom: 12pt !important;
          }
          
          .mb-6 {
            margin-bottom: 10pt !important;
          }
          
          .mb-4 {
            margin-bottom: 6pt !important;
          }
          
          .mb-2 {
            margin-bottom: 3pt !important;
          }
          
          /* Ensure photo stays within circular frame in print */
          .rounded-full {
            border-radius: 48pt !important;
            overflow: hidden !important;
          }
          
          .relative {
            position: relative !important;
          }
          
          .absolute {
            position: absolute !important;
          }
          
          .inset-0 {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }
          
          /* Allow natural page breaks everywhere */
          section {
            page-break-inside: auto;
          }
          
          .space-y-4 > * + * {
            page-break-inside: auto;
          }
          
          /* Allow page breaks between all sections */
          h1, h2, h3 {
            page-break-after: auto;
            page-break-inside: auto;
          }
        }
      `}</style>
    </>
  );
}
