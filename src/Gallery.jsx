import React from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["unsplash-images"],
    queryFn: () =>
      customFetch.get(
        `photos?client_id=HUdvVjUHEY1z73Vb5GZXWfluGsDfu7vJ1ihVe2QJLaY&query=${searchTerm}`
      ),
  });
  console.log(data);
  const results = data?.data?.results;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="  inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-[#645CFF] "
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (results.length < 1) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h4>No results found !!!</h4>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4 w-3/4 mx-auto">
        {results.map((image) => {
          return (
            <div key={image.id} className="img">
              <img src={image?.urls?.regular} alt={image.alt_description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
