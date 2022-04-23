import { Link } from 'react-router-dom';
import starFavorited from '../../assets/icons/elements/star-filled.svg' ;
import starNotFavorited from '../../assets/icons/elements/star-outline.svg' ;

export type VideoProps = {
  handleFavorite: any,
  checkIThatVideoIsAfavoriteVideo: any,
  video: {
    nome: string
    id: string,
    createdAt: string,
    thumbUrl: string,
  }
};

export const Video = ({video, handleFavorite, checkIThatVideoIsAfavoriteVideo}: VideoProps) => {

  const dataFormatada = new Date(video.createdAt).toLocaleDateString('pt-br');
    
  return(
    <Link to={`/${video.id}`} className='videoContainer'>
      <div className='videoThumb'>
        <img src={video.thumbUrl} />
        <button className='favorite' onClick={(e) => handleFavorite(e, video.id)}>
          {checkIThatVideoIsAfavoriteVideo(video.id)? <img src={starFavorited} /> : <img src={starNotFavorited} />}
        </button>
        <p className='videoName'>{video.nome}</p>
        <p className='videoDate'>React - {dataFormatada}</p>
      </div>
    </Link>
  )
}