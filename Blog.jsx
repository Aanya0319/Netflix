import "./Blog.css";


const blogs = [
  {
    id: 1,
    title: "Top 10 Netflix Web Series",
    desc: "Best Netflix web series you should watch in 2025.",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  },
  {
    id: 2,
    title: "Best Netflix Movies",
    desc: "Top trending movies on Netflix right now.",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
  },
  {
    id: 3,
    title: "Netflix Originals",
    desc: "Why Netflix Originals are so popular.",
    img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/13-Reasons-Why-Stranger-Things-and-Daredevil-in-Best-Netflix-Original-TV-Shows.jpg",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <h1 className="heading">Netflix Blog</h1>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
