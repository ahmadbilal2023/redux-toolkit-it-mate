import Image from "next/image";
import ProductList from "./components/productList";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-10 text-2xl">
        Redix Toolkit
      </div>
      <ProductList />
    </>
  );
}
