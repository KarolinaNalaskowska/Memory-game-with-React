import React from 'react';
import {useEffect, useState} from "react";
import "./_cards.scss";
import "../../components/general/_general.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const animalCards = [
    {
        src:"images/lion.png",
        name: "Lion"
    },
    {
        src:"images/cheetah.png",
        name: "Cheetah"
    },
    {
        src:"images/antelope.png",
        name: "Antelope"
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
        src:"images/flamingo.png",
        name: "Flamingo"
    },
    {
        src:"images/rhino.png",
        name: "Rhino"
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

export default function Cards({ func }) {
    const [cards, setCards] = useState(() => randomizePosition(animalCards.concat(animalCards)));
    const [clickedCards, setClickedCards] = useState([]);
    const [guessedPairs, setGuessedPairs] = useState({});
    const [allCardsAreClickable, setAllCardsAreClickable] = useState(false);
    const [moves, setMoves] = useState(0);
    const [recordScore, setRecordScore] = useState(0);
    func(recordScore);
    const unclickable = () => {
        setAllCardsAreClickable(true);
    };
    const handleCardClick = (indexOfClickedCard) => {
        if(clickedCards.length === 1) {
            setClickedCards((prev) => [...prev, indexOfClickedCard]);
            unclickable();
        } else {
            setClickedCards([indexOfClickedCard]);
        }
    }
    useEffect(() => {
        const comparingCards =() => {
            const [firstClickedCard, secondClickedCard] = clickedCards;
            setAllCardsAreClickable(false)
            if (cards[firstClickedCard].name === cards[secondClickedCard].name) {
                setGuessedPairs((prev) => ({...prev, [cards[firstClickedCard].name]: true}));
                setMoves((prev) => prev + 1 );
                setClickedCards([]);
            } else {
                setMoves((prev) => prev + 1 );
            }
            setTimeout(() => {
                setClickedCards([]);
            }, 200);
        }
        let timeout = null;
        if(clickedCards.length === 2) {
            timeout = setTimeout(comparingCards, 500);
        }
            return () => {
            clearTimeout(timeout);
        };
    },[clickedCards, cards]);
    useEffect(() => {
        const checkingVictory = () => {
            if(animalCards.length === Object.keys(guessedPairs).length) {
                setGuessedPairs({});
                setRecordScore(moves);
                setMoves(0);
            }
        }
        checkingVictory();
    }, [guessedPairs, moves]);
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
        <div className="cards">
            <div className="cards__container">
                <div className="cards__scores">
                    <div className="score">Moves: {moves}</div>
                    <div className="score">Your last score: {recordScore}</div>
                </div>
            </div>
            <div className="cover">
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
            <div className="cards__container resetButton-container">
                <button onClick={reset} className="btn btn__reset">Reset</button>
            </div>
            <div className="cards__buttons">
                <Link to="/" className="btn__small">Main Page</Link>
                <Link to="/bestscores" className="btn__small">Best Scores</Link>
            </div>
        </div>
    )
}