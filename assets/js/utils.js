const _ = el => document.querySelector(el)

/**
 *  Debug data
 */
const debug = arr => {
    let json = JSON.stringify(arr, true, 2);
    console.log('========= Debug Javascript ==========');
    console.log(json);
    console.log('=====================================');
}


// buttons
const inputSearch = _('.input-search');
const searchSnippet = _('#searchSnippet');
const newSnippet = _('#newSnippet');
const saveSnippet = _('#saveSnippet');
const deleteSnippet = _('#deleteSnippet');
const infoSnippet = _('#infoSnippet');
const cancel = _('#cancel');
const modal = _('#modal');
const modalTitle = _('.modal-title');
const modalContent = _('.modal-content');
const overlay = _('#overlay');
const copySnippet = _('#copySnippet');
const loader = _('#loader');


// inizialize editor
let codeEditor = '';
let snippetUid = 1;


/**
 *  Init Codemirror
 */
function initEditor() {
    codeEditor = CodeMirror.fromTextArea(window.editor, {
        lineNumbers: true,
        lineWrapping: true,
        tabMode: "indent",
        theme: "seti",
        mode: "text/x-textile"
    });
}


/**
 *  new Snippet template
 */
const newSnippetTpl = `
  <p><input type="text" id="title" placeholder="The title"/></p>
  <p><select id="syntax">
    <option value="javascript">Javascript</option>
    <option value="vue">Vue</option>
    <option value="python">Python</option>
    <option value="php">Php</option>
    <option value="lua">Lua</option>
    <option value="markdown">Markdown</option>
    <option value="css">Css</option>
    <option value="scss">Scss</option>
    <option value="less">Less</option>
    <option value="html">Html</option>
    <option value="c++">C++</option>
    <option value="java">Java</option>
  </select></p>
  <p><textarea id="description" placeholder="The title"></textarea></p>
  <p><button onclick="return formNewSnippet()" class="formSave">Save</button></p>
`;

/**
 *  Snippets template
 */
function snippet(args) {
    return `<a class="snippet" href="#" onclick="getSnippetContent(${args.uid},this)" data-uid="${args.uid}">
        <div class="snippet-title">${args.title}</div>
        <div class="snippet-description">${args.description}</div>
        <div class="snippet-type"><b>Syntax: </b> ${args.syntax}</div>
    </a>`
}

function clearActive() {
    let elems = document.querySelectorAll("#app-sidebar-content a[data-uid]");
    Array.from(elems).forEach(item => {
        item.classList.remove("active");
    });
}


/**
 *  Get snippets in sidebar
 */
function getSnippets() {
    _('#app-sidebar-content').innerHTML = '<p>Loading..</p>';
    let w = setTimeout(() => {
        return pywebview.api.init('Get snippets')
            .then(r => {
                _('#app-sidebar-content').innerHTML = '';
                Array.from(r).forEach(item => {
                    _('#app-sidebar-content').innerHTML += snippet(item);
                });
            });
        clearTimeout(w)
    }, 500);
}

/**
 *  Filter title or syntax
 */
function filterSnippets(event) {
    let w = setTimeout(() => {
        _('#app-sidebar-content').innerHTML = '<p>Loading..</p>';
        pywebview.api.filter_snippet(event)
            .then(resp => {
                _('#app-sidebar-content').innerHTML = '';
                Array.from(resp).forEach(item => {
                    _('#app-sidebar-content').innerHTML += snippet(item);
                });
            });
        clearTimeout(w)
    }, 500);
}


/**
 * Set editor mode
 */
function checkEditorMode(attr) {
    // default mode
    let mode = 'text/markdown';

    attr = attr.toLowerCase();

    switch (attr) {
        case 'javascript':
            mode = 'text/javascript'
            break;
        case 'vue':
            mode = 'text/x-vue'
            break;
        case 'python':
            mode = 'text/x-python'
            break;
        case 'php':
            mode = 'application/x-httpd-php'
            break;
        case 'lua':
            mode = 'text/x-lua'
            break;
        case 'markdown':
            mode = 'text/x-markdown'
            break;
        case 'css':
            mode = 'text/css'
            break;
        case 'scss':
            mode = 'text/x-scss'
            break;
        case 'less':
            mode = 'text/x-less'
            break;
        case 'html':
            mode = 'text/html'
            break;
        case 'c++':
            mode = 'text/x-c++src'
            break;
        case 'java':
            mode = 'text/x-java'
            break;
    }

    return mode;
}

/**
 *  Get content of snippet on editor
 */
function getSnippetContent(uid, elem) {

    codeEditor.setValue('loading....');

    let w = setTimeout(() => {
        pywebview.api.get_snippet(uid)
            .then(resp => {
                // set modal info
                setModalInfo({
                    title: resp.data.title,
                    description: resp.data.description,
                    syntax: resp.data.syntax,
                    date: resp.data.date
                });

                // set mode 
                let mode = checkEditorMode(resp.data.syntax);

                // set content
                codeEditor.setValue(atob(resp.data.content));
                codeEditor.setOption('mode', mode);

                // set uid
                snippetUid = resp.data.uid;
                // make avtive
                clearActive();
                // make current snippet active
                _('a[data-uid="'+snippetUid+'"]').classList.add('active');
            });

        clearTimeout(w);
    }, 100)
}

/**
 *  Set Snippet info on modal
 */
function setModalInfo(arr) {
    // now write content
    modalTitle.innerHTML = arr.title;
    modalContent.innerHTML = `<p>${arr.description}</p>
    <p><b>Syntax: </b> ${arr.syntax}</p>
    <p><b>Date: </b> ${arr.date}</p>`;
}


function formNewSnippet() {
    let title = _('#title');
    let description = _('#description');
    let syntax = _('#syntax');

    if (title.value.length > 2) {
        let data = {
            title: title.value,
            description: description.value,
            syntax: syntax.value
        }
        pywebview.api.set_snippet(data)
            .then(resp => {
                if (resp.status) {
                    getSnippets();

                    // on hide get current Snippet
                    getSnippetContent(snippetUid);

                    overlay.classList.remove('show');
                    modal.classList.remove('show');
                    // first empty content
                    modalTitle.innerHTML = '';
                    modalContent.innerHTML = '';
                }
            });
    } else {
        alert('Please provide a title');
    }

}

function createNewSnippet() {
    // now write content
    modalTitle.innerHTML = 'Create new Snippet';
    modalContent.innerHTML = newSnippetTpl;

    overlay.classList.add('show');
    modal.classList.add('show');

    cancel.addEventListener('click', e => {
        overlay.classList.remove('show');
        modal.classList.remove('show');
        // first empty content
        modalTitle.innerHTML = '';
        modalContent.innerHTML = '';
        // reload current snippet
        getSnippetContent(snippetUid);
    }, false);
}