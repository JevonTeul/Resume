import { renderHero } from './sections/hero.js';
import { renderExperience } from './sections/experience.js';
import { renderProjects } from './sections/projects.js';
import { renderSkills } from './sections/skills.js';
import { renderContact } from './sections/contact.js';

const data = await fetch('./data/resume.json').then(r => r.json());

renderHero(data);
renderExperience(data);
renderProjects(data);
renderSkills(data);
renderContact(data);

// Navbar
document.getElementById('navbar').innerHTML = `
  <div class="nav-inner">
    <span class="nav-name">${data.name}</span>
    <div class="nav-links">
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
`;