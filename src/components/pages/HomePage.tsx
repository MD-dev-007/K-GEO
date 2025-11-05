import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight, Globe, Users, BookOpen, Award, Calendar, MapPin, Mail } from 'lucide-react';
import heroImage from '../../assets/slide1.png';
import heroImage2 from '../../assets/silde2.jpg';
import SplitText from '../animations/SplitText';
import { CounterAnimation } from '../animations/CounterAnimation';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroImage,
      title: 'K-GEO',
      subtitle: 'Kumaraguru Global Engagement Office',
      buttonText: 'Know More',
      buttonLink: '/about'
    },
    {
      image: heroImage2,
      title: 'Connecting Kumaraguru To The World',
      subtitle: '',
      buttonText: '',
      buttonLink: ''
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with scroll animation classes
    const sections = document.querySelectorAll('.scroll-section, .scroll-section-left, .scroll-section-right, .scroll-section-scale');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const features = [
    {
      icon: Globe,
      title: 'Global Partnerships',
      desc: '25+ university partners across 10+ countries',
    },
    {
      icon: Users,
      title: 'Student Mobility',
      desc: '300+ students in exchange programs annually',
    },
    {
      icon: BookOpen,
      title: 'Joint Programs',
      desc: 'Dual degrees and collaborative academic offerings',
    },
    {
      icon: Award,
      title: 'Research Excellence',
      desc: '10+ international research collaborations',
    },
  ];

  const programs = [
    {
      title: 'Study Abroad',
      desc: 'Semester exchange programs with leading global universities',
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'International Faculty',
      desc: 'Visiting professors and collaborative teaching initiatives',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      title: 'Global Research',
      desc: 'Joint research projects addressing worldwide challenges',
      image:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Global Responsive Styles and Scroll Animations */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
        .container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 640px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
        
        /* Scroll Animation Classes */
        .scroll-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-section-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-section-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .scroll-section-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-section-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .scroll-section-scale {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-section-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
      {/* Hero Section - Professional Slider */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Slider Container */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fadeInUp">
              {currentSlide === 0 ? (
                <>
                  <h1 className="hero-title mb-6">{slides[0].title}</h1>
                  <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light mb-10 max-w-4xl mx-auto">
                    {slides[0].subtitle}
                  </p>
                  {slides[0].buttonText && (
                    <Link
                      to={slides[0].buttonLink}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/40 rounded-full hover:bg-white/30 transition-all transform hover:scale-105 shadow-xl"
                      style={{ fontSize: '18px', fontWeight: '600' }}
                    >
                      {slides[0].buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}
                </>
              ) : (
                <SplitText
                  text={slides[1].title}
                  className="hero-title"
                  delay={40}
                  duration={0.8}
                  ease="cubic-bezier(0.34, 1.56, 0.64, 1)"
                  splitType="chars"
                  from={{ opacity: 0, y: 50, scale: 0.8 }}
                  to={{ opacity: 1, y: 0, scale: 1 }}
                  threshold={0.2}
                  rootMargin="0px"
                  textAlign="center"
                />
              )}
            </div>
            <style>{`
              .hero-title {
                font-size: clamp(32px, 7vw, 80px);
                font-weight: 800;
                line-height: 1.2;
                letter-spacing: -0.01em;
                color: white;
                text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.9), 0px 2px 10px rgba(0, 0, 0, 1);
                margin: 0 auto;
                max-width: 1400px;
                word-spacing: 0.1em;
                hyphens: none;
                overflow-wrap: normal;
              }
              @media (max-width: 640px) {
                .hero-title {
                  font-size: clamp(28px, 8vw, 40px);
                  line-height: 1.3;
                  word-spacing: normal;
                }
              }
              @media (min-width: 641px) and (max-width: 1024px) {
                .hero-title {
                  font-size: clamp(40px, 6vw, 60px);
                  line-height: 1.25;
                }
              }
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fadeInUp {
                animation: fadeInUp 1s ease-out;
              }
            `}</style>
          </div>
        </div>

        {/* Add CSS Animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          @keyframes expandWidth {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 1;
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-20">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white -mt-1 scroll-section">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="relative w-full order-2 lg:order-1">
              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <ImageWithFallback
                  src="src/assets/d058fd6bad7846c52f47d21d8a1bbce8947440de.png"
                  alt="K-GEO Team"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div
              className="relative p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl order-1 lg:order-2"
              style={{ background: 'linear-gradient(135deg, #0d3b66 0%, #1b4965 100%)' }}
            >
              <h2
                className="mb-4 sm:mb-6 text-white"
                style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', lineHeight: '1.3' }}
              >
                In a world defined by interconnection, the greatest challenges and opportunities
                lie beyond borders.
              </h2>
              <div className="space-y-4 sm:space-y-6 text-white/90" style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.7' }}>
                <p>
                  <strong className="text-white" style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>
                    Kumaraguru Global Engagement Office (K-GEO)
                  </strong>{' '}
                  exists to remove barriers between people, institutions, and nations — so that
                  knowledge can flow freely, ideas can merge across cultures, and innovation can
                  rise from collaboration.
                </p>
                <p>
                  We empower our community to engage with diverse perspectives, solve problems that
                  matter, and create futures that are globally relevant yet locally rooted.
                </p>
                <p>
                  K-GEO was created with a singular conviction that eliminating barriers between
                  institutions and communities worldwide is essential to creating new knowledge and
                  innovative solutions to humanity's most pressing problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprints Section - Scaled Down */}
      <section className="py-10 sm:py-14 lg:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white scroll-section">
        <div className="container mx-auto max-w-6xl">
          <div
            className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl"
            style={{ borderTop: '3px solid #1565d8', background: 'white' }}
          >
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Global Footprints — Measurable Impact, Trusted Reach
              </h2>
              <div
                className="w-full h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #1565d8 0%, #228be6 50%, transparent 100%)', maxWidth: '400px' }}
              ></div>
            </div>

            {/* Stats Grid */}
            <div
              className="relative p-4 sm:p-5 lg:p-6 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #0d3b66 0%, #1b4965 100%)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {/* Stat 1 */}
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-3">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                      <path d="M30 10C25 10 20 12 20 17C20 22 25 25 30 25C35 25 40 22 40 17C40 12 35 10 30 10Z" fill="#1565d8"/>
                      <path d="M15 25C12 25 10 27 10 30C10 33 12 35 15 35C18 35 20 33 20 30C20 27 18 25 15 25Z" fill="#228be6"/>
                      <path d="M45 25C42 25 40 27 40 30C40 33 42 35 45 35C48 35 50 33 50 30C50 27 48 25 45 25Z" fill="#228be6"/>
                      <path d="M30 30C25 30 20 32 20 37V45C20 47 22 50 30 50C38 50 40 47 40 45V37C40 32 35 30 30 30Z" fill="#1565d8"/>
                    </svg>
                  </div>
                  <CounterAnimation 
                    end={25} 
                    suffix="+"
                    className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Global University Partners
                  </p>
                  <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-3">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="20" r="8" fill="#1565d8"/>
                      <path d="M30 30C20 30 15 35 15 40V50H45V40C45 35 40 30 30 30Z" fill="#228be6"/>
                    </svg>
                  </div>
                  <CounterAnimation 
                    end={300} 
                    suffix="+"
                    className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Students in Mobility programs
                  </p>
                  <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-3">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                      <rect x="15" y="20" width="30" height="25" rx="3" fill="#228be6"/>
                      <rect x="20" y="15" width="20" height="5" fill="#1565d8"/>
                      <circle cx="30" cy="32" r="5" fill="white"/>
                    </svg>
                  </div>
                  <CounterAnimation 
                    end={100} 
                    suffix="+"
                    className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Online visiting faculty
                  </p>
                  <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {/* Stat 4 */}
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-3">
                    <Globe className="w-10 h-10 text-[#1565d8]" />
                  </div>
                  <CounterAnimation 
                    end={10} 
                    suffix="+"
                    className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Countries Engaged
                  </p>
                  <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
                </div>

                {/* Stat 5 */}
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="flex justify-center mb-3">
                    <Calendar className="w-10 h-10 text-[#1565d8]" />
                  </div>
                  <CounterAnimation 
                    end={250} 
                    suffix="+"
                    className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                  />
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Global activities
                  </p>
                  <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
                </div>
              </div>

              {/* Stat 6 - Full Width */}
              <div className="bg-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center max-w-xl mx-auto">
                <div className="flex justify-center mb-3">
                  <BookOpen className="w-10 h-10 text-[#1565d8]" />
                </div>
                <CounterAnimation 
                  end={10} 
                  suffix="+"
                  className="text-gray-900 mb-2 text-3xl sm:text-4xl font-bold"
                />
                <p className="text-gray-700 text-sm sm:text-base font-semibold">
                  Joint Research Projects
                </p>
                <div className="w-16 h-0.5 mx-auto mt-2 rounded-full bg-[#1565d8]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Professional Grid Layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 scroll-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1565d8] to-[#228be6] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Coimbatore Link */}
            <a href="#" className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1565d8] to-[#228be6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1565d8]/10 to-[#228be6]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-[#1565d8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coimbatore, India</h3>
                <p className="text-gray-600 text-sm mb-4">Discover our vibrant campus city and its rich cultural heritage</p>
                <div className="flex items-center text-[#1565d8] font-semibold">
                  <span className="text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>

            {/* Newsletter Link */}
            <a href="#" className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1565d8] to-[#228be6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1565d8]/10 to-[#228be6]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-[#1565d8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">Stay updated with our latest news and opportunities</p>
                <div className="flex items-center text-[#1565d8] font-semibold">
                  <span className="text-sm">Subscribe</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>

            {/* Events Link */}
            <a href="#" className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1565d8] to-[#228be6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1565d8]/10 to-[#228be6]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-[#1565d8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upcoming Events</h3>
                <p className="text-gray-600 text-sm mb-4">Join our international conferences and workshops</p>
                <div className="flex items-center text-[#1565d8] font-semibold">
                  <span className="text-sm">View Calendar</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>

            {/* Visitors Link */}
            <a href="#" className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1565d8] to-[#228be6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1565d8]/10 to-[#228be6]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#1565d8]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">International Visitors</h3>
                <p className="text-gray-600 text-sm mb-4">Information for our global guests and partners</p>
                <div className="flex items-center text-[#1565d8] font-semibold">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white scroll-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose K-GEO?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support for international engagement and global learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1565d8]/10 to-[#228be6]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1565d8]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-section"
        style={{ background: 'linear-gradient(135deg, #1b2840 0%, #1565d8 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
          <Calendar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Go Global?
          </h2>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Connect with our team to explore international opportunities and take your education to
            the next level
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4">
            <a
              href="mailto:global@kumaraguru.in"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1565d8] rounded-[10px] hover:bg-gray-100 transition-all w-full sm:w-auto"
              style={{ fontSize: 'clamp(16px, 2.2vw, 18px)', fontWeight: '600' }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-[10px] hover:bg-white/10 transition-all w-full sm:w-auto"
              style={{ fontSize: 'clamp(16px, 2.2vw, 18px)', fontWeight: '600' }}
            >
              About K-GEO
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 scroll-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our latest partnerships, events, and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                date: 'Oct 15, 2025',
                title: 'New Partnership with European Universities',
                desc: 'Exciting collaboration opportunities for students and faculty',
              },
              {
                date: 'Oct 10, 2025',
                title: 'Study Abroad Fair 2025',
                desc: 'Meet representatives from partner universities worldwide',
              },
              {
                date: 'Oct 5, 2025',
                title: 'International Research Symposium',
                desc: 'Showcasing collaborative research projects and findings',
              },
            ].map((update, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-[#1565d8] uppercase tracking-wide mb-4">
                  {update.date}
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 line-clamp-3">
                  {update.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1565d8] hover:gap-3 transition-all"
                  style={{ fontSize: '16px', fontWeight: '500' }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
