/**
 * doc-layout.js
 * Handles shared navigation and footer injection for documentation pages.
 */

const NAV_HTML = `
<nav class="top">
  <div class="inner">
    <a href="/" class="brand-mark">
      <div class="mark-box">GW</div>
      <span class="brand-meta">v1.0 // GW-CORE</span>
    </a>
    <ul>
      <li><a href="/index.html#briefing">Briefing</a></li>
      <li><a href="/index.html#capabilities">Capabilities</a></li>
      <li><a href="/index.html#code">Specimen</a></li>
      <li><a href="/index.html#specs">Specs</a></li>
      <li><a href="/index.html#install">Deploy</a></li>
      <li><a href="/learn.html">Learn</a></li>
      <li><a href="/playground.html">Playground</a></li>
      <li><a href="/tools.html">Tools</a></li>
      <li><a href="/community.html">Community</a></li>
    </ul>
    <a href="/index.html#install" class="nav-cta">Get GW</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="top-grid">
      <div class="brand-block">
        <div class="lockup">GW</div>
        <p class="desc">
          A tactical systems programming language.
          Single-pass JIT, three-tier safety, comptime everything, cross-compile to anything.
          One toolchain. <span style="color:var(--cyan-primary)">Mission complete.</span>
        </p>
      </div>

      <div class="col">
        <h4>Documentation</h4>
        <ul>
          <li><a href="/docs/language-reference.html">Language Reference</a></li>
          <li><a href="/docs/standard-library.html">Standard Library</a></li>
          <li><a href="/docs/comptime-guide.html">Comptime Guide</a></li>
          <li><a href="/docs/borrow-checker.html">Borrow Checker</a></li>
          <li><a href="/docs/abi-specification.html">ABI Specification</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>Tooling</h4>
        <ul>
          <li><a href="/tools.html">Overview</a></li>
          <li><a href="/docs/gw-cli.html">gw CLI</a></li>
          <li><a href="/docs/gw-repl.html">gw repl</a></li>
          <li><a href="/docs/gw-pkg.html">gw pkg</a></li>
          <li><a href="/docs/lsp-editor.html">LSP / Editor Plugins</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>Channels</h4>
        <ul>
          <li><a href="/community.html">Community</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Mailing List</a></li>
          <li><a href="#">Roadmap</a></li>
        </ul>
      </div>
    </div>

    <div class="stamp">
      <div class="left">© 2026 // GW LANGUAGE PROJECT</div>
      <div class="center">▶ Tactical Systems // SYSTEM DIVISION</div>
      <div class="right">BUILD 1.0.0 // gw abc1234</div>
    </div>
  </div>
</footer>
`;

export function initLayout() {
  const navContainer = document.getElementById('doc-nav');
  const footerContainer = document.getElementById('doc-footer');

  if (navContainer) {
    navContainer.innerHTML = NAV_HTML;
    
    // Set active state for docs link if we are in /docs/
    if (window.location.pathname.includes('/docs/')) {
        const docLinks = navContainer.querySelectorAll('nav.top ul li a');
        docLinks.forEach(link => {
            if (link.textContent === 'Docs') link.classList.add('active');
        });
    }
  }

  if (footerContainer) {
    footerContainer.innerHTML = FOOTER_HTML;
  }
}
