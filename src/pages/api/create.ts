import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse){
    const {title, content} = request.body
    try {
        await prisma.note.create({
            data: {
                title,
                content
            }
        })
        response.status(200).json({message: 'Note Created'})
    } catch (error) {
        console.log("Failure")
    }
}