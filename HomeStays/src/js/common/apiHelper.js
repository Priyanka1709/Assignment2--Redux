import { join } from 'path';
import apiConfig from './apiConfig';

export function getAllCards() {
    return getRequest(join(apiConfig.baseUrl, apiConfig.cards));
}

export function getCardDetails(id) {
    return getRequest(join(apiConfig.baseUrl, apiConfig.cards, id));
}

export function postCardDetails(id, payload) {
    return postRequest(join(apiConfig.baseUrl, apiConfig.cards, id), payload);
}

export function getImage(imageUrl) {
    return join(apiConfig.baseUrl, apiConfig.images, imageUrl);
}

function getRequest(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
}

function postRequest(url, payload) {
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => data);
}
