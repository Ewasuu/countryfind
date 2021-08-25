

export function getCard({filter = 'all'} = {}){
  const url = `https://restcountries.eu/rest/v2/${filter}`
  return  fetch(url)
    .then(res => res.json())
    .then(res => {
          const countrie = res.map( data => {
            const  {flag} = data
            const  {name} = data
            const  {population} = data
            const  {region} = data
            const  {capital} = data
            const {nativeName} = data
            const {subregion} = data
            const {topLevelDomain} = data
            const {code} = data.currencies[0]
            const language = data.languages.map(res => res.name)
            const {borders} = data
            return {name, population, region, flag, capital, nativeName, subregion, topLevelDomain, code, language, borders}
          } )
          return countrie
        
      })
}