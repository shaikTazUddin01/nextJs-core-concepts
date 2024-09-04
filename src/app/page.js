export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const Home = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
    next:{
      revalidate:5
    }
  });
  const shoes =await res.json();
  // console.log(shoes);
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center font-semibold">This is Home</h1>
      <div className="flex justify-between">
      {shoes?.slice(0,4)?.map((shoe,idx) => {
        return (
          <div className="card bg-base-100 w-80 shadow-xl" key={idx}>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe?.title}</h2>
              <p>{shoe?.price}</p>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <a href="/allshoes">
      <button className="btn btn-outline my-10">Show more</button>
      </a>
    </div>
  );
};

export default Home;
