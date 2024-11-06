export interface CalculatorState {
    currentValue: string;
    operator: string | null;
    previousValue: string | null;
  }
  
  export const initialState: CalculatorState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
  };
  
  type OperationType = "number" | "operator" | "clear" | "posneg" | "percentage" | "equal";
  
  export default function Calculator(
    type: OperationType,
    value: string | number | undefined,
    state: CalculatorState
  ): CalculatorState {
    switch (type) {
      case "number":
        // Se o valor atual for "0", substituímos pelo número, caso contrário, adicionamos o número ao final
        return {
          ...state,
          currentValue: state.currentValue === "0" ? String(value) : state.currentValue + value,
        };
  
      case "operator":
        // Armazena o operador e o valor anterior
        return {
          ...state,
          operator: String(value),
          previousValue: state.currentValue,
          currentValue: "0",
        };
  
      case "clear":
        // Reseta o estado para o inicial
        return initialState;
  
      case "posneg":
        // Inverte o sinal do número atual
        return {
          ...state,
          currentValue: (parseFloat(state.currentValue) * -1).toString(),
        };
  
      case "percentage":
        // Calcula a porcentagem
        return {
          ...state,
          currentValue: (parseFloat(state.currentValue) * 0.01).toString(),
        };
  
      case "equal":
        // Executa a operação de acordo com o operador
        const { currentValue, previousValue, operator } = state;
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue || "0");
  
        if (operator === "+")
          return { ...state, currentValue: (previous + current).toString(), operator: null, previousValue: null };
        if (operator === "-")
          return { ...state, currentValue: (previous - current).toString(), operator: null, previousValue: null };
        if (operator === "*")
          return { ...state, currentValue: (previous * current).toString(), operator: null, previousValue: null };
        if (operator === "/")
          return { ...state, currentValue: (previous / current).toString(), operator: null, previousValue: null };
        return state;
  
      default:
        return state;
    }
  }
  