
var socket = io();
let parentDiv = document.querySelector('.cards-list')
let chatIdVal = ''
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit('chat message', input.value,roomId.value);
//     input.value = '';
//   }
// });

// socket.on('chat message', function(msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });
let commandArray = [{
    name: 'Format Document',
    command: 'editor.action.formatDocument',
    shortCut: 'Shift+Alt+F'
},
{
    name: 'Show Search',
    command: 'workbench.view.search',
    shortCut: 'Ctrl+Shift+F	'
},
{
    name: 'Toggle Integrated Terminal',
    command: 'workbench.action.terminal.toggleTerminal',
    shortCut: 'Ctrl+`'
},
{
    name: 'Format Selection',
    command: 'editor.action.formatSelection',
    shortCut: 'Ctrl+K Ctrl+F'
},
{
    name: 'Toggle Zen Mode',
    command: 'workbench.action.toggleZenMode',
    shortCut: 'Ctrl+K Z'
},
{
    name: 'Rename Symbol',
    command: 'editor.action.rename',
    shortCut: 'Alt+N'
},
{
    name: 'SaveAll Files',
    command: 'workbench.action.files.saveFiles',
    shortCut: 'Alt+N'
},
{
    name: 'Add Line Comment',
    command: 'editor.action.addCommentLine',
    shortCut: 'Ctrl+K Ctrl+C'
},
{
    name: 'Show All Commands',
    command: 'workbench.action.showCommands',
    shortCut: 'Ctrl+Shift+P or F1'
}

]
let additionalCommands = [
    {
        "name": "Cut line (empty selection)",
        "command": "editor.action.clipboardCutAction",
        "shortCut": "Ctrl+X"
    },
    {
        "name": "Copy line (empty selection)",
        "command": "editor.action.clipboardCopyAction",
        "shortCut": "Ctrl+C"
    },
    {
        "name": "Paste",
        "command": "editor.action.clipboardPasteAction",
        "shortCut": "Ctrl+V"
    },
    {
        "name": "Delete Line",
        "command": "editor.action.deleteLines",
        "shortCut": "Ctrl+Shift+K"
    },
    {
        "name": "Insert Line Below",
        "command": "editor.action.insertLineAfter",
        "shortCut": "Ctrl+Enter"
    },
    {
        "name": "Insert Line Above",
        "command": "editor.action.insertLineBefore",
        "shortCut": "Ctrl+Shift+Enter"
    },
    {
        "name": "Move Line Down",
        "command": "editor.action.moveLinesDownAction",
        "shortCut": "Alt+Down"
    },
    {
        "name": "Move Line Up",
        "command": "editor.action.moveLinesUpAction",
        "shortCut": "Alt+Up"
    },
    {
        "name": "Copy Line Down",
        "command": "editor.action.copyLinesDownAction",
        "shortCut": "Shift+Alt+Down"
    },
    {
        "name": "Copy Line Up",
        "command": "editor.action.copyLinesUpAction",
        "shortCut": "Shift+Alt+Up"
    },
    {
        "name": "Undo",
        "command": "undo",
        "shortCut": "Ctrl+Z"
    },
    {
        "name": "Redo",
        "command": "redo",
        "shortCut": "Ctrl+Y"
    },
    {
        "name": "Add Selection To Next Find Match",
        "command": "editor.action.addSelectionToNextFindMatch",
        "shortCut": "Ctrl+D"
    },
    {
        "name": "Move Last Selection To Next Find Match",
        "command": "editor.action.moveSelectionToNextFindMatch",
        "shortCut": "Ctrl+K Ctrl+D"
    },
    {
        "name": "Undo last cursor operation",
        "command": "cursorUndo",
        "shortCut": "Ctrl+U"
    },
    {
        "name": "Insert cursor at end of each line selected",
        "command": "editor.action.insertCursorAtEndOfEachLineSelected",
        "shortCut": "Shift+Alt+I"
    },
    {
        "name": "Select all occurrences of current selection",
        "command": "editor.action.selectHighlights",
        "shortCut": "Ctrl+Shift+L"
    },
    {
        "name": "Select all occurrences of current word",
        "command": "editor.action.changeAll",
        "shortCut": "Ctrl+F2"
    },
    {
        "name": "Select current line",
        "command": "expandLineSelection",
        "shortCut": "Ctrl+L"
    },
    {
        "name": "Insert Cursor Below",
        "command": "editor.action.insertCursorBelow",
        "shortCut": "Ctrl+Alt+Down"
    },
    {
        "name": "Insert Cursor Above",
        "command": "editor.action.insertCursorAbove",
        "shortCut": "Ctrl+Alt+Up"
    },
    {
        "name": "Jump to matching bracket",
        "command": "editor.action.jumpToBracket",
        "shortCut": "Ctrl+Shift+\\"
    },
    {
        "name": "Indent Line",
        "command": "editor.action.indentLines",
        "shortCut": "Ctrl+]"
    },
    {
        "name": "Outdent Line",
        "command": "editor.action.outdentLines",
        "shortCut": "Ctrl+["
    },
    {
        "name": "Go to Beginning of Line",
        "command": "cursorHome",
        "shortCut": "Home"
    },
    {
        "name": "Go to End of Line",
        "command": "cursorEnd",
        "shortCut": "End"
    },
    {
        "name": "Go to End of File",
        "command": "cursorBottom",
        "shortCut": "Ctrl+End"
    },
    {
        "name": "Go to Beginning of File",
        "command": "cursorTop",
        "shortCut": "Ctrl+Home"
    },
    {
        "name": "Scroll Line Down",
        "command": "scrollLineDown",
        "shortCut": "Ctrl+Down"
    },
    {
        "name": "Scroll Line Up",
        "command": "scrollLineUp",
        "shortCut": "Ctrl+Up"
    },
    {
        "name": "Scroll Page Down",
        "command": "scrollPageDown",
        "shortCut": "Alt+PageDown"
    },
    {
        "name": "Scroll Page Up",
        "command": "scrollPageUp",
        "shortCut": "Alt+PageUp"
    },
    {
        "name": "Fold (collapse) region",
        "command": "editor.fold",
        "shortCut": "Ctrl+Shift+["
    },
    {
        "name": "Unfold (uncollapse) region",
        "command": "editor.unfold",
        "shortCut": "Ctrl+Shift+]"
    },
    {
        "name": "Fold (collapse) all subregions",
        "command": "editor.foldRecursively",
        "shortCut": "Ctrl+K Ctrl+["
    },
    {
        "name": "Unfold (uncollapse) all subregions",
        "command": "editor.unfoldRecursively",
        "shortCut": "Ctrl+K Ctrl+]"
    },
    {
        "name": "Fold (collapse) all regions",
        "command": "editor.foldAll",
        "shortCut": "Ctrl+K Ctrl+0"
    },
    {
        "name": "Unfold (uncollapse) all regions",
        "command": "editor.unfoldAll",
        "shortCut": "Ctrl+K Ctrl+J"
    },
    {
        "name": "Add Line Comment",
        "command": "editor.action.addCommentLine",
        "shortCut": "Ctrl+K Ctrl+C"
    },
    {
        "name": "Remove Line Comment",
        "command": "editor.action.removeCommentLine",
        "shortCut": "Ctrl+K Ctrl+U"
    },
    {
        "name": "Toggle Line Comment",
        "command": "editor.action.commentLine",
        "shortCut": "Ctrl+/"
    },
    {
        "name": "Toggle Block Comment",
        "command": "editor.action.blockComment",
        "shortCut": "Shift+Alt+A"
    },
    {
        "name": "Find",
        "command": "actions.find",
        "shortCut": "Ctrl+F"
    },
    {
        "name": "Replace",
        "command": "editor.action.startFindReplaceAction",
        "shortCut": "Ctrl+H"
    },
    {
        "name": "Find Next",
        "command": "editor.action.nextMatchFindAction",
        "shortCut": "Enter"
    },
    {
        "name": "Find Previous",
        "command": "editor.action.previousMatchFindAction",
        "shortCut": "Shift+Enter"
    },
    {
        "name": "Select All Occurrences of Find Match",
        "command": "editor.action.selectAllMatches",
        "shortCut": "Alt+Enter"
    },
    {
        "name": "Toggle Find Case Sensitive",
        "command": "toggleFindCaseSensitive",
        "shortCut": "Alt+C"
    },
    {
        "name": "Toggle Find Regex",
        "command": "toggleFindRegex",
        "shortCut": "Alt+R"
    },
    {
        "name": "Toggle Find Whole Word",
        "command": "toggleFindWholeWord",
        "shortCut": "Alt+W"
    },
    {
        "name": "Toggle Use of Tab Key for Setting Focus",
        "command": "editor.action.toggleTabFocusMode",
        "shortCut": "Ctrl+M"
    },
    {
        "name": "Toggle Render Whitespace",
        "command": "toggleRenderWhitespace",
        "shortCut": "unassigned"
    },
    {
        "name": "Toggle Word Wrap",
        "command": "editor.action.toggleWordWrap",
        "shortCut": "Alt+Z"
    }
]
function genererateCards() {
    parentDiv.innerHTML = '';
    for (let i = 0; i < commandArray.length; i++) {
        let cmdName = commandArray[i].command;
        parentDiv.innerHTML += `<div class="tile card" id="tile${i}"  data.cmd=${commandArray[i].command} onclick="triggerCommand('${commandArray[i].command}')">
      <div class="card_title title-white">
        <p>${commandArray[i].name}</p>
        <i>${commandArray[i].shortCut}</i>
      </div>
    </div>`


    }
    attachLongPressev()
}
function attachLongPressev() {
    commandArray.forEach((e, i) => {
        let el = document.getElementById('tile' + i);
        el.addEventListener('long-press', function (e) {
            // console.log(e);
            // console.log(e.parentNode);
            // stop the event from bubbling up
            e.preventDefault()
            e.path.forEach(cls => {
                if (cls.className === 'tile card' && cls.className != 'deleteBtn') {
                    console.log(cls);
                    let btn = document.createElement("BUTTON");
                    btn.className = "deleteBtn"   // Create a <button> element
                    btn.innerHTML = "Delete";
                    btn.setAttribute('data-filter', cls.getAttribute('data.cmd'))                 // Insert text
                    cls.appendChild(btn);               // Append <button> to <body>
                    // let btnHtml= `<button type="button" class="btn btn-danger btn-lg deleteBtn"   data-filter=${cls.getAttribute('data.cmd')} >delete</button>`
                    // cls.appendChild(btnHtml)
                    attachDelevent()
                }
            })
        });
    })


}

