import { useRouter } from "next/router";
import { memo, useEffect, useLayoutEffect, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import BlogsCard from "../../components/BlogsCard";
import GradientText from "../../components/GradientText";
import * as actions from "../../store/actions/actions";

const FavoritesScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(
      actions.getFavoritesBlogs({
        userId: state.user?.userId,
        token: state.token,
      })
    );
  }, []);

  useEffect(() => {
    return () => {
      dispatch(actions.setCategory(null));
    };
  }, []);

  const openBlogHandler = (id) => router.push("/blogs/" + id);

  const favorites = state.favoriteBlogs ?? [];

  if (!state.isUserLoggedIn) {
    router.push("/authentication");
    return <></>;
  }

  const favoritesSkeleton = (
    <>
      <div className="flex flex-col rounded-2xl overflow-hidden my-10  w-40 h-32 items-start justify-start">
        <Skeleton width={175} height={150} />
      </div>
      <div className="flex flex-col rounded-2xl overflow-hidden my-10  w-40 h-32 items-start justify-start">
        <Skeleton width={175} height={150} />
      </div>
      <div className="flex flex-col rounded-2xl overflow-hidden my-10  w-40 h-32 items-start justify-start">
        <Skeleton width={175} height={150} />
      </div>
    </>
  );

  return (
    <div className="flex w-full h-full mt-24 z-10 p-5 flex-col items-center space-y-5 smd:ml-16 smd:mr-[216px] md:ml-16 md:mr-[264px] xl:mr-[295px] mb-20 smd:mb-0 md:mb-0">
      <GradientText customCss="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        My Favorites
      </GradientText>

      <div className="flex flex-col w-full space-y-10 shadow-sm dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 rounded-xl p-5 ">
        <div className="flex pl-5 space-x-3 flex-wrap">
          {state.isLoading && favoritesSkeleton}

          {favorites.length > 0 && !state.isLoading ? (
            favorites.map((item, index) => {
              return (
                <BlogsCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  onClick={() => openBlogHandler(item.id)}
                />
              );
            })
          ) : (
            <div className="flex h-52">
              {!state.isLoading && <span>No Favorites added yet</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(FavoritesScreen);
