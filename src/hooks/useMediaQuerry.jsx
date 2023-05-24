import { useState, useEffect } from "react";
const useMediaQuerry =(querry)=>{
    const [matches, setMatches] =useState(false)
    useEffect(()=>{
        const media = window.matchMedia(querry);
        if(media.matches !==matches) {
            setMatches(media.matches)
        }
        const listerner =()=>setMatches(media.matches);
        window.addEventListener("resize", listerner);
        return()=> window.removeEventListener("resize", listerner)
    },[matches, querry])
    return matches
}

export default useMediaQuerry;