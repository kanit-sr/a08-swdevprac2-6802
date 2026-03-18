import { VenueJson, VenueItem } from "../../interface";
import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venues = await venuesJson;

  return (
    <div className="flex flex-col gap-4 px-4">
      {venues.data.slice(0, 3).map((item: VenueItem) => (
        <Card
          key={item.id}
          venueName={item.name}
          imgSrc={item.picture}
          href={`/venue/${item.id}`}
        />
      ))}
    </div>
  );
}