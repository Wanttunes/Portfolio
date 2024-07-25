document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const bars = document.querySelector('.fa-solid');
    
    let nav = document.createElement('div');
    nav.classList.add('navigation-bar-position2');
    nav.innerHTML = `
        <div class="navigation-bar-content2">
            <div class="nav-pages2"><a href="../index.html">Home</a></div>
            <div class="nav-pages2"><a href="pages/exemplo.html">About</a></div>
            <div class="nav-pages2"><a href="#">Projects</a></div>
            <div class="nav-pages2"><a href="#">Curriculum</a></div>
            <div class="nav-pages2"><a href="#">Contacts</a></div>
        </div>
    `;
    
    let navPagesPos = document.querySelector('.navigation-bar-position2')
    const navPages = nav.querySelectorAll('.nav-pages2');

    function showMenu() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
            header.appendChild(nav);
            navPages.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100); // Atraso de 100ms entre cada item
            });
        } else {
            navPages.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px)';
                }, index * 100); // Atraso de 100ms entre cada item
            });
            setTimeout(() => {
                nav.style.display = 'none';
                header.removeChild(nav);
            }, navPages.length * 100); // Aguarde até que todas as animações terminem
        }
    }

    // Adicionar evento de clique ao ícone apenas se a largura da tela for menor que 768px
    async function checkScreenSize() {
        if (window.innerWidth <= 768) {
            bars.style.display = 'flex';
            bars.addEventListener('click', showMenu);
        } else {
            bars.style.display = 'none';
            nav.style.display = 'none';
            bars.removeEventListener('click', showMenu);
            header.removeChild(nav);
        }
    }

    // Verificar o tamanho da tela ao carregar a página e ao redimensionar a janela
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});