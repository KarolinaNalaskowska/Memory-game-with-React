import "./_cards.scss";
import {useEffect, useState} from "react";
import Card from "../Card/Card";
import {click} from "@testing-library/user-event/dist/click";

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
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);

    const disable = () => {
        setShouldDisableAllCards(true);
        console.log("true");
    };
    const enable = () => {
        setShouldDisableAllCards(false);
        console.log("false");
    };

    const shuffleCardsOnClick = () => {
        setCards(randomizePosition(animalCards.concat(animalCards)));
    }

    const comparingCards = () => {
        const [firstClickedCard, secondClickedCard] = clickedCards;
        enable();
        if (cards[firstClickedCard].name === cards[secondClickedCard].name) {
            setGuessedPairs((prev) => ({ ...prev, [cards[firstClickedCard].name]: true }));
            setClickedCards([]);
        } else {
            setClickedCards([]);
        }
    }

    const checkingVictory = () => {
        if(animalCards.length === Object.keys(guessedPairs).length) {
            console.log("You win!");
            setGuessedPairs({});
        }
    }

    const handleCardClick = (indexOfClickedCard) => {
        if(clickedCards.length === 1) {
            setClickedCards((prev) => [...prev, indexOfClickedCard]);
            disable();
        } else {
            setClickedCards([indexOfClickedCard]);
        }
    }

    useEffect(() => {
        let timeout = null;
        if(clickedCards.length === 2) {
            timeout = setTimeout(comparingCards, 100);
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
    const isInactive = () => {

    }

    return (
        <div>
            <button onClick={shuffleCardsOnClick}>Shuffle!</button>
            <div className="grid">
                {cards.map((element, index) => {
                    return (
                        <Card
                            key={index}
                            card={element}
                            index={index}
                            onClick={handleCardClick}
                            flipped={isFlipped(index)}
                        />
                    );
                })}
            </div>
        </div>
    )
}