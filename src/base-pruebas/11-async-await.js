export const getImagen = async () => {
  try {
    const apiKey = 'HEvxu2ifSsoPanYvrbD6Vr9nXshUncir';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    return data.images.original;
  } catch (error) {
    return 'No se encontró la imagen';
  }
};


