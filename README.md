# Safe2Pay Node

## Recursos disponíveis

- [x] Tokenização de cartão.
- [ ] Pagamentos.
  - [ ] Boleto bancário.
  - [x] Cartão de crédito.
  - [ ] Bitcoin.
  - [x] Cartão de débito.
  - [ ] Carnê.
  - [ ] Lote de Carnês.
  - [x] Pix.
- [x] Consulta de transações.
- [x] Alterar transação.
- [x] Alterar Status transação.
- [x] Listar transações.
- [x] Captura de Crédito.
- [ ] Estorno.
  - [ ] Boleto bancário.
  - [x] Cartão de crédito.
  - [x] Cartão de débito.
  - [x] Pix.
- [ ] Gerenciamento de subcontas para Marketplace.

## Instalação

```
npm i safe2pay-node
```

## Utilização

Para integrar com sua aplicação, basta definir variável de ambiente em `.env` SAFE2PAY_API_KEY com a sua Api Key.

#### Exemplo de Pagamento via Pix Estático

```typescript
import Safe2Pay from './../../safe2pay';

const client = new Safe2Pay();

client.pixStatic({
  Description: 'Pagamento Teste',
  Reference: '123456',
  CallbackUrl: 'URL',
});
```

#### Exemplo de Consulta de opções de pagamento

```typescript
import Safe2Pay from './../../safe2pay';

const client = new Safe2Pay();

async function getMerchants() {
  const list = await client.merchantPaymentMethodList();
  return list;
}
```
