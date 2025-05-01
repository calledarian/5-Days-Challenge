import { useState } from "react"


export default function ProductPage() {

    const products = [
        { name: "Apple", description: "A juicy red fruit" },
        { name: "Banana", description: "A long yellow fruit" },
        { name: "Orange", description: "A round citrus fruit" },
        { name: "Mango", description: "A sweet tropical fruit" },
        { name: "Grapes", description: "A bunch of small sweet fruits" },
        { name: "Pineapple", description: "A spiky tropical fruit" },
    ];


    const [selectedCard, setSelectedCard] = useState(null);
    const [basket, setBasket] = useState([]);
    const [showBasket, setShowBasket] = useState(false);

    const openBasket = () => {
        setShowBasket(true)

    }

    const addToBasket = (card) => {
        console.log(card + "added to basket!");
        setBasket([...basket, card]);
    }

    const resetBasket = () => {
        setBasket([])
    }

    const removeCard = (index) => {
        setBasket(basket.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h3>Product Page</h3>
            <div className="ParentCard">
                {products.map((product, index) => (
                    <div className="Card" onClick={() => setSelectedCard(index)} key={index}>
                        {product.name}
                    </div>
                ))}

                {selectedCard !== null && (
                    <div className="Modal">
                        <div className="ModalContent">
                            <h2>{products[selectedCard].name}</h2>
                            <p>{products[selectedCard].description}</p>
                            <button onClick={() => addToBasket(selectedCard)}>Add to basket</button>
                            <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setSelectedCard(null)}>Close</button>
                        </div>
                    </div>
                )}
                <div className="Basket">
                    <button className="Basket-Icon" onClick={() => openBasket(true)}>
                        Basket ({basket.length})
                    </button>

                    {showBasket && (
                        <div className="Modal">
                            <div className="ModalContent">
                                <h2>Basket</h2>
                                <ul>
                                    {basket.map((item, index) => (
                                        <li key={index}>
                                            {products[item].name}
                                            <button onClick={() => removeCard(index)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={resetBasket}>Clear All</button>
                                <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setShowBasket(false)}>Close</button>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}