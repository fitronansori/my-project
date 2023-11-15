import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

type Iparams = {
  listingId: string;
};

const ListingPage = async ({ params }: { params: Iparams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};
export default ListingPage;
