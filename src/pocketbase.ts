import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const landingPageId = 'umdewc6a2fwsq7d'

const getImageUrl = ({ collection, filename }:{collection:any, filename:string}) => pb.files.getUrl(collection, filename)

const getPage = async () => {
  await pb.admins.authWithPassword('eric.gathoni@yellowpageskenya.com', 'CDz5pFLmm3thaFZ');
  const record = await pb.collection("landing_page").getOne(landingPageId, { expand: 'style, site_details, hero, hero.image,hero.multiple_content, pages, pages.page_image, pages.card_grid, pages.card_grid.image, pages.multiple_content,pages.multiple_content.image,pages.multiple_content.card_grid,pages.multiple_content.card_grid.image' });
  return record;
}

export { getImageUrl, getPage }