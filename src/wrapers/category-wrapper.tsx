import { Category } from "@/app/_components/home/category/catgory";
import { getCategory } from "@/service/query/getCategorys";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const CategoryWrappers = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Category />
    </HydrationBoundary>
  );
};

export default CategoryWrappers;
