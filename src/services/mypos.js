import dataRepository from "../repository/dataRepository";

export default {
    async getPosition(lon, lat) {
        const pos = await dataRepository.getPosition(lon,lat);
        return pos;
    }
}