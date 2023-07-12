import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { DarkTheme, BaseProvider } from 'baseui'
import { Provider } from 'overmind-react';
import { config } from './overmindConfig';
import { createOvermind } from 'overmind';
import 'primereact/resources/themes/arya-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { PrimeReactProvider } from 'primereact/api';

const engine = new Styletron();

export const overmind = createOvermind(config, {
  devtools: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>

      <Provider value={overmind}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={DarkTheme}>
            <App />
          </BaseProvider>
        </StyletronProvider>
      </Provider>

    </PrimeReactProvider>
  </React.StrictMode>,
)
