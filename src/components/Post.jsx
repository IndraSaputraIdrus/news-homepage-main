function Post(props) {
  return (
    <div className="flex gap-3 relative">
      <img src={props.cover} alt="post" className="w-2/6" />
      <div className="w-4/6 flex flex-col justify-between">
        <span className="text-4xl font-bold text-gray-300">{props.id}</span>
        <h3 className="font-bold text-xl">{props.title}</h3>
        <p className="text-gray-500 mb-1">{props.excerpt}</p>
      </div>
    </div>
  );
}

export default Post;
