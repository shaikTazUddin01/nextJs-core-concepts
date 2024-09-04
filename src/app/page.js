export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const Home = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes =await res.json();
  console.log(shoes);
  return (
    <div>
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
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
