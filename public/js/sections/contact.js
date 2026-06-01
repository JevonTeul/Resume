export function renderContact(data) {
  document.getElementById('contact').innerHTML = `
    <div class="section-inner">
      <h2 class="section-label">Contact</h2>
      <div class="contact-links">
        <a href="mailto:${data.email}">${data.email}</a>
        <a href="${data.github}" target="_blank">GitHub</a>
        <span>${data.location}</span>
      </div>
    </div>
  `;
}