import axios from "axios";
//{firstName: '', variationName: '', eco: '', fen: '', moves: ''}
export const getVariations = (name, eco) => {
  return async (dispatch) => {
    return fetchVariations(name, eco)
      .then((res) => {
        const variation = [];
        res.forEach((opening) => {
          const obj = {
            name: opening.name,
            eco: opening.eco,
            fen: opening.fen,
            moves: opening.moves,
            an: opening.an,
            hasCont: opening.hasCont,
          };

          variation.push(obj);
        });
        dispatch(fetchVariationsSuccess(variation));
      })
      .catch((error) => console.log(error));
  };
};

async function fetchVariations(name, eco) {
  const response = await axios.get(
    "http://localhost:5000/openings/variations",
    {
      params: {
        firstName: name,
        eco: eco,
      },
    }
  );
  return response.data;
}

const fetchVariationsSuccess = (res) => {
  return {
    type: "FETCH_OPENING_INFO_SUCCESS",
    payload: res,
  };
};
