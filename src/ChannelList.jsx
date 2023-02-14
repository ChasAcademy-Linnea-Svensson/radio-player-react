import React, { useEffect, useState } from 'react';
import Channel from './Channel';
import Skeleton from './Skeleton';

function ChannelList() {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState('');

  const getChannels = async () => {
    const response = await fetch(
      'https://api.sr.se/api/v2/channels?format=json&size=100'
    );

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getChannels().then((data) => {
      setChannels(
        data.channels.filter((channel) =>
          channel.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setLoading(false);
    });
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='flex flex-col gap-6'>
      <input
        type='text'
        placeholder='Search Channel'
        className='border-2 p-2 min-w-[600px]'
        value={search}
        onChange={handleChange}
      />
      <div className={`flex flex-col gap-6 ${loading ? 'block' : 'hidden'}`}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      {channels.map((channel) => (
        <Channel key={channel.id} channel={channel} />
      ))}
      <h1 className={channels.length === 0 ? 'block' : 'hidden'}>
        No Channels Found
      </h1>
    </div>
  );
}

export default ChannelList;
