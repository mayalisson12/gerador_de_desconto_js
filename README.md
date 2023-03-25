<h1 align="center">Gerador de Descontos 💲🤑💹</h1>




<p align="center"> Um gerador de descontos simples feito em JavaScript! </p>



---

## 📖 Sobre o projeto

Este é um programa desenvolvido em JavaScript que calcula o valor final de uma compra com base em descontos aplicáveis. O usuário pode inserir o valor total da compra e, dependendo da regra de desconto aplicável, o programa irá calcular o valor final com desconto.
## 🛠️ Tecnologias utilizadas

- JavaScript
- Visual Studio Code

## 🚀 Como usar e rodar o projeto

- Faça um clone deste repositório usando o comando:

<pre class="command">
 `https://github.com/mayalisson12/gerador_de_desconto_js`
</pre>

- Abra o projeto no Visual Studio Code ou em algum editor de sua preferência
- Abra o arquivo `index.html` no seu navegador
- Preencha os campos com o valor total da compra e a porcentagem de desconto desejada
- Clique no botão "Calcular desconto" e veja o resultado abaixo

## 📝 Regras para desconto:

O gerador de desconto segue as seguintes regras:

- Desconto máximo de 50%
- Valor mínimo da compra para desconto de 10% é de R$ 50,00
- Se for a primeira compra do cliente:
- Se o pagamento for à vista:
 - Se o valor da compra for acima de R$ 1000, o desconto será de 30%.
 - Se o valor da compra for acima de R$ 500, o desconto será de 25%.
 - Se o valor da compra for menor ou igual a R$ 500, o desconto será de 20%.
- Se o pagamento não for à vista:
 - Se o valor da compra for acima de R$ 1000, o desconto será de 20%.
 - Se o valor da compra for acima de R$ 500, o desconto será de 15%.
 - Se o valor da compra for menor ou igual a R$ 500, o desconto será de 10%.
- Caso contrário (não é a primeira compra):
- Se o pagamento for à vista:
 - Se o valor da compra for acima de R$ 1000, o desconto será de 20%.
 - Se o valor da compra for acima de R$ 500, o desconto será de 15%.
 - Se o valor da compra for menor ou igual a R$ 500, não haverá desconto.
- Se o pagamento não for à vista:
 - Se o valor da compra for acima de R$ 1000, o desconto será de 10%.
 - Se o valor da compra for acima de R$ 500, o desconto será de 5%.
 - Se o valor da compra for menor ou igual a R$ 500, não haverá desconto.

## 📄 Licença

Este projeto está sob a licença MIT. 

## Como contribuir

1. Clone o repositório
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona uma nova feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request


Feito com ❤️ e desenvolvido no Visual Studio Code.

