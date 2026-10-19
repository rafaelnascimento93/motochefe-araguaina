# MotoChefe Araguaína

Landing page estática, sem dependências, build, backend ou serviços conectados.

## Antes de publicar

1. O convite do WhatsApp já está configurado em `script.js`, linha 2, na constante `GROUP_URL`. Todos os botões usam essa única configuração. Para trocar o grupo, altere somente esse valor. Se o endereço estiver inválido, os botões levam ao aviso na página.
2. A marca em `assets/logo-motochefe.png` é um recorte fiel do banner fornecido, com seu fundo original. Para melhor resolução, substitua esse arquivo por uma logo oficial, mantendo as proporções. Se a proporção mudar, atualize `width` e `height` do elemento de imagem em `index.html`. Não foi criada uma nova versão da marca.
3. `assets/banner-grupo-2k.jpg` é a arte original usada no compartilhamento. Ela contém a chamada original para comentar no Instagram; se desejar, substitua por uma arte oficial específica para o site. Não há imagem de nota ou produto: o destaque do voucher usa texto real e CSS.
4. Em `index.html`, após definir a URL pública, adicione `<link rel="canonical" href="https://SEU-USUARIO.github.io/SEU-REPOSITORIO/">` e `<meta property="og:url" content="https://SEU-USUARIO.github.io/SEU-REPOSITORIO/">`. Substitua `og:image` pela URL absoluta dessa mesma pasta seguida de `assets/banner-grupo-2k.jpg`. Os marcadores deste exemplo devem ser substituídos pelos dados reais.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie `index.html`, `styles.css`, `script.js` e a pasta `assets` para a raiz da branch `main`.
2. Acesse Settings → Pages → Build and deployment → Deploy from a branch.
3. Selecione `main` e `/ (root)`, e salve.
4. Aguarde o GitHub informar a URL, atualize os metadados acima e envie a alteração.

Não é necessário instalar nada para o site funcionar. Abra `index.html` no navegador para uma prévia local. Todos os caminhos são relativos e funcionam em subdiretórios. Sem JavaScript, o conteúdo continua visível e os botões apontam ao aviso de link pendente.

## Conteúdo e acessibilidade

O formulário não está nesta página; será disponibilizado no grupo em 29/10. Não foi informado horário de abertura. O prêmio é um voucher para compra de scooter, sujeito às regras no formulário. Há foco de teclado, link para pular ao conteúdo, semântica, redução de movimento e espaço reservado abaixo do rodapé para o botão fixo do celular.

O site não foi publicado e não usa fontes remotas, rastreadores, formulários ou APIs externas. Links do Instagram e Google Maps só abrem por ação do visitante.
