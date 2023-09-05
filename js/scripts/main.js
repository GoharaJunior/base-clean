(function () {
    window.theme = {
        ...window.theme,

        // openApplyOverlayClose: function () {

        // },
    };

    // Execução de Funções após o carregamento do documento
    window.addEventListener('DOMContentLoaded', function () {
        const htmlElement = document.querySelector('html');

        if (htmlElement.classList.contains('page-home')) {
            /*=== AOS Animation ===*/
            AOS.init({
                duration: 1000
            });
        }
    });
})();
