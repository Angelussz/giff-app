export const getGifs = async(category)=>{
    const url = `${import.meta.env.VITE_API_GIFT}${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json()
    const gifs = data.map(img=> ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
    // console.log(gifs)
    return gifs
}