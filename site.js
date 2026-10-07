document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadServerData();
  renderPublicSite(data);
  window.addEventListener("portfolioDataChanged", () => renderPublicSite(getPortfolioData()));
});

function renderPublicSite(data) {
  const profile = data.profile || {};
  document.querySelectorAll("[data-profile]").forEach(el => {
    const key = el.dataset.profile;
    if (profile[key] !== undefined) el.textContent = profile[key];
  });
  document.title = profile.name ? `${profile.name} | Computer Science Portfolio` : document.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && profile.bio) meta.setAttribute("content", profile.bio);

  const featured = document.getElementById("featuredProjects");
  if (featured) featured.innerHTML = (data.projects || []).filter(x => x.featured).slice(0, 3).map(projectCard).join("");
  const projects = document.getElementById("projectsGrid");
  if (projects) projects.innerHTML = (data.projects || []).map(projectCard).join("") || emptyState("No projects added yet.");
  const portfolio = document.getElementById("portfolioGrid");
  if (portfolio) portfolio.innerHTML = (data.portfolio || []).map(portfolioCard).join("") || emptyState("No portfolio items yet.");
  const services = document.getElementById("servicesGrid");
  if (services) services.innerHTML = (data.services || []).map(serviceCard).join("") || emptyState("No services added yet.");
  const skills = document.getElementById("skillsGrid");
  if (skills) skills.innerHTML = (data.skills || []).map(skillCard).join("") || emptyState("No skills added yet.");
  const blog = document.getElementById("blogGrid");
  if (blog) blog.innerHTML = (data.posts || []).map(blogCard).join("") || emptyState("No blog posts yet.");

  const stats = document.getElementById("projectCount");
  if (stats) stats.textContent = `${(data.projects || []).length}+`;
  const skillCount = document.getElementById("skillCount");
  if (skillCount) skillCount.textContent = `${(data.skills || []).length}+`;
}

function projectCard(p) {
  const img = p.image ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title || "Project image")}">` : `<span>${escapeHTML(p.category || "PROJECT")}</span>`;
  return `<article class="card"><div class="project-img">${img}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div class="tags">${(p.tech || []).map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div><div class="actions"><a class="btn small" href="${escapeHTML(p.demo || "#")}" target="_blank" rel="noopener">Demo</a><a class="btn small ghost" href="${escapeHTML(p.github || "#")}" target="_blank" rel="noopener">Code</a></div></article>`;
}
function portfolioCard(p) {
  const img = p.image ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title || "Portfolio image")}">` : `<span>${escapeHTML(p.category || "WORK")}</span>`;
  return `<article class="portfolio-item"><div>${img}<h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><a class="text-link" href="${escapeHTML(p.link || "#")}" target="_blank" rel="noopener">View project →</a></div></article>`;
}
function serviceCard(s) { return `<article class="card service-card"><div class="icon">${escapeHTML(s.icon || "✦")}</div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.description)}</p></article>`; }
function skillCard(s) { const n=Math.min(100,Math.max(0,Number(s.level)||0)); return `<div class="skill"><div><b>${escapeHTML(s.name)}</b><span>${n}%</span></div><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${n}"><i style="--w:${n}%"></i></div></div>`; }
function blogCard(p) { return `<article class="card"><small>${escapeHTML(p.date || "")} · ${escapeHTML(p.category || "")}</small><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.excerpt)}</p><details><summary>Read preview</summary><p>${escapeHTML(p.content)}</p></details></article>`; }

function emptyState(message) { return `<div class="card"><p>${escapeHTML(message)}</p></div>`; }