let attachDelevent = function () {
    document.querySelector('.deleteBtn')?.addEventListener('click', (ev) => {
        console.log(ev);
        ev.stopPropagation()
        commandArray = commandArray.filter(e => e.command != ev.srcElement.getAttribute('data-filter'))
        genererateCards()
    })
}

function triggerCommand(triggered) {
    console.log(triggered);
    socket.emit('chat message', triggered, chatIdVal);
}
let digitValidate = function (ele) {
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g, '');
}



document.addEventListener("DOMContentLoaded", function (event) {
    console.log('doc loaded');
    document.getElementById('goBack').style.display = 'none';
    document.querySelector('.cmd-container').style.display = "none";
    genererateCards()
    generateOptions()
})
function changes(ev) {

    if (!ev.inputType) {
        let searchVal = additionalCommands.filter(e => {
            return e.name == ev.srcElement.value
        })
        if (!commandArray.find(e => e.name == ev.srcElement.value)) {
            commandArray.push(searchVal[0])
        }
        console.log(commandArray);
        // generateOptions()
        genererateCards()
    }

}
document.getElementById("browser").addEventListener("input", changes);
function generateOptions() {
    let str = '';
    additionalCommands.forEach(e => {
        str += `<option data-info=[${e.command},${e.shortCut},${e.name}]> ${e.name}</option>`;
    })
    var my_list = document.getElementById("browsers");
    my_list.innerHTML = str;
}

window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
function deleteCard(val) {
    console.log({ val });
}

