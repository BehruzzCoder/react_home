import React from 'react';
import './styles.scss';

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">Product</div>
        <nav>
          <a href="#">Product</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Sign In</a>
          <button className="sign-up">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Work at the speed of thought</h1>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="cta-buttons">
          <button className="get-started">Get Started</button>
          <a href="#" className="watch-video">Watch the Video</a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400x600" alt="Hero Image" />
          <div className="people">
            <img src="https://via.placeholder.com/400x200" alt="People Group" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Product was Built Specifically for You</h2>
        <div className="feature-item">
          <img src="https://via.placeholder.com/50" alt="Icon 1" />
          <p>First click tests</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/50" alt="Icon 2" />
          <p>Design surveys</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/50" alt="Icon 3" />
          <p>Preference tests</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/50" alt="Icon 4" />
          <p>Five second tests</p>
        </div>
      </section>
    </div>
  );
};

export default App;