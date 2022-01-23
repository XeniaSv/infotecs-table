window.onload = function () {
    let onSuccess = (data) => {
        fillTable(data);

        let close = document.querySelector('.close-button');
        close.addEventListener('click', onClick_CloseRedactor);

        let hiddens = document.querySelectorAll('.close');
        hiddens.forEach((element) => {
            element.addEventListener('click', onClick_HideColumn)
        });
        let show = document.querySelector('.show-column');
        show.addEventListener('click', onClick_ShowColumns);

        let save = document.querySelector('.save-button');
        save.addEventListener('click', onClick_Save);

        let sorts = document.querySelectorAll('.tittle');
        sorts.forEach((element)=>{
                element.addEventListener('click', sortTable);
        });

        localStorage.setItem('selectedRow', null);
    };

    let onFail = (error) => {
        alert('Error happens. Reload page)');
        console.log(error);
    };
    
    getData().then(onSuccess).catch(onFail);
}
