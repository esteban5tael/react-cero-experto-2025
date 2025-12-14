import { heroApi } from "../api";
import type { HeroesSummaryInformationResponseInterface } from "../interfaces";

export const getHeroesSummaryAction = async () => {
    const { data } =
        await heroApi.get<HeroesSummaryInformationResponseInterface>(
            "/summary"
        );

    return data;
};
