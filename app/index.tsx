import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native';
import Button from '@/components/navigation/Button'
import Row from '@/components/navigation/Row';
import Calculator, { CalculatorState } from '@/util/Calculator';  // Importando corretamente a função e tipos

// Inicializando o estado da calculadora
const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const HomeScreen: React.FC = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  // Função que lida com as operações da calculadora
  const handleTap = (type: string, value?: string | number) => {
    setState((prevState) => Calculator(type as any, value, prevState)); // Tipagem para que o tipo de operação seja aceito
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          {/* Exibe o valor atual da calculadora */}
          <Text style={styles.value}>
            {parseFloat(state.currentValue.toString()).toLocaleString()}
          </Text>

          {/* Linha 1 - Botões de operações básicas */}
          <Row>
            <Button
                text="C"
                theme="secondary"
                onPress={() => handleTap('clear')} size={undefined}            
            />
            <Button
              text="+/-"
              theme="secondary"
              size={undefined}
              onPress={() => handleTap('posneg')}
            />
            <Button
              text="%"
              theme="secondary"
              size={undefined}
              onPress={() => handleTap('percentage')}
            />
            <Button
              text="/"
              size={undefined}
              theme="tertiary"  // Agora 'tertiary' para corresponder ao código anterior
              onPress={() => handleTap('operator', '/')}
            />
          </Row>

          {/* Linha 2 - Números e operações */}
          <Row>
            <Button text="7" onPress={() => handleTap('number', 7)} size={undefined} theme={undefined}/>
            <Button text="8" onPress={() => handleTap('number', 8)} size={undefined} theme={undefined}/>
            <Button text="9" onPress={() => handleTap('number', 9)} size={undefined} theme={undefined}/>
            <Button
              text="x"
              size={undefined}
              theme="tertiary"  // Agora 'tertiary' para corresponder ao código anterior
              onPress={() => handleTap('operator', '*')}
            />
          </Row>

          {/* Linha 3 */}
          <Row>
            <Button text="4" onPress={() => handleTap('number', 4)} size={undefined} theme={undefined}/>
            <Button text="5" onPress={() => handleTap('number', 5)} size={undefined} theme={undefined} />
            <Button text="6" onPress={() => handleTap('number', 6)} size={undefined} theme={undefined}/>
            <Button
              text="-"
              size={undefined}
              theme="tertiary"  // Agora 'tertiary' para corresponder ao código anterior
              onPress={() => handleTap('operator', '-')}
            />
          </Row>

          {/* Linha 4 */}
          <Row>
            <Button text="1" onPress={() => handleTap('number', 1)} size={undefined} theme={undefined}/>
            <Button text="2" onPress={() => handleTap('number', 2)} size={undefined} theme={undefined}/>
            <Button text="3" onPress={() => handleTap('number', 3)} size={undefined} theme={undefined}/>
            <Button
              text="+"
              size={undefined}
              theme="tertiary"  // Agora 'tertiary' para corresponder ao código anterior
              onPress={() => handleTap('operator', '+')}
            />
          </Row>

          {/* Linha 5 - Botões de zero, ponto e igual */}
          <Row>
            <Button
              text="0"
              size="double"
              theme={undefined}
              onPress={() => handleTap('number', 0)}
            />
              <Button text="." onPress={() => handleTap('number', '.')} size={undefined} theme={undefined}/>
            <Button
              text="="
              size={undefined}
              theme="tertiary"  // Agora 'tertiary' para corresponder ao código anterior
              onPress={() => handleTap('equal')}
            />
          </Row>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
