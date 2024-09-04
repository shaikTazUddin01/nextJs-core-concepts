import { error } from "console";
import React from "react";

const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
    cache:'no-store'
  });
  const shoes = await res.json();
//   throw new Error('error form home page');
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {shoes?.map((shoe, idx) => {
          return (
            <div className="card bg-base-100  shadow-xl" key={idx}>
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
                  <button className="btn btn-outline btn-primary">
                    Buy Now
                  </button>
                  <button className="btn btn-outline btn-primary">
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllShoes;
