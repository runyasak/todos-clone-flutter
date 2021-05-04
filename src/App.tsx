import React from 'react';
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'
import TodoPage from './pages/Todo.page';

const renderer = createRenderer()

const App: React.FC = () => (
  <RendererProvider renderer={renderer}>
    <TodoPage></TodoPage>
  </RendererProvider>
);

export default App;