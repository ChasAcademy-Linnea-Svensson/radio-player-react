import { useState } from 'react';
import Channel from './Channel';
import ChannelList from './ChannelList';

function App() {
  return (
    <div className='flex flex-col items-center h-[100vh] py-6'>
      <ChannelList />
    </div>
  );
}

export default App;
