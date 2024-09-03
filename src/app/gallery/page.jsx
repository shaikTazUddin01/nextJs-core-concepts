import Image from "next/image";
import nextImg from "../../assets/hero.webp";
const Gallery = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Regular Image</h1>

      <img
        src="https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE"
        alt="image"
        height={500}
        width={500}
        className="mx-auto"
      />
      <h1 className="text-4xl text-center">Next.Js Image Component</h1>

      <Image
        src="https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE"
        width={500}
        height={500}
        alt="image"
        className="mx-auto"
      />
      <h1 className="text-4xl text-center">Next.Js Local Component</h1>
      <Image src={nextImg} alt="image" width={500} height={500}  
      placeholder="blur"
     
      className="mx-auto"/>
    </div>
  );
};

export default Gallery;
