const { useEffect, useState } = require("react")

const useFetch=(url)=>{
    // to fetch data from an api
    const [data,setData]=useState(null)
    useEffect(()=>{
    //make api call
    fetch(url).then((res)=>{
        res.json().then(data=>setData(data.products))
    })
    },[url])
    return data
}
export default useFetch;