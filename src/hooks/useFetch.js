import { useState,useEffect } from "react";

export const useFetch = (url) => {

    const [data,setData] = useState(null);
    
    //Post
    const [config,setConfig] = useState(null);
    const [method,setMethod] = useState(null);
    const [callFetch,setCallFetch] = useState(null);

    //loading
    const [loading,setLoading] = useState(false);
    //error
    const [error,setError] = useState(null);

    //Delete
    const [itemId,setItemId] = useState(null);

    const httpConfig = (data,method) => {

        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-Type":"application/json"
                }
            });
            setMethod(method);
            setItemId(data);
        
        }else if(method === "PUT"){
            setConfig({
                method,
                headers: {
                    "content-Type":"application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }

    }

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);

            try{
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            
            }catch(error){
                console.log(error);
                setError("Houve um erro ao carregar os dados");
            }
            setLoading(false);
        }

        fetchData();

    },[url,callFetch]);

    useEffect(() => {

        const httpRequest = async () => {
            
            let json;

            if(method === "POST"){
                
                let fetchOptions = [url,config];

                const res = await fetch(...fetchOptions);

                json = await res.json();

            }else if(method === "DELETE"){
                
                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl,config)

                json = await res.json();
            
            }else if(method === "PUT"){
                let fetchOptions = [url,config];

                const res = await fetch(fetchOptions);

                json = await res.json();
            }
            setCallFetch(json);
        }

        httpRequest();

    },[config,url,method,itemId]);

    return {data,httpConfig,loading,error}
}