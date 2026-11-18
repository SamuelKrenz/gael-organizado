# GAEL — Meu mundo de letras

Site de alfabetização gamificada para os anos iniciais do ensino fundamental, desenvolvido em HTML, CSS e JavaScript.

## Executar

1. Extraia o ZIP.
2. Abra `index.html` em um navegador atualizado, como Chrome ou Edge.
3. Se preferir abrir por HTTP, use a extensão Live Server do VS Code ou execute `python -m http.server 8000` na pasta que contém `index.html` e acesse `http://localhost:8000`.

Use o mesmo navegador e endereço para retomar a aventura. O site guarda preferências, conquistas e a última etapa concluída de cada missão no `localStorage`. Para manter dados de uma instalação anterior, atualize os arquivos no mesmo endereço em que ela rodava.

## Explorar

- **Vila** reúne oito missões em cinco lugares, com cinco desafios por missão. A primeira missão de cada lugar libera o seguinte. Os lugares abertos podem ser revisitados, e as missões extras ficam disponíveis depois da primeira missão do respectivo lugar.
- **Modo prática** dá acesso direto aos quatro módulos e aos 20 jogos, com cinco por módulo. O desafio troca de itens entre partidas quando houver alternativas.
- Os atalhos **Jogos de memória** e **Quizzes** ficam na tela inicial, acima do mapa.
- **Jogos de memória** trabalham três tipos de par: vogais maiúsculas e minúsculas, desenho e letra inicial, e desenho e palavra. As cartas podem ser ouvidas sob demanda, e o jogador decide quando fechar um par incorreto.
- **Quizzes** de palavras e de escrita apresentam cinco perguntas e mostram os acertos na primeira tentativa. É possível corrigir cada resposta e continuar. **Palavra secreta** funciona como uma forca adaptada, com pista visual e tentativas livres.
- **Biblioteca de Sons** inclui as 26 letras e combinações silábicas comuns. Na atividade de escuta do alfabeto, a voz lê o nome da letra. A pronúncia do áudio depende da voz instalada. As famílias silábicas são uma seleção para prática.
- **Ajustes** controlam contraste, movimento, velocidade e volume da fala e efeitos de recompensa. A fala é acionada sob demanda. Os efeitos começam desativados.
- **Ocultar mapa** deixa a navegação pela lista de lugares disponível.

## Onde alterar

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Estrutura principal do site |
| `css/styles.css` | Layout e controles dos jogos |
| `css/village-theme.css` | Identidade visual, mapa, cartões e adaptação para telas menores |
| `assets/` | Ilustração e imagens dos cartões, em WebP |
| `js/vila.js` | Lugares, missões, recompensas e posições no mapa |
| `js/app.js` | Jogos, biblioteca, progresso, navegação e áudio |

A aplicação roda localmente e dispensa cadastro, servidor de aplicação e banco de dados.
