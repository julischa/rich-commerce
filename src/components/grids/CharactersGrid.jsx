import Character from '../Character/Character'

const CharactersGrid = ({ characters }) => {
  return (
    <div className='mt-5 w-full grid grid-cols-3 gap-x-10 gap-y-10'>
      {characters.length > 0
        ? characters.map((character) => (
            <Character character={character} key={character.rank} />
          ))
        : ''}
    </div>
  )
}

export default CharactersGrid
