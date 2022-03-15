import {useEffect, useState} from "react";
import Card from "../Card/Card";
import "./_cards.scss";

const animalCards = [
    {
        src:"images/bear.png",
        name: "Bear"
    },
    {
        src:"images/cheetah.png",
        name: "Cheetah"
    },
    {
        src:"images/toucan.png",
        name: "Toucan"
    },
    {
        src:"images/elephant.png",
        name: "Elephant"
    },
    {
        src:"images/giraffe.png",
        name: "Giraffe"
    },
    {
        src:"images/zebra.png",
        name: "Zebra"
    },
    {
        src:"images/panda.png",
        name: "Panda"
    },
    {
        src:"images/fawn.png",
        name: "Fawn"
    }
]

function randomizePosition(arr) {
    const lng = arr.length;
    for (let i = lng; i > 0; i--) {
        const changedIndex = Math.floor(Math.random() * i);
        const index = i - 1;
        const temp = arr[index];
        arr[index] = arr[changedIndex];
        arr[changedIndex] = temp;
    }
    return arr;
}

export default function Cards() {
    const [cards, setCards] = useState(() => randomizePosition(animalCards.concat(animalCards)));
    const [clickedCards, setClickedCards] = useState([]);
    const [guessedPairs, setGuessedPairs] = useState({});
    const [allCardsAreClickable, setAllCardsAreClickable] = useState(false);
    const [moves, setMoves] = useState(0);

    const unclickable = () => {
        setAllCardsAreClickable(true);
    };
    const clickable = () => {
        setAllCardsAreClickable(false);
    };
    const checkingVictory = () => {
        if(animalCards.length === Object.keys(guessedPairs).length) {
            setMoves(0);
            setGuessedPairs({});
        }
    }
    const comparingCards = () => {
        const [firstClickedCard, secondClickedCard] = clickedCards;
        clickable();
        if (cards[firstClickedCard].name === cards[secondClickedCard].name) {
            setGuessedPairs((prev) => ({...prev, [cards[firstClickedCard].name]: true}));
            setMoves((prev) => prev + 1 );
            setClickedCards([]);
        } else {
            setMoves((prev) => prev + 1 );
        }
    }
    const handleCardClick = (indexOfClickedCard) => {
        console.log(indexOfClickedCard);
        if(clickedCards.length === 1) {
            setClickedCards((prev) => [...prev, indexOfClickedCard]);
            unclickable();
        } else {
            setClickedCards([indexOfClickedCard]);
        }
    }
    useEffect(() => {
        let timeout = null;
        if(clickedCards.length === 2) {
            timeout = setTimeout(comparingCards, 500);
        }
            return () => {
            clearTimeout(timeout);
        };
    },[clickedCards]);
    useEffect(() => {
        checkingVictory();
    }, [guessedPairs]);
    const isFlipped = (index) => {
        return clickedCards.includes(index);
    }
    const isInactive = (card) => {
        return Boolean(guessedPairs[card.name]);
    }
    const reset = () => {
        setMoves(0);
        setGuessedPairs({});
        setClickedCards([]);
        setAllCardsAreClickable(false);
        setCards(randomizePosition(animalCards.concat(animalCards)));
    }

    return (
        <div>
            <button onClick={reset}>New Game!</button>
            <p>Moves: {moves}</p>
            <div className="grid">
                {cards.map((element, index) => {
                    return (
                        <Card
                            key={index}
                            card={element}
                            index={index}
                            clickable={allCardsAreClickable}
                            flipped={isFlipped(index)}
                            inactive={isInactive(element)}
                            onClick={handleCardClick}
                        />
                    );
                })}
            </div>
        </div>
    )
}