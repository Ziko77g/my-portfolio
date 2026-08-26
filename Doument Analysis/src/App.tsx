import { AppProvider } from './context/AppContext';
import { AppLayout } from './layouts/AppLayout';

export function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

export default App;
