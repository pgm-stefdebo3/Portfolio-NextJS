import React from 'react';
import { NavBar, Card, Sphere, SkillList, Quote, TopButton, Contact } from '../components';
import ProjectList from '../components/Projects/ProjectList';
import Head from 'next/head';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>De Boeck Stef - Projects</title>
      </Head>
        <header>
            <NavBar pageName="Projects" />
        </header>
        <div className="main" style={{ background: '#0E0E0E' }}>
            <div className="container-md">  
                <ProjectList />
                <Contact />
            </div>
            <TopButton />
        </div>
    </div>
  );
};

export default Projects;