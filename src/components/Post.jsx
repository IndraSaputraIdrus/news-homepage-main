function Post(props) {
  return (
    <div className="flex gap-3 relative z-1 w-full">
      <div className="w-2/6">
        <img src={props.cover} alt="post" />
      </div>
      <div className="w-4/6 overflow-hidden space-y-4 flex justify-center flex-col">
        <span className="text-4xl font-bold text-gray-300 lg:text-5xl">{props.id}</span>
        <h3 className="font-bold text-xl hover:text-red-500 lg:text-md">{props.title}</h3>
        <p className="text-gray-500 mb-1 lg:text-md">{props.excerpt}</p>
      </div>
    </div>
  );
}

export default Post;
