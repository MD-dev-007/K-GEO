import { useEffect, useState } from 'react';
import { CheckCircle, Mail, MapPin } from 'lucide-react';
import heroImage from '../../assets/NUS 2024.jpg';
import image1 from '../../assets/K-GEO-3 (1).JPG';

export function KIOutbound() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '', program: '', year: '', email: '', phone: '', interest: '',
    destination: '', semesterOption: '', projectArea: '', immersionTheme: '', message: ''
  });

  const testimonials = [
    { text: "My semester in Germany taught me to think like a global citizen.", author: "Ananya, BBA" },
    { text: "The friendships I formed in Spain are still my global family.", author: "Rohit, CSE" },
    { text: "In Japan, I learned design thinking in 10 days — and made friends for life.", author: "Harini, Mechanical Engg" },
    { text: "My summer in Poland opened my eyes to European culture and innovation.", author: "Shreya, BBA" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      <style>{`.scroll-animate{opacity:0;transform:translateY(30px);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}.scroll-animate.visible{opacity:1;transform:translateY(0)}`}</style>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="KI Outbound" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Global Opportunities</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">KI Outbound Programs</h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
            Broaden Your Classroom, Transform Your World
          </p>
        </div>
      </section>

      {/* Study Abroad */}
      <section className="py-20 px-6 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1565d8]/10 to-[#228be6]/10 rounded-full">
                <span className="text-[#1565d8] font-semibold text-sm">Study Abroad</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Study Abroad <br></br>(Semester / Year)</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Imagine walking into a lecture hall in Paris, Berlin, or Melbourne; debating ideas with peers from across continents. A semester or year abroad is not just a chapter in your education — it's a story you'll tell for life.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-[#1565d8]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {['Credit transfers with partner universities', 'Pre-departure & visa support', 
                    'Accommodation + health & safety care', 'Mentorship & academic advising'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#1565d8] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Do It?</h3>
                <ul className="space-y-4">
                  {['Experience diverse teaching & research systems', 'Build adaptability, intercultural communication',
                    'Gain CV credibility with global experience', 'Build international friendships & networks'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#228be6] mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1b2840] to-[#1565d8] p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                {['Apply through K-GEO portal', 'Attend pre-departure orientation', 
                  'Travel, study, and immerse yourself', 'Return & integrate credits'].map((step, i) => (
                  <div key={i} className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <p className="text-white/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply for Study Abroad</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="program" placeholder="Program at KCT/KCLAS/KIA" value={formData.program} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="destination" placeholder="Preferred Destination" value={formData.destination} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <select name="semesterOption" value={formData.semesterOption} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition">
                <option value="">Select Semester/Year</option>
                <option value="semester">Semester</option>
                <option value="year">Year</option>
              </select>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#228be6] hover:from-[#1b4965] hover:to-[#1565d8] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white scroll-animate">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Voices</h3>
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <p className="text-xl text-gray-700 italic mb-6 text-center">"{testimonials[currentTestimonial].text}"</p>
            <p className="text-[#1565d8] font-semibold text-center">— {testimonials[currentTestimonial].author}</p>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-[#1565d8] w-8' : 'bg-gray-300 w-2'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Internship Section */}
      <section className="py-20 px-6 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1565d8]/10 to-[#228be6]/10 rounded-full mb-4">
              <span className="text-[#1565d8] font-semibold text-sm">Projects & Internships</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects / Internship (Semester / Year)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Collaborate Across Borders on Real Challenges</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The world's biggest challenges — climate change, digital disruption, inequality — don't stop at borders. Why should learning? Through international project collaborations, you'll work with peers and faculty abroad to co-create solutions that matter.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-[#1565d8]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {['Joint projects with global faculty mentorship', 'Access to labs, resources, and datasets abroad',
                    'Cross-institutional teamwork', 'Funding & publication opportunities'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#1565d8] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Do It?</h3>
                <ul className="space-y-3">
                  {['Deepen expertise through applied, real-world research', 'Gain global teamwork and project management skills',
                    'Publish, present, and co-create new knowledge', 'Build credentials that open doors to PhD or global careers'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#228be6] mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img src={image1} alt="International Projects" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="bg-gradient-to-br from-[#1b2840] to-[#1565d8] p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                {['Submit project proposal via K-GEO (faculty support required)', 'Work in cross-country teams (on-site/virtual)',
                  'Interim reviews with mentors', 'Final showcase / publication'].map((step, i) => (
                  <div key={i} className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <p className="text-white/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Urban Pollution Project</h4>
              <p className="text-gray-600">India + Germany → joint mitigation plans</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Digital Health</h4>
              <p className="text-gray-600">App designed with Latin American university tested across two campuses</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply for Project/Internship</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="program" placeholder="Department/Program" value={formData.program} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="projectArea" placeholder="Project Interest Area" value={formData.projectArea} onChange={handleChange} required
                className="md:col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#228be6] hover:from-[#1b4965] hover:to-[#1565d8] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Customized Courses Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1565d8]/10 to-[#228be6]/10 rounded-full mb-4">
              <span className="text-[#1565d8] font-semibold text-sm">Short-Term Programs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Customized Courses (1–3 Weeks)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Immerse, Explore, Experience — Globally in Weeks</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            1 – 3 weeks. One city. The course will be aligned with a module of your study with concentrated doses of global learning: morning classes, afternoon cultural visits, evenings with new friends, and weekends exploring a new country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {title: 'Academic Workshops', desc: 'Short courses & specialized training'},
              {title: 'Industry Visits', desc: 'Field exposure & practical learning'},
              {title: 'Cultural Trips', desc: 'Homestays & campus life abroad'},
              {title: 'Peer Interaction', desc: 'Connect with local students'}
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-[#1b2840] to-[#1565d8] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Why Do It?</h3>
              <ul className="space-y-4">
                {['Try global learning without semester-long commitment', 'Boost your CV with short international exposure',
                  'Build confidence and intercultural awareness', 'Gateway to longer study abroad journeys'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-[#1565d8]">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              {['Choose immersion program (1–3 weeks)', 'Apply with short essay + faculty reference',
                'Attend pre-departure cultural briefing', 'Fly out, learn, explore, and return with memories + reflections'].map((step, i) => (
                <div key={i} className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-[#1565d8] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply for Customized Course</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="year" placeholder="Year & Course" value={formData.year} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <select name="immersionTheme" value={formData.immersionTheme} onChange={handleChange} required
                className="md:col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition">
                <option value="">Preferred Immersion Theme</option>
                <option value="sustainability">Sustainability</option>
                <option value="culture">Culture</option>
                <option value="innovation">Innovation</option>
              </select>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#228be6] hover:from-[#1b4965] hover:to-[#1565d8] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* International Summer Schools Section */}
      <section className="py-20 px-6 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1565d8]/10 to-[#228be6]/10 rounded-full mb-4">
              <span className="text-[#1565d8] font-semibold text-sm">Summer Programs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">International Summer Schools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Spend Your Summer Abroad. Learn, Travel, Transform.</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            Imagine spending your summer at a leading university overseas — attending classes in the morning, exploring historic streets in the afternoon, and making friends from across the globe at night. International Summer Schools are your chance to combine academics, travel, and culture in a 2–6 week program hosted by Kumaraguru's global partners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {title: 'Thematic Courses', desc: 'Entrepreneurship, Sustainability, Culture, AI, Innovation, Policy, Design'},
              {title: 'Global Exposure', desc: 'Study with peers from Europe, Asia, and beyond'},
              {title: 'Partner Universities', desc: 'Top institutions in UK, Germany, Singapore, Poland, South Korea'},
              {title: 'End-to-End Support', desc: 'Application guidance, visa help, travel coordination'},
              {title: 'Accommodation & Safety', desc: 'On-campus housing or homestays with 24/7 support'},
              {title: 'Why Join?', desc: 'Experience global classroom, add credentials, explore cultures'}
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1b2840] to-[#1565d8] p-10 rounded-2xl text-white shadow-2xl mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {num: '1', title: 'Explore Programs', desc: 'Browse summer school offerings'},
                {num: '2', title: 'Apply via K-GEO', desc: 'Submit application, SOP, transcript'},
                {num: '3', title: 'Get Prepared', desc: 'Pre-departure orientation'},
                {num: '4', title: 'Travel & Learn', desc: 'Academic + cultural immersion'},
                {num: '5', title: 'Return & Reflect', desc: 'Share learnings back home'}
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.num}</span>
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-white/80 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Expression of Interest</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="program" placeholder="Program" value={formData.program} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="destination" placeholder="Preferred Destination" value={formData.destination} onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#228be6] hover:from-[#1b4965] hover:to-[#1565d8] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Submit Interest
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Global Future Centre Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1565d8]/10 to-[#228be6]/10 rounded-full mb-4">
              <span className="text-[#1565d8] font-semibold text-sm">Counseling & Support</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Global Future Centre</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Let's Talk. Let's Connect. Let's Dream Together.</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            Every global journey begins with a conversation. Whether you're dreaming of Paris, Singapore, or Toronto, the first step is meeting us. Our team at K-GEO will help you navigate your options, your questions, and your masters pathway.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {title: '1:1 Counseling', desc: 'Personal guidance tailored to your goals'},
              {title: 'Info Sessions', desc: 'Explore destinations, funding, timelines'},
              {title: 'Peer Panels', desc: 'Hear directly from seniors who studied abroad'},
              {title: 'Pre-Application Training', desc: 'SOP writing, resume prep, visa workshops'}
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                <h3 className="text-lg font-bold text-[#1565d8] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1b2840] to-[#1565d8] p-8 rounded-2xl text-white shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">How to Join</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Register on K-GEO portal (choose counseling slot)', 'Upload basic profile (CV, transcripts if ready)',
                'Meet us — in person or virtually', 'Begin your mobility journey!'].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white/90 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Counseling Slot</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <input type="text" name="year" placeholder="Course & Year" value={formData.year} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <select name="interest" value={formData.interest} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition">
                <option value="">Area of Interest</option>
                <option value="study-abroad">Study Abroad</option>
                <option value="internship">Internship</option>
                <option value="projects">Projects</option>
                <option value="immersion">Immersion</option>
              </select>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1565d8] focus:border-transparent transition" />
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#228be6] hover:from-[#1b4965] hover:to-[#1565d8] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Book Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1b2840] to-[#1565d8] text-white scroll-animate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl mb-8">Connect with K-GEO to explore your international opportunities</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <span>global@kumaraguru.in</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>K-GEO Office, Kumaraguru Campus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
