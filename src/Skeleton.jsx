function Skeleton() {
  return (
    <div className='flex w-[600px]'>
      <div className='w-60 h-auto bg-gray-700'>
        <img src='/loader.gif' />
      </div>
      <div className='w-full flex flex-col items-start justify-center gap-6 p-4 bg-gray-400'>
        <h1 className=' text-4xl font-semibold'>Loading Channel</h1>

        <audio controls className='w-full'>
          <source src='' type='audio/mpeg' />
        </audio>
      </div>
    </div>
  );
}

export default Skeleton;
