
//Métodos reutilizable para estandarizar las respuestas del backend
export const createSucessResponse = (data:any = null,status:number) => {
    return { isSuccess:true, data, status};
  }

  export const createErrorResponse = (message:string, status:number) => {
    return { isSuccess:false, message, status};
  }