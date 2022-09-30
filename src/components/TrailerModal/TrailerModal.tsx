import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./TrailerModal.scss";

export interface IVideos {
  id: number;
  results: [
    {
      key: string;
      type: string;
      site: string;
    }
  ];
}

type Props = {
  isOpen: boolean;
  toggle: () => void;
  videos: IVideos;
};

const TrailerModal = (props: Props): JSX.Element | null => {
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    const trailers = props.videos.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    if (trailers?.length > 0) setTrailer(trailers[0].key);
  }, [props]);

  return props.isOpen
    ? ReactDOM.createPortal(
        <div className="modal-bg">
          <div className="modal-content">
            <iframe
              width="1920"
              height="1080"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={props.toggle}>X</button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default TrailerModal;
