import { FirstSteps,ItemCounter } from "./components";
import { initialItemsInCart } from "./data";
import type { ItemInCart } from "./interfaces";


function App() {
    const items:ItemInCart[] = initialItemsInCart;
    return (
        <>
            <FirstSteps />
            {/* <MyAwesome/> */}
            {
                items.map(item=>(
                    <ItemCounter key={item.name} title={item.name} quantity={item.quantity} />
                ))
            }
        </>
    );
}

export default App;
