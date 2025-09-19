function HomePage() {
  return (
    <div className="flex items-center justify-center h-full bg-black">
      <div className="bg-black border-2 border-yellow-400 rounded-xl p-8 max-w-lg text-center shadow-lg">
        <h1 className="text-yellow-400 text-3xl font-extrabold mb-4">
          Welcome to PostMania!
        </h1>
        <p className="text-gray-200 text-lg">
          PostMania is your ultimate platform to share, explore, and interact
          with amazing posts. Discover trending topics, write your own posts,
          and connect with the community!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
