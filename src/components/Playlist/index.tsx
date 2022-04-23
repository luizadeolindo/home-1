import apiClient from "../../services/api-client";
import { useMemo} from "react";
import { useAuthenticated } from "../../components/VerifyAuth";
import { PlaylistProps } from "./PlaylistTypes";
import { VideoFavorited } from "../VideoFavorited";
import { PlaylistTitle } from "../PlaylistTitle";
import { PlaylistContainer } from "../PlaylistContainer";
import { Video } from "../Video";

const Playlist: React.FC<PlaylistProps> = ({ videos, favoriteVideos }) => {
  const { isAuthenticated } = useAuthenticated();

  const favoriteVideosId = useMemo<string[]>(() => {
    const favoriteVideosIdArr: null | string[] = [];

    if (favoriteVideos.length > 0) {
      favoriteVideos.map((f) => {
        favoriteVideosIdArr.push(f.id);
      });
    }
    return favoriteVideosIdArr;
  }, [favoriteVideos]);


  const handleAddNewFavorite = async (videoId: string) => {
    const url = `/videos/${videoId}/favoritos`;
    console.log("adding a video from favories");

    try {
      await apiClient.post(url);
    } catch (error) {
      console.log("Error to favorite a new video");
    }
  };

  const handleRemoveAFavorite = async (videoId: string) => {
    const url = `/videos/${videoId}/favoritos`;
    console.log("removing a video from favories");
    try {
      await apiClient.delete(url);
    } catch (error) {
      console.log("Error to favorite a new video");
    }
  };

  const checkIThatVideoIsAfavoriteVideo = (id: string) => {
    const videoId = favoriteVideosId.filter((fv) => {
      return fv === id;
    });

    if (videoId.length > 0) return true;
    else return false;
  };

  const handleFavorite = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (checkIThatVideoIsAfavoriteVideo(id)) {
      handleRemoveAFavorite(id);
    } else {
      handleAddNewFavorite(id);
    }
  };

  return (
    <div className="home">
      {isAuthenticated && (
        <PlaylistContainer>
          <PlaylistTitle title="Favoritos" />
            <div className="videos">
            {favoriteVideos.length > 0
              ? favoriteVideos.map(video => <VideoFavorited video={video} key={video.id} handleRemoveAFavorite={handleRemoveAFavorite}/>)
              : "Você ainda não possui vídeos favoritos a serem exibidos aqui. Para começar a favoritar, clique no ícone de estrela."}
            </div>
        </PlaylistContainer>)}

      <PlaylistContainer>
        <PlaylistTitle title="Aulão" />
        <div className="videos">
              {videos.filter(v => v.nome === "Aulão POO").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
        </div>
      </PlaylistContainer>

      {isAuthenticated && (
        <PlaylistContainer>
          <PlaylistTitle title="Semana 01" />
          <div className="videos">
            {videos.filter(v => v.topico === "semana 01").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
          </div>
        </PlaylistContainer>)}

       {isAuthenticated && (
        <PlaylistContainer>
          <PlaylistTitle title="Semana 02" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 02").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)} 

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 03" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 03").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)}

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 04" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 04").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)}

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 05" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 05").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)}

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 06" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 06").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)}

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 07" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 07").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)} 

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Semana 08" />
            <div className="videos">
              {videos.filter(v => v.topico === "semana 08").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)} 

        {isAuthenticated && (
          <PlaylistContainer>
            <PlaylistTitle title="Monitoria" />
            <div className="videos">
              {videos.filter(v => v.topico === "monitoria").map(video => <Video video={video} key={video.id} handleFavorite={handleFavorite} checkIThatVideoIsAfavoriteVideo={checkIThatVideoIsAfavoriteVideo}/>)}
            </div>
          </PlaylistContainer>)} 
      </div>
  );
};

export default Playlist;