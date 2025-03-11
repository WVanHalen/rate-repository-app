import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (selectedOrder, searchQuery) => {
  let variables = {};
  if (selectedOrder === "highest") {
    variables = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
  } else if (selectedOrder === "lowest") {
    variables = { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
  } else {
    variables = { orderBy: "CREATED_AT", orderDirection: "DESC" };
  }

  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { ...variables, searchKeyword: searchQuery },
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;
