import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client= sanityClient({
   projectId: "3d9zhdm5",
    dataset: 'production',
    apiVersion: "2022-07-17",
    useCdn: true,
    token:
    "skhBMDiMh5GwbXLR7QvTTnWW9HPQ6akJ5BDsT5sDlRqmNUF2RUp4TuO6wEzO87YZ5LPPFwtJS9Ji9tIHE79MuWeGiKX03maA5AXDSYwupeU56XGNL86DaehRQjwq90QxjG1F74klf1rZG99kwyw5MmSZshoqc0ArurcFcBZnT1Ey6SX7ar5d"
});

const builder= ImageUrlBuilder(client);

export const urlFor= (source) => builder.image(source)