import React from 'react';
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'
import TodoPage from './TodoPage';

const renderer = createRenderer()

const App = () => (
  <RendererProvider renderer={renderer}>
    <TodoPage></TodoPage>
  </RendererProvider>
);

export default App;