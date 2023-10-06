import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../services/store/hook";
import { fetchLaunches } from "../../services/store/launches/launchesSlice";
import { ILaunches } from "../../services/store/sagas/launchesSaga/launchesTypes";

export const useViewModel = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedLaunche, setSelectedLaunche] = useState<ILaunches>();
  const [searchResults, setSearchResults] = useState<ILaunches[]>([]);

  const refreshListLoaderFeedBack = useAppSelector(
    (state) => state.launches.launchesLoading
  );

  const loading = useAppSelector((state) => state.launches.launchesLoading);

  const launches = useAppSelector((state) => state.launches.launches);

  const launchesPerPage = 20;

  const startIndex = (currentPage - 1) * launchesPerPage;

  const launchesForCurrentPage = launches.slice(
    startIndex,
    startIndex + launchesPerPage
  );

  const totalPages = Math.ceil(launches.length / launchesPerPage);

  async function handleLaunches() {
    setLoadingNextPage(true);

    await dispatch(fetchLaunches(currentPage));

    setLoadingNextPage(false);
  }

  useEffect(() => {
    handleLaunches();
  }, [currentPage]);

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  async function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const filteredName = useAppSelector((state) => state.launches.filteredName);

  function updateSearchResults(name: string) {
    const filteredLaunches = launches.filter(
      (launch) =>
        launch?.name && launch?.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearchResults(filteredLaunches);
  }

  function handleSelectLaunches(launche: ILaunches) {
    setSelectedLaunche(launche);
    handleModalDetails();
  }

  function handleModalDetails() {
    setOpenModal(!openModal);
  }

  return {
    loading,
    dispatch,
    openModal,
    launches,
    totalPages,
    currentPage,
    filteredName,
    searchResults,
    handleLaunches,
    selectedLaunche,
    handlePrevPage,
    handleNextPage,
    loadingNextPage,
    handleModalDetails,
    setSelectedLaunche,
    updateSearchResults,
    handleSelectLaunches,
    launchesForCurrentPage,
    refreshListLoaderFeedBack,
  };
};
