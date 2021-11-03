// Executa uma função para cada elemento retornando um único valor de retorno

const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },    
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 1
    }
]

/*      
        VERSÃO DETALHADA, QUE MOSTRA A SOMA DO PESO E A SOMA DA IDADE

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0}) // o 0 é o valor inicial da var 'total', passada como parâmetro

*/
    

//    VERSÃO SIMPLIFICADA, QUE MOSTRA APENAS A SOMA DO PESO DAS CHAVES DO TIPO CACHORRO

const totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total
    return total + pet.weight
}, 0) // o 0 é o valor inicial da var 'total', passada como parâmetro



console.log(totalWeight);





