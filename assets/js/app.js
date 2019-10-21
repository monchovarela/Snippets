/**
 *  Init app
 */
function initApp(){

    initEditor();
    getSnippets();

    let w = setTimeout(() => {
        getSnippetContent(snippetUid);
        clearTimeout(w);
    }, 500);

    // save data
    saveSnippet.addEventListener('click', e => {
        e.preventDefault();
        let content = btoa(codeEditor.getValue());
        let data = { uid: snippetUid, content: content };
        pywebview.api.put_snippet(JSON.stringify(data))
            .then(resp => {
                if (resp.status == false) {
                    alert('The Snippet is not updated');
                } else {
                    alert('The Snippet has been updated');
                }
            });
    }, false);

    // delete data
    deleteSnippet.addEventListener('click', e => {
        e.preventDefault();
        pywebview.api.del_snippet(snippetUid)
            .then(resp => {
                if (resp.status == true) {
                    getSnippets();
                    getSnippetContent(1);
                }
                return false;
            });
    }, false);

    // create niew snippet
    newSnippet.addEventListener('click', e => {
        e.preventDefault();
        return createNewSnippet();
    }, false);


    // show & hide methods
    infoSnippet.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('show');
        modal.classList.add('show');
    }, false);

    cancel.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.remove('show');
        modal.classList.remove('show');
        // first empty content
        modalTitle.innerHTML = '';
        modalContent.innerHTML = '';
        // reload current snippet
        getSnippetContent(snippetUid);
    }, false);


    searchSnippet.addEventListener('click', e => {
        e.preventDefault();
        inputSearch.classList.toggle('hide');
    }, false);


    inputSearch.addEventListener('keyup', event => {
        // press enter
        if (event.which == 13 || event.keyCode == 13) {
            inputSearch.classList.toggle('hide');
            inputSearch.value = "";
            getSnippets();
            return false;
        }
        // more than 2 letters
        if (event.target.value.length > 2) {
            filterSnippets(event.target.value);
            return false;
        } else if (event.target.value.length < 1) {
            getSnippets();
            return false;
        }

        return true;
    });

    _('.CodeMirror').addEventListener('click', e => {
        inputSearch.classList.add('hide');
        inputSearch.value = "";
        return false;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initApp();
    let waitForLoader = setTimeout(() => {
        loader.style.display = 'none';
        clearTimeout(waitForLoader);
    },2000);
});