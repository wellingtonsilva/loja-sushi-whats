export const formatCurrency = (number: number) => {

    const value = Number(number)

    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL", 
    });
  };