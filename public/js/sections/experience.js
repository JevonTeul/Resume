export function renderExperience(data) {
  const items = data.experience.map(job => `
    <div class="exp-item">
      <div class="exp-header">
        <span class="exp-role">${job.role}</span>
        <span class="exp-date">${job.date}</span>
      </div>
      <p class="exp-company">${job.company}</p>
      <ul class="exp-bullets">
        ${job.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  document.getElementById('experience').innerHTML = `
    <div class="section-inner">
      <h2 class="section-label">Experience</h2>
      ${items}
    </div>
  `;
}