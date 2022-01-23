function onClick_ShowColumns(event) {
    let columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        if (column.ariaHidden == 'true') {
            column.classList.remove('hide');
            column.ariaHidden = false;
            let data = document.querySelectorAll(`td[aria-colindex="${column.ariaColIndex}"]`);
            data.forEach((element) => {
                element.classList.remove('hide');
                element.ariaHidden = false;
            });
        }
    })
}

function onClick_HideColumn(event) {
    let headerColumn = event.path.find((element, index, array) => {
        if (element.className == 'column')
            return element;
    });

    headerColumn.classList.add('hide');
    headerColumn.ariaHidden = true;

    let elementColumn = document.querySelectorAll(`td[aria-colindex="${headerColumn.ariaColIndex}"]`);
    elementColumn.forEach((element) => {
        element.classList.add('hide');
        element.ariaHidden = true;
    });
}