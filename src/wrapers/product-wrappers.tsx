import { Products } from "@/app/_components/home/products/products";
import { getProductsFetch } from "../service/query/getProducts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const ProductWrappers = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () =>
      getProductsFetch({}),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Products />
    </HydrationBoundary>
  );
};

export default ProductWrappers;
