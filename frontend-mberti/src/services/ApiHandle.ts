import axios from "axios";
import { deleteType, getType, postType, putType } from "./types.interface";

let baseURL = "https://backend-testetecnico.onrender.com/results";

export class ApiHandle {
  //GET
  static async getAllInfos(): Promise<getType> {
    try {
      const { data } = await axios.get(baseURL);

      return this.filterInfos(data);
    } catch (error) {
      console.error(error);
      return {
        primeiro: [],
        segundo: [],
        terceiro: [],
        quarto: [],
      };
    }
  }

  //FILTER INFORMATION TO RETURN

  static filterInfos(data: any) {
    const primeiroBimestre = data.filter(
      (nota: { bimestre: string }) => nota.bimestre == "PRIMEIRO"
    );
    const segundoBimestre = data.filter(
      (nota: { bimestre: string }) => nota.bimestre == "SEGUNDO"
    );
    const terceiroBimestre = data.filter(
      (nota: { bimestre: string }) => nota.bimestre == "TERCEIRO"
    );
    const quartoBimestre = data.filter(
      (nota: { bimestre: string }) => nota.bimestre == "QUARTO"
    );

    return {
      primeiro: primeiroBimestre,
      segundo: segundoBimestre,
      terceiro: terceiroBimestre,
      quarto: quartoBimestre,
    };
  }

  //POST

  static async createNewGrade({ name, bimestre, grade }: postType) {
    try {
      const result = await axios.post(baseURL, {
        name: name,
        bimestre: bimestre,
        grade: grade,
      });
      return result;
    } catch (error) {
      const result = error.response.data.message;
      alert(result);

      return result;
    }
  }

  //PUT

  static async updateGrade({ id, grade }: putType) {
    try {
      await axios.put(`${baseURL}/${id}`, {
        data: {
          grade: grade,
        },
      });

      return;
    } catch (error) {
      console.error(error);

      return;
    }
  }

  //DELETE

  static async deleteGrade({ id }: deleteType) {
    try {
      await axios.delete(`${baseURL}/${id}`);

      return;
    } catch (error) {
      console.error(error);

      return;
    }
  }
}
