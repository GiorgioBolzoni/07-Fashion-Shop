import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
    <CartContextProvider> 
      {/* Provider è una proprietà fornita da React per passare un Context creato da React oltre ad 'items' che ho creato io */}
      {/* value={ shoppingCart } mi permette di collegare il Context allo State ma non sto ancora utilizzando effettivamente il Context, perciò uso "const ctxValue"*/}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
      </Shop>
    </CartContextProvider>

  );
}

export default App;


  // un'alternativa a .Provider è .Consumer ma è più vecchia e necessita di una funzione come 'children'
  // <CartContext.Consumer>
  //   {(CartContext) => { 
  //     const totalPrice = items.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );
  //   } }
  //   ......
  // </CartContext.Consumer>
 