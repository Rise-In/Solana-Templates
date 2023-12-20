import * as web3 from "@solana/web3.js";
import { Review } from "@/models/Review";

export const fetchReviews = async (
    REVIEW_PROGRAM_ID: string,
    connection: web3.Connection
) => {
    let account_list: web3.PublicKey[] = [];

    const accounts = await connection.getProgramAccounts(
        new web3.PublicKey(REVIEW_PROGRAM_ID),
        {
            dataSlice: { offset: 2, length: 18 },
            filters: [],
        }
    );
    account_list = accounts.map((account) => account.pubkey);

    const keys = await connection.getMultipleAccountsInfo(account_list);

    const reviews = keys.reduce((accum: Review[], account) => {
        const rew = Review.deserialize(account?.data);
        if (!rew) {
            return accum;
        }

        return [...accum, rew];
    }, []);
    console.log(reviews);

    return reviews;
};
