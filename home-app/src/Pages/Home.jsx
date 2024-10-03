import React from 'react';
import NavigationBar from '../components/NavigationBar';
import LandingSection from '../components/LandingSection';
import Services from '../components/Services';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <LandingSection />
      <Services />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Home;
