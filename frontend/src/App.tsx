import React from 'react';
import {Container} from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import {OrderDetailsProvider} from "./contexts/OrdearDetails";


function App() {
  return (
      <Container>
          <OrderDetailsProvider >
              <OrderEntry />
          </OrderDetailsProvider>
      </Container>
  );
}

export default App;
