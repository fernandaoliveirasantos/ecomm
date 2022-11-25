# ecomm

# Projeto Nxt Dev

Repositório criado durante curso como parte do processo de aprendizagem.

# Essencial - Criar Repositório

1. Crie um novo repositório no GitHub chamado ecomm.
2. Clone o repositório para sua máquina.
3. Crie uma pasta chamada product na raiz do repositório e dentro dela Inicialize um projeto Node na raiz do repositório usando npm init.
4. Crie um arquivo chamado main.js dentro da pasta product/src que simplesmente faz log da mensagem: iniciando product.
5. Execute esse arquivo com o Node e valide que a mensagem está sendo impressa no terminal.
6. Faça commit das suas mudanças.

# Desejavél - Criar Imagem de Serviço 

1. Crie um arquivo `Dockerfile` dentro da pasta `product` no repositório.
2. Use as instruções necessárias para copiar tudo que estiver na pasta `src` dentro da pasta `product` para dentro da Imagem.
3. Configure o comando base de inicialização do container dessa imagem para executar o arquivo `main.js` que está dentro de `src`.
4. Faça o `build` dessa imagem, crie um container a partir dela e verifique se nos logs do container, a mensagem de `log` que criamos na tarefa anterior é exibido.

# Desafio - Executar serviços

1. Crie um arquivo docker-compose.yml na raiz do repositório.
2. Faça com que ao executar o comando docker-compose up, o container da aplicação product seja criado se necessário e executado.
3. Ao fazer docker-compose down este mesmo container deve ser destruído.


