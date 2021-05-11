
import axios from 'axios'




export const getNames =() => {
    return  dispatch => {
       return fetchNames()
            .then(json => {
                const openingIds = []
                json.forEach((id) => {
                    const obj = {firstName: id.name, eco: id.eco}
                    openingIds.push(obj)
                })
               
                
                dispatch(fetchNameSuccess(openingIds))
            })
            .catch(error => dispatch(fetchNamesFailure(error)))
    }
}

const fetchNameSuccess = (openingIds) => {
        return { 
                type: "FETCH_NAMES_SUCCESS",
                payload: openingIds
                }
                        
}



const fetchNamesFailure = error => {
    return {
        type: "FETCH_NAMES_FAILURE",
        payload: { error }
    }
}


async function fetchNames() {
    const response = await axios.get('http://localhost:5000/openings/main-opening-names')
    
    return response.data;
}

async function fetchVariations(name, eco) {
    const response = await axios.get('http://localhost:5000/api/eco/openingIds/variations',
    {params: { name: "name",
               eco: "eco"
            }
    })
    return response.data
}