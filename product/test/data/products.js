import { randomUUID } from 'node:crypto';

export const productExample = {
    usuarioId: randomUUID(),
    nome: "Get Smart",
    valor: 130, 
    quantidade: 100,
    descricao:"A máquina mais moderna e completa",
    categoria: "Máquina de Cartão - GetNet",
    caracteristicas: [
        {
            nome: "Get Smart",
            descrição: "Get Smart com chip de dados + WI-FI",
        }
    ],
    imagens: [
        {
            url: "https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fsite.getnet.com.br%2Fwp-content%2Fuploads%2F2022%2F06%2FGetRenova-Sem-Bobina-1.png&imgrefurl=https%3A%2F%2Fsite.getnet.com.br%2F&tbnid=4BokIkvfbwrh7M&vet=1&docid=wImjeP53re4xaM&w=690&h=968&source=sh%2Fx%2Fim",
            descricao: "imagem da Maquininha de cartão Getnet",
        }
    ],
}
