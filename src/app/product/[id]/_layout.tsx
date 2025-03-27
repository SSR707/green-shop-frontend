import Link from "next/link";

const ProductDetailLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="container">
      <div className="felx">
        <Link href={`/product/${params.id}/description`}>descriprion</Link>
        <Link href={`/product/${params.id}/reviews`}>Rewius</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProductDetailLayout;
