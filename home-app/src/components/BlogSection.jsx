import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setBlogs(response.data.blog_posts);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <section id="blogs" className="py-5">
      <div className="container">
        <h2 className="text-center">Latest Blogs</h2>
        <div className="row">
          {blogs.map(blog => (
            <div className="col-md-4" key={blog.id}>
              <div className="card">
                <img src={blog.imageUrl} className="card-img-top" alt={blog.title} />
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
