import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryLIstContainer";

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const { repositories, refetch } = useRepositories(
    selectedOrder,
    debouncedQuery
  );

  useEffect(() => {
    refetch();
  }, [selectedOrder, searchQuery]);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
    />
  );
};

export default RepositoryList;
