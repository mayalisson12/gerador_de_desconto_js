function gerarDesconto(cliente, valorCompra, primeiraCompra = false, pagamentoAVista = false) {
    let desconto = 0;
    let tipoDesconto = '';
    let mensagem = '';
    let totalSemDesconto = valorCompra;
    let totalComDesconto = 0;
    let porcentagemDesconto = 0;
  
    if (primeiraCompra) {
      if (pagamentoAVista) {
        if (valorCompra > 1000) {
          desconto = 0.3;
          tipoDesconto = '30% de desconto';
        } else if (valorCompra > 500) {
          desconto = 0.25;
          tipoDesconto = '25% de desconto';
        } else {
          desconto = 0.2;
          tipoDesconto = '20% de desconto';
        }
      } else {
        if (valorCompra > 1000) {
          desconto = 0.2;
          tipoDesconto = '20% de desconto';
        } else if (valorCompra > 500) {
          desconto = 0.15;
          tipoDesconto = '15% de desconto';
        } else {
          desconto = 0.1;
          tipoDesconto = '10% de desconto';
        }
      }
    } else {
      if (pagamentoAVista) {
        if (valorCompra > 1000) {
          desconto = 0.2;
          tipoDesconto = '20% de desconto';
        } else if (valorCompra > 500) {
          desconto = 0.15;
          tipoDesconto = '15% de desconto';
        } else {
          desconto = 0;
          tipoDesconto = 'Sem desconto';
        }
      } else {
        if (valorCompra > 1000) {
          desconto = 0.1;
          tipoDesconto = '10% de desconto';
        } else if (valorCompra > 500) {
          desconto = 0.05;
          tipoDesconto = '5% de desconto';
        } else {
          desconto = 0;
          tipoDesconto = 'Sem desconto';
        }
      }
    }
  
    totalComDesconto = valorCompra - (valorCompra * desconto);
    porcentagemDesconto = desconto * 100;
  
    if (desconto > 0) {
      mensagem = `Obrigado ${cliente} pela compra! Valor total sem desconto: R$ ${totalSemDesconto.toFixed(2)}. Com ${tipoDesconto}, o valor total com desconto é: R$ ${totalComDesconto.toFixed(2)}, desconto de ${porcentagemDesconto.toFixed(2)}%.`;
    } else {
      const cupomDesconto = Math.floor(Math.random() * (20 - 10 + 1) + 10);
      mensagem = `Obrigado ${cliente} pela compra! Valor total: R$ ${totalSemDesconto.toFixed(2)}. Você ganhou um cupom de desconto de ${cupomDesconto}%.`;
    }
  
    document.getElementById('mensagem').innerHTML = mensagem;
  }