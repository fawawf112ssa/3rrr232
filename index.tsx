import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'utils/i18n';

import { store } from 'store';
import { App } from 'modules/components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
