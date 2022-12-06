#tipo de imagem 
FROM node:18

#criando pasta de trabalho
WORKDIR /app 

COPY package*.json /app/

#comando que deve ser rodado
RUN npm install

#copiar tudo que está na pasta src para a pasta <app>
COPY . .

#comando quando o docker for excutado, pode ser usado também o "CMD"
ENTRYPOINT npm start

# rodar esse comando no terminal = docker build -t eccom/product .
