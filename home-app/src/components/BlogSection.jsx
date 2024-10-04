import React, { useState, useEffect } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Adjusted access to the blogs array
        if (data.blogs) { 
          setBlogs(data.blogs); 
        } else {
          console.error('No blogs found in the response:', data);
          setError('No blog posts available at the moment.');
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <section id="blogs" className="py-5">
      <div className="container">
        <h2 className="text-center">Latest Blogs</h2>
        <div className="row">
          {blogs.map(blog => (
            <div className="col-md-4" key={blog.id}>
              <div className="card mb-4">
                <img src={blog.photo_url} className="card-img-top" alt={blog.title} />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
