/**
 * doc-layout.js
 * Handles shared navigation and footer injection for documentation pages.
 */

const NAV_HTML = `
<nav class="top">
  <div class="inner">
    <a href="/" class="brand-mark">
      <div class="mark-box">GW</div>
      <span class="brand-meta">v1.0 // ARSENAL</span>
    </a>
    <ul>
      <li><a href="/#briefing">Briefing</a></li>
      <li><a href="/#capabilities">Capabilities</a></li>
      <li><a href="/#code">Specimen</a></li>
      <li><a href="/#specs">Specs</a></li>
      <li><a href="/#install">Install</a></li>
      <li><a href="/docs/language-reference.html">Docs</a></li>
      <li><a href="#">Source</a></li>
    </ul>
    <a href="/#install" class="nav-cta">Get Arsenal</a>
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
          <li><a href="/docs/arsenal-cli.html">arsenal CLI</a></li>
          <li><a href="/docs/codec-repl.html">codec REPL</a></li>
          <li><a href="/docs/cipher-package-mgr.html">cipher Package Mgr</a></li>
          <li><a href="/docs/lsp-editor.html">LSP / Editor Plugins</a></li>
          <li><a href="/docs/cross-compile.html">Cross-compile Targets</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>Channels</h4>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Mailing List</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Security</a></li>
        </ul>
      </div>
    </div>

    <div class="stamp">
      <div class="left">© 2026 // GW LANGUAGE PROJECT</div>
      <div class="center">▶ DIAMOND DOGS // ARSENAL DIVISION</div>
      <div class="right">BUILD 1.0.0 // codec abc1234</div>
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
