FROM node:18

WORKDIR /usr/src/app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta do servidor Node
EXPOSE 3000

# Inicia o servidor
CMD ["node", "server.js"]