import { useEffect, useState } from "react"
import { getGrid } from "../helpers/getGifs";

export const useFetchGifs=(category) =>{
    const [state, setstate] = useState(
        {
            data:[],
            loading: true
        });
        useEffect(() => {
            getGrid(category)
                .then(imgs=>{
                 
                    console.log(imgs    )
                        setstate({
                                data:imgs,
                                loading: false
                        });    

            } )
           
        }, [category])
          //  useEffect(()=>{
    //      getGrid(category)
    //      .then( setImages)  ;
    //     },[category])
        
    return state; //{data:[], loading:true}

}