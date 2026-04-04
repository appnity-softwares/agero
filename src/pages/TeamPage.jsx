import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import OurValues from '../components/OurValues.jsx';
import JoinOurTeam from '../components/JoinOurTeam.jsx';
import LetsConnect from '../components/LetsConnect.jsx';
import TeamSplitScreen from '../components/TeamSplitScreen.jsx';
import SEOHead from '../components/SEOHead.jsx';
import { ArrowDown } from 'lucide-react';

const TeamPage = () => {
  return (
    <div className="bg-[#f3f3f3] selection:bg-black selection:text-white min-h-screen">
      <SEOHead title="The Collective - Appnity Studio" description="Meet the creative and technical architects behind Appnity's digital ecosystems." />

      {/* 🚀 THE SPLIT-SCREEN NARRATIVE */}
      <section className="relative">
        <TeamSplitScreen />
      </section>

      {/* 🏷️ OUR ARCHITECTURE (Values) */}
      <div className="relative z-10">
        <OurValues />
      </div>

      {/* 🌉 THE TRANSITION: VISIONARY FOOTER */}
      <div className="relative z-10">
        <JoinOurTeam />
        <LetsConnect />
      </div>
    </div>
  );
};

export default TeamPage;
