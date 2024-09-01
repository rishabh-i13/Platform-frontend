import React from "react";

const Posts = () => {
  const blogs = [
    {
      imgUrl:
        "https://th-i.thgim.com/public/incoming/8y78id/article68527890.ece/alternates/LANDSCAPE_1200/PTI08_15_2024_000033B.jpg",
      topic:
        "In his 11th I-day speech, PM Modi flags ‘secular civil code’,women’s safety, exudes pragmatism on Bangladesh",
      content:
        " In his 11th successive Independence Day address to the nation from the ramparts of the Red Fort, Prime Minister Narendra Modi gave a renewed push to the BJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before law for all.In his 11th successive Independence Day address to the nation from the ramparts of the Red Fort, Prime Minister Narendra Modi gave a renewed push to the BJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before law for all.",
      author: "Iron Man",
      date: "12th April 2024",
    },
    {
      imgUrl:
        "https://th-i.thgim.com/public/incoming/8y78id/article68527890.ece/alternates/LANDSCAPE_1200/PTI08_15_2024_000033B.jpg",
      topic:
        "In his 11th I-day speech, PM Modi flags ‘secular civil code’,women’s safety, exudes pragmatism on Bangladesh",
      content:
        "In his 11th successive Independence Day address to the nation from the ramparts of the Red Fort, Prime Minister Narendra Modi gave a renewed push to the BJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before law for all.",
      author: "Iron Man",
      date: "12th April 2024",
    },
    {
      imgUrl:
        "https://th-i.thgim.com/public/incoming/8y78id/article68527890.ece/alternates/LANDSCAPE_1200/PTI08_15_2024_000033B.jpg",
      topic:
        "In his 11th I-day speech, PM Modi flags ‘secular civil code’,women’s safety, exudes pragmatism on Bangladesh",
      content:
        "In his 11th successive Independence Day address to the nation from the ramparts of the Red Fort, Prime Minister Narendra Modi gave a renewed push to the BJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before law for all.",
      author: "Iron Man",
      date: "12th April 2024",
    },
    {
      imgUrl:
        "https://th-i.thgim.com/public/incoming/8y78id/article68527890.ece/alternates/LANDSCAPE_1200/PTI08_15_2024_000033B.jpg",
      topic:
        "In his 11th I-day speech, PM Modi flags ‘secular civil code’,women’s safety, exudes pragmatism on Bangladesh",
      content:
        "In his 11th successive Independence Day address to the nation from the ramparts of the Red Fort, Prime Minister Narendra Modi gave a renewed push to the BJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before lawJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before lawJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before lawJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before lawJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before lawJP’s ideological aim of a Uniform Civil Code, reframing the idea as a “secular civil code” enshrined in the Constitution and a way of ensuring equality before law for all.",
      author: "Iron Man",
      date: "12th April 2024",
    },
  ];
  return (
    <>
      <div className='w-full lg:w-[80%] mx-auto flex flex-col items-center'>
      <div className=" px-3 lg:p-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex mb-5 gap-5 bg-gray-100 border-gray-400 border p-4 my-10 rounded-md flex-col md:flex-row"
          >
            <div className="flex items-center min-w-64 md:min-w-[400px] lg:min-w-[450px] xl:min-w-[500px]">
              <img src={blog.imgUrl} alt="Modi" className="" />
            </div>
            <div className="flex-col">
              <h2 className=" text-3xl py-3"> {blog.topic} </h2>
              <h3 className="text-right py-2 text-gray-600">
                {" "}
                {blog.author}, {blog.date}{" "}
              </h3>
              <p className="h-32 overflow-y-auto p-3 my-5"> {blog.content} </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Posts;
