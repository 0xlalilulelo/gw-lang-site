import './style.css';
import './playground.css';

import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";
import { rust } from "@codemirror/lang-rust";
import { oneDark } from "@codemirror/theme-one-dark";

document.addEventListener('DOMContentLoaded', () => {
    
    // --- CodeMirror Setup ---
    const initialCode = `// GW Playground
// Edit code below and press Run

fn main() -> u0 {
    print("Mission complete.\\n");
    
    let target = "Production Server";
    print("▶ deploying to %\\n", target);
    
    // Test the JIT
    let calc = comptime { max(40, 2) };
    print("Answer: %\\n", calc);
}

fn max[T: any + Ord](a: T, b: T) -> T {
    if a.cmp(&b) > 0 then a else b
}
`;

    const initialState = EditorState.create({
        doc: initialCode,
        extensions: [
            basicSetup,
            rust(), // Using Rust syntax highlighting as a proxy for GW
            oneDark,
            EditorView.theme({
                "&": { height: "100%" },
                ".cm-scroller": { overflow: "auto" }
            })
        ]
    });

    const view = new EditorView({
        state: initialState,
        parent: document.getElementById("editor-container")
    });

    // --- Resizer Logic ---
    const resizer = document.getElementById('pg-resizer');
    const editorPane = document.querySelector('.pg-editor-pane');
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizer.classList.add('active');
        document.body.style.cursor = 'col-resize';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        // Handle vertical resize on mobile vs horizontal on desktop
        if (window.innerWidth <= 900) {
            const containerOffsetTop = document.querySelector('.pg-workspace').offsetTop;
            const newHeight = e.clientY - containerOffsetTop - 60; // offset for nav
            editorPane.style.height = `${newHeight}px`;
            editorPane.style.width = '100%';
        } else {
            const containerOffsetLeft = document.querySelector('.pg-workspace').offsetLeft;
            const newWidth = e.clientX - containerOffsetLeft;
            editorPane.style.width = `${newWidth}px`;
            editorPane.style.height = '100%';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizer.classList.remove('active');
            document.body.style.cursor = 'default';
        }
    });

    // --- Mock Execution Logic ---
    const runBtn = document.getElementById('btn-run');
    const clearBtn = document.getElementById('btn-clear');
    const consoleOutput = document.getElementById('console-output');

    const appendToConsole = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        consoleOutput.appendChild(div);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    };

    clearBtn.addEventListener('click', () => {
        consoleOutput.innerHTML = '';
    });

    runBtn.addEventListener('click', () => {
        if (runBtn.classList.contains('loading')) return;
        
        const code = view.state.doc.toString();
        const tier = document.getElementById('sel-tier').value;
        const mode = document.getElementById('sel-mode').value;
        
        runBtn.classList.add('loading');
        runBtn.querySelector('.icon').textContent = '↻';
        
        appendToConsole(`<br><span class="prompt">$</span> <span class="dim">gw build main.gw --tier=${tier} --mode=${mode}</span>`);
        appendToConsole(`<span class="dim">Compiling... (target: x86_64-unknown-linux-gnu)</span>`);

        // Mock delay
        setTimeout(() => {
            runBtn.classList.remove('loading');
            runBtn.querySelector('.icon').textContent = '▶';
            
            // Check for obvious syntax errors in mock
            if (code.includes('foxdie') || code.includes('arsenal')) {
                appendToConsole(`<span class="error">error:</span> obsolete syntax detected. Please use 'try' and 'gw'.`);
                appendToConsole(`<span class="error">aborting build.</span>`);
                return;
            }

            appendToConsole(`<span class="success">Build finished</span> in 0.04s`);
            appendToConsole(`<span class="prompt">$</span> <span class="dim">./main</span>`);
            
            // Mock output
            setTimeout(() => {
                appendToConsole(`<pre>Mission complete.
▶ deploying to Production Server
Answer: 40</pre>`);
            }, 100);
            
        }, 800);
    });
});
