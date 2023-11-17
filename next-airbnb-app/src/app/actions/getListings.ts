import prisma from "@/libs/prismadb";

export type ILisitngParams = {
  userId?: string;
};

export default async function getListings(params: ILisitngParams) {
  try {
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
