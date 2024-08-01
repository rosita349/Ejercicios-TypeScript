import React from 'react';

export const Ejercicio1 = () => {
    const multiplicar = (lado1: number, lado2: number): number => {
        return lado1 * lado2;
    };
    const lado: number = 6;

    return (
        <div>
            <h1>
                1. Crear una función con parámetros que permita calcular el área de un cuadrado.
            </h1>
            <span>El área del cuadrado es: {multiplicar(lado, lado)}</span>
        </div>
    );
};
