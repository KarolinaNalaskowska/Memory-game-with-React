import "./_cards.scss";
import {useEffect, useState} from "react";
import Card from "../Card/Card";
import {click} from "@testing-library/user-event/dist/click";

const animalCards = [
    {
        answer: false,
        src:"images/bear.png",
        name: "Bear"
    },
    {
        answer: false,
        src:"images/cheetah.png",
        name: "Cheetah"
    },
    {
        answer: false,
        src:"images/toucan.png",
        name: "Toucan"
    },
    {
        answer: false,
        src:"images/elephant.png",
        name: "Elephant"
    },
    {
        answer: false,
        src:"images/giraffe.png",
        name: "Giraffe"
    },
    {
        answer: false,
        src:"images/zebra.png",
        name: "Zebra"
    },
    {
        answer: false,
        src:"images/panda.png",
        name: "Panda"
    },
    {
        answer: false,
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
    const [cardAnswer, setCardAnswer] = useState(false);

    const shuffleCardsOnClick = () => {
        setCards(randomizePosition(animalCards.concat(animalCards)));
    }

    const comparingCards = () => {
        const [firstClickedCard, secondClickedCard] = clickedCards;
        console.log("Compared");
        console.log(cards[firstClickedCard].name);
        console.log(cards[secondClickedCard].name);
        //console.log(cards.every(card => card.answer));
        if (cards[firstClickedCard].name === cards[secondClickedCard].name) {
            console.log("The same");
            setGuessedPairs((prev) => ({ ...prev, [cards[firstClickedCard].name]: true }));
            setClickedCards([]);

        } else {
            console.log("ehh");
            setClickedCards([]);
        }
            return;
    }
    console.log(guessedPairs);
    const handleCardClick = (indexOfClickedCard) => {
        console.log(indexOfClickedCard);
        setClickedCards((prev) => [...prev, indexOfClickedCard]);
    }

    useEffect(() => {
        setTimeout(comparingCards, 1000);
        console.log(clickedCards);
        console.log("Wykonałem funkcję");
    },[clickedCards]);

    const isFlipped = (index) => {
        return clickedCards.includes(index);
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