import React from 'react';

export const Ejercicio3 = () => {
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const arregloDividido: number[] = arreglo.map(valor => valor / 5);

    return (
        <div>
            <h3>
                3. Del siguiente arreglo devolver un nuevo arreglo con los valores divididos por 5:
            </h3>
            <p>Arreglo original: {arreglo.join(', ')}</p>
            <p>Arreglo dividido por 5: {arregloDividido.join(', ')}</p>
        </div>
    );
};