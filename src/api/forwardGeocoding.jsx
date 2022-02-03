import axios from "axios";

async function getCoordinatesOfAddress(address) {
    const response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json? ",
        {
            params: {
                key: "c3b70466052c4a8ea0a6b5c6394286e4",
                q: address,
                language: "en"
            }
        }
    );

    return response;
}

export default getCoordinatesOfAddress;