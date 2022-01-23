function sortTable(event){
    let table = document.querySelector('table');
    let columnHeader = event.path.find((element, index, array)=>{
        if (element.className == 'column') {
            return element
        }
    });

    let rows = Array.prototype.slice.call(document.querySelectorAll('.row'), 0);
    switch (columnHeader.ariaColIndex) {
        case '0':
            rows.sort((a, b) => {
                let aName = a.querySelector('.name-cell').textContent;
                let bName = b.querySelector('.name-cell').textContent;
                if (aName > bName) {
                    return 1;
                }
                if (aName < bName) {
                    return -1;
                }
                return 0;
            });
            break;
        case '1':
            rows.sort((a, b) => {
                let aLastName = a.querySelector('.lastname-cell').textContent;
                let bLastName = b.querySelector('.lastname-cell').textContent;
                if (aLastName > bLastName) {
                    return 1;
                }
                if (aLastName < bLastName) {
                    return -1;
                }
                return 0;
            });
            break;
        case '2':
            rows.sort((a, b) => {
                let aAbout = a.querySelector('.about-cell').textContent;
                let bAbout = b.querySelector('.about-cell').textContent;
                if (aAbout > bAbout) {
                    return 1;
                }
                if (aAbout < bAbout) {
                    return -1;
                }
                return 0;
            });
            break;
        case '3':
            rows.sort((a, b) => {
                let aIcon = a.querySelector('.color-cell').querySelector('.icon');
                let aColor = aIcon.style.backgroundColor;
                
                let bIcon = b.querySelector('.color-cell').querySelector('.icon');
                let bColor = bIcon.style.backgroundColor;
                if (aColor > bColor) {
                    return 1;
                }
                if (aColor < bColor) {
                    return -1;
                }
                return 0;
            });
            break;
        default:
            break;
    }

    switch (columnHeader.ariaSort) {
        case 'none':
            columnHeader.ariaSort = 'ascending';
            break;

        case 'ascending':
            rows.reverse();
            columnHeader.ariaSort = 'descending';
            break;
        
        case 'descending':
            columnHeader.ariaSort = 'ascending';
            break;
    
        default:
            columnHeader.ariaSort = 'ascending';
            break;
    }

    let headers = table.querySelectorAll('th');
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].ariaColIndex !== columnHeader.ariaColIndex){
        headers[i].ariaSort = "none";
      }
    }
    
    table.tBodies[0].append(...rows);    
}
