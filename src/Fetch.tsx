import React, {useEffect, useState} from 'react'

interface Poke {
    name: string,
    url: string
}

type PokeData = {
    count: number
    next: string
    previous: null | string
    results: Poke[]
}

//this basically says that our getProps function will return a Promise whose type is PokeData. The type is shaped the same as the data returned from the PokeApi
async function getPoke(): Promise<PokeData> {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    if (!res.ok) {
        throw new Error("failed to fetch")
    }

    return res.json()
}

export default async function Pokemons() {
    const [pokemons, setPokemons] = useState<Poke[]>([])
    const data = await getPoke()
    
    // useEffect(() => {
    //     const data = getPoke()
    // }, [])
    // setPokemons([])

    return (
        <div>
            {data.results.map((p) => p.name)}
        </div>
    )
}