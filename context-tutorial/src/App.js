import React from 'react';
import ColorBox from './component/ColorBox';
import SelectColor from './component/SelectColor';
import ColorContext, { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
    );
};

export default App;