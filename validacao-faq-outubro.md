# Validação das simulações da Cartilha — Outubro/2026

Foram reproduzidas as 3 simulações da Cartilha de Outubro no arquivo oficial do simulador de Consultor (`Simulador Liga Mensal - Consultor - Outubro.26 1.xlsx`) e recalculadas em LibreOffice.

| Cenário | Resultado exibido na Cartilha | Resultado da planilha | Diferença |
|---|---:|---:|---:|
| Simulação 1 — Entrada 3,0x | 1.390 | 1.408 | +18 |
| Simulação 2 — Crescimento 2,1x | 2.878 | 2.896 | +18 |
| Simulação 3 — Alta performance 2,0x | 5.565 | 5.491 | -74 |

## O que explica as diferenças

### Simulações 1 e 2
A diferença de **18 pontos** corresponde exatamente aos 6 Produtos Independentes da simulação, calculados pela planilha como `6 × 3 = 18`. A soma apresentada na Cartilha não incorpora esses 18 pontos no total final.

### Simulação 3
A diferença é de **74 pontos** e não pode ser explicada apenas pela exclusão dos 18 pontos de Produtos Independentes. A Cartilha apresenta `277` pontos no item “Acelerador Privado/Seguros”, enquanto a planilha, com os mesmos dados informados na simulação, chega a `203` pontos em Seguros (135 de Proteção Financeira + 18 de Produtos Independentes + 50 de Seguro Consignado Privado).

## Decisão adotada no simulador web

O simulador web segue **as fórmulas e premissas da planilha oficial de Outubro**, e não força o resultado para coincidir com os exemplos textuais da Cartilha quando existe divergência. Isso evita criar uma regra que não está sustentada pela tabela de premissas.

Os três exemplos devem, portanto, ser tratados como exemplos da Cartilha que precisam de revisão antes de serem usados como teste de aceite matemático.

## Estrutura atual do Consultor

- Crédito na Conta
  - Produção Total
  - Super Conta - 7727 (Desembolso Bmg e TED Residual)
  - Liquidação Antecipada 90d
- Cartões (Aut. + Compl. Convênios)
  - Produção Total
- Consignado (sem portabilidade)
  - Produção Total
- Consignado Privado
  - Produção Total
- FGTS
  - Produção Total
- Recuperação de Crédito
  - Reconquista
  - Acordos de Cobrança
  - Recuperação CNC
- Seguros
  - Produtos Independentes
  - Proteção Financeira
  - Seguro Consignado Privado
- Faixa Bônus
  - Contratos Novos Cartões
  - Antecipação Benefício - Recorrente
- Zona de Risco
  - Super Conta
  - Reclamações
  - Seguros Independentes
  - Consignado
  - Consignado Privado
  - Fim de Relacionamento CNC

Todos os textos auxiliares/disclaimers abaixo dos campos de preenchimento foram removidos.
