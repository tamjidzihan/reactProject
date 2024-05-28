import useGameDetails from '../hooks/useGameDetails'


function GameDetails() {

    const { gameDetails } = useGameDetails(3498)
    return (
        <>
            {gameDetails?.name}
        </>
    )
}

export default GameDetails
