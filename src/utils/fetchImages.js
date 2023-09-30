import { createClient } from 'pexels';

export default async function fetchImages() {
  const client = createClient(
    'eEMGJ5BZP1TmF23wWwuwBbAMh9oPN6kZiz2PcmzK4rYfI9jEz0g6ro20',
  );

  const query = 'train';

  const imageRequest = {
    page: 1,
    per_page: 15,
    photos: [
      {
        id: 2101790,
        width: 4000,
        height: 6000,
        url: 'https://www.pexels.com/photo/train-2101790/',
        photographer: 'Febi Ariyanto',
        photographer_url: 'https://www.pexels.com/@febi-ariyanto-1108087',
        photographer_id: 1108087,
        avg_color: '#806760',
        src: {
          original:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg',
          large2x:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2101790/pexels-photo-2101790.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Train',
      },
      {
        id: 2832046,
        width: 3643,
        height: 5169,
        url: 'https://www.pexels.com/photo/brown-train-railway-2832046/',
        photographer: 'Felix Mittermeier',
        photographer_url: 'https://www.pexels.com/@felixmittermeier',
        photographer_id: 344572,
        avg_color: '#47443D',
        src: {
          original:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg',
          large2x:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2832046/pexels-photo-2832046.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Brown Train Railway',
      },
      {
        id: 543223,
        width: 4032,
        height: 3024,
        url: 'https://www.pexels.com/photo/train-window-side-543223/',
        photographer: 'Daniel Frese',
        photographer_url: 'https://www.pexels.com/@daniel',
        photographer_id: 493,
        avg_color: '#7C796C',
        src: {
          original:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg',
          large2x:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/543223/pexels-photo-543223.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Train Window Side',
      },
      {
        id: 1463008,
        width: 3072,
        height: 4096,
        url: 'https://www.pexels.com/photo/gray-train-parking-in-train-station-1463008/',
        photographer: 'Piyush Arora',
        photographer_url: 'https://www.pexels.com/@piyush-arora-654655',
        photographer_id: 654655,
        avg_color: '#7B7063',
        src: {
          original:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg',
          large2x:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/1463008/pexels-photo-1463008.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Gray Train Parking in Train Station',
      },
      {
        id: 3848896,
        width: 3648,
        height: 5472,
        url: 'https://www.pexels.com/photo/unrecognizable-people-in-subway-platform-near-train-3848896/',
        photographer: 'Maxim Titov',
        photographer_url: 'https://www.pexels.com/@fearvi',
        photographer_id: 2195383,
        avg_color: '#979592',
        src: {
          original:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg',
          large2x:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/3848896/pexels-photo-3848896.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'From above of anonymous people in casual wear in subway platform near train',
      },
      {
        id: 2555561,
        width: 3067,
        height: 3834,
        url: 'https://www.pexels.com/photo/moving-train-2555561/',
        photographer: 'Matthew DeVries',
        photographer_url: 'https://www.pexels.com/@mattdvphotography',
        photographer_id: 1313990,
        avg_color: '#3A483B',
        src: {
          original:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg',
          large2x:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2555561/pexels-photo-2555561.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'moving train',
      },
      {
        id: 507410,
        width: 5692,
        height: 3800,
        url: 'https://www.pexels.com/photo/train-with-smoke-507410/',
        photographer: 'Gabriela Palai',
        photographer_url: 'https://www.pexels.com/@gabriela-palai-129458',
        photographer_id: 129458,
        avg_color: '#78736C',
        src: {
          original:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg',
          large2x:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Train With Smoke',
      },
      {
        id: 5257779,
        width: 6720,
        height: 4480,
        url: 'https://www.pexels.com/photo/man-in-a-costume-at-the-train-station-5257779/',
        photographer: 'T Leish',
        photographer_url: 'https://www.pexels.com/@leish',
        photographer_id: 3427041,
        avg_color: '#6F6363',
        src: {
          original:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg',
          large2x:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Man In A Costume At The Train Station',
      },
      {
        id: 2929262,
        width: 4000,
        height: 5000,
        url: 'https://www.pexels.com/photo/person-riding-in-red-train-2929262/',
        photographer: 'JACK REDGATE',
        photographer_url: 'https://www.pexels.com/@jack-redgate-333633',
        photographer_id: 333633,
        avg_color: '#948572',
        src: {
          original:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg',
          large2x:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2929262/pexels-photo-2929262.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Person Riding in Red Train',
      },
      {
        id: 3358967,
        width: 5304,
        height: 7952,
        url: 'https://www.pexels.com/photo/moving-train-photo-3358967/',
        photographer: 'Erik',
        photographer_url: 'https://www.pexels.com/@tracingstories',
        photographer_id: 1785756,
        avg_color: '#4C4242',
        src: {
          original:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg',
          large2x:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Moving Train Photo',
      },
      {
        id: 5641969,
        width: 4377,
        height: 5472,
        url: 'https://www.pexels.com/photo/railway-bridge-over-river-in-mountain-valley-5641969/',
        photographer: 'Sami Anas',
        photographer_url: 'https://www.pexels.com/@samianas',
        photographer_id: 3110837,
        avg_color: '#4A514E',
        src: {
          original:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg',
          large2x:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/5641969/pexels-photo-5641969.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Railway bridge over river in mountain valley',
      },
      {
        id: 1768749,
        width: 4416,
        height: 3312,
        url: 'https://www.pexels.com/photo/people-riding-the-train-1768749/',
        photographer: 'Felipe Cardoso',
        photographer_url: 'https://www.pexels.com/@felipe-cardoso-861539',
        photographer_id: 861539,
        avg_color: '#3F3F3F',
        src: {
          original:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg',
          large2x:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/1768749/pexels-photo-1768749.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'People Riding The Train',
      },
      {
        id: 1822590,
        width: 3817,
        height: 4771,
        url: 'https://www.pexels.com/photo/photo-of-train-1822590/',
        photographer: 'Lucas  Prado',
        photographer_url: 'https://www.pexels.com/@prado-art',
        photographer_id: 207116,
        avg_color: '#756D6D',
        src: {
          original:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg',
          large2x:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/1822590/pexels-photo-1822590.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Photo Of Train',
      },
      {
        id: 2569246,
        width: 4000,
        height: 6000,
        url: 'https://www.pexels.com/photo/train-station-2569246/',
        photographer: 'Luis Leon',
        photographer_url: 'https://www.pexels.com/@luis-leon-1223645',
        photographer_id: 1223645,
        avg_color: '#35464D',
        src: {
          original:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg',
          large2x:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2569246/pexels-photo-2569246.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Train Station',
      },
      {
        id: 2569249,
        width: 4000,
        height: 6000,
        url: 'https://www.pexels.com/photo/train-2569249/',
        photographer: 'Luis Leon',
        photographer_url: 'https://www.pexels.com/@luis-leon-1223645',
        photographer_id: 1223645,
        avg_color: '#51646E',
        src: {
          original:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg',
          large2x:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          large:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          medium:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&h=350',
          small:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&h=130',
          portrait:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          landscape:
            'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
          tiny: 'https://images.pexels.com/photos/2569249/pexels-photo-2569249.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        },
        liked: false,
        alt: 'Train',
      },
    ],
    total_results: 8000,
    next_page:
      'https://api.pexels.com/v1/search/?page=2&per_page=15&query=train',
  };

  // TODO: Error handling
  // const imageRequest = await client.photos.search({ query, per_page: 15 });

  const images = [...imageRequest.photos].map((image) => ({
    author: image.photographer,
    url: image.src.large,
    id: crypto.randomUUID(),
  }));

  return images;
}
