const photos = [
  { src: 'Ny/FB_IMG_1692224671426.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224674758.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163005.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20230815_221417.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162937.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921104404.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224613217.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162929.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162917.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162922.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224704443.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224779502.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20230815_221427.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163001.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162857.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162920.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162935.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224616391.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921069962.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163000.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162945.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224664152.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162927.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921116796.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162950.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224682258.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224791927.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224772562.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162904.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921153452.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162939.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224765077.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162906.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162952.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162854.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162940.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162907.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162954.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162958.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163002.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224794025.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162948.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224646245.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163006.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162912.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162858.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921132710.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162909.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162910.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921098521.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162855.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162955.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224660264.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224604658.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_163003.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162944.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162957.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162900.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1691921090927.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162919.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162925.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162942.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162902.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162915.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224656082.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20230815_221414.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224589911.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20230815_221425.jpg', width: 1080, height: 1620 },
  { src: 'Ny/FB_IMG_1692224625957.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20230815_221419.jpg', width: 1080, height: 1620 },
  { src: 'Ny/IMG_20240212_162930.jpg', width: 1080, height: 1620 }
]

export default photos;
