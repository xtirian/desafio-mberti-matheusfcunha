export class DataHandler {
  static dateReturn(created: string, updated: string) {
    const createDate = new Date(created);
    const updateDate = new Date(updated);

    if (updateDate > createDate) {
      const dia = updateDate.getUTCDate();
      const mes = updateDate.getUTCMonth() + 1; // Adiciona 1, pois os meses começam do zero
      const ano = updateDate.getUTCFullYear();

      return `${dia}/${mes}/${ano}`;
    }

    const dia = createDate.getUTCDate();
      const mes = createDate.getUTCMonth() + 1; // Adiciona 1, pois os meses começam do zero
      const ano = createDate.getUTCFullYear();

      return `${dia}/${mes}/${ano}`;
  }


  static bimestreFilter(bimestre: number) {
    const bimestres = ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"];

    return bimestres[bimestre - 1];
  }
}
