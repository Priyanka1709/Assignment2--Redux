import { join } from 'path';
import apiConfig from './apiConfig';

class ApiHelper {
    getAllCards() {
        return this.getRequest(join(apiConfig.baseUrl, apiConfig.cards));
    }
    getCardDetails(id) {
        return this.getRequest(join(apiConfig.baseUrl, apiConfig.cards, id));
    }
    postCardDetails(id, payload) {
        return this.postRequest(join(apiConfig.baseUrl, apiConfig.cards, id), payload);
    }
    getImage(imageUrl) {
        return join(apiConfig.baseUrl, apiConfig.images, imageUrl);
    }
    getRequest(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => data)
            .catch(() => {
                return {
                    error: 'Error while retrieving data',
                };
            });
    }
    postRequest(url, payload) {
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => data)
            .catch(() => {
                return {
                    error: 'Error while posting data',
                };
            });
    }
}

export default new ApiHelper();
