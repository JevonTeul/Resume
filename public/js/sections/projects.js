export function renderProjects(data) {
  const items = data.projects.map(p => `
    <div class="proj-item">
      <h3 class="proj-name">${p.name}</h3>
      <p class="proj-desc">${p.description}</p>
      <div class="proj-stack">
        ${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('projects').innerHTML = `
    <div class="section-inner">
      <h2 class="section-label">Projects</h2>
      ${items}
    </div>
  `;
}