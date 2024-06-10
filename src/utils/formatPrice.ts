/**
 * Formata um número como um valor em reais (BRL).
 * 
 * @param price - O valor a ser formatado.
 * @returns O valor formatado como uma string de moeda brasileira.
 */
export const formatPrice = (price: number): string => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  