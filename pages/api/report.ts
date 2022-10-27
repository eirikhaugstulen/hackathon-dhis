// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    var data = JSON.stringify(req.body);

    var config = {
        method: 'post',
        url: 'https://sr.winterop.cloud/api/self-reporting/vital-signs',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            // @ts-ignore
            res.status(200).send('OK')
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send(error)
        });
}
