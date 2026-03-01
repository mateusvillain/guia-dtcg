(function () {
  function initSearchResults() {
    const utils = window.DTCGUtils;
    if (!utils) return;

    const container = document.getElementById('search-results');
    const meta = document.getElementById('results-meta');

    if (!container || !meta) return;

    const params = new URLSearchParams(window.location.search);
    const query = (params.get('q') || '').trim();
    const normalizedQuery = utils.normalize(query);

    const searchIndex = [
      {
        title: 'Formatação: estrutura mínima',
        page: 'formatacao.html',
        excerpt:
          'Explica o formato base do token com nome e $value obrigatório.',
        keywords: 'formatacao estrutura nome value design token',
      },
      {
        title: 'Formatação: nome e sintaxe',
        page: 'formatacao.html',
        excerpt: 'Restrições de nome: sem $, sem { }, sem ponto.',
        keywords: 'sintaxe nome proibido case-sensitive',
      },
      {
        title: 'Formatação: $description, $extensions e $deprecated',
        page: 'formatacao.html',
        excerpt:
          'Metadados reservados para documentação, extensões e depreciação.',
        keywords: 'description extensions deprecated metadata',
      },
      {
        title: 'Types: color',
        page: 'types.html',
        excerpt: 'Uso de tokens de cor para texto, fundo e estados.',
        keywords: 'color cor',
      },
      {
        title: 'Types: dimension',
        page: 'types.html',
        excerpt: 'Objeto com value e unit em px/rem para medidas.',
        keywords: 'dimension spacing size px rem',
      },
      {
        title: 'Types: fontFamily',
        page: 'types.html',
        excerpt: 'Fonte única ou lista de fallback.',
        keywords: 'font family fallback',
      },
      {
        title: 'Types: fontWeight',
        page: 'types.html',
        excerpt: 'Números 1..1000 ou aliases como bold.',
        keywords: 'font weight bold thin',
      },
      {
        title: 'Types: duration',
        page: 'types.html',
        excerpt: 'Tempo com value numérico e unidade ms/s.',
        keywords: 'duration tempo animation transition',
      },
      {
        title: 'Types: cubicBezier',
        page: 'types.html',
        excerpt: 'Curva de easing com 4 números.',
        keywords: 'cubicBezier easing motion',
      },
      {
        title: 'Types: number',
        page: 'types.html',
        excerpt: 'Número puro para line-height, opacidade e multiplicadores.',
        keywords: 'number line-height opacity',
      },
      {
        title: 'Resolver: o que faz',
        page: 'resolver.html',
        excerpt:
          'Entrada de contexto, composição por ordem e saída final de tokens.',
        keywords: 'resolver input output contexts',
      },
      {
        title: 'Resolver: estrutura básica',
        page: 'resolver.html',
        excerpt: 'Como declarar sets, modifiers e resolutionOrder.',
        keywords: 'sets modifiers resolutionOrder default',
      },
      {
        title: 'Resolver: como criar',
        page: 'resolver.html',
        excerpt: 'Passo a passo para modelar e testar um resolver.',
        keywords: 'como criar passo a passo',
      },
    ];

    if (!normalizedQuery) {
      meta.textContent =
        'Digite um termo na busca do menu para ver resultados.';
      container.innerHTML = '';
      return;
    }

    const matches = searchIndex.filter((item) => {
      const haystack = utils.normalize(
        `${item.title} ${item.excerpt} ${item.keywords}`
      );
      return haystack.includes(normalizedQuery);
    });

    meta.textContent = `${matches.length} resultado(s) para \"${query}\".`;
    container.innerHTML = '';

    if (matches.length === 0) {
      container.innerHTML = `
        <article class="card">
          <h2>Nenhum resultado encontrado</h2>
          <p>Tente termos como: <code>dimension</code>, <code>resolver</code>, <code>deprecated</code>.</p>
        </article>
      `;
      return;
    }

    matches.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.excerpt}</p>
        <p><a href="${item.page}">Abrir página</a></p>
      `;
      container.appendChild(card);
    });
  }

  initSearchResults();
})();
