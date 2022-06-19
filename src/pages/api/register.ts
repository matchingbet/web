import {NextApiRequest, NextApiResponse} from "next";
import {User} from "../../models/User";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    const body = req.body;

    console.log(body);
}
