function Channel({ channel }) {
  const bgColor = `#${channel.color}`;

  return (
    <div className='flex w-[600px]'>
      <div className='w-60 h-auto'>
        <img src={channel.image} />
      </div>
      <div
        className='w-full flex flex-col items-start justify-center gap-6 p-4'
        style={{ background: bgColor }}
      >
        <h1 className=' text-4xl font-semibold'>{channel.name}</h1>

        <audio controls className=' min-w-full'>
          <source src={channel.liveaudio.url} type='audio/mpeg' />
        </audio>
      </div>
    </div>
  );
}

export default Channel;
