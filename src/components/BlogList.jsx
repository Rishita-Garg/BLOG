import React from 'react';

const BlogList = () => {
  const blogs = [
    { title: "Blog Post 1", summary: "This is the summary of blog post 1." },
    { title: "Blog Post 2", summary: "This is the summary of blog post 2." },
    { title: "Blog Post 3", summary: "This is the summary of blog post 3." },
  ];

  return (
    <div className="space-y-4">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <p>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
