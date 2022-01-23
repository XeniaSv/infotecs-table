function onClick_OpenRedactor(event) {
    let rowData = event.path.find((element, index, array) => {
        if (element.className == 'row')
            return element;
    });
    let indicators = rowData.querySelectorAll('.indicators');

    let redactor = document.querySelector('.redactor');

    rowData.style.backgroundColor = '#A9A9A9';
    
    redactor.style.display = 'block';
    redactor.querySelector('#name-input').value = indicators[0].textContent;
    redactor.querySelector('#surname-input').value = indicators[1].textContent;
    redactor.querySelector('#description-input').value = indicators[2].querySelector('.about').textContent;
    redactor.querySelector('#color-input').value = indicators[3].querySelector('.icon').style.backgroundColor; 

    unMarkPrevRow(rowData.ariaRowIndex);

    localStorage.setItem('selectedRow', rowData.ariaRowIndex);
}

function onClick_CloseRedactor(event) {
    let main = document.querySelector('main');
    let redactor = document.querySelector('.redactor');
    
    redactor.style.display = 'none';
    main.classList.remove("container")
    
    unMarkPrevRow();

    localStorage.setItem('selectedRow', null);
}

function onClick_Save(event){
    let redactor = event.path.find((element, index, array) =>{
        if (element.className == 'redactor'){
            return element
        }
    });
    
    let containers = redactor.querySelectorAll('.input-field');
    let selectedRow = document.querySelector(`tr[aria-rowindex="${localStorage.getItem('selectedRow')}"]`);
    let cells = selectedRow.querySelectorAll('.indicators');

    cells[0].textContent = containers[0].value;
    cells[1].textContent = containers[1].value;
    cells[2].lastChild.textContent = containers[2].value;
    cells[3].querySelector('.icon').style.backgroundColor = containers[3].value;
}

function unMarkPrevRow(currId) {
    let selectedRowID = localStorage.getItem('selectedRow');
    if (selectedRowID != 'null' && selectedRowID != currId){
        let selectedRow = document.querySelector(`tr[aria-rowindex="${selectedRowID}"]`);
        selectedRow.style.backgroundColor = 'white';
    }
}