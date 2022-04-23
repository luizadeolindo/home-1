import starFavorited from '../../assets/icons/elements/star-filled.svg' ;
import { Link } from 'react-router-dom';

export type VideoFavoritedProps = {
  handleRemoveAFavorite : any,
  video: {
    nome: string
    id: string,
    createdAt: string,
    thumbUrl: string,
  }
};

export const VideoFavorited = ({video, handleRemoveAFavorite}: VideoFavoritedProps) => {

  const dataFormatada = new Date(video.createdAt).toLocaleDateString('pt-br');

  return(
    <Link to={`/${video.id}`} className='videoContainer'>
      <div className='videoThumb'>
        <img src={video.thumbUrl} />
        <button className='favorite' onClick={(e) => handleRemoveAFavorite(video.id)}>
          <img src={starFavorited} />
        </button>
        <p className='videoName'>{video.nome}</p>
        <p className='videoDate'>React - {dataFormatada}</p>
      </div>
    </Link>
  )
}