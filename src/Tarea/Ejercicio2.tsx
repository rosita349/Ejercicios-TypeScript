import React, { useState, useEffect } from 'react';

export const Ejercicio2 = () => {
   
    const [resultado, setResultado] = useState<number>(0);
    const sumarElementos = (arreglo: number[]): number => {
        let suma: number = 0; 
        arreglo.forEach(valor => {
            suma += valor; 
        });

        return suma; 
    };

   
    const numeros: number[] = [1, 2, 3, 4, 5];

    useEffect(() => {
        const suma = sumarElementos(numeros);
        setResultado(suma); 
    }, []); 

    return (
        <div>
            <h3>
                2. Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo.
            </h3>
            <p>La suma de los números del arreglo es: {resultado}</p>
        </div>
    );
};