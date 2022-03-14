import "./_cards.scss";
import {useState} from "react";

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
    const [] = useState("false");
    console.log(cards[0].src);

    const shuffleCardsOnClick = () => {
        //console.log(cards.every(card => card.answer));
        setCards(randomizePosition(animalCards.concat(animalCards)));
    }

    return (
        <div>
            <button onClick={shuffleCardsOnClick}>Shuffle!</button>
            <div>
                {cards.map((card, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <img src={card.src} />
                            </div>
                            <div>
                                <img src="./images/cover.png" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}