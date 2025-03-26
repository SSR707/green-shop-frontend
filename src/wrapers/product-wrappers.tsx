import { Products } from "@/app/_components/home/products/products";
import { getProductsFetch } from "../service/query/getProducts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategory } from "@/service/query/getCategorys";

const ProductWrappers = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => getProductsFetch({}),
  });
  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Products />
    </HydrationBoundary>
  );
};

export default ProductWrappers;
