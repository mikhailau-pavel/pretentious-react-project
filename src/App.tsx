import { Component, ReactNode } from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ErrorBoundary fallback={<p>Hyperdrive Failure. Tap F5 Chewie!</p>}>
          <MainPage />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
