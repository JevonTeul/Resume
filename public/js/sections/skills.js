export function renderSkills(data) {
  const groups = Object.entries(data.skills).map(([group, items]) => `
    <div class="skill-group">
      <p class="skill-group-label">${group}</p>
      <div class="skill-tags">
        ${items.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('skills').innerHTML = `
    <div class="section-inner">
      <h2 class="section-label">Skills</h2>
      <div class="skills-grid">${groups}</div>
    </div>
  `;
}