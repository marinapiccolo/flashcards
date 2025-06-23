criarCartao(
    "bandeira",    
    "qual a cor da bandeira de Laos?",  
    "Vermelho, Azul e Branco" 
);

criarCartao(
    "historia",    
    "oque causou a queda da Urss?",  
    "má gestão econômica, a falta de liberdade política, o desgaste do sistema comunista e a pressão de movimentos nacionalistas" 
);

criarCartao(
    "Desenho Animado",    
    "quantas vezes o kenny morreu em south park?",
    "127vezes" 
);

criarCartao(
    "kpop",    
    "Quantos premios tem o TXT?",  
    "17" 
);

criarCartao(
    "Jogos",    
    "qual o jogomasi antigo do roblox?", 
    "Classic Rocket Arena" 
);

criarCartao(
    "pessoas",    
    "qual o ultimo jogo lançado pelo Andrezitos",  
    "Invasores" 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});