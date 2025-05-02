import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import backgroundImage from '../image.png';
import Login from './components/Login';
import FindJobs from './components/FindJobs';
import BrowseJobs from './components/BrowseJobs';
const App = () => {
  const categories = [
    { name: "Design", jobs: 235 },
    { name: "Sales", jobs: 756 },
    { name: "Marketing", jobs: 140 },
    { name: "Finance", jobs: 325 },
    { name: "Technology", jobs: 436 },
    { name: "Engineering", jobs: 542 },
    { name: "Business", jobs: 211 },
    { name: "Human Resource", jobs: 346 },
  ];

  const featuredJobs = [
    { logo: '🅁', title: 'Email Marketing', company: 'Revolut • Madrid, Spain', description: 'Revolut is looking...', tags: ['Marketing', 'Design'] },
    { logo: '🗂️', title: 'Brand Designer', company: 'Dropbox • San Francisco, US', description: 'Dropbox is looking...', tags: ['Design', 'Business'] },
    { logo: '⚫', title: 'Email Marketing', company: 'Pitch • Berlin, Germany', description: 'Pitch is looking...', tags: ['Marketing'] },
    { logo: '🟢', title: 'Visual Designer', company: 'Blinkist • Granada, Spain', description: 'Blinkist is looking...', tags: ['Design'] },
    { logo: '🔵', title: 'Product Designer', company: 'ClassPass • Manchester, UK', description: 'ClassPass is looking...', tags: ['Marketing', 'Design'] },
    { logo: '🟢', title: 'Lead Designer', company: 'Canva • Ontario, Canada', description: 'Canva is looking...', tags: ['Design', 'Business'] },
    { logo: '🖤', title: 'Brand Strategist', company: 'GoDaddy • Marseille, France', description: 'GoDaddy is looking...', tags: ['Marketing'] },
    { logo: '🔷', title: 'Data Analyst', company: 'Twitter • San Diego, US', description: 'Twitter is looking...', tags: ['Technology'] }
  ];

  const steps = [
    { number: '01.', title: 'Create An Account', text: 'Post A Job To Tell Us About Your Project...' },
    { number: '02.', title: 'Search Jobs', text: 'Find the perfect fit for your skills and goals...' },
    { number: '03.', title: 'Save & Apply Jobs', text: 'Easily save and apply to your favorite jobs...' },
  ];

  const tips = [
    { date: "August 9, 2025", title: "Attract Sales And Profits", text: "A job ravenously while Far much that one rank beheld after outside....", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df" },
    { date: "April 30, 2025", title: "5 Tips For Your Job Interviews", text: "Think back over your life. Think about the people that had a....", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9jmhBuQxUDM11iVWvYM3GuahXbBv-QprcA&s" },
    { date: "March 11, 2025", title: "An Overworked Newspaper Editor", text: "Ravenously while Far much that one rank beheld after outside ignobly more....", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path='/browse-jobs' element={<BrowseJobs/>} />

        <Route path="/" element={
          <div>
            <div className="background-container" style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%',
              position: 'relative',
            }}>
              <nav className="navbar">
                <ul className="nav-links">
                  <li><Link to="/find-jobs">Find Jobs</Link></li>
                  <li><Link to="/browse-jobs">Browse Companies</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </nav>
              <div className="left-heading">
                <h1>Discover More than 5000+ Jobs</h1>
                <p>Great platform for the job seeker that’s searching for new career heights and passionate about startups.</p>
              </div>
            </div>
            <div className="category-section">
              <div className="section-title">
                <h2>Explore by <span className="highlight">category</span></h2>
                <Link className="show-all" to="/find-jobs">Show all jobs →</Link>
              </div>
              <div className="category-grid">
                {categories.map((cat, index) => (
                  <div key={index} className="category-card">
                    <h3>{cat.name}</h3>
                    <p>{cat.jobs} jobs available →</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="steps-section">
              <h2 className="steps-heading">Choose What You Need</h2>
              <p className="steps-subheading">Find the right opportunity, the right talent, and the perfect match — all in one place.</p>
              <div className="steps-grid">
                {steps.map((step, index) => (
                  <div key={index} className="step-card">
                    <h3 className="step-number">{step.number}</h3>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-jobs-section">
              <div className="section-title">
                <h2><span className="bold">Featured</span> <span className="highlight">jobs</span></h2>
                <Link className="show-all" to="/find-jobs">Show all jobs →</Link>
              </div>
              <div className="jobs-grid">
                {featuredJobs.map((job, index) => (
                  <div key={index} className="job-card">
                    <div className="job-header">
                      <div className="job-logo">{job.logo}</div>
                      <span className="job-type">Full Time</span>
                    </div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                    <p className="job-description">{job.description}</p>
                    <div className="job-tags">
                      {job.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="job-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="career-tips-section">
              <h2 className="career-heading">Quick Career Tips</h2>
              <p className="career-subheading">Found by employers communicate directly with hiring managers and recruiters.</p>
              <div className="career-cards">
                {tips.map((tip, index) => (
                  <div key={index} className="career-card">
                    <img src={tip.image} alt="Career Tip" className="career-image" />
                    <div className="career-content">
                      <p className="career-date">{tip.date}</p>
                      <h3 className="career-title">{tip.title}</h3>
                      <p className="career-text">{tip.text}</p>
                      <Link to="#" className="career-readmore">Read More →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-cta">
              <h2>Got a question?</h2>
              <p>We're here to help. Check out our FAQs, send us an email or call us at 1 (800) 555-5555</p>
            </div>
            <footer className="site-footer">
              <div className="footer-container">
                <div className="footer-brand">
                  <h3>Jobhunt</h3>
                  <p>Collin Street West, Victor 8007, Australia.</p>
                  <p>+1 246-345-0695</p>
                  <p>info@jobhunt.com</p>
                  <div className="footer-socials">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-dribbble"></i>
                    <i className="fab fa-google-plus-g"></i>
                  </div>
                </div>
                <div className="footer-links">
                  <h4>Frequently Asked Questions</h4>
                  <ul>
                    <li>Privacy & Security</li>
                    <li>Terms of Service</li>
                    <li>Communications</li>
                    <li>Referral Terms</li>
                    <li>Lending Licenses</li>
                    <li>Disclaimers</li>
                    <li>Support</li>
                    <li>How It Works</li>
                    <li>For Employers</li>
                    <li>Underwriting</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h4>Find Jobs</h4>
                  <ul>
                    <li>US Jobs</li>
                    <li>Canada Jobs</li>
                    <li>UK Jobs</li>
                    <li>Emplois en France</li>
                    <li>Jobs in Deutschland</li>
                    <li>Vacatures China</li>
                  </ul>
                </div>
                <div className="footer-apps">
                  <button className="app-btn apple"> App Store<br /><span>Available now on the</span></button>
                  <button className="app-btn google">▶ Google Play<br /><span>Get in on</span></button>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2018 JobHunt. All rights reserved. Design by Madras Themes</p>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;

