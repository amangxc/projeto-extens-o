$(document).ready(function () {
  // 1. Função para carregar o conteúdo via AJAX
  function carregarPagina(url) {
    // Usa o método load() do jQuery para carregar o conteúdo do 'url' e injetar em '#conteudo'
    $("#conteudo").load(url, function (response, status, xhr) {
      if (status == "error") {
        // Trata erros de carregamento
        $("#conteudo").html(
          "Erro ao carregar a página: " + xhr.status + " " + xhr.statusText
        );
      }
      // Aqui você pode adicionar lógica específica de cada página após o carregamento (ex: iniciar o slider jQuery)
      if (url === "home.html") {
        inicializarSlider(); // Chame a função do seu slider
      }

      // Re-anexa o manipulador de eventos ao formulário de Contato, se necessário.
      if (url === "fale_conosco.html") {
        configurarFormularioContato();
      }
    });
  }

  // 2. Manipulador de eventos para o clique nos links do menu
  $(".nav-list a").click(function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link (recarregar a página)

    var arquivoUrl = $(this).attr("href"); // Pega o valor do atributo href (ex: 'inicio.html', 'blog.html', etc.)

    carregarPagina(arquivoUrl); // Carrega o conteúdo correspondente via AJAX
  });

  // 3. Carregar a página inicial ao abrir o site (padrão)
  carregarPagina("home.html");

  // 4. Exemplo de função para inicializar o slider (você deve implementar esta)
  function inicializarSlider() {
    // Lógica de slider de imagens jQuery aqui
    console.log("Slider inicializado!");
  }

  // 5. Exemplo de função para configurar o formulário de Contato
  function configurarFormularioContato() {
    // Lógica para enviar formulário com AJAX (POST)
    console.log("Formulário de Contato configurado!");
  }
});
