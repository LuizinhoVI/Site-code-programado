(function () {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=5579996362900&text=Ol%C3%A1%2C+vim+pelo+site';
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = '<div class="site-header-inner">' +
    '<a class="site-brand" href="index.html" aria-label="Code Programado - início">' +
    '<img src="foto/code.png" alt=""><span>Code Programado</span></a>' +
    '<nav class="site-nav" aria-label="Navegação principal">' +
    '<a href="index.html">Início</a>' +
    '<a href="index.html#cursos">Cursos</a>' +
    '<a href="servicos.html">Assistência</a>' +
    '<a href="catalogo.html">Downloads</a>' +
    '<a href="jogos.html">Jogos</a>' +
    '<a class="site-nav-contact" href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">' +
    '<i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></nav></div>';
  document.body.insertBefore(header, document.body.firstChild);

  const backLink = document.querySelector('body > a.w3-button[href="index.html"]');
  if (backLink) backLink.remove();

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = '<span>© ' + new Date().getFullYear() + ' Code Programado</span>' +
    ' · <a href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">Fale conosco</a>';
  document.body.appendChild(footer);
})();
