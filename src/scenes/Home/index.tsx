import Background from "@assets/images/home-background.png";
import Header from "@components/Header";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useRef } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import Load from "../../components/Animations/Load";
import CardLaunches from "../../components/CardLaunches";
import DetailsModal from "../../components/DetailsModal";
import { filterLaunchesByName } from "../../services/store/launches/launchesSlice";
import { ILaunches } from "../../services/store/sagas/launchesSaga/launchesTypes";
import LaunchesFilter from "./components/LaunchesFilter";
import * as S from "./styles";
import { useViewModel } from "./viewModel";

const Home: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, []);

  const {
    loading,
    dispatch,
    openModal,
    totalPages,
    currentPage,
    filteredName,
    searchResults,
    handleLaunches,
    handlePrevPage,
    handleNextPage,
    loadingNextPage,
    selectedLaunche,
    setSelectedLaunche,
    handleModalDetails,
    updateSearchResults,
    handleSelectLaunches,
    launchesForCurrentPage,
    refreshListLoaderFeedBack,
  } = useViewModel();

  return (
    <>
      <S.Background
        source={Background}
        resizeMode="cover"
        style={[StyleSheet.absoluteFillObject, { overflow: "hidden" }]}
      />

      <Header arrowDisabled={true} />
      <S.Container>
        <S.Filter>
          <LaunchesFilter
            name={filteredName}
            updateLaunchesName={(eventName: string) => {
              updateSearchResults(eventName);
              dispatch(filterLaunchesByName(eventName));
            }}
          />
        </S.Filter>

        {loading ? (
          <Load />
        ) : (
          <S.Content
            ref={scrollRef}
            refreshControl={
              <RefreshControl
                refreshing={refreshListLoaderFeedBack}
                onRefresh={handleLaunches}
              />
            }
          >
            {searchResults.length > 0
              ? searchResults.map((launch: ILaunches) => (
                  <CardLaunches
                    key={launch.id}
                    name={launch.name || "Sem nome"}
                    image={launch.links.patch.small || ""}
                    date_utc={launch.date_utc || ""}
                    onAction={() => {
                      handleSelectLaunches(launch);
                      setSelectedLaunche(launch);
                    }}
                  />
                ))
              : launchesForCurrentPage.map((launch: ILaunches) => (
                  <CardLaunches
                    key={launch.id}
                    name={launch.name || "Sem nome"}
                    image={launch.links.patch.small || ""}
                    date_utc={launch.date_utc || ""}
                    onAction={() => {
                      handleSelectLaunches(launch);
                      setSelectedLaunche(launch);
                    }}
                  />
                ))}
            <S.ButtonContainer>
              <S.Button onPress={handlePrevPage} disabled={currentPage === 1}>
                <S.ButtonText>Página anterior</S.ButtonText>
              </S.Button>
              <S.Button
                onPress={handleNextPage}
                disabled={loadingNextPage || currentPage === totalPages}
              >
                <S.ButtonText>Próxima página</S.ButtonText>
              </S.Button>
            </S.ButtonContainer>
            <S.Loading>{loadingNextPage && <Load />}</S.Loading>
          </S.Content>
        )}
        <DetailsModal
          image={
            selectedLaunche?.links?.patch?.small ||
            "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png"
          }
          color={selectedLaunche?.cores?.length || 0}
          rocket={selectedLaunche?.name || "Nome não disponível"}
          launchDate={
            moment(selectedLaunche?.date_utc).format("DD/MM/YYYY") ||
            "Data não disponível"
          }
          launchStatus={
            selectedLaunche?.success === true ? "Success" : "Failure"
          }
          details={selectedLaunche?.details?.slice(0, 100) || "Sem detalhes"}
          videoId={selectedLaunche?.links?.youtube_id || ""}
          wikipediaURL={selectedLaunche?.links?.wikipedia || ""}
          onAction={handleModalDetails}
          onClose={handleModalDetails}
          isVisible={openModal}
        />
      </S.Container>
    </>
  );
};

export default Home;
