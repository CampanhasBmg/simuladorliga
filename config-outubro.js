// Regras numéricas do Simulador Consultor — Outubro/2026.
// Fonte de cálculo: planilha "Simulador Liga Mensal - Consultor - Outubro.26 1.xlsx".
const LIGA_OUTUBRO={consultor:{
  cnc:[[15000,.003],[30000,.006],[35000,.009],[40000,.012],[45000,.015],[50000,.018],[55000,.021],[60000,.024],[65000,.027],[75000,.03],[85000,.04],[100000,.05]],
  cartoes:[[.01,.01]],
  consignado:[[5000,.001],[20000,.005],[30000,.0075],[40000,.01]],
  privado:[[0,.01],[40000,.015],[60000,.02]],
  segurosInd:[[0,0],[6,3],[11,5],[16,10]],
  protecao:[[0,0],[20,3],[46,5],[66,10]],
  novoCartao:[[0,0],[3,30],[7,40],[10,50]],
  antecipacao:[[0,0],[4,10],[8,20]],
  reconquista:[[1,50],[4,100]],
  deflatores:{
    superconta:[[0,-.2],[2,-.1],[3,0]],
    reclamacoes:[[0,0],[1,-.1],[2,-.2]],
    seguros:[[0,-.2],[3,0]],
    consignado:[[0,-.2],[3,0]],
    privado:[[0,-.1],[2,0]]
  }
}};
