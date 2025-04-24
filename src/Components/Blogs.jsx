import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/question.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="font-bold mt-5 text-3xl text-center">Blogs</h1>
        <p className="text-gray-500 text-center my-10">
          Let's explore some basic concept that will make you a good developer
        </p>

        <div>
          {blogs.map((item, index) => (
            <div key={index} className="bg-white mb-5 p-5 rounded-2xl mx-20">
              <h1 className="font-bold mb-2">{item.question}</h1>
              <hr className="border-dashed mb-2 border-gray-400" />
              <h2 className="text-blue-500">Answer:</h2>
              <p className="font-medium">{item.answer}</p>
              <hr className="border-dashed mt-2 mb-2 border-gray-400" />
              <h1 className="text-gray-500">Added at 2023-11-12</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
