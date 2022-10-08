function GetImages(ogPath: string, w500Path?: string) {
  return {
    og: `https://image.tmdb.org/t/p/original/${ogPath}`,
    w500: `https://image.tmdb.org/t/p/w500/${w500Path ? w500Path : ogPath}`,
  };
}

export default GetImages;
