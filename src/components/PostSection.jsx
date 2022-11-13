import Post from "./Post.jsx";

function PostSection() {
  const Posts = [
    {
      id: "01",
      title: "Reviving Retro Pcs",
      excerpt: "What happens when old PCs are given modern upgarades?",
      cover: "/assets/image-retro-pcs.jpg",
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      excerpt: "Our best picks for various needs and budgets.",
      cover: "/assets/image-top-laptops.jpg",
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      excerpt: "How the pandemic has sparked fresh opportunities",
      cover: "/assets/image-gaming-growth.jpg",
    },
  ];
  return (
    <section className="px-3 flex flex-col w-full gap-5 lg:col-span-3 lg:flex-row lg:items-center lg:pt-10">
      {Posts.map((post) => (
        <div key={post.id} className="lg:w-4/12">
          <Post {...post} />
        </div>
      ))}
    </section>
  );
}

export default PostSection;
