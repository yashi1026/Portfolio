'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const CONTACT_ITEMS = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      ),
      label: 'Email',
      value: 'yashisingh@email.com',
      href: 'mailto:yashisingh@email.com',
      color: '#6366f1',
      bg: 'bg-indigo-500/20',
      hoverBg: 'hover:bg-indigo-500/30',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/yashisingh',
      href: 'https://linkedin.com',
      color: '#3b82f6',
      bg: 'bg-blue-500/20',
      hoverBg: 'hover:bg-blue-500/30',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/yashisingh',
      href: 'https://github.com',
      color: '#9333ea',
      bg: 'bg-purple-500/20',
      hoverBg: 'hover:bg-purple-500/30',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382 1.38 1.38 0 0 0 1.38-1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      label: 'LeetCode',
      value: 'leetcode.com/u/zoneofyashi/',
      href: 'https://leetcode.com/u/zoneofyashi/',
      color: '#f59e0b',
      bg: 'bg-amber-500/20',
      hoverBg: 'hover:bg-amber-500/30',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&apos;m currently looking for opportunities where I can learn,
            contribute to meaningful projects and grow as a software developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center space-x-4 group"
                  >
                    <div
                      className={`${item.bg} ${item.hoverBg} p-3 rounded-xl transition-colors`}
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">
                        {item.label}
                      </p>

                      <a
                        href={item.href}
                        target={
                          item.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="text-white hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                <span className="text-xl">👋</span>
                <span>Let&apos;s connect!</span>
              </h4>

              <p className="text-gray-400 leading-relaxed text-sm">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a conversation about
                machine learning and software development. Feel free to reach
                out!
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">

                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>

                <p className="text-green-400 font-semibold text-lg">
                  Message sent!
                </p>

                <p className="text-gray-400 text-sm text-center">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>

                  <span>Send Message</span>
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
