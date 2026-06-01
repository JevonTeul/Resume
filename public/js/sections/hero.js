export function renderHero(data) {
  document.getElementById('hero').innerHTML = `
    <div class="hero-inner">
      <h1 class="hero-name">${data.name}</h1>
      <p class="hero-title">${data.title}</p>
      <p class="hero-summary">${data.summary}</p>
      <div class="hero-links">
        <a href="mailto:${data.email}">${data.email}</a>
        <a href="${data.github}" target="_blank">GitHub</a>
      </div>
    </div>
  `;
}