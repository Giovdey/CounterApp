
export const getImagen = async() => {

    try {
        const apiKey = 'u77GuxfQwEZj1iCmqWBwAGt0cmAXS8kA';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        return url;
       
    } catch (error) {
        return 'no existe';
    }
    
}

